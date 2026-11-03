// Solutions — HRMS
// Generated from the design artboard HRMS.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lang: 'EN',
      mi: 0,
      ii: 0,
      sel: { ats: true, career: true, hris: true, life: true, pms: false, lms: false },
    };
    const HR = '/_blob/06922c52c0d826c56143c4224b8fb845';
    this.MODC = {
      ATS: '#171a9d',
      'Career Site': '#e4007e',
      HRIS: '#3366ff',
      'Jobseeker Life': '#7d55c6',
      PMS: '#17b26a',
      LMS: '#009800',
    };
    this.INDS = [
      {
        name: 'Manufacturing',
        c: '#050774',
        t: '#e6e6f1',
        ph: 'ph-man',
        icon: 'M3 21V10l6 4V10l6 4V6l6 4v11z',
        title: 'Staff production lines and shifts at scale.',
        needs: [
          'High-volume shift hiring',
          'Biometric & mobile attendance',
          'Overtime and payroll in one place',
        ],
        mods: ['ATS', 'HRIS', 'Jobseeker Life'],
        statBig: 'BPJS & PPh 21',
        statSmall: 'compliance built in',
        alt: 'Manufacturing team on the factory floor',
      },
      {
        name: 'Retail',
        c: '#b8006a',
        t: '#ffe3f2',
        ph: 'ph-ret',
        icon: 'M6 6h15l-1.5 9h-12zM6 6L5 3H2M9 20h.01M18 20h.01',
        title: 'Hire store crew fast, across every branch.',
        needs: ['Multi-branch hiring', 'Bulk screening of applicants', 'Shift and leave management'],
        mods: ['ATS', 'Career Site', 'HRIS'],
        statBig: 'Up to 100',
        statSmall: 'candidates screened at once',
        alt: 'Retail store crew at the counter',
      },
      {
        name: 'F&B',
        c: '#b54708',
        t: '#fffaeb',
        ph: '',
        icon: 'M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v3M10 2v3M14 2v3',
        title: 'Keep kitchens and counters fully staffed.',
        needs: [
          'Fast replacement for high-turnover roles',
          'Candidates who live nearby',
          'Quick onboarding and training',
        ],
        mods: ['ATS', 'Jobseeker Life', 'LMS'],
        statBig: '3.9M+',
        statSmall: 'verified candidates',
        alt: '',
      },
      {
        name: 'BPO',
        c: '#0031b3',
        t: '#eaf1ff',
        ph: '',
        icon: 'M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z',
        title: 'Scale agent teams up and down with demand.',
        needs: ['Volume hiring for campaigns', 'Performance tracking per agent', 'Ongoing skills training'],
        mods: ['ATS', 'PMS', 'LMS'],
        statBig: 'Up to 30%',
        statSmall: 'less screening time',
        alt: '',
      },
      {
        name: 'Logistics',
        c: '#9e0e0e',
        t: '#feeaea',
        ph: 'ph-log',
        icon: 'M1 4h14v12H1zM15 9h4l4 4v3h-8M6 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
        title: 'Drivers, riders and warehouse teams — on time.',
        needs: [
          'Geotagged candidate matching',
          'Field attendance from mobile',
          'BPJS & labor law compliance',
        ],
        mods: ['ATS', 'HRIS', 'Jobseeker Life'],
        statBig: 'Geotagged',
        statSmall: 'nearby candidate matching',
        alt: 'Logistics courier delivering a package',
      },
    ];
    this.AMODS = [
      {
        k: 'ats',
        name: 'ATS',
        desc: 'Track every candidate, from application to offer.',
        logo: HR,
        dep: 'Standalone',
        req: null,
      },
      {
        k: 'career',
        name: 'Career Site',
        desc: 'A branded careers page candidates love.',
        logo: HR,
        dep: 'Works with ATS',
        req: 'ats',
      },
      {
        k: 'hris',
        name: 'HRIS',
        desc: 'An employee database that\u2019s always current.',
        logo: HR,
        dep: 'Standalone',
        req: null,
      },
      {
        k: 'life',
        name: 'Jobseeker Life',
        desc: 'Employee app: clock in, request leave, view payslips.',
        logo: '/_blob/da6c570d32837e26097b2e4cfa6e54dc',
        dep: 'Works with HRIS',
        req: 'hris',
      },
      {
        k: 'pms',
        name: 'PMS',
        desc: 'Performance management: goals, reviews and feedback.',
        logo: HR,
        dep: 'Coming soon',
        req: 'hris',
        soon: true,
      },
      {
        k: 'lms',
        name: 'LMS',
        desc: 'Learning management: courses and training for employees.',
        logo: HR,
        dep: 'Coming soon',
        req: 'hris',
        soon: true,
      },
    ];
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
    this.MODS = [
      {
        short: 'ATS',
        name: 'Application Tracking System',
        lead: 'Track every candidate, from application to offer.',
        c: '#171a9d',
        t: '#e9eaff',
        d: '#131687',
        img: '/_blob/3d1b5284ba64c713100bf7fc933a37f3',
        alt: 'ATS candidate application screen',
        items: [
          'Visual candidate pipeline',
          'Criteria-based auto-screening',
          'Bulk processing up to 100 candidates',
          'Hiring team collaboration',
          'Email & WhatsApp templates',
          'Interview scheduling',
        ],
      },
      {
        short: 'HRIS',
        name: 'HR Information System',
        lead: 'An employee database that’s always current.',
        c: '#3366ff',
        t: '#eaf1ff',
        d: '#0031b3',
        img: '/_blob/ed87700e8a2daf4628d12ccad78a9237',
        alt: 'HRIS payroll report and attendance screens',
        items: [
          'Employee records',
          'Attendance & time tracking',
          'Leave & overtime requests',
          'Auto-generated org chart',
          'Document management',
          'Integrated payroll',
        ],
      },
      {
        short: 'Career Site',
        name: 'Career Site',
        lead: 'A branded careers page candidates love.',
        c: '#e4007e',
        t: '#fce6f2',
        d: '#940052',
        img: '/_blob/88ea7ddd5bc36c7276cd7b11e3563e1a',
        alt: 'Branded career site',
        items: [
          'Custom domain & branding',
          'ATS-integrated job board',
          'Mobile-optimized',
          'SEO-friendly',
          'Built-in analytics',
        ],
      },
    ];
  }
  componentDidMount() {
    if (!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) this.icycle();
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) this.cycle();
  }
  componentWillUnmount() {
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
    if (this.t) clearInterval(this.t);
    if (this.it) clearInterval(this.it);
  }
  icycle() {
    if (this.it) clearInterval(this.it);
    this.it = setInterval(() => {
      if (!this.ipaused) this.setState({ ii: (this.state.ii + 1) % this.INDS.length });
    }, 6000);
  }
  cycle() {
    if (this.t) clearInterval(this.t);
    this.t = setInterval(() => {
      if (!this.paused) this.setState({ mi: (this.state.mi + 1) % this.MODS.length });
    }, 7000);
  }
  toggleMod(k) {
    const sel = { ...this.state.sel };
    const m = this.AMODS.find((x) => x.k === k);
    if (m.soon) return;
    if (sel[k]) {
      sel[k] = false;
      this.AMODS.forEach((x) => {
        if (x.req === k) sel[x.k] = false;
      });
    } else {
      sel[k] = true;
      if (m.req) sel[m.req] = true;
    }
    this.setState({ sel });
  }
  archVals() {
    const s = this.state.sel;
    const all = { ats: true, career: true, hris: true, life: true, pms: false, lms: false };
    const none = { ats: false, career: false, hris: false, life: false, pms: false, lms: false };
    const n = Object.values(s).filter(Boolean).length;
    const rec = s.ats,
      ppl = s.hris;
    let summary = 'Pick a module to start — each part can run on its own.';
    if (rec && ppl)
      summary =
        'Everything connected as one HRMS — candidates hired in ATS flow straight into HRIS as employees.';
    else if (rec)
      summary = s.career
        ? 'Recruitment setup: ATS with your own branded Career Site.'
        : 'ATS on its own — add Career Site for a branded job board.';
    else if (ppl)
      summary = s.life
        ? 'People setup: HRIS with Jobseeker Life for your employees.'
        : 'HRIS on its own — add Jobseeker Life for your employees.';
    const on = (k) => (s[k] ? 'on' : '');
    const isAts = s.ats && s.career && !s.hris && !s.life && !s.pms && !s.lms;
    const isHris = s.hris && s.life && !s.ats && !s.career;
    return {
      amods: this.AMODS.map((m) => ({
        ...m,
        soon: !!m.soon,
        on: !!s[m.k],
        cls: m.soon ? 'soon' : on(m.k),
        toggle: () => this.toggleMod(m.k),
        depStyle: m.soon
          ? { background: '#fffaeb', color: '#b54708' }
          : m.req
            ? { background: '#fce6f2', color: '#940052' }
            : { background: '#e6e6f1', color: '#050774' },
      })),
      nAts: on('ats'),
      nCareer: on('career'),
      nHris: on('hris'),
      nLife: on('life'),
      nPms: on('pms'),
      nLms: on('lms'),
      lCareer: s.ats && s.career ? 'on' : '',
      lHris: s.hris && s.life ? 'on' : '',
      clRec: rec ? 'on' : '',
      clPeople: ppl ? 'on' : '',
      bridge: rec && ppl ? 'on' : '',
      aCount: n + '/4',
      aSummary: summary,
      pAts: isAts ? 'on' : '',
      pHris: isHris ? 'on' : '',
      pAll: n === 4 ? 'on' : '',
      preAts: () => this.setState({ sel: { ...none, ats: true, career: true } }),
      preHris: () => this.setState({ sel: { ...none, hris: true, life: true } }),
      preAll: () => this.setState({ sel: all }),
    };
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
    const mi = this.state.mi;
    return {
      ...this.amVals(),
      menuOpen: this.state.menuOpen,
      ...this.archVals(),
      inds: this.INDS.map((d, i) => ({
        ...d,
        on: i === this.state.ii,
        cls: i === this.state.ii ? 'on' : '',
        hasPhoto: !!d.ph,
        noPhoto: !d.ph,
        phCls: d.ph,
        icStyle: { background: d.t, color: d.c },
        bar: { background: d.c },
        fill: { background: d.c },
        visStyle: { background: d.t },
        bigStyle: { color: d.c },
        dotStyle: { background: d.c },
        tagStyle: { background: d.t, color: d.c },
        ctaStyle: { background: d.c },
        needs: d.needs.map((t, k) => ({ t, delay: { animationDelay: 0.15 + k * 0.1 + 's' } })),
        mods: d.mods.map((t, k) => ({
          t,
          soon: t === 'PMS' || t === 'LMS',
          cls: t === 'PMS' || t === 'LMS' ? 'soon' : '',
          dot: { background: this.MODC[t] },
          delay: { animationDelay: 0.45 + k * 0.08 + 's' },
        })),
        pick: () => {
          this.setState({ ii: i });
          this.icycle();
        },
      })),
      iPause: () => {
        this.ipaused = true;
      },
      iResume: () => {
        this.ipaused = false;
      },
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      clients: this.CLIENTS.concat(this.CLIENTS.map((c) => ({ ...c, alt: '', hidden: true }))),
      mods: this.MODS.map((m, i) => ({
        ...m,
        on: i === mi,
        cls: i === mi ? 'on' : '',
        dot: { background: m.c },
        bar: { background: m.c },
        fill: { background: m.c },
        tag: {
          alignSelf: 'flex-start',
          padding: '5px 12px',
          borderRadius: '999px',
          background: m.t,
          color: m.d,
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '.04em',
          textTransform: 'uppercase',
        },
        items: m.items.map((t, k) => ({ t, delay: { animationDelay: 0.1 + k * 0.07 + 's' } })),
        pick: () => {
          this.setState({ mi: i });
          this.cycle();
        },
      })),
      tPause: () => {
        this.paused = true;
      },
      tResume: () => {
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
        <div className="hgrid-bg" aria-hidden="true" />
        <div
          className="wrap hhero"
          style={{ position: 'relative', paddingTop: '72px', paddingBottom: '88px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <nav className="crumb rise d1" aria-label="Breadcrumb">
              <a href="/v1/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/solutions/">{'Solutions'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'HRMS'}</b>
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
                boxShadow: '0 0 0 1px #e9eaeb, 0 6px 16px -10px rgba(5,7,116,.3)',
                fontSize: '13px',
                fontWeight: '600',
                color: '#131687',
              }}
            >
              <img
                src="/images/06922c52c0d826c56143c4224b8fb845.png"
                alt=""
                style={{ width: '28px', height: '28px', borderRadius: '8px' }}
              />
              {'HRMS · All-in-One HR Platform\n      '}
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
              {'Manage your entire HR process in '}
              <span className="hlw">{'one platform.'}</span>
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
                'From job posting and candidate screening to employee data, attendance, and payroll — all in one system built for the Indonesian market.'
              }
            </p>
            <div className="rise d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="/demo/">
                {'Schedule a Demo '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>{' '}
              <a className="btn btn-ghost" href="https://wa.me/6281318817887">
                {'WhatsApp Sales'}
              </a>
            </div>
            <div
              className="rise d5"
              style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}
            >
              <a className="modpill" href="#modules">
                <i style={{ background: '#171a9d' }} />
                {'ATS'}
              </a>{' '}
              <a className="modpill" href="#modules">
                <i style={{ background: '#e4007e' }} />
                {'Career Site'}
              </a>{' '}
              <a className="modpill" href="#modules">
                <i style={{ background: '#3366ff' }} />
                {'HRIS'}
              </a>{' '}
              <a className="modpill" href="#modules">
                <i style={{ background: '#7d55c6' }} />
                {'Jobseeker Life'}
              </a>{' '}
              <a className="modpill soonp" href="#modules">
                <i style={{ background: '#17b26a' }} />
                {'PMS'}
                <em>{'Soon'}</em>
              </a>{' '}
              <a className="modpill soonp" href="#modules">
                <i style={{ background: '#009800' }} />
                {'LMS'}
                <em>{'Soon'}</em>
              </a>
            </div>
          </div>
          <div className="hvis rise d5">
            <span className="shape s1" aria-hidden="true" /> <span className="shape s2" aria-hidden="true" />{' '}
            <span className="shape s3" aria-hidden="true" /> <span className="shape s4" aria-hidden="true" />
            <div className="hvbg" aria-hidden="true" />
            <img
              className="hvimg"
              src="/images/adc3231b9a937c698ffc98f6994be2af.webp"
              alt="HRMS on desktop, laptop and mobile: attendance, payroll and analytics"
            />
            <div className="hbadge hb1">
              <span className="hbi" style={{ background: '#e9eaff', color: '#171a9d' }}>
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
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
                <b style={{ fontSize: '16px', color: '#181d27' }}>{'Up to 100'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'candidates at once'}</span>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
                <b style={{ fontSize: '16px', color: '#181d27' }}>{'BPJS & PPh 21'}</b>
                <span style={{ fontSize: '12px', color: '#535862' }}>{'compliance built in'}</span>
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
      <section id="modules" className="wrap" style={{ paddingTop: '104px', paddingBottom: '104px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '14px',
            maxWidth: '780px',
            margin: '0 auto 44px',
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
            {'Modular by design'}
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
            {'Start with one module. Grow into the whole platform.'}
          </h2>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '28px', color: '#535862' }}>
            {
              'ATS and HRIS each run on their own. Add Career Site to ATS and Jobseeker Life to HRIS — or bring everything together as one HRMS. PMS and LMS are coming soon.'
            }
          </p>
        </div>
        <div className="arch rv">
          <div className="abuild">
            <div className="apresets" role="group" aria-label="Presets">
              <button type="button" className={`apre ${T(v.pAts)}`} onClick={v.preAts}>
                {'ATS only'}
              </button>{' '}
              <button type="button" className={`apre ${T(v.pHris)}`} onClick={v.preHris}>
                {'HRIS only'}
              </button>{' '}
              <button type="button" className={`apre ${T(v.pAll)}`} onClick={v.preAll}>
                {'Full HRMS'}
              </button>
            </div>
            {L(v.amods).map((m_1, i_1) => (
              <React.Fragment key={i_1}>
                <button
                  type="button"
                  className={`amod ${T(m_1?.cls)}`}
                  onClick={m_1?.toggle}
                  aria-pressed={m_1?.on}
                  disabled={m_1?.soon}
                >
                  <img src={A(m_1?.logo)} alt="" />{' '}
                  <span className="amtx">
                    <b>{T(m_1?.name)}</b>
                    <small>{T(m_1?.desc)}</small>
                    <em style={S(m_1?.depStyle)}>{T(m_1?.dep)}</em>
                  </span>{' '}
                  <span className="asw" aria-hidden="true">
                    <i />
                  </span>
                </button>
              </React.Fragment>
            ))}
          </div>
          <div className="adiag">
            <div className="aclusters">
              <div className={`acl ${T(v.clRec)}`}>
                <span className="acllab">{'Recruitment'}</span>
                <div className={`anode big ${T(v.nAts)}`}>
                  <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                  <b>{'ATS'}</b>
                  <small>{'Standalone'}</small>
                </div>
                <span className={`alink v ${T(v.lCareer)}`} aria-hidden="true">
                  <i />
                </span>
                <div className={`anode ${T(v.nCareer)}`}>
                  <span className="adot" style={{ background: '#e4007e' }} />
                  <b>{'Career Site'}</b>
                  <small>{'with ATS'}</small>
                </div>
              </div>
              <div className={`abridge ${T(v.bridge)}`} aria-hidden="true">
                <span className="abline">
                  <i />
                </span>{' '}
                <span className="abtag">{'Unified HRMS'}</span>
              </div>
              <div className={`acl ${T(v.clPeople)}`}>
                <span className="acllab">{'People'}</span>
                <div className={`anode big ${T(v.nHris)}`}>
                  <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                  <b>{'HRIS'}</b>
                  <small>{'Standalone'}</small>
                </div>
                <span className={`alink v ${T(v.lHris)}`} aria-hidden="true">
                  <i />
                </span>
                <div className="asats">
                  <div className={`anode sm ${T(v.nLife)}`}>
                    <img src="/images/da6c570d32837e26097b2e4cfa6e54dc.png" alt="" />
                    <b>{'Jobseeker Life'}</b>
                    <small>{'Employee app'}</small>
                  </div>
                  <div className="anode sm soon">
                    <span className="adot" style={{ background: '#3366ff' }} />
                    <b>{'PMS'}</b>
                    <small className="soontag">{'Coming soon'}</small>
                  </div>
                  <div className="anode sm soon">
                    <span className="adot" style={{ background: '#009800' }} />
                    <b>{'LMS'}</b>
                    <small className="soontag">{'Coming soon'}</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="asum">
              <span className="ascount">{T(v.aCount)}</span> <span className="astext">{T(v.aSummary)}</span>
            </div>
          </div>
        </div>
      </section>
      <section id="features" style={{ background: '#fafafa', padding: '104px 0' }}>
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
              margin: '0 auto 40px',
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
              {'Core modules, up close.'}
            </h2>
          </div>
          <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
            <div
              className="mtabs"
              role="tablist"
              aria-label="HRMS modules"
              onMouseEnter={v.tPause}
              onMouseLeave={v.tResume}
            >
              {L(v.mods).map((m_2, i_2) => (
                <React.Fragment key={i_2}>
                  <button
                    type="button"
                    role="tab"
                    className={`mtab ${T(m_2?.cls)}`}
                    aria-selected={m_2?.on}
                    onClick={m_2?.pick}
                  >
                    <span className="mdot" style={S(m_2?.dot)} />
                    {T(m_2?.short)}
                    {m_2?.on ? (
                      <>
                        <i className="mprog" style={S(m_2?.bar)} />
                      </>
                    ) : null}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="mstage" onMouseEnter={v.tPause} onMouseLeave={v.tResume}>
            {L(v.mods).map((m_3, i_3) => (
              <React.Fragment key={i_3}>
                {m_3?.on ? (
                  <>
                    <div className="mpane">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <span style={S(m_3?.tag)}>{T(m_3?.short)}</span>
                        <h3
                          style={{
                            margin: '0',
                            fontSize: '30px',
                            lineHeight: '38px',
                            fontWeight: '700',
                            letterSpacing: '-0.025em',
                            color: '#181d27',
                          }}
                        >
                          {T(m_3?.name)}
                        </h3>
                        <p style={{ margin: '0', fontSize: '17px', lineHeight: '27px', color: '#535862' }}>
                          {T(m_3?.lead)}
                        </p>
                        <ul className="mlist">
                          {L(m_3?.items).map((it_4, i_4) => (
                            <React.Fragment key={i_4}>
                              <li style={S(it_4?.delay)}>
                                <span className="mck" style={S(m_3?.fill)}>
                                  <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    <path d="M5 12l5 5L20 7" />
                                  </svg>
                                </span>
                                {T(it_4?.t)}
                              </li>
                            </React.Fragment>
                          ))}
                        </ul>
                      </div>
                      <div className="mshot">
                        <img src={A(m_3?.img)} alt={m_3?.alt} />
                      </div>
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
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
            {'Why teams choose HRMS'}
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
            {'Built for how Indonesian companies actually hire and manage.'}
          </h2>
        </div>
        <div className="hb rv-s">
          <div className="hbx big" style={{ gridArea: 'a', background: '#f4f5ff' }}>
            <span className="hbtag" style={{ color: '#131687' }}>
              {'Auto-Screening & Bulk Processing'}
            </span>
            <h3>{'Cut screening time by up to 30%.'}</h3>
            <p>{'Process up to 100 candidates at once with criteria-based auto-screening.'}</p>
            <div className="hbimg">
              <img
                src="/images/59945d211e241c9b280546fea9bba19b.webp"
                alt="HR team using the HRMS platform"
              />
            </div>
          </div>
          <div className="hbx" style={{ gridArea: 'b', background: '#fff0f7' }}>
            <span className="hbtag" style={{ color: '#b8006a' }}>
              {'Geotagged Candidate Matching'}
            </span>
            <h3>{'Talent near your work location.'}</h3>
            <div className="geo" aria-hidden="true">
              <span className="gpin">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                  <path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
                </svg>
              </span>{' '}
              <i className="gr" />
              <i className="gr r2" /> <b className="gd" style={{ left: '18%', top: '30%' }} />
              <b className="gd" style={{ left: '76%', top: '26%', animationDelay: '.5s' }} />
              <b className="gd" style={{ left: '70%', top: '72%', animationDelay: '1s' }} />
              <b className="gd" style={{ left: '26%', top: '74%', animationDelay: '1.5s' }} />
            </div>
          </div>
          <div className="hbx" style={{ gridArea: 'c', background: '#f2fbf2' }}>
            <span className="hbtag" style={{ color: '#006600' }}>
              {'Indonesia Compliance'}
            </span>
            <h3>{'BPJS, PPh 21 and the latest Labor Law — covered out of the box.'}</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
              <span className="cpill">{'BPJS'}</span>
              <span className="cpill">{'PPh 21'}</span>
              <span className="cpill">{'Labor Law'}</span>
            </div>
          </div>
          <div className="hbx big2" style={{ gridArea: 'd', background: '#f5f8ff' }}>
            <span className="hbtag" style={{ color: '#0031b3' }}>
              {'Reporting & Analytics'}
            </span>
            <h3>{'Real-time dashboards for hiring, attendance and headcount.'}</h3>
            <div className="hbimg">
              <img src="/images/74624f887ccec992805e415d535088f2.webp" alt="HRMS analytics dashboard" />
            </div>
          </div>
          <div className="hbx" style={{ gridArea: 'e', background: '#fef2f9', overflow: 'hidden' }}>
            <span className="hbtag" style={{ color: '#b8006a' }}>
              {'Mobile App for Employees'}
            </span>
            <h3>{'Clock in, request leave, view payslips.'}</h3>
            <img
              className="hbphone"
              src="/images/8126b826e60b018e605302b34bf5c9bd.webp"
              alt="HRMS mobile app for employees"
            />
          </div>
          <div className="hbx" style={{ gridArea: 'f', background: '#fafafa' }}>
            <span className="hbtag" style={{ color: '#131687' }}>
              {'Multi-company & Multi-branch'}
            </span>
            <h3>{'Designed for company groups with multiple entities.'}</h3>
            <div className="org" aria-hidden="true">
              <span className="on1">{'HQ'}</span> <span className="ol" />
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="on2">{'Entity A'}</span>
                <span className="on2">{'Entity B'}</span>
                <span className="on2">{'Branch'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: '#fafafa', padding: '88px 0' }}>
        <div
          className="wrap rv"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'Integrations'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '32px',
                lineHeight: '40px',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                color: '#050774',
              }}
            >
              {'Plays well with the tools you already use.'}
            </h2>
          </div>
          <div className="integ">
            <span className="ig">
              <i style={{ background: '#3366ff' }} />
              {'Google'}
            </span>{' '}
            <span className="ig">
              <i style={{ background: '#17b26a' }} />
              {'Microsoft'}
            </span>{' '}
            <span className="ig">
              <i style={{ background: '#e4007e' }} />
              {'Slack'}
            </span>{' '}
            <span className="ig ig-more">{'+ more'}</span>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '14px',
            maxWidth: '760px',
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
            {'The difference'}
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
            {'Going it alone vs working with Jobseeker.'}
          </h2>
        </div>
        <div className="cmp rv">
          <div className="crow chead">
            <span>{'Metric'}</span>
            <span>{'Manual / In-house'}</span>
            <span className="cj">
              <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
              {'With Jobseeker'}
            </span>
          </div>
          <div className="crow">
            <b>{'Time-to-Hire'}</b>
            <span className="cm">{'43 days avg. in Indonesia'}</span>
            <span className="cy">
              <em>{'28 days'}</em>
              {'with tech-driven recruitment'}
            </span>
          </div>
          <div className="crow">
            <b>{'Cost per Hire'}</b>
            <span className="cm">{'~Rp5–15M per employee'}</span>
            <span className="cy">
              <em>{'Rp2–6M'}</em>
              {'per hire with pre-screened candidates'}
            </span>
          </div>
          <div className="crow">
            <b>{'Candidates per Role'}</b>
            <span className="cm">{'215 applicants screened manually'}</span>
            <span className="cy">
              <em>{'Up to 322'}</em>
              {'applicants screened per role with auto-screening'}
            </span>
          </div>
          <div className="crow">
            <b>{'Candidate Fit & Retention'}</b>
            <span className="cm">{'Broad sourcing may miss location and role fit'}</span>
            <span className="cy">
              <em>{'+70%'}</em>
              {'early retention with location-based matching'}
            </span>
          </div>
          <div className="crow">
            <b>{'HR Bandwidth'}</b>
            <span className="cm">{'Recruitment admin crowds out strategic HR work'}</span>
            <span className="cy">
              <em>{'More focus'}</em>
              {'on hiring decisions, not repetitive admin'}
            </span>
          </div>
        </div>
      </section>
      <section style={{ background: '#fafafa', padding: '104px 0' }}>
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
                {'Industries'}
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
                {'Built for your industry.'}
              </h2>
            </div>
            <span style={{ fontSize: '14px', color: '#535862' }}>
              {'Pick your industry to see how HRMS fits.'}
            </span>
          </div>
          <div className="ix rv" onMouseEnter={v.iPause} onMouseLeave={v.iResume}>
            <div className="ixtabs" role="tablist" aria-label="Industries">
              {L(v.inds).map((d_5, i_5) => (
                <React.Fragment key={i_5}>
                  <button
                    type="button"
                    role="tab"
                    className={`ixtab ${T(d_5?.cls)}`}
                    aria-selected={d_5?.on}
                    onClick={d_5?.pick}
                  >
                    <span className="ixic" style={S(d_5?.icStyle)}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={d_5?.icon} />
                      </svg>
                    </span>{' '}
                    <span className="ixname">{T(d_5?.name)}</span>{' '}
                    {d_5?.on ? (
                      <>
                        <i className="ixprog" style={S(d_5?.bar)} />
                      </>
                    ) : null}
                  </button>
                </React.Fragment>
              ))}
            </div>
            {L(v.inds).map((d_6, i_6) => (
              <React.Fragment key={i_6}>
                {d_6?.on ? (
                  <>
                    <div className="ixpane">
                      <div className="ixvis" style={S(d_6?.visStyle)}>
                        {d_6?.hasPhoto ? (
                          <>
                            <div className={`ixphoto ${T(d_6?.phCls)}`} role="img" aria-label={d_6?.alt} />
                          </>
                        ) : null}{' '}
                        {d_6?.noPhoto ? (
                          <>
                            <div className="ixill" aria-hidden="true">
                              <span className="ixbig" style={S(d_6?.bigStyle)}>
                                <svg
                                  width="72"
                                  height="72"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d={d_6?.icon} />
                                </svg>
                              </span>{' '}
                              <span className="ixorb o1" style={S(d_6?.dotStyle)} />
                              <span className="ixorb o2" style={S(d_6?.dotStyle)} />
                              <span className="ixorb o3" style={S(d_6?.dotStyle)} />
                            </div>
                          </>
                        ) : null}
                        <div className="ixstat">
                          <b>{T(d_6?.statBig)}</b>
                          <span>{T(d_6?.statSmall)}</span>
                        </div>
                      </div>
                      <div className="ixbody">
                        <span className="ixtag" style={S(d_6?.tagStyle)}>
                          {T(d_6?.name)}
                        </span>
                        <h3>{T(d_6?.title)}</h3>
                        <span className="ixh">{'Common needs'}</span>
                        <ul className="ixneeds">
                          {L(d_6?.needs).map((n_7, i_7) => (
                            <React.Fragment key={i_7}>
                              <li style={S(n_7?.delay)}>
                                <span className="ixck" style={S(d_6?.fill)}>
                                  <svg
                                    width="11"
                                    height="11"
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
                                {T(n_7?.t)}
                              </li>
                            </React.Fragment>
                          ))}
                        </ul>
                        <span className="ixh">{'Recommended modules'}</span>
                        <div className="ixmods">
                          {L(d_6?.mods).map((m_8, i_8) => (
                            <React.Fragment key={i_8}>
                              <a className={`ixmod ${T(m_8?.cls)}`} href="#modules" style={S(m_8?.delay)}>
                                <i style={S(m_8?.dot)} />
                                {T(m_8?.t)}
                                {m_8?.soon ? (
                                  <>
                                    <em>{'Soon'}</em>
                                  </>
                                ) : null}
                              </a>
                            </React.Fragment>
                          ))}
                        </div>
                        <a className="ixcta" href="/demo/" style={S(d_6?.ctaStyle)}>
                          {'Talk to us about '}
                          {T(d_6?.name)} <span aria-hidden="true">{'→'}</span>
                        </a>
                      </div>
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '112px', paddingBottom: '32px' }}>
        <div className="story rv">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="cslogo">
                <img src="/images/6a46d25389b849ee192dfda89ea93deb.png" alt="Super Indo logo" />
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <b style={{ fontSize: '17px' }}>{'Lion Super Indo'}</b>
                <span style={{ fontSize: '13px', color: '#535862' }}>{'Since July 2024'}</span>
              </div>
            </div>
            <h3
              style={{
                margin: '0',
                fontSize: '32px',
                lineHeight: '40px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#050774',
              }}
            >
              <span style={{ color: '#cd0071' }}>{'5,926+'}</span>
              {' hires with '}
              <span style={{ color: '#cd0071' }}>{'87%'}</span>
              {' RR fulfillment rate.'}
            </h3>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#414651' }}>
              {
                'Since July 2024, Super Indo has processed 358,363 candidates and 446,108 applications through our platform — with bulk processing of up to 100 candidates at once.'
              }
            </p>
            <a className="btn btn-ghost" href="/v1/" style={{ alignSelf: 'flex-start' }}>
              {'More customer stories '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>
          </div>
          <div className="sstats">
            <div>
              <b>{'446,108'}</b>
              <span>{'Applications'}</span>
            </div>
            <div>
              <b>{'358,363'}</b>
              <span>{'Candidates processed'}</span>
            </div>
            <div>
              <b>{'5,926+'}</b>
              <span>{'Hires'}</span>
            </div>
            <div style={{ background: '#050774' }}>
              <b style={{ color: '#ffffff' }}>{'87%'}</b>
              <span style={{ color: '#cdcde3' }}>{'RR fulfillment rate'}</span>
            </div>
          </div>
        </div>
      </section>
      <section id="demo" className="wrap" style={{ paddingTop: '80px', paddingBottom: '112px' }}>
        <div
          className="rv"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '28px',
            background: '#020223',
            color: '#ffffff',
            padding: '72px 56px',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: '32px',
            alignItems: 'center',
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
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '40px',
                lineHeight: '48px',
                fontWeight: '700',
                letterSpacing: '-0.03em',
              }}
            >
              {'See HRMS in action — book a 30-minute demo.'}
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '520px',
                fontSize: '17px',
                lineHeight: '28px',
                color: '#cdcde3',
              }}
            >
              {'Our team will show you how HRMS solves specific pain points at your company.'}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
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
          <img
            src="/images/ed87700e8a2daf4628d12ccad78a9237.webp"
            alt="HRMS payroll report and attendance on desktop and mobile"
            style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '16px' }}
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
                {L(v.amMsgs).map((m_9, i_9) => (
                  <React.Fragment key={i_9}>
                    <div className={`ammsg ${T(m_9?.who)}`}>
                      {T(m_9?.t)}
                      {m_9?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_9?.href)}>
                            {T(m_9?.link)}
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
                    {L(v.amSugs).map((sg_10, i_10) => (
                      <React.Fragment key={i_10}>
                        <button type="button" className="asug" onClick={sg_10?.go}>
                          {T(sg_10?.t)}
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
