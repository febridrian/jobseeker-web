// Solutions — See all
// Generated from the design artboard Solutions.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, lang: 'EN', gi: 0, size: 0 };
    this.paused = false;
    const L = {
      hrms: '/_blob/06922c52c0d826c56143c4224b8fb845',
      partners: '/_blob/2e0842aec39ea4bc17e6d544749982f9',
      service: '/_blob/0934d72a7333f2a8976ae385b4569280',
      academy: '/_blob/c2c0bd06446c497f081ebea85a1bf425',
    };
    this.P = {
      hrms: {
        name: 'HRMS',
        logo: L.hrms,
        href: '/hrms/',
        d: 'Recruitment, employee data, attendance & payroll',
      },
      partners: {
        name: 'Jobseeker Partners',
        logo: L.partners,
        href: '/partners/',
        d: 'Self-service, cost-efficient hiring',
      },
      talent: {
        name: 'Talent Augmentation',
        logo: L.service,
        href: '/talent/',
        d: 'Workforce management, hiring to daily ops',
      },
      exec: {
        name: 'Executive Search',
        logo: L.service,
        href: '/executive/',
        d: 'Strategic hiring for leadership roles',
      },
      training: {
        name: 'Corporate Training',
        logo: L.academy,
        href: '/training/',
        d: 'Skill development & certification',
      },
    };
    this.GROUPS = [
      {
        name: 'HIRE',
        title: 'Find, screen, and hire candidates.',
        desc: 'Whether you need 2 people or 200, reach verified candidates, screen faster and hire with confidence — from frontline roles to the C-suite.',
        items: ['partners', 'exec', 'hrms'],
      },
      {
        name: 'MANAGE',
        title: 'Manage your workforce effortlessly.',
        desc: 'From attendance tracking to payroll, get full visibility into your workforce operations. Automate routine HR tasks so your team can focus on what matters — your people.',
        items: ['hrms', 'talent'],
      },
      {
        name: 'GROW',
        title: 'Scale your team with confidence.',
        desc: 'Get data-driven insights and talent development tools to grow your business. From one hire to a hundred, our ecosystem scales with your ambition every step of the way.',
        items: ['training', 'hrms'],
      },
    ];
    this.SIZES = ['1–10', '11–50', '51–200', '201–1,000', '1,000+'];
    this.FIT = [
      ['partners'],
      ['partners', 'hrms'],
      ['hrms', 'talent', 'training'],
      ['hrms', 'talent', 'training', 'exec'],
      ['hrms', 'talent', 'exec', 'training'],
    ];
    this.CLIENTS = [
      ['Alfamart', 'aac027953cffa08e93c5427d123a6e9a'],
      ['Alfamidi', '437b04cddc51dc54506617ee6c5397dd'],
      ['Dan+Dan', '68ec4ade1c0b76df480e1793602af273'],
      ['MKL', 'ac48c8ccdbe538ee5599b608f413191a'],
      ['FitHub', '1f30884c024ee18f1be73c2015c5653d'],
      ['Ranch Market', 'c73db4a2e84f0be7b09ba11790e93179'],
      ['Indo Coconut', 'a78c7919172f3f1370fbac9bbb50aa92'],
      ['Super Indo', '6a46d25389b849ee192dfda89ea93deb'],
      ['CBN', 'c06dd2c4c892715068c5046c55212470'],
      ['Indomaret', '7bce058060ce5d73ab2f18f43e88ed26'],
      ['Varion Coffee', 'c0c6c0666d1f3815067bac98ccc101e9'],
      ['Sejahtera Mitra Solusi', 'ffb616fecd62b7f6c830a83bae500193'],
      ['Deca Group', '5796dfaf43f6cccb3b918fc27eb5c797'],
      ['Paramount Land', '4cc1c6df3d161063fe49f92bf4ec2df7'],
      ['Shelter', '2edbaf5ad9687f5009dd303fc208c272'],
      ['Mitra Keluarga', 'acc184efccfeb8469aae7d4baabdd58d'],
      ['TKG Taekwang', 'b425c668831ae46ed577bade46e0cf4a'],
      ['Titani', '51f6fa7ba71b2083d630d842533f0732'],
      ['Bimasakti', '2aa4306f4c5fd640d3fe450e56076fc0'],
      ['Optima', '75e6d76144724a476660fb460bb0e65c'],
      ['Fitness Plus', 'bf87a1bbbe471d9c0823bb82f65b6743'],
      ['IDstar', '3975b795442cc9cd8e6e726aea357ef7'],
      ['Avery', '5e1ed31dfb40c6db4fcc80d4e95c8f11'],
      ['SVRG', 'b1a5ef8a2ef22832a0b3b2a490cc8ac6'],
      ['Gaya Makmur Mobil', '418aa4164c7357241170eea0978340c6'],
      ['SWAT', '75c428f9d251df2041e2627348ecc464'],
      ['PT. One Sail Logistic', 'b27348541f59385ce774f40b84985a96'],
      ['Julong', '56977feafc833cb26a8a3ccdfb04d4dd'],
      ['WCS Abysena', 'd6294c9ee63e0e8d19c4ecf056eafb13'],
      ['PT. Comextra Majora', '66cfa4d871888b6cbfe082b399c80f3c'],
      ['ANJ', 'c501315ecbe3518e9aa91af9415b78c6'],
      ['Rohto', '4436be89874b352373d55d3a5b02faa2'],
      ['PT. Otto Mediagrup', '62b4d90da708734438c95d7bdb1950f3'],
    ].map(([alt, id]) => ({ alt, src: '/_blob/' + id, hidden: false }));
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
      if (!this.paused) this.setState({ gi: (this.state.gi + 1) % this.GROUPS.length });
    }, 6000);
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
    const gi = this.state.gi,
      size = this.state.size;
    const fit = this.FIT[size];
    const order = ['partners', 'hrms', 'talent', 'exec', 'training'];
    const pct = (size / 4) * 100;
    return {
      ...this.amVals(),
      menuOpen: this.state.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      groups: this.GROUPS.map((g, i) => ({
        ...g,
        on: i === gi,
        cls: i === gi ? 'on' : '',
        items: g.items.map((k, j) => ({ ...this.P[k], delay: { animationDelay: 0.1 + j * 0.1 + 's' } })),
        pick: () => {
          this.setState({ gi: i });
          this.cycle();
        },
      })),
      gPause: () => {
        this.paused = true;
      },
      gResume: () => {
        this.paused = false;
      },
      size,
      sizeLabel: this.SIZES[size],
      setSize: (e) => this.setState({ size: Number(e.target.value) }),
      rangeStyle: {
        background:
          'linear-gradient(90deg,#f073b8 0%,#ffffff ' + pct + '%,rgba(255,255,255,.16) ' + pct + '%)',
      },
      recs: order.map((k) => ({
        ...this.P[k],
        cls: fit.indexOf(k) >= 0 ? 'on' : '',
        mark: fit.indexOf(k) >= 0 ? 'Recommended' : '',
      })),
      clients: this.CLIENTS.concat(this.CLIENTS.map((c) => ({ ...c, alt: '', hidden: true }))),
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
        <div className="sgrid-bg" aria-hidden="true" />
        <div
          className="wrap shero"
          style={{ position: 'relative', paddingTop: '72px', paddingBottom: '88px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <nav className="crumb rise d1" aria-label="Breadcrumb">
              <a href="/v1/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Solutions'}</b>
            </nav>
            <span
              className="rise d1"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 14px 6px 10px',
                borderRadius: '999px',
                background: '#ffffff',
                boxShadow: '0 0 0 1px #e9eaeb, 0 6px 16px -10px rgba(5,7,116,.3)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#050774',
              }}
            >
              <span className="cdots" aria-hidden="true">
                <i style={{ background: '#3366ff' }} />
                <i style={{ background: '#171a9d' }} />
                <i style={{ background: '#dc2626' }} />
                <i style={{ background: '#009800' }} />
              </span>
              {'Solutions for employers\n      '}
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
              {'Workforce solutions for '}
              <span className="hlw">{'every business need.'}</span>
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
                'From 5-person SMEs to 10,000+ enterprises, we have the right solution for every stage of your growth.'
              }
            </p>
            <div className="rise d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="/demo/">
                {'Schedule a Demo '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>{' '}
              <a className="btn btn-ghost" href="#fit">
                {'Find your fit'}
              </a>
            </div>
          </div>
          <div className="slogos rise d5" aria-label="Five Jobseeker solutions">
            <span className="shape s1" aria-hidden="true" /> <span className="shape s2" aria-hidden="true" />{' '}
            <span className="shape s3" aria-hidden="true" /> <span className="shape s4" aria-hidden="true" />{' '}
            <svg className="slines" viewBox="0 0 400 400" aria-hidden="true">
              <path d="M200 200 L90 80 M200 200 L310 80 M200 200 L60 250 M200 200 L340 250 M200 200 L200 350" />
            </svg>
            <div className="score">
              <img src="/images/1976305d6893a6ac268c4f73d828678d.png" alt="Jobseeker Company" />
            </div>
            <a className="sl l1" href="/hrms/">
              <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
              <span>{'HRMS'}</span>
            </a>{' '}
            <a className="sl l2" href="/partners/">
              <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
              <span>{'Jobseeker Partners'}</span>
            </a>{' '}
            <a className="sl l3" href="/talent/">
              <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
              <span>{'Talent Augmentation'}</span>
            </a>{' '}
            <a className="sl l4" href="/executive/">
              <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
              <span>{'Executive Search'}</span>
            </a>{' '}
            <a className="sl l5" href="/training/">
              <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
              <span>{'Corporate Training'}</span>
            </a>
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
              margin: '0 auto 36px',
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
              {'Start with what you need.'}
            </h2>
          </div>
          <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div
              className="stabs"
              role="tablist"
              aria-label="Solution groups"
              onMouseEnter={v.gPause}
              onMouseLeave={v.gResume}
            >
              {L(v.groups).map((g_0, i_0) => (
                <React.Fragment key={i_0}>
                  <button
                    type="button"
                    role="tab"
                    className={`stab ${T(g_0?.cls)}`}
                    aria-selected={g_0?.on}
                    onClick={g_0?.pick}
                  >
                    {T(g_0?.name)}
                    {g_0?.on ? (
                      <>
                        <i className="stprog" />
                      </>
                    ) : null}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          {L(v.groups).map((g_1, i_1) => (
            <React.Fragment key={i_1}>
              {g_1?.on ? (
                <>
                  <div className="gpane">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <span className="gnum">{T(g_1?.name)}</span>
                      <h3
                        style={{
                          margin: '0',
                          fontSize: '32px',
                          lineHeight: '40px',
                          fontWeight: '700',
                          letterSpacing: '-0.025em',
                          color: '#181d27',
                        }}
                      >
                        {T(g_1?.title)}
                      </h3>
                      <p style={{ margin: '0', fontSize: '17px', lineHeight: '28px', color: '#535862' }}>
                        {T(g_1?.desc)}
                      </p>
                    </div>
                    <div className="gprods">
                      {L(g_1?.items).map((it_2, i_2) => (
                        <React.Fragment key={i_2}>
                          <a className="gprod" href={A(it_2?.href)} style={S(it_2?.delay)}>
                            <img src={A(it_2?.logo)} alt="" />
                            <span>
                              <b>{T(it_2?.name)}</b>
                              <small>{T(it_2?.d)}</small>
                            </span>
                            <em aria-hidden="true">{'→'}</em>
                          </a>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </section>
      <section id="all" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '640px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'All solutions'}
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
              {'Five solutions. One partner.'}
            </h2>
          </div>
        </div>
        <div className="sgrid rv-s">
          <a className="scard wide" href="/hrms/" style={{ background: '#f4f5ff' }}>
            <div className="sctx">
              <span className="sctag">
                <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                {'Manage · For enterprises'}
              </span>
              <h3>{'HRMS'}</h3>
              <p>{'Manage recruitment, employee data, attendance, and payroll in one platform.'}</p>
              <span className="sclink" style={{ color: '#131687' }}>
                {'Learn more '}
                <span aria-hidden="true">{'→'}</span>
              </span>
            </div>
            <div className="scimg">
              <img src="/images/adc3231b9a937c698ffc98f6994be2af.webp" alt="HRMS on desktop and mobile" />
            </div>
          </a>{' '}
          <a className="scard" href="/partners/" style={{ background: '#f5f8ff' }}>
            <div className="sctx">
              <span className="sctag">
                <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                {'Hire · For SMEs'}
              </span>
              <h3>{'Jobseeker Partners'}</h3>
              <p>{'Self-service platform for fast and cost-efficient hiring.'}</p>
              <span className="sclink" style={{ color: '#0031b3' }}>
                {'Learn more '}
                <span aria-hidden="true">{'→'}</span>
              </span>
            </div>
            <div className="scimg">
              <img src="/images/7b8949a17ec144987ce2d2afe9a96f27.webp" alt="Jobseeker Partners app" />
            </div>
          </a>{' '}
          <a className="scard" href="/talent/" style={{ background: '#fff5f5' }}>
            <div className="sctx">
              <span className="sctag">
                <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                {'Manage · Outsourcing'}
              </span>
              <h3>{'Talent Augmentation'}</h3>
              <p>{'End-to-end workforce management from hiring to daily operations.'}</p>
              <span className="sclink" style={{ color: '#9e0e0e' }}>
                {'Learn more '}
                <span aria-hidden="true">{'→'}</span>
              </span>
            </div>
            <div className="scimg ph">
              <img
                src="/images/912f265b8836c91ffd08826f9012aea0.webp"
                alt="Talent Augmentation in manufacturing, retail and logistics"
              />
            </div>
          </a>{' '}
          <a className="scard" href="/executive/" style={{ background: '#fff5f5' }}>
            <div className="sctx">
              <span className="sctag">
                <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                {'Hire · Leadership'}
              </span>
              <h3>{'Executive Search'}</h3>
              <p>{'Strategic hiring for managerial and executive-level roles.'}</p>
              <span className="sclink" style={{ color: '#9e0e0e' }}>
                {'Learn more '}
                <span aria-hidden="true">{'→'}</span>
              </span>
            </div>
            <div className="scimg">
              <img src="/images/e0f0e5af13342d6df790465cd5c4c9f2.webp" alt="Executive search consultant" />
            </div>
          </a>{' '}
          <a className="scard" href="/training/" style={{ background: '#f2fbf2' }}>
            <div className="sctx">
              <span className="sctag">
                <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
                {'Grow · For teams'}
              </span>
              <h3>{'Corporate Training'}</h3>
              <p>{'Skill development and certification for job readiness.'}</p>
              <span className="sclink" style={{ color: '#006600' }}>
                {'Learn more '}
                <span aria-hidden="true">{'→'}</span>
              </span>
            </div>
            <div className="scimg">
              <img src="/images/2b06915d3a460403ba214aeaa56cc45e.webp" alt="Corporate Training trainer" />
            </div>
          </a>
        </div>
      </section>
      <section
        id="fit"
        style={{
          background: '#020223',
          color: '#ffffff',
          padding: '104px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="howgrid2" aria-hidden="true" />
        <div className="wrap fitg" style={{ position: 'relative' }}>
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f073b8',
              }}
            >
              {'Still not sure which fits?'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '40px',
                lineHeight: '48px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
              }}
            >
              {'Tell us your team size.'}
            </h2>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '28px', color: '#cdcde3' }}>
              {'Our team will help you map your needs in a 15-minute free consultation.'}
            </p>
            <a
              className="btn btn-light"
              href="https://wa.me/6281318817887"
              style={{ alignSelf: 'flex-start' }}
            >
              {'Free Consultation via WhatsApp '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>
          </div>
          <div className="finder rv">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '12px',
              }}
            >
              <label htmlFor="teamsize" style={{ fontSize: '14px', fontWeight: '600', color: '#cdcde3' }}>
                {'Number of employees'}
              </label>{' '}
              <b className="fsize">{T(v.sizeLabel)}</b>
            </div>
            <input
              id="teamsize"
              className="frange"
              type="range"
              min="0"
              max="4"
              step="1"
              value={v.size}
              onChange={v.setSize}
              style={S(v.rangeStyle)}
            />
            <div className="fticks" aria-hidden="true">
              <span>{'1–10'}</span>
              <span>{'11–50'}</span>
              <span>{'51–200'}</span>
              <span>{'201–1K'}</span>
              <span>{'1K+'}</span>
            </div>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#a8a8ce', marginTop: '8px' }}>
              {'A good place to start'}
            </span>
            <div className="frecs">
              {L(v.recs).map((r_3, i_3) => (
                <React.Fragment key={i_3}>
                  <a className={`frec ${T(r_3?.cls)}`} href={A(r_3?.href)}>
                    <img src={A(r_3?.logo)} alt="" />
                    <span>{T(r_3?.name)}</span>
                    <em aria-hidden="true">{T(r_3?.mark)}</em>
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '96px 0 72px' }}>
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
            {L(v.clients).map((c_4, i_4) => (
              <React.Fragment key={i_4}>
                <span className="clogo" aria-hidden={c_4?.hidden}>
                  <img src={A(c_4?.src)} alt={c_4?.alt} />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="demo" className="wrap" style={{ paddingTop: '40px', paddingBottom: '112px' }}>
        <div
          className="rv"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '28px',
            background: '#050774',
            color: '#ffffff',
            padding: '72px 56px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-120px',
              top: '-120px',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              border: '1px dashed rgba(255,255,255,.2)',
              animation: 'spin 50s linear infinite',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-60px',
              bottom: '-80px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              border: '1.5px solid rgba(228,0,126,.5)',
            }}
          />
          <div style={{ position: 'relative', display: 'flex', gap: '10px' }} aria-hidden="true">
            <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" className="ctal" />
            <img
              src="/images/2e0842aec39ea4bc17e6d544749982f9.png"
              alt=""
              className="ctal"
              style={{ animationDelay: '.2s' }}
            />
            <img
              src="/images/0934d72a7333f2a8976ae385b4569280.png"
              alt=""
              className="ctal"
              style={{ animationDelay: '.4s' }}
            />
            <img
              src="/images/c2c0bd06446c497f081ebea85a1bf425.png"
              alt=""
              className="ctal"
              style={{ animationDelay: '.6s' }}
            />
          </div>
          <h2
            className="h2"
            style={{
              position: 'relative',
              margin: '0',
              fontSize: '48px',
              lineHeight: '54px',
              fontWeight: '700',
              letterSpacing: '-0.035em',
            }}
          >
            {'Ready to get started?'}
          </h2>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '8px',
            }}
          >
            <a className="btn btn-light" href="/demo/">
              {'Schedule a Demo '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>{' '}
            <a className="btn btn-outline-light" href="https://wa.me/6281318817887">
              {'WhatsApp Sales'}
            </a>
          </div>
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
                {L(v.amMsgs).map((m_5, i_5) => (
                  <React.Fragment key={i_5}>
                    <div className={`ammsg ${T(m_5?.who)}`}>
                      {T(m_5?.t)}
                      {m_5?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_5?.href)}>
                            {T(m_5?.link)}
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
                    {L(v.amSugs).map((sg_6, i_6) => (
                      <React.Fragment key={i_6}>
                        <button type="button" className="asug" onClick={sg_6?.go}>
                          {T(sg_6?.t)}
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
