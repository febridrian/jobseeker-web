// Home — concept 2 (Jobseeker DS)
// Generated from the design artboard Home2.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';
import Jobseeker from '../../ds/jobseeker/index.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      pc: 0,
      menuOpen: false,
      pxT: 0,
      pxHold: false,
      sp: 0,
      stDrv: 'auto',
      stFlat: true,
      stVw: 1440,
      stH: 820,
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
    this.storyInit();
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
    const go = () => {
      if (this._pcI) return;
      const t0 = Date.now();
      this._pcI = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / 2000);
        this.setState({ pc: p });
        if (p >= 1) clearInterval(this._pcI);
      }, 33);
    };
    const el = typeof document !== 'undefined' && document.getElementById('pstats');
    if (el && typeof IntersectionObserver !== 'undefined') {
      this._pcO = new IntersectionObserver(
        (es) => {
          if (es.some((e) => e.isIntersecting)) {
            go();
            this._pcO.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      this._pcO.observe(el);
    } else go();
    this.storyMount();
    this._pxI = setInterval(() => {
      if (this.state.pxHold) return;
      const t = (this.state.pxT || 0) + 0.1 / 6;
      if (t >= 1) this.setState({ pil: ((this.state.pil || 0) + 1) % 3, pxT: 0 });
      else this.setState({ pxT: t });
    }, 100);
    this._amT1 = setTimeout(() => this.setState({ amHint: true }), 2500);
    this._amT2 = setTimeout(() => this.setState({ amHint: false }), 9000);
  }
  componentWillUnmount() {
    clearInterval(this._pcI);
    this._pcO && this._pcO.disconnect();
    this.storyUnmount();
    clearInterval(this._pxI);
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
  storyInit() {
    const B = (id) => '/_blob/' + id;
    this.TRACK = 5200;
    this.STAGE_H = 820;
    this.IMG_W = 1500;
    this.IMG_H = 844;
    this.ANCH = {
      employer: [0.6, 0.47],
      seeker: [0.79, 0.64],
      partners: [0.66, 0.38],
      executive: [0.5, 0.27],
      augmentation: [0.86, 0.45],
      academy: [0.56, 0.62],
      recruiter: [0.62, 0.52],
    };
    // [progress, zoom, focusX, focusY, screenX, screenY]
    this.CAM = [
      [0, 1, 0.62, 0.47, 1010, 410],
      [0.13, 1, 0.62, 0.47, 1010, 410],
      [0.2, 1.55, 0.695, 0.555, 820, 430],
      [0.33, 1.55, 0.695, 0.555, 820, 430],
      [0.4, 2.1, 0.6, 0.47, 760, 470],
      [0.66, 2.1, 0.6, 0.47, 760, 470],
      [0.74, 2.1, 0.79, 0.64, 700, 470],
      [0.83, 2.1, 0.79, 0.64, 700, 470],
      [0.9, 0.98, 0.6, 0.5, 760, 420],
      [1, 0.98, 0.6, 0.5, 760, 420],
    ];
    const N = (key, t, link, href, from, to) => ({
      kind: 'need',
      key,
      t,
      link,
      href,
      from,
      to,
      dx: 0,
      dy: 0,
    });
    const SW = B('06922c52c0d826c56143c4224b8fb845'),
      APP = B('4a0dd97415f6c2f2d2931c4e002cf8ed'),
      PART = B('2e0842aec39ea4bc17e6d544749982f9');
    this.BUB = [
      N('employer', 'I need workers', 'Jobseeker Software', '/v2/software/', -0.05, 0.13),
      N('seeker', 'I need a job', 'Jobseeker App', '/v2/app/', -0.05, 0.13),
      N('partners', 'Need 2 baristas before Saturday', 'Jobseeker Partners', '/v2/partners/', -0.05, 0.13),
      N('executive', 'Still no area manager', 'Executive Search', '/v2/executive/', -0.05, 0.13),
      N('augmentation', '50 pickers in 3 weeks', 'Talent Augmentation', '/v2/talent/', -0.05, 0.13),
      N('academy', '25 new store heads need training', 'Jobseeker Academy', '/training/', -0.05, 0.13),
      { kind: 'need', key: 'employer', t: 'I need workers', from: 0.17, to: 0.33, dx: 0, dy: 0 },
      { kind: 'seeker', key: 'seeker', t: 'I need a job', from: 0.17, to: 0.33, dx: 0, dy: 0 },
      {
        kind: 'stat',
        key: 'employer',
        parts: [
          ['1,240', 'applications'],
          ['3', 'HR staff'],
          ['±124', 'hours'],
        ],
        from: 0.36,
        to: 0.545,
        dx: 0,
        dy: -6,
      },
      {
        kind: 'answer',
        key: 'employer',
        t: 'Jobseeker Software',
        logo: SW,
        sub: ['Inbox', 'Matches criteria', 'Interview', 'Offer'],
        from: 0.545,
        to: 0.7,
        dx: 0,
        dy: -6,
      },
      { kind: 'seeker', key: 'seeker', t: 'I need a job', from: 0.675, to: 0.83, dx: -120, dy: 0 },
      {
        kind: 'answer',
        key: 'seeker',
        t: 'Jobseeker App',
        logo: APP,
        from: 0.715,
        to: 0.83,
        dx: 110,
        dy: -8,
      },
      {
        kind: 'chat',
        key: 'seeker',
        t: 'Hi, has my application been read?',
        who: 'Rina · candidate',
        from: 0.755,
        to: 0.83,
        dx: 0,
        dy: -92,
      },
      {
        kind: 'chat-reply',
        key: 'seeker',
        t: 'Yes, Rina. We’ll reply today.',
        who: 'Recruiter · via Jobseeker Partners',
        from: 0.78,
        to: 0.83,
        dx: 170,
        dy: -168,
      },
      {
        kind: 'answer',
        key: 'seeker',
        t: 'Jobseeker Partners',
        logo: PART,
        from: 0.79,
        to: 0.83,
        dx: 200,
        dy: -246,
      },
      N('partners', 'Need 2 baristas before Saturday', 'Jobseeker Partners', '/v2/partners/', 0.85, 1.01),
      N('executive', 'Still no area manager', 'Executive Search', '/v2/executive/', 0.85, 1.01),
      N('augmentation', '50 pickers in 3 weeks', 'Talent Augmentation', '/v2/talent/', 0.85, 1.01),
      N('academy', '25 new store heads need training', 'Jobseeker Academy', '/training/', 0.85, 1.01),
    ];
    this.CAPS = [
      'Every company has a different HR need.',
      'Employers need workers. People need jobs.',
      'Screening by hand: 1,240 applications, 3 HR staff, ±124 hours.',
      'Jobseeker Software sorts every applicant into one pipeline.',
      'Candidates stay informed in Jobseeker App — and get a reply.',
      'One ecosystem for every workforce need.',
    ];
  }
  storyMount() {
    const decide = () => {
      const flat = (window.innerHeight || 0) > 1600;
      const el = document.getElementById('top');
      const stage = el ? el.querySelector('.ststage') : null;
      const vw = stage ? stage.offsetWidth : 1440;
      const sh = flat ? this.STAGE_H : stage ? stage.offsetHeight : this.STAGE_H;
      if (flat !== this.state.stFlat || vw !== this.state.stVw || sh !== this.state.stH)
        this.setState({ stFlat: flat, stVw: vw, stH: sh });
      return flat;
    };
    this._stScroll = () => {
      if (this._stRaf) return;
      this._stRaf = requestAnimationFrame(() => {
        this._stRaf = 0;
        if (this.state.stFlat) return;
        const el = document.getElementById('top');
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = Math.max(1, el.offsetHeight - (this.state.stH || this.STAGE_H));
        const p = Math.min(1, Math.max(0, (72 - r.top) / total));
        if (Math.abs(p - this.state.sp) > 0.0005) {
          this._stLast = Date.now();
          this.setState({ sp: p, stDrv: 'scroll' });
        }
      });
    };
    this._stResize = () => {
      decide();
      this._stScroll();
    };
    window.addEventListener('scroll', this._stScroll, { passive: true });
    window.addEventListener('resize', this._stResize);
    decide();
    this._stAuto = setInterval(() => {
      if (this.state.paused) return;
      if (!this.state.stFlat) {
        if (Date.now() - (this._stLast || 0) < 1500) return;
        const el = document.getElementById('top');
        if (!el) return;
        const r = el.getBoundingClientRect();
        const sh = this.state.stH || this.STAGE_H;
        if (r.bottom < sh * 0.5 || r.top > window.innerHeight * 0.5) return;
      }
      let p = (this.state.sp || 0) + (0.04 / 26) * 2.5;
      if (p > 1.06) p = 0;
      this.setState({ sp: p, stDrv: 'auto' });
    }, 100);
    setTimeout(() => this._stScroll(), 50);
  }
  storyUnmount() {
    window.removeEventListener('scroll', this._stScroll);
    window.removeEventListener('resize', this._stResize);
    clearInterval(this._stAuto);
    if (this._stRaf) cancelAnimationFrame(this._stRaf);
  }
  storyVals() {
    const s = this.state;
    const p = Math.min(1, Math.max(0, s.sp || 0));
    const hn = (a, b, x) => {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };
    const vw = s.stVw || 1440,
      sh = s.stH || this.STAGE_H,
      sc = vw / 1440,
      sv = sh / this.STAGE_H;
    const g = Math.max(vw / this.IMG_W, sh / this.IMG_H, 1);
    // camera
    const K = this.CAM;
    let k = 0;
    while (k < K.length - 2 && p > K[k + 1][0]) k++;
    const a = K[k],
      b = K[k + 1];
    const t = hn(a[0], b[0], p);
    const L = (i) => a[i] + (b[i] - a[i]) * t;
    const z = L(1) * g,
      fx = L(2),
      fy = L(3),
      sx = L(4) * sc,
      sy = L(5) * sv;
    const W = this.IMG_W * z,
      H = this.IMG_H * z;
    const X = Math.min(0, Math.max(vw - W, sx - fx * W));
    const Y = Math.min(0, Math.max(sh - H, sy - fy * H));
    const night = hn(0.72, 0.94, p);
    const mm = 0.022;
    let shown = 0;
    const bubbles = this.BUB.map((bb) => {
      const op = hn(bb.from, bb.from + mm, p) * (1 - hn(bb.to - mm, bb.to, p));
      const an = this.ANCH[bb.key];
      const x = X + an[0] * W + bb.dx * Math.min(1, z),
        y = Y + an[1] * H + bb.dy;
      const on = op > 0.05;
      if (on) shown++;
      const scl = 0.82 + 0.18 * hn(bb.from, bb.from + mm * 1.6, p);
      const n = bb.sub ? Math.floor(hn(0.56, 0.69, p) * 3.999) + 1 : 0;
      return {
        kind: 'k-' + bb.kind + (on ? ' on' : ''),
        isNeed: bb.kind === 'need',
        isSeeker: bb.kind === 'seeker',
        isStat: bb.kind === 'stat',
        isAnswer: bb.kind === 'answer',
        isChat: bb.kind === 'chat' || bb.kind === 'chat-reply',
        t: bb.t || '',
        who: bb.who || '',
        link: bb.link || '',
        href: bb.href || '#top',
        hasLink: !!bb.link,
        tab: on ? 0 : -1,
        logo: bb.logo || '',
        hasSub: !!bb.sub,
        sub: (bb.sub || []).map((x2, i) => ({
          t: x2,
          n: i < n - 1 ? '✓' : String(i + 1),
          cls: i < n - 1 ? 'on done' : i === n - 1 ? 'on cur' : '',
        })),
        parts: (bb.parts || []).map(([v, l]) => ({ v, l })),
        style: {
          opacity: op.toFixed(3),
          visibility: on ? 'visible' : 'hidden',
          transform:
            'translate3d(' +
            x.toFixed(1) +
            'px,' +
            y.toFixed(1) +
            'px,0) translate(-50%,-100%) scale(' +
            scl.toFixed(3) +
            ')',
        },
      };
    });
    const r = hn(0.1, 0.22, p) * (1 - hn(0.3, 0.4, p));
    const ci = Math.min(5, Math.floor(p * 6));
    const flat = !!s.stFlat;
    return {
      stMode: flat ? 'flat' : 'scroll',
      isAuto: true,
      trackStyle: { height: Math.round(flat ? this.STAGE_H : sh * 6.5) + 'px' },
      worldStyle: {
        transform: 'translate3d(' + X.toFixed(1) + 'px,' + Y.toFixed(1) + 'px,0) scale(' + z.toFixed(4) + ')',
      },
      imgStyle: {
        filter:
          'brightness(' + (1 - 0.3 * night).toFixed(3) + ') saturate(' + (1 - 0.3 * night).toFixed(3) + ')',
      },
      routeStyle: { strokeDashoffset: (1 - r).toFixed(3), opacity: r > 0.001 ? 1 - hn(0.3, 0.4, p) : 0 },
      nightStyle: { opacity: night.toFixed(3) },
      scrimStyle: { opacity: Math.max(0.55, 1 - hn(0.1, 0.16, p)).toFixed(3) },
      copyStyle: {
        opacity: (1 - hn(0.105, 0.13, p)).toFixed(3),
        transform: 'translateY(' + (-12 * hn(0.105, 0.13, p)).toFixed(1) + 'px)',
        visibility: p > 0.135 ? 'hidden' : 'visible',
      },
      bubbles,
      ctaStyle: (() => {
        const o = Math.max(1 - hn(0.105, 0.13, p), hn(0.88, 0.92, p));
        return { opacity: o.toFixed(3), visibility: o < 0.02 ? 'hidden' : 'visible' };
      })(),
      tagStyle: { opacity: shown ? 1 : 0 },
      capNum: '0' + (ci + 1),
      capText: this.CAPS[ci],
      capStyle: { opacity: (hn(0.14, 0.17, p) * (1 - hn(0.97, 1, p))).toFixed(3) },
      chapters: [0, 1, 2, 3, 4, 5].map((i) => ({
        fill: { width: (Math.min(1, Math.max(0, p * 6 - i)) * 100).toFixed(1) + '%' },
      })),
      whiteStyle: { opacity: flat || s.stDrv !== 'scroll' ? 0 : hn(0.95, 1, p).toFixed(3) },
    };
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
        href: '#solutions',
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
        href: '#jobseekers',
      },
      {
        k: ['hire', 'staff', 'crew', 'recruit', 'rekrut'],
        t: 'For frontline roles, Jobseeker Partners helps you hire from your phone. For larger teams, our Services team can staff it for you.',
        link: 'See solutions',
        href: '#solutions',
      },
      {
        k: ['train', 'course', 'skill', 'academy'],
        t: 'Jobseeker Academy runs training and upskilling programs for individuals and companies.',
        link: 'See Academy',
        href: '#solutions',
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
      pstats: [
        [3.9, 'M+', 1, 'candidates in our database'],
        [420, 'K+', 0, 'candidates successfully placed'],
        [1.8, 'M+', 1, 'candidates processed'],
        [40, 'K+', 0, 'employers onboarded'],
      ].map(([n, u, d, l], i) => {
        const p = Math.max(0, Math.min(1, s.pc * 1.2 - i * 0.05));
        const e = 1 - Math.pow(1 - p, 3);
        return { v: (n * e).toFixed(d) + u, full: n + u + ' ' + l, l, cls: p >= 1 ? 'done' : '' };
      }),
      ...this.amVals(),
      yes: true,
      amAvatar: { name: 'Agent Ming', initials: 'AM' },
      icMenu: this.ic('M4 7h16M4 12h16M4 17h16'),
      icArrow: this.ic('M5 12h14M13 6l6 6-6 6'),
      icSpark: this.ic('M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z', true),
      pauseIcon: s.paused ? this.ic('M8 5v14l11-7z', true) : this.ic('M7 5h4v14H7zM13 5h4v14h-4z', true),
      pauseLabel: s.paused ? 'Play story' : 'Pause story',
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      paused: s.paused,
      togglePause: () => this.setState({ paused: !s.paused }),
      ...this.storyVals(),
      clients: this.CLIENTS.concat(this.CLIENTS),
      pillars: this.PILLARS.map((p, i) => ({
        n: p.n,
        t: p.t,
        d: p.d,
        on: s.pil === i,
        cls: s.pil === i ? 'on' : '',
        bar: { width: (s.pil === i ? (s.pxT || 0) * 100 : 0).toFixed(1) + '%' },
        pick: () => this.setState({ pil: i, pxT: 0 }),
      })),
      pxHold: () => this.setState({ pxHold: true }),
      pxGo: () => this.setState({ pxHold: false }),
      pxTone: 't' + ((s.pil || 0) + 1),
      pxLabel:
        this.PILLARS[s.pil || 0].t.toLowerCase() === 'hire'
          ? 'hiring'
          : this.PILLARS[s.pil || 0].t.toLowerCase() === 'manage'
            ? 'managing your team'
            : 'developing your team',
      pxNum: this.PILLARS[s.pil || 0].n,
      pxIsHire: (s.pil || 0) === 0,
      pxIsManage: s.pil === 1,
      pxIsDevelop: s.pil === 2,
      pxKey: { animationName: 'pxin' },
      pxFunnel: [
        ['Applied', '128', 100],
        ['AI shortlist', '24', 42],
        ['Hired', '6', 14],
      ].map(([l, v, w], i) => ({ l, v, w: { width: w + '%', animationDelay: 0.15 + i * 0.15 + 's' } })),
      pxRing: { strokeDashoffset: 4 },
      pxCourses: [
        ['Customer service', 82],
        ['Food safety', 64],
        ['Store leadership', 38],
      ].map(([t, v], i) => ({ t, v: v + '%', w: { width: v + '%', animationDelay: 0.15 + i * 0.15 + 's' } })),
      pxProds: [
        [
          ['Jobseeker Software', '/v2/software/', '06922c52c0d826c56143c4224b8fb845'],
          ['Jobseeker Partners', '/v2/partners/', '2e0842aec39ea4bc17e6d544749982f9'],
          ['Executive Search', '/v2/executive/', '0934d72a7333f2a8976ae385b4569280'],
        ],
        [
          ['HRIS & payroll', '/v2/software/', '06922c52c0d826c56143c4224b8fb845'],
          ['Talent Augmentation', '/v2/talent/', '0934d72a7333f2a8976ae385b4569280'],
        ],
        [
          ['Jobseeker Academy', '/v2/academy/', 'c2c0bd06446c497f081ebea85a1bf425'],
          ['Corporate Training', '/training/', 'c2c0bd06446c497f081ebea85a1bf425'],
        ],
      ][s.pil || 0].map(([n, href, id]) => ({ n, href, logo: '/_blob/' + id })),
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
          <a href="#top" aria-label="Jobseeker Company home">
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
      <section id="top" className={`sttrack ${T(v.stMode)}`} style={S(v.trackStyle)}>
        <div className="ststage">
          <div className="stworld" style={S(v.worldStyle)} aria-hidden="true">
            <img
              className="stimg"
              src="/images/bb72f82a831d82a71613a80e0310fbc9.webp"
              alt=""
              style={S(v.imgStyle)}
            />{' '}
            <svg className="stroute" viewBox="0 0 1500 844" preserveAspectRatio="none">
              <path
                d="M900 397 L960 430 L1030 452 L1100 500 L1185 540"
                pathLength="1"
                style={S(v.routeStyle)}
              />
            </svg>
          </div>
          <div className="stnight" style={S(v.nightStyle)} aria-hidden="true" />
          <div className="stscrim" style={S(v.scrimStyle)} aria-hidden="true" />
          <div className="stbubbles" aria-live="polite">
            {L(v.bubbles).map((b_0, i_0) => (
              <React.Fragment key={i_0}>
                <div className={`stb ${T(b_0?.kind)}`} style={S(b_0?.style)}>
                  {b_0?.isNeed ? (
                    <>
                      <span className="stbt">{T(b_0?.t)}</span>{' '}
                      {b_0?.hasLink ? (
                        <>
                          <a className="stba" href={A(b_0?.href)} tabIndex={b_0?.tab}>
                            {T(b_0?.link)} <span aria-hidden="true">{'→'}</span>
                          </a>
                        </>
                      ) : null}
                    </>
                  ) : null}{' '}
                  {b_0?.isSeeker ? (
                    <>
                      <span className="stbt">{T(b_0?.t)}</span>
                    </>
                  ) : null}{' '}
                  {b_0?.isStat ? (
                    <>
                      <span className="stsrow">
                        {L(b_0?.parts).map((x_1, i_1) => (
                          <React.Fragment key={i_1}>
                            <span>
                              <b>{T(x_1?.v)}</b>
                              <small>{T(x_1?.l)}</small>
                            </span>
                          </React.Fragment>
                        ))}
                      </span>
                    </>
                  ) : null}{' '}
                  {b_0?.isAnswer ? (
                    <>
                      <span className="stah">
                        <img src={A(b_0?.logo)} alt="" />
                        <b>{T(b_0?.t)}</b>
                      </span>{' '}
                      {b_0?.hasSub ? (
                        <>
                          <span className="stpipe">
                            {L(b_0?.sub).map((x_2, i_2) => (
                              <React.Fragment key={i_2}>
                                <span className={`stp ${T(x_2?.cls)}`}>
                                  <i>{T(x_2?.n)}</i>
                                  {T(x_2?.t)}
                                </span>
                              </React.Fragment>
                            ))}
                          </span>
                        </>
                      ) : null}
                    </>
                  ) : null}{' '}
                  {b_0?.isChat ? (
                    <>
                      <span className="stbt">{T(b_0?.t)}</span>
                      <small className="stwho">{T(b_0?.who)}</small>
                    </>
                  ) : null}
                </div>
              </React.Fragment>
            ))}
            <p className="sttag" style={S(v.tagStyle)}>
              {'Simulation · fictional companies and figures'}
            </p>
          </div>
          <div className="ct stin">
            <div className="stcopy">
              <div className="stfade" style={S(v.copyStyle)}>
                <p className="heyb rise d1">{'HR technology & workforce solutions'}</p>
                <h1 className="h1 rise d2">
                  {'Hire smarter with AI. Manage and grow your team in '}
                  <em>{'one ecosystem.'}</em>
                </h1>
                <p className="hlede rise d3">
                  {
                    'Jobseeker brings together AI-powered recruitment software, HRIS, workforce services and training — so companies can meet their HR needs and keep growing.'
                  }
                </p>
              </div>
              <div className="stfade" style={S(v.ctaStyle)}>
                <div className="ctas rise d4">
                  <Jobseeker.Button hierarchy="primary" size="xl" href="/v2/contact/">
                    {'Contact us'}
                  </Jobseeker.Button>{' '}
                  <Jobseeker.Button hierarchy="secondary" size="xl" href="/v2/solutions/">
                    {'Explore solutions'}
                  </Jobseeker.Button>
                </div>
                <a className="hcand rise d5" href="#jobseekers">
                  {
                    'Looking for a job? Browse openings at Jobseeker, our client companies and Jobseeker App →'
                  }
                </a>
              </div>
            </div>
            <div className="stcap" aria-live="polite" style={S(v.capStyle)}>
              <span className="stcapn">{T(v.capNum)}</span>
              <span>{T(v.capText)}</span>
            </div>
            <div className="stctl rise d5">
              <div className="stchap" aria-hidden="true">
                {L(v.chapters).map((c_3, i_3) => (
                  <React.Fragment key={i_3}>
                    <span>
                      <i style={S(c_3?.fill)} />
                    </span>
                  </React.Fragment>
                ))}
              </div>
              {v.isAuto ? (
                <>
                  <span>
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
                </>
              ) : null}{' '}
              <a className="stskip" href="#customers">
                {'Skip story '}
                <span aria-hidden="true">{'↓'}</span>
              </a>
            </div>
          </div>
          <div className="stwhite" style={S(v.whiteStyle)} aria-hidden="true" />
        </div>
      </section>
      <section id="customers" className="zone z1">
        <div className="ct">
          <div className="proof">
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="eyb">{'A partner for your HR needs'}</p>
              <h2 className="h2">{'Supporting recruitment and workforce management across industries.'}</h2>
            </div>
            <div className="proofr rv">
              <p className="lede">
                {
                  'From retail chains to large enterprises, our solutions are built for different recruitment and workforce needs.'
                }
              </p>
              <div className="stats" id="pstats">
                {L(v.pstats).map((t_4, i_4) => (
                  <React.Fragment key={i_4}>
                    <div className={`stat ${T(t_4?.cls)}`}>
                      <b aria-label={t_4?.full}>{T(t_4?.v)}</b>
                      <small>{T(t_4?.l)}</small>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mq" aria-label="Some of our customers">
          <div className="mqt">
            {L(v.clients).map((c_5, i_5) => (
              <React.Fragment key={i_5}>
                <span className="cl">
                  <img src={A(c_5?.src)} alt={c_5?.alt} />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="pillars" className="zone z2 pxz">
        <div className="ct">
          <div className="pxhead rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="eyb">{'Hire · Manage · Develop'}</p>
              <h2 className="h2" style={{ maxWidth: '760px' }}>
                {'Every HR need calls for the right approach.'}
              </h2>
            </div>
            <Jobseeker.Button hierarchy="link-color" size="lg" href="/compare/" iconTrailing={v.icArrow}>
              {'Find the right solution'}
            </Jobseeker.Button>
          </div>
          <div className="pxgrid" onMouseEnter={v.pxHold} onMouseLeave={v.pxGo}>
            <div className="pxtabs" role="tablist" aria-label="HR needs">
              {L(v.pillars).map((p_6, i_6) => (
                <React.Fragment key={i_6}>
                  <button
                    type="button"
                    role="tab"
                    className={`pxtab ${T(p_6?.cls)}`}
                    aria-selected={p_6?.on}
                    onClick={p_6?.pick}
                  >
                    <span className="pxnum">{T(p_6?.n)}</span>{' '}
                    <span className="pxtx">
                      <b>{T(p_6?.t)}</b> <span className="pxd">{T(p_6?.d)}</span>
                    </span>{' '}
                    <span className="pxbar" aria-hidden="true">
                      <i style={S(p_6?.bar)} />
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className={`pxpanel ${T(v.pxTone)}`} role="tabpanel" aria-label={v.pxLabel}>
              <span className="pxglow" aria-hidden="true" />{' '}
              <span className="pxbig" aria-hidden="true">
                {T(v.pxNum)}
              </span>{' '}
              {v.pxIsHire ? (
                <>
                  <div className="pxscene" style={S(v.pxKey)}>
                    <div className="pxcard pxjob">
                      <div className="pxjh">
                        <span className="pxico hire">
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
                            <rect x="3" y="7" width="18" height="13" rx="2" />
                            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </span>
                        <span>
                          <b>{'Store crew'}</b>
                          <small>{'Jakarta Selatan · 20 roles'}</small>
                        </span>
                        <Jobseeker.Badge color="success" size="sm" dot={v.yes}>
                          {'Live'}
                        </Jobseeker.Badge>
                      </div>
                      <div className="pxfun">
                        {L(v.pxFunnel).map((f_7, i_7) => (
                          <React.Fragment key={i_7}>
                            <div className="pxfr">
                              <span>{T(f_7?.l)}</span>
                              <span className="pxft">
                                <i style={S(f_7?.w)} />
                              </span>
                              <b>{T(f_7?.v)}</b>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="pxcard pxfloat f1">
                      <Jobseeker.Avatar size="md" name="Ayu Rahma" initials="AR"></Jobseeker.Avatar>{' '}
                      <span>
                        <b>{'Ayu R.'}</b>
                        <small>{'Video resume · 1.2 km'}</small>
                      </span>{' '}
                      <Jobseeker.Badge color="brand" size="sm">
                        {'96% fit'}
                      </Jobseeker.Badge>
                    </div>
                    <div className="pxcard pxfloat f2 pxai">
                      <span className="pxspark" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                        </svg>
                      </span>
                      <span>
                        {'AI shortlisted '}
                        <b>{'24'}</b>
                        {' of 128 applicants'}
                      </span>
                    </div>
                  </div>
                </>
              ) : null}{' '}
              {v.pxIsManage ? (
                <>
                  <div className="pxscene" style={S(v.pxKey)}>
                    <div className="pxcard pxatt">
                      <div className="pxjh">
                        <span className="pxico manage">
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
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                          </svg>
                        </span>
                        <span>
                          <b>{'Attendance today'}</b>
                          <small>{'38 branches'}</small>
                        </span>
                      </div>
                      <div className="pxring">
                        <svg viewBox="0 0 120 120" aria-hidden="true">
                          <circle cx="60" cy="60" r="50" className="trk" />
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            className="val"
                            pathLength="100"
                            style={S(v.pxRing)}
                          />
                        </svg>{' '}
                        <span>
                          <b>{'96%'}</b>
                          <small>{'checked in'}</small>
                        </span>
                      </div>
                      <div className="pxleg">
                        <span>
                          <i className="a" />
                          {'On time 1,148'}
                        </span>
                        <span>
                          <i className="b" />
                          {'Late 42'}
                        </span>
                        <span>
                          <i className="c" />
                          {'Leave 50'}
                        </span>
                      </div>
                    </div>
                    <div className="pxcard pxfloat f1 pxpay">
                      <span className="pxico pay">
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
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                      </span>
                      <span>
                        <b>{'November payroll'}</b>
                        <small>{'BPJS & PPh 21 calculated'}</small>
                      </span>
                      <Jobseeker.Badge color="success" size="sm">
                        {'Ready'}
                      </Jobseeker.Badge>
                    </div>
                    <div className="pxcard pxfloat f2 pxai">
                      <span className="pxspark" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                        </svg>
                      </span>
                      <span>
                        <b>{'12'}</b>
                        {' outsourced staff onboarded this week'}
                      </span>
                    </div>
                  </div>
                </>
              ) : null}{' '}
              {v.pxIsDevelop ? (
                <>
                  <div className="pxscene" style={S(v.pxKey)}>
                    <div className="pxcard pxcourses">
                      <div className="pxjh">
                        <span className="pxico dev">
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
                            <path d="M22 10L12 5 2 10l10 5 10-5z" />
                            <path d="M6 12v5c3 2 9 2 12 0v-5" />
                          </svg>
                        </span>
                        <span>
                          <b>{'Team training'}</b>
                          <small>{'Store operations · Q4'}</small>
                        </span>
                      </div>
                      {L(v.pxCourses).map((c_8, i_8) => (
                        <React.Fragment key={i_8}>
                          <div className="pxco">
                            <div>
                              <span>{T(c_8?.t)}</span>
                              <b>{T(c_8?.v)}</b>
                            </div>
                            <span className="pxft">
                              <i style={S(c_8?.w)} />
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="pxcard pxfloat f1 pxcert">
                      <span className="pxmedal" aria-hidden="true">
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
                          <circle cx="12" cy="9" r="6" />
                          <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                        </svg>
                      </span>
                      <span>
                        <b>{'25 store heads certified'}</b>
                        <small>{'Store leadership program'}</small>
                      </span>
                    </div>
                    <div className="pxcard pxfloat f2 pxai">
                      <span className="pxspark" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" />
                        </svg>
                      </span>
                      <span>
                        {'Next session '}
                        <b>{'Mon, 09:00'}</b>
                      </span>
                    </div>
                  </div>
                </>
              ) : null}
              <div className="pxprods">
                <span>
                  {'Solutions for '}
                  {T(v.pxLabel)}
                </span>
                <div>
                  {L(v.pxProds).map((r_9, i_9) => (
                    <React.Fragment key={i_9}>
                      <a className="pxprod" href={A(r_9?.href)}>
                        <img src={A(r_9?.logo)} alt="" />
                        {T(r_9?.n)}
                        <span aria-hidden="true">{'→'}</span>
                      </a>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="pxnote">{'Illustrative examples — names and figures are fictional.'}</p>
        </div>
      </section>
      <section id="solutions" className="zone z1">
        <div className="ct">
          <div
            className="rv"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="eyb">{'Solutions'}</p>
              <h2 className="h2">{'One partner, five solutions.'}</h2>
            </div>
            <p className="lede" style={{ maxWidth: '440px' }}>
              {
                'Pick what you need now and add more as you grow — each product works on its own and together.'
              }
            </p>
          </div>
          <div className="sxgrid">
            <a className="sx sxw4 rv" data-theme="software" href="/v2/software/">
              <div className="sxh">
                <img src="/images/06922c52c0d826c56143c4224b8fb845.png" alt="" />
                <span>
                  <b>{'Jobseeker Software'}</b>
                  <small>{'One HR platform, four modules'}</small>
                </span>
                <span className="sxgo" aria-hidden="true">
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
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <p className="sxd">
                {
                  'From the first job post to everyday HR — hire with ATS and your own career site, then run your people with HRIS and the Jobseeker Life app.'
                }
              </p>
              <div className="sxmods">
                <span className="sxmod on">
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
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M19 8v6M22 11h-6" />
                    </svg>
                  </i>
                  <b>{'ATS + Career Site'}</b>
                  <small>{'Hiring pipeline & your branded job site'}</small>
                  <span className="smlive" aria-hidden="true">
                    <span className="smdots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="smcount">{'+12'}</span>
                    {'today'}
                  </span>
                </span>{' '}
                <span className="sxmod on">
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
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 9h10M7 13h6" />
                    </svg>
                  </i>
                  <b>{'HRIS + Jobseeker Life'}</b>
                  <small>{'Employee data, attendance & the employee app'}</small>
                  <span className="smlive" aria-hidden="true">
                    <span className="smclock">
                      <span className="smtick">
                        <span>
                          <b>{'Ayu clocked in · 08:02'}</b>
                          <b>{'Leave approved · Budi'}</b>
                          <b>{'Payslips sent · 128'}</b>
                          <b>{'Ayu clocked in · 08:02'}</b>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>{' '}
                <span className="sxmod soon">
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
                      aria-hidden="true"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M7 15l4-4 3 3 5-6" />
                    </svg>
                  </i>
                  <b>{'PMS'}</b>
                  <small>{'Performance management'}</small>
                  <em>{'Coming soon'}</em>
                  <span className="smbuild" aria-hidden="true" />
                </span>{' '}
                <span className="sxmod soon">
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
                      aria-hidden="true"
                    >
                      <path d="M22 10L12 5 2 10l10 5 10-5z" />
                      <path d="M6 12v5c3 2 9 2 12 0v-5" />
                    </svg>
                  </i>
                  <b>{'LMS'}</b>
                  <small>{'Learning management'}</small>
                  <em>{'Coming soon'}</em>
                  <span className="smbuild" aria-hidden="true" />
                </span>
              </div>
            </a>{' '}
            <a className="sx sxw2 rv" data-theme="services" href="/v2/talent/">
              <div className="sxh">
                <img src="/images/0934d72a7333f2a8976ae385b4569280.png" alt="" />
                <span>
                  <b>{'Jobseeker Services'}</b>
                  <small>{'Run by a team that knows the field'}</small>
                </span>
                <span className="sxgo" aria-hidden="true">
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
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <div className="sxv sxsvc" aria-hidden="true">
                <span className="svc">
                  <i>{'01'}</i>
                  {'Executive Search'}
                  <small>{'Senior & leadership roles'}</small>
                </span>{' '}
                <span className="svc">
                  <i>{'02'}</i>
                  {'Talent Augmentation'}
                  <small>{'Teams staffed and managed'}</small>
                </span>{' '}
                <span className="svc">
                  <i>{'03'}</i>
                  {'Outsourcing & payroll'}
                  <small>{'Compliance handled'}</small>
                </span>{' '}
                <span className="svtoast">{'Shortlist ready · 5 days'}</span>
              </div>
            </a>{' '}
            <a className="sx sxw2 rv" data-theme="partners" href="/v2/partners/">
              <div className="sxh">
                <img src="/images/2e0842aec39ea4bc17e6d544749982f9.png" alt="" />
                <span>
                  <b>{'Jobseeker Partners'}</b>
                  <small>{'Hire from your phone'}</small>
                </span>
                <span className="sxgo" aria-hidden="true">
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
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <div className="sxv sxphone" aria-hidden="true">
                <div className="ph">
                  <span className="phbar" />{' '}
                  <span className="phjob">
                    <b>{'Barista'}</b>
                    <small>{'2 roles · before Saturday'}</small>
                    <em>{'Posted'}</em>
                  </span>{' '}
                  <span className="phrow">
                    <i className="a1" />
                    <i className="a4" />
                    <i className="a6" />
                    <small>{'+15'}</small>
                  </span>{' '}
                  <span className="phbtn">{'Review applicants'}</span>
                </div>
                <span className="phtoast">{'18 new applicants'}</span>
              </div>
            </a>{' '}
            <a className="sx sxw2 rv" data-theme="app" href="/v2/app/">
              <div className="sxh">
                <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
                <span>
                  <b>{'Jobseeker App'}</b>
                  <small>{'Verified jobs, video resumes'}</small>
                </span>
                <span className="sxgo" aria-hidden="true">
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
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <div className="sxv sxphone" aria-hidden="true">
                <div className="ph phfeed">
                  <div className="feed">
                    <span className="fj">
                      <b>{'Cashier'}</b>
                      <small>{'Super Indo · 1.2 km'}</small>
                    </span>{' '}
                    <span className="fj">
                      <b>{'Barista'}</b>
                      <small>{'Varion Coffee · 3 km'}</small>
                    </span>{' '}
                    <span className="fj">
                      <b>{'Warehouse staff'}</b>
                      <small>{'Alfamart · 8 km'}</small>
                    </span>{' '}
                    <span className="fj">
                      <b>{'Front office'}</b>
                      <small>{'Paramount Land · 12 km'}</small>
                    </span>{' '}
                    <span className="fj">
                      <b>{'Cashier'}</b>
                      <small>{'Super Indo · 1.2 km'}</small>
                    </span>{' '}
                    <span className="fj">
                      <b>{'Barista'}</b>
                      <small>{'Varion Coffee · 3 km'}</small>
                    </span>{' '}
                    <span className="fj">
                      <b>{'Warehouse staff'}</b>
                      <small>{'Alfamart · 8 km'}</small>
                    </span>{' '}
                    <span className="fj">
                      <b>{'Front office'}</b>
                      <small>{'Paramount Land · 12 km'}</small>
                    </span>
                  </div>
                </div>
                <span className="phrec">
                  <i />
                  {'Video resume · 0:30'}
                </span>
              </div>
            </a>{' '}
            <a className="sx sxw2 rv" data-theme="academy" href="/v2/academy/">
              <div className="sxh">
                <img src="/images/c2c0bd06446c497f081ebea85a1bf425.png" alt="" />
                <span>
                  <b>{'Jobseeker Academy'}</b>
                  <small>{'Training for people and teams'}</small>
                </span>
                <span className="sxgo" aria-hidden="true">
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
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <div className="sxv sxacad" aria-hidden="true">
                <div className="acring">
                  <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="48" className="trk" />
                    <circle cx="60" cy="60" r="48" className="val" pathLength="100" />
                  </svg>
                  <span>
                    <b />
                    <small>{'complete'}</small>
                  </span>
                </div>
                <span className="acspark k1" />
                <span className="acspark k2" />
                <span className="acspark k3" />
                <div className="accert">
                  <span className="acseal">
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
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                    </svg>
                  </span>
                  <span>
                    <b>{'Certificate'}</b>
                    <small>{'Customer service'}</small>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <p className="pxnote">{'Illustrative previews — names and figures are fictional.'}</p>
        </div>
      </section>
      <section className="aiz zb">
        <div className="ct aigrid">
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ alignSelf: 'flex-start' }}>
              <Jobseeker.Badge type="pill" color="pink" size="md" dot={v.yes}>
                {'Agent Ming · concept preview'}
              </Jobseeker.Badge>
            </span>
            <h2 className="h2 onb">{'Hire by just asking.'}</h2>
            <p className="lede onb2">
              {
                'Describe who you need in plain language. Agent Ming searches our verified talent pool, ranks candidates and drafts the next step — your team stays in control.'
              }
            </p>
            <div className="aifeat">
              <div>
                <span className="aiic">
                  <svg
                    width="20"
                    height="20"
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
                </span>
                <span>
                  <b>{'Smart matching'}</b>
                  {'Nearby, verified candidates ranked by fit.'}
                </span>
              </div>
              <div>
                <span className="aiic">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16M7 12h10M10 18h4" />
                  </svg>
                </span>
                <span>
                  <b>{'Auto screening'}</b>
                  {'Shortlists from applications and video resumes.'}
                </span>
              </div>
              <div>
                <span className="aiic">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                  </svg>
                </span>
                <span>
                  <b>{'Instant drafts'}</b>
                  {'Job posts and interview invites in seconds.'}
                </span>
              </div>
            </div>
          </div>
          <div className="chat rv">
            <div className="chath">
              <Jobseeker.Avatar size="md" name="Agent Ming" initials="AM" status="online"></Jobseeker.Avatar>{' '}
              <span>
                <b>{'Agent Ming'}</b>
                <small>{'Online'}</small>
              </span>{' '}
              <span className="bdg">
                <Jobseeker.Badge color="gray" size="sm">
                  {'Demo'}
                </Jobseeker.Badge>
              </span>
            </div>
            <div className="chatb" aria-live="polite">
              <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                {"Hi! Tell me who you need — role, location and how many. I'll find verified talent for you."}
              </Jobseeker.ChatMessage>{' '}
              <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                {T(v.aiQ)}
              </Jobseeker.ChatMessage>{' '}
              {v.aiTyping ? (
                <>
                  <Jobseeker.ChatMessage
                    size="sm"
                    name="Agent Ming"
                    avatar={v.amAvatar}
                    typing={v.yes}
                  ></Jobseeker.ChatMessage>
                </>
              ) : null}{' '}
              {v.aiDone ? (
                <>
                  <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                    {T(v.aiIntro)}
                  </Jobseeker.ChatMessage>
                  <div className="cands">
                    {L(v.aiRes).map((r_10, i_10) => (
                      <React.Fragment key={i_10}>
                        <div className="cand" style={S(r_10?.delay)}>
                          <Jobseeker.Avatar size="md" name={r_10?.n} initials={r_10?.ini}></Jobseeker.Avatar>{' '}
                          <span>
                            <b>{T(r_10?.n)}</b>
                            <small>{T(r_10?.m)}</small>
                          </span>{' '}
                          <Jobseeker.Badge color={r_10?.color} size="sm">
                            {T(r_10?.s)}
                          </Jobseeker.Badge>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
            <div className="chatf" role="group" aria-label="Try a request">
              {L(v.aiSugs).map((s_11, i_11) => (
                <React.Fragment key={i_11}>
                  <Jobseeker.Button hierarchy={s_11?.h} size="sm" aria-pressed={s_11?.on} onClick={s_11?.go}>
                    {T(s_11?.t)}
                  </Jobseeker.Button>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="why" className="zone z1">
        <div className="ct">
          <div className="wyhead rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px' }}>
              <p className="eyb">{'Why Jobseeker'}</p>
              <h2 className="h2">{'Practical technology, backed by field experience.'}</h2>
            </div>
            <Jobseeker.Button hierarchy="secondary" size="lg" href="/v2/about/">
              {'Get to know Jobseeker Company'}
            </Jobseeker.Button>
          </div>
          <div className="wygrid">
            <div className="wy rv">
              <div className="wytx">
                <span className="wyn">{'01'}</span>
                <b>{'Truly end-to-end'}</b>
                <p>
                  {
                    'One partner for recruitment, outsourcing, HR technology and talent development — no more vendor juggling.'
                  }
                </p>
              </div>
              <div className="wyv wyloop" aria-hidden="true">
                <span className="lring" />{' '}
                <span className="lorbit">
                  <i />
                </span>{' '}
                <span className="lcore">
                  <b>{'One'}</b>
                  {'partner'}
                </span>{' '}
                <span className="lnode n1">{'Recruit'}</span>
                <span className="lnode n2">{'Outsource'}</span>
                <span className="lnode n3">{'HR tech'}</span>
                <span className="lnode n4">{'Develop'}</span>
              </div>
            </div>
            <div className="wy rv">
              <div className="wytx">
                <span className="wyn">{'02'}</span>
                <b>{'Built for frontline hiring'}</b>
                <p>
                  {
                    'A geotagged talent pool on Jobseeker App surfaces operational workers who are nearby and ready.'
                  }
                </p>
              </div>
              <div className="wyv wymap" aria-hidden="true">
                <span className="mring r1" />
                <span className="mring r2" />
                <span className="mring r3" />{' '}
                <span className="mstore">
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
                    <path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M3 9h18M9 20v-6h6v6" />
                  </svg>
                </span>{' '}
                <span className="mpin p1">{'AR'}</span>
                <span className="mpin p2">{'KW'}</span>
                <span className="mpin p3">{'DS'}</span>
                <span className="mpin p4">{'BS'}</span>
                <span className="mpin p5">{'NA'}</span> <span className="mchip">{'Ready within 5 km'}</span>
              </div>
            </div>
            <div className="wy rv">
              <div className="wytx">
                <span className="wyn">{'03'}</span>
                <b>{'Technology that works with people'}</b>
                <p>{'Our tech speeds up the process; our team makes sure of the quality.'}</p>
              </div>
              <div className="wyv wybal" aria-hidden="true">
                <div className="brow">
                  <span className="bic t">
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
                  </span>
                  <span className="blab">
                    <b>{'Speed'}</b>
                    <small>{'from technology'}</small>
                  </span>
                  <span className="bbar">
                    <i className="bt" />
                  </span>
                </div>
                <span className="bplus">{'+'}</span>
                <div className="brow">
                  <span className="bic p">
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
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                    </svg>
                  </span>
                  <span className="blab">
                    <b>{'Quality'}</b>
                    <small>{'from people'}</small>
                  </span>
                  <span className="bbar">
                    <i className="bp" />
                  </span>
                </div>
              </div>
            </div>
            <div className="wy rv">
              <div className="wytx">
                <span className="wyn">{'04'}</span>
                <b>{'Built to scale with you'}</b>
                <p>{'From one hire to a hundred, from a single placement to ongoing outsourcing.'}</p>
              </div>
              <div className="wyv wyscale" aria-hidden="true">
                <div className="sbars">
                  <span className="s1">
                    <em>{'1'}</em>
                  </span>
                  <span className="s2">
                    <em>{'10'}</em>
                  </span>
                  <span className="s3">
                    <em>{'25'}</em>
                  </span>
                  <span className="s4">
                    <em>{'50'}</em>
                  </span>
                  <span className="s5">
                    <em>{'100'}</em>
                  </span>
                </div>
                <span className="saxis">{'hires'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="zone z2">
        <div className="ct case">
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ alignSelf: 'flex-start' }}>
              <Jobseeker.Badge color="brand" size="md">
                {'Customer story'}
              </Jobseeker.Badge>
            </span>
            <p className="cquote">
              {
                'Lion Super Indo processed 358,363 candidates and filled 87% of requested roles through our platform.'
              }
            </p>
            <div className="cmeta">
              <img src="/images/6a46d25389b849ee192dfda89ea93deb.png" alt="Super Indo logo" />
              <span>
                <b>{'Lion Super Indo'}</b>
                <small>{'Retail · since July 2024'}</small>
              </span>
            </div>
            <span>
              <Jobseeker.Button
                hierarchy="link-color"
                size="lg"
                href="/v2/customers/"
                iconTrailing={v.icArrow}
              >
                {'Read customer stories'}
              </Jobseeker.Button>
            </span>
          </div>
          <div className="funnel rv">
            <div className="frow">
              <div>
                <span>{'Applications'}</span>
                <b>{'446,108'}</b>
              </div>
              <span className="fbar">
                <i style={{ width: '100%' }} />
              </span>
            </div>
            <div className="frow">
              <div>
                <span>{'Candidates processed'}</span>
                <b>{'358,363'}</b>
              </div>
              <span className="fbar">
                <i style={{ width: '80%' }} />
              </span>
            </div>
            <div className="frow hi">
              <div>
                <span>{'Hires'}</span>
                <b>{'5,926+'}</b>
              </div>
              <span className="fbar">
                <i style={{ width: '14%' }} />
              </span>
            </div>
            <div className="fnote">
              <span>
                <b>{'87%'}</b>
                {'requested roles filled'}
              </span>{' '}
              <span>
                <b>{'100'}</b>
                {'candidates per bulk action'}
              </span>
            </div>
            <small style={{ fontSize: '12px', lineHeight: '18px', color: 'var(--text-quaternary)' }}>
              {'Bars not to scale.'}
            </small>
          </div>
        </div>
      </section>
      <section id="jobseekers" className="zone z1">
        <div className="ct jsx">
          <div className="jsl">
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="eyb">{'For jobseekers'}</p>
              <h2 className="h2">{'Find work that fits you.'}</h2>
            </div>
            <div className="jscards">
              <a className="jsc rv" href="/v2/careers/">
                <div className="jsv" aria-hidden="true">
                  <span className="jsteam">
                    <i style={{ background: '#ffd1ea' }}>{'AR'}</i>
                    <i style={{ background: '#cdd9ff' }}>{'KW'}</i>
                    <i style={{ background: '#d3f8df' }}>{'DS'}</i>
                    <i className="plus">{'+'}</i>
                  </span>
                  <span className="jsroles">{'Open roles'}</span>
                  <span className="jsoff">
                    <span>{'Bali'}</span>
                    <span>{'Jakarta'}</span>
                    <span>{'Singapore'}</span>
                  </span>
                </div>
                <h3>{'Careers at Jobseeker'}</h3>
                <p>{'See openings to join the Jobseeker Company team.'}</p>
                <span className="jsgo">
                  {'See careers '}
                  <span aria-hidden="true">{'→'}</span>
                </span>
              </a>{' '}
              <a className="jsc rv" href="/jobs/">
                <div className="jsv" aria-hidden="true">
                  <div className="jstk">
                    <div>
                      <span className="jsj">
                        <span>
                          {'Cashier'}
                          <br />
                          <small>{'Super Indo · Bali'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Barista'}
                          <br />
                          <small>{'Varion Coffee · Jakarta'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Warehouse staff'}
                          <br />
                          <small>{'Alfamart · Bekasi'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Front office'}
                          <br />
                          <small>{'Paramount Land · Tangerang'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Store crew'}
                          <br />
                          <small>{'Ranch Market · Jakarta'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Cashier'}
                          <br />
                          <small>{'Super Indo · Bali'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Barista'}
                          <br />
                          <small>{'Varion Coffee · Jakarta'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Warehouse staff'}
                          <br />
                          <small>{'Alfamart · Bekasi'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Front office'}
                          <br />
                          <small>{'Paramount Land · Tangerang'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                      <span className="jsj">
                        <span>
                          {'Store crew'}
                          <br />
                          <small>{'Ranch Market · Jakarta'}</small>
                        </span>
                        <em>{'Open'}</em>
                      </span>
                    </div>
                  </div>
                </div>
                <h3>{'Client openings'}</h3>
                <p>{'Find roles currently open at our client companies.'}</p>
                <span className="jsgo">
                  {'See client openings '}
                  <span aria-hidden="true">{'→'}</span>
                </span>
              </a>
            </div>
            <p className="jsnote rv">
              <img src="/images/4a0dd97415f6c2f2d2931c4e002cf8ed.png" alt="" />
              {'After choosing a position, continue your application in Jobseeker App.'}
            </p>
          </div>
          <div className="jsr rv" aria-hidden="true">
            <div className="jsph">
              <div className="tp">
                {'Jobs near you'}
                <small>{'Kuta, Bali'}</small>
              </div>
              <div className="sr">{'Search roles or companies'}</div>
              <div className="ch">
                <span className="on">{'Nearby'}</span>
                <span>{'Full-time'}</span>
                <span>{'Shift'}</span>
              </div>
              <div className="jjob hot">
                <b>{'Barista'}</b>
                <small>{'Café in Kuta · 1.2 km'}</small>
                <span className="row">
                  <em>{'Verified'}</em>
                  <span className="ap" />
                </span>
                <span className="jstap" />
              </div>
              <div className="jjob">
                <b>{'Cashier'}</b>
                <small>{'Supermarket · 2.0 km'}</small>
                <span className="row">
                  <em>{'Verified'}</em>
                  <span className="ap">{'Apply'}</span>
                </span>
              </div>
              <div className="jjob">
                <b>{'Store crew'}</b>
                <small>{'Minimarket · 3.4 km'}</small>
                <span className="row">
                  <em>{'Verified'}</em>
                  <span className="ap">{'Apply'}</span>
                </span>
              </div>
            </div>
            <span className="jsfl f1">
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
            <span className="jsfl f2">
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
                  <rect x="2" y="5" width="15" height="14" rx="2" />
                  <path d="M17 10l5-3v10l-5-3z" />
                </svg>
              </i>
              <span>
                <span className="jsrec">{'Video resume'}</span>
                <small>{'Recorded · 0:30'}</small>
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="contact" className="ctx">
        <div className="ct">
          <div className="ctxc rv">
            <div className="ctxbg" aria-hidden="true">
              <i className="b1" />
              <i className="b2" />
              <i className="b3" />
            </div>
            <div className="ctxl">
              <span className="ctxeyb">{'Let’s talk'}</span>
              <h2 className="h2">{'Planning to hire or need more people on your team?'}</h2>
              <p className="lede">
                {"Tell us your hiring challenge or target. We'll help you find the right approach."}
              </p>
              <div className="ctxbtns">
                <Jobseeker.Button hierarchy="secondary" size="xl" href="/v2/contact/">
                  {'Contact us'}
                </Jobseeker.Button>{' '}
                <span data-theme="dark">
                  <Jobseeker.Button hierarchy="secondary" size="xl" href="/v2/solutions/">
                    {'See all solutions'}
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
              <a href="#solutions">{'Jobseeker Software'}</a>
              <a href="#solutions">{'Jobseeker Partners'}</a>
              <a href="#solutions">{'Jobseeker App'}</a>
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
              <a href="#customers">{'Customers'}</a>
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
                {L(v.amMsgs).map((m_12, i_12) => (
                  <React.Fragment key={i_12}>
                    {m_12?.isMe ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" outgoing={v.yes} status="read">
                          {T(m_12?.t)}
                        </Jobseeker.ChatMessage>
                      </>
                    ) : null}{' '}
                    {m_12?.isBot ? (
                      <>
                        <Jobseeker.ChatMessage size="sm" name="Agent Ming" avatar={v.amAvatar}>
                          {T(m_12?.t)}
                        </Jobseeker.ChatMessage>{' '}
                        {m_12?.hasLink ? (
                          <>
                            <span style={{ marginLeft: '44px' }}>
                              <Jobseeker.Button
                                hierarchy="link-color"
                                size="sm"
                                href={A(m_12?.href)}
                                iconTrailing={v.icArrow}
                              >
                                {T(m_12?.link)}
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
                    {L(v.amSugs).map((sg_13, i_13) => (
                      <React.Fragment key={i_13}>
                        <Jobseeker.Button hierarchy="secondary" size="xs" onClick={sg_13?.go}>
                          {T(sg_13?.t)}
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
