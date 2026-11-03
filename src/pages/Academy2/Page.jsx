// Jobseeker Academy — concept 2 (Jobseeker DS)
// Generated from the design artboard Academy2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      pt: 0,
      ptK: 0,
      hw: 0,
      hwK: 0,
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
      { t: 'Jobseeker Academy', x: 50, y: 39.2 },
      { t: 'Develop', x: 81.8, y: 54.6 },
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
    this._hwAt = Date.now();
    this._hwI = setInterval(() => {
      if (!this._hwHold && Date.now() - this._hwAt > 5200) this.hwGo((this.state.hw + 1) % 4);
    }, 300);
    this._ptAt = Date.now();
    this._ptI = setInterval(() => {
      if (Date.now() - this._ptAt > 4600) this.ptGo((this.state.pt + 1) % 5);
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
  hwGo(i) {
    this._hwAt = Date.now();
    this.setState({ hw: i, hwK: this.state.hwK + 1 });
  }
  componentWillUnmount() {
    clearInterval(this._hwI);
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
        for (let k = 0; k < 5; k++) {
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
          hwBarKey: { animationName: s.hwK % 2 ? 'hwfill' : 'hwfill2' },
          hwHold: () => {
            this._hwHold = true;
          },
          hwRel: () => {
            this._hwHold = false;
            this._hwAt = Date.now();
          },
        };
        for (let k = 0; k < 4; k++) {
          o['hwC' + k] = s.hw === k ? 'on' : k < s.hw ? 'done' : '';
          o['hwOn' + k] = s.hw === k;
          o['hwGo' + k] = () => this.hwGo(k);
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
            <img src="/images/3461e8c0faece6ed9f3f3556e1671273.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'Jobseeker Academy · Training & upskilling'}</p>
            <h1 className="h1 rise d2">
              {'Practical skills '}
              <em>{'for the world of work.'}</em>
            </h1>
            <p className="hsub rise d3">
              {
                'Training that helps companies upskill their teams — and helps individuals get ready for what work needs.'
              }
            </p>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="/v2/contact/">
                {'Contact us'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="#company" iconTrailing={v.icArrow}>
                {'Discuss training'}
              </Jobseeker.Button>{' '}
              <a className="hlink" href="#programs">
                {'Explore programs →'}
              </a>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'Part of: '}
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
      <section id="programs" className="z2" style={{ padding: '112px 0' }}>
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
            <p className="eyb">{'Programs'}</p>
            <h2 className="h2">{'Training for teams and for individuals.'}</h2>
          </div>
          <div className="augrid">
            <div id="company" className="au rv">
              <div className="auv" aria-hidden="true">
                <div className="tm">
                  <div className="tmh">
                    {'Store team · Customer service'}
                    <em>{'Team readiness 82%'}</em>
                  </div>
                  <span className="tmr">
                    <i style={{ background: '#ffd1ea' }}>{'AR'}</i>
                    <span>
                      {'Ayu R.'}
                      <small>{'Store crew'}</small>
                    </span>
                    <span className="tmb">
                      <b style={{ width: '92%' }} />
                    </span>
                    <span className="pc">{'92%'}</span>
                  </span>{' '}
                  <span className="tmr">
                    <i style={{ background: '#cdd9ff' }}>{'KW'}</i>
                    <span>
                      {'Komang W.'}
                      <small>{'Cashier'}</small>
                    </span>
                    <span className="tmb">
                      <b style={{ width: '84%' }} />
                    </span>
                    <span className="pc">{'84%'}</span>
                  </span>{' '}
                  <span className="tmr">
                    <i style={{ background: '#d3f8df' }}>{'DS'}</i>
                    <span>
                      {'Dewi S.'}
                      <small>{'Supervisor'}</small>
                    </span>
                    <span className="tmb">
                      <b style={{ width: '76%' }} />
                    </span>
                    <span className="pc">{'76%'}</span>
                  </span>{' '}
                  <span className="tmr">
                    <i style={{ background: '#fef0c7' }}>{'BS'}</i>
                    <span>
                      {'Budi S.'}
                      <small>{'Store crew'}</small>
                    </span>
                    <span className="tmb">
                      <b style={{ width: '68%' }} />
                    </span>
                    <span className="pc">{'68%'}</span>
                  </span>
                  <div className="tmskills">
                    <span>{'Service greeting'}</span>
                    <span>{'Handling complaints'}</span>
                    <span>{'Upselling'}</span>
                  </div>
                </div>
              </div>
              <span className="autag">{'For companies'}</span>
              <h3>{'Develop your team’s skills to fit company needs.'}</h3>
              <p>
                {
                  'Training tailored to participants’ roles, experience levels and skill targets — with material that’s relevant to their day-to-day work.'
                }
              </p>
              <ul className="auchk">
                <li>{'Tailored to each role and experience level.'}</li>
                <li>{'Built around the skill targets you set.'}</li>
                <li>{'Material grounded in everyday work.'}</li>
              </ul>
              <div className="auft">
                <Jobseeker.Button hierarchy="primary" size="lg" href="/v2/contact/" iconTrailing={v.icArrow}>
                  {'Consult on corporate training'}
                </Jobseeker.Button>
              </div>
            </div>
            <div className="au rv">
              <div className="auv" aria-hidden="true">
                <div className="cs">
                  <b className="t">{'Customer service basics'}</b>
                  <small className="m">{'4 lessons · self-paced'}</small>{' '}
                  <span className="ls">
                    <i />
                    {'Greeting customers'}
                  </span>{' '}
                  <span className="ls">
                    <i />
                    {'Listening & asking'}
                  </span>{' '}
                  <span className="ls">
                    <i />
                    {'Handling complaints'}
                  </span>{' '}
                  <span className="ls">
                    <i />
                    {'Closing with a smile'}
                  </span>
                </div>
                <div className="rg">
                  <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="48" className="trk" />
                    <circle cx="60" cy="60" r="48" className="val" pathLength="100" />
                  </svg>
                  <span>
                    <b />
                    {'complete'}
                  </span>
                </div>
                <div className="cert">
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
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                    </svg>
                  </i>
                  <span>
                    {'Certificate earned'}
                    <small>{'Customer service'}</small>
                  </span>
                </div>
              </div>
              <span className="autag ind">{'For individuals'}</span>
              <h3>{'Get ready for your next opportunity.'}</h3>
              <p>
                {
                  'Build your skills through learning programs that are easier to access and relevant to what jobs need.'
                }
              </p>
              <ul className="auchk">
                <li>{'Learn at your own pace.'}</li>
                <li>{'Skills that match real job requirements.'}</li>
                <li>{'Earn a certificate when you finish.'}</li>
              </ul>
              <div className="auft">
                <Jobseeker.Button hierarchy="secondary" size="lg" href="/v2/app/" iconTrailing={v.icArrow}>
                  {'See programs for individuals'}
                </Jobseeker.Button>
              </div>
            </div>
          </div>
          <p className="pxnote">{'Illustrative previews — names, topics and figures are fictional.'}</p>
        </div>
      </section>
      <section className="z1" style={{ padding: '112px 0 96px' }}>
        <div className="ct">
          <div
            className="rv"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '56px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '760px' }}>
              <p className="eyb">{'Corporate training'}</p>
              <h2 className="h2">{'A program shaped around your team.'}</h2>
            </div>
            <Jobseeker.Button hierarchy="primary" size="lg" href="/v2/contact/" iconTrailing={v.icArrow}>
              {'Discuss a program'}
            </Jobseeker.Button>
          </div>
          <div className="hwgrid" onMouseEnter={v.hwHold} onMouseLeave={v.hwRel}>
            <ol className="hwsteps n4 rv">
              <li>
                <button type="button" className={`hws ${T(v.hwC0)}`} aria-pressed={v.hwOn0} onClick={v.hwGo0}>
                  <span className="hwn">{'1'}</span>
                  <span className="hwt">
                    <b>{'Who’s joining'}</b>
                    <span>{'Tell us about the participants — their roles and experience.'}</span>
                    <small>
                      <span>
                        <i>{'Roles'}</i>
                        <i>{'Experience level'}</i>
                        <i>{'Locations'}</i>
                      </span>
                    </small>
                  </span>
                  <span className="hwbar" aria-hidden="true">
                    <i style={S(v.hwBarKey)} />
                  </span>
                </button>
              </li>
              <li>
                <button type="button" className={`hws ${T(v.hwC1)}`} aria-pressed={v.hwOn1} onClick={v.hwGo1}>
                  <span className="hwn">{'2'}</span>
                  <span className="hwt">
                    <b>{'Skills to build'}</b>
                    <span>{'Agree on the skills you want the team to develop.'}</span>
                    <small>
                      <span>
                        <i>{'Skill gaps'}</i>
                        <i>{'Priorities'}</i>
                      </span>
                    </small>
                  </span>
                  <span className="hwbar" aria-hidden="true">
                    <i style={S(v.hwBarKey)} />
                  </span>
                </button>
              </li>
              <li>
                <button type="button" className={`hws ${T(v.hwC2)}`} aria-pressed={v.hwOn2} onClick={v.hwGo2}>
                  <span className="hwn">{'3'}</span>
                  <span className="hwt">
                    <b>{'Program targets'}</b>
                    <span>{'Set clear goals for what the program should achieve.'}</span>
                    <small>
                      <span>
                        <i>{'Measurable goals'}</i>
                        <i>{'Timeline'}</i>
                      </span>
                    </small>
                  </span>
                  <span className="hwbar" aria-hidden="true">
                    <i style={S(v.hwBarKey)} />
                  </span>
                </button>
              </li>
              <li>
                <button type="button" className={`hws ${T(v.hwC3)}`} aria-pressed={v.hwOn3} onClick={v.hwGo3}>
                  <span className="hwn">{'4'}</span>
                  <span className="hwt">
                    <b>{'Run the training'}</b>
                    <span>{'We propose and run the approach that fits.'}</span>
                    <small>
                      <span>
                        <i>{'Sessions'}</i>
                        <i>{'Attendance'}</i>
                        <i>{'Certificates'}</i>
                      </span>
                    </small>
                  </span>
                  <span className="hwbar" aria-hidden="true">
                    <i style={S(v.hwBarKey)} />
                  </span>
                </button>
              </li>
            </ol>
            <div className="hwv rv" aria-hidden="true">
              <div className={`hwp ${T(v.hwC0)}`}>
                <div className="hwc">
                  <div className="hwch">
                    <span>
                      <b>{'Participants'}</b>
                      <small>{'Retail client · 3 store areas'}</small>
                    </span>
                    <span className="hwpill">{'Step 1'}</span>
                  </div>
                  <div className="acro">
                    <span className="acr">
                      <i>
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
                        </svg>
                      </i>
                      <span>
                        {'Store crew'}
                        <small>{'0–2 years · entry level'}</small>
                      </span>
                      <b>{'24'}</b>
                    </span>{' '}
                    <span className="acr">
                      <i>
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
                        </svg>
                      </i>
                      <span>
                        {'Cashiers'}
                        <small>{'1–3 years'}</small>
                      </span>
                      <b>{'12'}</b>
                    </span>{' '}
                    <span className="acr">
                      <i>
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
                        </svg>
                      </i>
                      <span>
                        {'Store supervisors'}
                        <small>{'3+ years · lead a shift'}</small>
                      </span>
                      <b>{'6'}</b>
                    </span>
                  </div>
                </div>
                <span className="hwnote">{'✓ 42 participants across 3 roles'}</span>
              </div>
              <div className={`hwp ${T(v.hwC1)}`}>
                <div className="hwc">
                  <div className="hwch">
                    <span>
                      <b>{'Skills to build'}</b>
                      <small>{'From today’s level to the target'}</small>
                    </span>
                    <span className="hwpill">{'Step 2'}</span>
                  </div>
                  <div className="acgap">
                    <div className="aclg">
                      <span>{'Today'}</span>
                      <span>{'Target'}</span>
                    </div>
                    <div className="acgr">
                      {'Customer service'}
                      <span className="actr">
                        <i className="to" style={{ width: '85%' }} />
                        <i className="now" style={{ width: '55%' }} />
                      </span>
                      <small>{'55 → 85'}</small>
                    </div>
                    <div className="acgr">
                      {'Handling complaints'}
                      <span className="actr">
                        <i className="to" style={{ width: '80%' }} />
                        <i className="now" style={{ width: '40%' }} />
                      </span>
                      <small>{'40 → 80'}</small>
                    </div>
                    <div className="acgr">
                      {'Upselling'}
                      <span className="actr">
                        <i className="to" style={{ width: '70%' }} />
                        <i className="now" style={{ width: '35%' }} />
                      </span>
                      <small>{'35 → 70'}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`hwp ${T(v.hwC2)}`}>
                <div className="hwc">
                  <div className="hwch">
                    <span>
                      <b>{'Program targets'}</b>
                      <small>{'Agreed with your team'}</small>
                    </span>
                    <span className="hwpill">{'Step 3'}</span>
                  </div>
                  <div className="actg">
                    <div>
                      <b>{'−30%'}</b>
                      <small>{'Complaint resolution time'}</small>
                      <em>{'Measurable'}</em>
                    </div>
                    <div>
                      <b>{'85+'}</b>
                      <small>{'Mystery shopper score'}</small>
                      <em>{'Measurable'}</em>
                    </div>
                    <div>
                      <b>{'95%'}</b>
                      <small>{'Program completion'}</small>
                      <em>{'Measurable'}</em>
                    </div>
                  </div>
                </div>
                <span className="hwnote">{'✓ Targets set · 8-week program'}</span>
              </div>
              <div className={`hwp ${T(v.hwC3)}`}>
                <div className="hwc">
                  <div className="hwch">
                    <span>
                      <b>{'Training schedule'}</b>
                      <small>{'Week 5 of 8 · on track'}</small>
                    </span>
                    <span className="hwpill g">{'Running'}</span>
                  </div>
                  <div className="gantt">
                    <div className="gwk">
                      <span />
                      <span>{'Wk 1–2'}</span>
                      <span>{'Wk 3–4'}</span>
                      <span>{'Wk 5–6'}</span>
                      <span>{'Wk 7–8'}</span>
                    </div>
                    <div className="grow">
                      {'Classroom'}
                      <span className="gtrack">
                        <i style={{ left: '0', width: '45%' }} />
                      </span>
                    </div>
                    <div className="grow">
                      {'On-the-job'}
                      <span className="gtrack">
                        <i style={{ left: '25%', width: '55%' }} />
                      </span>
                    </div>
                    <div className="grow">
                      {'Coaching'}
                      <span className="gtrack">
                        <i style={{ left: '45%', width: '45%' }} />
                      </span>
                    </div>
                    <div className="grow">
                      {'Assessment'}
                      <span className="gtrack">
                        <i style={{ left: '80%', width: '20%' }} />
                      </span>
                    </div>
                  </div>
                  <div className="acatt">
                    {'Attendance'}
                    <span className="bar">
                      <i />
                    </span>
                    {'92%'}
                  </div>
                </div>
                <span className="hwtoast">
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
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                    </svg>
                  </i>
                  <span>
                    {'18 certificates issued'}
                    <small>{'First cohort completed'}</small>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tpq" aria-label="Example training topics">
          <div className="tpt">
            <span className="tp">{'Customer service'}</span>
            <span className="tp">{'Food safety'}</span>
            <span className="tp">{'Store leadership'}</span>
            <span className="tp">{'Sales skills'}</span>
            <span className="tp">{'Cashier operations'}</span>
            <span className="tp">{'Workplace communication'}</span>
            <span className="tp">{'Customer service'}</span>
            <span className="tp">{'Food safety'}</span>
            <span className="tp">{'Store leadership'}</span>
            <span className="tp">{'Sales skills'}</span>
            <span className="tp">{'Cashier operations'}</span>
            <span className="tp">{'Workplace communication'}</span>
          </div>
        </div>
        <div className="tpq r" aria-hidden="true">
          <div className="tpt">
            <span className="tp">{'Team supervision'}</span>
            <span className="tp">{'Digital skills'}</span>
            <span className="tp">{'Interview readiness'}</span>
            <span className="tp">{'Workplace safety'}</span>
            <span className="tp">{'Time management'}</span>
            <span className="tp">{'Problem solving'}</span>
            <span className="tp">{'Team supervision'}</span>
            <span className="tp">{'Digital skills'}</span>
            <span className="tp">{'Interview readiness'}</span>
            <span className="tp">{'Workplace safety'}</span>
            <span className="tp">{'Time management'}</span>
            <span className="tp">{'Problem solving'}</span>
          </div>
        </div>
        <div className="ct">
          <p className="pxnote">{'Example topics — final programs are set with each company.'}</p>
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
              <span className="ctxeyb">{'Corporate training'}</span>
              <h2 className="h2">{'Want to set up a training program for your team?'}</h2>
              <p className="lede">
                {
                  'Tell us who the participants are, the skills you want to develop and your program targets. Our team is ready to discuss the right approach.'
                }
              </p>
              <div className="ctxbtns">
                <Jobseeker.Button
                  hierarchy="secondary"
                  size="xl"
                  href="/v2/contact/"
                  iconTrailing={v.icArrow}
                >
                  {'Contact us'}
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
