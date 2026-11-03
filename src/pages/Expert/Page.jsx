// Solutions — Talk to an expert
// Generated from the design artboard Expert.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lang: 'EN',
      step: 1,
      topic: '',
      mode: '',
      day: 0,
      slot: '',
      when: 'asap',
      size: '',
      name: '',
      co: '',
      email: '',
      phone: '',
      tried: false,
      done: false,
      faq: 0,
    };
    const B = (id) => '/_blob/' + id;
    this.TOPICS = [
      {
        k: 'hire',
        t: 'Hiring at scale',
        s: 'Fill frontline roles fast',
        logo: B('2e0842aec39ea4bc17e6d544749982f9'),
        role: 'Hiring specialist',
        ini: 'HS',
        av: '#3366ff',
        reply: 'under 1 hour',
        helps: [
          'Plan high-volume hiring for stores, outlets and sites',
          'Screen applicants with video resumes and filters',
          'Post jobs for free on Jobseeker Partners',
        ],
      },
      {
        k: 'hrms',
        t: 'HRMS & payroll',
        s: 'Attendance, payroll, ATS',
        logo: B('06922c52c0d826c56143c4224b8fb845'),
        role: 'HRMS consultant',
        ini: 'HR',
        av: '#050774',
        reply: 'under 1 hour',
        helps: [
          'Pick the right HRMS modules for your team',
          'Plan migration from spreadsheets or another system',
          'Get a custom quote for your headcount',
        ],
      },
      {
        k: 'out',
        t: 'Outsourcing',
        s: 'Talent Augmentation',
        logo: B('0934d72a7333f2a8976ae385b4569280'),
        role: 'Workforce solutions lead',
        ini: 'WS',
        av: '#cd0071',
        reply: '2 hours',
        helps: [
          'Scale teams up or down without new headcount',
          'Understand compliance, BPJS and contracts',
          'Compare outsourcing vs. direct hiring costs',
        ],
      },
      {
        k: 'exec',
        t: 'Executive search',
        s: 'Senior & leadership roles',
        glyph: '🎯',
        icBg: '#fef0c7',
        role: 'Executive search partner',
        ini: 'ES',
        av: '#b54708',
        reply: 'same business day',
        helps: [
          'Confidential search for C-level and senior roles',
          'Market mapping and salary benchmarks',
          'A shortlist with in-depth assessments',
        ],
      },
      {
        k: 'train',
        t: 'Corporate training',
        s: 'Upskill your teams',
        logo: B('c2c0bd06446c497f081ebea85a1bf425'),
        role: 'Learning consultant',
        ini: 'LC',
        av: '#067647',
        reply: '2 hours',
        helps: [
          'Design training for frontline and managers',
          'Choose between in-person and online programs',
          'Measure results after the program',
        ],
      },
      {
        k: 'any',
        t: "I'm not sure yet",
        s: 'Help me figure it out',
        glyph: '🧭',
        icBg: '#f2f3f8',
        role: 'Solutions advisor',
        ini: 'SA',
        av: '#535862',
        reply: 'under 1 hour',
        helps: [
          'Map your HR challenge to the right solution',
          'Get a quick overview of all five solutions',
          'Find the fastest place to start',
        ],
      },
    ];
    // next 5 business days after Mon 2 Nov 2026
    this.DAYS = [
      [3, 'Tue'],
      [4, 'Wed'],
      [5, 'Thu'],
      [6, 'Fri'],
      [9, 'Mon'],
    ].map(([n, dow]) => ({ n, dow, mon: 'Nov' }));
    this.SLOTS = [
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
    ];
    this.TAKEN = {
      0: ['09:00', '10:30', '14:00'],
      1: ['09:30', '13:00'],
      2: ['11:00', '15:30', '16:00'],
      3: ['10:00'],
      4: ['09:00', '13:30'],
    };
    this.WHENS = [
      ['asap', 'As soon as possible'],
      ['today', 'Later today'],
      ['tomorrow', 'Tomorrow'],
    ];
    this.SIZES = ['1–50', '51–200', '201–1,000', '1,000+'];
    this.FAQS = [
      [
        'Is talking to an expert free?',
        'Yes. The conversation is free and there is no obligation to buy anything.',
      ],
      [
        'How is this different from a demo?',
        'A demo shows a product. Talking to an expert starts with your problem — we may recommend one solution, several, or tell you where to start.',
      ],
      [
        'Can you help a company with several locations?',
        'Yes. Many of our clients hire across cities. Our specialists can plan hiring and HR for multiple outlets, stores or sites.',
      ],
      [
        'What should I prepare?',
        'A rough headcount, the roles you hire for most, and what you use today for HR. That is enough to start.',
      ],
      ['Which languages do you speak?', 'Our team speaks Bahasa Indonesia and English.'],
    ];
    this.EXPECT = [
      ['1', 'Tell us the problem', 'Pick a topic and share a few details. It takes about a minute.'],
      [
        '2',
        'Meet the right specialist',
        'You talk to someone who works on that problem every day — not a general sales rep.',
      ],
      ['3', 'Leave with a plan', 'Get clear next steps and, if it fits, a quote tailored to your company.'],
    ];
    this.OFFICES = [
      ['Bali HQ (J-Loft)', 'J-Loft Office, Griya Jimbaran Hub, Jl. Karang Mas, Jimbaran, Bali 80361'],
      ['Jakarta', 'Menara Kompas, Jl. Palmerah Sel. No.21, Gelora, Tanah Abang, Central Jakarta 10270'],
      ['Singapore', '10 Anson Road #22-02 International Plaza, Singapore 079903'],
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
    const tp = this.TOPICS.find((t) => t.k === s.topic) || this.TOPICS[5];
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim());
    const okPhone = s.phone.replace(/\D/g, '').length >= 8;
    const miss = { name: !s.name.trim(), co: !s.co.trim(), email: !okEmail, phone: !okPhone };
    const needSlot = s.mode === 'call' && !s.slot;
    const anyMiss = miss.name || miss.co || miss.email || miss.phone;
    const e = (k) => (s.tried && miss[k] ? 'err' : '');
    const d = this.DAYS[s.day];
    const whenSummary =
      s.mode === 'call'
        ? d.dow + ' ' + d.n + ' Nov · ' + s.slot + ' WIB'
        : 'Callback · ' + (this.WHENS.find((w) => w[0] === s.when) || [])[1];
    const taken = this.TAKEN[s.day] || [];
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      notDone: !s.done,
      done: s.done,
      isS1: s.step === 1,
      isS2: s.step === 2,
      isS3: s.step === 3,
      paneKey: { animationName: 'xpin' },
      steps: [
        ['1', 'Topic'],
        ['2', 'Channel'],
        ['3', 'Details'],
      ].map(([n, t], i) => ({
        n: s.step > i + 1 ? '✓' : n,
        t,
        cls: s.step === i + 1 ? 'on' : s.step > i + 1 ? 'ok' : '',
      })),
      barStyle: { width: (s.step / 3) * 100 + '%' },
      topics: this.TOPICS.map((t, i) => ({
        ...t,
        hasLogo: !!t.logo,
        noLogo: !t.logo,
        icStyle: { background: t.icBg || '#ffffff', boxShadow: t.logo ? 'inset 0 0 0 1px #e9eaeb' : 'none' },
        on: s.topic === t.k,
        cls: s.topic === t.k ? 'on' : '',
        delay: { animationDelay: i * 0.05 + 's' },
        pick: () => this.setState({ topic: t.k, step: 2 }),
      })),
      topic: { ...tp, avStyle: { background: tp.av, color: tp.av }, helps: tp.helps.map((t) => ({ t })) },
      waHref:
        'https://wa.me/6281318817887?text=' +
        encodeURIComponent('Hi Jobseeker team, I would like to talk to an expert about: ' + tp.t),
      pickCall: () => this.setState({ mode: 'call', step: 3, tried: false }),
      pickBack: () => this.setState({ mode: 'back', step: 3, tried: false }),
      back: () => this.setState({ step: s.step - 1, tried: false }),
      isCall: s.mode === 'call',
      isBack: s.mode === 'back',
      s3Title: s.mode === 'call' ? 'Pick a time (WIB)' : 'When should we call you?',
      days: this.DAYS.map((x, i) => ({
        ...x,
        on: s.day === i,
        cls: s.day === i ? 'on' : '',
        pick: () => this.setState({ day: i, slot: '' }),
      })),
      slots: this.SLOTS.map((t) => {
        const tk = taken.includes(t);
        return {
          t,
          taken: tk,
          on: s.slot === t,
          cls: tk ? 'taken' : s.slot === t ? 'on' : '',
          pick: () => {
            if (!tk) this.setState({ slot: t });
          },
        };
      }),
      whens: this.WHENS.map(([k, t]) => ({
        t,
        on: s.when === k,
        cls: s.when === k ? 'on' : '',
        pick: () => this.setState({ when: k }),
      })),
      sizes: this.SIZES.map((t) => ({
        t,
        on: s.size === t,
        cls: s.size === t ? 'on' : '',
        pick: () => this.setState({ size: s.size === t ? '' : t }),
      })),
      name: s.name,
      co: s.co,
      email: s.email,
      phone: s.phone,
      onName: (ev) => this.setState({ name: ev.target.value }),
      onCo: (ev) => this.setState({ co: ev.target.value }),
      onEmail: (ev) => this.setState({ email: ev.target.value }),
      onPhone: (ev) => this.setState({ phone: ev.target.value }),
      eName: e('name'),
      eCo: e('co'),
      eEmail: e('email'),
      ePhone: e('phone'),
      showErr: s.tried && (anyMiss || needSlot),
      errMsg: needSlot ? 'Please pick a time slot.' : 'Please fill in the highlighted fields.',
      goLabel: s.mode === 'call' ? 'Confirm my call' : 'Request a callback',
      submit: (ev) => {
        if (ev && ev.preventDefault) ev.preventDefault();
        if (anyMiss || needSlot) this.setState({ tried: true });
        else this.setState({ done: true });
      },
      firstName: s.name.trim().split(' ')[0],
      whenSummary,
      doneMsg:
        s.mode === 'call'
          ? 'Our ' + tp.role + ' will send a video call invite to ' + s.email.trim() + '.'
          : 'Our ' + tp.role + ' will call +62 ' + s.phone.trim() + '.',
      reset: () =>
        this.setState({
          step: 1,
          topic: '',
          mode: '',
          day: 0,
          slot: '',
          when: 'asap',
          size: '',
          name: '',
          co: '',
          email: '',
          phone: '',
          tried: false,
          done: false,
        }),
      expect: this.EXPECT.map(([n, t, dd], i) => ({
        n,
        t,
        d: dd,
        delay: { transitionDelay: i * 0.12 + 's' },
      })),
      faqs: this.FAQS.map(([q, a], i) => ({
        q,
        a,
        on: s.faq === i,
        cls: s.faq === i ? 'on' : '',
        toggle: () => this.setState({ faq: s.faq === i ? -1 : i }),
      })),
      offices: this.OFFICES.map(([n, a]) => ({ n, a })),
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
      <section id="top" className="xphero">
        <div className="xporbit" aria-hidden="true">
          <span className="o1" />
          <span className="o2" />
          <span className="o3" />
          <i className="p1" />
          <i className="p2" />
          <i className="p3" />
        </div>
        <div
          className="wrap xpgrid"
          style={{ position: 'relative', paddingTop: '64px', paddingBottom: '96px' }}
        >
          <div className="xpleft">
            <nav className="xpcrumb rise d1" aria-label="Breadcrumb">
              <a href="/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/solutions/">{'Solutions'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Talk to an expert'}</b>
            </nav>
            <span className="xplive rise d1">
              <i />
              {'Experts online · Mon–Fri, 09:00–18:00 WIB'}
            </span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '54px',
                lineHeight: '62px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#ffffff',
              }}
            >
              {'Talk to an expert. '}
              <span className="xphl">{'Get a straight answer.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '500px',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#cdcde3',
              }}
            >
              {
                "Tell us what you're solving and we'll connect you with the right specialist — for hiring, HRMS, outsourcing or training. No sales script."
              }
            </p>
            <div className="xpquick rise d4">
              <a href="https://wa.me/6281318817887" className="xpq wa">
                <span className="xpqi">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z" />
                  </svg>
                </span>
                <span>
                  <b>{'WhatsApp'}</b>
                  <small>{'Fastest reply'}</small>
                </span>
              </a>{' '}
              <a href="tel:+6281318817887" className="xpq">
                <span className="xpqi">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </span>
                <span>
                  <b>{'+62 813 1881 7887'}</b>
                  <small>{'Call sales'}</small>
                </span>
              </a>{' '}
              <a href="mailto:support@jobseeker.company" className="xpq">
                <span className="xpqi">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                <span>
                  <b>{'Email'}</b>
                  <small>{'support@jobseeker.company'}</small>
                </span>
              </a>
            </div>
            <div className="xpstats rise d5">
              <div>
                <b>{'3.9M+'}</b>
                <small>{'verified candidates'}</small>
              </div>
              <div>
                <b>{'420K+'}</b>
                <small>{'candidates placed'}</small>
              </div>
              <div>
                <b>{'5'}</b>
                <small>{'solutions, one team'}</small>
              </div>
            </div>
          </div>
          <div className="xpcard rise d4">
            {v.notDone ? (
              <>
                <div className="xpsteps" aria-hidden="true">
                  {L(v.steps).map((s_0, i_0) => (
                    <React.Fragment key={i_0}>
                      <span className={`xpst ${T(s_0?.cls)}`}>
                        <em>{T(s_0?.n)}</em>
                        {T(s_0?.t)}
                      </span>
                    </React.Fragment>
                  ))}{' '}
                  <span className="xpbar">
                    <i style={S(v.barStyle)} />
                  </span>
                </div>
                {v.isS1 ? (
                  <>
                    <div className="xppane" style={S(v.paneKey)}>
                      <b className="xpq1">{'What can we help you with?'}</b>{' '}
                      <small className="xpsub">
                        {"Pick one — we'll match you with the right specialist."}
                      </small>
                      <div className="xptopics">
                        {L(v.topics).map((t_1, i_1) => (
                          <React.Fragment key={i_1}>
                            <button
                              type="button"
                              className={`xptopic ${T(t_1?.cls)}`}
                              onClick={t_1?.pick}
                              aria-pressed={t_1?.on}
                              style={S(t_1?.delay)}
                            >
                              <span className="xpti" style={S(t_1?.icStyle)}>
                                {t_1?.hasLogo ? (
                                  <>
                                    <img src={A(t_1?.logo)} alt="" />
                                  </>
                                ) : null}
                                {t_1?.noLogo ? <>{T(t_1?.glyph)}</> : null}
                              </span>{' '}
                              <span className="xptt">
                                <b>{T(t_1?.t)}</b>
                                <small>{T(t_1?.s)}</small>
                              </span>{' '}
                              <span className="xparr" aria-hidden="true">
                                {'→'}
                              </span>
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                ) : null}{' '}
                {v.isS2 ? (
                  <>
                    <div className="xppane" style={S(v.paneKey)}>
                      <div className="xpmatch">
                        <span className="xpav" style={S(v.topic?.avStyle)}>
                          <em>{T(v.topic?.ini)}</em>
                          <i />
                        </span>{' '}
                        <span className="xpmt">
                          <small>{"You'll talk to our"}</small>
                          <b>{T(v.topic?.role)}</b>
                          <span>
                            {'Usually replies in '}
                            {T(v.topic?.reply)}
                          </span>
                        </span>
                      </div>
                      <ul className="xpcan">
                        {L(v.topic?.helps).map((h_2, i_2) => (
                          <React.Fragment key={i_2}>
                            <li>{T(h_2?.t)}</li>
                          </React.Fragment>
                        ))}
                      </ul>
                      <b className="xpq1" style={{ marginTop: '6px' }}>
                        {'How would you like to talk?'}
                      </b>
                      <div className="xpchans">
                        <a className="xpchan wa" href={A(v.waHref)}>
                          <span className="xpci">{'💬'}</span>
                          <span>
                            <b>{'Chat on WhatsApp'}</b>
                            <small>{'Right now, during office hours'}</small>
                          </span>
                          <span className="xpbadge">{'Fastest'}</span>
                        </a>{' '}
                        <button type="button" className="xpchan" onClick={v.pickCall}>
                          <span className="xpci">{'📅'}</span>
                          <span>
                            <b>{'Book a 30-min video call'}</b>
                            <small>{'Pick a time that suits you'}</small>
                          </span>
                        </button>{' '}
                        <button type="button" className="xpchan" onClick={v.pickBack}>
                          <span className="xpci">{'📞'}</span>
                          <span>
                            <b>{'Request a callback'}</b>
                            <small>{"We'll phone you"}</small>
                          </span>
                        </button>
                      </div>
                      <button type="button" className="xpback" onClick={v.back}>
                        {'← Change topic'}
                      </button>
                    </div>
                  </>
                ) : null}{' '}
                {v.isS3 ? (
                  <>
                    <form className="xppane" style={S(v.paneKey)} onSubmit={v.submit} noValidate>
                      <b className="xpq1">{T(v.s3Title)}</b>{' '}
                      {v.isCall ? (
                        <>
                          <div className="xpdays" role="group" aria-label="Day">
                            {L(v.days).map((d_3, i_3) => (
                              <React.Fragment key={i_3}>
                                <button
                                  type="button"
                                  className={`xpday ${T(d_3?.cls)}`}
                                  onClick={d_3?.pick}
                                  aria-pressed={d_3?.on}
                                >
                                  <small>{T(d_3?.dow)}</small>
                                  <b>{T(d_3?.n)}</b>
                                  <small>{T(d_3?.mon)}</small>
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                          <div className="xpslots" role="group" aria-label="Time (WIB)">
                            {L(v.slots).map((t_4, i_4) => (
                              <React.Fragment key={i_4}>
                                <button
                                  type="button"
                                  className={`xpslot ${T(t_4?.cls)}`}
                                  onClick={t_4?.pick}
                                  aria-disabled={t_4?.taken}
                                  aria-pressed={t_4?.on}
                                >
                                  {T(t_4?.t)}
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                        </>
                      ) : null}{' '}
                      {v.isBack ? (
                        <>
                          <div className="xpwhen" role="group" aria-label="When should we call?">
                            {L(v.whens).map((w_5, i_5) => (
                              <React.Fragment key={i_5}>
                                <button
                                  type="button"
                                  className={w_5?.cls}
                                  onClick={w_5?.pick}
                                  aria-pressed={w_5?.on}
                                >
                                  {T(w_5?.t)}
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                        </>
                      ) : null}
                      <div className="xprow">
                        <label className={`xpf ${T(v.eName)}`}>
                          <span>{'Full name*'}</span>
                          <input
                            type="text"
                            placeholder="Your full name"
                            value={v.name}
                            onChange={v.onName}
                          />
                        </label>{' '}
                        <label className={`xpf ${T(v.eCo)}`}>
                          <span>{'Company*'}</span>
                          <input type="text" placeholder="Company name" value={v.co} onChange={v.onCo} />
                        </label>
                      </div>
                      <div className="xprow">
                        <label className={`xpf ${T(v.eEmail)}`}>
                          <span>{'Work email*'}</span>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            value={v.email}
                            onChange={v.onEmail}
                          />
                        </label>{' '}
                        <label className={`xpf ${T(v.ePhone)}`}>
                          <span>{'WhatsApp / phone*'}</span>
                          <span className="xpph">
                            <em>{'+62'}</em>
                            <input
                              type="tel"
                              placeholder="812 3456 7890"
                              value={v.phone}
                              onChange={v.onPhone}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="xpsize">
                        <span>{'Company size'}</span>
                        <div>
                          {L(v.sizes).map((z_6, i_6) => (
                            <React.Fragment key={i_6}>
                              <button
                                type="button"
                                className={z_6?.cls}
                                onClick={z_6?.pick}
                                aria-pressed={z_6?.on}
                              >
                                {T(z_6?.t)}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      {v.showErr ? (
                        <>
                          <small className="xperr">{T(v.errMsg)}</small>
                        </>
                      ) : null}{' '}
                      <button type="submit" className="xpgo">
                        {T(v.goLabel)}{' '}
                        <span className="arr" aria-hidden="true">
                          {'→'}
                        </span>
                      </button>{' '}
                      <button type="button" className="xpback" onClick={v.back}>
                        {'← Back'}
                      </button>
                    </form>
                  </>
                ) : null}
              </>
            ) : null}{' '}
            {v.done ? (
              <>
                <div className="xpdone">
                  <span className="xpburst" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>{' '}
                  <span className="xpok">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>{' '}
                  <b>
                    {"You're all set, "}
                    {T(v.firstName)}
                    {'!'}
                  </b>
                  <p>{T(v.doneMsg)}</p>
                  <div className="xpsum">
                    <span>{T(v.topic?.t)}</span>
                    <span>{T(v.whenSummary)}</span>
                    <span>{T(v.co)}</span>
                  </div>
                  <button type="button" className="xpback" onClick={v.reset}>
                    {'Start over'}
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '32px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#cd0071',
            }}
          >
            {'What to expect'}
          </span>
          <h2
            className="h2"
            style={{
              margin: '0',
              fontSize: '40px',
              lineHeight: '48px',
              letterSpacing: '-0.03em',
              color: '#050774',
            }}
          >
            {'A conversation, not a pitch'}
          </h2>
        </div>
        <div className="xpexp">
          {L(v.expect).map((e_7, i_7) => (
            <React.Fragment key={i_7}>
              <div className="xpe rv" style={S(e_7?.delay)}>
                <span className="xpen">{T(e_7?.n)}</span> <b>{T(e_7?.t)}</b>
                <p>{T(e_7?.d)}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="xpfaqwrap">
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'FAQ'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '36px',
                lineHeight: '44px',
                letterSpacing: '-0.03em',
                color: '#050774',
              }}
            >
              {'Before you reach out'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#535862' }}>
              {'Still unsure? Ask Agent Ming in the corner — or just message us.'}
            </p>
          </div>
          <div className="xpfaq">
            {L(v.faqs).map((f_8, i_8) => (
              <React.Fragment key={i_8}>
                <div className={`xpfq ${T(f_8?.cls)}`}>
                  <button type="button" onClick={f_8?.toggle} aria-expanded={f_8?.on}>
                    <span>{T(f_8?.q)}</span>
                    <i aria-hidden="true" />
                  </button>
                  <div className="xpfa">
                    <div>
                      <p>{T(f_8?.a)}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="xpoff rv">
          <div className="xpoffh">
            <b>{'Prefer to meet in person?'}</b>
            <span>{'Visit one of our offices — please book ahead.'}</span>
          </div>
          <div className="xpoffs">
            {L(v.offices).map((o_9, i_9) => (
              <React.Fragment key={i_9}>
                <div className="xpo">
                  <span className="xpopin" aria-hidden="true">
                    {'📍'}
                  </span>
                  <b>{T(o_9?.n)}</b>
                  <small>{T(o_9?.a)}</small>
                </div>
              </React.Fragment>
            ))}
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
                {L(v.amMsgs).map((m_10, i_10) => (
                  <React.Fragment key={i_10}>
                    <div className={`ammsg ${T(m_10?.who)}`}>
                      {T(m_10?.t)}
                      {m_10?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_10?.href)}>
                            {T(m_10?.link)}
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
                    {L(v.amSugs).map((sg_11, i_11) => (
                      <React.Fragment key={i_11}>
                        <button type="button" className="asug" onClick={sg_11?.go}>
                          {T(sg_11?.t)}
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
