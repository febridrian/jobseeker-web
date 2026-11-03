// Solutions — Compare solutions
// Generated from the design artboard Compare.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lang: 'EN',
      picks: ['hrms', 'partners', 'talent'],
      diffOnly: false,
      maxHit: false,
      open: { ov: true, pr: true, cap: true, sup: true },
      sc: 0,
    };
    const B = (id) => '/_blob/' + id;
    this.P = {
      hrms: {
        name: 'HRMS',
        tag: 'Manage · For enterprises',
        logo: B('06922c52c0d826c56143c4224b8fb845'),
        c: '#050774',
        bg: '#f4f5ff',
        href: '/hrms/',
        cta: 'Request a demo',
        ctaHref: '/demo/',
        role: 'Run HR, attendance and payroll',
      },
      partners: {
        name: 'Jobseeker Partners',
        tag: 'Hire · For SMEs',
        logo: B('2e0842aec39ea4bc17e6d544749982f9'),
        c: '#3366ff',
        bg: '#f5f8ff',
        href: '/partners/',
        cta: 'Post a job — free',
        ctaHref: '/partners/',
        role: 'Hire frontline staff fast',
      },
      talent: {
        name: 'Talent Augmentation',
        tag: 'Manage · Outsourcing',
        logo: B('0934d72a7333f2a8976ae385b4569280'),
        c: '#9e0e0e',
        bg: '#fff5f5',
        href: '/talent/',
        cta: 'Talk to an expert',
        ctaHref: '/expert/',
        role: 'A managed workforce, end to end',
      },
      exec: {
        name: 'Executive Search',
        tag: 'Hire · Leadership',
        logo: B('0934d72a7333f2a8976ae385b4569280'),
        c: '#b54708',
        bg: '#fffaeb',
        href: '/executive/',
        cta: 'Talk to an expert',
        ctaHref: '/expert/',
        role: 'Find senior leaders',
      },
      train: {
        name: 'Corporate Training',
        tag: 'Grow · For teams',
        logo: B('c2c0bd06446c497f081ebea85a1bf425'),
        c: '#006600',
        bg: '#f2fbf2',
        href: '/training/',
        cta: 'Talk to an expert',
        ctaHref: '/expert/',
        role: 'Upskill and certify teams',
      },
    };
    this.ORDER = ['hrms', 'partners', 'talent', 'exec', 'train'];
    const Y = true,
      N = false;
    const R = (t, v, note) => ({ t, v, note });
    this.GROUPS = [
      {
        k: 'ov',
        t: 'Overview',
        rows: [
          R('Best for', {
            hrms: 'Companies managing a growing workforce',
            partners: 'SMEs hiring frontline roles',
            talent: 'Companies that want to outsource a team',
            exec: 'Managerial and executive hires',
            train: 'Teams that need job-ready skills',
          }),
          R('What it is', {
            hrms: 'HR software (web + mobile)',
            partners: 'Self-service hiring platform',
            talent: 'Managed outsourcing service',
            exec: 'Consultant-led search',
            train: 'Training programs & certification',
          }),
          R('How you start', {
            hrms: 'Demo, then onboarding',
            partners: 'Sign up and post a job',
            talent: 'Consultation and proposal',
            exec: 'Consultation and role brief',
            train: 'Training needs assessment',
          }),
        ],
      },
      {
        k: 'pr',
        t: 'Pricing',
        rows: [
          R('Pricing model', {
            hrms: 'Per user / month',
            partners: 'Free to post, optional paid boosts',
            talent: 'Custom quote',
            exec: 'Custom quote',
            train: 'Per program',
          }),
          R('Free option', { hrms: N, partners: Y, talent: N, exec: N, train: N }),
        ],
      },
      {
        k: 'cap',
        t: 'What’s included',
        rows: [
          R('Job posting & applicant tracking', { hrms: Y, partners: Y, talent: Y, exec: N, train: N }),
          R('Video resume screening', { hrms: N, partners: Y, talent: N, exec: N, train: N }),
          R('Employee data & attendance', { hrms: Y, partners: N, talent: Y, exec: N, train: N }),
          R('Payroll', { hrms: Y, partners: N, talent: Y, exec: N, train: N }, 'including BPJS & tax'),
          R('Workforce hired and managed for you', { hrms: N, partners: N, talent: Y, exec: N, train: N }),
          R('Leadership & executive hiring', { hrms: N, partners: N, talent: N, exec: Y, train: N }),
          R('Training & certification', { hrms: N, partners: N, talent: N, exec: N, train: Y }),
        ],
      },
      {
        k: 'sup',
        t: 'Support',
        rows: [
          R('Dedicated account contact', { hrms: Y, partners: N, talent: Y, exec: Y, train: Y }),
          R('Support channel', {
            hrms: 'Onboarding + support team',
            partners: 'In-app & WhatsApp',
            talent: 'Dedicated account team',
            exec: 'Dedicated consultant',
            train: 'Program coordinator',
          }),
        ],
      },
    ];
    this.SCEN = [
      {
        e: '🏪',
        q: 'I need 50 store crew by next month',
        recs: ['partners', 'talent'],
        why: 'Post the roles for free on Jobseeker Partners and screen with video resumes. If you would rather not hire and manage them yourself, Talent Augmentation can staff the team for you.',
      },
      {
        e: '📊',
        q: 'Our HR still runs on spreadsheets',
        recs: ['hrms'],
        why: 'HRMS brings recruitment, employee data, attendance and payroll into one place — start with the modules you need most.',
      },
      {
        e: '🏭',
        q: 'We want a partner to run a whole team',
        recs: ['talent', 'train'],
        why: 'Talent Augmentation handles hiring through daily operations. Add Corporate Training so the team is job-ready from day one.',
      },
      {
        e: '👔',
        q: 'We need a new Head of Operations',
        recs: ['exec'],
        why: 'Executive Search runs a confidential, consultant-led search for managerial and executive roles.',
      },
      {
        e: '📈',
        q: 'Our frontline staff need better skills',
        recs: ['train', 'hrms'],
        why: 'Corporate Training builds skills and certification; HRMS helps you track people and performance afterwards.',
      },
    ];
    this.COMBOS = [
      {
        a: 'partners',
        b: 'hrms',
        t: 'Hire, then manage',
        d: 'Fill roles fast on Jobseeker Partners, then run attendance and payroll for new hires in HRMS.',
      },
      {
        a: 'talent',
        b: 'train',
        t: 'Ready-to-work teams',
        d: 'Outsourced teams that are trained for the job before their first shift.',
      },
      {
        a: 'exec',
        b: 'train',
        t: 'Build your leadership',
        d: 'Hire senior leaders from outside and develop the managers you already have.',
      },
    ];
  }
  setPicks(picks) {
    this.setState({ picks, maxHit: false });
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
    const picks = this.ORDER.filter((k) => s.picks.includes(k));
    const grid = { gridTemplateColumns: 'minmax(200px,1.3fr) repeat(' + picks.length + ',minmax(0,1fr))' };
    const toggle = (k) => () => {
      if (s.picks.includes(k)) {
        if (s.picks.length > 1) this.setPicks(s.picks.filter((x) => x !== k));
      } else if (s.picks.length >= 3) this.setState({ maxHit: true });
      else this.setPicks(s.picks.concat(k));
    };
    const fmt = (v) =>
      v === true
        ? { isYes: true, isNo: false, isText: false, t: '', cls: 'yes' }
        : v === false
          ? { isYes: false, isNo: true, isText: false, t: '', cls: 'no' }
          : { isYes: false, isNo: false, isText: true, t: v, cls: '' };
    let ri = 0;
    const groups = this.GROUPS.map((g) => {
      const all = g.rows.map((r) => {
        const vals = picks.map((k) => r.v[k]);
        const same = picks.length > 1 && vals.every((x) => x === vals[0]);
        return { r, vals, same };
      });
      const shown = s.diffOnly ? all.filter((x) => !x.same) : all;
      const open = !!s.open[g.k];
      return {
        t: g.t,
        open,
        chev: open ? 'up' : '',
        count: shown.length + (shown.length === 1 ? ' row' : ' rows'),
        toggle: () => this.setState({ open: { ...s.open, [g.k]: !open } }),
        allSame: shown.length === 0,
        rows: shown.map((x) => ({
          t: x.r.t,
          note: x.r.note || '',
          hasNote: !!x.r.note,
          cls: x.same ? 'same' : 'diff',
          style: { ...grid, animationDelay: Math.min(ri++, 14) * 0.03 + 's' },
          cells: x.vals.map(fmt),
        })),
      };
    });
    const sc = this.SCEN[s.sc];
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      picker: this.ORDER.map((k) => {
        const on = s.picks.includes(k);
        return {
          ...this.P[k],
          on,
          cls: on ? 'on' : '',
          mark: on ? '✓' : '+',
          style: on
            ? {
                boxShadow: 'inset 0 0 0 2px ' + this.P[k].c + ',0 14px 26px -18px ' + this.P[k].c,
                background: this.P[k].bg,
              }
            : {},
          ckStyle: on ? { background: this.P[k].c, color: '#ffffff', boxShadow: 'none' } : {},
          toggle: toggle(k),
        };
      }),
      pickLabel: 'Comparing ' + picks.length + ' of 3',
      maxHit: s.maxHit,
      diffOnly: s.diffOnly,
      diffCls: s.diffOnly ? 'on' : '',
      toggleDiff: () => this.setState({ diffOnly: !s.diffOnly }),
      gridStyle: grid,
      cols: picks.map((k) => ({
        ...this.P[k],
        barStyle: { background: this.P[k].c },
        removeLabel: 'Remove ' + this.P[k].name,
        linkStyle: { color: this.P[k].c },
        ctaStyle: { background: this.P[k].c },
        remove: toggle(k),
      })),
      groups,
      scen: this.SCEN.map((x, i) => ({
        e: x.e,
        q: x.q,
        on: s.sc === i,
        cls: s.sc === i ? 'on' : '',
        pick: () => this.setState({ sc: i }),
      })),
      ans: {
        key: { animationName: s.sc % 2 ? 'cvin' : 'rise' },
        why: sc.why,
        recs: sc.recs.map((k) => ({ ...this.P[k], style: { boxShadow: 'inset 4px 0 0 ' + this.P[k].c } })),
        compare: () => {
          const keep = sc.recs.slice();
          for (const k of s.picks) if (keep.length < 2 && !keep.includes(k)) keep.push(k);
          this.setPicks(keep);
          try {
            const el = document.getElementById('table');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } catch (e) {}
        },
      },
      combos: this.COMBOS.map((c, i) => ({
        ...c,
        a: this.P[c.a].logo,
        b: this.P[c.b].logo,
        delay: { transitionDelay: i * 0.1 + 's' },
      })),
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
      <section id="top" className="cvhero">
        <div className="cvgridbg" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative', paddingTop: '56px', paddingBottom: '48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '16px',
              maxWidth: '780px',
              margin: '0 auto',
            }}
          >
            <nav className="cvcrumb rise d1" aria-label="Breadcrumb">
              <a href="/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/solutions/">{'Solutions'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Compare'}</b>
            </nav>
            <span className="rise d1 cvpill">
              <span className="cvvs" aria-hidden="true">
                <i />
                <i />
              </span>
              {'Compare solutions'}
            </span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '54px',
                lineHeight: '62px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#050774',
              }}
            >
              {'Five solutions, '}
              <span className="cvhl">{'side by side.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '580px',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#535862',
              }}
            >
              {"Pick up to three to compare. See who each one is for, what it includes and how it's priced."}
            </p>
          </div>
          <div className="cvpick rise d4" role="group" aria-label="Choose solutions to compare">
            {L(v.picker).map((p_0, i_0) => (
              <React.Fragment key={i_0}>
                <button
                  type="button"
                  className={`cvpk ${T(p_0?.cls)}`}
                  onClick={p_0?.toggle}
                  aria-pressed={p_0?.on}
                  style={S(p_0?.style)}
                >
                  <img src={A(p_0?.logo)} alt="" />{' '}
                  <span>
                    <b>{T(p_0?.name)}</b>
                    <small>{T(p_0?.tag)}</small>
                  </span>{' '}
                  <em className="cvck" aria-hidden="true" style={S(p_0?.ckStyle)}>
                    {T(p_0?.mark)}
                  </em>
                </button>
              </React.Fragment>
            ))}
          </div>
          <div className="cvmeta rise d5">
            <span>{T(v.pickLabel)}</span>{' '}
            <button
              type="button"
              role="switch"
              className={`cvdiff ${T(v.diffCls)}`}
              onClick={v.toggleDiff}
              aria-checked={v.diffOnly}
            >
              <span className="cvsw" aria-hidden="true">
                <i />
              </span>
              {'Show differences only'}
            </button>
          </div>
          {v.maxHit ? (
            <>
              <p className="cvwarn">{'You can compare up to 3 at a time — remove one first.'}</p>
            </>
          ) : null}
        </div>
      </section>
      <section id="table" className="wrap" style={{ paddingBottom: '104px' }}>
        <div className="cvtable rv-s">
          <div className="cvhead" style={S(v.gridStyle)}>
            <span className="cvcorner">{'Compare'}</span>{' '}
            {L(v.cols).map((c_1, i_1) => (
              <React.Fragment key={i_1}>
                <div className="cvch">
                  <span className="cvbar" style={S(c_1?.barStyle)} />{' '}
                  <button type="button" className="cvx" onClick={c_1?.remove} aria-label={c_1?.removeLabel}>
                    {'×'}
                  </button>{' '}
                  <img src={A(c_1?.logo)} alt="" /> <b>{T(c_1?.name)}</b> <small>{T(c_1?.tag)}</small>{' '}
                  <a href={A(c_1?.href)} className="cvlm" style={S(c_1?.linkStyle)}>
                    {'Learn more →'}
                  </a>
                </div>
              </React.Fragment>
            ))}
          </div>
          {L(v.groups).map((g_2, i_2) => (
            <React.Fragment key={i_2}>
              <div className="cvgroup">
                <button type="button" className="cvgh" onClick={g_2?.toggle} aria-expanded={g_2?.open}>
                  <span>{T(g_2?.t)}</span>
                  <small>{T(g_2?.count)}</small>
                  <i className={g_2?.chev} aria-hidden="true" />
                </button>{' '}
                {g_2?.open ? (
                  <>
                    <div className="cvrows">
                      {L(g_2?.rows).map((r_3, i_3) => (
                        <React.Fragment key={i_3}>
                          <div className={`cvrow ${T(r_3?.cls)}`} style={S(r_3?.style)}>
                            <span className="cvrl">
                              {T(r_3?.t)}
                              {r_3?.hasNote ? (
                                <>
                                  <small>{T(r_3?.note)}</small>
                                </>
                              ) : null}
                            </span>{' '}
                            {L(r_3?.cells).map((v_4, i_4) => (
                              <React.Fragment key={i_4}>
                                <span className={`cvc ${T(v_4?.cls)}`}>
                                  {v_4?.isYes ? (
                                    <>
                                      <em className="cvyes" aria-label="Included">
                                        {'✓'}
                                      </em>
                                    </>
                                  ) : null}
                                  {v_4?.isNo ? (
                                    <>
                                      <em className="cvno" aria-label="Not included">
                                        {'—'}
                                      </em>
                                    </>
                                  ) : null}
                                  {v_4?.isText ? <>{T(v_4?.t)}</> : null}
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                        </React.Fragment>
                      ))}{' '}
                      {g_2?.allSame ? (
                        <>
                          <div className="cvsame">{'No differences in this group.'}</div>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>
            </React.Fragment>
          ))}
          <div className="cvfoot" style={S(v.gridStyle)}>
            <span />{' '}
            {L(v.cols).map((c_5, i_5) => (
              <React.Fragment key={i_5}>
                <a className="cvcta" href={A(c_5?.ctaHref)} style={S(c_5?.ctaStyle)}>
                  {T(c_5?.cta)}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <p style={{ margin: '16px 0 0', fontSize: '12px', color: '#717680', textAlign: 'center' }}>
          {'Summary for guidance only. Exact scope and pricing are confirmed in your proposal.'}
        </p>
      </section>
      <section style={{ background: '#f2f3f8', padding: '104px 0' }}>
        <div className="wrap">
          <div
            className="rv"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'center',
              marginBottom: '40px',
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
              {'Which one is right for me?'}
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
              {'Start from your situation'}
            </h2>
          </div>
          <div className="cvsc">
            <div className="cvsclist" role="tablist" aria-label="Situations">
              {L(v.scen).map((s_6, i_6) => (
                <React.Fragment key={i_6}>
                  <button
                    type="button"
                    role="tab"
                    className={`cvst ${T(s_6?.cls)}`}
                    onClick={s_6?.pick}
                    aria-selected={s_6?.on}
                  >
                    <span className="cvse" aria-hidden="true">
                      {T(s_6?.e)}
                    </span>
                    {T(s_6?.q)}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="cvans" style={S(v.ans?.key)}>
              <span className="cvansl">{"We'd recommend"}</span>
              <div className="cvrecs">
                {L(v.ans?.recs).map((r_7, i_7) => (
                  <React.Fragment key={i_7}>
                    <a className="cvrec" href={A(r_7?.href)} style={S(r_7?.style)}>
                      <img src={A(r_7?.logo)} alt="" />
                      <span>
                        <b>{T(r_7?.name)}</b>
                        <small>{T(r_7?.role)}</small>
                      </span>
                      <em aria-hidden="true">{'→'}</em>
                    </a>
                  </React.Fragment>
                ))}
              </div>
              <p>{T(v.ans?.why)}</p>
              <button type="button" className="cvuse" onClick={v.ans?.compare}>
                {'Compare these in the table ↑'}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '104px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '36px',
            maxWidth: '640px',
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
            {'Better together'}
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
            {'Most clients use more than one'}
          </h2>
        </div>
        <div className="cvcombo">
          {L(v.combos).map((c_8, i_8) => (
            <React.Fragment key={i_8}>
              <div className="cvcb rv" style={S(c_8?.delay)}>
                <div className="cvcbl">
                  <img src={A(c_8?.a)} alt="" />
                  <span className="cvplus" aria-hidden="true">
                    {'+'}
                  </span>
                  <img src={A(c_8?.b)} alt="" />
                </div>
                <b>{T(c_8?.t)}</b>
                <p>{T(c_8?.d)}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="cvend rv">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              maxWidth: '560px',
              position: 'relative',
            }}
          >
            <b style={{ fontSize: '32px', lineHeight: '40px', letterSpacing: '-0.025em' }}>
              {'Still deciding?'}
            </b>{' '}
            <span style={{ fontSize: '16px', lineHeight: '26px', color: '#cdcde3' }}>
              {"Tell us what you're solving and a specialist will point you to the right mix."}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative' }}>
            <a className="btn btn-light" href="/expert/">
              {'Talk to an expert '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>{' '}
            <a
              className="btn"
              href="/pricing/"
              style={{
                background: 'transparent',
                color: '#ffffff',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.4)',
              }}
            >
              {'See pricing'}
            </a>
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
                {L(v.amMsgs).map((m_9, i_9) => (
                  <React.Fragment key={i_9}>
                    <div className={`ammsg ${T(m_9?.who)}`}>
                      {T(m_9?.t)}
                      {m_9?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_9?.href)}>
                            {T(m_9?.link)}
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
                    {L(v.amSugs).map((sg_10, i_10) => (
                      <React.Fragment key={i_10}>
                        <button type="button" className="asug" onClick={sg_10?.go}>
                          {T(sg_10?.t)}
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
