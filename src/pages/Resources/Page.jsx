// Resources — See all
// Generated from the design artboard Resources.dc.html by tools/convert-design.mjs.
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
      path: 'emp',
      hl: 0,
      term: 0,
      email: '',
      err: false,
      subbed: false,
    };
    const B = (id) => '/_blob/' + id;
    this.FEAT = {
      cat: 'Customer stories',
      read: '6 min',
      date: 'Oct 2026',
      img: B('40f43e160bf15e1e56ebafa9a1b5919c'),
      title: 'How Lion Super Indo processes 358,000+ candidates',
    };
    this.TYPE = {
      Article: { background: '#fef0c7', color: '#b54708' },
      Guide: { background: '#eaf1ff', color: '#0031b3' },
      Template: { background: '#ffe3f2', color: '#b8006a' },
      Glossary: { background: '#ececf8', color: '#050774' },
      Event: { background: '#e6f7e6', color: '#006600' },
    };
    this.CAT = {
      Hiring: { background: '#eaf1ff', color: '#0031b3' },
      'HR & People': { background: '#e6e6f1', color: '#050774' },
      Careers: { background: '#ffe3f2', color: '#b8006a' },
      'Product updates': { background: '#e6f7e6', color: '#006600' },
    };
    this.POSTS = [
      {
        cat: 'Careers',
        title: 'Video resumes: what employers actually look for',
        img: B('e84e897b5438e3c7e11ae4d8e5997bba'),
        read: '4 min',
      },
      {
        cat: 'Hiring',
        title: 'Hiring frontline talent at scale: a playbook',
        img: B('7b8949a17ec144987ce2d2afe9a96f27'),
        read: '7 min',
      },
      {
        cat: 'HR & People',
        title: 'ATS or HRIS: which module should you start with?',
        img: B('dfc8cecad349e3da461174c2d50d7ec7'),
        read: '5 min',
      },
    ];
    const I = (type, t, d, aud, href, meta) => ({ type, t, d, aud, href, meta });
    this.INDEX = [
      I(
        'Article',
        'How Lion Super Indo processes 358,000+ candidates',
        'Customer stories',
        'emp',
        '/blog-post/',
        '6 min',
      ),
      I(
        'Article',
        'Video resumes: what employers actually look for',
        'Careers',
        'js',
        '/blog-post/',
        '4 min',
      ),
      I('Article', 'Hiring frontline talent at scale: a playbook', 'Hiring', 'emp', '/blog-post/', '7 min'),
      I(
        'Article',
        'ATS or HRIS: which module should you start with?',
        'HR & People',
        'emp',
        '/blog-post/',
        '5 min',
      ),
      I(
        'Article',
        '5 soft skills every frontline employer asks about',
        'Careers',
        'js',
        '/blog-post/',
        '5 min',
      ),
      I('Article', 'BNSP certification, explained for jobseekers', 'Careers', 'js', '/blog-post/', '4 min'),
      I(
        'Guide',
        'Writing a job post that attracts the right applicants',
        'Recruitment',
        'emp',
        '/guides/',
        '6 min',
      ),
      I(
        'Guide',
        'Screening hundreds of applicants with bulk actions',
        'Recruitment',
        'emp',
        '/guides/',
        '9 min',
      ),
      I('Guide', 'First-week onboarding for new store crew', 'Onboarding', 'emp', '/guides/', '5 min'),
      I('Guide', 'Choosing your first HRMS module', 'HR Tech', 'emp', '/guides/', '7 min'),
      I('Guide', 'Preparing THR and payroll for the holidays', 'Payroll', 'emp', '/guides/', ''),
      I('Guide', 'Registering new hires for BPJS', 'Compliance', 'emp', '/guides/', ''),
      I('Guide', 'Recording a 30-second video resume', 'Job search', 'js', '/guides/', '5 min'),
      I('Guide', 'Building a profile employers trust', 'Job search', 'js', '/guides/', '4 min'),
      I('Guide', 'Answering common interview questions', 'Interviews', 'js', '/guides/', '8 min'),
      I('Guide', 'Understanding your first payslip', 'Careers', 'js', '/guides/', ''),
      I('Template', 'Job description template', 'Recruitment', 'emp', '/templates/', 'DOCX'),
      I('Template', 'Interview scorecard', 'Recruitment', 'emp', '/templates/', 'XLSX'),
      I('Template', 'Offer letter', 'Recruitment', 'emp', '/templates/', 'DOCX'),
      I('Template', 'Fixed-term contract (PKWT)', 'Contracts', 'emp', '/templates/', 'DOCX'),
      I('Template', 'First-week onboarding checklist', 'Onboarding', 'emp', '/templates/', 'PDF'),
      I('Template', 'Monthly payroll sheet', 'Payroll', 'emp', '/templates/', 'XLSX'),
      I('Template', 'THR calculator', 'Payroll', 'emp', '/templates/', 'XLSX'),
      I('Template', 'CV template for jobseekers', 'For jobseekers', 'js', '/templates/', 'Google Docs'),
      I(
        'Glossary',
        'THR',
        'Religious holiday allowance required by Indonesian law',
        'all',
        '/glossary/',
        'Term',
      ),
      I('Glossary', 'PKWT', 'Fixed-term employment contract', 'all', '/glossary/', 'Term'),
      I('Glossary', 'ATS', 'Applicant Tracking System', 'all', '/glossary/', 'Term'),
      I(
        'Glossary',
        'BPJS Ketenagakerjaan',
        'Indonesia’s employment social security program',
        'all',
        '/glossary/',
        'Term',
      ),
      I(
        'Event',
        'Hiring frontline staff at scale',
        'Webinar · Online · 12 Nov',
        'emp',
        '/events/',
        'Webinar',
      ),
      I('Event', 'Bali Hospitality Job Fair', 'Job fair · Bali · 21 Nov', 'js', '/events/', 'Job fair'),
      I('Event', 'Video resume clinic', 'Workshop · Jakarta · 27 Nov', 'js', '/events/', 'Workshop'),
      I(
        'Event',
        'THR & payroll checklist for 2027',
        'Webinar · Online · 10 Dec',
        'emp',
        '/events/',
        'Webinar',
      ),
    ];
    this.STACK = [
      {
        t: 'Blog',
        n: '10 articles',
        href: '/blog/',
        bg: '#fef0c7',
        c: '#b54708',
        icon: 'M4 4h16v16H4zM8 8h8M8 12h8M8 16h5',
      },
      {
        t: 'Guides',
        n: '12 playbooks',
        href: '/guides/',
        bg: '#eaf1ff',
        c: '#0031b3',
        icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5',
      },
      {
        t: 'Templates',
        n: '12 free downloads',
        href: '/templates/',
        bg: '#ffe3f2',
        c: '#b8006a',
        icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 18v-6M9 15l3 3 3-3',
      },
      {
        t: 'Glossary',
        n: '200+ HR terms',
        href: '/glossary/',
        bg: '#ececf8',
        c: '#050774',
        icon: 'M4 7V4h16v3M9 20h6M12 4v16',
      },
      {
        t: 'Events',
        n: '6 upcoming',
        href: '/events/',
        bg: '#e6f7e6',
        c: '#006600',
        icon: 'M3 5h18v16H3zM3 10h18M8 3v4M16 3v4',
      },
    ];
    this.TERMS = [
      {
        term: 'THR',
        def: 'Religious holiday allowance required by Indonesian law, paid before the holiday.',
      },
      { term: 'PKWT', def: 'A fixed-term employment contract for a specific period or project.' },
      { term: 'ATS', def: 'Applicant Tracking System — manages recruitment from application to hire.' },
      { term: 'Attrition Rate', def: 'The percentage of employees who leave the company in a given period.' },
    ];
    this.PATHS = {
      emp: {
        title: 'Your first 30 days of better hiring',
        steps: [
          [
            'Guide',
            'Writing a job post that attracts the right applicants',
            'Titles, salary and requirements candidates read.',
            '/guides/',
          ],
          ['Template', 'Job description template', 'A ready structure for any role.', '/templates/'],
          [
            'Guide',
            'First-week onboarding for new store crew',
            'Help new hires settle in and stay.',
            '/guides/',
          ],
          ['Event', 'Webinar: Hiring frontline staff at scale', '12 Nov · Online', '/events/'],
        ],
      },
      js: {
        title: 'Get hired faster, step by step',
        steps: [
          [
            'Guide',
            'Building a profile employers trust',
            'Photo, history and skills that get shortlisted.',
            '/guides/',
          ],
          ['Guide', 'Recording a 30-second video resume', 'What to say and how to frame it.', '/guides/'],
          ['Template', 'CV template for jobseekers', 'A clean CV you can edit in minutes.', '/templates/'],
          ['Event', 'Bali Hospitality Job Fair', '21 Nov · Bali', '/events/'],
        ],
      },
    };
  }
  componentDidMount() {
    this._rhI = setInterval(() => {
      const n = (this._rhN = (this._rhN || 0) + 1);
      const st = { hl: n % this.STACK.length };
      if (n % 2 === 0) st.term = (this.state.term + 1) % this.TERMS.length;
      this.setState(st);
    }, 2400);
  }
  componentWillUnmount() {
    clearInterval(this._rhI);
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
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
  componentWillUnmount() {
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
  }
  renderVals() {
    const s = this.state;
    const q = s.q.trim().toLowerCase();
    const audOk = (a) => s.aud === 'all' || a === 'all' || a === s.aud;
    const res = q
      ? this.INDEX.filter((x) => audOk(x.aud) && (x.t + ' ' + x.d + ' ' + x.type).toLowerCase().includes(q))
      : [];
    const tm = this.TERMS[s.term % this.TERMS.length];
    const P = this.PATHS[s.path];
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim());
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      q: s.q,
      hasQ: !!q,
      noQ: !q,
      onQ: (e) => this.setState({ q: e.target.value }),
      clearQ: () => this.setState({ q: '' }),
      auds: [
        ['all', 'Everyone'],
        ['emp', 'An employer'],
        ['js', 'A jobseeker'],
      ].map(([k, t]) => ({
        t,
        on: s.aud === k,
        cls: s.aud === k ? 'on' : '',
        pick: () => this.setState({ aud: k, path: k === 'js' ? 'js' : k === 'emp' ? 'emp' : s.path }),
      })),
      stack: this.STACK.map((x, i) => ({
        ...x,
        cls: s.hl === i ? 'on' : '',
        style: { animationDelay: 0.3 + i * 0.1 + 's' },
        icStyle: { background: x.bg, color: x.c },
      })),
      resLabel: res.length + (res.length === 1 ? ' result' : ' results') + ' for “' + s.q.trim() + '”',
      results: res.map((x, i) => ({
        ...x,
        typeStyle: this.TYPE[x.type],
        delay: { animationDelay: Math.min(i, 10) * 0.03 + 's' },
      })),
      noRes: !!q && res.length === 0,
      feat: this.FEAT,
      guides: [
        ['Writing a job post that attracts the right applicants', '6 min', '#3366ff'],
        ['First-week onboarding for new store crew', '5 min', '#17b26a'],
        ['Recording a 30-second video resume', '5 min', '#ff2f9f'],
      ].map(([t, time, c]) => ({ t, time, dot: { background: c } })),
      tpls: [
        ['Offer letter', 'DOCX', '#eaf1ff', '#0031b3'],
        ['Monthly payroll sheet', 'XLSX', '#e6f7e6', '#006600'],
        ['Onboarding checklist', 'PDF', '#fee4e2', '#b42318'],
      ].map(([t, fmt, bg, c]) => ({ t, fmt, style: {}, fmtStyle: { background: bg, color: c } })),
      term: { ...tm, key: { animationName: s.term % 2 ? 'rhterm2' : 'rhterm' } },
      pathTitle: P.title,
      isEmp: s.path === 'emp',
      isJs: s.path === 'js',
      empCls: s.path === 'emp' ? 'on' : '',
      jsCls: s.path === 'js' ? 'on' : '',
      showEmp: () => this.setState({ path: 'emp' }),
      showJs: () => this.setState({ path: 'js' }),
      pathKey: { opacity: 1 },
      path: P.steps.map(([type, t, d, href], i) => ({
        n: i + 1,
        type,
        t,
        d,
        href,
        typeStyle: this.TYPE[type],
        numStyle: { background: this.TYPE[type].color },
        delay: { animationDelay: i * 0.08 + 's' },
      })),
      latest: this.POSTS.map((p, i) => ({
        ...p,
        catStyle: this.CAT[p.cat],
        delay: { transitionDelay: i * 0.1 + 's' },
      })),
      email: s.email,
      onEmail: (e) => this.setState({ email: e.target.value, err: false }),
      err: s.err,
      emailCls: s.err ? 'err' : '',
      notSubbed: !s.subbed,
      subbed: s.subbed,
      subscribe: (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (okEmail) this.setState({ subbed: true });
        else this.setState({ err: true });
      },
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
      <section id="top" className="rhhero">
        <div className="rhdots" aria-hidden="true" />
        <div
          className="wrap rhhwrap"
          style={{ position: 'relative', paddingTop: '64px', paddingBottom: '72px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <nav className="rhcrumb rise d1" aria-label="Breadcrumb">
              <a href="/v1/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Resources'}</b>
            </nav>
            <span className="rise d1 rhpill">{'Resources'}</span>
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
              {'Learn, hire and '}
              <span className="rhhl">{'grow.'}</span>
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
                'Articles, playbooks, free templates, an HR glossary and events — everything we publish for employers and jobseekers, in one place.'
              }
            </p>
            <label className="rhsearch rise d4">
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
                placeholder="Search all resources, e.g. THR, onboarding, video resume"
                value={v.q}
                onChange={v.onQ}
                aria-label="Search all resources"
              />{' '}
              {v.hasQ ? (
                <>
                  <button type="button" className="rhclear" onClick={v.clearQ} aria-label="Clear search">
                    {'×'}
                  </button>
                </>
              ) : null}
            </label>
            <div className="rhaud rise d5" role="group" aria-label="I am">
              <span>{"I'm"}</span>{' '}
              {L(v.auds).map((a_0, i_0) => (
                <React.Fragment key={i_0}>
                  <button type="button" className={a_0?.cls} onClick={a_0?.pick} aria-pressed={a_0?.on}>
                    {T(a_0?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="rhstack rise d4" aria-hidden="true">
            {L(v.stack).map((s_1, i_1) => (
              <React.Fragment key={i_1}>
                <a
                  className={`rhtile ${T(s_1?.cls)}`}
                  href={A(s_1?.href)}
                  style={S(s_1?.style)}
                  tabIndex="-1"
                >
                  <span className="rhti" style={S(s_1?.icStyle)}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={s_1?.icon} />
                    </svg>
                  </span>{' '}
                  <span className="rhtt">
                    <b>{T(s_1?.t)}</b>
                    <small>{T(s_1?.n)}</small>
                  </span>{' '}
                  <em>{'→'}</em>
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>{' '}
      {v.hasQ ? (
        <>
          <section className="wrap" style={{ paddingTop: '8px', paddingBottom: '72px' }}>
            <div className="rhreshead">
              <b>{T(v.resLabel)}</b>
              <button type="button" onClick={v.clearQ}>
                {'Clear search'}
              </button>
            </div>
            <div className="rhlist">
              {L(v.results).map((r_2, i_2) => (
                <React.Fragment key={i_2}>
                  <a className="rhrow" href={A(r_2?.href)} style={S(r_2?.delay)}>
                    <span className="rhtype" style={S(r_2?.typeStyle)}>
                      {T(r_2?.type)}
                    </span>
                    <span className="rhrt">
                      <b>{T(r_2?.t)}</b>
                      <small>{T(r_2?.d)}</small>
                    </span>
                    <span className="rhmeta">{T(r_2?.meta)}</span>
                  </a>
                </React.Fragment>
              ))}{' '}
              {v.noRes ? (
                <>
                  <div className="rhnone">
                    <b>{'Nothing found.'}</b>
                    <span>{'Try another word, or ask Agent Ming in the corner.'}</span>
                  </div>
                </>
              ) : null}
            </div>
          </section>
        </>
      ) : null}{' '}
      {v.noQ ? (
        <>
          <section className="wrap" style={{ paddingTop: '24px', paddingBottom: '104px' }}>
            <div
              className="rv"
              style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}
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
                {'Explore by type'}
              </span>
              <h2
                className="h2"
                style={{
                  margin: '0',
                  fontSize: '40px',
                  lineHeight: '48px',
                  letterSpacing: '-0.03em',
                  color: '#050774',
                }}
              >
                {'Pick where to start'}
              </h2>
            </div>
            <div className="rhbento rv-s">
              <a className="rhb blog" href="/blog/">
                <div className="rhbimg">
                  <img src={A(v.feat?.img)} alt="" />
                  <span className="rhbtag">
                    {'Blog · '}
                    {T(v.feat?.cat)}
                  </span>
                </div>
                <div className="rhbtx">
                  <b>{T(v.feat?.title)}</b>
                  <small>
                    {T(v.feat?.read)}
                    {' read · '}
                    {T(v.feat?.date)}
                  </small>
                  <span className="rhgo">{'Read the blog →'}</span>
                </div>
              </a>{' '}
              <a className="rhb guides" href="/guides/">
                <span className="rhbk">{'Guides'}</span> <b>{'Step-by-step playbooks'}</b>
                <ul className="rhmini">
                  {L(v.guides).map((g_3, i_3) => (
                    <React.Fragment key={i_3}>
                      <li>
                        <i style={S(g_3?.dot)} />
                        {T(g_3?.t)}
                        <small>{T(g_3?.time)}</small>
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
                <span className="rhgo">{'All guides →'}</span>
              </a>{' '}
              <a className="rhb tpl" href="/templates/">
                <span className="rhbk">{'Templates'}</span> <b>{'Free HR templates'}</b>
                <div className="rhfiles">
                  {L(v.tpls).map((t_4, i_4) => (
                    <React.Fragment key={i_4}>
                      <span className="rhfile" style={S(t_4?.style)}>
                        <em style={S(t_4?.fmtStyle)}>{T(t_4?.fmt)}</em>
                        {T(t_4?.t)}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
                <span className="rhgo">{'Browse templates →'}</span>
              </a>{' '}
              <a className="rhb gloss" href="/glossary/">
                <span className="rhbk">{'Glossary'}</span> <b>{'200+ HR terms, explained'}</b>
                <div className="rhterm" style={S(v.term?.key)}>
                  <strong>{T(v.term?.term)}</strong>
                  <small>{T(v.term?.def)}</small>
                </div>
                <span className="rhgo">{'Open the glossary →'}</span>
              </a>{' '}
              <a className="rhb ev" href="/events/">
                <span className="rhbk">{'Events'}</span>
                <div className="rhev">
                  <span className="rhevd">
                    <b>{'21'}</b>
                    <small>{'Nov'}</small>
                  </span>
                  <span>
                    <b>{'Bali Hospitality Job Fair'}</b>
                    <small>{'Job fair · Bali · 09:00 WITA'}</small>
                  </span>
                </div>
                <span className="rhgo">{'See all events →'}</span>
              </a>
            </div>
          </section>
          <section style={{ background: '#f6f5fd', padding: '104px 0' }}>
            <div className="wrap">
              <div
                className="rv"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '24px',
                  flexWrap: 'wrap',
                  marginBottom: '36px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                      letterSpacing: '-0.03em',
                      color: '#050774',
                    }}
                  >
                    {T(v.pathTitle)}
                  </h2>
                </div>
                <div className="rhseg" role="group" aria-label="Path">
                  <button type="button" className={v.empCls} onClick={v.showEmp} aria-pressed={v.isEmp}>
                    {'For employers'}
                  </button>{' '}
                  <button type="button" className={v.jsCls} onClick={v.showJs} aria-pressed={v.isJs}>
                    {'For jobseekers'}
                  </button>
                </div>
              </div>
              <div className="rhpath" style={S(v.pathKey)}>
                <span className="rhline" aria-hidden="true">
                  <i />
                </span>{' '}
                {L(v.path).map((p_5, i_5) => (
                  <React.Fragment key={i_5}>
                    <a className="rhstep" href={A(p_5?.href)} style={S(p_5?.delay)}>
                      <span className="rhsn" style={S(p_5?.numStyle)}>
                        {T(p_5?.n)}
                      </span>{' '}
                      <span className="rhtype" style={S(p_5?.typeStyle)}>
                        {T(p_5?.type)}
                      </span>{' '}
                      <b>{T(p_5?.t)}</b> <small>{T(p_5?.d)}</small>
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '96px' }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#cd0071',
                  }}
                >
                  {'Latest'}
                </span>
                <h2
                  className="h2"
                  style={{
                    margin: '0',
                    fontSize: '40px',
                    lineHeight: '48px',
                    letterSpacing: '-0.03em',
                    color: '#050774',
                  }}
                >
                  {'Fresh from the team'}
                </h2>
              </div>
              <a className="btn btn-ghost" href="/blog/">
                {'View all articles '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>
            </div>
            <div className="rhlatest">
              {L(v.latest).map((p_6, i_6) => (
                <React.Fragment key={i_6}>
                  <a className="rhpost rv" href="/blog-post/" style={S(p_6?.delay)}>
                    <div className="rhpimg">
                      <img src={A(p_6?.img)} alt="" />
                    </div>
                    <span className="rhtype" style={S(p_6?.catStyle)}>
                      {T(p_6?.cat)}
                    </span>{' '}
                    <b>{T(p_6?.title)}</b>{' '}
                    <small>
                      {T(p_6?.read)}
                      {' read'}
                    </small>
                  </a>
                </React.Fragment>
              ))}
            </div>
          </section>
        </>
      ) : null}{' '}
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="rhnews rv">
          <div className="rhnl">
            <span className="rhenv" aria-hidden="true">
              <i />
            </span>
            <div>
              <b>{'Get new resources every month'}</b>
              <span>{'One email with the best articles, guides and templates. No spam.'}</span>
            </div>
          </div>
          {v.notSubbed ? (
            <>
              <form className="rhnf" onSubmit={v.subscribe} noValidate>
                <input
                  type="email"
                  className={v.emailCls}
                  placeholder="you@company.com"
                  value={v.email}
                  onChange={v.onEmail}
                  aria-label="Email address"
                />{' '}
                <button type="submit">{'Subscribe'}</button>{' '}
                {v.err ? (
                  <>
                    <small>{'Please enter a valid email.'}</small>
                  </>
                ) : null}
              </form>
            </>
          ) : null}{' '}
          {v.subbed ? (
            <>
              <div className="rhok">{"✓ You're subscribed. See you next month!"}</div>
            </>
          ) : null}
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
                {L(v.amMsgs).map((m_7, i_7) => (
                  <React.Fragment key={i_7}>
                    <div className={`ammsg ${T(m_7?.who)}`}>
                      {T(m_7?.t)}
                      {m_7?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_7?.href)}>
                            {T(m_7?.link)}
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
                    {L(v.amSugs).map((sg_8, i_8) => (
                      <React.Fragment key={i_8}>
                        <button type="button" className="asug" onClick={sg_8?.go}>
                          {T(sg_8?.t)}
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
