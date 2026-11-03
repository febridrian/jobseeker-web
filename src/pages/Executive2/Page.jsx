// Executive Search — concept 2 (Jobseeker DS)
// Generated from the design artboard Executive2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      tr: 0,
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
      { t: 'Executive Search', x: 51.4, y: 19 },
      { t: 'Talent Augmentation', x: 47.5, y: 64.7 },
      { t: 'Outsourcing', x: 80.4, y: 39.5 },
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
      if (!this._hwHold && Date.now() - this._hwAt > 5200) this.hwGo((this.state.hw + 1) % 3);
    }, 300);
    const t0 = Date.now();
    this._trI = setInterval(() => {
      const t = ((Date.now() - t0) / 1000) % 12;
      this.setState({ tr: Math.min(1, t / 8) });
    }, 100);
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
  hwGo(i) {
    this._hwAt = Date.now();
    this.setState({ hw: i, hwK: this.state.hwK + 1 });
  }
  componentWillUnmount() {
    clearInterval(this._hwI);
    clearInterval(this._trI);
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
        const e = 1 - Math.pow(1 - s.tr, 2);
        const P = Math.round(5 * e);
        const C = [
          ['RS', 'Rina S.', 'COO · FMCG · 14 yrs', '#ffd1ea'],
          ['HW', 'Hendra W.', 'Ops Director · Retail · 12 yrs', '#cdd9ff'],
          ['MP', 'Maya P.', 'GM · F&B group · 11 yrs', '#d3f8df'],
        ];
        return {
          trPlaced: P,
          trSourced: Math.round(64 * Math.min(1, e * 1.4)),
          trScreened: Math.round(28 * Math.min(1, e * 1.25)),
          trInterviewed: Math.round(11 * Math.min(1, e * 1.1)),
          trBar: { width: (P / 5) * 100 + '%' },
          trStatus: P >= 5 ? 'Shortlist ready' : 'Searching',
          trLocs: C.map(([ini, t, m, bg], k) => {
            const st = e > 0.85 - k * 0.15 ? 2 : e > 0.35 ? 1 : 0;
            return {
              ini,
              t,
              m,
              bg: { background: bg },
              v: ['Approached', 'Interviewing', 'Shortlisted'][st],
              cls: 's' + st,
            };
          }),
        };
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
        for (let k = 0; k < 3; k++) {
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
            <img src="/images/7c821539daad9a387f3bcd098ba58bde.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'Jobseeker Services · Executive Search'}</p>
            <h1 className="h1 rise d2">
              {'Find the right candidate '}
              <em>{'for strategic roles.'}</em>
            </h1>
            <p className="hsub rise d3">
              {
                'We find and select candidates for managerial, specialist and C-level roles — from understanding the role and reaching potential candidates to preparing a shortlist.'
              }
            </p>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="/v2/contact/">
                {'Discuss your role'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="#process">
                {'How it works'}
              </Jobseeker.Button>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'Jobseeker Services: '}
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
      <section className="z2" style={{ padding: '112px 0' }}>
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
            <p className="eyb">{'Roles we search for'}</p>
            <h2 className="h2">{'The hires that shape your business.'}</h2>
          </div>
          <div className="scgrid">
            <div className="tsc rv">
              <div className="scv" aria-hidden="true">
                <div className="org">
                  <svg viewBox="0 0 300 180" preserveAspectRatio="none">
                    <path d="M150 40 V70 M70 70 H230 M70 70 V110 M150 70 V110 M230 70 V110" />
                  </svg>
                  <span className="ond" style={{ left: '50%', top: '22%' }}>
                    {'CEO'}
                  </span>
                  <span className="ond" style={{ left: '23.3%', top: '61%' }}>
                    {'OPS'}
                  </span>
                  <span className="ond hot" style={{ left: '50%', top: '61%' }}>
                    {'?'}
                  </span>
                  <span className="ond fill" style={{ left: '50%', top: '61%' }}>
                    {'GM'}
                  </span>
                  <span className="ond" style={{ left: '76.7%', top: '61%' }}>
                    {'FIN'}
                  </span>
                </div>
                <span className="scchip">{'Area manager · filled'}</span>
              </div>
              <b>{'Managerial roles'}</b>
              <p>{'Area, operations and general managers who lead teams and locations day to day.'}</p>
            </div>
            <div className="tsc rv">
              <div className="scv" aria-hidden="true">
                <div className="skm">
                  <span className="skr top">
                    <span>{'HR analytics'}</span>
                    <span className="skb">
                      <i style={{ width: '94%' }} />
                    </span>
                    <small>{'94%'}</small>
                  </span>
                  <span className="skr">
                    <span>{'Payroll systems'}</span>
                    <span className="skb">
                      <i style={{ width: '86%' }} />
                    </span>
                    <small>{'86%'}</small>
                  </span>
                  <span className="skr">
                    <span>{'Labour law'}</span>
                    <span className="skb">
                      <i style={{ width: '78%' }} />
                    </span>
                    <small>{'78%'}</small>
                  </span>
                  <span className="skr">
                    <span>{'Stakeholders'}</span>
                    <span className="skb">
                      <i style={{ width: '70%' }} />
                    </span>
                    <small>{'70%'}</small>
                  </span>
                </div>
              </div>
              <b>{'Specialist roles'}</b>
              <p>
                {
                  'Experts with specific skills and experience that are hard to find through regular channels.'
                }
              </p>
            </div>
            <div className="tsc rv">
              <div className="scv" aria-hidden="true">
                <div className="cfx">
                  <span className="cflock">{'🔒 Confidential search'}</span>
                  <span className="cfr">
                    <i />
                    {'Candidate A'}
                    <em>{'CFO · 15 yrs'}</em>
                  </span>
                  <span className="cfr">
                    <i />
                    {'Candidate B'}
                    <em>{'CFO · 12 yrs'}</em>
                  </span>
                  <span className="cfr">
                    <i />
                    {'Candidate C'}
                    <em>{'Finance Dir · 14 yrs'}</em>
                  </span>
                </div>
              </div>
              <b>{'C-level roles'}</b>
              <p>{'Senior leadership searches handled discreetly, from first conversation to shortlist.'}</p>
            </div>
          </div>
          <div className="fit rv">
            <small>{'Good fit for'}</small>
            <span>{'Leadership, specialist or strategic recruitment needs.'}</span>
          </div>
        </div>
      </section>
      <section className="zb aiz" style={{ padding: '112px 0' }}>
        <div className="ct trgrid" style={{ position: 'relative' }}>
          <div className="trl rv">
            <p className="eyb" style={{ color: 'var(--brand-2-300)' }}>
              {'From brief to shortlist'}
            </p>
            <h2 className="h2 onb">{'A focused search, not a pile of CVs.'}</h2>
            <p>
              {
                'We start with what the role really needs, reach out to potential candidates — including people who aren’t actively looking — and bring you a shortlist of selected candidates.'
              }
            </p>
            <ul className="trlist">
              <li>{'Understanding the role, the team and what success looks like.'}</li>
              <li>{'Reaching potential candidates through our network and direct approach.'}</li>
              <li>{'A shortlist of candidates who’ve been assessed against the brief.'}</li>
            </ul>
          </div>
          <div className="trcard rv" aria-hidden="true">
            <div className="trh">
              <span>
                <b>{'Head of Operations'}</b>
                <small>{'Retail group · Jakarta · confidential'}</small>
              </span>
              <em>{T(v.trStatus)}</em>
            </div>
            <div className="trbig">
              <b>{T(v.trPlaced)}</b>
              <span>{'/ 5 shortlisted'}</span>
            </div>
            <span className="trbar">
              <i style={S(v.trBar)} />
            </span>
            <div className="trfun">
              <div>
                <b>{T(v.trSourced)}</b>
                <small>{'Longlist'}</small>
              </div>
              <div>
                <b>{T(v.trScreened)}</b>
                <small>{'Approached'}</small>
              </div>
              <div>
                <b>{T(v.trInterviewed)}</b>
                <small>{'Assessed'}</small>
              </div>
              <div>
                <b>{T(v.trPlaced)}</b>
                <small>{'Shortlist'}</small>
              </div>
            </div>
            <div className="trlocs">
              {L(v.trLocs).map((l_1, i_1) => (
                <React.Fragment key={i_1}>
                  <span className="trloc cand">
                    <i className="av" style={S(l_1?.bg)}>
                      {T(l_1?.ini)}
                    </i>
                    <span>
                      {T(l_1?.t)}
                      <small>{T(l_1?.m)}</small>
                    </span>
                    <span className={`st ${T(l_1?.cls)}`}>{T(l_1?.v)}</span>
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="ct" style={{ position: 'relative' }}>
          <p className="pxnote" style={{ color: 'var(--text-secondary_on-brand)' }}>
            {'Illustrative example — names and figures are fictional.'}
          </p>
        </div>
      </section>
      <section id="process" className="z1" style={{ padding: '112px 0' }}>
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
              <p className="eyb">{'How we work'}</p>
              <h2 className="h2">{'We start by understanding what your company needs.'}</h2>
            </div>
            <Jobseeker.Button hierarchy="primary" size="lg" href="/v2/contact/" iconTrailing={v.icArrow}>
              {'Start a discussion'}
            </Jobseeker.Button>
          </div>
          <div className="hwgrid" onMouseEnter={v.hwHold} onMouseLeave={v.hwRel}>
            <ol className="hwsteps rv">
              <li>
                <button type="button" className={`hws ${T(v.hwC0)}`} aria-pressed={v.hwOn0} onClick={v.hwGo0}>
                  <span className="hwn">{'1'}</span>
                  <span className="hwt">
                    <b>{'Understand the need'}</b>
                    <span>{'The position, its scope, location and timeline.'}</span>
                    <small>
                      <span>
                        <i>{'Role scope'}</i>
                        <i>{'Reporting line'}</i>
                        <i>{'Success profile'}</i>
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
                <button type="button" className={`hws ${T(v.hwC1)}`} aria-pressed={v.hwOn1} onClick={v.hwGo1}>
                  <span className="hwn">{'2'}</span>
                  <span className="hwt">
                    <b>{'Plan the search'}</b>
                    <span>{'A search and selection approach that fits the project scope.'}</span>
                    <small>
                      <span>
                        <i>{'Market mapping'}</i>
                        <i>{'Direct approach'}</i>
                        <i>{'Assessment'}</i>
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
                    <b>{'Run & report'}</b>
                    <span>{'We run the search and share progress with your team.'}</span>
                    <small>
                      <span>
                        <i>{'Weekly updates'}</i>
                        <i>{'Confidential shortlist'}</i>
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
                      <b>{'Role brief'}</b>
                      <small>{'Retail group · confidential'}</small>
                    </span>
                    <span className="hwpill">{'Step 1'}</span>
                  </div>
                  <div className="hwf">
                    <span className="hwfld">
                      {'Position'}
                      <em>{'Head of Operations'}</em>
                    </span>{' '}
                    <span className="hwfld">
                      {'Reports to'}
                      <em>{'CEO'}</em>
                    </span>{' '}
                    <span className="hwfld">
                      {'Location'}
                      <em>{'Jakarta · 40 stores'}</em>
                    </span>{' '}
                    <span className="hwfld">
                      {'Timeline'}
                      <em>{'6 weeks'}</em>
                    </span>
                  </div>
                </div>
                <span className="hwnote">{'✓ Role profile agreed with your team'}</span>
              </div>
              <div className={`hwp ${T(v.hwC1)}`}>
                <div className="hwc">
                  <div className="hwch">
                    <span>
                      <b>{'Search plan'}</b>
                      <small>{'Approach matched to the role'}</small>
                    </span>
                    <span className="hwpill">{'Step 2'}</span>
                  </div>
                  <div className="hwch2">
                    <span>{'Executive network'}</span>
                    <span>{'Direct approach'}</span>
                    <span>{'Industry mapping'}</span>
                    <span>{'Referrals'}</span>
                  </div>
                  <div className="gantt">
                    <div className="gwk">
                      <span />
                      <span>{'Wk 1–2'}</span>
                      <span>{'Wk 3'}</span>
                      <span>{'Wk 4'}</span>
                      <span>{'Wk 5–6'}</span>
                    </div>
                    <div className="grow">
                      {'Market mapping'}
                      <span className="gtrack">
                        <i style={{ left: '0', width: '50%' }} />
                      </span>
                    </div>
                    <div className="grow">
                      {'Approach'}
                      <span className="gtrack">
                        <i style={{ left: '15%', width: '50%' }} />
                      </span>
                    </div>
                    <div className="grow">
                      {'Assessment'}
                      <span className="gtrack">
                        <i style={{ left: '35%', width: '45%' }} />
                      </span>
                    </div>
                    <div className="grow">
                      {'Shortlist'}
                      <span className="gtrack">
                        <i style={{ left: '60%', width: '40%' }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`hwp ${T(v.hwC2)}`}>
                <div className="hwc">
                  <div className="hwch">
                    <span>
                      <b>{'Weekly search update'}</b>
                      <small>{'Week 4 of 6'}</small>
                    </span>
                    <span className="hwpill g">{'On track'}</span>
                  </div>
                  <div className="hwk">
                    <div>
                      <b>{'64'}</b>
                      <small>{'Longlist'}</small>
                    </div>
                    <div>
                      <b>{'28'}</b>
                      <small>{'Approached'}</small>
                    </div>
                    <div>
                      <b>{'3/5'}</b>
                      <small>{'Shortlisted'}</small>
                    </div>
                  </div>
                  <div className="hwline">
                    <svg viewBox="0 0 300 110" preserveAspectRatio="none">
                      <defs>
                        <lineargradient id="hwgrad2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#040668" stopOpacity=".18" />
                          <stop offset="1" stopColor="#040668" stopOpacity="0" />
                        </lineargradient>
                      </defs>
                      <line className="grid" x1="0" y1="27" x2="300" y2="27" />
                      <line className="grid" x1="0" y1="55" x2="300" y2="55" />
                      <line className="grid" x1="0" y1="82" x2="300" y2="82" />
                      <path className="tg" d="M0 104 L300 6" />
                      <path className="ar" d="M0 104 L75 88 L150 62 L225 30 L225 110 L0 110 Z" />
                      <path className="ln" d="M0 104 L75 88 L150 62 L225 30" />
                    </svg>
                  </div>
                  <div className="hwlx">
                    <span>{'Wk 1'}</span>
                    <span>{'Wk 2'}</span>
                    <span>{'Wk 4'}</span>
                    <span>{'Wk 6 shortlist'}</span>
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
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </i>
                  <span>
                    {'Update sent to your team'}
                    <small>{'Every Monday · confidential'}</small>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="z2" style={{ padding: '112px 0' }}>
        <div className="ct">
          <div
            className="rv"
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}
          >
            <p className="eyb">{'More from Jobseeker Services'}</p>
            <h2 className="h2">{'Need something different?'}</h2>
          </div>
          <div className="osgrid">
            <a className="os rv" href="/v2/talent/">
              <div className="omv" aria-hidden="true">
                <div className="omta">
                  <span className="h">
                    {'Store crew · new branches'}
                    <b>{'120'}</b>
                  </span>
                  <span className="r">
                    {'Kuta'}
                    <span className="bar">
                      <i />
                    </span>
                    <small>{'40/40'}</small>
                  </span>
                  <span className="r">
                    {'Seminyak'}
                    <span className="bar">
                      <i />
                    </span>
                    <small>{'30/30'}</small>
                  </span>
                  <span className="r">
                    {'Denpasar'}
                    <span className="bar">
                      <i />
                    </span>
                    <small>{'30/30'}</small>
                  </span>
                  <span className="r">
                    {'Ubud'}
                    <span className="bar">
                      <i />
                    </span>
                    <small>{'20/20'}</small>
                  </span>
                </div>
              </div>
              <div className="osb">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                </span>
                <b>{'Talent Augmentation'}</b>
                <p>
                  {
                    'High-volume hiring for operational roles when you open branches, expand or face seasonal demand.'
                  }
                </p>
                <small>
                  <b>{'Good fit for'}</b>
                  {'High-volume operational or frontline hiring.'}
                </small>
                <span className="go">{'See Talent Augmentation →'}</span>
              </div>
            </a>{' '}
            <a className="os rv" href="/v2/contact/">
              <div className="omv" aria-hidden="true">
                <div className="omro">
                  <span className="omrr">
                    <i style={{ background: '#ffd1ea' }}>{'AR'}</i>
                    {'Ayu R. · Outlet Kuta'}
                    <span className="s" />
                  </span>
                  <span className="omrr">
                    <i style={{ background: '#cdd9ff' }}>{'KW'}</i>
                    {'Komang W. · Warehouse'}
                    <span className="s" />
                  </span>
                  <span className="omrr">
                    <i style={{ background: '#d3f8df' }}>{'DS'}</i>
                    {'Dewi S. · Outlet Ubud'}
                    <span className="s" />
                  </span>
                  <span className="omrr">
                    <i style={{ background: '#fef0c7' }}>{'BS'}</i>
                    {'Budi S. · Front office'}
                    <span className="s" />
                  </span>
                </div>
              </div>
              <div className="osb">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                  </svg>
                </span>
                <b>{'Outsourcing'}</b>
                <p>
                  {'Workforce management support under the agreed partnership model and responsibilities.'}
                </p>
                <small>
                  <b>{'Good fit for'}</b>
                  {'Adding operational capacity with workforce administration support.'}
                </small>
                <span className="go">{'Discuss outsourcing →'}</span>
              </div>
            </a>{' '}
            <a className="os rv" href="/v2/contact/">
              <div className="omv" aria-hidden="true">
                <div className="ompy">
                  <span className="h">
                    {'Payroll run · March'}
                    <small>{'128 employees'}</small>
                  </span>
                  <span className="bar">
                    <i />
                  </span>
                  <span className="ln">
                    {'Gross pay'}
                    <b>{'Rp 612.4 jt'}</b>
                  </span>
                  <span className="ln">
                    {'Deductions & BPJS'}
                    <b>{'Rp 48.9 jt'}</b>
                  </span>
                  <span className="ln">
                    {'Payslips'}
                    <b>{'128 sent'}</b>
                  </span>
                  <span className="ompaid">{'PAID'}</span>
                </div>
              </div>
              <div className="osb">
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
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20M6 15h4" />
                  </svg>
                </span>
                <b>{'Payroll'}</b>
                <p>
                  {
                    'Payroll management support that helps HR run payroll in a more structured way, within the agreed scope.'
                  }
                </p>
                <small>
                  <b>{'Good fit for'}</b>
                  {'Simplifying payroll processes and administration.'}
                </small>
                <span className="go">{'Talk to us about payroll →'}</span>
              </div>
            </a>
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
              <span className="ctxeyb">{'Confidential search'}</span>
              <h2 className="h2">{'Have a strategic role to fill?'}</h2>
              <p className="lede">
                {
                  'Tell us about the position and what success looks like — we’ll suggest a search approach that fits.'
                }
              </p>
              <div className="ctxbtns">
                <Jobseeker.Button
                  hierarchy="secondary"
                  size="xl"
                  href="/v2/contact/"
                  iconTrailing={v.icArrow}
                >
                  {'Discuss your role'}
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
