// About us — concept 2 (Jobseeker DS)
// Generated from the design artboard About2.dc.html by tools/convert-design.mjs.
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
      { t: 'Jobseeker Software', x: 58.7, y: 29.3 },
      { t: 'Jobseeker Services', x: 43.1, y: 46.6 },
      { t: 'Jobseeker Academy', x: 54.8, y: 55.0 },
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
    this._ecoAt = Date.now();
    this._ecoI = setInterval(() => {
      if (!this._ecoHold && Date.now() - this._ecoAt > 3600) {
        this._ecoAt = Date.now();
        this.setState({ eco: (this.state.eco + 1) % 5, ecoK: (this.state.ecoK || 0) + 1 });
      }
    }, 300);
    const go = () => {
      if (this._cntI) return;
      const t0 = Date.now();
      this._cntI = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / 2000);
        this.setState({ cnt: p });
        if (p >= 1) clearInterval(this._cntI);
      }, 33);
    };
    const el = typeof document !== 'undefined' && document.getElementById('nmgrid');
    if (el && typeof IntersectionObserver !== 'undefined') {
      this._nmO = new IntersectionObserver(
        (es) => {
          if (es.some((e) => e.isIntersecting)) {
            go();
            this._nmO.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      this._nmO.observe(el);
    } else go();
    this._pinI = setInterval(() => {
      if (!this.state.paused) this.setState({ pin: (this.state.pin + 1) % this.PINS.length });
    }, 2600);
    this._amT1 = setTimeout(() => this.setState({ amHint: true }), 2500);
    this._amT2 = setTimeout(() => this.setState({ amHint: false }), 9000);
  }
  ecoPick(i) {
    this._ecoAt = Date.now();
    if (i !== this.state.eco) this.setState({ eco: i, ecoK: (this.state.ecoK || 0) + 1 });
  }
  componentWillUnmount() {
    clearInterval(this._ecoI);
    this._nmO && this._nmO.disconnect();
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
        aud: ['For HR teams', 'For companies', 'For SMEs', 'For jobseekers', 'For teams & individuals'][i],
        cls: s.eco === i ? 'on' : '',
        pos: { left: [50, 86.1, 72.3, 27.7, 13.9][i] + '%', top: [12, 38.3, 80.7, 80.7, 38.3][i] + '%' },
        bar: { animationName: (s.ecoK || 0) % 2 ? 'erfill' : 'erfill2' },
        hover: () => this.ecoPick(i),
      })),
      eL0: s.eco === 0 ? 'on' : '',
      eL1: s.eco === 1 ? 'on' : '',
      eL2: s.eco === 2 ? 'on' : '',
      eL3: s.eco === 3 ? 'on' : '',
      eL4: s.eco === 4 ? 'on' : '',
      ecoHold: () => {
        this._ecoHold = true;
      },
      ecoGo: () => {
        this._ecoHold = false;
        this._ecoAt = Date.now();
      },
      ...(() => {
        const o = {};
        [
          [3.9, 'M+', 1],
          [40, 'K+', 0],
          [1.8, 'M+', 1],
          [420, 'K+', 0],
        ].forEach(([v, u, dp], i) => {
          const p = Math.max(0, Math.min(1, (s.cnt || 0) * 1.2 - i * 0.05));
          const e = 1 - Math.pow(1 - p, 3);
          o['nm' + i] = (v * e).toFixed(dp) + u;
          o['nm' + i + 'cls'] = p >= 1 ? 'done' : '';
        });
        return o;
      })(),
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
            <img src="/images/97a3a64b375acf32e1a18c60dd7f3c5f.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'About Jobseeker Company'}</p>
            <h1 className="h1 rise d2">
              {'Connecting company needs with '}
              <em>{'job opportunities.'}</em>
            </h1>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="/v2/contact/">
                {'Contact us'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="#ecosystem">
                {'Explore our ecosystem'}
              </Jobseeker.Button>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'Part of the ecosystem: '}
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
        <div className="ct abintro">
          <span className="abyear rv" aria-hidden="true">
            {'2023'}
          </span>
          <p className="sbig rv">
            {
              'Founded in 2023, Jobseeker Company focuses on recruitment technology and workforce solutions in Indonesia — especially for operational and frontline roles. Our ecosystem spans software, recruitment services, workforce management and training.'
            }
          </p>
        </div>
      </section>
      <section id="ecosystem" className="z2" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div
            className="rv"
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '56px' }}
          >
            <p className="eyb">{'Our ecosystem'}</p>
            <h2 className="h2">{'Five products, one goal.'}</h2>
          </div>
          <div className="ecox" onMouseEnter={v.ecoHold} onMouseLeave={v.ecoGo}>
            <div className="eorb rv">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="38" className="ring" />
                <circle cx="50" cy="50" r="46" className="ring2" />
                <line x1="50" y1="50" x2="50" y2="12" className={v.eL0} />
                <line x1="50" y1="50" x2="86.1" y2="38.3" className={v.eL1} />
                <line x1="50" y1="50" x2="72.3" y2="80.7" className={v.eL2} />
                <line x1="50" y1="50" x2="27.7" y2="80.7" className={v.eL3} />
                <line x1="50" y1="50" x2="13.9" y2="38.3" className={v.eL4} />
              </svg>
              <div className="ehub" aria-hidden="true">
                <small>{'One goal'}</small>
                <b>
                  {'Jobseeker'}
                  <br />
                  {'Company'}
                </b>
              </div>
              {L(v.eco).map((e_1, i_1) => (
                <React.Fragment key={i_1}>
                  <button
                    type="button"
                    className={`enode ${T(e_1?.cls)}`}
                    style={S(e_1?.pos)}
                    aria-label={e_1?.name}
                    onClick={e_1?.hover}
                    onMouseEnter={e_1?.hover}
                  >
                    <img src={A(e_1?.logo)} alt="" />
                    <span>{T(e_1?.name)}</span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="elist rv">
              {L(v.eco).map((e_2, i_2) => (
                <React.Fragment key={i_2}>
                  <a
                    className={`erow ${T(e_2?.cls)}`}
                    href={A(e_2?.href)}
                    data-theme={e_2?.theme}
                    onMouseEnter={e_2?.hover}
                    onFocus={e_2?.hover}
                  >
                    <img src={A(e_2?.logo)} alt="" />{' '}
                    <span className="ertx">
                      <b>{T(e_2?.name)}</b>
                      <span className="erd">
                        <span>{T(e_2?.d)}</span>
                      </span>
                    </span>{' '}
                    <span className="erfor">{T(e_2?.aud)}</span>{' '}
                    <span className="erbar" aria-hidden="true">
                      <i style={S(e_2?.bar)} />
                    </span>
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="ecosum rv">
            {'Different solutions with the same goal: '}
            <b>{'matching companies with the right candidates'}</b>
            {' and supporting the growth of both.'}
          </p>
        </div>
      </section>
      <section className="z1" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div className="nmhead rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="eyb">{'In numbers'}</p>
              <h2 className="h2">{'A growing ecosystem.'}</h2>
            </div>
            <p className="lede">
              {'From the first application to the first day at work — the scale behind every match we make.'}
            </p>
          </div>
          <div className="nmgrid" id="nmgrid">
            <div className={`nm rv ${T(v.nm0cls)}`}>
              <div className="nmv" aria-hidden="true">
                <div className="nmdots">
                  <i style={{ '--i': '0' }} />
                  <i style={{ '--i': '1' }} />
                  <i style={{ '--i': '2' }} />
                  <i style={{ '--i': '3' }} />
                  <i style={{ '--i': '4' }} />
                  <i style={{ '--i': '5' }} />
                  <i style={{ '--i': '6' }} />
                  <i style={{ '--i': '7' }} />
                  <i style={{ '--i': '8' }} />
                  <i style={{ '--i': '9' }} />
                  <i style={{ '--i': '10' }} />
                  <i style={{ '--i': '11' }} />
                  <i style={{ '--i': '12' }} />
                  <i style={{ '--i': '13' }} />
                  <i style={{ '--i': '14' }} />
                  <i style={{ '--i': '15' }} />
                  <i style={{ '--i': '16' }} />
                  <i style={{ '--i': '17' }} />
                  <i style={{ '--i': '18' }} />
                  <i style={{ '--i': '19' }} />
                  <i style={{ '--i': '20' }} />
                  <i style={{ '--i': '21' }} />
                  <i style={{ '--i': '22' }} />
                  <i style={{ '--i': '23' }} />
                  <i style={{ '--i': '24' }} />
                  <i style={{ '--i': '25' }} />
                  <i style={{ '--i': '26' }} />
                  <i style={{ '--i': '27' }} />
                  <i style={{ '--i': '28' }} />
                  <i style={{ '--i': '29' }} />
                  <i style={{ '--i': '30' }} />
                  <i style={{ '--i': '31' }} />
                  <i style={{ '--i': '32' }} />
                  <i style={{ '--i': '33' }} />
                  <i style={{ '--i': '34' }} />
                  <i style={{ '--i': '35' }} />
                  <i style={{ '--i': '36' }} />
                  <i style={{ '--i': '37' }} />
                  <i style={{ '--i': '38' }} />
                  <i style={{ '--i': '39' }} />
                  <i style={{ '--i': '40' }} />
                  <i style={{ '--i': '41' }} />
                  <i style={{ '--i': '42' }} />
                  <i style={{ '--i': '43' }} />
                  <i style={{ '--i': '44' }} />
                  <i style={{ '--i': '45' }} />
                  <i style={{ '--i': '46' }} />
                  <i style={{ '--i': '47' }} />
                </div>
              </div>
              <b className="nmnum">{T(v.nm0)}</b>
              <span className="nml">{'Candidates'}</span>
              <span className="nms">{'in our talent database'}</span>
            </div>
            <div className={`nm rv ${T(v.nm1cls)}`}>
              <div className="nmv" aria-hidden="true">
                <div className="nmbiz">
                  <i style={{ '--i': '0' }} />
                  <i style={{ '--i': '1' }} />
                  <i style={{ '--i': '2' }} />
                  <i style={{ '--i': '3' }} />
                  <i style={{ '--i': '4' }} />
                  <i style={{ '--i': '5' }} />
                  <i style={{ '--i': '6' }} />
                  <i style={{ '--i': '7' }} />
                  <i style={{ '--i': '8' }} />
                  <i style={{ '--i': '9' }} />
                  <i style={{ '--i': '10' }} />
                  <i style={{ '--i': '11' }} />
                  <i style={{ '--i': '12' }} />
                  <i style={{ '--i': '13' }} />
                  <i style={{ '--i': '14' }} />
                  <i style={{ '--i': '15' }} />
                  <i style={{ '--i': '16' }} />
                  <i style={{ '--i': '17' }} />
                </div>
              </div>
              <b className="nmnum">{T(v.nm1)}</b>
              <span className="nml">{'Employers'}</span>
              <span className="nms">{'onboarded across industries'}</span>
            </div>
            <div className={`nm rv ${T(v.nm2cls)}`}>
              <div className="nmv" aria-hidden="true">
                <div className="nmfun">
                  <span>
                    <i style={{ width: '100%' }} />
                  </span>
                  <span>
                    <i style={{ width: '74%' }} />
                  </span>
                  <span>
                    <i style={{ width: '48%' }} />
                  </span>
                  <span>
                    <i style={{ width: '26%' }} />
                  </span>
                </div>
              </div>
              <b className="nmnum">{T(v.nm2)}</b>
              <span className="nml">{'Candidates processed'}</span>
              <span className="nms">{'through our hiring flows'}</span>
            </div>
            <div className={`nm rv ${T(v.nm3cls)}`}>
              <div className="nmv" aria-hidden="true">
                <div className="nmplace">
                  <div className="nmring">
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="48" className="trk" />
                      <circle cx="60" cy="60" r="48" className="val" pathLength="100" />
                    </svg>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                  </div>
                  <div className="nmtag">
                    <span>{'Hired'}</span>
                    <span>{'Onboarded'}</span>
                    <span>{'Day one ✓'}</span>
                  </div>
                </div>
              </div>
              <b className="nmnum">{T(v.nm3)}</b>
              <span className="nml">{'Candidates placed'}</span>
              <span className="nms">{'successfully into new roles'}</span>
            </div>
          </div>
          <p className="abnote">{'Figures as of [UPDATE DATE] — metric definitions pending approval.'}</p>
          <div className="abmore rv">
            <a href="/story/">
              <b>{'Our story'}</b>
              <span>{'How Jobseeker started and the AMING culture code.'}</span>
              <i aria-hidden="true">{'→'}</i>
            </a>{' '}
            <a href="/leadership/">
              <b>{'Leadership'}</b>
              <span>{'The team leading Jobseeker Company.'}</span>
              <i aria-hidden="true">{'→'}</i>
            </a>{' '}
            <a href="/press/">
              <b>{'Press & media'}</b>
              <span>{'News, announcements and media kit.'}</span>
              <i aria-hidden="true">{'→'}</i>
            </a>
          </div>
        </div>
      </section>
      <section id="join" className="ctx">
        <div className="ct">
          <div className="ctxc rv">
            <div className="ctxbg" aria-hidden="true">
              <i className="b1" />
              <i className="b2" />
              <i className="b3" />
            </div>
            <div className="ctxl">
              <span className="ctxeyb">{'We’re hiring'}</span>
              <h2 className="h2">{'Want to build a career with Jobseeker?'}</h2>
              <p className="lede">
                {'Explore opportunities to join our team — from business roles to technology and operations.'}
              </p>
              <div className="ctxbtns">
                <Jobseeker.Button
                  hierarchy="secondary"
                  size="xl"
                  href="/v2/careers/"
                  iconTrailing={v.icArrow}
                >
                  {'See careers at Jobseeker'}
                </Jobseeker.Button>
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
                {L(v.amMsgs).map((m_3, i_3) => (
                  <React.Fragment key={i_3}>
                    {m_3?.isMe ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                          {T(m_3?.t)}
                        </Jobseeker.ChatMessage>
                      </>
                    ) : null}{' '}
                    {m_3?.isBot ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                          {T(m_3?.t)}
                        </Jobseeker.ChatMessage>{' '}
                        {m_3?.hasLink ? (
                          <>
                            <span style={{ marginLeft: '44px' }}>
                              <Jobseeker.Button
                                hierarchy="link-color"
                                size="sm"
                                href={A(m_3?.href)}
                                iconTrailing={v.icArrow}
                              >
                                {T(m_3?.link)}
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
                    {L(v.amSugs).map((sg_4, i_4) => (
                      <React.Fragment key={i_4}>
                        <Jobseeker.Button hierarchy="secondary" size="xs" onClick={sg_4?.go}>
                          {T(sg_4?.t)}
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
