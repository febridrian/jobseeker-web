// Resources — Templates
// Generated from the design artboard Templates.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lang: 'EN',
      cat: 'All',
      fmt: 'All',
      q: '',
      dl: {},
      pv: -1,
      jRole: 'Barista',
      jCo: 'Your Company',
      jLoc: 'Jakarta Selatan',
      jType: 'Full-time',
      copied: false,
    };
    this.FMT = { DOCX: '#2b579a', XLSX: '#1d7044', PDF: '#d92d20', 'Google Docs': '#4285f4' };
    const T = (name, d, cat, fmt, pages, lines) => ({ name, d, cat, fmt, pages, lines });
    this.TPL = [
      T(
        'Job description template',
        'A clear structure for any role — summary, responsibilities, requirements and benefits.',
        'Recruitment',
        'DOCX',
        '2 pages',
        [
          ['Job title', 'e.g. Store Crew'],
          ['Location & type', 'Jakarta · Full-time'],
          ['About the role', 'One short paragraph'],
          ['Responsibilities', '4–6 bullet points'],
          ['Requirements', 'Must-haves vs nice-to-haves'],
          ['Benefits', 'Salary range, BPJS, THR'],
        ],
      ),
      T(
        'Interview scorecard',
        'Score candidates consistently on skills, attitude and fit.',
        'Recruitment',
        'XLSX',
        '1 sheet',
        [
          ['Candidate', 'Name · Role · Date'],
          ['Criteria', 'Communication, reliability, skills'],
          ['Score', '1–5 per criterion'],
          ['Notes', 'Evidence from answers'],
          ['Recommendation', 'Hire · Hold · Reject'],
        ],
      ),
      T(
        'Offer letter',
        'A ready-to-send offer covering role, salary, start date and terms.',
        'Recruitment',
        'DOCX',
        '1 page',
        [
          ['Candidate', 'Full name & address'],
          ['Position', 'Title, department, reporting line'],
          ['Compensation', 'Base salary, allowances'],
          ['Start date', 'DD/MM/YYYY'],
          ['Contract', 'PKWT or PKWTT'],
          ['Signature', 'HR & candidate'],
        ],
      ),
      T(
        'Fixed-term contract (PKWT)',
        'Employment contract template for fixed-term roles in Indonesia.',
        'Contracts',
        'DOCX',
        '4 pages',
        [
          ['Parties', 'Company & employee details'],
          ['Term', 'Start and end date'],
          ['Duties', 'Role and work location'],
          ['Compensation', 'Salary, allowances, overtime'],
          ['Termination', 'Notice and conditions'],
          ['Signatures', 'Both parties'],
        ],
      ),
      T(
        'First-week onboarding checklist',
        "Everything to prepare and do in a new hire's first five days.",
        'Onboarding',
        'PDF',
        '1 page',
        [
          ['Before day 1', 'Uniform, ID card, locker'],
          ['Day 1', 'BPJS registration, safety tour'],
          ['Day 2', 'Assign a buddy'],
          ['Day 3', 'Hands-on training'],
          ['Day 5', 'Check-in conversation'],
        ],
      ),
      T(
        'Employee data form',
        'Collect personal, bank and emergency contact details in one go.',
        'Onboarding',
        'PDF',
        '2 pages',
        [
          ['Personal', 'Name, NIK, date of birth'],
          ['Contact', 'Phone, address, email'],
          ['Bank', 'Bank name & account'],
          ['Tax & BPJS', 'NPWP, BPJS numbers'],
          ['Emergency contact', 'Name & phone'],
        ],
      ),
      T(
        'Monthly payroll sheet',
        'Calculate salary, allowances, deductions, BPJS and PPh 21.',
        'Payroll',
        'XLSX',
        '3 sheets',
        [
          ['Employees', 'ID, name, base salary'],
          ['Earnings', 'Allowances, overtime'],
          ['Deductions', 'BPJS, PPh 21, loans'],
          ['Net pay', 'Auto-calculated'],
          ['Summary', 'Totals per department'],
        ],
      ),
      T(
        'THR calculator',
        'Work out THR for full and pro-rata eligible employees.',
        'Payroll',
        'XLSX',
        '1 sheet',
        [
          ['Employee', 'Join date, base salary'],
          ['Service', 'Months worked'],
          ['Eligibility', '≥ 1 month of service'],
          ['THR amount', 'Full or pro-rata'],
          ['Payment date', 'Before the holiday'],
        ],
      ),
      T(
        'Leave request form',
        'A simple form for annual, sick and other leave requests.',
        'Attendance',
        'Google Docs',
        '1 page',
        [
          ['Employee', 'Name & department'],
          ['Leave type', 'Annual · Sick · Other'],
          ['Dates', 'From – to, total days'],
          ['Reason', 'Optional notes'],
          ['Approval', 'Supervisor & HR'],
        ],
      ),
      T(
        'Shift schedule planner',
        'Plan weekly morning, afternoon and night shifts for your team.',
        'Attendance',
        'XLSX',
        '1 sheet',
        [
          ['Team', 'Names & roles'],
          ['Week', 'Mon – Sun'],
          ['Shifts', 'Morning · Afternoon · Night'],
          ['Coverage', 'Auto check for gaps'],
          ['Notes', 'Swaps & leave'],
        ],
      ),
      T(
        'Performance review form',
        'Mid-year or annual review with goals, ratings and next steps.',
        'Performance',
        'DOCX',
        '2 pages',
        [
          ['Employee', 'Name, role, period'],
          ['Goals', 'KPIs & results'],
          ['Ratings', 'Competencies 1–5'],
          ['Feedback', 'Strengths & growth areas'],
          ['Next steps', 'Goals for next period'],
        ],
      ),
      T(
        'CV template for jobseekers',
        'A clean, one-page CV that is easy for recruiters to scan.',
        'For jobseekers',
        'Google Docs',
        '1 page',
        [
          ['Header', 'Name, phone, city'],
          ['Summary', '2–3 lines about you'],
          ['Experience', 'Most recent first'],
          ['Skills', 'Practical skills & certificates'],
          ['Education', 'School & year'],
        ],
      ),
    ];
    this.CATS = [
      'All',
      'Recruitment',
      'Contracts',
      'Onboarding',
      'Payroll',
      'Attendance',
      'Performance',
      'For jobseekers',
    ];
  }
  componentWillUnmount() {
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
    Object.values(this.timers || {}).forEach(clearTimeout);
    clearTimeout(this.ct);
  }
  dl(i) {
    if (this.state.dl[i]) return;
    this.timers = this.timers || {};
    this.setState({ dl: { ...this.state.dl, [i]: 'busy' } });
    this.timers[i] = setTimeout(() => this.setState({ dl: { ...this.state.dl, [i]: 'done' } }), 1200);
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
  renderVals() {
    const s = this.state;
    const q = s.q.trim().toLowerCase();
    const idx = this.TPL.map((t, i) => ({ ...t, i }));
    const base = idx.filter(
      (t) =>
        (s.fmt === 'All' || t.fmt === s.fmt) &&
        (!q || (t.name + ' ' + t.d + ' ' + t.cat).toLowerCase().includes(q)),
    );
    const list = base.filter((t) => s.cat === 'All' || t.cat === s.cat);
    const st = (i) => s.dl[i] || 'idle';
    const card = (t, k) => {
      const c = this.FMT[t.fmt];
      return {
        ...t,
        kind: t.fmt === 'XLSX' ? 'sheet' : 'doc',
        thumbBg: { background: 'linear-gradient(160deg,' + c + '18,' + c + '33)' },
        barStyle: { background: c },
        fmtStyle: { background: c },
        idle: st(t.i) === 'idle',
        busy: st(t.i) === 'busy',
        done: st(t.i) === 'done',
        dlCls: st(t.i) === 'idle' ? '' : st(t.i),
        delay: { animationDelay: Math.min(k, 9) * 0.04 + 's' },
        download: () => this.dl(t.i),
        preview: () => this.setState({ pv: t.i }),
      };
    };
    const P = s.pv >= 0 ? card({ ...this.TPL[s.pv], i: s.pv }, 0) : null;
    const role = s.jRole.trim() || 'Role',
      co = s.jCo.trim() || 'Your Company',
      loc = s.jLoc.trim() || 'Location';
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      total: this.TPL.length,
      cats: this.CATS.map((t) => ({
        t,
        n: t === 'All' ? base.length : base.filter((x) => x.cat === t).length,
        on: s.cat === t,
        cls: s.cat === t ? 'on' : '',
        pick: () => this.setState({ cat: t }),
      })),
      fmts: ['All', 'DOCX', 'XLSX', 'PDF', 'Google Docs'].map((t) => ({
        t: t === 'Google Docs' ? 'Docs' : t,
        on: s.fmt === t,
        cls: s.fmt === t ? 'on' : '',
        style:
          s.fmt === t && t !== 'All'
            ? { color: this.FMT[t] }
            : { color: s.fmt === t ? '#050774' : '#535862' },
        pick: () => this.setState({ fmt: t }),
      })),
      q: s.q,
      onQ: (e) => this.setState({ q: e.target.value }),
      items: list.map(card),
      none: list.length === 0,
      resetAll: () => this.setState({ cat: 'All', fmt: 'All', q: '' }),
      hasPreview: !!P,
      pv: P
        ? {
            ...P,
            lines: P.lines.map(([k, v], j) => ({ k, v, delay: { animationDelay: 0.1 + j * 0.06 + 's' } })),
          }
        : {
            name: '',
            fmt: '',
            cat: '',
            pages: '',
            lines: [],
            barStyle: {},
            idle: true,
            busy: false,
            done: false,
            dlCls: '',
            download: () => {},
          },
      closePreview: () => this.setState({ pv: -1 }),
      jRole: s.jRole,
      jCo: s.jCo,
      jLoc: s.jLoc,
      onRole: (e) => this.setState({ jRole: e.target.value, copied: false }),
      onCo: (e) => this.setState({ jCo: e.target.value, copied: false }),
      onLoc: (e) => this.setState({ jLoc: e.target.value, copied: false }),
      types: ['Full-time', 'Part-time', 'Shift'].map((t) => ({
        t,
        on: s.jType === t,
        cls: s.jType === t ? 'on' : '',
        pick: () => this.setState({ jType: t, copied: false }),
      })),
      jTitle: role,
      jMeta: co + ' · ' + loc + ' · ' + s.jType,
      jAbout:
        co +
        ' is looking for a ' +
        role +
        ' to join our team in ' +
        loc +
        '. You will be part of a friendly team and get full training from day one.',
      jTypeLow: s.jType.toLowerCase(),
      copied: s.copied,
      notCopied: !s.copied,
      copyCls: s.copied ? 'done' : '',
      copy: () => {
        const txt =
          role +
          '\n' +
          co +
          ' · ' +
          loc +
          ' · ' +
          s.jType +
          '\n\n' +
          co +
          ' is looking for a ' +
          role +
          ' to join our team in ' +
          loc +
          '.';
        try {
          if (navigator.clipboard) navigator.clipboard.writeText(txt);
        } catch (e) {}
        this.setState({ copied: true });
        clearTimeout(this.ct);
        this.ct = setTimeout(() => this.setState({ copied: false }), 2000);
      },
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
      <section id="top" className="tphero">
        <div className="tpdots" aria-hidden="true" />
        <div
          className="wrap tphwrap"
          style={{ position: 'relative', paddingTop: '64px', paddingBottom: '72px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <nav className="tpcrumb rise d1" aria-label="Breadcrumb">
              <a href="/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/resources/">{'Resources'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Templates'}</b>
            </nav>
            <span className="rise d1 tppill">{'Templates'}</span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '54px',
                lineHeight: '60px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#050774',
              }}
            >
              {'Free HR templates, '}
              <span className="tphl">{'ready to use.'}</span>
            </h1>
            <p
              className="rise d3"
              style={{
                margin: '0',
                maxWidth: '500px',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#535862',
              }}
            >
              {
                'Job descriptions, offer letters, onboarding checklists, payroll sheets and more — built for Indonesian teams. Download, edit, done.'
              }
            </p>
            <div className="tpstats rise d4">
              <span>
                <b>{T(v.total)}</b>
                {'templates'}
              </span>{' '}
              <span>
                <b>{'4'}</b>
                {'formats'}
              </span>{' '}
              <span>
                <b>{'ID · EN'}</b>
                {'languages'}
              </span>
            </div>
          </div>
          <div className="tpfan rise d4" aria-hidden="true">
            <div className="tpdoc f1 docx">
              <span className="tpdh">
                <i>{'DOCX'}</i>
              </span>
              <b>{'Offer letter'}</b>
              <i className="l" />
              <i className="l s" />
              <i className="l" />
              <i className="l s2" />
              <span className="tpsig" />
            </div>
            <div className="tpdoc f2 xlsx">
              <span className="tpdh">
                <i>{'XLSX'}</i>
              </span>
              <b>{'Payroll sheet'}</b>
              <span className="tpgrid">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="tpdoc f3 pdf">
              <span className="tpdh">
                <i>{'PDF'}</i>
              </span>
              <b>{'Onboarding checklist'}</b>
              <span className="tpck">
                <i />
                {'Uniform & ID'}
              </span>
              <span className="tpck">
                <i />
                {'BPJS'}
              </span>
              <span className="tpck off">
                <i />
                {'Buddy'}
              </span>
            </div>
            <span className="tpdl" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
            </span>
          </div>
        </div>
      </section>
      <section id="library" className="wrap" style={{ paddingTop: '24px', paddingBottom: '96px' }}>
        <div className="tptools rv">
          <div className="tpcats" role="tablist" aria-label="Categories">
            {L(v.cats).map((c_0, i_0) => (
              <React.Fragment key={i_0}>
                <button
                  type="button"
                  role="tab"
                  className={`tpcat ${T(c_0?.cls)}`}
                  aria-selected={c_0?.on}
                  onClick={c_0?.pick}
                >
                  {T(c_0?.t)}
                  <small>{T(c_0?.n)}</small>
                </button>
              </React.Fragment>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <label className="tpsearch">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>{' '}
              <input
                type="search"
                placeholder="Search templates"
                value={v.q}
                onChange={v.onQ}
                aria-label="Search templates"
              />
            </label>
            <div className="tpfmts" role="group" aria-label="Format">
              {L(v.fmts).map((f_1, i_1) => (
                <React.Fragment key={i_1}>
                  <button
                    type="button"
                    className={`tpfmt ${T(f_1?.cls)}`}
                    style={S(f_1?.style)}
                    onClick={f_1?.pick}
                    aria-pressed={f_1?.on}
                  >
                    {T(f_1?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="tpgridw">
          {L(v.items).map((t_2, i_2) => (
            <React.Fragment key={i_2}>
              <article className="tpcard" style={S(t_2?.delay)}>
                <button
                  type="button"
                  className="tpthumb"
                  style={S(t_2?.thumbBg)}
                  onClick={t_2?.preview}
                  aria-label="Preview template"
                >
                  <span className={`tpmini ${T(t_2?.kind)}`}>
                    <span className="tpmh" style={S(t_2?.barStyle)} /> <i />
                    <i className="s" />
                    <i />
                    <i className="s2" />
                    <i />
                  </span>{' '}
                  <span className="tpprev">{'Preview'}</span>
                </button>
                <div className="tpcb">
                  <span className="tpcm">
                    <b className="tpbadge" style={S(t_2?.fmtStyle)}>
                      {T(t_2?.fmt)}
                    </b>
                    <span>{T(t_2?.cat)}</span>
                    <span>
                      {'· '}
                      {T(t_2?.pages)}
                    </span>
                  </span>
                  <h3>{T(t_2?.name)}</h3>
                  <p>{T(t_2?.d)}</p>
                  <div className="tpacts">
                    <button type="button" className={`tpdlb ${T(t_2?.dlCls)}`} onClick={t_2?.download}>
                      {t_2?.idle ? (
                        <>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                          </svg>
                          {'Download'}
                        </>
                      ) : null}{' '}
                      {t_2?.busy ? (
                        <>
                          <span className="tpspin" aria-hidden="true" />
                          {'Preparing…'}
                        </>
                      ) : null}{' '}
                      {t_2?.done ? (
                        <>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                          {'Ready'}
                        </>
                      ) : null}
                    </button>{' '}
                    <button type="button" className="tpview" onClick={t_2?.preview}>
                      {'Preview'}
                    </button>
                  </div>
                </div>
              </article>
            </React.Fragment>
          ))}{' '}
          {v.none ? (
            <>
              <div className="tpnone">
                <b>{'No templates match your filters.'}</b>
                <button type="button" onClick={v.resetAll}>
                  {'Reset filters'}
                </button>
              </div>
            </>
          ) : null}
        </div>
        <p style={{ margin: '18px 0 0', textAlign: 'center', fontSize: '12px', color: '#717680' }}>
          {'Sample templates for layout — files to be added.'}
        </p>
      </section>{' '}
      {v.hasPreview ? (
        <>
          <div className="tpov" onClick={v.closePreview} aria-hidden="true" />
          <aside className="tpdrawer" role="dialog" aria-label="Template preview">
            <div className="tpdhd">
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <b>{T(v.pv?.name)}</b>
                <small>
                  {T(v.pv?.fmt)}
                  {' · '}
                  {T(v.pv?.cat)}
                  {' · '}
                  {T(v.pv?.pages)}
                </small>
              </span>{' '}
              <button type="button" className="tpx" onClick={v.closePreview} aria-label="Close preview">
                {'×'}
              </button>
            </div>
            <div className="tppaper">
              <span className="tppbar" style={S(v.pv?.barStyle)} />{' '}
              <b className="tpptitle">{T(v.pv?.name)}</b>{' '}
              {L(v.pv?.lines).map((l_3, i_3) => (
                <React.Fragment key={i_3}>
                  <span className="tppline" style={S(l_3?.delay)}>
                    <em>{T(l_3?.k)}</em>
                    {T(l_3?.v)}
                  </span>
                </React.Fragment>
              ))}{' '}
              <span className="tppfoot">{'Jobseeker Company · Template'}</span>
            </div>
            <div className="tpdft">
              <button type="button" className={`tpdlb big ${T(v.pv?.dlCls)}`} onClick={v.pv?.download}>
                {v.pv?.idle ? (
                  <>
                    {'Download '}
                    {T(v.pv?.fmt)}
                  </>
                ) : null}{' '}
                {v.pv?.busy ? (
                  <>
                    <span className="tpspin" aria-hidden="true" />
                    {'Preparing…'}
                  </>
                ) : null}{' '}
                {v.pv?.done ? <>{'Ready to download'}</> : null}
              </button>{' '}
              <a className="tpdemo" href="/hrms/">
                {'Automate this in HRMS →'}
              </a>
            </div>
          </aside>
        </>
      ) : null}{' '}
      <section style={{ background: '#fafafa', padding: '96px 0' }}>
        <div className="wrap tpbuild">
          <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cd0071',
              }}
            >
              {'Try it live'}
            </span>
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '36px',
                lineHeight: '44px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#050774',
              }}
            >
              {'Job post builder'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#535862' }}>
              {
                'Fill in a few fields and get a ready-to-post job description — then publish it on Jobseeker Partners for free.'
              }
            </p>
            <div className="tpform">
              <label>
                <span>{'Role'}</span>
                <input type="text" value={v.jRole} onChange={v.onRole} placeholder="e.g. Barista" />
              </label>{' '}
              <label>
                <span>{'Company'}</span>
                <input type="text" value={v.jCo} onChange={v.onCo} placeholder="e.g. Your company" />
              </label>{' '}
              <label>
                <span>{'Location'}</span>
                <input type="text" value={v.jLoc} onChange={v.onLoc} placeholder="e.g. Jakarta Selatan" />
              </label>
              <div>
                <span>{'Job type'}</span>
                <div className="tptype">
                  {L(v.types).map((t_4, i_4) => (
                    <React.Fragment key={i_4}>
                      <button type="button" className={t_4?.cls} onClick={t_4?.pick} aria-pressed={t_4?.on}>
                        {T(t_4?.t)}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="tpout rv">
            <div className="tpouth">
              <span className="tplive">
                <i />
                {'Live preview'}
              </span>{' '}
              <button type="button" className={`tpcopy ${T(v.copyCls)}`} onClick={v.copy}>
                {v.notCopied ? <>{'Copy text'}</> : null}
                {v.copied ? <>{'Copied!'}</> : null}
              </button>
            </div>
            <b className="tpjt">{T(v.jTitle)}</b> <span className="tpjm">{T(v.jMeta)}</span>{' '}
            <span className="tpjh">{'About the role'}</span>
            <p>{T(v.jAbout)}</p>
            <span className="tpjh">{"What you'll do"}</span>
            <ul>
              <li>{'Serve customers with a friendly, helpful attitude.'}</li>
              <li>{'Keep your work area clean, safe and organized.'}</li>
              <li>{'Work with your team to hit daily targets.'}</li>
            </ul>
            <span className="tpjh">{"What we're looking for"}</span>
            <ul>
              <li>{'Good communication and a positive attitude.'}</li>
              <li>
                {'Available for '}
                {T(v.jTypeLow)}
                {' work.'}
              </li>
              <li>{'Experience is a plus — training provided.'}</li>
            </ul>
            <a className="tppost" href="/partners/">
              {'Post on Jobseeker Partners — free '}
              <span aria-hidden="true">{'→'}</span>
            </a>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '112px' }}>
        <div className="tpcta rv">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1', minWidth: '260px' }}
          >
            <h2
              className="h2"
              style={{
                margin: '0',
                fontSize: '34px',
                lineHeight: '42px',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: '#ffffff',
              }}
            >
              {'Skip the spreadsheets.'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#cdcde3' }}>
              {'Offer letters, onboarding, attendance and payroll — automated in Jobseeker HRMS.'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a className="btn tpbw" href="/demo/">
              {'Schedule a demo '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>{' '}
            <a className="btn tpbo" href="/guides/">
              {'Browse guides'}
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
                {L(v.amMsgs).map((m_5, i_5) => (
                  <React.Fragment key={i_5}>
                    <div className={`ammsg ${T(m_5?.who)}`}>
                      {T(m_5?.t)}
                      {m_5?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_5?.href)}>
                            {T(m_5?.link)}
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
                    {L(v.amSugs).map((sg_6, i_6) => (
                      <React.Fragment key={i_6}>
                        <button type="button" className="asug" onClick={sg_6?.go}>
                          {T(sg_6?.t)}
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
