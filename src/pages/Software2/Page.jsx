// Jobseeker Software — concept 2 (Jobseeker DS)
// Generated from the design artboard Software2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      at: 0,
      atK: 0,
      menuOpen: false,
      eco: 0,
      cnt: 0,
      pin: 0,
      paused: false,
      pil: 0,
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
      { t: 'Candidate Management', x: 50.5, y: 35.3 },
      { t: 'Recruitment Pipeline', x: 49.5, y: 48.3 },
    ];
    const E = (name, d, href, logo) => ({ name, d, href, logo: B(logo) });
    this.ECO = [
      E(
        'Jobseeker Software',
        'Recruitment technology and HR management.',
        '/v2/software/',
        '06922c52c0d826c56143c4224b8fb845',
      ),
      E(
        'Jobseeker Services',
        'Candidate search, workforce management and payroll services.',
        '/v2/talent/',
        '0934d72a7333f2a8976ae385b4569280',
      ),
      E(
        'Jobseeker Partners',
        'A recruitment app for SMEs.',
        '/v2/partners/',
        '2e0842aec39ea4bc17e6d544749982f9',
      ),
      E('Jobseeker App', 'A job search app for candidates.', '/v2/app/', '4a0dd97415f6c2f2d2931c4e002cf8ed'),
      E(
        'Jobseeker Academy',
        'Training and skill development programs.',
        '/v2/academy/',
        'c2c0bd06446c497f081ebea85a1bf425',
      ),
    ];
    this.STATS = [
      [3.9, 'M+', 1, 'candidates'],
      [40, 'K+', 0, 'employers'],
      [1.8, 'M+', 1, 'candidates processed'],
      [420, 'K+', 0, 'candidates placed'],
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
    this._atAt = Date.now();
    this._atI = setInterval(() => {
      if (!this._atHold && Date.now() - this._atAt > 4800) this.atGo((this.state.at + 1) % 6);
    }, 300);
    this._cntI = setInterval(() => {
      const n = Math.min(1, (this.state.cnt || 0) + 0.04);
      this.setState({ cnt: n });
      if (n >= 1) clearInterval(this._cntI);
    }, 40);
    this._pinI = setInterval(() => {
      if (!this.state.paused) this.setState({ pin: (this.state.pin + 1) % this.PINS.length });
    }, 2600);
    this._amT1 = setTimeout(() => this.setState({ amHint: true }), 2500);
    this._amT2 = setTimeout(() => this.setState({ amHint: false }), 9000);
  }
  atGo(i) {
    this._atAt = Date.now();
    this.setState({ at: i, atK: this.state.atK + 1 });
  }
  componentWillUnmount() {
    clearInterval(this._atI);
    clearInterval(this._pinI);
    clearInterval(this._cntI);
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
      ...(() => {
        const o = {
          atBarKey: { animationName: s.atK % 2 ? 'atfill' : 'atfill2' },
          atHold: () => {
            this._atHold = true;
          },
          atRel: () => {
            this._atHold = false;
            this._atAt = Date.now();
          },
        };
        for (let k = 0; k < 6; k++) {
          o['atC' + k] = s.at === k ? 'on' : k < s.at ? 'done' : '';
          o['atOn' + k] = s.at === k;
          o['atGo' + k] = () => this.atGo(k);
        }
        return o;
      })(),
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
      eco: this.ECO.map((e, i) => ({
        ...e,
        theme: ['software', 'services', 'partners', 'app', 'academy'][i],
        cls: s.eco === i ? 'on' : '',
        hover: () => this.setState({ eco: i }),
      })),
      stats: this.STATS.map(([v, u, dp, l]) => {
        const p = 1 - Math.pow(1 - (s.cnt || 0), 3);
        return { v: (v * p).toFixed(dp) + u, l };
      }),
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
            <img src="/images/760e8ac86a00f4be6cce64da15c9648f.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'Jobseeker Software · ATS with built-in AI & HRIS'}</p>
            <h1 className="h1 rise d2">
              {'Hire smarter. Manage your workforce '}
              <em>{'in one platform.'}</em>
            </h1>
            <p className="hsub rise d3">
              {
                'Manage jobs, candidates and selection with an ATS with built-in AI — with employee management features included.'
              }
            </p>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="/v2/contact/">
                {'Contact us'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="/demo/" iconTrailing={v.icArrow}>
                {'Schedule a demo'}
              </Jobseeker.Button>{' '}
              <a className="hlink" href="/pricing/">
                {'See plans & pricing →'}
              </a>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'Inside the platform: '}
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
      <section className="z1" style={{ padding: '112px 0' }}>
        <div className="ct pbgrid">
          <div className="pbl rv">
            <p className="eyb" style={{ color: 'var(--brand-2-600)' }}>
              {'Why Jobseeker Software'}
            </p>
            <h2 className="h2">{'Recruitment gets complicated when the process isn’t connected.'}</h2>
            <p>
              {
                'Applications arrive from many channels, candidate information is scattered and follow-ups differ between teams. Jobseeker Software brings every stage into one clear workflow — from the headcount request to getting ready for day one.'
              }
            </p>
            <ul className="pbchk">
              <li>{'One flow for jobs and candidates.'}</li>
              <li>{'AI helps assess candidates; recruiters make the decisions.'}</li>
              <li>{'Process visibility for HR teams and decision-makers.'}</li>
            </ul>
          </div>
          <div className="pbv rv" aria-hidden="true">
            <span className="pbsrc s1">
              <i>{'WA'}</i>
              {'WhatsApp'}
            </span>{' '}
            <span className="pbsrc s2">
              <i>{'@'}</i>
              {'Email'}
            </span>{' '}
            <span className="pbsrc s3">
              <i>{'JP'}</i>
              {'Job portals'}
            </span>{' '}
            <span className="pbsrc s4">
              <i>{'CS'}</i>
              {'Career site'}
            </span>
            <div className="pbhub">
              <div>
                <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                {'Store crew — Bali'}
              </div>
              <div className="pbst">
                <span>
                  <b>{'128'}</b>
                  {'Applied'}
                </span>
                <span>
                  <b>{'42'}</b>
                  {'Screened'}
                </span>
                <span>
                  <b>{'12'}</b>
                  {'Interview'}
                </span>
                <span>
                  <b>{'4'}</b>
                  {'Offer'}
                </span>
              </div>
              <span className="pbnote">
                <i />
                {'AI shortlisted 12 candidates for review'}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="z2" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div className="mfhead rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '760px' }}>
              <p className="eyb">{'Applicant tracking'}</p>
              <h2 className="h2">{'A tidier recruitment flow, from start to finish.'}</h2>
            </div>
            <Jobseeker.Button hierarchy="link-color" size="lg" href="/demo/" iconTrailing={v.icArrow}>
              {'See it in a demo'}
            </Jobseeker.Button>
          </div>
          <div className="atgrid" onMouseEnter={v.atHold} onMouseLeave={v.atRel}>
            <div className="attabs rv" role="tablist" aria-label="Applicant tracking features">
              <button
                type="button"
                role="tab"
                className={`attab ${T(v.atC0)}`}
                aria-selected={v.atOn0}
                onClick={v.atGo0}
              >
                <span className="ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </span>
                <span className="attx">
                  <b>{'Jobs & job requisitions'}</b>
                  <span>
                    <span>{'Manage headcount requests, create job posts and track open positions.'}</span>
                  </span>
                </span>
                <span className="atbar" aria-hidden="true">
                  <i style={S(v.atBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`attab ${T(v.atC1)}`}
                aria-selected={v.atOn1}
                onClick={v.atGo1}
              >
                <span className="ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                  </svg>
                </span>
                <span className="attx">
                  <b>{'Candidate management'}</b>
                  <span>
                    <span>{'Store, review and manage candidate profiles in one place.'}</span>
                  </span>
                </span>
                <span className="atbar" aria-hidden="true">
                  <i style={S(v.atBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`attab ${T(v.atC2)}`}
                aria-selected={v.atOn2}
                onClick={v.atGo2}
              >
                <span className="ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="5" height="16" rx="1.5" />
                    <rect x="10" y="4" width="5" height="11" rx="1.5" />
                    <rect x="17" y="4" width="4" height="7" rx="1.5" />
                  </svg>
                </span>
                <span className="attx">
                  <b>{'Recruitment pipeline'}</b>
                  <span>
                    <span>{'Set up selection stages that match your company’s hiring process.'}</span>
                  </span>
                </span>
                <span className="atbar" aria-hidden="true">
                  <i style={S(v.atBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`attab ${T(v.atC3)}`}
                aria-selected={v.atOn3}
                onClick={v.atGo3}
              >
                <span className="ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 15l2 2 4-4" />
                  </svg>
                </span>
                <span className="attx">
                  <b>{'Forms, assessments & offers'}</b>
                  <span>
                    <span>{'Manage forms, assessments and offer documents inside the hiring flow.'}</span>
                  </span>
                </span>
                <span className="atbar" aria-hidden="true">
                  <i style={S(v.atBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`attab ${T(v.atC4)}`}
                aria-selected={v.atOn4}
                onClick={v.atGo4}
              >
                <span className="ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </span>
                <span className="attx">
                  <b>{'Pre-onboarding'}</b>
                  <span>
                    <span>{'Prepare the early steps before a candidate starts work.'}</span>
                  </span>
                </span>
                <span className="atbar" aria-hidden="true">
                  <i style={S(v.atBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`attab ${T(v.atC5)}`}
                aria-selected={v.atOn5}
                onClick={v.atGo5}
              >
                <span className="ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                  </svg>
                </span>
                <span className="attx">
                  <b>{'Career site & sourcing reports'}</b>
                  <span>
                    <span>
                      {'Receive applications through your career site and track where candidates come from.'}
                    </span>
                  </span>
                </span>
                <span className="atbar" aria-hidden="true">
                  <i style={S(v.atBarKey)} />
                </span>
              </button>
            </div>
            <div className="atwin rv" aria-hidden="true">
              <div className="atchrome">
                <i />
                <i />
                <i />
                <span>{'app.jobseeker.software/ats'}</span>
              </div>
              <div className="atapp">
                <div className="atside">
                  <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                  <span className={v.atC0}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    {'Requisitions'}
                  </span>
                  <span className={v.atC1}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                    </svg>
                    {'Candidates'}
                  </span>
                  <span className={v.atC2}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="5" height="16" rx="1.5" />
                      <rect x="10" y="4" width="5" height="11" rx="1.5" />
                      <rect x="17" y="4" width="4" height="7" rx="1.5" />
                    </svg>
                    {'Pipeline'}
                  </span>
                  <span className={v.atC3}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M9 15l2 2 4-4" />
                    </svg>
                    {'Assessments'}
                  </span>
                  <span className={v.atC4}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    {'Pre-onboarding'}
                  </span>
                  <span className={v.atC5}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                    </svg>
                    {'Reports'}
                  </span>
                </div>
                <div className="atmain">
                  <div className={`ats ${T(v.atC0)}`}>
                    <div className="ath">
                      <span>
                        <b>{'New requisition'}</b>
                        <small>{'REQ-0142 · created today'}</small>
                      </span>
                      <span className="pill b">{'In approval'}</span>
                    </div>
                    <div className="atcard atkv">
                      <div>
                        {'Position'}
                        <b>{'Store crew'}</b>
                      </div>
                      <div>
                        {'Headcount'}
                        <b>{'10 people'}</b>
                      </div>
                      <div>
                        {'Location'}
                        <b>{'Bali · 3 outlets'}</b>
                      </div>
                    </div>
                    <div className="atcard appr">
                      <span className="apr">
                        <i style={{ background: '#cdd9ff' }}>{'HR'}</i>
                        {'HR Manager'}
                        <span className="st pill g">{'Approved'}</span>
                      </span>{' '}
                      <span className="apr">
                        <i style={{ background: '#d3f8df' }}>{'FN'}</i>
                        {'Finance'}
                        <span className="st pill g">{'Approved'}</span>
                      </span>{' '}
                      <span className="apr">
                        <i style={{ background: '#fef0c7' }}>{'OP'}</i>
                        {'Operations Head'}
                        <span className="st pill wait" />
                      </span>
                    </div>
                    <span className="opened pill g" style={{ fontSize: '12px', padding: '4px 12px' }}>
                      {'✓ Job opened & published'}
                    </span>
                  </div>
                  <div className={`ats ${T(v.atC1)}`}>
                    <div className="ath">
                      <span>
                        <b>{'Candidates'}</b>
                        <small>{'Store crew · Bali · 128 profiles'}</small>
                      </span>
                      <span className="pill m">{'✦ AI sorted'}</span>
                    </div>
                    <span className="atrow sel">
                      <i style={{ background: '#ffd1ea' }}>{'AR'}</i>
                      <span>
                        {'Ayu R.'}
                        <small>{'Kuta · 2 yrs retail · video resume'}</small>
                      </span>
                      <span className="pill g">{'New'}</span>
                      <span className="scr">{'96'}</span>
                    </span>{' '}
                    <span className="atrow">
                      <i style={{ background: '#cdd9ff' }}>{'KW'}</i>
                      <span>
                        {'Komang W.'}
                        <small>{'Denpasar · 1 yr F&B'}</small>
                      </span>
                      <span className="pill b">{'Reviewed'}</span>
                      <span className="scr">{'88'}</span>
                    </span>{' '}
                    <span className="atrow">
                      <i style={{ background: '#d3f8df' }}>{'DS'}</i>
                      <span>
                        {'Dewi S.'}
                        <small>{'Seminyak · 3 yrs retail'}</small>
                      </span>
                      <span className="pill b">{'Reviewed'}</span>
                      <span className="scr">{'84'}</span>
                    </span>{' '}
                    <span className="atrow">
                      <i style={{ background: '#fef0c7' }}>{'BS'}</i>
                      <span>
                        {'Budi S.'}
                        <small>{'Ubud · fresh graduate'}</small>
                      </span>
                      <span className="pill g">{'New'}</span>
                      <span className="scr">{'79'}</span>
                    </span>{' '}
                    <span className="atrow">
                      <i style={{ background: '#e9d7fe' }}>{'NA'}</i>
                      <span>
                        {'Nadia A.'}
                        <small>{'Kuta · 1 yr cashier'}</small>
                      </span>
                      <span className="pill y">{'On hold'}</span>
                      <span className="scr">{'72'}</span>
                    </span>
                  </div>
                  <div className={`ats ${T(v.atC2)}`}>
                    <div className="ath">
                      <span>
                        <b>{'Pipeline · Store crew'}</b>
                        <small>{'Stages set by your team'}</small>
                      </span>
                      <span className="pill b">{'10 to hire'}</span>
                    </div>
                    <div className="atkb">
                      <div className="atcol">
                        <h6>
                          {'Screening '}
                          <em>{'42'}</em>
                        </h6>
                        <span className="atk from">
                          <i style={{ background: '#ffd1ea' }}>{'AR'}</i>
                          {'Ayu R.'}
                        </span>
                        <span className="atk">
                          <i style={{ background: '#fef0c7' }}>{'BS'}</i>
                          {'Budi S.'}
                        </span>
                        <span className="atk">
                          <i style={{ background: '#e9d7fe' }}>{'NA'}</i>
                          {'Nadia A.'}
                        </span>
                      </div>
                      <div className="atcol">
                        <h6>
                          {'Interview '}
                          <em>{'12'}</em>
                        </h6>
                        <span className="atk mv">
                          <i style={{ background: '#ffd1ea' }}>{'AR'}</i>
                          {'Ayu R.'}
                        </span>
                        <span className="atk">
                          <i style={{ background: '#cdd9ff' }}>{'KW'}</i>
                          {'Komang W.'}
                        </span>
                        <span className="atk">
                          <i style={{ background: '#b2ddff' }}>{'YT'}</i>
                          {'Yoga T.'}
                        </span>
                      </div>
                      <div className="atcol">
                        <h6>
                          {'Offer '}
                          <em>{'4'}</em>
                        </h6>
                        <span className="atk">
                          <i style={{ background: '#d3f8df' }}>{'DS'}</i>
                          {'Dewi S.'}
                        </span>
                      </div>
                      <div className="atcol">
                        <h6>
                          {'Hired '}
                          <em>{'6'}</em>
                        </h6>
                        <span className="atk">
                          <i style={{ background: '#ffd1ea' }}>{'RP'}</i>
                          {'Rina P.'}
                        </span>
                        <span className="atk">
                          <i style={{ background: '#cdd9ff' }}>{'HW'}</i>
                          {'Hendra W.'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`ats ${T(v.atC3)}`}>
                    <div className="ath">
                      <span>
                        <b>{'Dewi S. · Assessment'}</b>
                        <small>{'Store crew test · completed'}</small>
                      </span>
                      <span className="pill g">{'Passed'}</span>
                    </div>
                    <div className="atcard atscore">
                      <span className="atsr">
                        {'Customer service'}
                        <span className="bar">
                          <i style={{ width: '90%' }} />
                        </span>
                        <small>{'90'}</small>
                      </span>{' '}
                      <span className="atsr">
                        {'Numeracy'}
                        <span className="bar">
                          <i style={{ width: '82%' }} />
                        </span>
                        <small>{'82'}</small>
                      </span>{' '}
                      <span className="atsr">
                        {'Situational test'}
                        <span className="bar">
                          <i style={{ width: '76%' }} />
                        </span>
                        <small>{'76'}</small>
                      </span>
                    </div>
                    <div className="atdoc">
                      <b>{'Offer letter — Store crew'}</b>
                      <i style={{ width: '90%' }} />
                      <i style={{ width: '76%' }} />
                      <i style={{ width: '84%' }} />
                      <i style={{ width: '52%' }} />
                      <span className="stamp">{'SENT'}</span>
                    </div>
                  </div>
                  <div className={`ats ${T(v.atC4)}`}>
                    <div className="ath">
                      <span>
                        <b>{'Pre-onboarding · Dewi S.'}</b>
                        <small>{'Starts Monday · Seminyak outlet'}</small>
                      </span>
                      <span className="pill b">{'3 of 4 done'}</span>
                    </div>
                    <div className="chk">
                      <span>
                        <i />
                        {'Documents uploaded'}
                        <em>{'KTP, NPWP'}</em>
                      </span>
                      <span>
                        <i />
                        {'Contract signed'}
                        <em>{'e-sign'}</em>
                      </span>
                      <span>
                        <i />
                        {'Uniform size confirmed'}
                        <em>{'M'}</em>
                      </span>
                      <span style={{ opacity: '.7' }}>
                        <i style={{ animation: 'none' }} />
                        {'Day-one schedule shared'}
                        <em>{'Due Fri'}</em>
                      </span>
                    </div>
                    <div className="atprog">
                      {'Ready for day one'}
                      <span className="bar">
                        <i />
                      </span>
                      {'75%'}
                    </div>
                  </div>
                  <div className={`ats ${T(v.atC5)}`}>
                    <div className="ath">
                      <span>
                        <b>{'Career site & sources'}</b>
                        <small>{'Last 30 days · 1,248 applicants'}</small>
                      </span>
                      <span className="pill g">{'Live'}</span>
                    </div>
                    <div className="atsrc">
                      <div className="atsite">
                        <span className="ahero">{'Join our stores'}</span>
                        <span className="j">
                          {'Store crew'}
                          <em>{'Apply →'}</em>
                        </span>
                        <span className="j">
                          {'Cashier'}
                          <em>{'Apply →'}</em>
                        </span>
                        <span className="j">
                          {'Supervisor'}
                          <em>{'Apply →'}</em>
                        </span>
                      </div>
                      <div className="atbars">
                        <b>{'Where candidates come from'}</b>{' '}
                        <span className="atsr">
                          {'Career site'}
                          <span className="bar">
                            <i style={{ width: '42%' }} />
                          </span>
                          <small>{'42%'}</small>
                        </span>{' '}
                        <span className="atsr">
                          {'Jobseeker App'}
                          <span className="bar">
                            <i style={{ width: '31%' }} />
                          </span>
                          <small>{'31%'}</small>
                        </span>{' '}
                        <span className="atsr">
                          {'Referral'}
                          <span className="bar">
                            <i style={{ width: '15%' }} />
                          </span>
                          <small>{'15%'}</small>
                        </span>{' '}
                        <span className="atsr">
                          {'Walk-in'}
                          <span className="bar">
                            <i style={{ width: '12%' }} />
                          </span>
                          <small>{'12%'}</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="pxnote">{'Illustrative app screens — names and figures are fictional.'}</p>
        </div>
      </section>
      <section id="ai" className="zb aiz" style={{ padding: '112px 0' }}>
        <div className="ct" style={{ position: 'relative' }}>
          <div
            className="rv"
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '760px' }}
          >
            <p className="eyb" style={{ color: 'var(--brand-2-300)' }}>
              {'Built-in AI'}
            </p>
            <h2 className="h2 onb">{'AI that helps your recruitment team.'}</h2>
          </div>
          <div className="aigrid">
            <div className="aic rv">
              <div className="aiv aiw" aria-hidden="true">
                <span className="aitag">{'Generating'}</span>
                <b>{'Barista — Jakarta Selatan'}</b>
                <span className="ail" style={{ width: '92%' }} />
                <span className="ail" style={{ width: '80%' }} />
                <span className="ail" style={{ width: '86%' }} />
                <span className="ail" style={{ width: '58%' }} />
                <div className="aiq">
                  <span>{'Q1 · Coffee experience?'}</span>
                  <span>{'Q2 · Weekend shifts?'}</span>
                </div>
              </div>
              <b>{'AI job posting & screening questions'}</b>
              <p>{'Draft job descriptions and screening questions based on what the role needs.'}</p>
            </div>
            <div className="aic rv">
              <div className="aiv" aria-hidden="true">
                <span className="aitag">{'Best matches'}</span>{' '}
                <span className="aim top">
                  <i style={{ background: '#ffd1ea' }}>{'AR'}</i>
                  <span>
                    {'Ayu R.'}
                    <span className="bar">
                      <em style={{ width: '96%' }} />
                    </span>
                  </span>
                  <small>{'96%'}</small>
                </span>{' '}
                <span className="aim">
                  <i style={{ background: '#cdd9ff' }}>{'KW'}</i>
                  <span>
                    {'Komang W.'}
                    <span className="bar">
                      <em style={{ width: '88%' }} />
                    </span>
                  </span>
                  <small>{'88%'}</small>
                </span>{' '}
                <span className="aim">
                  <i style={{ background: '#d3f8df' }}>{'DS'}</i>
                  <span>
                    {'Dewi S.'}
                    <span className="bar">
                      <em style={{ width: '74%' }} />
                    </span>
                  </span>
                  <small>{'74%'}</small>
                </span>
              </div>
              <b>{'AI candidate matching & recommendations'}</b>
              <p>{'Find candidates who fit the role by matching profiles, skills and experience with AI.'}</p>
            </div>
            <div className="aic rv">
              <div className="aiv" aria-hidden="true">
                <span className="aitag">{'Checking ID'}</span>
                <div className="aiid">
                  <span className="aiph" />
                  <span className="aiidl">
                    <i style={{ width: '70%' }} />
                    <i className="bad" style={{ width: '90%' }} />
                    <i style={{ width: '60%' }} />
                    <i style={{ width: '80%' }} />
                  </span>
                  <span className="aiscan" />
                </div>
                <span className="aiflag">{'⚠ Name doesn’t match the profile — review'}</span>
              </div>
              <b>{'AI document validation'}</b>
              <p>{'Check uploaded ID cards (KTP) and flag possible mismatches for further review.'}</p>
            </div>
          </div>
          <p className="ainote rv">
            {'AI recommendations support the evaluation — final decisions stay with your recruitment team.'}
          </p>
          <div className="aimore rv">
            <h3>{'More AI for a complete hiring process.'}</h3>
            <div className="aix">
              <span className="plan">{'Growth + Enterprise'}</span>
              <b>{'AI interview notetaker'}</b>
              <p>{'Summarise interviews and key points from recordings to make follow-up easier.'}</p>
            </div>
            <div className="aix">
              <span className="plan ent">{'Enterprise'}</span>
              <b>{'AI resume screening & assessment'}</b>
              <p>
                {
                  'Analyse CVs against the role’s requirements — with a view of experience, skills, strengths and competency gaps.'
                }
              </p>
            </div>
            <span data-theme="dark">
              <Jobseeker.Button hierarchy="secondary" size="lg" href="/pricing/" iconTrailing={v.icArrow}>
                {'Compare features by plan'}
              </Jobseeker.Button>
            </span>
          </div>
        </div>
      </section>
      <section id="hr" className="z1" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div
            className="rv"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxWidth: '760px',
              marginBottom: '48px',
            }}
          >
            <p className="eyb">{'Reporting & HR'}</p>
            <h2 className="h2">{'Track recruitment and manage your HR needs.'}</h2>
          </div>
          <div className="mngrid">
            <div className="rv">
              <div className="mnlist">
                <div className="mnrow">
                  <span className="mfic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M7 15l4-4 3 3 5-6" />
                    </svg>
                  </span>
                  <span>
                    <b>{'Sourcing & candidate reports'}</b>
                    <span className="d">{'Track candidate sources and recruitment activity.'}</span>
                  </span>
                  <span className="pl ">{'All plans'}</span>
                </div>
                <div className="mnrow">
                  <span className="mfic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="9" rx="1.5" />
                      <rect x="14" y="3" width="7" height="5" rx="1.5" />
                      <rect x="14" y="12" width="7" height="9" rx="1.5" />
                      <rect x="3" y="16" width="7" height="5" rx="1.5" />
                    </svg>
                  </span>
                  <span>
                    <b>{'Operational dashboard'}</b>
                    <span className="d">{'See a summary of recruitment operations.'}</span>
                  </span>
                  <span className="pl g">{'Growth + Enterprise'}</span>
                </div>
                <div className="mnrow">
                  <span className="mfic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <span>
                    <b>{'Recruitment analytics & SLA'}</b>
                    <span className="d">{'Analyse process performance and recruitment SLAs.'}</span>
                  </span>
                  <span className="pl e">{'Enterprise'}</span>
                </div>
                <div className="mnrow">
                  <span className="mfic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                    </svg>
                  </span>
                  <span>
                    <b>{'Basic ESS'}</b>
                    <span className="d">{'Basic self-service access for employees.'}</span>
                  </span>
                  <span className="pl g">{'Growth + Enterprise'}</span>
                </div>
                <div className="mnrow">
                  <span className="mfic">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 9h10M7 13h6" />
                    </svg>
                  </span>
                  <span>
                    <b>{'Basic HRIS'}</b>
                    <span className="d">
                      {'Core employee management, within the agreed implementation scope.'}
                    </span>
                  </span>
                  <span className="pl e">{'Enterprise'}</span>
                </div>
              </div>
              <div style={{ marginTop: '24px' }}>
                <Jobseeker.Button hierarchy="secondary" size="lg" href="/v2/contact/">
                  {'Discuss your HRIS needs'}
                </Jobseeker.Button>
              </div>
            </div>
            <div className="mndash rv" aria-hidden="true">
              <div className="mndh">
                {'Recruitment overview'}
                <em>{'Live'}</em>
              </div>
              <div className="mnk">
                <div>
                  <b>{'36'}</b>
                  <small>{'Open roles'}</small>
                </div>
                <div>
                  <b>{'1,248'}</b>
                  <small>{'Applicants'}</small>
                </div>
                <div>
                  <b>{'14d'}</b>
                  <small>{'Avg. time to hire'}</small>
                </div>
              </div>
              <div className="mnchart">
                <i style={{ height: '38%' }} />
                <i style={{ height: '52%' }} />
                <i style={{ height: '44%' }} />
                <i style={{ height: '66%' }} />
                <i style={{ height: '58%' }} />
                <i style={{ height: '80%' }} />
                <i style={{ height: '94%' }} />
              </div>
              <div className="mnsla">
                <div>
                  <span>{'SLA met this month'}</span>
                  <span>{'86%'}</span>
                </div>
                <span className="bar">
                  <i />
                </span>
              </div>
            </div>
          </div>
          <p className="pxnote">{'Illustrative previews — names and figures are fictional.'}</p>
        </div>
      </section>
      <section className="ctx">
        <div className="ct">
          <div className="ctxc rv">
            <div className="ctxbg" aria-hidden="true">
              <i className="b1" />
              <i className="b2" />
              <i className="b3" />
            </div>
            <div className="ctxl">
              <span className="ctxeyb">{'See it live'}</span>
              <h2 className="h2">{'See Jobseeker Software in action.'}</h2>
              <p className="lede">
                {
                  'Tell us about your hiring needs and process. We’ll walk you through the flows and features that matter most in a demo session.'
                }
              </p>
              <div className="ctxbtns">
                <Jobseeker.Button hierarchy="secondary" size="xl" href="/pricing/">
                  {'See plans & pricing'}
                </Jobseeker.Button>{' '}
                <span data-theme="dark">
                  <Jobseeker.Button hierarchy="secondary" size="xl" href="/demo/" iconTrailing={v.icArrow}>
                    {'Schedule a demo'}
                  </Jobseeker.Button>
                </span>
              </div>
            </div>
            <div className="ctxorb" aria-hidden="true">
              <span className="r1" />
              <span className="r2" />
              <div className="ctxrot">
                <span style={{ left: '50%', top: '0%' }}>
                  <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                </span>
                <span style={{ left: '97.6%', top: '34.5%' }}>
                  <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                </span>
                <span style={{ left: '79.4%', top: '90.5%' }}>
                  <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                </span>
                <span style={{ left: '20.6%', top: '90.5%' }}>
                  <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                </span>
                <span style={{ left: '2.4%', top: '34.5%' }}>
                  <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
                </span>
              </div>
              <div className="ctxhub">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                </svg>
              </div>
            </div>
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
                {L(v.amMsgs).map((m_1, i_1) => (
                  <React.Fragment key={i_1}>
                    {m_1?.isMe ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                          {T(m_1?.t)}
                        </Jobseeker.ChatMessage>
                      </>
                    ) : null}{' '}
                    {m_1?.isBot ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                          {T(m_1?.t)}
                        </Jobseeker.ChatMessage>{' '}
                        {m_1?.hasLink ? (
                          <>
                            <span style={{ marginLeft: '44px' }}>
                              <Jobseeker.Button
                                hierarchy="link-color"
                                size="sm"
                                href={A(m_1?.href)}
                                iconTrailing={v.icArrow}
                              >
                                {T(m_1?.link)}
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
                    {L(v.amSugs).map((sg_2, i_2) => (
                      <React.Fragment key={i_2}>
                        <Jobseeker.Button hierarchy="secondary" size="xs" onClick={sg_2?.go}>
                          {T(sg_2?.t)}
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
