// Solutions — concept 2 (Jobseeker DS)
// Generated from the design artboard Solutions2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      stage: 'All',
      ffS: 1,
      ffN: 0,
      ffK: 0,
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
      { t: 'Hire', x: 55.2, y: 42.1 },
      { t: 'Manage', x: 74.5, y: 74.1 },
      { t: 'Develop', x: 38.7, y: 72.7 },
    ];
    this.STAGES = ['All', 'Hire', 'Manage', 'Develop'];
    const C = (k, q, d, name, href, img, logo, stages, big) => ({
      k,
      q,
      d,
      name,
      href,
      img: B(img),
      logo: B(logo),
      alt: name + ' illustration',
      stages,
      big,
    });
    this.CARDS = [
      C(
        'software',
        'Is your recruitment process scattered?',
        'Use an ATS with built-in AI to manage vacancies, candidates and your pipeline in one place.',
        'Jobseeker Software',
        '/v2/software/',
        '760e8ac86a00f4be6cce64da15c9648f',
        '06922c52c0d826c56143c4224b8fb845',
        ['Hire', 'Manage'],
        true,
      ),
      C(
        'talent',
        'Need to hire many people in a short time?',
        'Support for sourcing, screening and placing operational staff.',
        'Talent Augmentation',
        '/v2/talent/',
        '7c821539daad9a387f3bcd098ba58bde',
        '0934d72a7333f2a8976ae385b4569280',
        ['Hire', 'Manage'],
        true,
      ),
      C(
        'exec',
        'Struggling to find senior candidates?',
        'Targeted search and selection for strategic positions.',
        'Executive Search',
        '/v2/executive/',
        '7c821539daad9a387f3bcd098ba58bde',
        '0934d72a7333f2a8976ae385b4569280',
        ['Hire'],
        false,
      ),
      C(
        'partners',
        'A small business that keeps needing new staff?',
        'Hire from your phone with Jobseeker Partners.',
        'Jobseeker Partners',
        '/v2/partners/',
        '623c5f7923e50da1add4242ad8b5a276',
        '2e0842aec39ea4bc17e6d544749982f9',
        ['Hire'],
        false,
      ),
      C(
        'academy',
        'Want to upskill your team?',
        'Corporate training programs through Jobseeker Academy.',
        'Jobseeker Academy',
        '/v2/academy/',
        '3461e8c0faece6ed9f3f3556e1671273',
        'c2c0bd06446c497f081ebea85a1bf425',
        ['Develop'],
        false,
      ),
    ];
    this.SCOL = { Hire: 'blue', Manage: 'indigo', Develop: 'success' };
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
    this._amT1 = setTimeout(() => this.setState({ amHint: true }), 2500);
    this._amT2 = setTimeout(() => this.setState({ amHint: false }), 9000);
  }
  componentWillUnmount() {
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
        href: '#by-problem',
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
        href: '#by-problem',
      },
      {
        k: ['train', 'course', 'skill', 'academy'],
        t: 'Jobseeker Academy runs training and upskilling programs for individuals and companies.',
        link: 'See Academy',
        href: '/v2/academy/',
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
      jm: [
        ['Hire', 'Find and select the right people'],
        ['Manage', 'Run your workforce day to day'],
        ['Develop', 'Grow your team’s skills'],
      ].map(([t, d], i) => {
        const ps = this.CARDS.filter((c) => c.stages.includes(t));
        return {
          t,
          d,
          n: '0' + (i + 1),
          count: ps.length + (ps.length === 1 ? ' solution' : ' solutions'),
          ps: ps.map((c) => ({ name: c.name, logo: c.logo })),
          on: s.stage === t,
          cls: s.stage === t ? 'on' : '',
          pick: () => this.setState({ stage: s.stage === t ? 'All' : t }),
        };
      }),
      ...(() => {
        const P = {
          sw: this.CARDS[0],
          ta: this.CARDS[1],
          ex: this.CARDS[2],
          pa: this.CARDS[3],
          ac: this.CARDS[4],
        };
        const sizes = ['1–20 people', '20–200 people', '200+ people'];
        const needs = [
          'Hire many people fast',
          'Fill a senior role',
          'Organise recruitment & HR',
          'Hire from my phone',
          'Train my team',
        ];
        const pick = [[P.pa, P.ta, P.ta][s.ffS], P.ex, [P.pa, P.sw, P.sw][s.ffS], P.pa, P.ac][s.ffN];
        const also = [
          [P.ta, P.sw, P.sw][s.ffS],
          P.sw,
          [P.sw, P.ta, P.ta][s.ffS],
          P.sw,
          [P.sw, P.sw, P.ta][s.ffS],
        ][s.ffN];
        const why = {
          partners:
            'Post a job from your phone, see candidates near your business and chat with them directly — ideal for small teams.',
          talent:
            'Our team sources, screens and places operational staff in volume, within your targets and timeline.',
          exec: 'A focused, confidential search for managerial, specialist and C-level roles — from brief to shortlist.',
          software:
            'An ATS with built-in AI plus HRIS to run your whole hiring flow and employee data in one place.',
          academy:
            'Training tailored to your team’s roles and skill targets, with material grounded in day-to-day work.',
        };
        return {
          ffSize: sizes.map((t, i) => ({
            t,
            on: s.ffS === i,
            cls: s.ffS === i ? 'on' : '',
            pick: () => this.setState({ ffS: i, ffK: s.ffK + 1 }),
          })),
          ffNeed: needs.map((t, i) => ({
            t,
            on: s.ffN === i,
            cls: s.ffN === i ? 'on' : '',
            pick: () => this.setState({ ffN: i, ffK: s.ffK + 1 }),
          })),
          ffName: pick.name,
          ffBtn: 'Explore ' + pick.name,
          ffLogo: pick.logo,
          ffHref: pick.href,
          ffWhy: why[pick.k],
          ffAlsoName: also.name,
          ffAlsoLogo: also.logo,
          ffAlsoHref: also.href,
          ffKey: { animationName: s.ffK % 2 ? 'ffin' : 'ffin2' },
        };
      })(),
      stages: this.STAGES.map((t) => ({
        t: t === 'All' ? 'All solutions' : t,
        on: s.stage === t,
        h: s.stage === t ? 'primary' : 'secondary',
        pick: () => this.setState({ stage: t }),
      })),
      gridCls: s.stage === 'All' ? 'all' : '',
      countLabel: (() => {
        const n = this.CARDS.filter((c) => s.stage === 'All' || c.stages.includes(s.stage)).length;
        return n + (n === 1 ? ' solution' : ' solutions');
      })(),
      cards: this.CARDS.filter((c) => s.stage === 'All' || c.stages.includes(s.stage)).map((c, i) => ({
        ...c,
        n: '0' + (this.CARDS.indexOf(c) + 1),
        pinPos: {
          software: { left: '42%', top: '38%' },
          talent: { left: '40%', top: '55%' },
          exec: { left: '50%', top: '30%' },
          partners: { left: '52%', top: '45%' },
          academy: { left: '46%', top: '40%' },
        }[c.k],
        pos: {
          objectPosition: {
            software: '50% 40%',
            talent: '45% 75%',
            exec: '55% 15%',
            partners: '62% 50%',
            academy: '55% 45%',
          }[c.k],
        },
        isSw: c.k === 'software',
        isTa: c.k === 'talent',
        isEx: c.k === 'exec',
        isPa: c.k === 'partners',
        isAc: c.k === 'academy',
        cls: c.big ? 'big' : '',
        delay: { animationDelay: i * 0.07 + 's' },
        tags: c.stages.map((t) => ({ t, color: this.SCOL[t] })),
      })),
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
            <img src="/images/2d13d519140b380921b90a2f80030cb2.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'Jobseeker solutions'}</p>
            <h1 className="h1 rise d2">
              {'Solutions for every stage of '}
              <em>{'workforce management.'}</em>
            </h1>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="/v2/contact/">
                {'Contact us'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button hierarchy="secondary" size="xl" href="/compare/">
                {'Compare solutions'}
              </Jobseeker.Button>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hprog" aria-hidden="true">
              <i style={S(v.progStyle)} />
            </span>{' '}
            <span className="hrole" aria-live="polite">
              {'Stage: '}
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
      <section className="z1" style={{ padding: '96px 0 40px' }}>
        <div className="ct sintro">
          <p className="sbig rv">
            {
              'From digitizing recruitment to large-scale workforce needs, choose the technology or service that fits your business priorities.'
            }
          </p>
          <div className="sfilter rv" role="group" aria-label="Filter by stage">
            <span className="sflab">{'Show solutions for'}</span>
            <div className="sfbtns">
              {L(v.stages).map((s_1, i_1) => (
                <React.Fragment key={i_1}>
                  <Jobseeker.Button hierarchy={s_1?.h} size="md" aria-pressed={s_1?.on} onClick={s_1?.pick}>
                    {T(s_1?.t)}
                  </Jobseeker.Button>
                </React.Fragment>
              ))}
            </div>
            <span className="sfcount" aria-live="polite">
              {T(v.countLabel)}
            </span>
          </div>
        </div>
      </section>
      <section className="jmz">
        <div className="ct">
          <div className="jmap rv">
            <span className="jmline" aria-hidden="true">
              <i />
            </span>{' '}
            {L(v.jm).map((j_2, i_2) => (
              <React.Fragment key={i_2}>
                <button
                  type="button"
                  className={`jmst ${T(j_2?.cls)}`}
                  aria-pressed={j_2?.on}
                  onClick={j_2?.pick}
                >
                  <span className="jmtop">
                    <span className="jmn">{T(j_2?.n)}</span>
                    <span>
                      <b>{T(j_2?.t)}</b>
                      <small>{T(j_2?.d)}</small>
                    </span>
                    <em>{T(j_2?.count)}</em>
                  </span>{' '}
                  <span className="jmps">
                    {L(j_2?.ps).map((p_3, i_3) => (
                      <React.Fragment key={i_3}>
                        <span className="jmp">
                          <img src={A(p_3?.logo)} alt="" />
                          {T(p_3?.name)}
                        </span>
                      </React.Fragment>
                    ))}
                  </span>
                </button>
              </React.Fragment>
            ))}
          </div>
          <p className="jmhint">{'Tap a stage to filter the solutions below.'}</p>
        </div>
      </section>
      <section id="by-problem" className="z1" style={{ padding: '24px 0 112px' }}>
        <div className="ct">
          <ul className={`pgrid2 ${T(v.gridCls)}`}>
            {L(v.cards).map((c_4, i_4) => (
              <React.Fragment key={i_4}>
                <li className={`pcard ${T(c_4?.cls)}`} style={S(c_4?.delay)}>
                  <a className="pclink" href={A(c_4?.href)}>
                    <span className="pcimg">
                      <img src={A(c_4?.img)} alt={c_4?.alt} style={S(c_4?.pos)} />{' '}
                      <span className="pcnum">{T(c_4?.n)}</span>
                      <span className="pcpin" style={S(c_4?.pinPos)} />{' '}
                      {c_4?.isSw ? (
                        <>
                          <span className="pcov">
                            <span className="ic m">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                              </svg>
                            </span>
                            <span>
                              {'AI match 96%'}
                              <small>{'Ayu R. · moved to Interview'}</small>
                            </span>
                          </span>
                        </>
                      ) : null}{' '}
                      {c_4?.isTa ? (
                        <>
                          <span className="pcov">
                            <span className="ic">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                              </svg>
                            </span>
                            <span>
                              {'112 / 120 placed'}
                              <span className="pcbar">
                                <b style={{ width: '93%' }} />
                              </span>
                            </span>
                          </span>
                        </>
                      ) : null}{' '}
                      {c_4?.isEx ? (
                        <>
                          <span className="pcov">
                            <span className="pcav">
                              <i style={{ background: '#ffd1ea' }}>{'A'}</i>
                              <i style={{ background: '#cdd9ff' }}>{'B'}</i>
                              <i style={{ background: '#d3f8df' }}>{'C'}</i>
                            </span>
                            <span>
                              {'Shortlist ready'}
                              <small>{'3 candidates · confidential'}</small>
                            </span>
                          </span>
                        </>
                      ) : null}{' '}
                      {c_4?.isPa ? (
                        <>
                          <span className="pcov">
                            <span className="ic m">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
                              </svg>
                            </span>
                            <span>
                              {'18 new applicants'}
                              <small>{'Barista · 1.2 km away'}</small>
                            </span>
                          </span>
                        </>
                      ) : null}{' '}
                      {c_4?.isAc ? (
                        <>
                          <span className="pcov">
                            <span className="pcring">
                              <svg viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="14" className="t" />
                                <circle cx="20" cy="20" r="14" className="v" pathLength="100" />
                              </svg>
                            </span>
                            <span>
                              {'Team certified'}
                              <small>{'Customer service · 18 people'}</small>
                            </span>
                          </span>
                        </>
                      ) : null}
                    </span>{' '}
                    <span className="pcbody">
                      <span className="pctags">
                        {L(c_4?.tags).map((g_5, i_5) => (
                          <React.Fragment key={i_5}>
                            <Jobseeker.Badge color={g_5?.color} size="sm">
                              {T(g_5?.t)}
                            </Jobseeker.Badge>
                          </React.Fragment>
                        ))}
                      </span>{' '}
                      <span className="pcq">{T(c_4?.q)}</span> <span className="pcd">{T(c_4?.d)}</span>{' '}
                      <span className="pcgo">
                        <img src={A(c_4?.logo)} alt="" />
                        {T(c_4?.name)}
                        <span aria-hidden="true">{'→'}</span>
                      </span>
                    </span>
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>
      <section id="fit" className="ffz">
        <div className="ct ffgrid">
          <div className="ffq rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="eyb">{'Find your fit'}</p>
              <h2 className="h2">{'Two questions to your starting point.'}</h2>
            </div>
            <div className="ffg">
              <b>
                <i>{'1'}</i>
                {'How big is your team?'}
              </b>
              <div className="ffo">
                {L(v.ffSize).map((o_6, i_6) => (
                  <React.Fragment key={i_6}>
                    <button
                      type="button"
                      className={`ffc ${T(o_6?.cls)}`}
                      aria-pressed={o_6?.on}
                      onClick={o_6?.pick}
                    >
                      {T(o_6?.t)}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="ffg">
              <b>
                <i>{'2'}</i>
                {'What do you need most right now?'}
              </b>
              <div className="ffo">
                {L(v.ffNeed).map((o_7, i_7) => (
                  <React.Fragment key={i_7}>
                    <button
                      type="button"
                      className={`ffc ${T(o_7?.cls)}`}
                      aria-pressed={o_7?.on}
                      onClick={o_7?.pick}
                    >
                      {T(o_7?.t)}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="ffres rv" aria-live="polite">
            <div className="ffin" style={S(v.ffKey)}>
              <span className="ffk">{'Suggested starting point'}</span>
              <div className="ffh">
                <img src={A(v.ffLogo)} alt="" />
                <b>{T(v.ffName)}</b>
              </div>
              <p className="ffwhy">{T(v.ffWhy)}</p>
              <span>
                <Jobseeker.Button hierarchy="primary" size="lg" href={A(v.ffHref)} iconTrailing={v.icArrow}>
                  {T(v.ffBtn)}
                </Jobseeker.Button>
              </span>
              <div className="ffalso">
                <img src={A(v.ffAlsoLogo)} alt="" />
                <span>
                  {'Also worth a look: '}
                  <b>{T(v.ffAlsoName)}</b>
                </span>
                <a href={A(v.ffAlsoHref)}>{'See →'}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="not-sure" className="ctx">
        <div className="ct">
          <div className="ctxc rv">
            <div className="ctxbg" aria-hidden="true">
              <i className="b1" />
              <i className="b2" />
              <i className="b3" />
            </div>
            <div className="ctxl">
              <span className="ctxeyb">{'We’re here to help'}</span>
              <h2 className="h2">{'Not sure where to start?'}</h2>
              <p className="lede">
                {'Our team can help map your needs by role type, headcount, HR process and business goals.'}
              </p>
              <div className="ctxbtns">
                <Jobseeker.Button hierarchy="secondary" size="xl" href="/v2/contact/">
                  {'Contact us'}
                </Jobseeker.Button>{' '}
                <span data-theme="dark">
                  <Jobseeker.Button hierarchy="secondary" size="xl" href="/compare/">
                    {'Compare solutions'}
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
                {L(v.amMsgs).map((m_8, i_8) => (
                  <React.Fragment key={i_8}>
                    {m_8?.isMe ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                          {T(m_8?.t)}
                        </Jobseeker.ChatMessage>
                      </>
                    ) : null}{' '}
                    {m_8?.isBot ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                          {T(m_8?.t)}
                        </Jobseeker.ChatMessage>{' '}
                        {m_8?.hasLink ? (
                          <>
                            <span style={{ marginLeft: '44px' }}>
                              <Jobseeker.Button
                                hierarchy="link-color"
                                size="sm"
                                href={A(m_8?.href)}
                                iconTrailing={v.icArrow}
                              >
                                {T(m_8?.link)}
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
                    {L(v.amSugs).map((sg_9, i_9) => (
                      <React.Fragment key={i_9}>
                        <Jobseeker.Button hierarchy="secondary" size="xs" onClick={sg_9?.go}>
                          {T(sg_9?.t)}
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
