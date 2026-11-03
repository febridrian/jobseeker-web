// For Jobseekers — Jobseeker App
// Generated from the design artboard App.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, lang: 'EN', si: 0, di: 0, leaving: '', applied: 0, skipped: 0 };
    this.paused = false;
    const B = (id) => '/_blob/' + id;
    this.JOBS = [
      {
        role: 'Customer Service',
        co: 'FIT HUB',
        loc: 'Jakarta Selatan, DKI Jakarta',
        km: '15 km',
        type: 'Full-time',
        pay: 'Rp4–5.5 jt',
        logo: B('1f30884c024ee18f1be73c2015c5653d'),
        bg: 'linear-gradient(160deg,#ffd1ea,#ff7cc0)',
      },
      {
        role: 'Staf Tenaga Teknis',
        co: 'RS Mitra Keluarga',
        loc: 'Jakarta Pusat, DKI Jakarta',
        km: '5.0 km',
        type: 'Full-time',
        pay: 'Healthcare',
        logo: B('acc184efccfeb8469aae7d4baabdd58d'),
        bg: 'linear-gradient(160deg,#dbe6ff,#84a9ff)',
      },
      {
        role: 'Housekeeping',
        co: 'FIT HUB',
        loc: 'Jakarta Pusat, DKI Jakarta',
        km: '5.0 km',
        type: 'Shift',
        pay: 'Rp5.7 jt',
        logo: B('1f30884c024ee18f1be73c2015c5653d'),
        bg: 'linear-gradient(160deg,#d1fadf,#6ce9a6)',
      },
      {
        role: 'Barista',
        co: 'Varion Coffee',
        loc: 'Tangerang Selatan, Banten',
        km: '3.2 km',
        type: 'Shift',
        pay: 'F&B',
        logo: B('c0c6c0666d1f3815067bac98ccc101e9'),
        bg: 'linear-gradient(160deg,#fef0c7,#fdb022)',
      },
      {
        role: 'Store Crew',
        co: 'Super Indo',
        loc: 'Bekasi, Jawa Barat',
        km: '2.4 km',
        type: 'Full-time',
        pay: 'Retail',
        logo: B('6a46d25389b849ee192dfda89ea93deb'),
        bg: 'linear-gradient(160deg,#fee4e2,#f97066)',
      },
    ];
    this.STEPS = [
      {
        t: 'Create Profile + Video Resume',
        d: 'Fill in your profile and record a 30-second intro video.',
        screen: 'My profile',
      },
      {
        t: 'Browse & Apply',
        d: 'Swipe through matching jobs. Tap "Apply" for instant submission.',
        screen: 'Jobs for you',
      },
      {
        t: 'Chat & Interview',
        d: 'If matched, the company chats with you in-app. Schedule interviews from there.',
        screen: 'Messages',
      },
    ];
    const I = {
      factory: 'M3 21V10l6 4V10l6 4V6h6v15zM7 17h2M12 17h2M17 17h2',
      cart: 'M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6.2M9 20.5h.01M17 20.5h.01',
      cup: 'M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c0 1 1 1 1 2s-1 1-1 2M12 2.5c0 1 1 1 1 2s-1 1-1 2',
      gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.6 15H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9.7 4.4V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1.3z',
      brief: 'M3 7h18v13H3zM8 7V4h8v3M3 12h18',
      code: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14',
      truck:
        'M2 6h11v10H2zM13 9h4l4 4v3h-8zM6 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
      tie: 'M12 2l3 3-2 3 3 10-4 4-4-4 3-10-2-3z',
    };
    this.FIELDS = [
      ['Manufacturing', 'Operator, QC, Technician', I.factory, '#050774', '#e6e6f1'],
      ['Retail', 'Store crew, Cashier', I.cart, '#b8006a', '#ffe3f2'],
      ['F&B', 'Barista, Cook, Server', I.cup, '#b54708', '#fef0c7'],
      ['Operations & Production', 'Packer, Warehouse staff', I.gear, '#0031b3', '#eaf1ff'],
      ['Office & Admin', 'Admin, Receptionist', I.brief, '#414651', '#f5f5f5'],
      ['IT & Digital', 'Developer, Designer', I.code, '#6941c6', '#f4ebff'],
      ['Drivers & Couriers', 'Courier, Driver', I.truck, '#067647', '#ecfdf3'],
      ['Professional & Managerial', 'Supervisor, Manager', I.tie, '#b42318', '#fee4e2'],
    ].map(([name, roles, icon, c, t]) => ({
      name,
      roles,
      icon,
      ic: { background: t, color: c },
      go: { color: c },
    }));
  }
  componentDidMount() {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.reduce = reduce;
    if (!reduce) this.cycle();
  }
  componentWillUnmount() {
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
    if (this.t) clearInterval(this.t);
    if (this.lt) clearTimeout(this.lt);
  }
  cycle() {
    if (this.t) clearInterval(this.t);
    this.t = setInterval(() => {
      if (!this.paused) this.setState({ si: (this.state.si + 1) % this.STEPS.length });
    }, 5200);
  }
  swipe(dir) {
    if (this.state.leaving || this.state.di >= this.JOBS.length) return;
    this.setState({ leaving: dir });
    this.lt = setTimeout(
      () => {
        this.setState({
          leaving: '',
          di: this.state.di + 1,
          applied: this.state.applied + (dir === 'R' ? 1 : 0),
          skipped: this.state.skipped + (dir === 'L' ? 1 : 0),
        });
      },
      this.reduce ? 0 : 420,
    );
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
    const di = this.state.di;
    const rest = this.JOBS.slice(di, di + 3);
    const deck = rest
      .map((j, k) => ({
        ...j,
        bg: { background: j.bg },
        cls: k === 0 && this.state.leaving ? 'out' + this.state.leaving : '',
        hidden: k === 0 ? 'false' : 'true',
        pos: {
          zIndex: 10 - k,
          transform: 'translateY(' + k * 14 + 'px) scale(' + (1 - k * 0.05) + ')',
          opacity: k === 2 ? 0.6 : 1,
        },
      }))
      .reverse();
    return {
      ...this.amVals(),
      menuOpen: this.state.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      deck,
      deckDone: di >= this.JOBS.length,
      appliedCount: this.state.applied,
      skippedCount: this.state.skipped,
      leftCount: Math.max(0, this.JOBS.length - di),
      skip: () => this.swipe('L'),
      apply: () => this.swipe('R'),
      resetDeck: () => this.setState({ di: 0, applied: 0, skipped: 0, leaving: '' }),
      steps: this.STEPS.map((s, i) => ({
        ...s,
        n: i + 1,
        on: i === si,
        cls: i === si ? 'on' : i < si ? 'done' : '',
        isProfile: i === 0,
        isBrowse: i === 1,
        isChat: i === 2,
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
      fields: this.FIELDS,
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
        <div className="jagrid" aria-hidden="true" />
        <div
          className="wrap jahero"
          style={{ position: 'relative', paddingTop: '72px', paddingBottom: '88px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <nav className="jacrumb rise d1" aria-label="Breadcrumb">
              <a href="/v1/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/v1/">{'For Jobseekers'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Jobseeker App'}</b>
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
                boxShadow: '0 0 0 1px #e9eaeb, 0 6px 16px -10px rgba(184,0,106,.35)',
                fontSize: '13px',
                fontWeight: '600',
                color: '#b8006a',
              }}
            >
              <img
                src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png"
                alt=""
                style={{ width: '28px', height: '28px', borderRadius: '8px' }}
              />
              {'Jobseeker App · For jobseekers\n      '}
            </span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '60px',
                lineHeight: '66px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#050774',
              }}
            >
              {'Find work, as easy as '}
              <span className="jahl">{'a swipe.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '500px',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#535862',
              }}
            >
              {'A job search platform with thousands of verified opportunities. Apply with video resumes.'}
            </p>
            <div className="rise d4 jastores">
              <a href="#" aria-label="Download on the App Store">
                <img src="/images/f67a83a01fce23124fe2b38912976391.svg" alt="Download on the App Store" />
              </a>{' '}
              <a href="#" aria-label="Get it on Google Play">
                <img src="/images/1ebef8361229ddc797a9a35153a6a3ff.svg" alt="Get it on Google Play" />
              </a>
            </div>
            <div className="rise d5 jatrust">
              <span>
                <i style={{ background: '#17b26a' }} />
                {'Verified companies'}
              </span>{' '}
              <span>
                <i style={{ background: '#ff2f9f' }} />
                {'Video resume'}
              </span>{' '}
              <span>
                <i style={{ background: '#3366ff' }} />
                {'Jobs near you'}
              </span>
            </div>
          </div>
          <div className="javis rise d5">
            <div className="jablob" aria-hidden="true" />
            <span className="jaring" aria-hidden="true" />{' '}
            <img
              className="javimg"
              src="/images/54b685ce0fd14a082be6160ac3167ded.webp"
              alt="Jobseeker App showing nearby job listings and a job card with an Apply button"
            />
            <div className="hbadge jab1">
              <span className="hbi" style={{ background: '#ecfdf3', color: '#067647' }}>
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
                  <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
                <b style={{ fontSize: '15px', color: '#181d27' }}>{'Verified company'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'no scams'}</span>
              </span>
            </div>
            <div className="hbadge jab2">
              <span className="hbi" style={{ background: '#ffe3f2', color: '#b8006a' }}>
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
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
                <b style={{ fontSize: '15px', color: '#181d27' }}>{'New job nearby'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'5.0 km from you'}</span>
              </span>
            </div>
            <div className="jahint" aria-hidden="true">
              <span>{'✕ skip'}</span>
              <i />
              <span style={{ color: '#b8006a' }}>{'apply ♥'}</span>
            </div>
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
              {'Why Jobseeker App'}
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
              {'Why use Jobseeker App?'}
            </h2>
          </div>
          <div className="jabento rv-s">
            <div className="jaf">
              <div className="jafviz" style={{ background: '#fff0f7' }} aria-hidden="true">
                <div className="javid">
                  <span className="javrec">
                    <i />
                    {'REC'}
                  </span>{' '}
                  <span className="javtime">{'0:30'}</span>{' '}
                  <span className="javface">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b8006a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>
                  </span>{' '}
                  <span className="javwave">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>{' '}
                  <span className="javbar">
                    <i />
                  </span>
                </div>
              </div>
              <div className="jaftx">
                <h3>{'Video Resume'}</h3>
                <p>{'Show your personality and communication, not just a CV.'}</p>
              </div>
            </div>
            <div className="jaf">
              <div className="jafviz" style={{ background: '#ecfdf3' }} aria-hidden="true">
                <div className="javer">
                  <div className="javcard">
                    <img src="/images/1f30884c024ee18f1be73c2015c5653d.png" alt="" />
                    <span>
                      <b>{'Customer Service'}</b>
                      <small>{'FIT HUB · Jakarta Selatan'}</small>
                    </span>
                    <span className="javstamp">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="javcard c2">
                    <img src="/images/acc184efccfeb8469aae7d4baabdd58d.png" alt="" />
                    <span>
                      <b>{'Staf Tenaga Teknis'}</b>
                      <small>{'RS Mitra Keluarga · Jakarta Pusat'}</small>
                    </span>
                    <span className="javstamp">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="javscam">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    {'Unverified post blocked'}
                  </div>
                </div>
              </div>
              <div className="jaftx">
                <h3>{'Verified Jobs'}</h3>
                <p>{'All companies are verified. No scams.'}</p>
              </div>
            </div>
            <div className="jaf">
              <div className="jafviz jamap" aria-hidden="true">
                <span className="jarad" />
                <span className="jarad r2" /> <span className="jame" />{' '}
                <span className="japin p1">
                  <i />
                </span>
                <span className="japin p2">
                  <i />
                </span>
                <span className="japin p3">
                  <i />
                </span>
                <span className="japin p4">
                  <i />
                </span>{' '}
                <span className="jakm">{'Within 5 km'}</span>
              </div>
              <div className="jaftx">
                <h3>
                  {'Location Filter '}
                  <small>{'Geotagged'}</small>
                </h3>
                <p>{'Find work near home, or in your target city.'}</p>
              </div>
            </div>
            <div className="jaf">
              <div className="jafviz" style={{ background: '#f4f5ff' }} aria-hidden="true">
                <div className="janot">
                  <span className="jabell">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#050774"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                    </svg>
                    <i>{'3'}</i>
                  </span>
                  <div className="jatoasts">
                    <span className="jatoast t1">
                      <b>{'New job · Barista'}</b>
                      <small>{'1.2 km · just now'}</small>
                    </span>{' '}
                    <span className="jatoast t2">
                      <b>{'New job · Warehouse staff'}</b>
                      <small>{'2.4 km · 1 min ago'}</small>
                    </span>{' '}
                    <span className="jatoast t3">
                      <b>{'New job · Store crew'}</b>
                      <small>{'3.0 km · 2 min ago'}</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="jaftx">
                <h3>{'New Job Notifications'}</h3>
                <p>{'Know first, apply first.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="try" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
        <div className="jatry">
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'Try it here'}
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
              {'Skip or apply. '}
              <span style={{ color: '#ff2f9f' }}>{'One tap each.'}</span>
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '440px',
                fontSize: '17px',
                lineHeight: '28px',
                color: '#535862',
              }}
            >
              {
                'This is how browsing feels in the app. Swipe through matching jobs and tap Apply for instant submission.'
              }
            </p>
            <div className="jascore">
              <span>
                <b>{T(v.appliedCount)}</b>
                {'Applied'}
              </span>{' '}
              <span>
                <b>{T(v.skippedCount)}</b>
                {'Skipped'}
              </span>{' '}
              <span>
                <b>{T(v.leftCount)}</b>
                {'Left'}
              </span>
            </div>
            <span style={{ fontSize: '12px', color: '#717680' }}>{'Example listings for illustration.'}</span>
          </div>
          <div className="jadeckwrap rv">
            <div className="jablob2" aria-hidden="true" />
            <div className="jadeck">
              {L(v.deck).map((j_0, i_0) => (
                <React.Fragment key={i_0}>
                  <article className={`jacard ${T(j_0?.cls)}`} style={S(j_0?.pos)} aria-hidden={j_0?.hidden}>
                    <div className="jacimg" style={S(j_0?.bg)}>
                      <span className="jackm">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                          <circle cx="12" cy="9.5" r="2.5" />
                        </svg>
                        {T(j_0?.km)}
                      </span>{' '}
                      <img className="jaclogo" src={A(j_0?.logo)} alt="" />{' '}
                      <span className="jastampL">{'SKIP'}</span>
                      <span className="jastampR">{'APPLIED'}</span>
                    </div>
                    <div className="jacbody">
                      <span className="jacco">
                        {T(j_0?.co)}{' '}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#17b26a">
                          <path d="M12 2l2.4 2.2 3.2-.4.9 3.1 2.8 1.6-1 3 1 3-2.8 1.6-.9 3.1-3.2-.4L12 22l-2.4-2.2-3.2.4-.9-3.1L2.7 15.5l1-3-1-3 2.8-1.6.9-3.1 3.2.4z" />
                          <path
                            d="M8 12l3 3 5-5"
                            stroke="#ffffff"
                            strokeWidth="2.2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>{' '}
                      <b className="jact">{T(j_0?.role)}</b> <span className="jacloc">{T(j_0?.loc)}</span>
                      <div className="jactags">
                        <span>{T(j_0?.type)}</span>
                        <span>{T(j_0?.pay)}</span>
                      </div>
                    </div>
                  </article>
                </React.Fragment>
              ))}{' '}
              {v.deckDone ? (
                <>
                  <div className="jadone">
                    <span className="jadoneic">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>{' '}
                    <b>
                      {'You applied to '}
                      {T(v.appliedCount)}
                      {' jobs.'}
                    </b>{' '}
                    <span>{'Do it for real — download the app.'}</span>
                    <div className="jastores" style={{ justifyContent: 'center' }}>
                      <a href="#" aria-label="Download on the App Store">
                        <img
                          src="/images/f67a83a01fce23124fe2b38912976391.svg"
                          alt="Download on the App Store"
                        />
                      </a>{' '}
                      <a href="#" aria-label="Get it on Google Play">
                        <img src="/images/1ebef8361229ddc797a9a35153a6a3ff.svg" alt="Get it on Google Play" />
                      </a>
                    </div>
                    <button type="button" className="jareset" onClick={v.resetDeck}>
                      {'Start over'}
                    </button>
                  </div>
                </>
              ) : null}
            </div>
            <div className="jaacts">
              <button type="button" className="jaskip" onClick={v.skip} aria-label="Skip job">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>{' '}
              <button type="button" className="jaapply" onClick={v.apply}>
                {'Lamar · Apply'}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="how" style={{ background: '#fafafa', padding: '112px 0' }}>
        <div className="wrap">
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
              {'3 steps from download to hired.'}
            </h2>
          </div>
          <div className="jahow rv" onMouseEnter={v.sPause} onMouseLeave={v.sResume}>
            <div className="jasteps">
              <span className="jarail" aria-hidden="true">
                <i style={S(v.railFill)} />
              </span>{' '}
              {L(v.steps).map((s_1, i_1) => (
                <React.Fragment key={i_1}>
                  <button
                    type="button"
                    className={`jastep ${T(s_1?.cls)}`}
                    onClick={s_1?.pick}
                    aria-pressed={s_1?.on}
                  >
                    <span className="jasnum">{T(s_1?.n)}</span>{' '}
                    <span className="jastxt">
                      <b>{T(s_1?.t)}</b>
                      <span>{T(s_1?.d)}</span>
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="japhwrap">
              <div className="jablob3" aria-hidden="true" />
              {L(v.steps).map((s_2, i_2) => (
                <React.Fragment key={i_2}>
                  {s_2?.on ? (
                    <>
                      <div className="jascreen">
                        <div className="janotch" />
                        <div className="jastitle">
                          <b>{T(s_2?.screen)}</b>
                          <span className="jasbadge">
                            {'Step '}
                            {T(s_2?.n)}
                          </span>
                        </div>
                        {s_2?.isProfile ? (
                          <>
                            <div className="japrof">
                              <span className="japav">{'PA'}</span> <span className="japf">{'Putu Ayu'}</span>{' '}
                              <span className="japf f2">{'Customer service · 2 yrs'}</span>
                              <div className="jarecbox">
                                <span className="jarecring">
                                  <svg viewBox="0 0 44 44">
                                    <circle cx="22" cy="22" r="19" />
                                  </svg>
                                  <i />
                                </span>{' '}
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                  <b>{'Recording intro'}</b>
                                  <small>{'30-second video'}</small>
                                </span>
                              </div>
                              <span className="japdone">
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
                                {'Profile ready'}
                              </span>
                            </div>
                          </>
                        ) : null}{' '}
                        {s_2?.isBrowse ? (
                          <>
                            <div className="jabrowse">
                              <div className="jamini m2" />
                              <div className="jamini">
                                <span className="jamimg">
                                  <img src="/images/1f30884c024ee18f1be73c2015c5653d.png" alt="" />
                                </span>{' '}
                                <b>{'Customer Service'}</b>
                                <small>{'FIT HUB · 15 km'}</small>
                              </div>
                              <span className="jamapply">{'Lamar'}</span>{' '}
                              <span className="jamtoast">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12l5 5L20 7" />
                                </svg>
                                {'Application sent'}
                              </span>
                            </div>
                          </>
                        ) : null}{' '}
                        {s_2?.isChat ? (
                          <>
                            <div className="jachat">
                              <div className="jacb them">
                                <b>{'FIT HUB'}</b>
                                {'Hi Putu! We liked your video. Free for an interview?'}
                              </div>
                              <div className="jacb me">{"Yes, I'm available!"}</div>
                              <div className="jainv">
                                <span className="jainvic">
                                  <svg
                                    width="16"
                                    height="16"
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
                                </span>{' '}
                                <span style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                                  <b>{'Interview invite'}</b>
                                  <small>{'Thu · 10:00'}</small>
                                </span>{' '}
                                <span className="jaacc">{'Accept'}</span>
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
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '112px', paddingBottom: '104px' }}>
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
              {'Every field'}
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
              {'Jobs across every field.'}
            </h2>
          </div>
          <span style={{ fontSize: '14px', color: '#535862' }}>{'From the shop floor to the office.'}</span>
        </div>
        <div className="jafields rv-s">
          {L(v.fields).map((f_3, i_3) => (
            <React.Fragment key={i_3}>
              <div className="jafield">
                <span className="jafic" style={S(f_3?.ic)}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={f_3?.icon} />
                  </svg>
                </span>{' '}
                <b>{T(f_3?.name)}</b> <small>{T(f_3?.roles)}</small>{' '}
                <span className="jafgo" style={S(f_3?.go)} aria-hidden="true">
                  {'→'}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="jacta rv">
          <span className="jactaring" aria-hidden="true" />{' '}
          <span className="jactaring r2" aria-hidden="true" />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <img
              src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png"
              alt=""
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                boxShadow: '0 12px 24px -10px rgba(0,0,0,.5)',
              }}
            />
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '44px',
                lineHeight: '52px',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                color: '#ffffff',
              }}
            >
              {'Your new career is one download away.'}
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '440px',
                fontSize: '17px',
                lineHeight: '28px',
                color: '#ffd1ea',
              }}
            >
              {'Thousands of verified jobs. Apply with a 30-second video.'}
            </p>
            <div className="jastores">
              <a href="#" aria-label="Download on the App Store">
                <img src="/images/f67a83a01fce23124fe2b38912976391.svg" alt="Download on the App Store" />
              </a>{' '}
              <a href="#" aria-label="Get it on Google Play">
                <img src="/images/1ebef8361229ddc797a9a35153a6a3ff.svg" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="jactafeed" aria-hidden="true">
            <div className="jactatrack">
              <span className="jactan">
                <i style={{ background: '#17b26a' }} />
                <b>{'Application sent'}</b>
                <small>{'Customer Service · FIT HUB'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#ff2f9f' }} />
                <b>{'Video viewed'}</b>
                <small>{'by RS Mitra Keluarga'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#3366ff' }} />
                <b>{'New message'}</b>
                <small>{'"Free for an interview?"'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#f79009' }} />
                <b>{'Interview invite'}</b>
                <small>{'Thu · 10:00'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#17b26a' }} />
                <b>{"You're hired!"}</b>
                <small>{'Welcome to the team'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#17b26a' }} />
                <b>{'Application sent'}</b>
                <small>{'Customer Service · FIT HUB'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#ff2f9f' }} />
                <b>{'Video viewed'}</b>
                <small>{'by RS Mitra Keluarga'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#3366ff' }} />
                <b>{'New message'}</b>
                <small>{'"Free for an interview?"'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#f79009' }} />
                <b>{'Interview invite'}</b>
                <small>{'Thu · 10:00'}</small>
              </span>{' '}
              <span className="jactan">
                <i style={{ background: '#17b26a' }} />
                <b>{"You're hired!"}</b>
                <small>{'Welcome to the team'}</small>
              </span>
            </div>
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
                {L(v.amMsgs).map((m_4, i_4) => (
                  <React.Fragment key={i_4}>
                    <div className={`ammsg ${T(m_4?.who)}`}>
                      {T(m_4?.t)}
                      {m_4?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_4?.href)}>
                            {T(m_4?.link)}
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
                    {L(v.amSugs).map((sg_5, i_5) => (
                      <React.Fragment key={i_5}>
                        <button type="button" className="asug" onClick={sg_5?.go}>
                          {T(sg_5?.t)}
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
