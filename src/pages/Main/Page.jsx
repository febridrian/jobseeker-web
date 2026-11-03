// Home
// Generated from the design artboard Main.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      p: 0,
      cp: 0,
      ci: 0,
      lang: 'EN',
      f: 'all',
      aiQ: '',
      aiPhase: 'idle',
      aiKey: 0,
      aiDraft: '',
      fabOpen: false,
      fabHint: false,
    };
    this.started = false;
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
    const ph = (name) =>
      '[Add ' + name + '’s story: what they hired for, how Jobseeker helped, and the results.]';
    this.CS = [
      {
        short: 'Super Indo',
        name: 'Lion Super Indo',
        logo: '/_blob/6a46d25389b849ee192dfda89ea93deb',
        since: 'Since July 2024',
        hires: 5926,
        rate: 87,
        cand: 358363,
        apps: 446108,
        bulk: 100,
        desc: 'Since July 2024, Super Indo has processed 358,363 candidates and 446,108 applications through our platform — with bulk processing of up to 100 candidates at once.',
      },
      {
        short: 'Alfamart',
        name: 'Alfamart',
        logo: '/_blob/aac027953cffa08e93c5427d123a6e9a',
        since: 'Since [MONTH YEAR]',
        hires: null,
        desc: ph('Alfamart'),
      },
      {
        short: 'Indomaret',
        name: 'Indomaret',
        logo: '/_blob/7bce058060ce5d73ab2f18f43e88ed26',
        since: 'Since [MONTH YEAR]',
        hires: null,
        desc: ph('Indomaret'),
      },
      {
        short: 'Mitra Keluarga',
        name: 'Mitra Keluarga',
        logo: '/_blob/acc184efccfeb8469aae7d4baabdd58d',
        since: 'Since [MONTH YEAR]',
        hires: null,
        desc: ph('Mitra Keluarga'),
      },
    ];
    this.JOBS = [
      { t: 'Retail store crew', m: 'Jakarta Selatan · 1.2 km' },
      { t: 'Barista', m: 'Tangerang · 2.0 km' },
      { t: 'Warehouse staff', m: 'Bekasi · 3.4 km' },
      { t: 'Cashier', m: 'Denpasar · 0.8 km' },
      { t: 'Delivery rider', m: 'Bandung · 1.5 km' },
    ];
    this.SUGS = [
      'Find 20 store crew near Jimbaran, Bali',
      'Screen applicants for our cashier role',
      'Draft a job post for a barista in Jakarta',
    ];
    const pc = (s) =>
      s.endsWith('%')
        ? { background: '#ecfdf3', color: '#067647' }
        : { background: '#f2f3f8', color: '#050774' };
    const mk = (rows) =>
      rows.map((r, i) => ({
        ...r,
        delay: { animationDelay: 0.1 + i * 0.15 + 's' },
        avStyle: { background: r.bg, color: r.fg },
        scoreStyle: pc(r.s),
      }));
    this.ANS = [
      {
        intro: 'Here are top matches within 5 km — verified, with video resumes ready.',
        actions: ['Invite all to interview', 'Show more matches'],
        rows: mk([
          {
            ini: 'PA',
            n: 'Putu A.',
            m: 'Store crew · 1.2 km · Video resume',
            s: '96%',
            bg: '#ffe3f2',
            fg: '#b8006a',
          },
          { ini: 'KS', n: 'Komang S.', m: 'Retail cashier · 2.4 km', s: '92%', bg: '#eaf1ff', fg: '#0031b3' },
          {
            ini: 'WD',
            n: 'Wayan D.',
            m: 'Retail · 3.1 km · Available now',
            s: '89%',
            bg: '#e6f7e6',
            fg: '#006600',
          },
        ]),
      },
      {
        intro: 'Applicants ranked by fit. Your shortlist is ready to review.',
        actions: ['Send interview invites', 'Export shortlist'],
        rows: mk([
          {
            ini: 'RF',
            n: 'Rina F.',
            m: '2 yrs cashier · Video resume',
            s: 'Strong fit',
            bg: '#e6e6f1',
            fg: '#050774',
          },
          {
            ini: 'DN',
            n: 'Dimas N.',
            m: '1 yr retail · Weekend shifts',
            s: 'Good fit',
            bg: '#fffaeb',
            fg: '#b54708',
          },
          {
            ini: 'YP',
            n: 'Yuni P.',
            m: 'New grad · Customer service',
            s: 'Review',
            bg: '#ffe3f2',
            fg: '#b8006a',
          },
        ]),
      },
      {
        intro: 'Draft ready. Edit it, then publish to Jobseeker App.',
        actions: ['Edit draft', 'Publish to Jobseeker App'],
        rows: mk([
          {
            ini: 'JP',
            n: 'Barista — Jakarta Selatan',
            m: 'Full-time · Shift-based',
            s: 'Title',
            bg: '#eaf1ff',
            fg: '#0031b3',
          },
          {
            ini: '01',
            n: 'Prepare drinks & keep the bar clean',
            m: 'Responsibilities',
            s: 'Draft',
            bg: '#f2f3f8',
            fg: '#050774',
          },
          {
            ini: '02',
            n: 'Coffee experience is a plus',
            m: 'Requirements',
            s: 'Draft',
            bg: '#f2f3f8',
            fg: '#050774',
          },
        ]),
      },
    ];
  }
  ask(text, idx) {
    const t = (text || '').trim();
    if (!t) return;
    this.clearAi();
    const ans =
      idx != null ? this.ANS[idx] : { ...this.ANS[0], intro: 'Here is a sample shortlist for your request.' };
    this.ans = ans;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      this.setState({ aiQ: t, aiPhase: 'done', aiDraft: '', aiKey: this.state.aiKey + 1 });
      return;
    }
    this.setState({ aiQ: '', aiPhase: 'typing', aiDraft: '', aiKey: this.state.aiKey + 1 });
    let i = 0;
    this.typer = setInterval(() => {
      i += 2;
      this.setState({ aiQ: t.slice(0, i) });
      if (i >= t.length) {
        clearInterval(this.typer);
        this.setState({ aiQ: t, aiPhase: 'thinking' });
        this.think = setTimeout(() => this.setState({ aiPhase: 'done' }), 1400);
      }
    }, 28);
  }
  clearAi() {
    if (this.typer) clearInterval(this.typer);
    if (this.think) clearTimeout(this.think);
  }
  componentDidMount() {
    this.hint = setTimeout(() => this.setState({ fabHint: true }), 2500);
    this.hintOff = setTimeout(() => this.setState({ fabHint: false }), 9000);
    const start = () => {
      if (this.started) return;
      this.started = true;
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        this.setState({ p: 1 });
        return;
      }
      const t0 = performance.now(),
        dur = 1800;
      const tick = (t) => {
        const x = Math.min(1, (t - t0) / dur);
        this.setState({ p: 1 - Math.pow(1 - x, 3) });
        if (x < 1) this.raf = requestAnimationFrame(tick);
      };
      this.raf = requestAnimationFrame(tick);
    };
    const hook = () => {
      const el = document.getElementById('stats');
      if (!el) {
        this.retry = setTimeout(hook, 300);
        return;
      }
      if ('IntersectionObserver' in window) {
        this.io = new IntersectionObserver(
          (es) => {
            if (es.some((e) => e.isIntersecting)) {
              start();
              this.io.disconnect();
            }
          },
          { threshold: 0.35 },
        );
        this.io.observe(el);
      } else {
        start();
      }
    };
    hook();
    const caseHook = () => {
      const el = document.getElementById('case');
      if (!el) {
        this.retry2 = setTimeout(caseHook, 300);
        return;
      }
      const run = () => {
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
          this.setState({ cp: 1 });
          return;
        }
        const t0 = performance.now(),
          dur = 1800;
        const tick = (t) => {
          const x = Math.min(1, (t - t0) / dur);
          this.setState({ cp: 1 - Math.pow(1 - x, 3) });
          if (x < 1) this.raf2 = requestAnimationFrame(tick);
        };
        this.raf2 = requestAnimationFrame(tick);
      };
      if (!('IntersectionObserver' in window)) {
        run();
        return;
      }
      this.io2 = new IntersectionObserver(
        (es) => {
          if (es.some((e) => e.isIntersecting)) {
            run();
            this.io2.disconnect();
          }
        },
        { threshold: 0.35 },
      );
      this.io2.observe(el);
    };
    caseHook();
    this.csCycle();
  }
  csCycle() {
    if (this.csT) clearInterval(this.csT);
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    this.csT = setInterval(() => {
      if (!this.csPaused) this.csGo((this.state.ci + 1) % this.CS.length, true);
    }, 8000);
  }
  csGo(i, auto) {
    if (this.raf2) cancelAnimationFrame(this.raf2);
    this.setState({ ci: i, cp: 0 });
    const t0 = performance.now(),
      dur = 1600;
    const tick = (t) => {
      const x = Math.min(1, (t - t0) / dur);
      this.setState({ cp: 1 - Math.pow(1 - x, 3) });
      if (x < 1) this.raf2 = requestAnimationFrame(tick);
    };
    this.csStart = setTimeout(() => {
      this.raf2 = requestAnimationFrame(tick);
    }, 60);
    if (!auto) this.csCycle();
  }
  csVals() {
    const c = this.CS[this.state.ci],
      p = this.state.cp;
    const fmt = (v) => Math.round(v * p).toLocaleString('en-US');
    const has = c.hires != null;
    return {
      csc: {
        name: c.name,
        logo: c.logo,
        alt: c.name + ' logo',
        since: c.since,
        hiresTxt: has ? c.hires.toLocaleString('en-US') + '+' : '[HIRES]',
        rateTxt: has ? c.rate + '%' : '[RATE]%',
        bulkTxt: has ? String(c.bulk) : '[N]',
        desc: c.desc,
      },
      cs1: has ? fmt(c.apps) : '[APPLICATIONS]',
      cs2: has ? fmt(c.cand) : '[CANDIDATES]',
      cs3: has ? fmt(c.hires) + '+' : '[HIRES]',
      cs4: has ? Math.round(c.rate * p) + '%' : '—',
      gaugeStyle: { strokeDashoffset: 251.3 * (1 - (has ? c.rate / 100 : 0) * p) },
      csTabs: this.CS.map((x, i) => ({
        short: x.short,
        logo: x.logo,
        on: i === this.state.ci,
        cls: i === this.state.ci ? 'on' : '',
        pick: () => this.csGo(i),
      })),
      csPause: () => {
        this.csPaused = true;
      },
      csResume: () => {
        this.csPaused = false;
      },
    };
  }
  componentWillUnmount() {
    if (this.io) this.io.disconnect();
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.retry) clearTimeout(this.retry);
    this.clearAi();
    if (this.io2) this.io2.disconnect();
    if (this.raf2) cancelAnimationFrame(this.raf2);
    if (this.retry2) clearTimeout(this.retry2);
    if (this.csT) clearInterval(this.csT);
    if (this.csStart) clearTimeout(this.csStart);
    if (this.hint) clearTimeout(this.hint);
    if (this.hintOff) clearTimeout(this.hintOff);
  }
  renderVals() {
    const p = this.state.p;
    const f = this.state.f;
    const dim = (g) => (f === 'all' || f === g ? '' : 'dim');
    const on = (g) => (f === g ? 'on' : '');
    return {
      cAll: on('all'),
      cHire: on('hire'),
      cManage: on('manage'),
      cGrow: on('grow'),
      isAll: f === 'all',
      isHire: f === 'hire',
      isManage: f === 'manage',
      isGrow: f === 'grow',
      dHire: dim('hire'),
      dManage: dim('manage'),
      dGrow: dim('grow'),
      fAll: () => this.setState({ f: 'all' }),
      fHire: () => this.setState({ f: 'hire' }),
      fManage: () => this.setState({ f: 'manage' }),
      fGrow: () => this.setState({ f: 'grow' }),
      ...this.csVals(),
      fb1: { width: (this.state.cp > 0 ? 100 : 0) + '%', background: '#a8a8ce' },
      fb2: { width: (this.state.cp > 0 ? 80 : 0) + '%', background: '#444597' },
      fb3: { width: (this.state.cp > 0 ? 34 : 0) + '%', background: '#cd0071' },

      appJobs: this.JOBS.concat(this.JOBS),
      clients: this.CLIENTS.concat(this.CLIENTS.map((c) => ({ ...c, alt: '', hidden: true }))),
      aiHasQ: this.state.aiPhase !== 'idle',
      aiQ: this.state.aiQ,
      aiTyping: this.state.aiPhase === 'typing',
      aiThinking: this.state.aiPhase === 'thinking',
      aiDone: this.state.aiPhase === 'done',
      aiIntro: this.ans ? this.ans.intro : '',
      aiResults: this.ans ? this.ans.rows : [],
      aiActions: this.ans ? this.ans.actions : [],
      aiDraft: this.state.aiDraft,
      aiChange: (e) => this.setState({ aiDraft: e.target.value }),
      aiSubmit: (e) => {
        e.preventDefault();
        const d = this.state.aiDraft;
        const k = this.SUGS.indexOf(d.trim());
        this.ask(d, k >= 0 ? k : null);
      },
      aiSugs: this.SUGS.map((t, k) => ({
        t,
        go: () => this.ask(t, k),
        goFab: () => {
          this.setState({ fabOpen: false });
          this.ask(t, k);
        },
      })),
      askHero: () => this.ask(this.SUGS[0], 0),
      fabOpen: this.state.fabOpen,
      fabHint: this.state.fabHint && !this.state.fabOpen,
      toggleFab: () => this.setState({ fabOpen: !this.state.fabOpen, fabHint: false }),
      menuOpen: this.state.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      s1: (3.9 * p).toFixed(1) + 'M+',
      s2: Math.round(40 * p) + 'K+',
      s3: (1.8 * p).toFixed(1) + 'M+',
      s4: Math.round(420 * p) + 'K+',
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
            href="#top"
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
              <a className="navlink nbtn" href="#audiences" aria-haspopup="true">
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
      <section id="top" className="wrap" style={{ paddingTop: '88px', paddingBottom: '96px' }}>
        <div className="hero">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
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
                color: '#050774',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                boxShadow: '0 0 0 1px #e9eaeb, 0 6px 16px -10px rgba(5,7,116,.3)',
              }}
            >
              <span className="cdots" aria-hidden="true">
                <i style={{ background: '#3366ff' }} />
                <i style={{ background: '#ff2f9f' }} />
                <i style={{ background: '#009800' }} />
                <i style={{ background: '#171a9d' }} />
              </span>
              {'\n        Connecting people with opportunities\n      '}
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
              {'End-to-end workforce solutions for '}
              <span className="hlw">{'Indonesia.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                fontSize: '22px',
                lineHeight: '32px',
                fontWeight: '500',
                color: '#181d27',
                letterSpacing: '-0.01em',
              }}
            >
              {'\n        One ecosystem to '}
              <span style={{ color: '#003cd5' }}>{'hire'}</span>
              {', '}
              <span style={{ color: '#171a9d' }}>{'manage'}</span>
              {' and '}
              <span style={{ color: '#007f00' }}>{'grow'}</span>
              {' your workforce.\n      '}
            </p>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '480px',
                fontSize: '16px',
                lineHeight: '26px',
                color: '#535862',
              }}
            >
              {
                'From SMEs to enterprises — recruitment, HR technology, outsourcing and talent development with one partner.'
              }
            </p>
            <div className="rise d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="#solutions">
                {"I'm an Employer "}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>{' '}
              <a className="btn btn-ghost" href="/hub/">
                {"I'm a Jobseeker"}
              </a>
            </div>
            <a className="aibar rise d5" href="#ai" onClick={v.askHero} aria-label="Ask Agent Ming">
              <span className="aispark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                  <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                </svg>
              </span>{' '}
              <span className="aiph" aria-hidden="true">
                <span className="aiph-track">
                  <span>{'Find 20 store crew near Jimbaran, Bali'}</span>
                  <span>{'Screen applicants for our cashier role'}</span>
                  <span>{'Draft a job post for a barista in Jakarta'}</span>
                  <span>{'Find 20 store crew near Jimbaran, Bali'}</span>
                </span>
              </span>{' '}
              <span className="aicaret" aria-hidden="true" />{' '}
              <span className="aigo" aria-hidden="true">
                {'Ask AI ↵'}
              </span>
            </a>
          </div>
          <div className="hv rise d5">
            <span className="shape s1" aria-hidden="true" /> <span className="shape s2" aria-hidden="true" />{' '}
            <span className="shape s3" aria-hidden="true" /> <span className="shape s4" aria-hidden="true" />
            <div className="hpanel">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '4px 4px 16px',
                }}
              >
                <span
                  style={{ fontSize: '15px', fontWeight: '700', color: '#050774', letterSpacing: '-0.01em' }}
                >
                  {'One ecosystem'}
                </span>{' '}
                <span className="hlive">{'All in one place'}</span>
              </div>
              <div className="hrows">
                <span className="hline" aria-hidden="true">
                  <i />
                </span>
                <div className="hrow">
                  <span className="hnode" style={{ background: '#3366ff' }} aria-hidden="true" />
                  <div className="hlab">
                    <b style={{ color: '#0031b3' }}>{'Hire'}</b>
                    <span>{'Find & attract the right people'}</span>
                  </div>
                  <div className="hchips">
                    <a className="hchip c1" href="#solutions">
                      <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                      {'Jobseeker Partners'}
                    </a>{' '}
                    <a className="hchip c2" href="#solutions">
                      <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                      {'Executive Search'}
                    </a>{' '}
                    <a className="hchip c3" href="/app/">
                      <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                      {'Jobseeker App'}
                    </a>
                  </div>
                </div>
                <div className="hrow">
                  <span className="hnode" style={{ background: '#171a9d' }} aria-hidden="true" />
                  <div className="hlab">
                    <b style={{ color: '#131687' }}>{'Manage'}</b>
                    <span>{'Run HR operations'}</span>
                  </div>
                  <div className="hchips">
                    <a className="hchip c4" href="#solutions">
                      <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                      {'HRMS'}
                    </a>{' '}
                    <a className="hchip c5" href="#solutions">
                      <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                      {'Talent Augmentation'}
                    </a>
                  </div>
                </div>
                <div className="hrow">
                  <span className="hnode" style={{ background: '#009800' }} aria-hidden="true" />
                  <div className="hlab">
                    <b style={{ color: '#006600' }}>{'Grow'}</b>
                    <span>{'Develop talent & capability'}</span>
                  </div>
                  <div className="hchips">
                    <a className="hchip c6" href="/training/">
                      <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
                      {'Corporate Training'}
                    </a>{' '}
                    <a className="hchip c7" href="/academy/">
                      <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
                      {'Jobseeker Academy'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hbadge hb1">
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
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5.5 5.5 0 0 1 3.5 6" />
                </svg>
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
                <b style={{ fontSize: '18px', color: '#181d27' }}>{'3.9M+'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'verified candidates'}</span>
              </span>
            </div>
            <div className="hbadge hb2">
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
                <b style={{ fontSize: '18px', color: '#181d27' }}>{'420K+'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'candidates placed'}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="customers" style={{ padding: '8px 0 88px' }}>
        <p
          className="wrap rv"
          style={{
            margin: '0 auto 28px',
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
      <section id="audiences" style={{ background: '#fafafa', padding: '104px 0' }}>
        <div className="wrap">
          <div
            className="rv"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              maxWidth: '640px',
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
              {'Start here'}
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
              {'Pick the path that fits you.'}
            </h2>
          </div>
          <div className="aud rv-s">
            {' '}
            <a
              className="card acard"
              href="#solutions"
              style={{ display: 'flex', flexDirection: 'column', color: '#181d27' }}
            >
              <div className="avis" style={{ background: '#f4f5ff' }} aria-hidden="true">
                <div className="amock" style={{ width: '82%' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#181d27' }}>{'HRMS'}</span>
                    <span style={{ display: 'flex', gap: '4px' }}>
                      <i className="adot" style={{ background: '#d5d7da' }} />
                      <i className="adot" style={{ background: '#d5d7da' }} />
                      <i className="adot" style={{ background: '#d5d7da' }} />
                    </span>
                  </div>
                  <div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}
                  >
                    <div className="atile t1">
                      <span className="achk" style={{ background: '#171a9d' }}>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>{'Recruit'}</span>
                    </div>
                    <div className="atile t2">
                      <span className="achk" style={{ background: '#171a9d' }}>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>{'Attendance'}</span>
                    </div>
                    <div className="atile t3">
                      <span className="achk" style={{ background: '#171a9d' }}>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>{'Payroll'}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      gap: '5px',
                      height: '44px',
                      marginTop: '12px',
                    }}
                  >
                    <i className="abar" style={{ height: '40%', background: '#c7caff' }} />
                    <i
                      className="abar"
                      style={{ height: '65%', background: '#c7caff', animationDelay: '.1s' }}
                    />
                    <i
                      className="abar"
                      style={{ height: '50%', background: '#c7caff', animationDelay: '.2s' }}
                    />
                    <i
                      className="abar"
                      style={{ height: '85%', background: '#171a9d', animationDelay: '.3s' }}
                    />
                    <i
                      className="abar"
                      style={{ height: '60%', background: '#c7caff', animationDelay: '.4s' }}
                    />
                    <i
                      className="abar"
                      style={{ height: '95%', background: '#171a9d', animationDelay: '.5s' }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: '28px 28px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: '1',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#131687',
                  }}
                >
                  <img className="alogo" src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                  {'For Enterprises'}
                </span>{' '}
                <span style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '600' }}>
                  {
                    'Manage your entire HR process — recruitment, employee data, attendance and payroll — in one platform.'
                  }
                </span>{' '}
                <span className="abtn" style={{ background: '#171a9d' }}>
                  {'Explore HRMS '}
                  <span className="arr" aria-hidden="true">
                    {'→'}
                  </span>
                </span>
              </div>
            </a>{' '}
            <a
              className="card acard"
              href="#solutions"
              style={{ display: 'flex', flexDirection: 'column', color: '#181d27' }}
            >
              <div className="avis" style={{ background: '#f5f8ff' }} aria-hidden="true">
                <div className="amock" style={{ width: '74%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <img
                      src="/images/2e0842aec39ea4bc17e6d544749982f9.png"
                      alt=""
                      style={{ width: '32px', height: '32px', borderRadius: '9px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: '1' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#181d27' }}>
                        {'Store crew'}
                      </span>
                      <i className="ask" style={{ width: '60%' }} />
                    </div>
                    <span className="alive">{'Live'}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '10px',
                      borderTop: '1px solid #f0f0f1',
                    }}
                  >
                    <span style={{ fontSize: '11px', fontWeight: '600', color: '#535862' }}>
                      {'New applicants'}
                    </span>{' '}
                    <span style={{ display: 'flex' }}>
                      <i className="aav v1" style={{ background: '#ffe3f2', color: '#b8006a' }}>
                        {'S'}
                      </i>
                      <i className="aav v2" style={{ background: '#e6f7e6', color: '#006600' }}>
                        {'R'}
                      </i>
                      <i className="aav v3" style={{ background: '#e6e6f1', color: '#050774' }}>
                        {'D'}
                      </i>
                      <i className="aav v4" style={{ background: '#fffaeb', color: '#b54708' }}>
                        {'Y'}
                      </i>
                      <i className="aav v5" style={{ background: '#3366ff', color: '#ffffff' }}>
                        {'+'}
                      </i>
                    </span>
                  </div>
                </div>
                <span
                  className="afloat"
                  style={{ right: '8%', top: '14%', background: '#3366ff', color: '#ffffff' }}
                >
                  {'Self-service'}
                </span>{' '}
                <span
                  className="afloat f2"
                  style={{ left: '7%', bottom: '14%', background: '#ffffff', color: '#0031b3' }}
                >
                  {'Fast hiring'}
                </span>
              </div>
              <div
                style={{
                  padding: '28px 28px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: '1',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#0031b3',
                  }}
                >
                  <img className="alogo" src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                  {'For SMEs'}
                </span>{' '}
                <span style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '600' }}>
                  {'Hire faster and more cost-efficiently with our self-service platform.'}
                </span>{' '}
                <span className="abtn" style={{ background: '#003cd5' }}>
                  {'Try Jobseeker Partners '}
                  <span className="arr" aria-hidden="true">
                    {'→'}
                  </span>
                </span>
              </div>
            </a>{' '}
            <a
              className="card acard"
              href="/app/"
              style={{ display: 'flex', flexDirection: 'column', color: '#181d27' }}
            >
              <div className="avis" style={{ background: '#fff0f7' }} aria-hidden="true">
                <div className="aphone">
                  <div
                    style={{
                      width: '40px',
                      height: '4px',
                      borderRadius: '4px',
                      background: '#e9eaeb',
                      margin: '0 auto 10px',
                    }}
                  />
                  <div className="aswipe">
                    <div className="ajob">
                      <span style={{ fontSize: '11px', fontWeight: '700', color: '#181d27' }}>
                        {'Retail crew'}
                      </span>
                      <span style={{ fontSize: '10px', color: '#535862' }}>{'Verified · Full-time'}</span>
                    </div>
                    <div className="ajob">
                      <span style={{ fontSize: '11px', fontWeight: '700', color: '#181d27' }}>
                        {'Barista'}
                      </span>
                      <span style={{ fontSize: '10px', color: '#535862' }}>{'Verified · Shift'}</span>
                    </div>
                    <div className="ajob">
                      <span style={{ fontSize: '11px', fontWeight: '700', color: '#181d27' }}>
                        {'Warehouse staff'}
                      </span>
                      <span style={{ fontSize: '10px', color: '#535862' }}>{'Verified · Full-time'}</span>
                    </div>
                  </div>
                  <div className="avideo">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {'Apply with video'}
                  </div>
                </div>
                <span
                  className="afloat"
                  style={{ left: '8%', top: '18%', background: '#ffffff', color: '#b8006a' }}
                >
                  <i className="adot" style={{ width: '7px', height: '7px', background: '#17b26a' }} />
                  {'Verified jobs'}
                </span>{' '}
                <span
                  className="afloat f2"
                  style={{ right: '7%', bottom: '18%', background: '#ff2f9f', color: '#ffffff' }}
                >
                  {'Video resume'}
                </span>
              </div>
              <div
                style={{
                  padding: '28px 28px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: '1',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#b8006a',
                  }}
                >
                  <img className="alogo" src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                  {'For Jobseekers'}
                </span>{' '}
                <span style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '600' }}>
                  {'Thousands of verified jobs. Apply with video resumes.'}
                </span>{' '}
                <span className="abtn" style={{ background: '#b8006a' }}>
                  {'Download Jobseeker App '}
                  <span className="arr" aria-hidden="true">
                    {'→'}
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="solutions" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
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
              {'The ecosystem'}
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
              {'One ecosystem. Every workforce solution you need.'}
            </h2>
          </div>
          <div className="bchips" role="group" aria-label="Filter solutions">
            <button type="button" className={`bchip ${T(v.cAll)}`} aria-pressed={v.isAll} onClick={v.fAll}>
              {'All'}
            </button>{' '}
            <button type="button" className={`bchip ${T(v.cHire)}`} aria-pressed={v.isHire} onClick={v.fHire}>
              {'Hire'}
            </button>{' '}
            <button
              type="button"
              className={`bchip ${T(v.cManage)}`}
              aria-pressed={v.isManage}
              onClick={v.fManage}
            >
              {'Manage'}
            </button>{' '}
            <button type="button" className={`bchip ${T(v.cGrow)}`} aria-pressed={v.isGrow} onClick={v.fGrow}>
              {'Grow'}
            </button>
          </div>
        </div>
        <div className="bento rv">
          {' '}
          <a
            className={`tile ${T(v.dManage)}`}
            href="/hrms/"
            style={{ gridArea: 'hrms', background: '#f4f5ff' }}
          >
            <span className="go" aria-hidden="true">
              {'→'}
            </span>{' '}
            <span className="tg" style={{ color: '#131687' }}>
              {'Manage · For enterprises'}
            </span>{' '}
            <span className="tt tlogo" style={{ fontSize: '30px' }}>
              <img
                src="/images/06922c52c0d826c56143c4224b8fb845.png"
                alt=""
                style={{ width: '44px', height: '44px' }}
              />
              {'HRMS'}
            </span>{' '}
            <span className="td" style={{ color: '#414651' }}>
              {'Manage recruitment, employee data, attendance and payroll in one platform.'}
            </span>
            <div className="viz bcard" aria-hidden="true" style={{ padding: '16px' }}>
              <div className="kpi">
                <div className="kp">
                  {'Recruitment'}
                  <span className="kb">
                    <i />
                  </span>
                </div>
                <div className="kp">
                  {'Attendance'}
                  <span className="kb">
                    <i />
                  </span>
                </div>
                <div className="kp">
                  {'Payroll'}
                  <span className="kb">
                    <i />
                  </span>
                </div>
              </div>
              <div className="chart">
                <i style={{ height: '45%' }} />
                <i style={{ height: '60%' }} />
                <i style={{ height: '52%' }} />
                <i style={{ height: '80%' }} />
                <i style={{ height: '66%' }} />
                <i style={{ height: '74%' }} />
                <i style={{ height: '58%' }} />
                <i style={{ height: '92%' }} />
                <i style={{ height: '70%' }} />
                <i style={{ height: '84%' }} />
              </div>
            </div>
          </a>{' '}
          <a className={`tile ${T(v.dHire)}`} href="/app/" style={{ gridArea: 'app', background: '#fff0f7' }}>
            <span className="go" aria-hidden="true">
              {'→'}
            </span>{' '}
            <span className="tg" style={{ color: '#b8006a' }}>
              {'Hire · Talent pool'}
            </span>{' '}
            <span className="tt tlogo">
              <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
              {'Jobseeker App'}
            </span>{' '}
            <span className="td" style={{ color: '#414651' }}>
              {'Access 3.9M+ verified candidates.'}
            </span>
            <div className="viz" aria-hidden="true">
              <div className="phone">
                <div className="pnotch" />
                <div className="phead">
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff2f9f"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {'Jobs near you'}
                  </span>
                  <i className="plive" />
                </div>
                <div className="feed">
                  <div className="ftrack">
                    {L(v.appJobs).map((j_1, i_1) => (
                      <React.Fragment key={i_1}>
                        <div className="job">
                          <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                          <span className="jt">
                            <b>{T(j_1?.t)}</b>
                            <span>{T(j_1?.m)}</span>
                          </span>
                          <span className="jv">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12l5 5L20 7" />
                            </svg>
                          </span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="play">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {'Apply with video'}
                </div>
              </div>
            </div>
          </a>{' '}
          <a
            className={`tile ${T(v.dHire)}`}
            href="/partners/"
            style={{ gridArea: 'part', background: '#f5f8ff' }}
          >
            <span className="go" aria-hidden="true">
              {'→'}
            </span>{' '}
            <span className="tg" style={{ color: '#0031b3' }}>
              {'Hire · SMEs'}
            </span>{' '}
            <span className="tt tlogo">
              <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
              {'Jobseeker Partners'}
            </span>{' '}
            <span className="td" style={{ color: '#414651' }}>
              {'Self-service, fast and cost-efficient hiring.'}
            </span>
            <div className="viz ap" aria-hidden="true">
              <i className="av" style={{ background: '#ffe3f2', color: '#b8006a', fontStyle: 'normal' }}>
                {'S'}
              </i>
              <i className="av" style={{ background: '#e6f7e6', color: '#006600', fontStyle: 'normal' }}>
                {'R'}
              </i>
              <i className="av" style={{ background: '#e6e6f1', color: '#050774', fontStyle: 'normal' }}>
                {'D'}
              </i>
              <i className="av" style={{ background: '#fffaeb', color: '#b54708', fontStyle: 'normal' }}>
                {'Y'}
              </i>
              <i className="av" style={{ background: '#3366ff', color: '#ffffff', fontStyle: 'normal' }}>
                {'+'}
              </i>
            </div>
          </a>{' '}
          <a
            className={`tile ${T(v.dHire)}`}
            href="/executive/"
            style={{ gridArea: 'exec', background: '#fff5f5' }}
          >
            <span className="go" aria-hidden="true">
              {'→'}
            </span>{' '}
            <span className="tg" style={{ color: '#9e0e0e' }}>
              {'Hire · Leadership'}
            </span>{' '}
            <span className="tt tlogo">
              <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
              {'Executive Search'}
            </span>
            <div className="viz scan" aria-hidden="true">
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#050774',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: '800',
                }}
              >
                {'GM'}
              </span>{' '}
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span className="sk" style={{ width: '70%', background: '#d5d7da' }} />
                <span className="sk" style={{ width: '45%' }} />
              </span>
            </div>
          </a>{' '}
          <a
            className={`tile ${T(v.dManage)}`}
            href="/talent/"
            style={{ gridArea: 'talent', background: '#fff5f5' }}
          >
            <span className="go" aria-hidden="true">
              {'→'}
            </span>{' '}
            <span className="tg" style={{ color: '#9e0e0e' }}>
              {'Manage · Outsourcing'}
            </span>{' '}
            <span className="tt tlogo">
              <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
              {'Talent Augmentation'}
            </span>
            <div className="viz shift" aria-hidden="true">
              <div className="sh">
                <i />
              </div>
              <div className="sh">
                <i />
              </div>
              <div className="sh">
                <i />
              </div>
            </div>
          </a>{' '}
          <a
            className={`tile ${T(v.dGrow)}`}
            href="/training/"
            style={{ gridArea: 'train', background: '#f2fbf2' }}
          >
            <span className="go" aria-hidden="true">
              {'→'}
            </span>{' '}
            <span className="tg" style={{ color: '#006600' }}>
              {'Grow · Teams'}
            </span>{' '}
            <span className="tt tlogo">
              <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
              {'Corporate Training'}
            </span>
            <div
              className="viz"
              aria-hidden="true"
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <svg className="bring" width="64" height="64" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#ccefcc" strokeWidth="7" />
                <circle
                  className="p"
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#009800"
                  strokeWidth="7"
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                />
              </svg>{' '}
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#004c00', lineHeight: '19px' }}>
                {'Skill development'}
                <br />
                {'& certification'}
              </span>
            </div>
          </a>{' '}
          <a className={`tile ${T(v.dGrow)}`} href="#" style={{ gridArea: 'acad', background: '#e6f7e6' }}>
            <span className="go" aria-hidden="true">
              {'→'}
            </span>{' '}
            <span className="tg" style={{ color: '#006600' }}>
              {'Grow · Learning'}
            </span>{' '}
            <span className="tt tlogo">
              <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
              {'Jobseeker Academy'}
            </span>{' '}
            <span className="td" style={{ color: '#004c00' }}>
              {'Training programs to enhance team capability and performance.'}
            </span>
            <div
              className="viz cert"
              aria-hidden="true"
              style={{ position: 'absolute', right: '28px', bottom: '28px' }}
            >
              <span className="badge">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9l10-5 10 5-10 5z" />
                  <path d="M6 11v5c3 2.5 9 2.5 12 0v-5" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>
      <section
        id="ai"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#020223',
          color: '#ffffff',
          padding: '112px 0',
        }}
      >
        <div className="aigrid" aria-hidden="true" />
        <div className="aiglow g1" aria-hidden="true" />
        <div className="aiglow g2" aria-hidden="true" />
        <div className="wrap aiwrap" style={{ position: 'relative' }}>
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <span
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px 6px 6px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,.08)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.14)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#cdcde3',
              }}
            >
              <span className="aispark" style={{ width: '24px', height: '24px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                  <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                </svg>
              </span>
              {'Agent Ming · Concept preview'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '48px',
                lineHeight: '56px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
              }}
            >
              {'Hire by '}
              <span className="aiword">{'just asking.'}</span>
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '480px',
                fontSize: '17px',
                lineHeight: '28px',
                color: '#cdcde3',
              }}
            >
              {
                'Describe who you need in plain language. Agent Ming searches our verified talent pool, ranks candidates and drafts the next step — your team stays in control.'
              }
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
              <div className="aifeat">
                <span className="aifi" style={{ background: 'rgba(51,102,255,.18)', color: '#84a9ff' }}>
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
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <b style={{ fontSize: '16px' }}>{'Smart matching'}</b>
                  <div style={{ fontSize: '14px', lineHeight: '21px', color: '#a8a8ce' }}>
                    {'Nearby, verified candidates ranked by fit.'}
                  </div>
                </div>
              </div>
              <div className="aifeat">
                <span className="aifi" style={{ background: 'rgba(255,47,159,.18)', color: '#ff9fd3' }}>
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
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </span>
                <div>
                  <b style={{ fontSize: '16px' }}>{'Auto screening'}</b>
                  <div style={{ fontSize: '14px', lineHeight: '21px', color: '#a8a8ce' }}>
                    {'Shortlists from applications and video resumes.'}
                  </div>
                </div>
              </div>
              <div className="aifeat">
                <span className="aifi" style={{ background: 'rgba(0,152,0,.2)', color: '#99df99' }}>
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
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                  </svg>
                </span>
                <div>
                  <b style={{ fontSize: '16px' }}>{'Instant drafts'}</b>
                  <div style={{ fontSize: '14px', lineHeight: '21px', color: '#a8a8ce' }}>
                    {'Job posts and interview invites in seconds.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aichat rv">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 18px',
                borderBottom: '1px solid #f0f0f1',
              }}
            >
              <span className="aispark" style={{ width: '34px', height: '34px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                  <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <b style={{ fontSize: '15px', color: '#181d27' }}>{'Agent Ming'}</b>
                <span
                  style={{
                    fontSize: '12px',
                    color: '#067647',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <i style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#17b26a' }} />
                  {'Online'}
                </span>
              </div>
              <span
                style={{
                  marginLeft: 'auto',
                  padding: '3px 9px',
                  borderRadius: '999px',
                  background: '#fce6f2',
                  color: '#940052',
                  fontSize: '11px',
                  fontWeight: '700',
                }}
              >
                {'Demo'}
              </span>
            </div>
            <div className="aibody" aria-live="polite">
              <div className="msg ai">
                <span>
                  {
                    "Hi! Tell me who you need — role, location and how many. I'll find verified talent for you."
                  }
                </span>
              </div>
              {v.aiHasQ ? (
                <>
                  <div className="msg me">
                    <span>
                      {T(v.aiQ)}
                      {v.aiTyping ? (
                        <>
                          <i className="tcaret" />
                        </>
                      ) : null}
                    </span>
                  </div>
                </>
              ) : null}{' '}
              {v.aiThinking ? (
                <>
                  <div className="msg ai">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                      <span className="dots">
                        <i />
                        <i />
                        <i />
                      </span>
                      {'Searching verified talent…'}
                    </span>
                  </div>
                </>
              ) : null}{' '}
              {v.aiDone ? (
                <>
                  <div className="msg ai" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span>{T(v.aiIntro)}</span>
                    <div className="ares">
                      {L(v.aiResults).map((r_2, i_2) => (
                        <React.Fragment key={i_2}>
                          <div className="arow" style={S(r_2?.delay)}>
                            <span className="aava" style={S(r_2?.avStyle)}>
                              {T(r_2?.ini)}
                            </span>
                            <div style={{ flex: '1', minWidth: '0' }}>
                              <b style={{ display: 'block', fontSize: '13px', color: '#181d27' }}>
                                {T(r_2?.n)}
                              </b>
                              <span style={{ fontSize: '12px', color: '#535862' }}>{T(r_2?.m)}</span>
                            </div>
                            <span className="ascore" style={S(r_2?.scoreStyle)}>
                              {T(r_2?.s)}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
                      {L(v.aiActions).map((x_3, i_3) => (
                        <React.Fragment key={i_3}>
                          <span className="aact">{T(x_3)}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', padding: '0 16px 12px' }}>
              {L(v.aiSugs).map((sg_4, i_4) => (
                <React.Fragment key={i_4}>
                  <button type="button" className="asug" onClick={sg_4?.go}>
                    {T(sg_4?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <form className="aiform" onSubmit={v.aiSubmit}>
              <label
                htmlFor="aiinput"
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                  clip: 'rect(0 0 0 0)',
                }}
              >
                {'Ask Agent Ming'}
              </label>{' '}
              <input
                id="aiinput"
                type="text"
                value={v.aiDraft}
                onChange={v.aiChange}
                placeholder="e.g. 10 warehouse staff in Bekasi"
                autoComplete="off"
              />{' '}
              <button type="submit" aria-label="Send" className="aisend">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section id="why" style={{ background: '#fafafa', padding: '112px 0' }}>
        <div className="wrap">
          <div
            className="rv"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              maxWidth: '640px',
              marginBottom: '56px',
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
              {'Why Jobseeker Company'}
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
              {'Speed from technology. Quality from people.'}
            </h2>
          </div>
          <div className="why rv-s">
            <div className="whyitem" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <svg className="wil" viewBox="0 0 240 150" aria-hidden="true">
                <line className="dash" x1="30" y1="66" x2="210" y2="66" stroke="#cdcde3" strokeWidth="2" />
                <circle
                  className="lit"
                  cx="30"
                  cy="66"
                  r="16"
                  fill="#ffffff"
                  stroke="#050774"
                  strokeWidth="2"
                />
                <circle
                  className="lit l2"
                  cx="90"
                  cy="66"
                  r="16"
                  fill="#ffffff"
                  stroke="#3366ff"
                  strokeWidth="2"
                />
                <circle
                  className="lit l3"
                  cx="150"
                  cy="66"
                  r="16"
                  fill="#ffffff"
                  stroke="#171a9d"
                  strokeWidth="2"
                />
                <circle
                  className="lit l4"
                  cx="210"
                  cy="66"
                  r="16"
                  fill="#ffffff"
                  stroke="#009800"
                  strokeWidth="2"
                />
                <path d="M24 66h12M30 60v12" stroke="#050774" strokeWidth="2.4" strokeLinecap="round" />
                <path
                  d="M84 70l4 4 8-9"
                  fill="none"
                  stroke="#3366ff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="143"
                  y="59"
                  width="14"
                  height="14"
                  rx="3"
                  fill="none"
                  stroke="#171a9d"
                  strokeWidth="2.2"
                />
                <path
                  d="M203 72l7-12 7 12"
                  fill="none"
                  stroke="#009800"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle className="travel" cx="30" cy="42" r="6" fill="#e4007e" />
                <text x="30" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'Recruit'}
                </text>{' '}
                <text x="90" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'Outsource'}
                </text>{' '}
                <text x="150" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'HR tech'}
                </text>{' '}
                <text x="210" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'Develop'}
                </text>
                <rect x="70" y="124" width="100" height="6" rx="3" fill="#f2f3f8" />
                <rect x="70" y="124" width="60" height="6" rx="3" fill="#050774" />
              </svg>{' '}
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#cd0071' }}>{'01'}</span>
              <h3
                style={{
                  margin: '0',
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: '600',
                  color: '#181d27',
                }}
              >
                {'Truly end-to-end'}
              </h3>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '24px', color: '#535862' }}>
                {
                  'One partner for recruitment, outsourcing, HR technology and talent development. No more vendor juggling.'
                }
              </p>
            </div>
            <div className="whyitem" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <svg className="wil" viewBox="0 0 240 150" aria-hidden="true">
                <g stroke="#f0f0f1" strokeWidth="1">
                  <path d="M0 30h240M0 60h240M0 90h240M0 120h240M40 0v150M80 0v150M120 0v150M160 0v150M200 0v150" />
                </g>
                <path
                  d="M-10 110 C 50 80, 90 130, 150 96 S 230 70, 250 84"
                  fill="none"
                  stroke="#e6e6f1"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle
                  className="fb ripple"
                  cx="120"
                  cy="72"
                  r="26"
                  fill="none"
                  stroke="#e4007e"
                  strokeWidth="2"
                />
                <circle
                  className="fb ripple rp2"
                  cx="120"
                  cy="72"
                  r="26"
                  fill="none"
                  stroke="#e4007e"
                  strokeWidth="2"
                />
                <circle className="fb pop" cx="62" cy="44" r="7" fill="#ff2f9f" />
                <circle className="fb pop p2" cx="178" cy="40" r="7" fill="#ff2f9f" />
                <circle className="fb pop p3" cx="190" cy="104" r="7" fill="#ff2f9f" />
                <circle className="fb pop p4" cx="52" cy="112" r="7" fill="#ff2f9f" />
                <circle className="fb pop p5" cx="150" cy="128" r="6" fill="#f6a6d2" />
                <g className="fb bob">
                  <path d="M120 96s-18-15-18-28a18 18 0 0 1 36 0c0 13-18 28-18 28z" fill="#050774" />
                  <circle cx="120" cy="67" r="7" fill="#ffffff" />
                </g>
              </svg>{' '}
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#cd0071' }}>{'02'}</span>
              <h3
                style={{
                  margin: '0',
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: '600',
                  color: '#181d27',
                }}
              >
                {'Unmatched blue-collar access'}
              </h3>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '24px', color: '#535862' }}>
                {
                  'A geotagged talent pool via Jobseeker App surfaces non-white-collar workers who are nearby and ready.'
                }
              </p>
            </div>
            <div className="whyitem" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <svg className="wil" viewBox="0 0 240 150" aria-hidden="true">
                <g className="fb spinA">
                  <circle cx="78" cy="72" r="26" fill="#e6e6f1" />
                  <g fill="#e6e6f1">
                    <rect x="72" y="38" width="12" height="12" rx="2" />
                    <rect x="72" y="94" width="12" height="12" rx="2" />
                    <rect x="44" y="66" width="12" height="12" rx="2" />
                    <rect x="100" y="66" width="12" height="12" rx="2" />
                    <rect x="52" y="46" width="12" height="12" rx="2" transform="rotate(45 58 52)" />
                    <rect x="92" y="86" width="12" height="12" rx="2" transform="rotate(45 98 92)" />
                    <rect x="92" y="46" width="12" height="12" rx="2" transform="rotate(45 98 52)" />
                    <rect x="52" y="86" width="12" height="12" rx="2" transform="rotate(45 58 92)" />
                  </g>
                  <circle cx="78" cy="72" r="12" fill="#050774" />
                  <circle cx="78" cy="72" r="5" fill="#ffffff" />
                </g>
                <g className="fb spinB">
                  <circle cx="122" cy="40" r="12" fill="#cdcde3" />
                  <g fill="#cdcde3">
                    <rect x="119" y="22" width="6" height="7" rx="1" />
                    <rect x="119" y="51" width="6" height="7" rx="1" />
                    <rect x="104" y="37" width="7" height="6" rx="1" />
                    <rect x="133" y="37" width="7" height="6" rx="1" />
                  </g>
                  <circle cx="122" cy="40" r="4" fill="#ffffff" />
                </g>
                <path
                  className="dash"
                  d="M112 82 C 130 92, 140 92, 156 84"
                  fill="none"
                  stroke="#a8a8ce"
                  strokeWidth="2"
                />
                <circle cx="182" cy="56" r="14" fill="#fce6f2" />
                <circle cx="182" cy="52" r="6" fill="#cd0071" />
                <path d="M170 68a12 9 0 0 1 24 0" fill="#cd0071" />
                <path d="M160 104a22 18 0 0 1 44 0z" fill="#fce6f2" />
                <g className="fb beat">
                  <circle cx="200" cy="96" r="11" fill="#17b26a" />
                  <path
                    d="M195 96l3.5 3.5 6.5-7"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <text x="78" y="134" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'Speed'}
                </text>{' '}
                <text x="182" y="134" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'Quality'}
                </text>
              </svg>{' '}
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#cd0071' }}>{'03'}</span>
              <h3
                style={{
                  margin: '0',
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: '600',
                  color: '#181d27',
                }}
              >
                {'Tech that works with people'}
              </h3>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '24px', color: '#535862' }}>
                {
                  'Our tech accelerates the process. Our team ensures the quality. Speed without sacrificing accuracy.'
                }
              </p>
            </div>
            <div className="whyitem" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <svg className="wil" viewBox="0 0 240 150" aria-hidden="true">
                <line x1="28" y1="120" x2="212" y2="120" stroke="#e9eaeb" strokeWidth="2" />
                <rect className="gbar" x="40" y="100" width="22" height="20" rx="6" fill="#e6e6f1" />
                <rect className="gbar b2" x="76" y="86" width="22" height="34" rx="6" fill="#cdcde3" />
                <rect className="gbar b3" x="112" y="70" width="22" height="50" rx="6" fill="#8283ba" />
                <rect className="gbar b4" x="148" y="52" width="22" height="68" rx="6" fill="#444597" />
                <rect className="gbar b5" x="184" y="32" width="22" height="88" rx="6" fill="#050774" />
                <path
                  className="dash"
                  d="M51 90 L87 76 L123 60 L159 42 L195 22"
                  fill="none"
                  stroke="#e4007e"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <g className="fb pop p5">
                  <circle cx="195" cy="20" r="9" fill="#e4007e" />
                  <path
                    d="M191 21l4-4 4 4M195 17v8"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <text x="51" y="138" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'1'}
                </text>{' '}
                <text x="195" y="138" textAnchor="middle" fontSize="11" fontWeight="600" fill="#535862">
                  {'100'}
                </text>
              </svg>{' '}
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#cd0071' }}>{'04'}</span>
              <h3
                style={{
                  margin: '0',
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: '600',
                  color: '#181d27',
                }}
              >
                {'Built to scale with you'}
              </h3>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '24px', color: '#535862' }}>
                {'From one hire to a hundred, from a single placement to ongoing outsourcing arrangements.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="case" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '28px',
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
              {'Customer stories'}
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
              {'Results our customers see.'}
            </h2>
          </div>
          <div
            className="cstabs"
            role="tablist"
            aria-label="Customer stories"
            onMouseEnter={v.csPause}
            onMouseLeave={v.csResume}
          >
            {L(v.csTabs).map((t_5, i_5) => (
              <React.Fragment key={i_5}>
                <button
                  type="button"
                  role="tab"
                  className={`cstab ${T(t_5?.cls)}`}
                  aria-selected={t_5?.on}
                  onClick={t_5?.pick}
                >
                  <img src={A(t_5?.logo)} alt="" />
                  <span>{T(t_5?.short)}</span>
                  {t_5?.on ? (
                    <>
                      <i className="cstprog" />
                    </>
                  ) : null}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="cs rv" onMouseEnter={v.csPause} onMouseLeave={v.csResume}>
          <div className="csl">
            <div className="csdeco" aria-hidden="true" />
            <span
              style={{
                position: 'relative',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'Customer story'}
            </span>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span className="cslogo">
                <img src={A(v.csc?.logo)} alt={v.csc?.alt} />
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <b style={{ fontSize: '18px', color: '#181d27' }}>{T(v.csc?.name)}</b>{' '}
                <span className="cspill">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  {T(v.csc?.since)}
                </span>
              </div>
            </div>
            <h3
              className="h2"
              style={{
                position: 'relative',
                margin: '0',
                fontSize: '36px',
                lineHeight: '44px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#050774',
              }}
            >
              <span className="csnum">{T(v.csc?.hiresTxt)}</span>
              {' hires with an '}
              <span className="csnum">{T(v.csc?.rateTxt)}</span>
              {' fulfillment rate.'}
            </h3>
            <p
              style={{
                position: 'relative',
                margin: '0',
                fontSize: '17px',
                lineHeight: '28px',
                color: '#414651',
              }}
            >
              {T(v.csc?.desc)}
            </p>
            <a
              className="btn btn-primary"
              href="#customers"
              style={{ position: 'relative', alignSelf: 'flex-start', marginTop: '4px' }}
            >
              {'Read customer stories '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>
          </div>
          <div className="csr">
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '18px',
              }}
            >
              <b style={{ fontSize: '16px', color: '#181d27' }}>{'Hiring funnel'}</b>{' '}
              <span style={{ fontSize: '12px', color: '#717680' }}>{'Bars not to scale'}</span>
            </div>
            <div className="funnel">
              <div className="frow">
                <div className="flab">
                  <span>{'Applications'}</span>
                  <b>{T(v.cs1)}</b>
                </div>
                <div className="fbar">
                  <i style={S(v.fb1)} />
                </div>
              </div>
              <div className="frow">
                <div className="flab">
                  <span>{'Candidates processed'}</span>
                  <b>{T(v.cs2)}</b>
                </div>
                <div className="fbar">
                  <i style={S(v.fb2)} />
                </div>
              </div>
              <div className="frow">
                <div className="flab">
                  <span>{'Hires'}</span>
                  <b style={{ color: '#cd0071' }}>{T(v.cs3)}</b>
                </div>
                <div className="fbar">
                  <i style={S(v.fb3)} />
                </div>
              </div>
            </div>
            <div className="csgrid">
              <div className="cscard">
                <div style={{ position: 'relative', width: '96px', height: '96px', flex: 'none' }}>
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    role="img"
                    aria-label="87 percent RR fulfillment rate"
                  >
                    <circle cx="48" cy="48" r="40" fill="none" stroke="#e6e6f1" strokeWidth="10" />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="#050774"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="251.3"
                      transform="rotate(-90 48 48)"
                      style={S(v.gaugeStyle)}
                    />
                  </svg>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      inset: '0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      fontWeight: '800',
                      color: '#050774',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {T(v.cs4)}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <b style={{ fontSize: '15px', color: '#181d27' }}>{'RR fulfillment rate'}</b>
                  <span style={{ fontSize: '13px', lineHeight: '19px', color: '#535862' }}>
                    {'Requested roles filled through the platform.'}
                  </span>
                </div>
              </div>
              <div
                className="cscard"
                style={{
                  background: '#fef2f9',
                  boxShadow: 'none',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <div className="bulk" aria-hidden="true">
                  <i style={{ background: '#050774' }} />
                  <i style={{ background: '#3366ff' }} />
                  <i style={{ background: '#ff2f9f' }} />
                  <i style={{ background: '#009800' }} />
                  <i style={{ background: '#171a9d' }} />
                  <i style={{ background: '#cd0071' }} />
                  <i style={{ background: '#84a9ff' }} />
                  <i style={{ background: '#f6a6d2' }} />
                  <i style={{ background: '#99df99' }} />
                  <i style={{ background: '#a8a8ce' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <b
                    style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: '#940052',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {T(v.csc?.bulkTxt)}
                  </b>
                  <span style={{ fontSize: '13px', color: '#72003f', fontWeight: '600' }}>
                    {'candidates per bulk action'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="stats"
        style={{
          background: '#050774',
          color: '#ffffff',
          padding: '96px 0',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div className="wrap">
          <h2
            className="rv h2"
            style={{
              margin: '0 0 48px',
              fontSize: '40px',
              lineHeight: '48px',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            }}
          >
            {'A proven ecosystem at work.'}
          </h2>
          <div className="stats rv-s">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,.18)',
              }}
            >
              <span
                style={{
                  fontSize: '52px',
                  lineHeight: '1',
                  fontWeight: '700',
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {T(v.s1)}
              </span>{' '}
              <span style={{ fontSize: '15px', color: '#cdcde3' }}>{'Candidates in our database'}</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,.18)',
              }}
            >
              <span
                style={{
                  fontSize: '52px',
                  lineHeight: '1',
                  fontWeight: '700',
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {T(v.s2)}
              </span>{' '}
              <span style={{ fontSize: '15px', color: '#cdcde3' }}>{'Employers onboarded'}</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,.18)',
              }}
            >
              <span
                style={{
                  fontSize: '52px',
                  lineHeight: '1',
                  fontWeight: '700',
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {T(v.s3)}
              </span>{' '}
              <span style={{ fontSize: '15px', color: '#cdcde3' }}>{'Candidates processed'}</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,.18)',
              }}
            >
              <span
                style={{
                  fontSize: '52px',
                  lineHeight: '1',
                  fontWeight: '700',
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                  color: '#f6a6d2',
                }}
              >
                {T(v.s4)}
              </span>{' '}
              <span style={{ fontSize: '15px', color: '#cdcde3' }}>{'Candidates successfully placed'}</span>
            </div>
          </div>
        </div>
      </section>
      <section id="demo" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
        <div
          className="rv"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '28px',
            background: '#020223',
            color: '#ffffff',
            padding: '72px 56px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
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
              border: '1px dashed rgba(255,255,255,.18)',
              animation: 'spin 50s linear infinite',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-40px',
              top: '-40px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              border: '1px solid rgba(228,0,126,.5)',
            }}
          />
          <h2
            className="h2"
            style={{
              margin: '0',
              maxWidth: '620px',
              fontSize: '44px',
              lineHeight: '52px',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              position: 'relative',
            }}
          >
            {'Ready to streamline your hiring?'}
          </h2>
          <p
            style={{
              margin: '0',
              maxWidth: '560px',
              fontSize: '17px',
              lineHeight: '28px',
              color: '#cdcde3',
              position: 'relative',
            }}
          >
            {'A complete ecosystem for recruitment, HR tech and talent management — all in one place.'}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '12px',
              position: 'relative',
            }}
          >
            <a className="btn btn-light" href="https://wa.me/6281318817887">
              {'Talk to our team '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>{' '}
            <a className="btn btn-outline-light" href="/demo/">
              {'Request a demo'}
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
        {v.fabOpen ? (
          <>
            <div className="aipop">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="aispark" style={{ width: '30px', height: '30px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                    <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                  </svg>
                </span>{' '}
                <b style={{ fontSize: '14px', color: '#181d27' }}>{'Need to hire? Just ask.'}</b>
              </div>
              <p style={{ margin: '10px 0 12px', fontSize: '13px', lineHeight: '20px', color: '#535862' }}>
                {'Try one of these with Agent Ming:'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {L(v.aiSugs).map((sg_6, i_6) => (
                  <React.Fragment key={i_6}>
                    <a className="asug" href="#ai" onClick={sg_6?.goFab} style={{ textAlign: 'left' }}>
                      {T(sg_6?.t)}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        ) : null}{' '}
        {v.fabHint ? (
          <>
            <span className="aitip">{'Ask Agent Ming'}</span>
          </>
        ) : null}{' '}
        <button
          type="button"
          className="aifab"
          onClick={v.toggleFab}
          aria-expanded={v.fabOpen}
          aria-label="Open Agent Ming assistant"
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
