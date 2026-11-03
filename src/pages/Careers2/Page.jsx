// Careers — concept 2 (Jobseeker DS)
// Generated from the design artboard Careers2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      team: 'All',
      loc: 'All',
      pin: 0,
      paused: false,
      pil: 0,
      ap: 0,
      apK: 0,
      ai: 0,
      aiTyping: false,
      amOpen: false,
      amHint: false,
      amMsgs: [],
      amTyping: false,
      amQ: '',
    };
    const B = (id) => '/_blob/' + id;
    this.PINS = [
      { t: 'Team / Division', x: 53.0, y: 34.4 },
      { t: 'Location', x: 70.8, y: 44.6 },
    ];
    this.TEAMS = ['All', 'Engineering', 'Product & Design', 'Sales', 'Operations', 'People'];
    this.LOCS = ['All', 'Bali', 'Jakarta', 'Singapore'];
    this.TCOL = {
      Engineering: 'indigo',
      'Product & Design': 'purple',
      Sales: 'blue',
      Operations: 'orange',
      People: 'pink',
    };
    const J = (role, team, loc, type) => ({ role, team, loc, type });
    this.JOBS = [
      J('Senior Frontend Engineer', 'Engineering', 'Jakarta', 'Full-time · Hybrid'),
      J('Data Analyst', 'Engineering', 'Bali', 'Full-time · On-site'),
      J('Product Designer', 'Product & Design', 'Bali', 'Full-time · Hybrid'),
      J('Account Executive — Enterprise', 'Sales', 'Jakarta', 'Full-time · On-site'),
      J('Recruitment Consultant', 'Operations', 'Jakarta', 'Full-time · On-site'),
      J('Customer Success Specialist', 'Operations', 'Bali', 'Full-time · On-site'),
      J('HR Generalist', 'People', 'Bali', 'Full-time · On-site'),
    ];
    this.CLIENTS = [
      ['6a46d25389b849ee192dfda89ea93deb', 'Super Indo'],
      ['aac027953cffa08e93c5427d123a6e9a', 'Alfamart'],
      ['7bce058060ce5d73ab2f18f43e88ed26', 'Indomaret'],
      ['acc184efccfeb8469aae7d4baabdd58d', 'Mitra Keluarga'],
      ['1f30884c024ee18f1be73c2015c5653d', 'FIT HUB'],
      ['4436be89874b352373d55d3a5b02faa2', 'Rohto'],
      ['4cc1c6df3d161063fe49f92bf4ec2df7', 'Paramount Land'],
      ['c73db4a2e84f0be7b09ba11790e93179', 'Ranch Market'],
      ['2edbaf5ad9687f5009dd303fc208c272', 'Shelter'],
      ['c0c6c0666d1f3815067bac98ccc101e9', 'Varion Coffee'],
      ['437b04cddc51dc54506617ee6c5397dd', 'Alfamidi'],
      ['68ec4ade1c0b76df480e1793602af273', 'Dan+Dan'],
      ['c06dd2c4c892715068c5046c55212470', 'CBN'],
      ['56977feafc833cb26a8a3ccdfb04d4dd', 'Julong'],
      ['5796dfaf43f6cccb3b918fc27eb5c797', 'Deca Group'],
    ].map(([id, n]) => ({ src: B(id), alt: n }));
    this.PILLARS = [
      {
        n: '01',
        t: 'Hire',
        d: 'Find relevant candidates through an ATS with built-in AI and recruitment services that fit your needs.',
        tags: ['Jobseeker Software', 'Jobseeker Partners', 'Executive Search'],
      },
      {
        n: '02',
        t: 'Manage',
        d: 'Manage employee data and day-to-day workforce operations with HR technology and service support.',
        tags: ['HRIS & payroll', 'Talent Augmentation'],
      },
      {
        n: '03',
        t: 'Develop',
        d: 'Grow your team’s skills with training that matches the work they do.',
        tags: ['Jobseeker Academy', 'Corporate Training'],
      },
    ];
    this.AI = [
      {
        q: 'Find 20 store crew near Jimbaran, Bali',
        intro: 'Found 128 verified candidates within 5 km. Top matches:',
        res: [
          ['AR', 'Ayu R.', 'Store crew · 1.2 km · video resume', '96% fit', 'success'],
          ['KW', 'Komang W.', 'Retail · 2.4 km · available now', '92% fit', 'success'],
          ['DS', 'Dewi S.', 'Cashier · 3.1 km · 2 yrs exp', '89% fit', 'success'],
        ],
      },
      {
        q: 'Screen applicants for our cashier role',
        intro: 'Screened 86 applications. 14 meet every requirement:',
        res: [
          ['RP', 'Rina P.', 'Cashier · numeracy test passed', 'Shortlist', 'success'],
          ['BS', 'Budi S.', 'Cashier · 3 yrs retail', 'Shortlist', 'success'],
          ['NA', 'Nadia A.', 'Cashier · video resume', 'Review', 'warning'],
        ],
      },
      {
        q: 'Draft a job post for a barista in Jakarta',
        intro: 'Here is a draft you can edit and publish:',
        res: [
          ['JP', 'Barista — Jakarta Selatan', 'Full-time · shift-based', 'Title', 'brand'],
          ['01', 'Prepare drinks & keep the bar clean', 'Responsibilities', 'Draft', 'gray'],
          ['02', 'Friendly, reliable, SMA/SMK', 'Requirements', 'Draft', 'gray'],
        ],
      },
    ];
  }
  componentDidMount() {
    this._pinI = setInterval(() => {
      if (!this.state.paused) this.setState({ pin: (this.state.pin + 1) % this.PINS.length });
    }, 2600);
    this._apAt = Date.now();
    this._apI = setInterval(() => {
      if (Date.now() - (this._apAt || 0) > 4500) this.apGo((this.state.ap + 1) % 3);
    }, 500);
    this._amT1 = setTimeout(() => this.setState({ amHint: true }), 2500);
    this._amT2 = setTimeout(() => this.setState({ amHint: false }), 9000);
  }
  apGo(i) {
    this._apAt = Date.now();
    this.setState({ ap: i, apK: this.state.apK + 1 });
  }
  componentWillUnmount() {
    clearInterval(this._apI);
    clearInterval(this._pinI);
    clearTimeout(this._aiT);
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
  }
  ic(d, filled) {
    const R = typeof window !== 'undefined' ? window.React : null;
    if (!R) return null;
    return R.createElement(
      'svg',
      {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: filled ? 'currentColor' : 'none',
        stroke: filled ? 'none' : 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
      },
      R.createElement('path', { d }),
    );
  }
  askAI(i) {
    clearTimeout(this._aiT);
    this.setState({ ai: i, aiTyping: true });
    this._aiT = setTimeout(() => this.setState({ aiTyping: false }), 1100);
  }
  amVals() {
    const s = this.state;
    const R = [
      {
        k: ['solution', 'fit', 'product', 'which'],
        t: 'We have five solutions: Software, Services, Partners, App and Academy. Tell me your team size and I can suggest where to start.',
        link: 'See solutions',
        href: '/v2/solutions/',
      },
      {
        k: ['price', 'cost', 'pricing', 'harga', 'biaya'],
        t: 'Pricing depends on the product and your headcount. Our team can send a quote that fits your company.',
        link: 'Contact us',
        href: '/v2/contact/',
      },
      {
        k: ['job', 'kerja', 'lowongan', 'apply', 'looking'],
        t: 'Great! Browse verified jobs near you and apply with a video resume in Jobseeker App.',
        link: 'Find work',
        href: '/jobs/',
      },
      {
        k: ['hire', 'staff', 'crew', 'recruit', 'rekrut'],
        t: 'For frontline roles, Jobseeker Partners helps you hire from your phone. For larger teams, our Services team can staff it for you.',
        link: 'See solutions',
        href: '/v2/solutions/',
      },
      {
        k: ['train', 'course', 'skill', 'academy'],
        t: 'Jobseeker Academy runs training and upskilling programs for individuals and companies.',
        link: 'See Academy',
        href: '/v2/solutions/',
      },
    ];
    const reply = (q) => {
      const l = q.toLowerCase();
      return (
        R.find((r) => r.k.some((k) => l.includes(k))) || {
          t: 'Thanks! A specialist can help with that. Leave us a message and we will get back to you.',
          link: 'Contact us',
          href: '/v2/contact/',
        }
      );
    };
    const send = (text) => {
      const q = (text || '').trim();
      if (!q || this.state.amTyping) return;
      this.setState({
        amMsgs: (this.state.amMsgs || []).concat({ who: 'me', t: q }),
        amQ: '',
        amTyping: true,
      });
      clearTimeout(this._amT3);
      this._amT3 = setTimeout(() => {
        const r = reply(q);
        this.setState({
          amTyping: false,
          amMsgs: (this.state.amMsgs || []).concat({ who: 'bot', t: r.t, link: r.link, href: r.href }),
        });
      }, 1000);
    };
    const msgs = s.amMsgs || [];
    return {
      amOpen: !!s.amOpen,
      amHint: !!s.amHint && !s.amOpen,
      amToggle: () => this.setState({ amOpen: !s.amOpen, amHint: false }),
      amClose: () => this.setState({ amOpen: false }),
      amMsgs: msgs.map((m) => ({
        isMe: m.who === 'me',
        isBot: m.who === 'bot',
        t: m.t,
        hasLink: !!m.link,
        link: m.link || '',
        href: m.href || '#',
      })),
      amTyping: !!s.amTyping,
      amShowSugs: msgs.length === 0,
      amSugs: ['Which solution fits my company?', 'How much does it cost?', "I'm looking for a job"].map(
        (t) => ({ t, go: () => send(t) }),
      ),
      amQ: s.amQ || '',
      amOnQ: (e) => this.setState({ amQ: e && e.target ? e.target.value : e }),
      amSubmit: (e) => {
        if (e && e.preventDefault) e.preventDefault();
        send(this.state.amQ);
      },
    };
  }
  renderVals() {
    const s = this.state;
    const a = this.AI[s.ai];
    return {
      ...this.amVals(),
      yes: true,
      amAvatar: { name: 'Agent Ming', initials: 'AM' },
      icMenu: this.ic('M4 7h16M4 12h16M4 17h16'),
      icArrow: this.ic('M5 12h14M13 6l6 6-6 6'),
      icSpark: this.ic('M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z', true),
      pauseIcon: s.paused ? this.ic('M8 5v14l11-7z', true) : this.ic('M7 5h4v14H7zM13 5h4v14h-4z', true),
      pauseLabel: s.paused ? 'Play animation' : 'Pause animation',
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      heroCls: s.paused ? 'paused' : '',
      paused: s.paused,
      togglePause: () => this.setState({ paused: !s.paused }),
      pins: this.PINS.map((p, i) => ({
        t: p.t,
        cls: i === s.pin ? 'on' : '',
        pos: { left: p.x + '%', top: p.y + '%' },
      })),
      activeRole: this.PINS[s.pin].t,
      teams: this.TEAMS.map((t) => ({
        t: t === 'All' ? 'All teams' : t,
        on: s.team === t,
        h: s.team === t ? 'primary' : 'secondary',
        pick: () => this.setState({ team: t }),
      })),
      apSteps: [
        ['Choose a position', 'Pick a role that fits you and read its qualifications.'],
        ['Tap “Apply via Jobseeker App”', 'Every opening has one button — no forms to fill in here.'],
        ['Finish in the app', 'Open or download Jobseeker App, send your application and track its status.'],
      ].map(([title, d], i) => ({
        n: i + 1,
        title,
        d,
        on: s.ap === i,
        cls: s.ap === i ? 'on' : i < s.ap ? 'done' : '',
        barKey: { animationName: s.apK % 2 ? 'apfill' : 'apfill2' },
        pick: () => this.apGo(i),
      })),
      apS0: s.ap === 0 ? 'on' : 'past',
      apS1: s.ap === 1 ? 'on' : s.ap > 1 ? 'past' : '',
      apS2: s.ap === 2 ? 'on' : '',
      jlocs: [
        { t: 'Jakarta', x: 28, y: 56 },
        { t: 'Bali', x: 50, y: 74, hq: 1 },
        { t: 'Singapore', x: 75, y: 33 },
      ].map((l) => ({
        t: l.t,
        n: (this.JOBS.filter((j) => j.loc === l.t).length || '') + '',
        on: s.loc === l.t,
        cls: (l.hq ? 'hq ' : '') + (s.loc === l.t ? 'on' : ''),
        pos: { left: l.x + '%', top: l.y + '%' },
        pick: () => {
          this.setState({ loc: s.loc === l.t ? 'All' : l.t });
        },
      })),
      jteams: this.TEAMS.slice(1).map((t) => ({
        t,
        n: this.JOBS.filter((j) => j.team === t).length,
        pick: () => this.setState({ team: t, loc: 'All' }),
      })),
      locs: this.LOCS.map((t) => ({
        t: t === 'All' ? 'All locations' : t,
        on: s.loc === t,
        h: s.loc === t ? 'primary' : 'secondary',
        pick: () => this.setState({ loc: t }),
      })),
      ...(() => {
        const list = this.JOBS.filter(
          (x) => (s.team === 'All' || x.team === s.team) && (s.loc === 'All' || x.loc === s.loc),
        );
        return {
          jobs: list.map((x, i) => ({
            ...x,
            color: this.TCOL[x.team],
            delay: { animationDelay: i * 0.05 + 's' },
          })),
          hasJobs: list.length > 0,
          noJobs: list.length === 0,
          countLabel: list.length + (list.length === 1 ? ' open position' : ' open positions'),
        };
      })(),
      emptyActions: [
        {
          label: 'Clear filters',
          hierarchy: 'secondary',
          onClick: () => this.setState({ team: 'All', loc: 'All' }),
        },
        { label: 'See client openings', href: '/jobs/' },
      ],
      progStyle: { width: ((s.pin + 1) / this.PINS.length) * 100 + '%' },
      clients: this.CLIENTS.concat(this.CLIENTS),
      pillars: this.PILLARS.map((p, i) => ({
        ...p,
        cls: s.pil === i ? 'on' : '',
        tags: p.tags.map((t) => ({ t })),
        hover: () => this.setState({ pil: i }),
      })),
      aiQ: a.q,
      aiTyping: s.aiTyping,
      aiDone: !s.aiTyping,
      aiIntro: a.intro,
      aiRes: a.res.map(([ini, n, m, sc, color], i) => ({
        ini,
        n,
        m,
        s: sc,
        color,
        delay: { animationDelay: i * 0.12 + 's' },
      })),
      aiSugs: this.AI.map((x, i) => ({
        t: x.q,
        on: s.ai === i,
        h: s.ai === i ? 'primary' : 'secondary',
        go: () => this.askAI(i),
      })),
    };
  }
}

Page.template = (v) => (
  <>
    <div className="v2">
      <header className="hdr">
        <div className="ct hdrin">
          <a href="/v2/" aria-label="Jobseeker Company home">
            <img
              className="logo"
              src="/images/1976305d6893a6ac268c4f73d828678d.png"
              alt="Jobseeker Company"
            />
          </a>
          <nav className="nav" aria-label="Main">
            <a href="/v2/solutions/">{'Solutions'}</a> <a href="/v2/customers/">{'Customers'}</a>{' '}
            <a href="/v2/careers/">{'Careers'}</a> <a href="/v2/about/">{'About us'}</a>{' '}
            <a className="navjob" href="/v2/app/">
              {'Looking for a job?'}
            </a>
          </nav>
          <div className="hdrr">
            <span className="hai">
              <Jobseeker.Button
                hierarchy="secondary"
                size="md"
                iconLeading={v.icSpark}
                aria-expanded={v.amOpen}
                onClick={v.amToggle}
              >
                {'Ask Agent Ming'}
              </Jobseeker.Button>
            </span>{' '}
            <span className="hcta">
              <Jobseeker.Button hierarchy="primary" size="md" href="/v2/contact/">
                {'Contact us'}
              </Jobseeker.Button>
            </span>{' '}
            <span className="mbtn">
              <Jobseeker.IconButton
                hierarchy="secondary"
                size="lg"
                icon={v.icMenu}
                aria-label="Open menu"
                aria-expanded={v.menuOpen}
                onClick={v.toggleMenu}
              ></Jobseeker.IconButton>
            </span>
          </div>
        </div>
        {v.menuOpen ? (
          <>
            <div className="mpanel">
              <div className="ct">
                <a href="/v2/solutions/" onClick={v.closeMenu}>
                  {'Solutions'}
                </a>{' '}
                <a href="/v2/customers/" onClick={v.closeMenu}>
                  {'Customers'}
                </a>{' '}
                <a href="/v2/careers/" onClick={v.closeMenu}>
                  {'Careers'}
                </a>{' '}
                <a href="/v2/about/" onClick={v.closeMenu}>
                  {'About us'}
                </a>{' '}
                <a className="navjob" href="/v2/app/" onClick={v.closeMenu}>
                  {'Looking for a job?'}
                </a>{' '}
                <a href="/v2/contact/" onClick={v.closeMenu}>
                  {'Contact us'}
                </a>
              </div>
            </div>
          </>
        ) : null}
      </header>
      <section id="top" className={`shero ${T(v.heroCls)}`}>
        <div className="shimg" aria-hidden="true">
          <div className="shworld">
            <img src="/images/658a0ae6b3f4db9820f7d8014cae589a.webp" alt="" />{' '}
            {L(v.pins).map((p_0, i_0) => (
              <React.Fragment key={i_0}>
                <span className={`pin ${T(p_0?.cls)}`} style={S(p_0?.pos)}>
                  <span className="plab">{T(p_0?.t)}</span>
                  <span className="pdot" />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="shscrim" />
        <div className="ct shin">
          <div className="hcopy">
            <p className="heyb rise d1">{'Careers at Jobseeker'}</p>
            <h1 className="h1 rise d2">
              {'Grow with '}
              <em>{'Jobseeker.'}</em>
            </h1>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="#openings">
                {'See open positions'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="/v2/contact/">
                {'Contact us'}
              </Jobseeker.Button>
            </div>
            <a className="hcand rise d4" href="/jobs/">
              {'Looking for work at another company? See our client openings →'}
            </a>
          </div>
          <div className="hctl rise d5">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'Filter by: '}
              <b>{T(v.activeRole)}</b>
            </span>{' '}
            <span className="hpause">
              <Jobseeker.Button
                hierarchy="secondary"
                size="sm"
                iconLeading={v.pauseIcon}
                aria-pressed={v.paused}
                onClick={v.togglePause}
              >
                {T(v.pauseLabel)}
              </Jobseeker.Button>
            </span>
          </div>
        </div>
      </section>
      <section id="join" className="z1" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div className="jthead rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px' }}>
              <p className="eyb">{'Join the team'}</p>
              <h2 className="h2">
                {'Build the future of work in '}
                <em>{'Indonesia.'}</em>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
              <p className="jtlede">
                {
                  'Join the team building technology and services for Indonesia’s world of work. Find a role that fits your skills and interests.'
                }
              </p>
              <Jobseeker.Button hierarchy="primary" size="lg" href="#openings" iconTrailing={v.icArrow}>
                {'See open positions'}
              </Jobseeker.Button>
            </div>
          </div>
          <div className="jtgrid">
            <div className="jt rv">
              <span className="jtn">{'01'}</span>
              <b className="jtt">{'Build what matters'}</b>
              <p>{'Products used by millions of jobseekers and thousands of employers.'}</p>
              <div className="jtv jnot" aria-hidden="true">
                <span className="jn">
                  <i className="c1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9z" />
                    </svg>
                  </i>
                  <span>
                    <b>{'New match nearby'}</b>
                    <small>{'Barista · 1.2 km away'}</small>
                  </span>
                </span>{' '}
                <span className="jn">
                  <i className="c2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </i>
                  <span>
                    <b>{'Application sent'}</b>
                    <small>{'via Jobseeker App'}</small>
                  </span>
                </span>{' '}
                <span className="jn">
                  <i className="c3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </i>
                  <span>
                    <b>{'Hired'}</b>
                    <small>{'Starts Monday'}</small>
                  </span>
                </span>
              </div>
            </div>
            <div className="jt rv">
              <span className="jtn">{'02'}</span>
              <b className="jtt">{'Learn on the job'}</b>
              <p>{'Mentoring, Jobseeker Academy courses and room to try new things.'}</p>
              <div className="jtv jlearn" aria-hidden="true">
                <div className="jring">
                  <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="48" className="trk" />
                    <circle cx="60" cy="60" r="48" className="val" pathLength="100" />
                  </svg>
                  <span>
                    <b>{'Grow'}</b>
                    {'every week'}
                  </span>
                </div>
                <div className="jchips">
                  <span>
                    <i />
                    {'Mentoring'}
                  </span>
                  <span>
                    <i />
                    {'Academy courses'}
                  </span>
                  <span>
                    <i />
                    {'New challenges'}
                  </span>
                </div>
              </div>
            </div>
            <div className="jt rv">
              <span className="jtn">{'03'}</span>
              <b className="jtt">{'Work across the region'}</b>
              <p>{'Teams in Bali, Jakarta and Singapore. Tap a city to see its openings.'}</p>
              <div className="jtv jmap">
                <svg className="jarc" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M50 70 Q 36 44 28 52" vectorEffect="non-scaling-stroke" />
                  <path d="M50 70 Q 64 14 75 29" vectorEffect="non-scaling-stroke" />
                </svg>{' '}
                {L(v.jlocs).map((l_1, i_1) => (
                  <React.Fragment key={i_1}>
                    <button
                      type="button"
                      className={`jpin ${T(l_1?.cls)}`}
                      style={S(l_1?.pos)}
                      onClick={l_1?.pick}
                      aria-pressed={l_1?.on}
                    >
                      <b>
                        {T(l_1?.t)}
                        <em>{T(l_1?.n)}</em>
                      </b>
                      <i />
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="jteams rv">
              <div>
                <b>{'Find your team'}</b>
                <span>{'Open roles across every part of the company.'}</span>
              </div>
              <div className="jtchips">
                {L(v.jteams).map((t_2, i_2) => (
                  <React.Fragment key={i_2}>
                    <a className="jtchip" href="#openings" onClick={t_2?.pick}>
                      {T(t_2?.t)}
                      <em>{T(t_2?.n)}</em>
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="openings" className="z2" style={{ padding: '96px 0' }}>
        <div className="ct">
          <div className="obhead rv">
            <h2 className="h2">{'Open positions'}</h2>
            <span className="obcount" aria-live="polite">
              {T(v.countLabel)}
            </span>
          </div>
          <div className="obfilters rv">
            <div className="obrow" role="group" aria-label="Team or division">
              <span className="sflab">{'Team / Division'}</span>
              <div className="sfbtns">
                {L(v.teams).map((t_3, i_3) => (
                  <React.Fragment key={i_3}>
                    <Jobseeker.Button hierarchy={t_3?.h} size="sm" aria-pressed={t_3?.on} onClick={t_3?.pick}>
                      {T(t_3?.t)}
                    </Jobseeker.Button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="obrow" role="group" aria-label="Location">
              <span className="sflab">{'Location'}</span>
              <div className="sfbtns">
                {L(v.locs).map((l_4, i_4) => (
                  <React.Fragment key={i_4}>
                    <Jobseeker.Button hierarchy={l_4?.h} size="sm" aria-pressed={l_4?.on} onClick={l_4?.pick}>
                      {T(l_4?.t)}
                    </Jobseeker.Button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          {v.hasJobs ? (
            <>
              <ul className="oblist">
                {L(v.jobs).map((j_5, i_5) => (
                  <React.Fragment key={i_5}>
                    <li className="obitem" style={S(j_5?.delay)}>
                      <div className="obmain">
                        <b>{T(j_5?.role)}</b>
                        <div className="obmeta">
                          <Jobseeker.Badge color={j_5?.color} size="sm">
                            {T(j_5?.team)}
                          </Jobseeker.Badge>{' '}
                          <span>
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
                              <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
                              <circle cx="12" cy="10" r="2.5" />
                            </svg>
                            {T(j_5?.loc)}
                          </span>{' '}
                          <span>
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
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            {T(j_5?.type)}
                          </span>
                        </div>
                      </div>
                      <Jobseeker.Button
                        hierarchy="secondary"
                        size="md"
                        href="/v2/app/"
                        iconTrailing={v.icArrow}
                      >
                        {'Apply via Jobseeker App'}
                      </Jobseeker.Button>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
              <p className="obnote">
                {'Example openings for illustration — live roles will come from Jobseeker App.'}
              </p>
            </>
          ) : null}{' '}
          {v.noJobs ? (
            <>
              <div className="obempty">
                <Jobseeker.EmptyState
                  size="md"
                  media="icon"
                  pattern="circles"
                  title="No matching positions right now"
                  description="Check back soon for new openings, or try another team or location."
                  actions={v.emptyActions}
                ></Jobseeker.EmptyState>
              </div>
            </>
          ) : null}
        </div>
      </section>
      <section id="apply" className="z1" style={{ padding: '112px 0' }}>
        <div className="ct apgrid">
          <div className="apl rv">
            <p className="eyb">{'How to apply'}</p>
            <h2 className="h2">{'Three steps to your next role.'}</h2>
            <div className="aptabs" role="tablist" aria-label="How to apply">
              {L(v.apSteps).map((t_6, i_6) => (
                <React.Fragment key={i_6}>
                  <button
                    type="button"
                    role="tab"
                    className={`aptab ${T(t_6?.cls)}`}
                    aria-selected={t_6?.on}
                    onClick={t_6?.pick}
                  >
                    <span className="apn">{T(t_6?.n)}</span>{' '}
                    <span className="aptx">
                      <b>{T(t_6?.title)}</b>
                      <span>{T(t_6?.d)}</span>
                    </span>{' '}
                    <span className="apbar" aria-hidden="true">
                      <i style={S(t_6?.barKey)} />
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="apnote">
              <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
              {'All applications are submitted through Jobseeker App, not through a form on this website.'}
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <Jobseeker.Button hierarchy="primary" size="lg" href="/v2/app/">
                {'Download Jobseeker App'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="lg" href="#openings">
                {'Browse positions'}
              </Jobseeker.Button>
            </div>
          </div>
          <div className="apr rv" aria-hidden="true">
            <div className="aph">
              <div className={`apscr ${T(v.apS0)}`}>
                <div className="aptop">
                  {'Careers at Jobseeker'}
                  <small>{'7 roles'}</small>
                </div>
                <div className="apsearch">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                  {'Search roles'}
                </div>
                <span className="apjob">
                  {'Senior Frontend Engineer'}
                  <small>{'Engineering · Jakarta'}</small>
                </span>{' '}
                <span className="apjob hot">
                  {'Product Designer'}
                  <small>{'Product & Design · Bali'}</small>
                  <span className="aptap" style={{ left: '82%', top: '50%' }} />
                </span>{' '}
                <span className="apjob">
                  {'Data Analyst'}
                  <small>{'Engineering · Bali'}</small>
                </span>{' '}
                <span className="apjob">
                  {'HR Generalist'}
                  <small>{'People · Bali'}</small>
                </span>
              </div>
              <div className={`apscr apdet ${T(v.apS1)}`}>
                <div className="aptop">
                  <small>{'← Back'}</small>
                  <small>{'Share'}</small>
                </div>
                <b>{'Product Designer'}</b>
                <div className="apmeta">
                  <span>{'Bali'}</span>
                  <span>{'Full-time'}</span>
                  <span>{'Hybrid'}</span>
                </div>
                <div className="apq">
                  <small>{'Qualifications'}</small>
                  <span>
                    <i style={{ width: '80%' }} />
                  </span>
                  <span>
                    <i style={{ width: '64%' }} />
                  </span>
                  <span>
                    <i style={{ width: '72%' }} />
                  </span>
                  <span>
                    <i style={{ width: '52%' }} />
                  </span>
                </div>
                <div className="apcta">
                  {'Apply via Jobseeker App'}
                  <span className="aptap" style={{ left: '50%', top: '50%' }} />
                </div>
              </div>
              <div className={`apscr ${T(v.apS2)}`}>
                <div className="aptop">
                  <small>{'Jobseeker App'}</small>
                  <small>{'Done'}</small>
                </div>
                <div className="apok">
                  <span className="apcheck">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <b>{'Application sent'}</b>
                  <small>{'Product Designer · Jobseeker Company'}</small>
                </div>
                <div className="aptrack">
                  <small>{'Track your status'}</small>{' '}
                  <span className="aptk d">
                    {'Applied'}
                    <em>{'Today'}</em>
                  </span>{' '}
                  <span className="aptk c">
                    {'Under review'}
                    <em>{'Next'}</em>
                  </span>{' '}
                  <span className="aptk">{'Interview'}</span> <span className="aptk">{'Offer'}</span>
                </div>
              </div>
            </div>
            <span className="apfloat f1">
              <i>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9z" />
                </svg>
              </i>
              <span>
                {'Apply in minutes'}
                <small>{'One profile, every role'}</small>
              </span>
            </span>{' '}
            <span className="apfloat f2">
              <i>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
              </i>
              <span>
                {'Status updates'}
                <small>{'Right in the app'}</small>
              </span>
            </span>
          </div>
        </div>
      </section>
      <footer className="ftr">
        <div className="ct">
          <div className="fgrid">
            <div className="fcol">
              <img
                className="logo"
                src="/images/1976305d6893a6ac268c4f73d828678d.png"
                alt="Jobseeker Company"
                style={{ alignSelf: 'flex-start' }}
              />
              <p className="ftag">{'Connecting people with opportunities.'}</p>
            </div>
            <div className="fcol">
              <h4>{'Products'}</h4>
              <a href="/v2/software/">{'Jobseeker Software'}</a>
              <a href="/v2/partners/">{'Jobseeker Partners'}</a>
              <a href="/v2/app/">{'Jobseeker App'}</a>
            </div>
            <div className="fcol">
              <h4>{'Services'}</h4>
              <a href="/v2/executive/">{'Executive Search'}</a>
              <a href="/v2/talent/">{'Talent Augmentation'}</a>
              <a href="/v2/academy/">{'Jobseeker Academy'}</a>
              <a href="/jobs/">{'Client openings'}</a>
            </div>
            <div className="fcol">
              <h4>{'Company'}</h4>
              <a href="/v2/about/">{'About us'}</a>
              <a href="/v2/customers/">{'Customers'}</a>
              <a href="/v2/careers/">{'Careers at Jobseeker'}</a>
              <a href="/demo/">{'Book a demo'}</a>
            </div>
            <div className="fcol">
              <h4>{'Social'}</h4>
              <a href="#top">{'LinkedIn'}</a>
              <a href="#top">{'Instagram'}</a>
              <a href="#top">{'TikTok'}</a>
            </div>
          </div>
          <div className="foff">
            <div>
              <b>{'Bali HQ (J-Loft)'}</b>
              <span>{'J-Loft Office, Griya Jimbaran Hub, Jl. Karang Mas, Jimbaran, Bali 80361'}</span>
            </div>
            <div>
              <b>{'Jakarta'}</b>
              <span>
                {'Menara Kompas, Jl. Palmerah Sel. No.21, Gelora, Tanah Abang, Central Jakarta 10270'}
              </span>
            </div>
            <div>
              <b>{'Singapore'}</b>
              <span>{'10 Anson Road #22-02 International Plaza, Singapore 079903'}</span>
            </div>
          </div>
          <div className="fbot">
            <span>{'© 2026 Jobseeker Company. All rights reserved.'}</span>
            <span>
              <a href="mailto:support@jobseeker.company">{'support@jobseeker.company'}</a>
              {' · '}
              <a href="tel:+6281318817887">{'+62 813 1881 7887'}</a>
            </span>
          </div>
        </div>
      </footer>
      <div className="fabw">
        {v.amOpen ? (
          <>
            <div className="amc" role="dialog" aria-label="Agent Ming">
              <div className="amh">
                <Jobseeker.Avatar
                  size="md"
                  name="Agent Ming"
                  initials="AM"
                  status="online"
                ></Jobseeker.Avatar>{' '}
                <span>
                  <b>{'Agent Ming'}</b>
                  <small>{'AI assistant · replies instantly'}</small>
                </span>{' '}
                <span className="amx">
                  <Jobseeker.CloseButton
                    size="sm"
                    onClick={v.amClose}
                    aria-label="Close Agent Ming"
                  ></Jobseeker.CloseButton>
                </span>
              </div>
              <div className="amb" aria-live="polite">
                <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                  {"Hi! I'm Agent Ming, Jobseeker's AI assistant. How can I help you today?"}
                </Jobseeker.ChatMessage>{' '}
                {L(v.amMsgs).map((m_7, i_7) => (
                  <React.Fragment key={i_7}>
                    {m_7?.isMe ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                          {T(m_7?.t)}
                        </Jobseeker.ChatMessage>
                      </>
                    ) : null}{' '}
                    {m_7?.isBot ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                          {T(m_7?.t)}
                        </Jobseeker.ChatMessage>{' '}
                        {m_7?.hasLink ? (
                          <>
                            <span style={{ marginLeft: '44px' }}>
                              <Jobseeker.Button
                                hierarchy="link-color"
                                size="sm"
                                href={A(m_7?.href)}
                                iconTrailing={v.icArrow}
                              >
                                {T(m_7?.link)}
                              </Jobseeker.Button>
                            </span>
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </React.Fragment>
                ))}{' '}
                {v.amTyping ? (
                  <>
                    <Jobseeker.ChatMessage
                      size="sm"
                      name="Agent Ming"
                      avatar={v.amAvatar}
                      typing={v.yes}
                    ></Jobseeker.ChatMessage>
                  </>
                ) : null}
              </div>
              {v.amShowSugs ? (
                <>
                  <div className="ams">
                    {L(v.amSugs).map((sg_8, i_8) => (
                      <React.Fragment key={i_8}>
                        <Jobseeker.Button hierarchy="secondary" size="xs" onClick={sg_8?.go}>
                          {T(sg_8?.t)}
                        </Jobseeker.Button>
                      </React.Fragment>
                    ))}
                  </div>
                </>
              ) : null}
              <form className="amf" onSubmit={v.amSubmit}>
                <span className="amin">
                  <Jobseeker.Input
                    size="md"
                    placeholder="Ask Agent Ming…"
                    aria-label="Message Agent Ming"
                    value={v.amQ}
                    onChange={v.amOnQ}
                  ></Jobseeker.Input>
                </span>{' '}
                <Jobseeker.Button hierarchy="primary" size="md" type="submit">
                  {'Send'}
                </Jobseeker.Button>
              </form>
            </div>
          </>
        ) : null}
      </div>
    </div>
  </>
);

export default Page;
