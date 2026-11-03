// About — Press & Media
// Generated from the design artboard Press.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, lang: 'EN', year: 'All', yOpen: false, page: 0 };
    const B = (id) => '/_blob/' + id;
    const I = {
      eco: 'M12 2l9 5v10l-9 5-9-5V7zM12 22V12M21 7l-9 5-9-5',
      store: 'M3 9l1.5-5h15L21 9M3 9h18v11H3zM3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M9 20v-5h6v5',
      globe:
        'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z',
      users:
        'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M17 3.5a4 4 0 0 1 0 7.5M22 21a7 7 0 0 0-4-6.3',
      check: 'M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4L12 14l-3-3',
      grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
      rocket:
        'M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M14.5 9.5L9 15l-3-3 5.5-5.5C14 4 18 3 21 3c0 3-1 7-3.5 9.5L12 18l-3-3',
      book: 'M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z',
    };
    const G = [
      'linear-gradient(140deg,#5865f2,#2a2bb8)',
      'linear-gradient(140deg,#ff7cc0,#e4007e)',
      'linear-gradient(140deg,#6ce9a6,#009800)',
      'linear-gradient(140deg,#84a9ff,#0031b3)',
      'linear-gradient(140deg,#fdb022,#dc6803)',
    ];
    this.REL = [
      {
        y: '2026',
        date: '2026',
        tag: 'Product',
        title: 'Jobseeker Company completes its 7-product workforce ecosystem',
        ex: 'HRMS, J-Partners, Talent Augmentation, Executive Search, Corporate Training, Jobseeker App and Jobseeker Academy — now one ecosystem.',
        icon: I.eco,
        g: G[0],
      },
      {
        y: '2026',
        date: '2026',
        tag: 'Product',
        title: 'PMS and LMS modules coming soon to Jobseeker HRMS',
        ex: 'Performance and learning modules designed to sit alongside HRIS.',
        icon: I.grid,
        g: G[2],
      },
      {
        y: '2025',
        date: '2025',
        tag: 'Milestone',
        title: '420,000+ candidates successfully placed',
        ex: 'A milestone for connecting Indonesian jobseekers with better employment opportunities.',
        icon: I.check,
        g: G[1],
      },
      {
        y: '2025',
        date: '2025',
        tag: 'Company',
        title: 'Jobseeker Company expands to Jakarta and Singapore',
        ex: 'New offices at Menara Kompas, Jakarta and International Plaza, Singapore.',
        icon: I.globe,
        g: G[3],
      },
      {
        y: '2024',
        date: '2024–2025',
        tag: 'Milestone',
        title: '40,000+ employers onboarded, 3.9M+ candidates reached',
        ex: 'Our database grows to 3.9M+ candidates as employers adopt the platform.',
        icon: I.users,
        g: G[4],
      },
      {
        y: '2024',
        date: 'Jul 2024',
        tag: 'Partnership',
        title: 'Strategic partnership with Lion Super Indo',
        ex: 'Lion Super Indo becomes one of our first enterprise clients.',
        icon: I.store,
        g: G[1],
      },
      {
        y: '2024',
        date: '2024',
        tag: 'Product',
        title: 'Jobseeker Company launches HRMS for employers',
        ex: 'Expanding the product suite for employers with recruitment, HR data, attendance and payroll.',
        icon: I.rocket,
        g: G[0],
      },
      {
        y: '2023',
        date: '2023',
        tag: 'Company',
        title: 'Jobseeker Company founded in Bali',
        ex: 'The initial team starts building the Jobseeker App.',
        icon: I.book,
        g: G[3],
      },
    ];
    this.PER = 6;
    const H = B('003b5131fe938c88a6b611e19948f6ba');
    this.COURSES = [
      {
        cat: 'Sales & Marketing',
        title: 'Cara Baru Jualan Pakai AI',
        lessons: 31,
        price: 'Rp 99.000',
        was: 'Rp 5.800.000',
        off: 98,
        rating: '4.7',
        thumb: {
          backgroundImage: 'url(' + H + ')',
          backgroundSize: '480% auto',
          backgroundPosition: '7.8% 58%',
        },
      },
      {
        cat: 'Career Development',
        title: 'Teknik Meracik Kopi: Latihan Nyata, Kerja Nyata',
        lessons: 25,
        price: 'Rp 149.000',
        was: 'Rp 298.000',
        off: 50,
        rating: '4.2',
        thumb: {
          backgroundImage: 'url(' + H + ')',
          backgroundSize: '480% auto',
          backgroundPosition: '36.6% 58%',
        },
      },
    ];
    this.POSTS = [
      {
        cat: 'Customer stories',
        title: 'How Lion Super Indo processes 358,000+ candidates',
        ex: 'Since July 2024, Super Indo has run 446,108 applications through our platform.',
        img: B('40f43e160bf15e1e56ebafa9a1b5919c'),
        date: '24 Oct 2026',
        catStyle: { background: '#fef0c7', color: '#b54708' },
      },
      {
        cat: 'Careers',
        title: 'Video resumes: what employers actually look for',
        ex: 'Thirty seconds is enough to stand out.',
        img: B('e84e897b5438e3c7e11ae4d8e5997bba'),
        date: '24 Oct 2026',
        catStyle: { background: '#ffe3f2', color: '#b8006a' },
      },
      {
        cat: 'HR & People',
        title: 'ATS or HRIS: which module should you start with?',
        ex: 'A quick guide to picking your first HRMS module.',
        img: B('dfc8cecad349e3da461174c2d50d7ec7'),
        date: '11 Oct 2026',
        catStyle: { background: '#e6e6f1', color: '#050774' },
      },
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
    const list = this.REL.filter((r) => s.year === 'All' || r.y === s.year);
    const pages = Math.max(1, Math.ceil(list.length / this.PER));
    const page = Math.min(s.page, pages - 1);
    const shown = list.slice(page * this.PER, page * this.PER + this.PER);
    const YRS = ['All', '2026', '2025', '2024', '2023'];
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      yOpen: s.yOpen,
      yOpenCls: s.yOpen ? 'open' : '',
      toggleYears: () => this.setState({ yOpen: !s.yOpen }),
      yearLabel: s.year === 'All' ? 'All years' : s.year,
      years: YRS.map((y) => ({
        label: y === 'All' ? 'All years' : y,
        count: y === 'All' ? this.REL.length : this.REL.filter((r) => r.y === y).length,
        on: y === s.year,
        cls: y === s.year ? 'on' : '',
        pick: () => this.setState({ year: y, yOpen: false, page: 0 }),
      })),
      releases: shown.map((r, i) => ({
        ...r,
        bg: { background: r.g },
        delay: { animationDelay: i * 0.06 + 's' },
      })),
      pages: Array.from({ length: pages }, (_, i) => ({
        n: i + 1,
        on: i === page,
        cls: i === page ? 'on' : '',
        pick: () => this.setState({ page: i }),
      })),
      prevPage: () => this.setState({ page: Math.max(0, page - 1) }),
      nextPage: () => this.setState({ page: Math.min(pages - 1, page + 1) }),
      courses: this.COURSES,
      posts: this.POSTS,
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
      <section id="top" className="prhero">
        <div className="wrap prhwrap">
          <div className="prhtx">
            <nav className="prcrumb rise d1" aria-label="Breadcrumb">
              <a href="/v1/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/about/">{'About'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Press & Media'}</b>
            </nav>
            <span className="rise d1 prpill">{'Press & Media'}</span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '56px',
                lineHeight: '62px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#181d27',
              }}
            >
              {'News, coverage, and media kit for '}
              <span className="prhl">{'Jobseeker Company'}</span>
            </h1>
            <p
              className="rise d3"
              style={{ margin: '0', fontSize: '17px', lineHeight: '27px', color: '#535862' }}
            >
              {'For journalists, reporters, and media partners.'}
            </p>
            <div className="rise d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn" href="#releases" style={{ background: '#050774', color: '#ffffff' }}>
                {'Latest releases '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>{' '}
              <a className="btn btn-ghost" href="#kit">
                {'Media kit'}
              </a>
            </div>
          </div>
        </div>
        <div className="prpanel rise d3" aria-hidden="true">
          <span className="prglow" /> <span className="prsq s1" />
          <span className="prsq s2" />
          <span className="prsq s3" /> <span className="prspark k1" />
          <span className="prspark k2" />
          <span className="prspark k3" />
        </div>
      </section>
      <section id="releases" className="wrap" style={{ paddingTop: '104px', paddingBottom: '80px' }}>
        <div className="prhead rv">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.04em', color: '#050774' }}>
              {'Latest Updates'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '36px',
                lineHeight: '44px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#181d27',
              }}
            >
              {'Press Releases'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', color: '#535862' }}>
              {'The official source for journalists and partners to access the latest news releases.'}
            </p>
          </div>
          <div className="pryears">
            <button
              type="button"
              className={`pryb ${T(v.yOpenCls)}`}
              onClick={v.toggleYears}
              aria-haspopup="listbox"
              aria-expanded={v.yOpen}
            >
              {T(v.yearLabel)}{' '}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>{' '}
            {v.yOpen ? (
              <>
                <div className="prymenu" role="listbox">
                  {L(v.years).map((y_0, i_0) => (
                    <React.Fragment key={i_0}>
                      <button
                        type="button"
                        role="option"
                        className={`pryo ${T(y_0?.cls)}`}
                        aria-selected={y_0?.on}
                        onClick={y_0?.pick}
                      >
                        {T(y_0?.label)}
                        <small>{T(y_0?.count)}</small>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="prgrid">
          {L(v.releases).map((r_1, i_1) => (
            <React.Fragment key={i_1}>
              <a className="prcard" href="/blog-post/" style={S(r_1?.delay)}>
                <div className="prcimg" style={S(r_1?.bg)}>
                  <span className="prctag">{T(r_1?.tag)}</span>{' '}
                  <span className="prcicon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={r_1?.icon} />
                    </svg>
                  </span>
                </div>
                <div className="prcbody">
                  <b>{T(r_1?.title)}</b>
                  <p>{T(r_1?.ex)}</p>
                  <span className="prcfoot">
                    <small>{T(r_1?.date)}</small>
                    <span className="prmore">
                      {'Read More '}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </span>
                </div>
              </a>
            </React.Fragment>
          ))}
        </div>
        <div className="prpag">
          <button type="button" className="prpn" onClick={v.prevPage}>
            {'← Previous'}
          </button>
          <div className="prpages">
            {L(v.pages).map((p_2, i_2) => (
              <React.Fragment key={i_2}>
                <button
                  type="button"
                  className={`prpg ${T(p_2?.cls)}`}
                  aria-current={p_2?.on}
                  onClick={p_2?.pick}
                >
                  {T(p_2?.n)}
                </button>
              </React.Fragment>
            ))}
          </div>
          <button type="button" className="prpn" onClick={v.nextPage}>
            {'Next →'}
          </button>
        </div>
        <p style={{ margin: '14px 0 0', textAlign: 'center', fontSize: '12px', color: '#717680' }}>
          {'Headlines are based on company milestones — sample releases for layout.'}
        </p>
      </section>
      <section id="kit" style={{ background: '#fafafa', padding: '88px 0' }}>
        <div className="wrap prkit rv">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.04em', color: '#050774' }}>
              {'Media kit'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '34px',
                lineHeight: '42px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#181d27',
              }}
            >
              {'Everything you need to write about us.'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#535862' }}>
              {'Logos, product icons, brand colors and company facts — plus a direct line to our team.'}
            </p>
            <a className="prcontact" href="mailto:support@jobseeker.company">
              <span className="prci">
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
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <b>{'Press inquiries'}</b>
                <small>{'support@jobseeker.company'}</small>
              </span>
            </a>
          </div>
          <div className="prassets">
            <div className="pra logo">
              <span className="prav">
                <img src="/images/1976305d6893a6ac268c4f73d828678d.png" alt="Jobseeker Company logo" />
              </span>{' '}
              <span className="pral">
                <b>{'Company logo'}</b>
                <small>{'PNG · SVG'}</small>
              </span>
              <span className="pradl" aria-hidden="true">
                {'↓'}
              </span>
            </div>
            <div className="pra">
              <span className="prav icons">
                <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
              </span>{' '}
              <span className="pral">
                <b>{'Product icons'}</b>
                <small>{'7 products'}</small>
              </span>
              <span className="pradl" aria-hidden="true">
                {'↓'}
              </span>
            </div>
            <div className="pra">
              <span className="prav sw">
                <i style={{ background: '#050774' }} />
                <i style={{ background: '#e4007e' }} />
                <i style={{ background: '#3366ff' }} />
                <i style={{ background: '#009800' }} />
              </span>{' '}
              <span className="pral">
                <b>{'Brand colors'}</b>
                <small>{'Navy · Magenta · Blue · Green'}</small>
              </span>
              <span className="pradl" aria-hidden="true">
                {'↓'}
              </span>
            </div>
            <div className="pra">
              <span className="prav facts">
                <b>{'2023'}</b>
                <small>{'Founded in Bali'}</small>
              </span>{' '}
              <span className="pral">
                <b>{'Fact sheet'}</b>
                <small>{'3.9M+ candidates · 40K+ employers'}</small>
              </span>
              <span className="pradl" aria-hidden="true">
                {'↓'}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.04em', color: '#050774' }}>
            {'Courses'}
          </span>
          <h2
            className="h2"
            style={{
              margin: '0',
              fontSize: '34px',
              lineHeight: '42px',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: '#181d27',
            }}
          >
            {'Popular courses this week'}
          </h2>
        </div>
        <div className="prcourses rv-s">
          {L(v.courses).map((c_3, i_3) => (
            <React.Fragment key={i_3}>
              <div className="prcourse">
                <div className="prcoimg" style={S(c_3?.thumb)}>
                  <span className="prdisc">
                    {'-'}
                    {T(c_3?.off)}
                    {'%'}
                  </span>
                </div>
                <div className="prcob">
                  <span className="prcometa">
                    <b>{T(c_3?.cat)}</b>
                    <span className="prlvl">
                      {T(c_3?.lessons)}
                      {' lessons'}
                    </span>
                  </span>{' '}
                  <b className="prcot">{T(c_3?.title)}</b>{' '}
                  <span className="prcop">
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                      <b>{T(c_3?.price)}</b>
                      <s>{T(c_3?.was)}</s>
                    </span>
                    <span className="prrate">
                      {'★ '}
                      {T(c_3?.rating)}
                    </span>
                  </span>{' '}
                  <a className="prenroll" href="/academy/">
                    {'Enroll now '}
                    <span aria-hidden="true">{'→'}</span>
                  </a>
                </div>
              </div>
            </React.Fragment>
          ))}{' '}
          <a className="prcourse more" href="/academy/">
            <span className="prmorei">
              <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
            </span>{' '}
            <b>{'Explore all courses'}</b>{' '}
            <small>
              {
                'Digital skills, sales, operations, languages and industry certifications on Jobseeker Academy.'
              }
            </small>{' '}
            <span className="prenroll ghost">
              {'Browse Academy '}
              <span aria-hidden="true">{'→'}</span>
            </span>
          </a>
        </div>
      </section>
      <section style={{ background: '#fafafa', padding: '96px 0' }}>
        <div className="wrap">
          <div
            className="rv"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span
                style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.04em', color: '#050774' }}
              >
                {'Our blog'}
              </span>
              <h2
                className="h2"
                style={{
                  margin: '0',
                  fontSize: '34px',
                  lineHeight: '42px',
                  fontWeight: '700',
                  letterSpacing: '-0.025em',
                  color: '#181d27',
                }}
              >
                {'Latest blog posts'}
              </h2>
              <p style={{ margin: '0', fontSize: '16px', color: '#535862' }}>
                {'Tools and strategies modern teams need to help their companies grow.'}
              </p>
            </div>
            <a className="btn" href="/blog/" style={{ background: '#050774', color: '#ffffff' }}>
              {'View all posts '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>
          </div>
          <div className="prblog rv-s">
            {L(v.posts).map((p_4, i_4) => (
              <React.Fragment key={i_4}>
                <a className="prbp" href="/blog-post/">
                  <div className="prbimg">
                    <img src={A(p_4?.img)} alt="" />
                  </div>
                  <span className="prbcat" style={S(p_4?.catStyle)}>
                    {T(p_4?.cat)}
                  </span>{' '}
                  <span className="prbt">
                    <b>{T(p_4?.title)}</b>
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
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </span>{' '}
                  <small>{T(p_4?.ex)}</small>{' '}
                  <span className="prbmeta">
                    {'Jobseeker Team · '}
                    {T(p_4?.date)}
                  </span>
                </a>
              </React.Fragment>
            ))}
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
