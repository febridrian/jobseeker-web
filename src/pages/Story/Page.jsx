// About — Our story
// Generated from the design artboard Story.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, lang: 'EN', yi: 0, k: 0, ci: 0 };
    this.ccPaused = false;
    this.AMING = [
      {
        l: 'A',
        title: 'Act Like an Owner',
        d: 'We own outcomes, not just tasks.',
        navy: 'M24 18a7 7 0 1 0 0.01 0M12 54V46a12 12 0 0 1 24 0v8M18 40l6 6M30 40v14',
        pink: 'M46 10l2.5 5.5 6 .7-4.5 4 1.3 6-5.3-3-5.3 3 1.3-6-4.5-4 6-.7z',
      },
      {
        l: 'M',
        title: 'Mission First',
        d: 'We prioritize work that drives impact.',
        navy: 'M6 54l18-28 10 14 6-8 18 22zM34 10v20',
        pink: 'M34 10h12l-3 4 3 4H34M18 36l6-10 4 6',
      },
      {
        l: 'I',
        title: 'Integrity',
        d: 'We are guided by truth, even when it is uncomfortable.',
        navy: 'M32 6l20 8v14c0 14-9 24-20 28-11-4-20-14-20-28V14z',
        pink: 'M23 31l7 7 12-13M6 18l-4-2M58 18l4-2M6 34H2M58 34h4',
      },
      {
        l: 'N',
        title: 'Never Stop Growing',
        d: 'We are always learning and always improving.',
        navy: 'M10 54V42h10v12M26 54V34h10v20M42 54V26h10v28M6 56h52',
        pink: 'M8 34C24 30 38 22 54 8M46 8h8v8',
      },
      {
        l: 'G',
        title: 'Go Extramiles',
        d: 'We raise the standard of how we think, execute, and deliver.',
        navy: 'M32 8a24 24 0 1 0 0.01 0M32 18a14 14 0 1 0 0.01 0',
        pink: 'M32 28a4 4 0 1 0 0.01 0M32 32L54 10M48 8l6 2 2 6',
      },
    ];
    this.paused = false;
    const B = (id) => '/_blob/' + id;
    this.YEARS = [
      {
        y: '2023',
        tag: 'Founded',
        d: 'Founded in Bali. Initial team starts building the Jobseeker App.',
        c: '#e4007e',
      },
      {
        y: '2024',
        tag: 'For employers',
        d: 'Launch HRMS and expand the product suite for employers. Strategic partnership with Lion Super Indo (July 2024) as one of our first enterprise clients.',
        c: '#3366ff',
        logos: [
          ['HRMS', '06922c52c0d826c56143c4224b8fb845'],
          ['Lion Super Indo', '6a46d25389b849ee192dfda89ea93deb'],
        ],
      },
      {
        y: '2024–25',
        tag: 'Scale',
        d: 'Onboard 40,000+ employers. Reach 3.9M+ candidates in our database.',
        c: '#0031b3',
        stats: [
          ['40,000+', 'employers onboarded'],
          ['3.9M+', 'candidates in database'],
        ],
      },
      {
        y: '2025',
        tag: 'Expansion',
        d: '420,000+ candidates successfully placed. Office expansion to Jakarta and Singapore.',
        c: '#009800',
        stats: [
          ['420,000+', 'candidates placed'],
          ['+2', 'offices: Jakarta & Singapore'],
        ],
      },
      {
        y: '2026',
        tag: 'Ecosystem',
        d: 'Complete 7-product workforce ecosystem.',
        c: '#050774',
        logos: [
          ['HRMS', '06922c52c0d826c56143c4224b8fb845'],
          ['J-Partners', '2e0842aec39ea4bc17e6d544749982f9'],
          ['Talent Augmentation', '0934d72a7333f2a8976ae385b4569280'],
          ['Executive Search', '0934d72a7333f2a8976ae385b4569280'],
          ['Corporate Training', 'c2c0bd06446c497f081ebea85a1bf425'],
          ['Jobseeker App', '4a0dd97415f6c2f2d2931c4e002cf8ed'],
          ['Jobseeker Academy', 'c2c0bd06446c497f081ebea85a1bf425'],
        ],
      },
    ].map((y) => ({
      ...y,
      logos: (y.logos || []).map(([n, id], i) => ({
        n,
        src: B(id),
        delay: { animationDelay: 0.1 + i * 0.08 + 's' },
      })),
      stats: (y.stats || []).map(([b, t]) => ({ b, t })),
    }));
  }
  componentDidMount() {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      this.cycle();
      this.cct = setInterval(() => {
        if (!this.ccPaused) this.setState({ ci: (this.state.ci + 1) % this.AMING.length });
      }, 3200);
    }
    const run = () => {
      if (this.ran) return;
      this.ran = true;
      if (reduce) {
        this.setState({ k: 1 });
        return;
      }
      const t0 = Date.now(),
        D = 1800;
      const step = () => {
        const p = Math.min(1, (Date.now() - t0) / D);
        this.setState({ k: 1 - Math.pow(1 - p, 3) });
        if (p < 1) this.raf = requestAnimationFrame(step);
      };
      step();
    };
    const el = document.getElementById('ststats');
    if (el && 'IntersectionObserver' in window) {
      this.io = new IntersectionObserver(
        (es) => {
          if (es.some((e) => e.isIntersecting)) run();
        },
        { threshold: 0.3 },
      );
      this.io.observe(el);
    } else run();
  }
  componentWillUnmount() {
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
    clearInterval(this.t);
    clearInterval(this.cct);
    if (this.io) this.io.disconnect();
    if (this.raf) cancelAnimationFrame(this.raf);
  }
  cycle() {
    if (this.t) clearInterval(this.t);
    this.t = setInterval(() => {
      if (!this.paused) this.setState({ yi: (this.state.yi + 1) % this.YEARS.length });
    }, 5500);
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
    const yi = this.state.yi,
      k = this.state.k;
    const f = (n) => Math.round(n).toLocaleString('en-US');
    return {
      ...this.amVals(),
      menuOpen: this.state.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      n1: (3.9 * k).toFixed(1) + 'M+',
      n2: f(40000 * k) + '+',
      n3: f(420000 * k) + '+',
      n4: String(Math.round(7 * k)),
      years: this.YEARS.map((y, i) => ({
        ...y,
        on: i === yi,
        cls: i === yi ? 'on' : i < yi ? 'done' : '',
        bigStyle: { background: y.c },
        tagStyle: { background: '#f2f3f8', color: y.c },
        hasLogos: y.logos.length > 0,
        hasStat: y.stats.length > 0,
        pick: () => {
          this.setState({ yi: i });
          this.cycle();
        },
      })),
      aming: this.AMING.map((v, i) => ({
        ...v,
        on: i === this.state.ci,
        cls: i === this.state.ci ? 'on' : '',
        delay: { animationDelay: 0.08 * i + 's' },
        pick: () => {
          this.ccPaused = true;
          this.setState({ ci: i });
        },
      })),
      ccPause: () => {
        this.ccPaused = true;
      },
      ccResume: () => {
        this.ccPaused = false;
      },
      railFill: { width: (yi / (this.YEARS.length - 1)) * 100 + '%' },
      jPause: () => {
        this.paused = true;
      },
      jResume: () => {
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
            href="/"
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
              <a className="navlink nbtn" href="/" aria-haspopup="true">
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
        <div className="wrap" style={{ position: 'relative', paddingTop: '64px', paddingBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '18px',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            <nav className="stcrumb rise d1" aria-label="Breadcrumb">
              <a href="/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/about/">{'About'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Our story'}</b>
            </nav>
            <span
              className="rise d1"
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                background: '#f2f3f8',
                fontSize: '13px',
                fontWeight: '700',
                color: '#050774',
              }}
            >
              {'Our story'}
            </span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '62px',
                lineHeight: '68px',
                fontWeight: '700',
                letterSpacing: '-0.04em',
                color: '#050774',
              }}
            >
              {'It started with a '}
              <span className="sthl">{'simple observation.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '560px',
                fontSize: '20px',
                lineHeight: '31px',
                color: '#535862',
              }}
            >
              {'Indonesia needs a better way to connect people with work.'}
            </p>
          </div>
          <div className="stmap rise d4" aria-label="Our offices: Bali HQ, Jakarta and Singapore">
            <img className="stmapimg" src="/images/00839356f328bef714f13df5d009e067.webp" alt="" />{' '}
            <svg className="starcs" viewBox="0 0 100 36" preserveAspectRatio="none" aria-hidden="true">
              <path className="starc a1" d="M44.5 31.5 Q 35 16 25.5 27.5" />
              <path className="starc a2" d="M25.5 27.5 Q 21 18 20 15.5" />
            </svg>{' '}
            <span className="stpin hq" style={{ left: '44.5%', top: '87%' }}>
              <i />
              <span className="stpl">
                <b>{'Bali HQ'}</b>
                <small>{'J-Loft, Jimbaran · 2023'}</small>
              </span>
            </span>{' '}
            <span className="stpin" style={{ left: '25.5%', top: '76%' }}>
              <i />
              <span className="stpl">
                <b>{'Jakarta'}</b>
                <small>{'Menara Kompas · 2025'}</small>
              </span>
            </span>{' '}
            <span className="stpin up" style={{ left: '20%', top: '43%' }}>
              <i />
              <span className="stpl">
                <b>{'Singapore'}</b>
                <small>{'International Plaza · 2025'}</small>
              </span>
            </span>
          </div>
          <div className="ststats" id="ststats">
            <div className="ststat">
              <b>{T(v.n1)}</b>
              <span>{'candidates in our database'}</span>
            </div>
            <div className="ststat">
              <b>{T(v.n2)}</b>
              <span>{'employers onboarded'}</span>
            </div>
            <div className="ststat">
              <b>{T(v.n3)}</b>
              <span>{'candidates placed'}</span>
            </div>
            <div className="ststat">
              <b>{T(v.n4)}</b>
              <span>{'products, one ecosystem'}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '72px', paddingBottom: '104px' }}>
        <div className="storigin">
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
              {'Origin'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '36px',
                lineHeight: '44px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#050774',
              }}
            >
              {'Founded in 2023, with a clear mission.'}
            </h2>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '28px', color: '#414651' }}>
              {
                'Jobseeker Company was established in 2023 with a clear mission: to bridge job seekers with better employment opportunities. Our founders saw a wide gap between the talent available in Indonesia and their access to the right opportunities — especially for the underserved blue-collar segment.'
              }
            </p>
            <div className="stgap" aria-hidden="true">
              <span className="stgl">
                <b>{'Talent'}</b>
                <small>{'available in Indonesia'}</small>
              </span>{' '}
              <span className="stgbridge">
                <i />
                <em>{'Jobseeker'}</em>
              </span>{' '}
              <span className="stgl r">
                <b>{'Opportunity'}</b>
                <small>{'the right jobs'}</small>
              </span>
            </div>
          </div>
          <div className="stmission rv">
            <span className="stquote" aria-hidden="true">
              {'“'}
            </span>{' '}
            <span
              style={{
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#ffb0da',
              }}
            >
              {'Our mission'}
            </span>
            <p>
              {
                'To bridge job seekers with better employment opportunities — connecting people with opportunities, so every Indonesian can live a '
              }
              <span className="stmhl">{'better life through better work.'}</span>
            </p>
            <img
              src="/images/1976305d6893a6ac268c4f73d828678d.png"
              alt="Jobseeker Company"
              className="stmlogo"
            />
          </div>
        </div>
      </section>
      <section id="journey" style={{ background: '#fafafa', padding: '104px 0' }}>
        <div className="wrap">
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#cd0071',
                }}
              >
                {'Our journey'}
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
                {'From Bali to a full ecosystem.'}
              </h2>
            </div>
            <span style={{ fontSize: '14px', color: '#535862' }}>{'Tap a year to jump.'}</span>
          </div>
          <div className="stjour rv" onMouseEnter={v.jPause} onMouseLeave={v.jResume}>
            <div className="styears" role="tablist" aria-label="Years">
              <span className="styrail" aria-hidden="true">
                <i style={S(v.railFill)} />
              </span>{' '}
              {L(v.years).map((y_0, i_0) => (
                <React.Fragment key={i_0}>
                  <button
                    type="button"
                    role="tab"
                    className={`styear ${T(y_0?.cls)}`}
                    aria-selected={y_0?.on}
                    onClick={y_0?.pick}
                  >
                    <span className="stydot" />
                    <b>{T(y_0?.y)}</b>
                  </button>
                </React.Fragment>
              ))}
            </div>
            {L(v.years).map((y_1, i_1) => (
              <React.Fragment key={i_1}>
                {y_1?.on ? (
                  <>
                    <div className="stpane">
                      <div className="stpbig" style={S(y_1?.bigStyle)}>
                        <span>{T(y_1?.y)}</span>
                      </div>
                      <div className="stpbody">
                        <span className="stptag" style={S(y_1?.tagStyle)}>
                          {T(y_1?.tag)}
                        </span>
                        <p>{T(y_1?.d)}</p>
                        {y_1?.hasLogos ? (
                          <>
                            <div className="stplogos">
                              {L(y_1?.logos).map((l_2, i_2) => (
                                <React.Fragment key={i_2}>
                                  <span className="stplogo" style={S(l_2?.delay)}>
                                    <img src={A(l_2?.src)} alt="" />
                                    <small>{T(l_2?.n)}</small>
                                  </span>
                                </React.Fragment>
                              ))}
                            </div>
                          </>
                        ) : null}{' '}
                        {y_1?.hasStat ? (
                          <>
                            <div className="stpstats">
                              {L(y_1?.stats).map((s_3, i_3) => (
                                <React.Fragment key={i_3}>
                                  <span className="stpstat">
                                    <b>{T(s_3?.b)}</b>
                                    <small>{T(s_3?.t)}</small>
                                  </span>
                                </React.Fragment>
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '104px' }}>
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
            {'Value'}
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
            {'What we believe.'}
          </h2>
        </div>
        <div className="stvals rv-s">
          <div className="stval">
            <span className="stvic" style={{ background: '#ffe3f2', color: '#b8006a' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </span>{' '}
            <span className="stvn">{'01'}</span>
            <h3>{'People First'}</h3>
            <p>
              {'Every decision starts with: ‘Does this help our jobseekers and clients live better lives?’'}
            </p>
          </div>
          <div className="stval">
            <span className="stvic" style={{ background: '#fee4e2', color: '#b42318' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </span>{' '}
            <span className="stvn">{'02'}</span>
            <h3>{'Indonesia-First'}</h3>
            <p>{'We build for the local market — with the right compliance, language, and context.'}</p>
          </div>
          <div className="stval">
            <span className="stvic" style={{ background: '#eaf1ff', color: '#0031b3' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
            </span>{' '}
            <span className="stvn">{'03'}</span>
            <h3>{'Tech That Works With People'}</h3>
            <p>{'Tech accelerates the process, our team ensures the quality. Not blind automation.'}</p>
          </div>
          <div className="stval">
            <span className="stvic" style={{ background: '#e6f7e6', color: '#006600' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 17l2 2a1 1 0 1 0 3-3M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a2 2 0 0 0-2.8 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a3 3 0 0 1 3.6-.5l.6.4a2 2 0 0 0 1.4.2L21 4M21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" />
              </svg>
            </span>{' '}
            <span className="stvn">{'04'}</span>
            <h3>{'Long-term Partnership'}</h3>
            <p>{"Our clients aren't transactions, they're partners on a long-term journey."}</p>
          </div>
        </div>
      </section>
      <section id="culture" className="cc">
        <span className="ccdots" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative', paddingTop: '104px', paddingBottom: '104px' }}>
          <div className="cchead rv">
            <div className="cctitle">
              <span className="cceyebrow">
                <i />
                {'Our culture code'}
                <i />
              </span>
              <div className="ccword" role="tablist" aria-label="AMING values">
                {L(v.aming).map((v_4, i_4) => (
                  <React.Fragment key={i_4}>
                    <button
                      type="button"
                      role="tab"
                      className={`ccl ${T(v_4?.cls)}`}
                      style={S(v_4?.delay)}
                      aria-selected={v_4?.on}
                      aria-label={v_4?.title}
                      onClick={v_4?.pick}
                    >
                      {T(v_4?.l)}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <span className="cctag">{'Aiming Higher.'}</span>
            </div>
          </div>
          <div className="cccards rv-s" onMouseEnter={v.ccPause} onMouseLeave={v.ccResume}>
            {L(v.aming).map((v_5, i_5) => (
              <React.Fragment key={i_5}>
                <button
                  type="button"
                  className={`cccard ${T(v_5?.cls)}`}
                  onClick={v_5?.pick}
                  aria-pressed={v_5?.on}
                >
                  <span className="ccbadge">{T(v_5?.l)}</span>{' '}
                  <span className="ccic">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={v_5?.navy} stroke="#050774" strokeWidth="3" />
                      <path className="ccpk" d={v_5?.pink} stroke="#e4007e" strokeWidth="3" />
                    </svg>
                  </span>{' '}
                  <b>{T(v_5?.title)}</b> <i className="ccrule" /> <small>{T(v_5?.d)}</small>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: '#fafafa', padding: '104px 0' }}>
        <div className="wrap stwhy">
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
              {'The challenge'}
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
              {'Why Indonesia? Why now?'}
            </h2>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '28px', color: '#414651' }}>
              {
                'Indonesia faces real workforce challenges. But more importantly, access to opportunities remains uneven — especially for the non-white-collar segment that makes up the majority of the workforce.'
              }
            </p>
          </div>
          <div className="stchal rv-s">
            <div className="stc">
              <div className="stcviz" aria-hidden="true">
                <span className="stpod">
                  <i style={{ height: '92%' }} />
                  <em>{'1'}</em>
                </span>
                <span className="stpod">
                  <i style={{ height: '78%' }} />
                  <em>{'2'}</em>
                </span>
                <span className="stpod hot">
                  <i style={{ height: '64%' }} />
                  <em>{'3'}</em>
                </span>
              </div>
              <b>{'Top 3'}</b> <span>{'highest turnover rates in Southeast Asia'}</span>{' '}
              <small>{'Hay Group 2024'}</small>
            </div>
            <div className="stc">
              <div className="stcviz" aria-hidden="true">
                <span className="stcal">
                  <svg viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="27" />
                    <circle className="stcalp" cx="32" cy="32" r="27" />
                  </svg>
                  <em>{'43'}</em>
                </span>
              </div>
              <b>{'43 days'}</b> <span>{'average time-to-hire'}</span> <small>{'Talentics 2023'}</small>
            </div>
            <div className="stc">
              <div className="stcviz" aria-hidden="true">
                <span className="stcost">
                  <i className="c1" />
                  <i className="c2" />
                </span>
                <span className="stcostl">
                  <em>{'50%'}</em>
                  <em>{'200%'}</em>
                </span>
              </div>
              <b>{'50–200%'}</b> <span>{'of annual salary to replace an employee'}</span>{' '}
              <small>{'Gallup & SHRM'}</small>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '112px' }}>
        <div className="stgo rv">
          <img
            className="stgomap"
            src="/images/00839356f328bef714f13df5d009e067.webp"
            alt=""
            aria-hidden="true"
          />
          <div className="stgotx">
            <span
              style={{
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#ffb0da',
              }}
            >
              {"Where we're going"}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '40px',
                lineHeight: '48px',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                color: '#ffffff',
              }}
            >
              {'The primary workforce infrastructure for Indonesia and Southeast Asia.'}
            </h2>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '28px', color: '#cdcde3' }}>
              {
                'One ecosystem connecting millions of jobseekers with hundreds of thousands of employers, from SMEs to enterprises, from blue-collar to executive.'
              }
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn stbtn" href="/customers/">
                {'Become a customer '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>{' '}
              <a className="btn stbtn2" href="#">
                {'Join our team'}
              </a>
            </div>
          </div>
          <div className="stcollage" aria-hidden="true">
            <img className="stph p1" src="/images/071d0ecd6e9f700247e7fb7cf345afb8.webp" alt="" />{' '}
            <img className="stph p2" src="/images/e57099753e7fab858c57ab16f365da68.webp" alt="" />{' '}
            <img className="stph p3" src="/images/3d210c9ca4a97fd96cf2f3891132b134.webp" alt="" />{' '}
            <img className="stph p4" src="/images/10ceea26110144e6545dfe8fbb28d953.webp" alt="" />{' '}
            <img className="stph p5" src="/images/fc1700c064b160bc6b6d5c272b77677b.webp" alt="" />
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
                {L(v.amMsgs).map((m_6, i_6) => (
                  <React.Fragment key={i_6}>
                    <div className={`ammsg ${T(m_6?.who)}`}>
                      {T(m_6?.t)}
                      {m_6?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_6?.href)}>
                            {T(m_6?.link)}
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
                    {L(v.amSugs).map((sg_7, i_7) => (
                      <React.Fragment key={i_7}>
                        <button type="button" className="asug" onClick={sg_7?.go}>
                          {T(sg_7?.t)}
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
