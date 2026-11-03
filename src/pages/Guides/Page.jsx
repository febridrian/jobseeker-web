// Resources — Guides
// Generated from the design artboard Guides.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lang: 'EN',
      q: '',
      aud: 'all',
      topic: 'All',
      path: '',
      saved: [],
      checks: [true, true, false, false, false, false],
    };
    const B = (id) => '/_blob/' + id;
    this.PATHS = [
      {
        id: 'scale',
        aud: 'For employers',
        t: 'Hiring frontline staff at scale',
        d: 'From job posts to bulk screening and first-week onboarding.',
        icon: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M17 3.5a4 4 0 0 1 0 7.5M22 21a7 7 0 0 0-4-6.3',
        bg: '#eaf1ff',
        c: '#0031b3',
        time: '45 min',
      },
      {
        id: 'hrms',
        aud: 'For employers',
        t: 'Setting up your HRMS',
        d: 'Choose modules, migrate employee data and go live with payroll.',
        icon: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
        bg: '#f0f9f0',
        c: '#006600',
        time: '35 min',
      },
      {
        id: 'hired',
        aud: 'For jobseekers',
        t: 'Getting hired faster',
        d: 'Build your profile, record a video resume and ace the interview.',
        icon: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2',
        bg: '#fff0f7',
        c: '#b8006a',
        time: '30 min',
      },
    ];
    const G = (t, d, aud, topic, fmt, level, time, img, path, bg) => ({
      t,
      d,
      aud,
      topic,
      fmt,
      level,
      time,
      img: B(img),
      path,
      bg,
    });
    this.GUIDES = [
      G(
        'Writing a job post that attracts the right applicants',
        'Titles, salary ranges and requirements that frontline candidates actually read.',
        'emp',
        'Recruitment',
        'Guide',
        1,
        '6 min',
        '7b8949a17ec144987ce2d2afe9a96f27',
        'scale',
        '#eaf1ff',
      ),
      G(
        'Screening hundreds of applicants with bulk actions',
        'Shortlist, invite and reject in batches without losing good candidates.',
        'emp',
        'Recruitment',
        'Playbook',
        2,
        '9 min',
        '40f43e160bf15e1e56ebafa9a1b5919c',
        'scale',
        '#eaf1ff',
      ),
      G(
        'First-week onboarding for new store crew',
        'A day-by-day plan to help new hires settle in and stay longer.',
        'emp',
        'Onboarding',
        'Checklist',
        1,
        '5 min',
        'ec76daf39da4d710c5e6e69840177081',
        'scale',
        '#ececf8',
      ),
      G(
        'Choosing your first HRMS module',
        'ATS or HRIS? How to start small and grow into the full platform.',
        'emp',
        'HR Tech',
        'Guide',
        1,
        '7 min',
        'dfc8cecad349e3da461174c2d50d7ec7',
        'hrms',
        '#f0f9f0',
      ),
      G(
        'Migrating employee data to HRIS',
        'Clean, map and import your records with minimal downtime.',
        'emp',
        'HR Tech',
        'Playbook',
        3,
        '12 min',
        'e57099753e7fab858c57ab16f365da68',
        'hrms',
        '#f0f9f0',
      ),
      G(
        'Preparing THR and payroll for the holidays',
        'Who is eligible, how to calculate it, and when to pay.',
        'emp',
        'Payroll & Compliance',
        'Checklist',
        2,
        '8 min',
        '4d592eb7e165a278c09be1f4ef4a82af',
        'hrms',
        '#fef0c7',
      ),
      G(
        'Registering new hires for BPJS',
        'A step-by-step guide to BPJS Ketenagakerjaan and Kesehatan enrollment.',
        'emp',
        'Payroll & Compliance',
        'Guide',
        2,
        '7 min',
        'fe1fce82346de548b9d6acb179477ed9',
        'hrms',
        '#fef0c7',
      ),
      G(
        'Recording a 30-second video resume',
        'What to say, how to frame it, and mistakes to avoid.',
        'js',
        'Job search',
        'Guide',
        1,
        '5 min',
        'e84e897b5438e3c7e11ae4d8e5997bba',
        'hired',
        '#fff0f7',
      ),
      G(
        'Building a profile employers trust',
        'Photos, work history and skills that get you shortlisted.',
        'js',
        'Job search',
        'Checklist',
        1,
        '4 min',
        '54b685ce0fd14a082be6160ac3167ded',
        'hired',
        '#fff0f7',
      ),
      G(
        'Answering common interview questions',
        'Simple, honest answers for retail, F&B and warehouse roles.',
        'js',
        'Interviews',
        'Guide',
        2,
        '8 min',
        'e69fbc5fc8f6162b8c19957af8a15019',
        'hired',
        '#f4ebff',
      ),
      G(
        'Getting certified on Jobseeker Academy',
        'Pick a course, finish it, and show the certificate on your profile.',
        'js',
        'Skills',
        'Guide',
        1,
        '6 min',
        '003b5131fe938c88a6b611e19948f6ba',
        'hired',
        '#f0f9f0',
      ),
      G(
        'Understanding your first payslip',
        'Basic salary, allowances, BPJS and PPh 21 — explained simply.',
        'js',
        'Payroll & Compliance',
        'Guide',
        1,
        '6 min',
        '10ceea26110144e6545dfe8fbb28d953',
        '',
        '#fef0c7',
      ),
    ];
    this.CHECKS = [
      { t: 'Prepare uniform, ID card and locker', d: 'Have everything ready before day one.', day: 'Before' },
      { t: 'Register for BPJS', d: 'Ketenagakerjaan and Kesehatan.', day: 'Day 1' },
      { t: 'Safety & store orientation', d: 'Emergency exits, hygiene, house rules.', day: 'Day 1' },
      { t: 'Assign a buddy', d: 'Pair them with an experienced colleague.', day: 'Day 2' },
      { t: 'POS & daily task training', d: 'Hands-on practice with supervision.', day: 'Day 3' },
      { t: 'End-of-week check-in', d: 'Ask how it is going and answer questions.', day: 'Day 5' },
    ];
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
    const s = this.state;
    const q = s.q.trim().toLowerCase();
    const base = this.GUIDES.filter(
      (g) =>
        (s.aud === 'all' || g.aud === s.aud) &&
        (!s.path || g.path === s.path) &&
        (!q || (g.t + ' ' + g.d + ' ' + g.topic).toLowerCase().includes(q)),
    );
    const list = base.filter((g) => s.topic === 'All' || g.topic === s.topic);
    const TOP = [
      'All',
      'Recruitment',
      'Onboarding',
      'HR Tech',
      'Payroll & Compliance',
      'Job search',
      'Interviews',
      'Skills',
    ];
    const done = s.checks.filter(Boolean).length,
      total = this.CHECKS.length;
    const P = this.PATHS.find((p) => p.id === s.path);
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      q: s.q,
      hasQ: !!q,
      onQ: (e) => this.setState({ q: e.target.value }),
      clearQ: () => this.setState({ q: '' }),
      popular: ['Onboarding', 'THR', 'Video resume', 'BPJS'].map((t) => ({
        t,
        go: () => this.setState({ q: t, topic: 'All', path: '', aud: 'all' }),
      })),
      paths: this.PATHS.map((p) => {
        const n = this.GUIDES.filter((g) => g.path === p.id).length;
        const sv = this.GUIDES.filter((g) => g.path === p.id && s.saved.includes(g.t)).length;
        return {
          ...p,
          count: n,
          cls: s.path === p.id ? 'on' : '',
          bg: { background: p.bg },
          ic: { color: p.c },
          fill: { width: Math.max(8, (sv / n) * 100) + '%', background: p.c },
          pick: () => this.setState({ path: s.path === p.id ? '' : p.id, topic: 'All', aud: 'all' }),
        };
      }),
      hasPath: !!P,
      pathName: P ? P.t : '',
      clearPath: () => this.setState({ path: '' }),
      libTitle: q ? 'Results for “' + s.q.trim() + '”' : 'Guide library',
      countLabel: list.length + (list.length === 1 ? ' guide' : ' guides'),
      auds: [
        ['all', 'All'],
        ['emp', 'For employers'],
        ['js', 'For jobseekers'],
      ].map(([k, t]) => ({
        t,
        on: s.aud === k,
        cls: s.aud === k ? 'on' : '',
        pick: () => this.setState({ aud: k, topic: 'All' }),
      })),
      topics: TOP.map((t) => ({
        t,
        n: t === 'All' ? base.length : base.filter((g) => g.topic === t).length,
        on: s.topic === t,
        cls: s.topic === t ? 'on' : '',
        pick: () => this.setState({ topic: t }),
      })).filter((t) => t.t === 'All' || t.n > 0),
      guides: list.map((g, i) => {
        const saved = s.saved.includes(g.t);
        return {
          ...g,
          saved,
          savedCls: saved ? 'on' : '',
          bg: { background: g.bg },
          audLabel: g.aud === 'emp' ? 'Employers' : 'Jobseekers',
          audStyle:
            g.aud === 'emp'
              ? { background: '#eaf1ff', color: '#0031b3' }
              : { background: '#ffe3f2', color: '#b8006a' },
          level: ['Beginner', 'Intermediate', 'Advanced'][g.level - 1],
          l1: 'f',
          l2: g.level >= 2 ? 'f' : '',
          l3: g.level >= 3 ? 'f' : '',
          delay: { animationDelay: Math.min(i, 9) * 0.04 + 's' },
          toggleSave: () =>
            this.setState({ saved: saved ? s.saved.filter((x) => x !== g.t) : s.saved.concat(g.t) }),
        };
      }),
      none: list.length === 0,
      resetAll: () => this.setState({ q: '', aud: 'all', topic: 'All', path: '' }),
      savedCount: s.saved.length,
      savedBarCls: s.saved.length ? 'show' : '',
      checks: this.CHECKS.map((c, i) => ({
        ...c,
        on: s.checks[i],
        cls: s.checks[i] ? 'on' : '',
        toggle: () => {
          const n = s.checks.slice();
          n[i] = !n[i];
          this.setState({ checks: n });
        },
      })),
      doneCount: done,
      totalCount: total,
      allDone: done === total,
      ringStyle: { strokeDashoffset: 213.6 * (1 - done / total) },
      resetChecks: () => this.setState({ checks: this.CHECKS.map(() => false) }),
      isID: s.lang === 'ID',
      isEN: s.lang === 'EN',
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
      <section id="top" className="gdhero">
        <div className="gddots" aria-hidden="true" />
        <div
          className="wrap gdhwrap"
          style={{ position: 'relative', paddingTop: '64px', paddingBottom: '72px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <nav className="gdcrumb rise d1" aria-label="Breadcrumb">
              <a href="/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/resources/">{'Resources'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Guides'}</b>
            </nav>
            <span className="rise d1 gdpill">{'Guides'}</span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '54px',
                lineHeight: '60px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#050774',
              }}
            >
              {'Practical guides for hiring and HR in '}
              <span className="gdhl">{'Indonesia.'}</span>
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
              {
                'Step-by-step playbooks, checklists and how-tos — for employers building teams and jobseekers building careers.'
              }
            </p>
            <label className="gdsearch rise d4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>{' '}
              <input
                type="search"
                placeholder="Search guides, e.g. onboarding, THR, video resume"
                value={v.q}
                onChange={v.onQ}
                aria-label="Search guides"
              />{' '}
              {v.hasQ ? (
                <>
                  <button type="button" className="gdclear" onClick={v.clearQ} aria-label="Clear search">
                    {'×'}
                  </button>
                </>
              ) : null}
            </label>
            <div className="gdpop rise d5">
              <span>{'Popular:'}</span>
              {L(v.popular).map((p_0, i_0) => (
                <React.Fragment key={i_0}>
                  <button type="button" onClick={p_0?.go}>
                    {T(p_0?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="gdstack rise d4" aria-hidden="true">
            <div className="gdbook b3">
              <span className="gdbt">{'Checklist'}</span>
              <b>{'THR & payroll prep'}</b>
              <i />
              <i className="s" />
            </div>
            <div className="gdbook b2">
              <span className="gdbt">{'Playbook'}</span>
              <b>{'Hiring store crew at scale'}</b>
              <i />
              <i className="s" />
            </div>
            <div className="gdbook b1">
              <span className="gdbt">{'Guide · 8 min'}</span> <b>{'Onboarding new hires in week one'}</b>{' '}
              <span className="gdsteps">
                <em className="on">{'1'}</em>
                <em className="on">{'2'}</em>
                <em className="cur">{'3'}</em>
                <em>{'4'}</em>
                <em>{'5'}</em>
              </span>{' '}
              <span className="gdprog">
                <i />
              </span>
            </div>
            <span className="gdspark s1" />
            <span className="gdspark s2" />
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '24px', paddingBottom: '96px' }}>
        <div
          className="rv"
          style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}
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
              fontSize: '36px',
              lineHeight: '44px',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: '#050774',
            }}
          >
            {'Learning paths'}
          </h2>
        </div>
        <div className="gdpaths rv-s">
          {L(v.paths).map((p_1, i_1) => (
            <React.Fragment key={i_1}>
              <button
                type="button"
                className={`gdpath ${T(p_1?.cls)}`}
                style={S(p_1?.bg)}
                onClick={p_1?.pick}
              >
                <span className="gdpi" style={S(p_1?.ic)}>
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
                    <path d={p_1?.icon} />
                  </svg>
                </span>{' '}
                <span className="gdpaud">{T(p_1?.aud)}</span> <b>{T(p_1?.t)}</b> <small>{T(p_1?.d)}</small>{' '}
                <span className="gdpbar">
                  <i style={S(p_1?.fill)} />
                </span>{' '}
                <span className="gdpmeta">
                  {T(p_1?.count)}
                  {' guides · '}
                  {T(p_1?.time)}
                </span>{' '}
                <span className="gdpgo" aria-hidden="true">
                  {'→'}
                </span>
              </button>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section id="library" style={{ background: '#fafafa', padding: '88px 0 96px' }}>
        <div className="wrap">
          <div className="gdtools rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                {T(v.libTitle)}
              </h2>
              <span style={{ fontSize: '14px', color: '#535862' }}>{T(v.countLabel)}</span>
            </div>
            <div className="gdseg" role="group" aria-label="Audience">
              {L(v.auds).map((a_2, i_2) => (
                <React.Fragment key={i_2}>
                  <button type="button" className={a_2?.cls} onClick={a_2?.pick} aria-pressed={a_2?.on}>
                    {T(a_2?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="gdtopics rv">
            {L(v.topics).map((t_3, i_3) => (
              <React.Fragment key={i_3}>
                <button
                  type="button"
                  className={`gdtopic ${T(t_3?.cls)}`}
                  onClick={t_3?.pick}
                  aria-pressed={t_3?.on}
                >
                  {T(t_3?.t)}
                  <small>{T(t_3?.n)}</small>
                </button>
              </React.Fragment>
            ))}{' '}
            {v.hasPath ? (
              <>
                <button type="button" className="gdpathchip" onClick={v.clearPath}>
                  {'Path: '}
                  {T(v.pathName)}
                  {' ×'}
                </button>
              </>
            ) : null}
          </div>
          <div className="gdgrid">
            {L(v.guides).map((g_4, i_4) => (
              <React.Fragment key={i_4}>
                <article className="gdcard" style={S(g_4?.delay)}>
                  <div className="gdcimg" style={S(g_4?.bg)}>
                    <img src={A(g_4?.img)} alt="" /> <span className="gdfmt">{T(g_4?.fmt)}</span>{' '}
                    <button
                      type="button"
                      className={`gdsave ${T(g_4?.savedCls)}`}
                      onClick={g_4?.toggleSave}
                      aria-pressed={g_4?.saved}
                      aria-label="Save guide"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="gdcbody">
                    <span className="gdcmeta">
                      <b style={S(g_4?.audStyle)}>{T(g_4?.audLabel)}</b>
                      <span>{T(g_4?.topic)}</span>
                    </span>
                    <h3>{T(g_4?.t)}</h3>
                    <p>{T(g_4?.d)}</p>
                    <span className="gdcfoot">
                      <span className="gdlvl">
                        <i className={g_4?.l1} />
                        <i className={g_4?.l2} />
                        <i className={g_4?.l3} />
                        {T(g_4?.level)}
                      </span>
                      <span>{T(g_4?.time)}</span>
                    </span>
                  </div>
                </article>
              </React.Fragment>
            ))}{' '}
            {v.none ? (
              <>
                <div className="gdnone">
                  <b>{'No guides match your filters.'}</b>
                  <button type="button" onClick={v.resetAll}>
                    {'Reset filters'}
                  </button>
                </div>
              </>
            ) : null}
          </div>
          <div className={`gdsavedbar ${T(v.savedBarCls)}`} aria-live="polite">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            {T(v.savedCount)}
            {' saved for later'}
          </div>
          <p style={{ margin: '18px 0 0', textAlign: 'center', fontSize: '12px', color: '#717680' }}>
            {'Sample guides for layout — replace with real content.'}
          </p>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '104px' }}>
        <div className="gdcheck rv">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'Try a checklist'}
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
              {'First-week onboarding checklist'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#535862' }}>
              {'Tick items off as you go. Every guide comes with an interactive checklist like this one.'}
            </p>
            <div className="gdring">
              <svg viewBox="0 0 80 80" aria-hidden="true">
                <circle cx="40" cy="40" r="34" />
                <circle className="gdringp" cx="40" cy="40" r="34" style={S(v.ringStyle)} />
              </svg>
              <span>
                <b>
                  {T(v.doneCount)}
                  {'/'}
                  {T(v.totalCount)}
                </b>
                <small>{'done'}</small>
              </span>
            </div>
            {v.allDone ? (
              <>
                <span className="gdyay">{'All set — your new hire is ready to go!'}</span>
              </>
            ) : null}
          </div>
          <div className="gdlist">
            {L(v.checks).map((c_5, i_5) => (
              <React.Fragment key={i_5}>
                <button
                  type="button"
                  className={`gditem ${T(c_5?.cls)}`}
                  onClick={c_5?.toggle}
                  aria-pressed={c_5?.on}
                >
                  <span className="gdbox">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>{' '}
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <b>{T(c_5?.t)}</b>
                    <small>{T(c_5?.d)}</small>
                  </span>{' '}
                  <span className="gdday">{T(c_5?.day)}</span>
                </button>
              </React.Fragment>
            ))}{' '}
            <button type="button" className="gdreset" onClick={v.resetChecks}>
              {'Reset checklist'}
            </button>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="gdcta rv">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1', minWidth: '260px' }}
          >
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '34px',
                lineHeight: '42px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#ffffff',
              }}
            >
              {'Put the guides into practice.'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#cdcde3' }}>
              {
                'Employers can run these playbooks in Jobseeker HRMS. Jobseekers can build the skills on Jobseeker Academy.'
              }
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a className="btn gdbw" href="/demo/">
              {'Schedule a demo '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>{' '}
            <a className="btn gdbo" href="/academy/">
              {'Explore Academy'}
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
