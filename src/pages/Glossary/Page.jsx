// Resources — Glossary
// Generated from the design artboard Glossary.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, lang: 'EN', letter: 'A', q: '', open: '', tod: 0, todT: 0 };
    const T = (term, def, ex, cat, full) => ({ term, def, ex, cat, full: full || '' });
    this.TERMS = [
      T(
        'ATS',
        'Applicant Tracking System to manage the recruitment process from application to hiring.',
        'The recruiter used the ATS to move 40 applicants to the interview stage in one click.',
        'Recruitment',
        'Applicant Tracking System',
      ),
      T(
        'Absence',
        'Employee attendance data such as clocking in, clocking out, leaving, sick leave, and overtime.',
        "HR reviewed the absence report before closing this month's payroll.",
        'Attendance',
      ),
      T(
        'Annual Leave',
        'Annual leave rights granted by the company to employees.',
        'After 12 months of service, Rina is entitled to 12 days of annual leave.',
        'Leave',
      ),
      T(
        'Assessment',
        'The process of assessing candidates or employees based on skills, behavior, or competencies.',
        'Every cashier candidate takes a short numeracy assessment before the interview.',
        'Recruitment',
      ),
      T(
        'Attrition Rate',
        'The percentage of employees who leave the company in a given period.',
        'Store crew attrition rate dropped from 8% to 5% per month after better onboarding.',
        'Analytics',
      ),
      T(
        'Applicant',
        'Candidates who have applied for a job position.',
        'The barista opening received 120 applicants in its first week.',
        'Recruitment',
      ),
      T(
        'Approval Workflow',
        'Approval flow for HR processes such as leave, reimbursement, or payroll.',
        'Leave requests go to the store supervisor first, then to the area manager.',
        'Workflow',
      ),
      T(
        'Attendance Management',
        'A system for recording, monitoring, and managing employee attendance.',
        'Attendance management flags late clock-ins automatically each morning.',
        'Attendance',
      ),
      T(
        'Auto Screening',
        'Automatic candidate screening based on specified criteria.',
        'Auto screening shortlisted applicants who live within 5 km of the store.',
        'Recruitment',
      ),
      T(
        'Active Employee',
        'Employees who are still actively working at the company.',
        'The company has 1,240 active employees across 38 branches.',
        'Workforce',
      ),
      T(
        'Allowance',
        'Additional benefits outside the basic salary, such as transportation or meals.',
        'Each field staff receives a daily transport allowance on top of base pay.',
        'Compensation',
      ),
      T(
        'Appraisal',
        'Evaluation of employee performance in a certain period.',
        'Mid-year appraisals are completed in June for all supervisors.',
        'Performance',
      ),
      T(
        'BPJS Ketenagakerjaan',
        "Indonesia's mandatory employment social security program covering work accidents, death, old-age savings and pension.",
        'HR registers every new hire for BPJS Ketenagakerjaan in their first month.',
        'Compliance',
      ),
      T(
        'BPJS Kesehatan',
        "Indonesia's national health insurance program, with contributions shared by employer and employee.",
        "The payslip shows the employee's share of the BPJS Kesehatan contribution.",
        'Compliance',
      ),
      T(
        'Benefits',
        'Non-salary compensation such as insurance, leave, and allowances.',
        'The offer letter lists health insurance and meal allowance under benefits.',
        'Compensation',
      ),
      T(
        'Blue-collar Worker',
        'Workers in hands-on or operational roles such as retail, F&B, warehouse, or production.',
        "Most of the chain's hiring needs are blue-collar roles like store crew and packers.",
        'Workforce',
      ),
      T(
        'Candidate Pool',
        'A database of candidates a company can reach for current or future openings.',
        'The recruiter filled two new roles from the existing candidate pool.',
        'Recruitment',
      ),
      T(
        'Cost per Hire',
        'The total recruitment cost divided by the number of hires in a period.',
        'Cost per hire fell after switching from paid job boards to the app.',
        'Analytics',
      ),
      T(
        'Deduction',
        'Amounts subtracted from gross salary, such as tax, social security, or loans.',
        'Late penalties appear as a deduction on the monthly payslip.',
        'Payroll',
      ),
      T(
        'Employee Self-Service',
        'Tools that let employees view payslips, request leave, or update data themselves.',
        'Staff download payslips through the employee self-service app.',
        'HR Tech',
        'ESS',
      ),
      T(
        'Employer Branding',
        'How a company presents itself as a place to work.',
        'A clear career site with real employee stories improves employer branding.',
        'Recruitment',
      ),
      T(
        'Fixed-term Contract',
        'An employment contract for a specific period or project — known as PKWT in Indonesia.',
        'Seasonal staff are hired on a 6-month fixed-term contract.',
        'Compliance',
        'PKWT',
      ),
      T(
        'Geotagged Hiring',
        'Matching candidates to jobs based on their location.',
        'Geotagged hiring helped fill a store opening with candidates who live nearby.',
        'Recruitment',
      ),
      T(
        'Headcount',
        'The total number of employees in a company or team.',
        'Approved headcount for the new branch is 25 people.',
        'Workforce',
      ),
      T(
        'HRIS',
        'Human Resource Information System that stores employee data and runs core HR processes.',
        'Employee contracts and documents are all kept in the HRIS.',
        'HR Tech',
        'Human Resource Information System',
      ),
      T(
        'HRMS',
        'Human Resource Management System — a suite covering recruitment, HR data, payroll, and more.',
        'The company replaced spreadsheets with an HRMS to run hiring and payroll in one place.',
        'HR Tech',
        'Human Resource Management System',
      ),
      T(
        'Interview Scheduling',
        'Arranging interview times between candidates and hiring teams.',
        'Candidates pick an interview slot directly from a chat link.',
        'Recruitment',
      ),
      T(
        'Job Description',
        "A document describing a role's duties, requirements, and conditions.",
        'The job description lists shift hours and the required experience.',
        'Recruitment',
        'JD',
      ),
      T(
        'KPI',
        'Key Performance Indicator — a measurable target used to evaluate performance.',
        "A store manager's KPIs include monthly sales and staff turnover.",
        'Performance',
        'Key Performance Indicator',
      ),
      T(
        'Leave',
        'Time off from work, paid or unpaid, such as annual, sick, or maternity leave.',
        "Sick leave requests need a doctor's note after two days.",
        'Leave',
      ),
      T(
        'LMS',
        'Learning Management System used to deliver and track employee training.',
        'New hires complete food-safety modules in the LMS.',
        'HR Tech',
        'Learning Management System',
      ),
      T(
        'Minimum Wage',
        'The lowest wage set by the government for a province or city — UMP or UMK in Indonesia.',
        'Salaries for Jakarta-based crew must meet the provincial minimum wage.',
        'Compliance',
        'UMP / UMK',
      ),
      T(
        'Offboarding',
        "The process of handling an employee's exit, from handover to final pay.",
        'The offboarding checklist includes returning the uniform and ID card.',
        'Workflow',
      ),
      T(
        'Onboarding',
        'The process of welcoming and preparing new employees in their first days and weeks.',
        'Onboarding for store crew covers safety, POS training and a buddy shift.',
        'Workflow',
      ),
      T(
        'Overtime',
        'Work beyond normal working hours, usually paid at a higher rate.',
        'Overtime during the holiday rush is approved by the area manager.',
        'Attendance',
      ),
      T(
        'Payroll',
        'The process of calculating and paying employee salaries, including deductions and taxes.',
        'Payroll runs on the 25th of every month.',
        'Payroll',
      ),
      T(
        'Permanent Contract',
        'An open-ended employment contract — known as PKWTT in Indonesia.',
        'After passing probation, she moved to a permanent contract.',
        'Compliance',
        'PKWTT',
      ),
      T(
        'PPh 21',
        'Indonesian income tax on employment income, withheld by the employer.',
        'PPh 21 is calculated and deducted automatically in payroll.',
        'Payroll',
      ),
      T(
        'Probation',
        'A trial period at the start of employment to assess fit.',
        'New permanent hires have a three-month probation period.',
        'Workforce',
      ),
      T(
        'Quality of Hire',
        'A measure of how much value new hires bring, often based on performance and retention.',
        'Quality of hire improved when video resumes were added to screening.',
        'Analytics',
      ),
      T(
        'Reimbursement',
        'Repayment of work-related expenses an employee paid personally.',
        'Fuel for client visits is claimed through reimbursement.',
        'Payroll',
      ),
      T(
        'Retention Rate',
        'The percentage of employees who stay with the company over a period.',
        'Retention rate for warehouse staff reached 85% this year.',
        'Analytics',
      ),
      T(
        'Shift',
        'A scheduled block of working hours, common in retail, F&B and production.',
        'The store runs morning, afternoon and night shifts.',
        'Attendance',
      ),
      T(
        'Shortlist',
        'A smaller group of the most suitable candidates selected for the next stage.',
        'Five candidates made the shortlist for the supervisor role.',
        'Recruitment',
      ),
      T(
        'THR',
        'Religious holiday allowance required by Indonesian law, paid before major religious holidays.',
        "Employees with 12+ months of service receive one month's salary as THR.",
        'Compensation',
        'Tunjangan Hari Raya',
      ),
      T(
        'Time to Hire',
        'The number of days from a candidate applying to accepting an offer.',
        'Average time to hire dropped from 43 to 12 days.',
        'Analytics',
      ),
      T(
        'Turnover',
        'Employees leaving a company and being replaced over a period.',
        'High turnover in the first month signals an onboarding problem.',
        'Analytics',
      ),
      T(
        'Video Resume',
        'A short recorded video where candidates introduce themselves.',
        'Her 30-second video resume showed strong communication skills.',
        'Recruitment',
      ),
      T(
        'Workforce Planning',
        'Forecasting future staffing needs and planning how to meet them.',
        'Workforce planning for Ramadan starts two months ahead.',
        'Workforce',
      ),
    ];
    this.LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  byLetter(c) {
    return this.TERMS.filter((t) => t.term[0].toUpperCase() === c);
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
  componentDidMount() {
    this._todI = setInterval(() => {
      const t = (this.state.todT || 0) + 1;
      if (t >= 8) this.setState({ tod: ((this.state.tod || 0) + 1) % 5, todT: 0 });
      else this.setState({ todT: t });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._todI);
    clearTimeout(this._amT1);
    clearTimeout(this._amT2);
    clearTimeout(this._amT3);
  }
  renderVals() {
    const s = this.state;
    const q = s.q.trim().toLowerCase();
    const TOD = ['THR', 'PKWT', 'ATS', 'BPJS Ketenagakerjaan', 'Attrition Rate']
      .map((k) => this.TERMS.find((t) => t.term === k || t.full === k))
      .filter(Boolean);
    const td = TOD[(s.tod || 0) % TOD.length];
    const avail = this.LETTERS.filter((c) => this.byLetter(c).length);
    const list = q
      ? this.TERMS.filter((t) => (t.term + ' ' + t.full + ' ' + t.def).toLowerCase().includes(q))
      : this.byLetter(s.letter);
    const ai = avail.indexOf(s.letter);
    const go = (c) => this.setState({ letter: c, q: '', open: '' });
    return {
      ...this.amVals(),
      tod: {
        ...td,
        hasFull: !!td.full,
        key: { animationName: (s.tod || 0) % 2 ? 'gltodin2' : 'gltodin' },
        prog: { width: ((s.todT || 0) / 8) * 100 + '%' },
      },
      todDots: TOD.map((t, i) => ({
        label: t.term,
        on: i === (s.tod || 0) % TOD.length,
        cls: i === (s.tod || 0) % TOD.length ? 'on' : '',
        pick: () => this.setState({ tod: i, todT: 0 }),
      })),
      todNext: () => this.setState({ tod: ((s.tod || 0) + 1) % TOD.length, todT: 0 }),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      q: s.q,
      hasQ: !!q,
      noQ: !q,
      onQ: (e) => this.setState({ q: e.target.value, open: '' }),
      onSubmit: (e) => {
        if (e && e.preventDefault) e.preventDefault();
      },
      clearQ: () => this.setState({ q: '', open: '' }),
      popular: ['THR', 'ATS', 'BPJS', 'PKWT', 'KPI'].map((t) => ({
        t,
        go: () => this.setState({ q: t, open: '' }),
      })),
      letters: this.LETTERS.map((c) => {
        const n = this.byLetter(c).length;
        const on = !q && c === s.letter;
        return {
          c,
          n,
          has: n > 0,
          on,
          cls: on ? 'on' : n ? '' : 'off',
          pick: () => {
            if (n) go(c);
          },
        };
      }),
      letterTitle: s.letter + s.letter.toLowerCase(),
      countLabel: list.length + (list.length === 1 ? ' term' : ' terms'),
      terms: list.map((t, i) => {
        const open = s.open === t.term;
        return {
          ...t,
          hasFull: !!t.full,
          open,
          cls: open ? 'open' : '',
          delay: { animationDelay: Math.min(i, 12) * 0.04 + 's' },
          toggle: () => this.setState({ open: open ? '' : t.term }),
        };
      }),
      none: list.length === 0,
      prevLabel: avail[(ai - 1 + avail.length) % avail.length],
      nextLabel: avail[(ai + 1) % avail.length],
      prevL: () => go(avail[(ai - 1 + avail.length) % avail.length]),
      nextL: () => go(avail[(ai + 1) % avail.length]),
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
      <section id="top" className="glhero">
        <div className="gldots" aria-hidden="true" />
        <div
          className="wrap glhwrap"
          style={{ position: 'relative', paddingTop: '64px', paddingBottom: '72px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <nav className="glcrumb rise d1" aria-label="Breadcrumb">
              <a href="/">{'Home'}</a>
              <span aria-hidden="true">{'/'}</span>
              <a href="/resources/">{'Resources'}</a>
              <span aria-hidden="true">{'/'}</span>
              <b>{'Glossary'}</b>
            </nav>
            <span className="rise d1 glpill">{'Glossary'}</span>
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
              {'HR terms, '}
              <span className="glhl">{'explained simply.'}</span>
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
                '200+ HR & recruitment terms used in Indonesia — from ATS to THR. Search terms, read definitions, see examples.'
              }
            </p>
            <form className="glsearch rise d4" role="search" onSubmit={v.onSubmit}>
              <span className="glsin">
                <svg
                  width="18"
                  height="18"
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
                  placeholder="Search a term, e.g. THR, PKWT, payroll"
                  value={v.q}
                  onChange={v.onQ}
                  aria-label="Search glossary"
                />{' '}
                {v.hasQ ? (
                  <>
                    <button type="button" className="glclear" onClick={v.clearQ} aria-label="Clear search">
                      {'×'}
                    </button>
                  </>
                ) : null}
              </span>{' '}
              <button type="submit" className="glgo">
                {'Search'}
              </button>
            </form>
            <div className="glpop rise d5">
              <span>{'Popular:'}</span>{' '}
              {L(v.popular).map((p_0, i_0) => (
                <React.Fragment key={i_0}>
                  <button type="button" onClick={p_0?.go}>
                    {T(p_0?.t)}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="gltod rise d4" aria-live="polite">
            <span className="gltodback b2" aria-hidden="true" />
            <span className="gltodback b1" aria-hidden="true" />
            <div className="gltodc" style={S(v.tod?.key)}>
              <div className="gltodh">
                <span className="gltodl">
                  <i />
                  {'Term of the day'}
                </span>
                <span className="gltodcat">{T(v.tod?.cat)}</span>
              </div>
              <b className="gltodt">{T(v.tod?.term)}</b>{' '}
              {v.tod?.hasFull ? (
                <>
                  <small className="gltodf">{T(v.tod?.full)}</small>
                </>
              ) : null}
              <p className="gltodd">{T(v.tod?.def)}</p>
              <div className="gltodex">
                <span>{'Example'}</span>
                <p>{T(v.tod?.ex)}</p>
              </div>
              <div className="gltodfoot">
                <div className="gltoddots" role="group" aria-label="Choose term">
                  {L(v.todDots).map((d_1, i_1) => (
                    <React.Fragment key={i_1}>
                      <button
                        type="button"
                        className={d_1?.cls}
                        onClick={d_1?.pick}
                        aria-label={d_1?.label}
                        aria-pressed={d_1?.on}
                      />
                    </React.Fragment>
                  ))}
                </div>
                <button type="button" className="gltodnext" onClick={v.todNext}>
                  {'Next term →'}
                </button>
              </div>
              <span className="gltodprog" aria-hidden="true">
                <i style={S(v.tod?.prog)} />
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="glbar">
        <div className="wrap">
          <div className="glletters" role="tablist" aria-label="Browse by letter">
            {L(v.letters).map((l_2, i_2) => (
              <React.Fragment key={i_2}>
                <button
                  type="button"
                  role="tab"
                  className={`gll ${T(l_2?.cls)}`}
                  aria-selected={l_2?.on}
                  onClick={l_2?.pick}
                >
                  {T(l_2?.c)}
                  {l_2?.has ? (
                    <>
                      <i>{T(l_2?.n)}</i>
                    </>
                  ) : null}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <section id="terms" className="wrap" style={{ paddingTop: '48px', paddingBottom: '104px' }}>
        <div className="glhead">
          <span className="glbadge" aria-hidden="true">
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
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <path d="M9 8h6M9 12h6M9 16h3" />
            </svg>
          </span>{' '}
          {v.noQ ? (
            <>
              <h2 className="glbig">{T(v.letterTitle)}</h2>
            </>
          ) : null}{' '}
          {v.hasQ ? (
            <>
              <h2 className="glbig sm">
                {'Results for “'}
                {T(v.q)}
                {'”'}
              </h2>
            </>
          ) : null}{' '}
          <span className="glcount">{T(v.countLabel)}</span>
        </div>
        <div className="glcards">
          {L(v.terms).map((t_3, i_3) => (
            <React.Fragment key={i_3}>
              <article className={`glcard ${T(t_3?.cls)}`} style={S(t_3?.delay)}>
                <button type="button" className="glct" onClick={t_3?.toggle} aria-expanded={t_3?.open}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                    <b>{T(t_3?.term)}</b>
                    {t_3?.hasFull ? (
                      <>
                        <small>{T(t_3?.full)}</small>
                      </>
                    ) : null}
                  </span>{' '}
                  <span className="glplusb" aria-hidden="true">
                    {'+'}
                  </span>
                </button>
                <p className="gldef">{T(t_3?.def)}</p>
                <div className="glex">
                  <span className="glexl">{'Example'}</span>
                  <p>{T(t_3?.ex)}</p>
                  <span className="gltag">{T(t_3?.cat)}</span>
                </div>
              </article>
            </React.Fragment>
          ))}{' '}
          {v.none ? (
            <>
              <div className="glnone">
                <b>
                  {'No terms match “'}
                  {T(v.q)}
                  {'”.'}
                </b>{' '}
                <span>{'Try another word, or browse by letter.'}</span>{' '}
                <button type="button" onClick={v.clearQ}>
                  {'Clear search'}
                </button>
              </div>
            </>
          ) : null}
        </div>
        <div className="glnav">
          <button type="button" className="glnb" onClick={v.prevL}>
            {'← '}
            {T(v.prevLabel)}
          </button>{' '}
          <button type="button" className="glnb" onClick={v.nextL}>
            {T(v.nextLabel)}
            {' →'}
          </button>
        </div>
        <p style={{ margin: '18px 0 0', textAlign: 'center', fontSize: '12px', color: '#717680' }}>
          {'Showing a starter set of terms — the full glossary has 200+ entries.'}
        </p>
      </section>
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="glcta rv">
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
              {'From terms to tools.'}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', lineHeight: '26px', color: '#cdcde3' }}>
              {'ATS, payroll, leave, KPI — see them working together in Jobseeker HRMS.'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a className="btn glbtn" href="/hrms/">
              {'Explore HRMS '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
            </a>{' '}
            <a className="btn glbtn2" href="/demo/">
              {'Schedule a demo'}
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
                {L(v.amMsgs).map((m_4, i_4) => (
                  <React.Fragment key={i_4}>
                    <div className={`ammsg ${T(m_4?.who)}`}>
                      {T(m_4?.t)}
                      {m_4?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_4?.href)}>
                            {T(m_4?.link)}
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
                    {L(v.amSugs).map((sg_5, i_5) => (
                      <React.Fragment key={i_5}>
                        <button type="button" className="asug" onClick={sg_5?.go}>
                          {T(sg_5?.t)}
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
