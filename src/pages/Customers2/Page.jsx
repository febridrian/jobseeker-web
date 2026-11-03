// Customers — concept 2 (Jobseeker DS)
// Generated from the design artboard Customers2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
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
      { t: 'Retail & F&B', x: 67.9, y: 54.5 },
      { t: 'Manufacturing', x: 40.2, y: 43.2 },
      { t: 'Multi-branch companies', x: 74.1, y: 29.8 },
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
  componentWillUnmount() {
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
            <img src="/images/2c6daee245953c6ba9fd8d95f3c9a2d6.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'Customers & industries'}</p>
            <h1 className="h1 rise d2">
              {'Supporting workforce needs '}
              <em>{'across industries.'}</em>
            </h1>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="/v2/contact/">
                {'Contact us'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="#industries">
                {'See industries'}
              </Jobseeker.Button>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'Industry: '}
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
      <section className="z1" style={{ padding: '112px 0 96px' }}>
        <div className="ct">
          <p className="sbig rv">
            {
              'From companies with many locations to large organisations, Jobseeker helps teams handle very different recruitment and workforce needs.'
            }
          </p>
        </div>
        <div className="mq" aria-label="Some of our customers">
          <div className="mqt">
            {L(v.clients).map((c_1, i_1) => (
              <React.Fragment key={i_1}>
                <span className="cl">
                  <img src={A(c_1?.src)} alt={c_1?.alt} />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="industries" className="z2" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div
            className="rv"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="eyb">{'Industries'}</p>
              <h2 className="h2">{'Built for how your industry hires.'}</h2>
            </div>
            <Jobseeker.Button hierarchy="link-color" size="lg" href="/v2/solutions/" iconTrailing={v.icArrow}>
              {'Explore solutions'}
            </Jobseeker.Button>
          </div>
          <div className="indgrid">
            <div className="ind rv">
              <div className="indtx">
                <span className="indic">
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
                    <path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M3 9h18M9 20v-6h6v6" />
                  </svg>
                </span>{' '}
                <b>{'Retail & F&B'}</b>
                <p>{'Recruit outlet staff, cashiers, crew and operational roles across many locations.'}</p>
                <div className="indroles">
                  <span>{'Store crew'}</span>
                  <span>{'Cashier'}</span>
                  <span>{'Barista'}</span>
                  <span>{'Outlet supervisor'}</span>
                </div>
              </div>
              <div className="indv" aria-hidden="true">
                <div className="rtgrid">
                  <span className="rt">
                    {'Kuta'}
                    <small>{'crew'}</small>
                    <span className="rtbar">
                      <i />
                    </span>
                  </span>{' '}
                  <span className="rt">
                    {'Seminyak'}
                    <small>{'cashier'}</small>
                    <span className="rtbar">
                      <i />
                    </span>
                  </span>{' '}
                  <span className="rt">
                    {'Ubud'}
                    <small>{'barista'}</small>
                    <span className="rtbar">
                      <i />
                    </span>
                  </span>{' '}
                  <span className="rt">
                    {'Denpasar'}
                    <small>{'crew'}</small>
                    <span className="rtbar">
                      <i />
                    </span>
                  </span>{' '}
                  <span className="rt">
                    {'Sanur'}
                    <small>{'supervisor'}</small>
                    <span className="rtbar">
                      <i />
                    </span>
                  </span>{' '}
                  <span className="rt">
                    {'Canggu'}
                    <small>{'crew'}</small>
                    <span className="rtbar">
                      <i />
                    </span>
                  </span>
                </div>
                <span className="cutoast">{'All 6 outlets staffed'}</span>
              </div>
            </div>
            <div className="ind rv">
              <div className="indtx">
                <span className="indic">
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
                    <path d="M2 20h20M4 20V10l5 3V10l5 3V6l6 4v10" />
                  </svg>
                </span>{' '}
                <b>{'Manufacturing'}</b>
                <p>
                  {
                    'Manage operational workforce needs, candidate selection and a more structured recruitment process.'
                  }
                </p>
                <div className="indroles">
                  <span>{'Production operator'}</span>
                  <span>{'QC staff'}</span>
                  <span>{'Machine operator'}</span>
                </div>
              </div>
              <div className="indv" aria-hidden="true">
                <span className="mfline" />
                <span className="mfdot" />
                <div className="mfpipe">
                  <span className="mfcol">
                    <b>{'240'}</b>
                    <span className="mfbar" />
                    {'Applied'}
                  </span>{' '}
                  <span className="mfcol">
                    <b>{'168'}</b>
                    <span className="mfbar" />
                    {'Screened'}
                  </span>{' '}
                  <span className="mfcol">
                    <b>{'96'}</b>
                    <span className="mfbar" />
                    {'Tested'}
                  </span>{' '}
                  <span className="mfcol">
                    <b>{'48'}</b>
                    <span className="mfbar" />
                    {'Hired'}
                  </span>
                </div>
              </div>
            </div>
            <div className="ind rv">
              <div className="indtx">
                <span className="indic">
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
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </span>{' '}
                <b>{'Logistics & distribution'}</b>
                <p>
                  {
                    'Find workers for warehouse operations, distribution and work sites spread across regions.'
                  }
                </p>
                <div className="indroles">
                  <span>{'Warehouse staff'}</span>
                  <span>{'Picker & packer'}</span>
                  <span>{'Driver'}</span>
                  <span>{'Admin'}</span>
                </div>
              </div>
              <div className="indv lgmap" aria-hidden="true">
                <svg viewBox="0 0 260 270" preserveAspectRatio="none">
                  <path className="rt1" d="M 50 60 C 130 40, 160 140, 185 170" />
                  <path className="rt2" d="M 185 170 C 170 220, 110 235, 70 220" style={{ opacity: '.5' }} />
                  <g>
                    <circle r="11" fill="#e4007e" />
                    <rect x="-5" y="-3.5" width="10" height="7" rx="1.5" fill="#fff" />
                    <animatemotion
                      dur="5s"
                      repeatCount="indefinite"
                      keyPoints="0;1;1"
                      keyTimes="0;0.8;1"
                      calcMode="spline"
                      keySplines="0.65 0 0.35 1;0 0 1 1"
                      path="M 50 60 C 130 40, 160 140, 185 170"
                    />
                  </g>
                </svg>{' '}
                <span className="lgnode" style={{ left: '19.2%', top: '22.2%' }}>
                  <i>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21V8l9-5 9 5v13M7 21v-8h10v8" />
                    </svg>
                  </i>
                  {'Main warehouse'}
                </span>{' '}
                <span className="lgnode n2 flip" style={{ left: '71.2%', top: '63%' }}>
                  <i>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21V8l9-5 9 5v13M7 21v-8h10v8" />
                    </svg>
                  </i>
                  {'Hub Surabaya'}
                </span>{' '}
                <span className="lgnode n3" style={{ left: '26.9%', top: '81.5%' }}>
                  <i>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21V8l9-5 9 5v13M7 21v-8h10v8" />
                    </svg>
                  </i>
                  {'Depot Bekasi'}
                </span>
              </div>
            </div>
            <div className="ind rv">
              <div className="indtx">
                <span className="indic">
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
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </span>{' '}
                <b>{'Multi-branch companies'}</b>
                <p>
                  {
                    'Help head office and branch teams track hiring needs and recruitment progress in one place.'
                  }
                </p>
                <div className="indroles">
                  <span>{'HQ HR'}</span>
                  <span>{'Branch managers'}</span>
                  <span>{'Area recruiters'}</span>
                </div>
              </div>
              <div className="indv" aria-hidden="true">
                <div className="mbdash">
                  <div className="mbhead">
                    {'Hiring progress by branch'}
                    <em>{'Live'}</em>
                  </div>
                  <span className="mbrow">
                    <span>
                      <span className="ok" />
                      {'Jakarta'}
                    </span>
                    <span className="mbbar">
                      <i style={{ width: '92%' }} />
                    </span>
                    <small>{'23/25'}</small>
                  </span>{' '}
                  <span className="mbrow">
                    <span>
                      <span className="ok" />
                      {'Bandung'}
                    </span>
                    <span className="mbbar">
                      <i style={{ width: '78%' }} />
                    </span>
                    <small>{'14/18'}</small>
                  </span>{' '}
                  <span className="mbrow">
                    <span>
                      <span className="ok" />
                      {'Surabaya'}
                    </span>
                    <span className="mbbar">
                      <i style={{ width: '64%' }} />
                    </span>
                    <small>{'9/14'}</small>
                  </span>{' '}
                  <span className="mbrow">
                    <span>
                      <span className="ok" />
                      {'Bali'}
                    </span>
                    <span className="mbbar">
                      <i style={{ width: '100%' }} />
                    </span>
                    <small>{'12/12'}</small>
                  </span>{' '}
                  <span className="mbrow">
                    <span>
                      <span className="ok" />
                      {'Medan'}
                    </span>
                    <span className="mbbar">
                      <i style={{ width: '50%' }} />
                    </span>
                    <small>{'5/10'}</small>
                  </span>
                  <div className="mbsum">
                    <span>{'All branches'}</span>
                    <b>{'63 of 79 roles filled'}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="pxnote">{'Illustrative previews — locations and figures are fictional.'}</p>
        </div>
      </section>
      <section id="stories" className="z1" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div
            className="rv"
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}
          >
            <p className="eyb">{'Customer story'}</p>
            <h2 className="h2">{'Real results, told by our customers.'}</h2>
          </div>
          <div className="cstory rv">
            <div className="csl">
              <span className="cstag">{'Placeholder — awaiting an approved customer story'}</span>
              <div className="csflow">
                <span>{'Challenge'}</span>
                <i>{'→'}</i>
                <span>{'Approach'}</span>
                <i>{'→'}</i>
                <span>{'Measurable result'}</span>
                <i>{'→'}</i>
                <span>{'Customer quote'}</span>
              </div>
              <h3>{'How [Company name] organised recruitment across [X] locations.'}</h3>
              <p>{'One customer-approved paragraph, using clear data and a clear time period.'}</p>
              <span>
                <Jobseeker.Button hierarchy="primary" size="lg" href="/customers/" iconTrailing={v.icArrow}>
                  {'Read customer story'}
                </Jobseeker.Button>
              </span>
            </div>
            <div className="csr">
              <div className="csm">
                <div>
                  <b>{'[X]%'}</b>
                  <span>{'faster time to hire'}</span>
                </div>
                <div>
                  <b>{'[X]'}</b>
                  <span>{'locations covered'}</span>
                </div>
                <div>
                  <b>{'[X]'}</b>
                  <span>{'hires in [period]'}</span>
                </div>
              </div>
              <p className="csq">{'[Approved quote from the customer about working with Jobseeker.]'}</p>
              <span className="csby">{'[Name], [Role] — [Company name]'}</span>
            </div>
          </div>
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
              <span className="ctxeyb">{'Let’s talk'}</span>
              <h2 className="h2">{'Not sure which solution fits your industry?'}</h2>
              <p className="lede">
                {
                  'Tell us about your locations and hiring needs — we’ll recommend the right mix of software and services.'
                }
              </p>
              <div className="ctxbtns">
                <Jobseeker.Button hierarchy="secondary" size="xl" href="/expert/">
                  {'Talk to an expert'}
                </Jobseeker.Button>{' '}
                <span data-theme="dark">
                  <Jobseeker.Button
                    hierarchy="secondary"
                    size="xl"
                    href="/v2/contact/"
                    iconTrailing={v.icArrow}
                  >
                    {'Contact us'}
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
                {L(v.amMsgs).map((m_2, i_2) => (
                  <React.Fragment key={i_2}>
                    {m_2?.isMe ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                          {T(m_2?.t)}
                        </Jobseeker.ChatMessage>
                      </>
                    ) : null}{' '}
                    {m_2?.isBot ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                          {T(m_2?.t)}
                        </Jobseeker.ChatMessage>{' '}
                        {m_2?.hasLink ? (
                          <>
                            <span style={{ marginLeft: '44px' }}>
                              <Jobseeker.Button
                                hierarchy="link-color"
                                size="sm"
                                href={A(m_2?.href)}
                                iconTrailing={v.icArrow}
                              >
                                {T(m_2?.link)}
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
                    {L(v.amSugs).map((sg_3, i_3) => (
                      <React.Fragment key={i_3}>
                        <Jobseeker.Button hierarchy="secondary" size="xs" onClick={sg_3?.go}>
                          {T(sg_3?.t)}
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
