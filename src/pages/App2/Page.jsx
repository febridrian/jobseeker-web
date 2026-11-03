// Jobseeker App (Looking for a job?) — concept 2 (Jobseeker DS)
// Generated from the design artboard App2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      pt: 0,
      ptK: 0,
      wf: 0,
      wfK: 0,
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
      { t: 'Video Profile', x: 75.6, y: 56.5 },
      { t: 'Application Tracking', x: 43.7, y: 34.5 },
      { t: 'Recruiter Chat', x: 67.7, y: 23.3 },
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
    this._wfAt = Date.now();
    this._wfI = setInterval(() => {
      if (!this._wfHold && Date.now() - this._wfAt > 5400) this.wfGo((this.state.wf + 1) % 4);
    }, 300);
    this._ptAt = Date.now();
    this._ptI = setInterval(() => {
      if (Date.now() - this._ptAt > 4600) this.ptGo((this.state.pt + 1) % 4);
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
  ptGo(i) {
    this._ptAt = Date.now();
    this.setState({ pt: i, ptK: this.state.ptK + 1 });
  }
  wfGo(i) {
    this._wfAt = Date.now();
    this.setState({ wf: i, wfK: this.state.wfK + 1 });
  }
  componentWillUnmount() {
    clearInterval(this._wfI);
    clearInterval(this._ptI);
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
      ...(() => {
        const o = { ptBarKey: { animationName: s.ptK % 2 ? 'ptfill' : 'ptfill2' } };
        for (let k = 0; k < 4; k++) {
          o['ptC' + k] = s.pt === k ? 'on' : '';
          o['ptOn' + k] = s.pt === k;
          o['ptGo' + k] = () => this.ptGo(k);
          o['ptS' + k] = s.pt === k ? 'on' : '';
        }
        return o;
      })(),
      ...this.amVals(),
      ...(() => {
        const o = {
          wfBarKey: { animationName: s.wfK % 2 ? 'wffill' : 'wffill2' },
          wfHold: () => {
            this._wfHold = true;
          },
          wfRel: () => {
            this._wfHold = false;
            this._wfAt = Date.now();
          },
        };
        for (let k = 0; k < 4; k++) {
          o['wfC' + k] = s.wf === k ? 'on' : '';
          o['wfOn' + k] = s.wf === k;
          o['wfGo' + k] = () => this.wfGo(k);
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
            <img src="/images/5a7ad9cc4739ce9747fdb08c759f0878.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'Jobseeker App · For jobseekers'}</p>
            <h1 className="h1 rise d2">
              {'Find your next job, '}
              <em>{'your way.'}</em>
            </h1>
            <p className="hsub rise d3">
              {
                'Find roles by location and experience, introduce yourself with video, and submit and track applications — all in Jobseeker App.'
              }
            </p>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="#get">
                {'Download Jobseeker App'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="/jobs/" iconTrailing={v.icArrow}>
                {'Find jobs'}
              </Jobseeker.Button>{' '}
              <a className="hlink" href="/v2/contact/">
                {'Contact us →'}
              </a>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'In the app: '}
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
      <section id="how" className="z2" style={{ padding: '112px 0' }}>
        <div className="ct ptgrid">
          <div className="rv">
            <p className="eyb">{'How it works'}</p>
            <h2 className="h2" style={{ marginTop: '12px' }}>
              {'Everything you need to land your next job.'}
            </h2>
            <div className="pttabs" role="tablist" aria-label="Jobseeker App features">
              <button
                type="button"
                role="tab"
                className={`pttab ${T(v.ptC0)}`}
                aria-selected={v.ptOn0}
                onClick={v.ptGo0}
              >
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
                    <rect x="2" y="5" width="15" height="14" rx="2" />
                    <path d="M17 10l5-3v10l-5-3z" />
                  </svg>
                </span>
                <span className="pttx">
                  <b>{'Video profile'}</b>
                  <span>{'Show more than a traditional CV.'}</span>
                </span>
                <span className="ptbar" aria-hidden="true">
                  <i style={S(v.ptBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`pttab ${T(v.ptC1)}`}
                aria-selected={v.ptOn1}
                onClick={v.ptGo1}
              >
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
                    <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span className="pttx">
                  <b>{'Location-based discovery'}</b>
                  <span>{'Find relevant jobs near you.'}</span>
                </span>
                <span className="ptbar" aria-hidden="true">
                  <i style={S(v.ptBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`pttab ${T(v.ptC2)}`}
                aria-selected={v.ptOn2}
                onClick={v.ptGo2}
              >
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
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </span>
                <span className="pttx">
                  <b>{'Application tracking'}</b>
                  <span>{'Follow the progress of your applications in the app.'}</span>
                </span>
                <span className="ptbar" aria-hidden="true">
                  <i style={S(v.ptBarKey)} />
                </span>
              </button>{' '}
              <button
                type="button"
                role="tab"
                className={`pttab ${T(v.ptC3)}`}
                aria-selected={v.ptOn3}
                onClick={v.ptGo3}
              >
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
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span className="pttx">
                  <b>{'Recruiter chat'}</b>
                  <span>{'Connect directly for recruitment follow-up.'}</span>
                </span>
                <span className="ptbar" aria-hidden="true">
                  <i style={S(v.ptBarKey)} />
                </span>
              </button>
            </div>
          </div>
          <div className="ptr rv" aria-hidden="true">
            <div className="ph2">
              <div className={`phs ${T(v.ptS0)}`}>
                <div className="phtop">
                  {'Video profile'}
                  <small>{'Step 2 of 3'}</small>
                </div>
                <div className="rec">
                  <span className="frame" />
                  <span className="face" />
                  <span className="rd">{'REC 0:18 / 0:30'}</span>
                  <span className="tip">{'Tip: say your name, the role you want and your experience.'}</span>
                  <span className="pg">
                    <i />
                  </span>
                </div>
                <span className="recbtn">
                  <i />
                </span>
              </div>
              <div className={`phs ${T(v.ptS1)}`}>
                <div className="phtop">
                  {'Jobs near you'}
                  <small>{'Kuta, Bali'}</small>
                </div>
                <div className="jmapx">
                  <span className="rad" />
                  <span className="me" />
                  <span className="jb" style={{ left: '30%', top: '32%' }}>
                    {'Barista'}
                  </span>
                  <span className="jb" style={{ left: '72%', top: '30%' }}>
                    {'Cashier'}
                  </span>
                  <span className="jb" style={{ left: '66%', top: '74%' }}>
                    {'Store crew'}
                  </span>
                </div>
                <span className="crow">
                  <i style={{ background: '#d3f8df' }}>{'BA'}</i>
                  <span>
                    {'Barista'}
                    <small>{'Café in Kuta · 1.2 km'}</small>
                  </span>
                  <em>{'Verified'}</em>
                </span>{' '}
                <span className="crow">
                  <i style={{ background: '#cdd9ff' }}>{'CA'}</i>
                  <span>
                    {'Cashier'}
                    <small>{'Supermarket · 2.0 km'}</small>
                  </span>
                  <em>{'Verified'}</em>
                </span>
              </div>
              <div className={`phs ${T(v.ptS2)}`}>
                <div className="phtop">
                  {'My applications'}
                  <small>{'3 active'}</small>
                </div>
                <div className="trk">
                  <b>{'Barista · Café in Kuta'}</b>
                  <small>{'Applied 2 days ago'}</small>
                  <div className="tsteps">
                    <span className="d">
                      <i />
                      {'Applied'}
                    </span>
                    <span className="d">
                      <i />
                      {'Reviewed'}
                    </span>
                    <span className="c">
                      <i />
                      {'Interview'}
                    </span>
                    <span>
                      <i />
                      {'Offer'}
                    </span>
                  </div>
                </div>
                <span className="apr2">
                  <span>
                    {'Cashier'}
                    <small>{'Supermarket · Kuta'}</small>
                  </span>
                  <em>{'Reviewed'}</em>
                </span>{' '}
                <span className="apr2">
                  <span>
                    {'Store crew'}
                    <small>{'Minimarket · Denpasar'}</small>
                  </span>
                  <em className="g">{'Interview Fri'}</em>
                </span>
              </div>
              <div className={`phs ${T(v.ptS3)}`}>
                <div className="phtop">
                  {'Recruiter · Café in Kuta'}
                  <small>{'Online'}</small>
                </div>
                <span className="bub them">
                  {'Hi Ayu! We liked your video profile. Can you join an interview on Friday?'}
                </span>{' '}
                <span className="bub me">{'Yes, of course! What time works?'}</span>{' '}
                <span className="bub them">{'10:00 at our Kuta café. Bring your KTP.'}</span>{' '}
                <span className="bub me">{'Great, see you Friday 🙏'}</span>
                <div className="chin">
                  {'Type a message'}
                  <i>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <span className="ptfl f1">
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
                  <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </i>
              <span>
                {'New match nearby'}
                <small>{'Barista · 1.2 km'}</small>
              </span>
            </span>{' '}
            <span className="ptfl f2">
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
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </i>
              <span>
                {'Interview scheduled'}
                <small>{'Friday · 10:00'}</small>
              </span>
            </span>
          </div>
        </div>
        <div className="ct">
          <div className="webnote rv">
            <span>
              {'Jobs on our Careers and Client openings pages are also applied for through the app.'}
            </span>
            <div>
              <Jobseeker.Button hierarchy="secondary" size="md" href="/v2/careers/">
                {'Careers at Jobseeker'}
              </Jobseeker.Button>
              <Jobseeker.Button hierarchy="secondary" size="md" href="/jobs/">
                {'Client openings'}
              </Jobseeker.Button>
            </div>
          </div>
          <p className="pxnote">{'Illustrative app screens — names and details are fictional.'}</p>
        </div>
      </section>
      <section className="z1" style={{ padding: '112px 0' }}>
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
            <p className="eyb">{'Two apps, two audiences'}</p>
            <h2 className="h2">{'Jobseeker App for candidates. Jobseeker Partners for employers.'}</h2>
          </div>
          <div className="vsgrid">
            <a className="vs me rv" href="#get">
              <div className="vsh">
                <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                <span>
                  <small>{'For people looking for work'}</small>
                  <b>{'Jobseeker App'}</b>
                </span>
              </div>
              <ul>
                <li>{'Find jobs near you'}</li>
                <li>{'Introduce yourself with a video profile'}</li>
                <li>{'Apply and track every application'}</li>
                <li>{'Chat with recruiters'}</li>
              </ul>
              <span className="go">{'Download Jobseeker App →'}</span>
            </a>
            <div className="vsmid" aria-hidden="true">
              <span>{'VS'}</span>
            </div>
            <a className="vs rv" href="/v2/partners/">
              <div className="vsh">
                <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                <span>
                  <small>{'For businesses hiring staff'}</small>
                  <b>{'Jobseeker Partners'}</b>
                </span>
              </div>
              <ul>
                <li>{'Post jobs from your phone'}</li>
                <li>{'See candidates near your business'}</li>
                <li>{'Watch video profiles'}</li>
                <li>{'Chat with candidates directly'}</li>
              </ul>
              <span className="go">{'Hiring for your business? Explore Jobseeker Partners →'}</span>
            </a>
          </div>
          <p className="vsnote rv">{'They are separate applications — download the one that fits you.'}</p>
        </div>
      </section>
      <section id="get" className="ctx">
        <div className="ct">
          <div className="ctxc rv">
            <div className="ctxbg" aria-hidden="true">
              <i className="b1" />
              <i className="b2" />
              <i className="b3" />
            </div>
            <div className="ctxl">
              <span className="ctxeyb">{'For jobseekers'}</span>
              <h2 className="h2">{'Find your next job today.'}</h2>
              <p className="lede">
                {'Download Jobseeker App, record your video profile and apply to jobs near you.'}
              </p>
              <div className="ctxbtns">
                <div className="stores">
                  <a className="asb" href="#get" aria-label="Get it on Google Play">
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M6 3.5v17l14-8.5z"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      <small>{'GET IT ON'}</small>
                      <b>{'Google Play'}</b>
                    </span>
                  </a>{' '}
                  <a className="asb" href="#get" aria-label="Download on the App Store">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                      <path d="M10.5 18.5h3" />
                    </svg>
                    <span>
                      <small>{'Download on the'}</small>
                      <b>{'App Store'}</b>
                    </span>
                  </a>
                </div>
                <span data-theme="dark">
                  <Jobseeker.Button hierarchy="secondary" size="xl" href="/v2/contact/">
                    {'Questions? Contact us'}
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
