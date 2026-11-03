// Solutions — Jobseeker Partners
// Generated from the design artboard Partners.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, lang: 'EN', si: 0 };
    this.paused = false;
    this.CLIENTS = [
      ['Alfamart', 'aac027953cffa08e93c5427d123a6e9a'],
      ['Super Indo', '6a46d25389b849ee192dfda89ea93deb'],
      ['Indomaret', '7bce058060ce5d73ab2f18f43e88ed26'],
      ['Alfamidi', '437b04cddc51dc54506617ee6c5397dd'],
      ['Ranch Market', 'c73db4a2e84f0be7b09ba11790e93179'],
      ['Mitra Keluarga', 'acc184efccfeb8469aae7d4baabdd58d'],
      ['Rohto', '4436be89874b352373d55d3a5b02faa2'],
      ['Paramount Land', '4cc1c6df3d161063fe49f92bf4ec2df7'],
      ['FitHub', '1f30884c024ee18f1be73c2015c5653d'],
      ['Varion Coffee', 'c0c6c0666d1f3815067bac98ccc101e9'],
      ['Deca Group', '5796dfaf43f6cccb3b918fc27eb5c797'],
      ['ANJ', 'c501315ecbe3518e9aa91af9415b78c6'],
      ['Julong', '56977feafc833cb26a8a3ccdfb04d4dd'],
      ['IDstar', '3975b795442cc9cd8e6e726aea357ef7'],
      ['Avery', '5e1ed31dfb40c6db4fcc80d4e95c8f11'],
      ['Shelter', '2edbaf5ad9687f5009dd303fc208c272'],
      ['CBN', 'c06dd2c4c892715068c5046c55212470'],
      ['Dan+Dan', '68ec4ade1c0b76df480e1793602af273'],
    ].map(([alt, id]) => ({ alt, src: '/_blob/' + id, hidden: false }));
    this.STEPS = [
      {
        t: 'Post a Job',
        d: 'Open the app, fill a quick form (role, location, salary), publish. Done in 2 minutes.',
        screen: 'New job',
      },
      {
        t: 'Review Candidates',
        d: 'Instant notifications when applications arrive. Review profiles and video resumes.',
        screen: 'Candidates',
      },
      {
        t: 'Contact & Hire',
        d: 'Chat in-app or call candidates directly. Schedule interviews without leaving the app.',
        screen: 'Chat',
      },
    ];
  }
  componentDidMount() {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) this.cycle();
  }
  componentWillUnmount() {
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
    if (this.t) clearInterval(this.t);
  }
  cycle() {
    if (this.t) clearInterval(this.t);
    this.t = setInterval(() => {
      if (!this.paused) this.setState({ si: (this.state.si + 1) % this.STEPS.length });
    }, 5000);
  }
  amVals() {
    const s = this.state;
    if (!this._amInit) {
      this._amInit = true;
      this._amT1 = setTimeout(() => this.setState({ amHint: true }), 2500);
      this._amT2 = setTimeout(() => this.setState({ amHint: false }), 9000);
    }
    const R = [
      {
        k: ['solution', 'fit', 'product', 'which'],
        t: 'Tell me a bit about your company and I can point you to the right solution. Here is an overview of all seven products.',
        link: 'See all solutions',
        href: '/solutions/',
      },
      {
        k: ['price', 'cost', 'pricing', 'harga', 'biaya'],
        t: 'HRMS is priced per user per month, and Jobseeker Partners is free to post with optional paid boosts. You can compare plans here.',
        link: 'View pricing',
        href: '/pricing/',
      },
      {
        k: ['job', 'kerja', 'loker', 'apply', 'lamar'],
        t: 'Great! Jobseeker App has verified jobs near you, and you can apply with a 30-second video resume.',
        link: 'Get Jobseeker App',
        href: '/app/',
      },
      {
        k: ['hire', 'hiring', 'staff', 'karyawan', 'rekrut'],
        t: 'For fast, self-service hiring try Jobseeker Partners. For larger teams, our Talent Augmentation team can handle it end-to-end.',
        link: 'Explore Jobseeker Partners',
        href: '/partners/',
      },
      {
        k: ['course', 'training', 'belajar', 'skill'],
        t: 'Jobseeker Academy has practitioner-led courses with certificates — from digital skills to F&B.',
        link: 'Explore Academy',
        href: '/academy/',
      },
    ];
    const reply = (q) => {
      const l = q.toLowerCase();
      const r = R.find((x) => x.k.some((k) => l.includes(k)));
      return (
        r || {
          t: 'Good question! Our team can walk you through it in a free 30-minute demo.',
          link: 'Schedule a demo',
          href: '/demo/',
        }
      );
    };
    const send = (text) => {
      const q = (text || '').trim();
      if (!q || this.state.amTyping) return;
      const msgs = (this.state.amMsgs || []).concat({ who: 'me', t: q });
      this.setState({ amMsgs: msgs, amQ: '', amTyping: true });
      clearTimeout(this._amT3);
      this._amT3 = setTimeout(() => {
        const r = reply(q);
        this.setState({
          amTyping: false,
          amMsgs: (this.state.amMsgs || []).concat({ who: 'bot', t: r.t, link: r.link, href: r.href }),
        });
      }, 1100);
    };
    const SUGS = ['Which solution fits my company?', 'How much does HRMS cost?', "I'm looking for a job"];
    const msgs = s.amMsgs || [];
    return {
      amOpen: !!s.amOpen,
      amHint: !!s.amHint && !s.amOpen,
      amToggle: () => this.setState({ amOpen: !s.amOpen, amHint: false }),
      amClose: () => this.setState({ amOpen: false }),
      amMsgs: msgs.map((m) => ({
        who: m.who,
        t: m.t,
        hasLink: !!m.link,
        link: m.link || '',
        href: m.href || '#',
      })),
      amTyping: !!s.amTyping,
      amShowSugs: msgs.length === 0,
      amSugs: SUGS.map((t) => ({ t, go: () => send(t) })),
      amQ: s.amQ || '',
      amOnQ: (e) => this.setState({ amQ: e.target.value }),
      amSubmit: (e) => {
        if (e && e.preventDefault) e.preventDefault();
        send(this.state.amQ);
      },
    };
  }
  renderVals() {
    const si = this.state.si;
    return {
      ...this.amVals(),
      menuOpen: this.state.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      clients: this.CLIENTS.concat(this.CLIENTS.map((c) => ({ ...c, alt: '', hidden: true }))),
      steps: this.STEPS.map((s, i) => ({
        ...s,
        n: i + 1,
        on: i === si,
        cls: i === si ? 'on' : i < si ? 'done' : '',
        isPost: i === 0,
        isReview: i === 1,
        isHire: i === 2,
        pick: () => {
          this.setState({ si: i });
          this.cycle();
        },
      })),
      railFill: { height: (si / (this.STEPS.length - 1)) * 100 + '%' },
      sPause: () => {
        this.paused = true;
      },
      sResume: () => {
        this.paused = false;
      },
      isID: this.state.lang === 'ID',
      isEN: this.state.lang === 'EN',
      setID: () => this.setState({ lang: 'ID' }),
      setEN: () => this.setState({ lang: 'EN' }),
    };
  }
}

Page.template = (v) => (
  <>
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        color: '#181d27',
        background: '#ffffff',
        minHeight: '100vh',
      }}
    >
      <header className="nav">
        <div
          className="wrap navwrap"
          style={{ height: '72px', display: 'flex', alignItems: 'center', gap: '20px' }}
        >
          <a
            href="/v1/"
            aria-label="Jobseeker Company home"
            style={{ display: 'flex', alignItems: 'center', flex: 'none' }}
          >
            <img
              className="brandlogo"
              src="/images/1976305d6893a6ac268c4f73d828678d.png"
              alt="Jobseeker Company"
              style={{ display: 'block', height: '40px', width: 'auto' }}
            />
          </a>
          <nav className="navlinks" aria-label="Main" style={{ marginLeft: '8px' }}>
            <div className="nitem">
              <a className="navlink nbtn" href="/solutions/" aria-haspopup="true">
                {'Solutions '}
                <svg
                  className="chev"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              <div className="dd mega">
                <div className="ddin">
                  <div className="mcols">
                    <div className="mcol">
                      <span className="mh">{'By product'}</span>{' '}
                      <a className="mi" href="/hrms/">
                        <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                        <span>
                          <b>{'HRMS'}</b>
                          <small>{'Recruitment, attendance & payroll in one platform'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi" href="/partners/">
                        <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                        <span>
                          <b>{'Jobseeker Partners'}</b>
                          <small>{'Self-service, cost-efficient hiring'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi" href="/talent/">
                        <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                        <span>
                          <b>{'Talent Augmentation'}</b>
                          <small>{'Workforce management, hiring to daily ops'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi" href="/executive/">
                        <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                        <span>
                          <b>{'Executive Search'}</b>
                          <small>{'Strategic hiring for leadership roles'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi" href="/training/">
                        <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
                        <span>
                          <b>{'Corporate Training'}</b>
                          <small>{'Skill development & certification'}</small>
                        </span>
                      </a>
                    </div>
                    <div className="mcol">
                      <span className="mh">{'By industry'}</span>{' '}
                      <a className="mi sm" href="#">
                        <span className="mic">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M3 21V10l6 4V10l6 4V6l6 4v11z" />
                          </svg>
                        </span>
                        <span>
                          <b>{'Manufacturing'}</b>
                          <small>{'Staff production lines at scale'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi sm" href="#">
                        <span className="mic">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6 6h15l-1.5 9h-12z" />
                            <path d="M6 6L5 3H2" />
                            <circle cx="9" cy="20" r="1.5" />
                            <circle cx="18" cy="20" r="1.5" />
                          </svg>
                        </span>
                        <span>
                          <b>{'Retail'}</b>
                          <small>{'Store crew & cashiers, fast'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi sm" href="#">
                        <span className="mic">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
                            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
                            <path d="M6 2v3M10 2v3M14 2v3" />
                          </svg>
                        </span>
                        <span>
                          <b>{'F&B'}</b>
                          <small>{'Kitchen, barista & service teams'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi sm" href="#">
                        <span className="mic">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                            <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" />
                          </svg>
                        </span>
                        <span>
                          <b>{'BPO & Service'}</b>
                          <small>{'Agents and support staff on demand'}</small>
                        </span>
                      </a>{' '}
                      <a className="mi sm" href="#">
                        <span className="mic">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M1 4h14v12H1zM15 9h4l4 4v3h-8" />
                            <circle cx="6" cy="18.5" r="2" />
                            <circle cx="18" cy="18.5" r="2" />
                          </svg>
                        </span>
                        <span>
                          <b>{'Logistics'}</b>
                          <small>{'Warehouse, drivers & riders'}</small>
                        </span>
                      </a>
                    </div>
                    <div className="mcol">
                      <span className="mh">{'Featured'}</span>{' '}
                      <a className="feat" href="/compare/" style={{ background: '#f2f3f8' }}>
                        <span className="mic" style={{ background: '#ffffff', color: '#050774' }}>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M3 3h7v18H3zM14 3h7v18h-7z" />
                          </svg>
                        </span>
                        <b>{'Compare solutions'}</b>
                        <small>{'Find the right fit for your team'}</small>
                      </a>{' '}
                      <a className="feat" href="/expert/" style={{ background: '#fef2f9' }}>
                        <span className="mic" style={{ background: '#ffffff', color: '#cd0071' }}>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        </span>
                        <b>{'Talk to an expert'}</b>
                        <small>{'Get advice from our team'}</small>
                      </a>
                    </div>
                  </div>
                  <a className="mall" href="/solutions/">
                    {'See all solutions '}
                    <span aria-hidden="true">{'→'}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nitem">
              <a className="navlink nbtn" href="/v1/" aria-haspopup="true">
                {'For Jobseekers '}
                <svg
                  className="chev"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              <div className="dd">
                <div className="ddin" style={{ width: '320px' }}>
                  <a className="mi" href="/app/">
                    <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                    <span>
                      <b>{'Jobseeker App'}</b>
                      <small>{'Verified jobs, apply with video resumes'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi" href="/academy/">
                    <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
                    <span>
                      <b>{'Jobseeker Academy'}</b>
                      <small>{'Training programs to grow your skills'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi" href="/jobs/">
                    <span
                      className="mic"
                      style={{ width: '36px', height: '36px', background: '#ecfdf3', color: '#067647' }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Latest job preview'}</b>
                      <small>{'Browse the newest openings'}</small>
                    </span>
                  </a>{' '}
                  <a className="mall" href="/hub/">
                    {'See all for jobseekers '}
                    <span aria-hidden="true">{'→'}</span>
                  </a>
                </div>
              </div>
            </div>
            <a className="navlink" href="/customers/">
              {'Customers'}
            </a>{' '}
            <div className="nitem">
              <a className="navlink nbtn" href="/resources/" aria-haspopup="true">
                {'Resources '}
                <svg
                  className="chev"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              <div className="dd">
                <div className="ddin" style={{ width: '300px' }}>
                  <a className="mi sm" href="/blog/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Blog'}</b>
                      <small>{'Hiring & HR insights'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi sm" href="/guides/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" />
                        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Guides'}</b>
                      <small>{'Step-by-step playbooks'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi sm" href="/templates/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Templates'}</b>
                      <small>{'Job posts, offers & HR docs'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi sm" href="/glossary/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Glossary'}</b>
                      <small>{'HR terms, explained simply'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi sm" href="/events/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 10h18M8 3v4M16 3v4" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Events'}</b>
                      <small>{'Webinars & meetups'}</small>
                    </span>
                  </a>{' '}
                  <a className="mall" href="/resources/">
                    {'See all resources '}
                    <span aria-hidden="true">{'→'}</span>
                  </a>
                </div>
              </div>
            </div>
            <a className="navlink" href="/pricing/">
              {'Pricing'}
            </a>{' '}
            <div className="nitem">
              <a className="navlink nbtn" href="/about/" aria-haspopup="true">
                {'About '}
                <svg
                  className="chev"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              <div className="dd dd-r">
                <div className="ddin" style={{ width: '300px' }}>
                  <a className="mi sm" href="/story/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v4l3 2" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Our story'}</b>
                      <small>{'Why we connect people with work'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi sm" href="/leadership/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="9" cy="8" r="3.5" />
                        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5.5 5.5 0 0 1 3.5 6" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Leadership'}</b>
                      <small>{'The team behind Jobseeker'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi sm" href="/press/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 4h12v16H6a2 2 0 0 1-2-2z" />
                        <path d="M16 8h4v10a2 2 0 0 1-2 2M8 8h4M8 12h4" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Press'}</b>
                      <small>{'News & media coverage'}</small>
                    </span>
                  </a>{' '}
                  <a className="mi sm" href="/partner-program/">
                    <span className="mic">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M8 12l3 3 5-6" />
                        <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4z" />
                      </svg>
                    </span>
                    <span>
                      <b>{'Partners'}</b>
                      <small>{'Who we work with'}</small>
                    </span>
                  </a>{' '}
                  <a className="mall" href="/about/">
                    {'See all about '}
                    <span aria-hidden="true">{'→'}</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div
            className="navcta"
            style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}
          >
            <a
              className="btn btn-ghost"
              href="https://wa.me/6281318817887"
              style={{ minHeight: '44px', padding: '0 18px', fontSize: '14px' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
                <path d="M9 9.5c.3 1.6 1.9 3.9 4.3 4.9l1.2-1.2 2 .9c-.2 1.2-1.2 2-2.4 1.9-3.4-.4-6.4-3.4-6.8-6.8-.1-1.2.7-2.2 1.9-2.4l.9 2z" />
              </svg>
              {'\n        WhatsApp Sales\n      '}
            </a>{' '}
            <a
              className="btn btn-primary"
              href="/demo/"
              style={{ minHeight: '44px', padding: '0 18px', fontSize: '14px' }}
            >
              {'Schedule a Demo'}
            </a>
          </div>
          <button
            className="menubtn"
            type="button"
            aria-label="Open menu"
            aria-expanded={v.menuOpen}
            onClick={v.toggleMenu}
            style={{
              marginLeft: 'auto',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: '1px solid #e9eaeb',
              background: '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#050774',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
          </button>
        </div>
        {v.menuOpen ? (
          <>
            <div
              className="wrap mmenu"
              style={{
                paddingBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                animation: 'rise .35s ease both',
              }}
            >
              <details className="macc">
                <summary>{'Solutions'}</summary>
                <div className="msub">
                  <span className="mh">{'By product'}</span>{' '}
                  <a href="/hrms/" onClick={v.closeMenu}>
                    {'HRMS'}
                  </a>
                  <a href="/partners/" onClick={v.closeMenu}>
                    {'Jobseeker Partners'}
                  </a>
                  <a href="/talent/" onClick={v.closeMenu}>
                    {'Talent Augmentation'}
                  </a>
                  <a href="/executive/" onClick={v.closeMenu}>
                    {'Executive Search'}
                  </a>
                  <a href="/training/" onClick={v.closeMenu}>
                    {'Corporate Training'}
                  </a>{' '}
                  <span className="mh">{'By industry'}</span> <a href="#">{'Manufacturing'}</a>
                  <a href="#">{'Retail'}</a>
                  <a href="#">{'F&B'}</a>
                  <a href="#">{'BPO & Service'}</a>
                  <a href="#">{'Logistics'}</a> <span className="mh">{'Featured'}</span>{' '}
                  <a href="/compare/" onClick={v.closeMenu}>
                    {'Compare solutions'}
                  </a>
                  <a href="/expert/" onClick={v.closeMenu}>
                    {'Talk to an expert'}
                  </a>{' '}
                  <a className="mall" href="/solutions/" onClick={v.closeMenu}>
                    {'See all solutions →'}
                  </a>
                </div>
              </details>
              <details className="macc">
                <summary>{'For Jobseekers'}</summary>
                <div className="msub">
                  <a href="/app/" onClick={v.closeMenu}>
                    {'Jobseeker App'}
                  </a>
                  <a href="/academy/" onClick={v.closeMenu}>
                    {'Jobseeker Academy'}
                  </a>
                  <a href="/jobs/" onClick={v.closeMenu}>
                    {'Latest job preview'}
                  </a>{' '}
                  <a className="mall" href="/hub/" onClick={v.closeMenu}>
                    {'See all for jobseekers →'}
                  </a>
                </div>
              </details>
              <a className="navlink" href="/customers/" onClick={v.closeMenu}>
                {'Customers'}
              </a>
              <details className="macc">
                <summary>{'Resources'}</summary>
                <div className="msub">
                  <a href="/blog/">{'Blog'}</a>
                  <a href="/guides/">{'Guides'}</a>
                  <a href="/templates/">{'Templates'}</a>
                  <a href="/glossary/">{'Glossary'}</a>
                  <a href="/events/">{'Events'}</a>{' '}
                  <a className="mall" href="/resources/">
                    {'See all resources →'}
                  </a>
                </div>
              </details>
              <a className="navlink" href="/pricing/" onClick={v.closeMenu}>
                {'Pricing'}
              </a>
              <details className="macc">
                <summary>{'About'}</summary>
                <div className="msub">
                  <a href="/story/">{'Our story'}</a>
                  <a href="/leadership/">{'Leadership'}</a>
                  <a href="/press/">{'Press'}</a>
                  <a href="/partner-program/">{'Partners'}</a>{' '}
                  <a className="mall" href="/about/" onClick={v.closeMenu}>
                    {'See all about →'}
                  </a>
                </div>
              </details>
              <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                <a className="btn btn-ghost" href="https://wa.me/6281318817887">
                  {'WhatsApp Sales'}
                </a>{' '}
                <a className="btn btn-primary" href="/demo/" onClick={v.closeMenu}>
                  {'Schedule a Demo'}
                </a>
              </div>
            </div>
          </>
        ) : null}
      </header>
      <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="pgrid-bg" aria-hidden="true" />
        <div
          className="wrap phero"
          style={{ position: 'relative', paddingTop: '72px', paddingBottom: '88px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <nav className="crumb rise d1" aria-label="Breadcrumb">
              <a href="/v1/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/solutions/">{'Solutions'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Jobseeker Partners'}</b>
            </nav>
            <span
              className="rise d1"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 14px 6px 6px',
                borderRadius: '999px',
                background: '#ffffff',
                boxShadow: '0 0 0 1px #e9eaeb, 0 6px 16px -10px rgba(0,49,179,.3)',
                fontSize: '13px',
                fontWeight: '600',
                color: '#0031b3',
              }}
            >
              <img
                src="/images/2e0842aec39ea4bc17e6d544749982f9.png"
                alt=""
                style={{ width: '28px', height: '28px', borderRadius: '8px' }}
              />
              {'Jobseeker Partners · For SMEs\n      '}
            </span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '58px',
                lineHeight: '64px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#050774',
              }}
            >
              {'SME hiring, as easy as '}
              <span className="hlb">{'posting on social media.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '520px',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#535862',
              }}
            >
              {
                'Post jobs, review candidates, and hire new employees — all from your phone. A self-service platform for fast and cost-efficient hiring.'
              }
            </p>
            <div
              className="rise d4"
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <a className="btn pbtn" href="https://wa.me/6281318817887">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
                </svg>
                {'Onboarding via WhatsApp '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>
            </div>
            <div className="rise d5 stores">
              <a href="#" aria-label="Download on the App Store">
                <img src="/images/f67a83a01fce23124fe2b38912976391.svg" alt="Download on the App Store" />
              </a>{' '}
              <a href="#" aria-label="Get it on Google Play">
                <img src="/images/1ebef8361229ddc797a9a35153a6a3ff.svg" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="pvis rise d5">
            <span className="shape s1" aria-hidden="true" /> <span className="shape s2" aria-hidden="true" />{' '}
            <span className="shape s3" aria-hidden="true" /> <span className="shape s4" aria-hidden="true" />
            <div className="pvbg" aria-hidden="true" />
            <img
              className="pvimg"
              src="/images/7b8949a17ec144987ce2d2afe9a96f27.webp"
              alt="Jobseeker Partners app showing job posts and candidate profiles"
            />
            <div className="hbadge hb1">
              <span className="hbi" style={{ background: '#ecfdf3', color: '#067647' }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
                <b style={{ fontSize: '16px', color: '#181d27' }}>{'Free posting'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'pay only for premium'}</span>
              </span>
            </div>
            <div className="hbadge hb2">
              <span className="hbi" style={{ background: '#eaf1ff', color: '#0031b3' }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5.5 5.5 0 0 1 3.5 6" />
                </svg>
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
                <b style={{ fontSize: '16px', color: '#181d27' }}>{'3.9M+'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'verified candidates'}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '8px 0 80px' }}>
        <p
          className="wrap rv"
          style={{
            margin: '0 auto 24px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#535862',
          }}
        >
          {'Trusted by giants in the industry'}
        </p>
        <div className="marquee" aria-label="Customers">
          <div className="mtrack">
            {L(v.clients).map((c_0, i_0) => (
              <React.Fragment key={i_0}>
                <span className="clogo" aria-hidden={c_0?.hidden}>
                  <img src={A(c_0?.src)} alt={c_0?.alt} />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: '#fafafa', padding: '104px 0' }}>
        <div className="wrap">
          <div
            className="rv"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '14px',
              maxWidth: '720px',
              margin: '0 auto 48px',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'Sound familiar?'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '40px',
                lineHeight: '48px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#050774',
              }}
            >
              {"Hiring shouldn't slow your business down."}
            </h2>
          </div>
          <div className="pains rv-s">
            <div className="pain">
              <span className="pic" style={{ background: '#fef3f2', color: '#b42318' }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 8l4 4M21 8l-4 4" />
                </svg>
              </span>
              <h3>{'Low applicant quality'}</h3>
              <div className="bubble">
                {"“I've posted jobs everywhere, but most applicants aren't a fit.”"}
              </div>
            </div>
            <div className="pain">
              <span className="pic" style={{ background: '#fffaeb', color: '#b54708' }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6v2M12 16v2" />
                </svg>
              </span>
              <h3>{'Inefficient recruitment costs'}</h3>
              <div className="bubble">
                {'“Other job portals are expensive — and I only need 2–3 people.”'}
              </div>
            </div>
            <div className="pain">
              <span className="pic" style={{ background: '#fce6f2', color: '#940052' }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2 2M9 2h6" />
                </svg>
              </span>
              <h3>{'Screening is too slow'}</h3>
              <div className="bubble">
                {"“I don't have time to screen dozens of CVs — my business needs people now.”"}
              </div>
            </div>
          </div>
          <div className="psol rv">
            <img
              src="/images/2e0842aec39ea4bc17e6d544749982f9.png"
              alt=""
              style={{ width: '44px', height: '44px', borderRadius: '12px' }}
            />{' '}
            <span>{'We built Jobseeker Partners specifically for SMEs like you.'}</span>{' '}
            <svg
              className="psarr"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>
      <section id="how" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxWidth: '720px',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#cd0071',
            }}
          >
            {'How it works'}
          </span>
          <h2
            className="h2"
            style={{
              margin: '0',
              fontSize: '40px',
              lineHeight: '48px',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: '#050774',
            }}
          >
            {'From post to hire — in 3 steps.'}
          </h2>
        </div>
        <div className="how rv" onMouseEnter={v.sPause} onMouseLeave={v.sResume}>
          <div className="steps">
            <span className="srail" aria-hidden="true">
              <i style={S(v.railFill)} />
            </span>{' '}
            {L(v.steps).map((s_1, i_1) => (
              <React.Fragment key={i_1}>
                <button
                  type="button"
                  className={`step ${T(s_1?.cls)}`}
                  onClick={s_1?.pick}
                  aria-pressed={s_1?.on}
                >
                  <span className="snum">{T(s_1?.n)}</span>{' '}
                  <span className="stxt">
                    <b>{T(s_1?.t)}</b>
                    <span>{T(s_1?.d)}</span>
                  </span>
                </button>
              </React.Fragment>
            ))}
          </div>
          <div className="phonewrap">
            <div className="pblob" aria-hidden="true" />
            {L(v.steps).map((s_2, i_2) => (
              <React.Fragment key={i_2}>
                {s_2?.on ? (
                  <>
                    <div className="pscreen">
                      <div className="pnotch2" />
                      <div className="pstitle">
                        <b>{T(s_2?.screen)}</b>
                        <span className="pbadge">
                          {'Step '}
                          {T(s_2?.n)}
                        </span>
                      </div>
                      {s_2?.isPost ? (
                        <>
                          <div className="pform">
                            <label>
                              {'Role'}
                              <span className="pf typing">{'Barista'}</span>
                            </label>{' '}
                            <label>
                              {'Location'}
                              <span className="pf">{'Jakarta Selatan'}</span>
                            </label>{' '}
                            <label>
                              {'Salary'}
                              <span className="pf">{'Rp4.500.000 / month'}</span>
                            </label>{' '}
                            <span className="ppub">{'Publish job'}</span>{' '}
                            <span className="pdone">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#067647"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12l5 5L20 7" />
                              </svg>
                              {'Live in 2 minutes'}
                            </span>
                          </div>
                        </>
                      ) : null}{' '}
                      {s_2?.isReview ? (
                        <>
                          <div className="plist">
                            <div className="pnotif">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                              </svg>
                              {'New application · Barista'}
                            </div>
                            <div className="pc">
                              <span className="pav" style={{ background: '#ffe3f2', color: '#b8006a' }}>
                                {'PA'}
                              </span>
                              <span>
                                <b>{'Putu A.'}</b>
                                <small>{'Video resume · 1.2 km'}</small>
                              </span>
                              <span className="pplay">{'▶'}</span>
                            </div>
                            <div className="pc">
                              <span className="pav" style={{ background: '#e6e6f1', color: '#050774' }}>
                                {'RF'}
                              </span>
                              <span>
                                <b>{'Rina F.'}</b>
                                <small>{'Video resume · 2.0 km'}</small>
                              </span>
                              <span className="pplay">{'▶'}</span>
                            </div>
                            <div className="pc">
                              <span className="pav" style={{ background: '#e6f7e6', color: '#006600' }}>
                                {'DN'}
                              </span>
                              <span>
                                <b>{'Dimas N.'}</b>
                                <small>{'Profile · 3.1 km'}</small>
                              </span>
                              <span className="pplay">{'▶'}</span>
                            </div>
                          </div>
                        </>
                      ) : null}{' '}
                      {s_2?.isHire ? (
                        <>
                          <div className="pchat">
                            <div className="cb me">{'Hi Putu, are you free for an interview tomorrow?'}</div>
                            <div className="cb them">{"Yes, I'm available!"}</div>
                            <div className="cb sys">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x="3" y="5" width="18" height="16" rx="2" />
                                <path d="M3 10h18M8 3v4M16 3v4" />
                              </svg>
                              {'Interview · Tue 10:00'}
                            </div>
                            <div className="pacts">
                              <span>{'Call'}</span>
                              <span className="hire">{'Hire'}</span>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: '#f5f8ff', padding: '112px 0', overflow: 'hidden' }}>
        <div className="wrap">
          <div
            className="rv"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '14px',
              maxWidth: '760px',
              margin: '0 auto 56px',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'Features'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '40px',
                lineHeight: '48px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#050774',
              }}
            >
              {'Everything you need to hire — right from your phone.'}
            </h2>
          </div>
          <div className="feats">
            <div className="fcol rv-s">
              <div className="feat2">
                <span className="fi">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="6" y="2" width="12" height="20" rx="3" />
                    <path d="M11 18h2" />
                  </svg>
                </span>
                <div>
                  <h3>{'Mobile-first'}</h3>
                  <p>{'Built for SME owners who are busy on the ground.'}</p>
                </div>
              </div>
              <div className="feat2">
                <span className="fi">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <h3>{'Verified candidates'}</h3>
                  <p>{'Access 3.9M+ candidates with verified phone and email.'}</p>
                </div>
              </div>
            </div>
            <div className="fimg rv">
              <div className="fring" aria-hidden="true" />
              <img
                src="/images/6a7f5a9685d998fb6ee339f93a79dab0.webp"
                alt="Jobseeker Partners app: job list with candidate statuses"
              />
            </div>
            <div className="fcol rv-s">
              <div className="feat2">
                <span className="fi">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" />
                    <circle cx="7" cy="7" r="1.5" />
                  </svg>
                </span>
                <div>
                  <h3>{'Free posting'}</h3>
                  <p>{'Post jobs at no cost. Only pay for premium features when you need them.'}</p>
                </div>
              </div>
              <div className="feat2">
                <span className="fi">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M23 7l-7 5 7 5z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                </span>
                <div>
                  <h3>{'Video resumes'}</h3>
                  <p>{'See candidates speak — get a culture-fit read faster.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="demo" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
        <div className="pcta rv">
          <div aria-hidden="true" className="pcring" />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '48px',
                lineHeight: '54px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
              }}
            >
              {'Start today, '}
              <span style={{ color: '#84a9ff' }}>{'free forever.'}</span>
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '480px',
                fontSize: '18px',
                lineHeight: '28px',
                color: '#cdcde3',
              }}
            >
              {'Your next hire is waiting on Jobseeker Partners.'}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginTop: '8px',
              }}
            >
              <a className="btn btn-light" href="https://wa.me/6281318817887">
                {'Onboarding via WhatsApp '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>
            </div>
            <div className="stores">
              <a href="#" aria-label="Download on the App Store">
                <img src="/images/f67a83a01fce23124fe2b38912976391.svg" alt="Download on the App Store" />
              </a>{' '}
              <a href="#" aria-label="Get it on Google Play">
                <img src="/images/1ebef8361229ddc797a9a35153a6a3ff.svg" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <img
            className="pctaimg"
            src="/images/7b8949a17ec144987ce2d2afe9a96f27.webp"
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>
      <footer id="footer" style={{ borderTop: '1px solid #e9eaeb', padding: '72px 0 32px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          <div className="foot">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img
                src="/images/1976305d6893a6ac268c4f73d828678d.png"
                alt="Jobseeker Company"
                style={{ display: 'block', height: '44px', width: 'auto', alignSelf: 'flex-start' }}
              />
              <p
                style={{
                  margin: '0',
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#535862',
                  maxWidth: '280px',
                }}
              >
                {'Connecting people with opportunities.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '14px' }}>
                <a href="mailto:support@jobseeker.company">{'support@jobseeker.company'}</a>{' '}
                <a href="tel:+6281318817887">{'+62 813 1881 7887'}</a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#181d27',
                  marginBottom: '10px',
                }}
              >
                {'Solutions'}
              </span>{' '}
              <a className="flink" href="/hrms/">
                {'HRMS'}
              </a>
              <a className="flink" href="/partners/">
                {'Jobseeker Partners'}
              </a>
              <a className="flink" href="/talent/">
                {'Talent Augmentation'}
              </a>
              <a className="flink" href="/executive/">
                {'Executive Search'}
              </a>
              <a className="flink" href="/training/">
                {'Corporate Training'}
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#181d27',
                  marginBottom: '10px',
                }}
              >
                {'For Jobseekers'}
              </span>{' '}
              <a className="flink" href="/app/">
                {'Jobseeker App'}
              </a>
              <a className="flink" href="/academy/">
                {'Jobseeker Academy'}
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#181d27',
                  marginBottom: '10px',
                }}
              >
                {'Resources'}
              </span>{' '}
              <a className="flink" href="/customers/">
                {'Customer Stories'}
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#181d27',
                  marginBottom: '10px',
                }}
              >
                {'Company'}
              </span>{' '}
              <a className="flink" href="/story/">
                {'About'}
              </a>
              <a className="flink" href="/leadership/">
                {'Leadership'}
              </a>
              <a className="flink" href="#">
                {'Contact'}
              </a>
            </div>
          </div>
          <div className="offices">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600' }}>{'Bali HQ (J-Loft)'}</span>
              <span style={{ fontSize: '13px', lineHeight: '20px', color: '#535862' }}>
                {'J-Loft Office, Griya Jimbaran Hub, Jl. Karang Mas, Jimbaran, Bali 80361'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600' }}>{'Jakarta'}</span>
              <span style={{ fontSize: '13px', lineHeight: '20px', color: '#535862' }}>
                {'Menara Kompas, Jl. Palmerah Sel. No.21, Gelora, Tanah Abang, Central Jakarta 10270'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600' }}>{'Singapore'}</span>
              <span style={{ fontSize: '13px', lineHeight: '20px', color: '#535862' }}>
                {'10 Anson Road #22-02 International Plaza, Singapore 079903'}
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '24px',
              borderTop: '1px solid #e9eaeb',
              fontSize: '13px',
              color: '#535862',
            }}
          >
            <span>{'© 2026 Jobseeker Company'}</span>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="flink" href="/terms/" style={{ lineHeight: '1.4' }}>
                {'Terms'}
              </a>
              <a className="flink" href="/privacy/" style={{ lineHeight: '1.4' }}>
                {'Privacy'}
              </a>
              <a className="flink" href="/cookies/" style={{ lineHeight: '1.4' }}>
                {'Cookies'}
              </a>{' '}
              <span
                style={{
                  display: 'inline-flex',
                  border: '1px solid #e9eaeb',
                  borderRadius: '999px',
                  padding: '2px',
                }}
              >
                {v.isID ? (
                  <>
                    <button
                      type="button"
                      aria-pressed="true"
                      style={{
                        border: '0',
                        cursor: 'pointer',
                        minWidth: '40px',
                        height: '28px',
                        borderRadius: '999px',
                        font: 'inherit',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: '#050774',
                        color: '#ffffff',
                      }}
                    >
                      {'ID'}
                    </button>
                  </>
                ) : null}{' '}
                {v.isEN ? (
                  <>
                    <button
                      type="button"
                      onClick={v.setID}
                      aria-pressed="false"
                      style={{
                        border: '0',
                        cursor: 'pointer',
                        minWidth: '40px',
                        height: '28px',
                        borderRadius: '999px',
                        font: 'inherit',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: 'transparent',
                        color: '#535862',
                      }}
                    >
                      {'ID'}
                    </button>
                  </>
                ) : null}{' '}
                {v.isEN ? (
                  <>
                    <button
                      type="button"
                      aria-pressed="true"
                      style={{
                        border: '0',
                        cursor: 'pointer',
                        minWidth: '40px',
                        height: '28px',
                        borderRadius: '999px',
                        font: 'inherit',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: '#050774',
                        color: '#ffffff',
                      }}
                    >
                      {'EN'}
                    </button>
                  </>
                ) : null}{' '}
                {v.isID ? (
                  <>
                    <button
                      type="button"
                      onClick={v.setEN}
                      aria-pressed="false"
                      style={{
                        border: '0',
                        cursor: 'pointer',
                        minWidth: '40px',
                        height: '28px',
                        borderRadius: '999px',
                        font: 'inherit',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: 'transparent',
                        color: '#535862',
                      }}
                    >
                      {'EN'}
                    </button>
                  </>
                ) : null}
              </span>{' '}
              <a className="flink" href="https://www.instagram.com/" style={{ lineHeight: '1.4' }}>
                {'Instagram'}
              </a>
              <a className="flink" href="https://www.tiktok.com/" style={{ lineHeight: '1.4' }}>
                {'TikTok'}
              </a>
              <a className="flink" href="https://www.linkedin.com/" style={{ lineHeight: '1.4' }}>
                {'LinkedIn'}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="aifab-wrap">
        {v.amOpen ? (
          <>
            <div className="amchat" role="dialog" aria-label="Agent Ming">
              <div className="amhd">
                <span className="aispark" style={{ width: '36px', height: '36px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                    <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                  </svg>
                </span>{' '}
                <span style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                  <b>{'Agent Ming'}</b>
                  <small>
                    <i />
                    {'Online · replies instantly'}
                  </small>
                </span>{' '}
                <button type="button" className="amx" onClick={v.amClose} aria-label="Close Agent Ming">
                  {'×'}
                </button>
              </div>
              <div className="ambody" aria-live="polite">
                <div className="ammsg bot">
                  {"Hi! I'm "}
                  <b>{'Agent Ming'}</b>
                  {", Jobseeker's AI assistant. How can I help you today?"}
                </div>
                {L(v.amMsgs).map((m_3, i_3) => (
                  <React.Fragment key={i_3}>
                    <div className={`ammsg ${T(m_3?.who)}`}>
                      {T(m_3?.t)}
                      {m_3?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_3?.href)}>
                            {T(m_3?.link)}
                            {' →'}
                          </a>
                        </>
                      ) : null}
                    </div>
                  </React.Fragment>
                ))}{' '}
                {v.amTyping ? (
                  <>
                    <div className="ammsg bot amdots">
                      <i />
                      <i />
                      <i />
                    </div>
                  </>
                ) : null}
              </div>
              {v.amShowSugs ? (
                <>
                  <div className="amsugs">
                    {L(v.amSugs).map((sg_4, i_4) => (
                      <React.Fragment key={i_4}>
                        <button type="button" className="asug" onClick={sg_4?.go}>
                          {T(sg_4?.t)}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </>
              ) : null}
              <form className="amform" onSubmit={v.amSubmit}>
                <input
                  type="text"
                  placeholder="Ask Agent Ming…"
                  value={v.amQ}
                  onChange={v.amOnQ}
                  aria-label="Message Agent Ming"
                />{' '}
                <button type="submit" aria-label="Send">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
            </div>
          </>
        ) : null}{' '}
        {v.amHint ? (
          <>
            <span className="aitip">{'Ask Agent Ming'}</span>
          </>
        ) : null}{' '}
        <button
          type="button"
          className="aifab"
          onClick={v.amToggle}
          aria-expanded={v.amOpen}
          aria-label="Open Agent Ming, AI assistant"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
            <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
          </svg>
        </button>
      </div>
    </div>
  </>
);

export default Page;
