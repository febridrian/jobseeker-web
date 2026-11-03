// Resources — Events
// Generated from the design artboard Events.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.TODAY = new Date(2026, 10, 2);
    this.state = {
      menuOpen: false,
      lang: 'EN',
      when: 'up',
      type: 'All',
      place: 'All',
      day: '',
      ym: [2026, 10],
      reg: {},
      now: Date.now(),
    };
    this.TYPES = {
      Webinar: ['#eaf1ff', '#0031b3'],
      'Job fair': ['#ffe3f2', '#b8006a'],
      Workshop: ['#e6f7e6', '#006600'],
      Meetup: ['#fef0c7', '#b54708'],
    };
    const E = (id, date, time, type, place, title, d, aud, seats, taken) => ({
      id,
      date,
      time,
      type,
      place,
      title,
      d,
      aud,
      seats,
      taken,
    });
    this.EVENTS = [
      E(
        1,
        '2026-11-12',
        '14:00 WIB',
        'Webinar',
        'Online',
        'Hiring frontline staff at scale',
        'How retail and F&B teams screen hundreds of applicants a week — with a live HRMS walkthrough.',
        'HR & recruiters',
        300,
        214,
      ),
      E(
        2,
        '2026-11-21',
        '09:00 WITA',
        'Job fair',
        'Bali',
        'Bali Hospitality Job Fair',
        'Meet hotels, restaurants and retailers hiring now. Bring your CV — or your Jobseeker App profile.',
        'jobseekers',
        800,
        512,
      ),
      E(
        3,
        '2026-11-27',
        '10:00 WIB',
        'Workshop',
        'Jakarta',
        'Video resume clinic',
        'Record a 30-second intro with coaching from our team, then apply on the spot.',
        'jobseekers',
        60,
        51,
      ),
      E(
        4,
        '2026-12-04',
        '18:30 WIB',
        'Meetup',
        'Jakarta',
        'HR Leaders Meetup: Q1 workforce planning',
        'An evening of talks and networking on planning headcount for Ramadan and Lebaran.',
        'HR leaders',
        80,
        38,
      ),
      E(
        5,
        '2026-12-10',
        '15:00 WIB',
        'Webinar',
        'Online',
        'THR & payroll checklist for 2027',
        'Eligibility, pro-rata calculation and timing — with templates you can reuse.',
        'HR & finance',
        500,
        167,
      ),
      E(
        6,
        '2026-12-15',
        '09:00 SGT',
        'Meetup',
        'Singapore',
        'Southeast Asia talent roundtable',
        'A small-group discussion on hiring across Indonesia and Singapore.',
        'business leaders',
        40,
        22,
      ),
      E(
        7,
        '2026-10-22',
        '14:00 WIB',
        'Webinar',
        'Online',
        'ATS or HRIS: where to start',
        'A practical look at choosing your first HRMS module.',
        'HR teams',
        300,
        300,
      ),
      E(
        8,
        '2026-10-10',
        '09:00 WIB',
        'Job fair',
        'Jakarta',
        'Jakarta Retail Job Fair',
        'Retail and F&B employers met thousands of jobseekers in one day.',
        'jobseekers',
        1000,
        1000,
      ),
      E(
        9,
        '2026-09-18',
        '13:00 WITA',
        'Workshop',
        'Bali',
        'Customer service bootcamp',
        'A hands-on Jobseeker Academy session for frontline roles.',
        'jobseekers',
        50,
        50,
      ),
    ];
    this.MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.MONL = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }
  componentDidMount() {
    this.tick = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.tick);
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
  }
  pd(s) {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
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
    const s = this.state,
      T = this.TODAY;
    const isUp = (e) => this.pd(e.date) >= T;
    const evs = this.EVENTS.map((e) => ({ ...e, taken: e.taken + (s.reg[e.id] ? 1 : 0) }));
    const pool = evs.filter((e) => (s.when === 'up' ? isUp(e) : !isUp(e)));
    const f1 = pool.filter((e) => (s.place === 'All' || e.place === s.place) && (!s.day || e.date === s.day));
    const list = f1
      .filter((e) => s.type === 'All' || e.type === s.type)
      .sort((a, b) => (s.when === 'up' ? (a.date < b.date ? -1 : 1) : a.date > b.date ? -1 : 1));
    const reg = (id) => () => this.setState({ reg: { ...s.reg, [id]: !s.reg[id] } });
    const card = (e, i) => {
      const dt = this.pd(e.date),
        c = this.TYPES[e.type],
        left = Math.max(0, e.seats - e.taken),
        r = !!s.reg[e.id];
      return {
        ...e,
        day: dt.getDate(),
        mon: this.MON[dt.getMonth()],
        dow: this.DOW[dt.getDay()],
        upcoming: isUp(e),
        past: !isUp(e),
        pastCls: isUp(e) ? '' : 'past',
        dateStyle: { background: c[0], color: c[1] },
        typeStyle: { background: c[0], color: c[1] },
        fill: { width: Math.min(100, (e.taken / e.seats) * 100) + '%' },
        seatsLabel: left === 0 ? 'Fully booked — join the waitlist' : left + ' of ' + e.seats + ' seats left',
        isReg: r,
        notReg: !r,
        regCls: r ? 'on' : '',
        reg: reg(e.id),
        delay: { animationDelay: i * 0.05 + 's' },
      };
    };
    const upAll = evs.filter(isUp).sort((a, b) => (a.date < b.date ? -1 : 1));
    const nx = card(upAll[0], 0);
    const target = new Date(this.pd(upAll[0].date).getTime() + 14 * 3600e3).getTime();
    const base = new Date(2026, 10, 2, 9, 0, 0).getTime();
    if (!this.t0) this.t0 = s.now;
    let diff = Math.max(0, target - (base + (s.now - this.t0)));
    const dd = Math.floor(diff / 864e5);
    diff -= dd * 864e5;
    const hh = Math.floor(diff / 36e5);
    diff -= hh * 36e5;
    const mm = Math.floor(diff / 6e4);
    diff -= mm * 6e4;
    const ss = Math.floor(diff / 1e3);
    const p2 = (n) => String(n).padStart(2, '0');
    // calendar
    const [Y, M] = s.ym;
    const first = new Date(Y, M, 1),
      start = (first.getDay() + 6) % 7,
      dim = new Date(Y, M + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < start; i++)
      cells.push({ n: '', cls: 'out', has: false, on: false, aria: '', pick: () => {} });
    const ev = new Set(pool.map((e) => e.date));
    for (let d = 1; d <= dim; d++) {
      const key = Y + '-' + p2(M + 1) + '-' + p2(d);
      const has = ev.has(key),
        today = Y === 2026 && M === 10 && d === 2,
        on = s.day === key;
      cells.push({
        n: d,
        has,
        on,
        aria: has ? 'Events on ' + d + ' ' + this.MONL[M] : String(d),
        cls: [has ? 'has' : '', today ? 'today' : '', on ? 'on' : ''].join(' '),
        pick: () => {
          if (has) this.setState({ day: on ? '' : key });
        },
      });
    }
    const shift = (k) => {
      let y = Y,
        m = M + k;
      if (m < 0) {
        m = 11;
        y--;
      }
      if (m > 11) {
        m = 0;
        y++;
      }
      this.setState({ ym: [y, m], day: '' });
    };
    const dl = s.day ? this.pd(s.day) : null;
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      next: nx,
      cd: [
        [dd, 'Days'],
        [p2(hh), 'Hours'],
        [p2(mm), 'Mins'],
        [p2(ss), 'Secs'],
      ].map(([v, l]) => ({ v, l })),
      calTitle: this.MONL[M] + ' ' + Y,
      prevM: () => shift(-1),
      nextM: () => shift(1),
      days: cells,
      hasDay: !!s.day,
      dayLabel: dl ? dl.getDate() + ' ' + this.MON[dl.getMonth()] : '',
      clearDay: () => this.setState({ day: '' }),
      types: ['All', 'Webinar', 'Job fair', 'Workshop', 'Meetup'].map((t) => ({
        t,
        n: t === 'All' ? f1.length : f1.filter((e) => e.type === t).length,
        on: s.type === t,
        cls: s.type === t ? 'on' : '',
        dot: { background: t === 'All' ? '#050774' : this.TYPES[t][1] },
        pick: () => this.setState({ type: t }),
      })),
      places: ['All', 'Online', 'Jakarta', 'Bali', 'Singapore'].map((t) => ({
        t: t === 'All' ? 'All locations' : t,
        n: t === 'All' ? pool.length : pool.filter((e) => e.place === t).length,
        on: s.place === t,
        cls: s.place === t ? 'on' : '',
        pick: () => this.setState({ place: t }),
      })),
      isUp: s.when === 'up',
      isPast: s.when === 'past',
      upCls: s.when === 'up' ? 'on' : '',
      pastCls: s.when === 'past' ? 'on' : '',
      upCount: evs.filter(isUp).length,
      pastCount: evs.filter((e) => !isUp(e)).length,
      showUp: () => this.setState({ when: 'up', day: '', ym: [2026, 10] }),
      showPast: () => this.setState({ when: 'past', day: '', ym: [2026, 9] }),
      countLabel: list.length + (list.length === 1 ? ' event' : ' events'),
      list: list.map(card),
      none: list.length === 0,
      resetAll: () => this.setState({ type: 'All', place: 'All', day: '' }),
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
      <section id="top" className="evhero">
        <div className="evdots" aria-hidden="true" />
        <div
          className="wrap evhwrap"
          style={{ position: 'relative', paddingTop: '64px', paddingBottom: '80px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <nav className="evcrumb rise d1" aria-label="Breadcrumb">
              <a href="/v1/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/resources/">{'Resources'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Events'}</b>
            </nav>
            <span className="rise d1 evpill">{'Events'}</span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '56px',
                lineHeight: '62px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#050774',
              }}
            >
              {'Meet the Jobseeker '}
              <span className="evhl">{'community.'}</span>
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
                'Webinars, job fairs, workshops and HR meetups — online and across Indonesia. Learn, hire and grow with us.'
              }
            </p>
            <div className="rise d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn" href="#events" style={{ background: '#050774', color: '#ffffff' }}>
                {'Browse events '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>{' '}
              <a className="btn btn-ghost" href="/partner-program/">
                {'Host an event with us'}
              </a>
            </div>
          </div>
          <div className="evnext rise d4">
            <span className="evnl">
              <i />
              {'Next event'}
            </span>
            <div className="evnm">
              <span className="evdate big">
                <b>{T(v.next?.day)}</b>
                <small>{T(v.next?.mon)}</small>
              </span>{' '}
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <b className="evnt">{T(v.next?.title)}</b>
                <small className="evnmeta">
                  {T(v.next?.type)}
                  {' · '}
                  {T(v.next?.place)}
                  {' · '}
                  {T(v.next?.time)}
                </small>
              </span>
            </div>
            <div className="evcd" aria-label="Countdown">
              {L(v.cd).map((c_0, i_0) => (
                <React.Fragment key={i_0}>
                  <span className="evcdb">
                    <b>{T(c_0?.v)}</b>
                    <small>{T(c_0?.l)}</small>
                  </span>
                </React.Fragment>
              ))}
            </div>
            <button type="button" className={`evreg big ${T(v.next?.regCls)}`} onClick={v.next?.reg}>
              {v.next?.notReg ? <>{'Save my seat →'}</> : null}{' '}
              {v.next?.isReg ? <>{"✓ You're registered"}</> : null}
            </button>{' '}
            <span className="evseats">{T(v.next?.seatsLabel)}</span>
          </div>
        </div>
      </section>
      <section id="events" className="wrap" style={{ paddingTop: '32px', paddingBottom: '96px' }}>
        <div className="evlayout">
          <aside className="evside">
            <div className="evcal">
              <div className="evcalh">
                <button type="button" className="evarrow" onClick={v.prevM} aria-label="Previous month">
                  {'‹'}
                </button>
                <b>{T(v.calTitle)}</b>
                <button type="button" className="evarrow" onClick={v.nextM} aria-label="Next month">
                  {'›'}
                </button>
              </div>
              <div className="evdow">
                <span>{'M'}</span>
                <span>{'T'}</span>
                <span>{'W'}</span>
                <span>{'T'}</span>
                <span>{'F'}</span>
                <span>{'S'}</span>
                <span>{'S'}</span>
              </div>
              <div className="evdays">
                {L(v.days).map((d_1, i_1) => (
                  <React.Fragment key={i_1}>
                    <button
                      type="button"
                      className={`evday ${T(d_1?.cls)}`}
                      onClick={d_1?.pick}
                      aria-pressed={d_1?.on}
                      aria-label={d_1?.aria}
                    >
                      {T(d_1?.n)}
                      {d_1?.has ? (
                        <>
                          <i />
                        </>
                      ) : null}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              {v.hasDay ? (
                <>
                  <button type="button" className="evclearday" onClick={v.clearDay}>
                    {'Showing '}
                    {T(v.dayLabel)}
                    {' · Clear ×'}
                  </button>
                </>
              ) : null}
            </div>
            <div className="evfg">
              <span className="evfh">{'Type'}</span>{' '}
              {L(v.types).map((t_2, i_2) => (
                <React.Fragment key={i_2}>
                  <button
                    type="button"
                    className={`evf ${T(t_2?.cls)}`}
                    onClick={t_2?.pick}
                    aria-pressed={t_2?.on}
                  >
                    <i style={S(t_2?.dot)} />
                    {T(t_2?.t)}
                    <small>{T(t_2?.n)}</small>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="evfg">
              <span className="evfh">{'Location'}</span>{' '}
              {L(v.places).map((p_3, i_3) => (
                <React.Fragment key={i_3}>
                  <button
                    type="button"
                    className={`evf ${T(p_3?.cls)}`}
                    onClick={p_3?.pick}
                    aria-pressed={p_3?.on}
                  >
                    {T(p_3?.t)}
                    <small>{T(p_3?.n)}</small>
                  </button>
                </React.Fragment>
              ))}
            </div>
          </aside>
          <div className="evmain">
            <div className="evtop">
              <div className="evseg" role="tablist" aria-label="When">
                <button
                  type="button"
                  role="tab"
                  className={v.upCls}
                  aria-selected={v.isUp}
                  onClick={v.showUp}
                >
                  {'Upcoming '}
                  <small>{T(v.upCount)}</small>
                </button>{' '}
                <button
                  type="button"
                  role="tab"
                  className={v.pastCls}
                  aria-selected={v.isPast}
                  onClick={v.showPast}
                >
                  {'Past '}
                  <small>{T(v.pastCount)}</small>
                </button>
              </div>
              <span className="evcount">{T(v.countLabel)}</span>
            </div>
            <div className="evlist">
              {L(v.list).map((e_4, i_4) => (
                <React.Fragment key={i_4}>
                  <article className={`evcard ${T(e_4?.pastCls)}`} style={S(e_4?.delay)}>
                    <span className="evdate" style={S(e_4?.dateStyle)}>
                      <b>{T(e_4?.day)}</b>
                      <small>{T(e_4?.mon)}</small>
                      <em>{T(e_4?.dow)}</em>
                    </span>
                    <div className="evbody">
                      <span className="evtags">
                        <b style={S(e_4?.typeStyle)}>{T(e_4?.type)}</b>
                        <span>{T(e_4?.place)}</span>
                        <span>
                          {'· '}
                          {T(e_4?.time)}
                        </span>
                      </span>
                      <h3>{T(e_4?.title)}</h3>
                      <p>{T(e_4?.d)}</p>
                      <span className="evfor">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="9" cy="8" r="3.5" />
                          <path d="M2 20a7 7 0 0 1 14 0" />
                        </svg>
                        {'For '}
                        {T(e_4?.aud)}
                      </span>
                    </div>
                    <div className="evact">
                      {e_4?.upcoming ? (
                        <>
                          <span className="evbar">
                            <i style={S(e_4?.fill)} />
                          </span>{' '}
                          <small className="evleft">{T(e_4?.seatsLabel)}</small>{' '}
                          <button type="button" className={`evreg ${T(e_4?.regCls)}`} onClick={e_4?.reg}>
                            {e_4?.notReg ? <>{'Register'}</> : null}{' '}
                            {e_4?.isReg ? <>{'✓ Registered'}</> : null}
                          </button>
                        </>
                      ) : null}{' '}
                      {e_4?.past ? (
                        <>
                          <a className="evrec" href="#">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            {'Watch recap'}
                          </a>
                        </>
                      ) : null}
                    </div>
                  </article>
                </React.Fragment>
              ))}{' '}
              {v.none ? (
                <>
                  <div className="evnone">
                    <b>{'No events match your filters.'}</b>
                    <button type="button" onClick={v.resetAll}>
                      {'Reset filters'}
                    </button>
                  </div>
                </>
              ) : null}
            </div>
            <p style={{ margin: '18px 0 0', fontSize: '12px', color: '#717680' }}>
              {'Sample events for layout — replace with the real event calendar.'}
            </p>
          </div>
        </div>
      </section>
      <section style={{ background: '#fafafa', padding: '96px 0' }}>
        <div className="wrap evhost rv">
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
              {'Partner with us'}
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
              {'Host a job fair or HR event with Jobseeker.'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#535862' }}>
              {
                'Campuses, communities and event organizers can co-host job fairs, workshops and HR meetups with us through the Partner Program.'
              }
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn" href="/partner-program/" style={{ background: '#050774', color: '#ffffff' }}>
                {'Become an event partner '}
                <span className="arr" aria-hidden="true">
                  {'→'}
                </span>
              </a>{' '}
              <a className="btn btn-ghost" href="https://wa.me/6281318817887">
                {'WhatsApp us'}
              </a>
            </div>
          </div>
          <div className="evstage" aria-hidden="true">
            <span className="evspot" />
            <div className="evscreen">
              <img src="/images/1976305d6893a6ac268c4f73d828678d.png" alt="" />
              <b>{'Job Fair 2026'}</b>
              <small>{'Jakarta · Bali · Online'}</small>
            </div>
            <div className="evcrowd">
              <i style={{ background: '#ffe3f2' }} />
              <i style={{ background: '#eaf1ff' }} />
              <i style={{ background: '#e6f7e6' }} />
              <i style={{ background: '#fef0c7' }} />
              <i style={{ background: '#f4ebff' }} />
              <i style={{ background: '#ffe3f2' }} />
              <i style={{ background: '#eaf1ff' }} />
            </div>
            <span className="evconf c1" />
            <span className="evconf c2" />
            <span className="evconf c3" />
            <span className="evconf c4" />
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
