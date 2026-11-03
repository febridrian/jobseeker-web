// Contact us — concept 2 (Jobseeker DS)
// Generated from the design artboard Contact2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      name: '',
      co: '',
      branches: '',
      msg: '',
      needs: [],
      tried: false,
      off: 0,
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
    this.PINS = [{ t: 'Bali', x: 50.0, y: 33.6 }];
    this.NEEDS = ['HR software', 'Recruitment support', 'Operational workforce', 'Training program'];
    const O = (n, tag, color, a) => ({
      n,
      tag,
      color,
      a,
      map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(a),
    });
    this.OFFICES = [
      O(
        'Bali',
        'Headquarters',
        'pink',
        'J-Loft Office, Griya Jimbaran Hub, Jl. Karang Mas, Jimbaran, Bali 80361',
      ),
      O(
        'Jakarta',
        'Office',
        'brand',
        'Menara Kompas, Jl. Palmerah Sel. No.21, Gelora, Tanah Abang, Central Jakarta 10270',
      ),
      O('Singapore', 'Office', 'brand', '10 Anson Road #22-02 International Plaza, Singapore 079903'),
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
    this._ofAt = Date.now();
    this._ofI = setInterval(() => {
      const n = Date.now();
      if (!this._ofHold && n - this._ofAt > 6000) {
        this._ofAt = n;
        this.setState({ now: n, off: (this.state.off + 1) % 3, ofK: (this.state.ofK || 0) + 1 });
      } else this.setState({ now: n });
    }, 1000);
    this._pinI = setInterval(() => {
      if (!this.state.paused) this.setState({ pin: (this.state.pin + 1) % this.PINS.length });
    }, 2600);
    this._amT1 = setTimeout(() => this.setState({ amHint: true }), 2500);
    this._amT2 = setTimeout(() => this.setState({ amHint: false }), 9000);
  }
  ofPick(i) {
    this._ofAt = Date.now();
    if (i !== this.state.off) this.setState({ off: i, ofK: (this.state.ofK || 0) + 1 });
  }
  componentWillUnmount() {
    clearInterval(this._ofI);
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
        href: '#contact',
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
          href: '#contact',
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
      ...(() => {
        const val = (e) => (e && e.target ? e.target.value : e);
        const ready = !!s.name.trim() && !!s.co.trim();
        const lines = ['Name: ' + s.name.trim(), 'Company: ' + s.co.trim()];
        if (s.needs.length) lines.push('Interested in: ' + s.needs.join(', '));
        if (String(s.branches).trim()) lines.push('Number of branches: ' + String(s.branches).trim());
        if (s.msg.trim()) lines.push('', s.msg.trim());
        const body = lines.join('\n');
        return {
          name: s.name,
          co: s.co,
          branches: s.branches,
          msg: s.msg,
          four: 4,
          onName: (e) => this.setState({ name: val(e) }),
          onCo: (e) => this.setState({ co: val(e) }),
          onBranches: (e) => this.setState({ branches: val(e) }),
          onMsg: (e) => this.setState({ msg: val(e) }),
          errName: s.tried && !s.name.trim() ? 'Please enter your name.' : false,
          errCo: s.tried && !s.co.trim() ? 'Please enter your company.' : false,
          needs: this.NEEDS.map((t) => {
            const on = s.needs.includes(t);
            return {
              t,
              on,
              h: on ? 'primary' : 'secondary',
              toggle: () => this.setState({ needs: on ? s.needs.filter((x) => x !== t) : s.needs.concat(t) }),
            };
          }),
          routes: [
            ['HR software', 'ATS with built-in AI, HRIS and the employee app.'],
            ['Recruitment support', 'Executive search or high-volume hiring by our team.'],
            ['Operational workforce', 'Staff for outlets, warehouses and operations.'],
            ['Training program', 'Upskill your team with Jobseeker Academy.'],
          ].map(([t, d], k) => {
            const on = s.needs.includes(t);
            return {
              t,
              d,
              cls: on ? 'on' : '',
              go: on ? 'Added' : 'Add to message →',
              i0: k === 0,
              i1: k === 1,
              i2: k === 2,
              i3: k === 3,
              pick: () => {
                if (!on) this.setState({ needs: s.needs.concat(t) });
              },
            };
          }),
          pvHas: !!(s.name.trim() || s.co.trim() || s.needs.length || s.msg.trim()),
          pvEmpty: !(s.name.trim() || s.co.trim() || s.needs.length || s.msg.trim()),
          pvName: s.name.trim() || '—',
          pvCo: s.co.trim() || '—',
          pvNeeds: s.needs.join(', '),
          pvHasNeeds: s.needs.length > 0,
          pvBr: String(s.branches).trim(),
          pvHasBr: !!String(s.branches).trim(),
          pvMsg: s.msg.trim(),
          pvHasMsg: !!s.msg.trim(),
          pvState: ready ? 'Ready to send' : 'Name & company needed',
          pvCls: ready ? 'ok' : '',
          pvBar: {
            width:
              (s.name.trim() ? 35 : 0) +
              (s.co.trim() ? 35 : 0) +
              (s.needs.length ? 15 : 0) +
              (s.msg.trim() ? 15 : 0) +
              '%',
          },
          notReady: !ready,
          mailHref: ready
            ? 'mailto:support@jobseeker.company?subject=' +
              encodeURIComponent('HR needs — ' + s.co.trim()) +
              '&body=' +
              encodeURIComponent(body)
            : '#contact',
          waHref: ready
            ? 'https://wa.me/6281318817887?text=' + encodeURIComponent('Hi Jobseeker team,\n' + body)
            : '#contact',
          guard: (e) => {
            if (!ready) {
              if (e && e.preventDefault) e.preventDefault();
              this.setState({ tried: true });
            }
          },
          sendHint: ready
            ? 'Your email app or WhatsApp will open with this message filled in.'
            : 'Fill in your name and company to send.',
          noop: (e) => {
            if (e && e.preventDefault) e.preventDefault();
            if (!ready) this.setState({ tried: true });
          },
        };
      })(),
      offices: this.OFFICES.map((o, i) => {
        const tzn = ['Asia/Makassar', 'Asia/Jakarta', 'Asia/Singapore'][i];
        let time = '';
        try {
          time = new Date(s.now || Date.now()).toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: tzn,
          });
        } catch (e) {
          time = '';
        }
        return {
          ...o,
          on: s.off === i,
          time,
          tz: ['WITA · UTC+8', 'WIB · UTC+7', 'SGT · UTC+8'][i],
          mpos: { left: ['74%', '42%', '24%'][i], top: ['58%', '50%', '28%'][i] },
          cls: (s.off === i ? 'on' : '') + (i === 0 ? ' hq' : ''),
          hover: () => this.ofPick(i),
        };
      }),
      ofC0: (s.off === 0 ? 'on' : '') + ' hq',
      ofC1: s.off === 1 ? 'on' : '',
      ofC2: s.off === 2 ? 'on' : '',
      ofGo0: () => this.ofPick(0),
      ofGo1: () => this.ofPick(1),
      ofGo2: () => this.ofPick(2),
      ofName: this.OFFICES[s.off].n,
      ofTag: this.OFFICES[s.off].tag,
      ofAddr: this.OFFICES[s.off].a,
      ofMap: this.OFFICES[s.off].map,
      ofKey: { animationName: (s.ofK || 0) % 2 ? 'ofin' : 'ofin2' },
      ofBarKey: { animationName: (s.ofK || 0) % 2 ? 'ofbar' : 'ofbar2' },
      ofHold: () => {
        this._ofHold = true;
      },
      ofRel: () => {
        this._ofHold = false;
        this._ofAt = Date.now();
      },
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
            <img src="/images/9fbb4c2b886122d18f7e0dc99002ac6d.webp" alt="" />{' '}
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
            <p className="heyb rise d1">{'Contact us'}</p>
            <h1 className="h1 rise d2">
              {'Tell us about your company’s '}
              <em>{'HR needs.'}</em>
            </h1>
            <div className="ctas rise d3">
              <Jobseeker.Button hierarchy="primary" size="xl" href="#contact">
                {'Send a message'}
              </Jobseeker.Button>{' '}
              <Jobseeker.Button
                hierarchy="secondary"
                size="xl"
                href="https://wa.me/6281318817887"
                iconTrailing={v.icArrow}
              >
                {'Chat on WhatsApp'}
              </Jobseeker.Button>
            </div>
          </div>
          <div className="hctl rise d4">
            <span className="hrole">
              {'Headquarters: '}
              <b>{'Bali'}</b>
              {' · offices in Jakarta and Singapore'}
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
      <section className="z1 hrz">
        <div className="ct">
          <div
            className="rv"
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '760px' }}
          >
            <p className="eyb">{'How can we help?'}</p>
            <h2 className="h2">{'Pick what you need — we’ll add it to your message.'}</h2>
          </div>
          <div className="hrgrid">
            {L(v.routes).map((r_1, i_1) => (
              <React.Fragment key={i_1}>
                <a className={`hrt rv ${T(r_1?.cls)}`} href="#contact" onClick={r_1?.pick}>
                  <span className="ic">
                    {r_1?.i0 ? (
                      <>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="12" rx="2" />
                          <path d="M8 20h8M12 16v4" />
                        </svg>
                      </>
                    ) : null}
                    {r_1?.i1 ? (
                      <>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                      </>
                    ) : null}
                    {r_1?.i2 ? (
                      <>
                        <svg
                          width="22"
                          height="22"
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
                      </>
                    ) : null}
                    {r_1?.i3 ? (
                      <>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 10L12 5 2 10l10 5 10-5z" />
                          <path d="M6 12v5c3 2 9 2 12 0v-5" />
                        </svg>
                      </>
                    ) : null}
                  </span>
                  <b>{T(r_1?.t)}</b>
                  <span className="d">{T(r_1?.d)}</span>
                  <span className="go">{T(r_1?.go)}</span>
                </a>
              </React.Fragment>
            ))}{' '}
            <a className="hrt job rv" href="/v2/app/">
              <span className="ic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <path d="M11 18h2" />
                </svg>
              </span>
              <b>{'Looking for a job?'}</b>
              <span className="d">
                {'Apply through Jobseeker App — our sales team doesn’t process applications.'}
              </span>
              <span className="go">{'Get Jobseeker App →'}</span>
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="zb cxz">
        <div className="ct cxgrid">
          <div className="cxleft">
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p className="heyb">{'Contact us'}</p>
              <h2 className="h2 onb">{'Tell us about your hiring needs.'}</h2>
              <p className="lede onb2">
                {
                  'Let us know how many branches you have, the roles you hire most often and the process you want to improve. Our team will get in touch to schedule a demo.'
                }
              </p>
            </div>
            <form className="cxform rv" onSubmit={v.noop} noValidate>
              <div className="cxrow">
                <Jobseeker.Input
                  size="md"
                  label="Full name"
                  required={v.yes}
                  placeholder="Your full name"
                  value={v.name}
                  onChange={v.onName}
                  error={v.errName}
                ></Jobseeker.Input>{' '}
                <Jobseeker.Input
                  size="md"
                  label="Company"
                  required={v.yes}
                  placeholder="Company name"
                  value={v.co}
                  onChange={v.onCo}
                  error={v.errCo}
                ></Jobseeker.Input>
              </div>
              <div className="cxneed" role="group" aria-label="What do you need?">
                <span className="cxlab">{'What do you need?'}</span>
                <div className="cxchips">
                  {L(v.needs).map((n_2, i_2) => (
                    <React.Fragment key={i_2}>
                      <Jobseeker.Button
                        hierarchy={n_2?.h}
                        size="sm"
                        aria-pressed={n_2?.on}
                        onClick={n_2?.toggle}
                      >
                        {T(n_2?.t)}
                      </Jobseeker.Button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Jobseeker.Input
                size="md"
                label="Number of branches"
                type="number"
                min="1"
                placeholder="e.g. 12"
                value={v.branches}
                onChange={v.onBranches}
              ></Jobseeker.Input>{' '}
              <Jobseeker.Textarea
                size="md"
                label="Message"
                rows={v.four}
                placeholder="Roles you hire most often, and what you want to improve"
                value={v.msg}
                onChange={v.onMsg}
              ></Jobseeker.Textarea>
              <div className="cxsend">
                <Jobseeker.Button
                  hierarchy="primary"
                  size="lg"
                  href={A(v.mailHref)}
                  disabled={v.notReady}
                  onClick={v.guard}
                >
                  {'Send via email'}
                </Jobseeker.Button>{' '}
                <Jobseeker.Button
                  hierarchy="secondary"
                  size="lg"
                  href={A(v.waHref)}
                  disabled={v.notReady}
                  onClick={v.guard}
                >
                  {'Send via WhatsApp'}
                </Jobseeker.Button>
              </div>
              <span className="cxhint" aria-live="polite">
                {T(v.sendHint)}
              </span>
            </form>
            <p className="cxjob">
              {
                'Looking for a job? Apply through Jobseeker App — our sales team doesn’t process job applications. '
              }
              <a href="/v2/app/">{'Jobseeker App →'}</a>
            </p>
          </div>
          <div className="cxright rv">
            <div className="pvw" aria-live="polite">
              <div className="pvh">
                {'Your message preview'}
                <em className={v.pvCls}>{T(v.pvState)}</em>
              </div>
              {v.pvEmpty ? (
                <>
                  <span className="pvdots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                </>
              ) : null}{' '}
              {v.pvHas ? (
                <>
                  <div className="pvb">
                    <p>{'Hi Jobseeker team,'}</p>
                    <p>
                      <span className="k">{'Name:'}</span> {T(v.pvName)}
                    </p>
                    <p>
                      <span className="k">{'Company:'}</span> {T(v.pvCo)}
                    </p>
                    {v.pvHasNeeds ? (
                      <>
                        <p>
                          <span className="k">{'Interested in:'}</span> {T(v.pvNeeds)}
                        </p>
                      </>
                    ) : null}
                    {v.pvHasBr ? (
                      <>
                        <p>
                          <span className="k">{'Branches:'}</span> {T(v.pvBr)}
                        </p>
                      </>
                    ) : null}
                    {v.pvHasMsg ? (
                      <>
                        <p className="m">{T(v.pvMsg)}</p>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}{' '}
              <span className="pvbar">
                <i style={S(v.pvBar)} />
              </span>
            </div>
            <p className="cxdh">{'Contact our team directly'}</p>
            <ul className="cxlist">
              <li>
                <a href="mailto:support@jobseeker.company">
                  <span className="cxk">{'Email'}</span>
                  <span className="cxv">{'support@jobseeker.company'}</span>
                  <i aria-hidden="true">{'→'}</i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281318817887">
                  <span className="cxk">{'WhatsApp'}</span>
                  <span className="cxv">{'+62 813 1881 7887'}</span>
                  <i aria-hidden="true">{'→'}</i>
                </a>
              </li>
              <li>
                <a href="tel:+6281318817887">
                  <span className="cxk">{'Phone'}</span>
                  <span className="cxv">{'+62 813 1881 7887'}</span>
                  <i aria-hidden="true">{'→'}</i>
                </a>
              </li>
            </ul>
            <p className="cxsmall">
              {
                'There’s no online form submission yet — your message is sent through your own email app or WhatsApp.'
              }
            </p>
            <ol className="nx">
              <li>
                <i>{'1'}</i>
                <span>
                  <b>{'Send your message'}</b>
                  {'By email or WhatsApp, from your own app.'}
                </span>
              </li>
              <li>
                <i>{'2'}</i>
                <span>
                  <b>{'Our team gets in touch'}</b>
                  {'To understand your needs in more detail.'}
                </span>
              </li>
              <li>
                <i>{'3'}</i>
                <span>
                  <b>{'Demo or proposal'}</b>
                  {'We show the right solution for your business.'}
                </span>
              </li>
            </ol>
            <div className="cxdemo">
              <b>{'Prefer to see the product first?'}</b>{' '}
              <Jobseeker.Button hierarchy="secondary" size="md" href="/demo/">
                {'Book a demo'}
              </Jobseeker.Button>
            </div>
          </div>
        </div>
      </section>
      <section className="ofz">
        <div className="ct">
          <div className="ofhead rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="eyb">{'Our offices'}</p>
              <h2 className="h2">{'Visit us.'}</h2>
            </div>
            <p className="lede">{'Three offices across two countries — headquartered in Bali.'}</p>
          </div>
          <div className="ofgrid" onMouseEnter={v.ofHold} onMouseLeave={v.ofRel}>
            <div className="oflist rv">
              {L(v.offices).map((o_3, i_3) => (
                <React.Fragment key={i_3}>
                  <div className={`ofc ${T(o_3?.cls)}`} onClick={o_3?.hover} onMouseEnter={o_3?.hover}>
                    <span className="ofic">
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
                    </span>{' '}
                    <span className="oft">
                      <span className="oftop">
                        <b>{T(o_3?.n)}</b>
                        <Jobseeker.Badge color={o_3?.color} size="sm">
                          {T(o_3?.tag)}
                        </Jobseeker.Badge>
                      </span>{' '}
                      <span className="ofclock">
                        {T(o_3?.time)}
                        <small>{T(o_3?.tz)}</small>
                      </span>{' '}
                      <span className="ofmore">
                        <div>
                          <span className="ofaddr">{T(o_3?.a)}</span>
                          <a className="ofgo" href={A(o_3?.map)}>
                            {'Open in Maps →'}
                          </a>
                        </div>
                      </span>
                    </span>{' '}
                    <span className="ofbar" aria-hidden="true">
                      <i style={S(v.ofBarKey)} />
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="ofmap rv">
              <svg
                className="smap"
                viewBox="72 34 176 178"
                preserveAspectRatio="xMidYMid meet"
                aria-label="Map of our offices in Singapore, Jakarta and Bali"
              >
                <line className="gl" x1="0" y1="20" x2="270" y2="20" />
                <line className="gl" x1="0" y1="70" x2="270" y2="70" />
                <line className="gl" x1="0" y1="120" x2="270" y2="120" />
                <line className="gl" x1="0" y1="170" x2="270" y2="170" />
                <line className="gl" x1="10" y1="0" x2="10" y2="180" />
                <line className="gl" x1="60" y1="0" x2="60" y2="180" />
                <line className="gl" x1="110" y1="0" x2="110" y2="180" />
                <line className="gl" x1="160" y1="0" x2="160" y2="180" />
                <line className="gl" x1="210" y1="0" x2="210" y2="180" />
                <line className="gl" x1="260" y1="0" x2="260" y2="180" />
                <path
                  className="land"
                  d="M63.0 5.0 L70.0 2.0 L81.0 8.0 L94.0 21.0 L95.0 35.0 L103.0 54.0 L96.0 57.0 L94.0 56.5 L82.0 48.0 L73.0 41.0 L66.0 30.0 L63.0 16.0 L61.0 5.0 Z"
                />
                <path
                  className="land"
                  d="M13.0 14.0 L35.0 18.0 L47.0 32.0 L64.0 48.0 L74.0 53.0 L90.0 66.0 L98.0 80.0 L106.0 93.0 L120.0 100.0 L118.0 128.0 L106.0 129.0 L83.0 110.0 L70.0 95.0 L63.0 80.0 L50.0 60.0 L40.0 47.0 L25.0 33.0 Z"
                />
                <path
                  className="land"
                  d="M112.0 138.0 L121.0 130.0 L130.0 130.0 L143.0 133.0 L164.0 139.0 L175.0 136.0 L186.0 139.0 L204.0 147.0 L204.0 156.0 L180.0 153.0 L164.0 151.0 L140.0 148.0 L124.0 144.0 Z"
                />
                <path
                  className="land"
                  d="M204.5 151.0 L212.0 150.5 L217.0 154.0 L212.0 158.5 L206.0 154.0 Z"
                />
                <path className="land" d="M218.5 153.0 L224.0 152.0 L226.0 158.0 L219.0 158.0 Z" />
                <path
                  className="land"
                  d="M228.0 154.0 L242.0 153.0 L250.0 156.0 L240.0 159.0 L229.0 159.0 Z"
                />
                <path
                  className="land"
                  d="M150.0 55.0 L156.0 50.0 L170.0 52.0 L190.0 38.0 L215.0 20.0 L230.0 0.0 L252.0 18.0 L240.0 27.0 L238.0 50.0 L249.0 60.0 L236.0 70.0 L228.0 90.0 L220.0 106.0 L206.0 111.0 L190.0 102.0 L177.0 100.0 L162.0 99.0 L160.0 85.0 L152.0 75.0 Z"
                />
                <path className="land" d="M111.0 86.0 L120.0 87.0 L128.0 100.0 L120.0 101.0 L113.0 92.0 Z" />
                <path className="land" d="M136.0 96.0 L143.0 96.0 L143.0 102.0 L136.0 101.0 Z" />
                <path
                  className="land"
                  d="M254.0 126.0 L256.0 104.0 L250.0 98.0 L254.0 80.0 L262.0 64.0 L270 60.0 L270 126.0 Z"
                />
                <text className="sea" x="166.0" y="119.0" textAnchor="middle">
                  {'JAVA SEA'}
                </text>
                <text className="sea" x="125.0" y="38.0" textAnchor="middle">
                  {'SOUTH CHINA SEA'}
                </text>
                <text className="sea" x="196.0" y="76.0" textAnchor="middle">
                  {'BORNEO'}
                </text>
                <path className="arc2" d="M98.2 57.1 Q 106.2 97.1 128.5 132.0" />
                <path className="arc2" d="M128.5 132.0 Q 170.1 118.0 211.7 157.8" />
                <g className={`mp ${T(v.ofC0)}`} onClick={v.ofGo0} onMouseEnter={v.ofGo0}>
                  <circle className="halo" cx="211.7" cy="157.8" r="4" />
                  <circle className="dot" cx="211.7" cy="157.8" r="3.2" />
                  <g className="lbl">
                    <rect x="200.1" y="138.8" width="23.2" height="11" rx="5.5" />
                    <text x="211.7" y="146.4" textAnchor="middle">
                      {'Bali'}
                    </text>
                  </g>
                </g>
                <g className={`mp ${T(v.ofC1)}`} onClick={v.ofGo1} onMouseEnter={v.ofGo1}>
                  <circle className="halo" cx="128.5" cy="132.0" r="4" />
                  <circle className="dot" cx="128.5" cy="132.0" r="3.2" />
                  <g className="lbl">
                    <rect x="112.0" y="113.0" width="33.1" height="11" rx="5.5" />
                    <text x="128.5" y="120.6" textAnchor="middle">
                      {'Jakarta'}
                    </text>
                  </g>
                </g>
                <g className={`mp ${T(v.ofC2)}`} onClick={v.ofGo2} onMouseEnter={v.ofGo2}>
                  <circle className="halo" cx="98.2" cy="57.1" r="4" />
                  <circle className="dot" cx="98.2" cy="57.1" r="3.2" />
                  <g className="lbl">
                    <rect x="78.3" y="38.1" width="39.7" height="11" rx="5.5" />
                    <text x="98.2" y="45.7" textAnchor="middle">
                      {'Singapore'}
                    </text>
                  </g>
                </g>
              </svg>{' '}
              <span className="ofcomp" aria-hidden="true">
                {'N'}
              </span>
              <div className="ofinfo" style={S(v.ofKey)}>
                <span className="ofic">
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
                <span>
                  <b>
                    {T(v.ofName)}
                    {' · '}
                    {T(v.ofTag)}
                  </b>
                  <small>{T(v.ofAddr)}</small>
                </span>
                <Jobseeker.Button hierarchy="primary" size="md" href={A(v.ofMap)}>
                  {'Directions'}
                </Jobseeker.Button>
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
                {L(v.amMsgs).map((m_4, i_4) => (
                  <React.Fragment key={i_4}>
                    {m_4?.isMe ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                          {T(m_4?.t)}
                        </Jobseeker.ChatMessage>
                      </>
                    ) : null}{' '}
                    {m_4?.isBot ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                          {T(m_4?.t)}
                        </Jobseeker.ChatMessage>{' '}
                        {m_4?.hasLink ? (
                          <>
                            <span style={{ marginLeft: '44px' }}>
                              <Jobseeker.Button
                                hierarchy="link-color"
                                size="sm"
                                href={A(m_4?.href)}
                                iconTrailing={v.icArrow}
                              >
                                {T(m_4?.link)}
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
                    {L(v.amSugs).map((sg_5, i_5) => (
                      <React.Fragment key={i_5}>
                        <Jobseeker.Button hierarchy="secondary" size="xs" onClick={sg_5?.go}>
                          {T(sg_5?.t)}
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
