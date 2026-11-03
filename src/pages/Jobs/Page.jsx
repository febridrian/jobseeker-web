// For Jobseekers — Latest jobs
// Generated from the design artboard Jobs.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lang: 'EN',
      q: '',
      city: 'All',
      field: 'All',
      type: 'All',
      km: 20,
      sel: 1,
      saved: [],
    };
    const B = (id) => '/_blob/' + id;
    const J = (id, role, co, logo, city, km, field, type, pay, payShort, ago, isNew, bg, d, reqs) => ({
      id,
      role,
      co,
      logo: B(logo),
      city,
      km,
      field,
      type,
      pay,
      payShort,
      ago,
      isNew,
      bg,
      d,
      reqs,
    });
    this.JOBS = [
      J(
        1,
        'Customer Service',
        'FIT HUB',
        '1f30884c024ee18f1be73c2015c5653d',
        'Jakarta',
        15,
        'Retail & Service',
        'Full-time',
        'Rp 4.000.000 – Rp 5.500.000 / month',
        'Rp 4–5.5 jt',
        '5 min',
        true,
        '#ffe3f2',
        'Welcome members at the front desk, handle bookings and help keep the gym running smoothly.',
        ['Friendly, clear communication', 'Comfortable with shifts', 'SMA/SMK or equivalent'],
      ),
      J(
        2,
        'Staf Tenaga Teknis',
        'RS Mitra Keluarga',
        'acc184efccfeb8469aae7d4baabdd58d',
        'Jakarta',
        5,
        'Healthcare',
        'Full-time',
        'Competitive',
        'Competitive',
        '18 min',
        true,
        '#eaf1ff',
        'Support daily technical operations at the hospital, from equipment checks to facility maintenance.',
        ['Technical/vocational background', 'Careful and safety-minded', 'Able to work in a team'],
      ),
      J(
        3,
        'Housekeeping',
        'FIT HUB',
        '1f30884c024ee18f1be73c2015c5653d',
        'Jakarta',
        5,
        'Operations',
        'Shift',
        'Rp 5.729.876 / month',
        'Rp 5.7 jt',
        '42 min',
        false,
        '#e6f7e6',
        'Keep the club clean, safe and welcoming for members throughout your shift.',
        ['Attention to detail', 'Able to work morning or evening shifts', 'Experience is a plus'],
      ),
      J(
        4,
        'Barista',
        'Varion Coffee',
        'c0c6c0666d1f3815067bac98ccc101e9',
        'Tangerang',
        3,
        'F&B',
        'Shift',
        'Rp 4.200.000 / month',
        'Rp 4.2 jt',
        '1 hr',
        false,
        '#fef0c7',
        'Prepare coffee and drinks, serve customers and keep the bar tidy.',
        ['Passion for coffee', 'Friendly with customers', 'Training provided'],
      ),
      J(
        5,
        'Store Crew',
        'Super Indo',
        '6a46d25389b849ee192dfda89ea93deb',
        'Bekasi',
        2,
        'Retail & Service',
        'Full-time',
        'Rp 4.800.000 / month',
        'Rp 4.8 jt',
        '2 hr',
        false,
        '#fee4e2',
        'Stock shelves, help shoppers and work the cashier during busy hours.',
        ['Physically fit and energetic', 'Customer-first attitude', 'Willing to work weekends'],
      ),
      J(
        6,
        'Warehouse Staff',
        'Alfamart',
        'aac027953cffa08e93c5427d123a6e9a',
        'Bekasi',
        8,
        'Operations',
        'Full-time',
        'Rp 5.000.000 / month',
        'Rp 5 jt',
        '3 hr',
        false,
        '#eaf1ff',
        'Receive, sort and prepare goods for delivery to stores.',
        ['Able to lift and move stock', 'Careful with counts', 'Forklift skills a plus'],
      ),
      J(
        7,
        'Cashier',
        'Ranch Market',
        'c73db4a2e84f0be7b09ba11790e93179',
        'Jakarta',
        9,
        'Retail & Service',
        'Part-time',
        'Rp 45.000 / hour',
        'Rp 45k/hr',
        '4 hr',
        false,
        '#e6f7e6',
        'Handle payments accurately and give every shopper a great checkout experience.',
        ['Good with numbers', 'Polite and patient', 'Available weekends'],
      ),
      J(
        8,
        'Cook Helper',
        'Dan+Dan',
        '68ec4ade1c0b76df480e1793602af273',
        'Bali',
        4,
        'F&B',
        'Shift',
        'Rp 3.800.000 / month',
        'Rp 3.8 jt',
        '5 hr',
        false,
        '#fef0c7',
        'Prep ingredients and support the kitchen team during service.',
        ['Food hygiene awareness', 'Fast and organized', 'No experience needed'],
      ),
      J(
        9,
        'Front Office Staff',
        'Paramount Land',
        '4cc1c6df3d161063fe49f92bf4ec2df7',
        'Tangerang',
        12,
        'Office & Admin',
        'Full-time',
        'Rp 5.500.000 / month',
        'Rp 5.5 jt',
        '6 hr',
        false,
        '#f4ebff',
        'Greet visitors, manage calls and keep front office records up to date.',
        ['Neat and professional', 'Basic computer skills', 'Good communication'],
      ),
      J(
        10,
        'Production Operator',
        'Rohto',
        '4436be89874b352373d55d3a5b02faa2',
        'Bekasi',
        18,
        'Manufacturing',
        'Shift',
        'Rp 5.300.000 / month',
        'Rp 5.3 jt',
        '8 hr',
        false,
        '#eaf1ff',
        'Run production line machines and follow quality and safety procedures.',
        ['SMK or equivalent', 'Willing to work rotating shifts', 'Safety-minded'],
      ),
      J(
        11,
        'Driver',
        'Shelter',
        '2edbaf5ad9687f5009dd303fc208c272',
        'Bali',
        7,
        'Drivers & Couriers',
        'Full-time',
        'Rp 4.500.000 / month',
        'Rp 4.5 jt',
        '1 day',
        false,
        '#e6f7e6',
        'Drive company vehicles safely and on schedule around Bali.',
        ['Valid SIM A', 'Knows Bali roads', 'Punctual and honest'],
      ),
    ];
    this.FIELDS = [
      'All',
      'Retail & Service',
      'F&B',
      'Operations',
      'Healthcare',
      'Manufacturing',
      'Office & Admin',
      'Drivers & Couriers',
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
  componentWillUnmount() {
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
  }
  renderVals() {
    const s = this.state;
    const q = s.q.trim().toLowerCase();
    const base = this.JOBS.filter(
      (j) =>
        (s.city === 'All' || j.city === s.city) &&
        j.km <= s.km &&
        (s.type === 'All' || j.type === s.type) &&
        (!q || (j.role + ' ' + j.co).toLowerCase().includes(q)),
    );
    const list = base.filter((j) => s.field === 'All' || j.field === s.field);
    const sel = list.find((j) => j.id === s.sel) || list[0];
    const saved = sel ? s.saved.includes(sel.id) : false;
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      noop: (e) => {
        if (e && e.preventDefault) e.preventDefault();
      },
      q: s.q,
      onQ: (e) => this.setState({ q: e.target.value }),
      cities: ['All', 'Jakarta', 'Bekasi', 'Tangerang', 'Bali'].map((c) => ({
        t: c === 'All' ? 'All cities' : c,
        on: s.city === c,
        cls: s.city === c ? 'on' : '',
        pick: () => this.setState({ city: c }),
      })),
      ticker: this.JOBS.concat(this.JOBS).map((j) => ({ role: j.role, co: j.co, city: j.city })),
      fields: this.FIELDS.map((f) => ({
        t: f === 'All' ? 'All fields' : f,
        n: f === 'All' ? base.length : base.filter((j) => j.field === f).length,
        on: s.field === f,
        cls: s.field === f ? 'on' : '',
        pick: () => this.setState({ field: f }),
      })).filter((f) => f.t === 'All fields' || f.n > 0),
      types: ['All', 'Full-time', 'Part-time', 'Shift'].map((t) => ({
        t: t === 'All' ? 'All types' : t,
        on: s.type === t,
        cls: s.type === t ? 'on' : '',
        pick: () => this.setState({ type: t }),
      })),
      km: s.km,
      onKm: (e) => this.setState({ km: Number(e.target.value) }),
      countLabel: list.length + (list.length === 1 ? ' job' : ' jobs') + ' within ' + s.km + ' km',
      jobs: list.map((j, i) => ({
        ...j,
        on: sel && j.id === sel.id,
        cls: sel && j.id === sel.id ? 'on' : '',
        delay: { animationDelay: Math.min(i, 8) * 0.04 + 's' },
        pick: () => this.setState({ sel: j.id }),
      })),
      none: list.length === 0,
      resetAll: () => this.setState({ q: '', city: 'All', field: 'All', type: 'All', km: 20 }),
      hasSel: !!sel,
      sel: sel
        ? {
            ...sel,
            key: { animationName: 'jbin' + (sel.id % 2 ? '' : '') },
            cover: { background: 'linear-gradient(135deg,' + sel.bg + ',#ffffff)' },
            reqs: sel.reqs.map((t) => ({ t })),
            saved,
            savedCls: saved ? 'on' : '',
            toggleSave: () =>
              this.setState({ saved: saved ? s.saved.filter((x) => x !== sel.id) : s.saved.concat(sel.id) }),
          }
        : { reqs: [], key: {}, cover: {} },
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
      <section id="top" className="jbhero">
        <div className="jbdots" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative', paddingTop: '56px', paddingBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '16px',
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            <nav className="jbcrumb rise d1" aria-label="Breadcrumb">
              <a href="/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/hub/">{'For Jobseekers'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Latest jobs'}</b>
            </nav>
            <span className="rise d1 jbpill">
              <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
              {'Latest job preview'}
            </span>
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
              {'Fresh jobs near you, '}
              <span className="jbhl">{'verified.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '560px',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#535862',
              }}
            >
              {
                'A preview of the latest openings on Jobseeker App. Apply with a 30-second video resume in the app.'
              }
            </p>
          </div>
          <form className="jbsearch rise d4" onSubmit={v.noop} role="search">
            <label className="jbsf">
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
              </svg>
              <input
                type="search"
                placeholder="Job title or company"
                value={v.q}
                onChange={v.onQ}
                aria-label="Job title or company"
              />
            </label>{' '}
            <span className="jbdiv" aria-hidden="true" />
            <div className="jbcities" role="group" aria-label="City">
              {L(v.cities).map((c_0, i_0) => (
                <React.Fragment key={i_0}>
                  <button
                    type="button"
                    className={`jbcity ${T(c_0?.cls)}`}
                    onClick={c_0?.pick}
                    aria-pressed={c_0?.on}
                  >
                    {T(c_0?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </form>
          <div className="jbticker rise d5" aria-hidden="true">
            <span className="jbtl">
              <i />
              {'Just posted'}
            </span>
            <div className="jbtv">
              <div className="jbtt">
                {L(v.ticker).map((t_1, i_1) => (
                  <React.Fragment key={i_1}>
                    <span>
                      <b>{T(t_1?.role)}</b>
                      {' at '}
                      {T(t_1?.co)}
                      {' · '}
                      {T(t_1?.city)}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="board" className="wrap" style={{ paddingTop: '24px', paddingBottom: '96px' }}>
        <div className="jbfilters">
          <div className="jbfields">
            {L(v.fields).map((f_2, i_2) => (
              <React.Fragment key={i_2}>
                <button
                  type="button"
                  className={`jbfield ${T(f_2?.cls)}`}
                  onClick={f_2?.pick}
                  aria-pressed={f_2?.on}
                >
                  {T(f_2?.t)}
                  <small>{T(f_2?.n)}</small>
                </button>
              </React.Fragment>
            ))}
          </div>
          <div className="jbmore">
            <div className="jbtypes" role="group" aria-label="Job type">
              {L(v.types).map((t_3, i_3) => (
                <React.Fragment key={i_3}>
                  <button type="button" className={t_3?.cls} onClick={t_3?.pick} aria-pressed={t_3?.on}>
                    {T(t_3?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <label className="jbkm">
              <span>
                {'Within '}
                <b>
                  {T(v.km)}
                  {' km'}
                </b>
              </span>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={v.km}
                onChange={v.onKm}
                aria-label="Maximum distance in km"
              />
            </label>
          </div>
        </div>
        <div className="jbboard">
          <div className="jblist">
            <span className="jbcount">{T(v.countLabel)}</span>{' '}
            {L(v.jobs).map((j_4, i_4) => (
              <React.Fragment key={i_4}>
                <button
                  type="button"
                  className={`jbcard ${T(j_4?.cls)}`}
                  style={S(j_4?.delay)}
                  onClick={j_4?.pick}
                  aria-pressed={j_4?.on}
                >
                  <img className="jblogo" src={A(j_4?.logo)} alt="" />{' '}
                  <span className="jbci">
                    <span className="jbcr">
                      <b>{T(j_4?.role)}</b>
                      {j_4?.isNew ? (
                        <>
                          <em className="jbnew">{'New'}</em>
                        </>
                      ) : null}
                    </span>{' '}
                    <small>
                      {T(j_4?.co)}{' '}
                      <span className="jbver" aria-label="Verified company">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#17b26a" aria-hidden="true">
                          <path d="M12 2l2.4 2.2 3.2-.4.9 3.1 2.8 1.6-1 3 1 3-2.8 1.6-.9 3.1-3.2-.4L12 22l-2.4-2.2-3.2.4-.9-3.1L2.7 15.5l1-3-1-3 2.8-1.6.9-3.1 3.2.4z" />
                          <path
                            d="M8 12l3 3 5-5"
                            stroke="#ffffff"
                            strokeWidth="2.4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </small>{' '}
                    <span className="jbctags">
                      <span className="km">
                        {'📍 '}
                        {T(j_4?.km)}
                        {' km'}
                      </span>
                      <span>{T(j_4?.type)}</span>
                      <span>{T(j_4?.payShort)}</span>
                    </span>
                  </span>{' '}
                  <span className="jbago">{T(j_4?.ago)}</span>
                </button>
              </React.Fragment>
            ))}{' '}
            {v.none ? (
              <>
                <div className="jbnone">
                  <b>{'No jobs match your filters.'}</b>
                  <span>{'Try a wider distance or another city.'}</span>
                  <button type="button" onClick={v.resetAll}>
                    {'Reset filters'}
                  </button>
                </div>
              </>
            ) : null}
          </div>
          <aside className="jbdetail" aria-live="polite">
            {v.hasSel ? (
              <>
                <div className="jbdin" style={S(v.sel?.key)}>
                  <div className="jbdcover" style={S(v.sel?.cover)}>
                    <img src={A(v.sel?.logo)} alt="" />{' '}
                    <span className="jbdkm">
                      {'📍 '}
                      {T(v.sel?.km)}
                      {' km away'}
                    </span>
                  </div>
                  <div className="jbdbody">
                    <span className="jbdco">
                      {T(v.sel?.co)} <span className="jbvtag">{'✓ Verified company'}</span>
                    </span>
                    <h2>{T(v.sel?.role)}</h2>
                    <span className="jbdmeta">
                      {T(v.sel?.city)}
                      {' · '}
                      {T(v.sel?.type)}
                      {' · posted '}
                      {T(v.sel?.ago)}
                      {' ago'}
                    </span>
                    <div className="jbdpay">
                      <small>{'Salary'}</small>
                      <b>{T(v.sel?.pay)}</b>
                    </div>
                    <span className="jbdh">{'About the job'}</span>
                    <p>{T(v.sel?.d)}</p>
                    <span className="jbdh">{'Requirements'}</span>
                    <ul>
                      {L(v.sel?.reqs).map((r_5, i_5) => (
                        <React.Fragment key={i_5}>
                          <li>{T(r_5?.t)}</li>
                        </React.Fragment>
                      ))}
                    </ul>
                    <div className="jbdacts">
                      <a className="jbapply" href="/app/">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        {'Apply with video resume'}
                      </a>{' '}
                      <button
                        type="button"
                        className={`jbsave ${T(v.sel?.savedCls)}`}
                        onClick={v.sel?.toggleSave}
                        aria-pressed={v.sel?.saved}
                        aria-label="Save job"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
                        </svg>
                      </button>
                    </div>
                    <small className="jbdnote">{'Applications are submitted in Jobseeker App.'}</small>
                  </div>
                </div>
              </>
            ) : null}
          </aside>
        </div>
        <p style={{ margin: '18px 0 0', textAlign: 'center', fontSize: '12px', color: '#717680' }}>
          {'Example listings for illustration — live jobs come from Jobseeker App.'}
        </p>
      </section>
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="jbcta rv">
          <div className="jbctac app">
            <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" className="jbctal" />{' '}
            <b>{'Looking for work?'}</b>{' '}
            <span>{'Get thousands of verified jobs and apply with a video resume.'}</span>
            <div className="jbstores">
              <a href="/app/" aria-label="Download on the App Store">
                <img src="/images/f67a83a01fce23124fe2b38912976391.svg" alt="Download on the App Store" />
              </a>{' '}
              <a href="/app/" aria-label="Get it on Google Play">
                <img src="/images/1ebef8361229ddc797a9a35153a6a3ff.svg" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="jbctac emp">
            <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" className="jbctal" />{' '}
            <b>{'Hiring?'}</b>{' '}
            <span>{'Post jobs for free on Jobseeker Partners and reach candidates near your business.'}</span>{' '}
            <a
              className="btn"
              href="/partners/"
              style={{ alignSelf: 'flex-start', background: '#ffffff', color: '#0031b3' }}
            >
              {'Post a job — free '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
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
