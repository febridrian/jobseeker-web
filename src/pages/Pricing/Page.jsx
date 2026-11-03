// Pricing
// Generated from the design artboard Pricing.dc.html by tools/convert-design.mjs.
import React from 'react';
import { DCLogic, A, L, S, T } from '../../lib/dc.js';

class Page extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, lang: 'EN', ti: 0, diff: false, faq: 0 };
    const B = (id) => '/_blob/' + id;
    const IC = {
      a: 'M8 9l-4 3 4 3M16 9l4 3-4 3',
      b: 'M12 2l10 5-10 5L2 7zM2 12l10 5 10-5',
      c: 'M12 2l10 5-10 5L2 7zM2 12l10 5 10-5M2 17l10 5 10-5',
      free: 'M20 12v9H4v-9M2 7h20v5H2zM12 22V7',
      boost: 'M13 2L3 14h9l-1 8 10-12h-9z',
      db: 'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
      team: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M17 3.5a4 4 0 0 1 0 7.5M22 21a7 7 0 0 0-4-6.3',
      exec: 'M12 2l3 3-2 3 3 10-4 4-4-4 3-10-2-3z',
      train: 'M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5',
    };
    const Y = true,
      N = false;
    this.TABS = [
      {
        name: 'HRMS',
        logo: B('06922c52c0d826c56143c4224b8fb845'),
        sub: 'Modular HR software — start with one module and grow into the full platform.',
        faqAbout: 'HRMS',
        plans: [
          {
            name: 'Starter',
            price: '[Rp X]',
            unit: '/user',
            bill: 'Billed monthly.',
            for: 'Recruitment — ATS + Career Site',
            icon: IC.a,
            cta: 'Get started',
            href: '/demo/',
            feats: [
              'ATS: manage hiring from application to offer',
              'Branded Career Site',
              'Auto screening & bulk actions',
              'Interview scheduling',
              'Basic chat and email support',
            ],
          },
          {
            name: 'Growth',
            price: '[Rp X]',
            unit: '/user',
            bill: 'Billed monthly.',
            for: 'Recruitment + People',
            icon: IC.b,
            popular: true,
            cta: 'Get started',
            href: '/demo/',
            feats: [
              'Everything in Starter',
              'HRIS: employee data & documents',
              'Attendance, leave & payroll',
              'Jobseeker Life employee app',
              'Priority chat and email support',
            ],
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            unit: '',
            bill: 'Tailored to your organization.',
            for: 'Full HRMS',
            icon: IC.c,
            cta: 'Talk to sales',
            href: '/demo/',
            feats: [
              'All modules in one platform',
              'PMS & LMS (coming soon)',
              'Custom approval workflows',
              'Integrations & data migration',
              'Dedicated account manager',
            ],
          },
        ],
        rows: [
          ['g', 'Recruitment'],
          ['ATS (applicant tracking)', Y, Y, Y],
          ['Career Site', Y, Y, Y],
          ['Auto screening & bulk actions', Y, Y, Y],
          ['Interview scheduling', Y, Y, Y],
          ['g', 'People'],
          ['HRIS: employee data & documents', N, Y, Y],
          ['Attendance & leave', N, Y, Y],
          ['Payroll', N, Y, Y],
          ['Jobseeker Life employee app', N, Y, Y],
          ['Performance management (PMS)', N, N, Y, 'soon'],
          ['Learning management (LMS)', N, N, Y, 'soon'],
          ['g', 'Platform & support'],
          ['Approval workflows', 'Basic', 'Standard', 'Custom'],
          ['Integrations', N, 'Standard', 'Custom'],
          ['Support', 'Chat & email', 'Priority', 'Dedicated manager'],
        ],
        faqs: [
          {
            q: 'Can I start with just one module?',
            a: 'Yes. ATS and HRIS each run on their own. Add Career Site to ATS, and Jobseeker Life, PMS and LMS to HRIS when you need them.',
          },
          { q: 'Is there a free trial?', a: 'Yes — you can try any plan free for 30 days.' },
          {
            q: 'How is pricing calculated?',
            a: 'Starter and Growth are priced per user per month. Enterprise pricing is tailored to your organization and modules.',
          },
          {
            q: 'When will PMS and LMS be available?',
            a: 'Both modules are coming soon and will sit alongside HRIS. Enterprise customers get early access.',
          },
          {
            q: 'Can I switch plans later?',
            a: 'Yes. You can upgrade as your team grows — just contact our team.',
          },
          {
            q: 'Do you help with setup and data migration?',
            a: 'Yes. Our team supports onboarding, and Enterprise plans include data migration and integrations.',
          },
        ],
      },
      {
        name: 'Jobseeker Partners',
        logo: B('2e0842aec39ea4bc17e6d544749982f9'),
        sub: 'Self-service hiring for SMEs — post jobs at no cost and only pay for premium features when you need them.',
        faqAbout: 'Jobseeker Partners',
        plans: [
          {
            name: 'Free',
            price: 'Rp 0',
            unit: '',
            bill: 'Free forever.',
            for: 'Post & review',
            icon: IC.free,
            cta: 'Get started',
            href: '/partners/',
            feats: [
              'Post jobs from your phone',
              'Review candidates & video resumes',
              'Instant application notifications',
              'Chat with candidates in-app',
              'Schedule interviews',
            ],
          },
          {
            name: 'Boost',
            price: '[Rp X]',
            unit: '/job',
            bill: 'Pay per job post.',
            for: 'Hire faster',
            icon: IC.boost,
            popular: true,
            cta: 'Boost a job',
            href: '/partners/',
            feats: [
              'Everything in Free',
              'Highlighted job listing',
              'Top placement in search results',
              'Reach more nearby candidates',
              'Faster applications for urgent roles',
            ],
          },
          {
            name: 'Database Access',
            price: '[Rp X]',
            unit: '/month',
            bill: 'Billed monthly.',
            for: 'Find candidates yourself',
            icon: IC.db,
            cta: 'Get access',
            href: '/partners/',
            feats: [
              'Everything in Free',
              'Search our candidate database',
              'Filter by location & role',
              'Contact candidates directly',
              'Save and shortlist profiles',
            ],
          },
        ],
        rows: [
          ['g', 'Posting'],
          ['Post jobs', Y, Y, Y],
          ['Highlighted listing', N, Y, N],
          ['Top placement in search', N, Y, N],
          ['g', 'Candidates'],
          ['Review applicants & video resumes', Y, Y, Y],
          ['Location filter (geotagged)', Y, Y, Y],
          ['Search the candidate database', N, N, Y],
          ['Contact candidates directly', 'Applicants only', 'Applicants only', 'Any candidate'],
          ['g', 'Hiring'],
          ['In-app chat & interview scheduling', Y, Y, Y],
          ['Pricing', 'Free', 'Per job', 'Monthly'],
        ],
        faqs: [
          {
            q: 'Is it really free?',
            a: 'Yes. Posting jobs and reviewing candidates is 100% free. You only pay for premium features like Boost or database access.',
          },
          {
            q: 'How many jobs can I post?',
            a: 'You can post multiple jobs on the free plan. Limits per account: [to be confirmed].',
          },
          {
            q: 'Are the candidates real?',
            a: 'Yes. Candidates apply through Jobseeker App with real profiles and video resumes, so you can see who they are before you call.',
          },
          {
            q: 'Is there a location filter?',
            a: 'Yes. Jobs and candidates are geotagged, so you can find people who live near your business.',
          },
          {
            q: "I don't have a high-end phone — can I still use it?",
            a: 'Jobseeker Partners is built to run on everyday smartphones. You can post jobs and chat with candidates without a computer.',
          },
          {
            q: 'What if I need staff urgently?',
            a: 'Use Boost to highlight your job and reach more nearby candidates faster — or talk to us about Talent Augmentation.',
          },
        ],
      },
      {
        name: 'Jobseeker Services',
        logo: B('0934d72a7333f2a8976ae385b4569280'),
        sub: 'Managed workforce services — priced around your headcount, roles and programs.',
        faqAbout: 'Jobseeker Services',
        plans: [
          {
            name: 'Talent Augmentation',
            price: 'Custom',
            unit: '',
            bill: 'Quoted per headcount.',
            for: 'Frontline & operational teams',
            icon: IC.team,
            cta: 'Get a quote',
            href: '/talent/',
            feats: [
              'End-to-end workforce management',
              'Sourcing, screening & placement',
              'Daily operations support',
              'Scales up or down with demand',
              'Dedicated account team',
            ],
          },
          {
            name: 'Executive Search',
            price: 'Custom',
            unit: '',
            bill: 'Quoted per role.',
            for: 'Managerial & executive roles',
            icon: IC.exec,
            popular: true,
            cta: 'Get a quote',
            href: '/executive/',
            feats: [
              'Strategic hiring for leadership roles',
              'Market mapping & headhunting',
              'Assessed shortlist of candidates',
              'Offer & onboarding support',
              '3-month replacement guarantee',
            ],
          },
          {
            name: 'Corporate Training',
            price: 'Custom',
            unit: '',
            bill: 'Quoted per program.',
            for: 'Upskilling your teams',
            icon: IC.train,
            cta: 'Get a quote',
            href: '/training/',
            feats: [
              'Skill development & certification',
              'Programs by industry practitioners',
              'Online, onsite or hybrid formats',
              'Progress tracking & reporting',
              'Custom curriculum for your teams',
            ],
          },
        ],
        rows: [
          ['g', 'Best for'],
          ['Volume frontline hiring', Y, N, N],
          ['Leadership & executive hiring', N, Y, N],
          ['Upskilling existing employees', N, N, Y],
          ['g', 'What we handle'],
          ['Sourcing & screening', Y, Y, N],
          ['Daily workforce operations', Y, N, N],
          ['Training delivery & certification', N, N, Y],
          ['Replacement guarantee', N, '3 months', N],
          ['g', 'Engagement'],
          ['Pricing model', 'Per headcount', 'Per role', 'Per program'],
          ['Dedicated account team', Y, Y, Y],
        ],
        faqs: [
          {
            q: 'How do you price services?',
            a: 'Services are quoted based on your needs — headcount for Talent Augmentation, role for Executive Search and program for Corporate Training.',
          },
          {
            q: 'How fast can you start?',
            a: 'Our team will reply within 24 business hours to scope your needs and timeline.',
          },
          {
            q: 'What does the replacement guarantee cover?',
            a: 'For Executive Search, if a placed candidate leaves within 3 months, we find a replacement.',
          },
          {
            q: 'Can I combine services with HRMS?',
            a: 'Yes. Many clients use HRMS to manage the people we help them hire and train.',
          },
          {
            q: 'Do you work outside Jakarta and Bali?',
            a: 'Yes. We serve clients across Indonesia and Southeast Asia.',
          },
          {
            q: 'Can training be customized?',
            a: 'Yes. Corporate Training programs can be tailored to your industry, roles and goals.',
          },
        ],
      },
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
  renderVals() {
    const s = this.state,
      T = this.TABS[s.ti];
    const popIdx = T.plans.findIndex((p) => p.popular);
    let rows = T.rows.map((r) => {
      if (r[0] === 'g') return { isGroup: true, isRow: false, label: r[1], vals: [], soon: false };
      const vals = r
        .slice(1, 4)
        .map((v, i) => ({
          yes: v === true,
          no: v === false,
          text: typeof v === 'string',
          t: typeof v === 'string' ? v : '',
          colCls: i === popIdx ? 'pop' : '',
        }));
      const raw = JSON.stringify(r.slice(1, 4));
      const same = r.slice(1, 4).every((v) => v === r[1]);
      return { isGroup: false, isRow: true, label: r[0], vals, soon: r[4] === 'soon', same };
    });
    if (s.diff)
      rows = rows
        .filter((r) => r.isGroup || !r.same)
        .filter((r, i, a) => !(r.isGroup && (i === a.length - 1 || a[i + 1].isGroup)));
    let k = 0;
    rows = rows.map((r) => ({ ...r, delay: { animationDelay: k++ * 0.02 + 's' } }));
    return {
      ...this.amVals(),
      menuOpen: s.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      tabs: this.TABS.map((t, i) => ({
        name: t.name,
        logo: t.logo,
        on: i === s.ti,
        cls: i === s.ti ? 'on' : '',
        pick: () => this.setState({ ti: i, faq: 0 }),
      })),
      ink: { transform: 'translateX(' + s.ti * 100 + '%)' },
      tabSub: T.sub,
      plans: T.plans.map((p, i) => ({
        ...p,
        popular: !!p.popular,
        cls: p.popular ? 'pop' : '',
        colCls: i === popIdx ? 'pop' : '',
        delay: { animationDelay: i * 0.08 + 's' },
        feats: p.feats.map((t, j) => ({ t, delay: { animationDelay: 0.2 + i * 0.08 + j * 0.05 + 's' } })),
      })),
      cmpTitle: 'Compare ' + T.name + ' plans',
      rows,
      diffOnly: s.diff,
      diffCls: s.diff ? 'on' : '',
      toggleDiff: () => this.setState({ diff: !s.diff }),
      faqAbout: T.faqAbout,
      faqs: T.faqs.map((f, i) => ({
        ...f,
        open: i === s.faq,
        cls: i === s.faq ? 'open' : '',
        toggle: () => this.setState({ faq: i === s.faq ? -1 : i }),
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
            href="/v1/"
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
              <a className="navlink nbtn" href="/v1/" aria-haspopup="true">
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
      <section id="top" className="prchero">
        <span className="prcband b1" aria-hidden="true" />
        <span className="prcband b2" aria-hidden="true" /> <span className="prcband b3" aria-hidden="true" />
        <span className="prcband b4" aria-hidden="true" />
        <span className="prcband b5" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative', paddingTop: '64px', paddingBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '16px',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            <span className="rise d1 prcpill">{'Pricing plans'}</span>
            <h1
              className="rise d2 h1"
              style={{
                margin: '0',
                fontSize: '56px',
                lineHeight: '62px',
                fontWeight: '700',
                letterSpacing: '-0.035em',
                color: '#050774',
              }}
            >
              {'Plans for all sizes'}
            </h1>
            <p
              className="rise d3"
              style={{ margin: '0', fontSize: '18px', lineHeight: '29px', color: '#050774' }}
            >
              {'Simple, transparent pricing that grows with you. Try any plan free for 30 days.'}
            </p>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingBottom: '96px' }}>
        <div className="prctabs rise d4" role="tablist" aria-label="Products">
          {L(v.tabs).map((t_0, i_0) => (
            <React.Fragment key={i_0}>
              <button
                type="button"
                role="tab"
                className={`prctab ${T(t_0?.cls)}`}
                aria-selected={t_0?.on}
                onClick={t_0?.pick}
              >
                <img src={A(t_0?.logo)} alt="" />
                {T(t_0?.name)}
              </button>
            </React.Fragment>
          ))}{' '}
          <span className="prcink" style={S(v.ink)} aria-hidden="true" />
        </div>
        <p className="prcsub">{T(v.tabSub)}</p>
        <div className="prcplans">
          {L(v.plans).map((p_1, i_1) => (
            <React.Fragment key={i_1}>
              <div className={`prcplan ${T(p_1?.cls)}`} style={S(p_1?.delay)}>
                {p_1?.popular ? (
                  <>
                    <span className="prcpop">{'Most popular'}</span>
                  </>
                ) : null}
                <div className="prcptop">
                  <span className="prcpic">
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
                      <path d={p_1?.icon} />
                    </svg>
                  </span>{' '}
                  <b className="prcpname">{T(p_1?.name)}</b>{' '}
                  <span className="prcprice">
                    {T(p_1?.price)}
                    <small>{T(p_1?.unit)}</small>
                  </span>{' '}
                  <span className="prcbill">{T(p_1?.bill)}</span>{' '}
                  <span className="prcfor">{T(p_1?.for)}</span>
                </div>
                <ul className="prcfeat">
                  {L(p_1?.feats).map((f_2, i_2) => (
                    <React.Fragment key={i_2}>
                      <li style={S(f_2?.delay)}>
                        <span className="prcck">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </span>
                        {T(f_2?.t)}
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
                <div className="prcpbot">
                  <a className="prcbtn" href={A(p_1?.href)}>
                    {T(p_1?.cta)} <span aria-hidden="true">{'→'}</span>
                  </a>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <p className="prcnote">
          {'Prices shown as [Rp X] are placeholders — final pricing to be confirmed.'}
        </p>
      </section>
      <section style={{ background: '#fafafa', padding: '96px 0' }}>
        <div className="wrap">
          <div className="prchead rv">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span
                style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.04em', color: '#050774' }}
              >
                {'Compare plans'}
              </span>
              <h2
                className="h2"
                style={{
                  margin: '0',
                  fontSize: '36px',
                  lineHeight: '44px',
                  fontWeight: '700',
                  letterSpacing: '-0.025em',
                  color: '#181d27',
                }}
              >
                {T(v.cmpTitle)}
              </h2>
            </div>
            <button
              type="button"
              className={`prcdiff ${T(v.diffCls)}`}
              onClick={v.toggleDiff}
              aria-pressed={v.diffOnly}
            >
              <span className="prcsw" aria-hidden="true">
                <i />
              </span>
              {'Show differences only'}
            </button>
          </div>
          <div className="prctable rv">
            <div className="prcrow prcth">
              <span className="prccell first">{'Features'}</span>{' '}
              {L(v.plans).map((p_3, i_3) => (
                <React.Fragment key={i_3}>
                  <span className={`prccell ${T(p_3?.colCls)}`}>
                    <b>{T(p_3?.name)}</b>
                    <small>
                      {T(p_3?.price)}
                      {T(p_3?.unit)}
                    </small>
                  </span>
                </React.Fragment>
              ))}
            </div>
            {L(v.rows).map((r_4, i_4) => (
              <React.Fragment key={i_4}>
                {r_4?.isGroup ? (
                  <>
                    <div className="prcgroup">{T(r_4?.label)}</div>
                  </>
                ) : null}{' '}
                {r_4?.isRow ? (
                  <>
                    <div className="prcrow" style={S(r_4?.delay)}>
                      <span className="prccell first">
                        {T(r_4?.label)}
                        {r_4?.soon ? (
                          <>
                            <em className="prcsoon">{'Soon'}</em>
                          </>
                        ) : null}
                      </span>{' '}
                      {L(r_4?.vals).map((v_5, i_5) => (
                        <React.Fragment key={i_5}>
                          <span className={`prccell ${T(v_5?.colCls)}`}>
                            {v_5?.yes ? (
                              <>
                                <span className="prcyes" aria-label="Included">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M5 12l5 5L20 7" />
                                  </svg>
                                </span>
                              </>
                            ) : null}{' '}
                            {v_5?.no ? (
                              <>
                                <span className="prcno" aria-label="Not included">
                                  {'—'}
                                </span>
                              </>
                            ) : null}{' '}
                            {v_5?.text ? (
                              <>
                                <span className="prctxt">{T(v_5?.t)}</span>
                              </>
                            ) : null}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '104px', paddingBottom: '104px' }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          <h2
            className="h2"
            style={{
              margin: '0',
              fontSize: '36px',
              lineHeight: '44px',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: '#181d27',
            }}
          >
            {'Frequently asked questions'}
          </h2>
          <p style={{ margin: '0', fontSize: '16px', color: '#535862' }}>
            {'Everything you need to know about '}
            {T(v.faqAbout)}
            {' and billing.'}
          </p>
        </div>
        <div className="prcfaq">
          {L(v.faqs).map((f_6, i_6) => (
            <React.Fragment key={i_6}>
              <div className={`prcq ${T(f_6?.cls)}`}>
                <button type="button" className="prcqb" onClick={f_6?.toggle} aria-expanded={f_6?.open}>
                  <span className="prcqi" aria-hidden="true" />
                  {T(f_6?.q)}
                </button>
                <div className="prcqa">
                  <p>{T(f_6?.a)}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="prccta">
        <span className="prcband c1" aria-hidden="true" />
        <span className="prcband c2" aria-hidden="true" />
        <div
          className="wrap"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '18px',
            paddingTop: '88px',
            paddingBottom: '88px',
          }}
        >
          <h2
            className="h2"
            style={{
              margin: '0',
              fontSize: '40px',
              lineHeight: '48px',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            {'Start your free trial'}
          </h2>
          <p style={{ margin: '0', fontSize: '17px', color: '#cdcde3' }}>
            {'Try any plan free for 30 days — or talk to our team to find the right fit.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="btn prcbw" href="/solutions/">
              {'Learn more'}
            </a>{' '}
            <a className="btn prcbb" href="/demo/">
              {'Get started '}
              <span className="arr" aria-hidden="true">
                {'→'}
              </span>
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
                {L(v.amMsgs).map((m_7, i_7) => (
                  <React.Fragment key={i_7}>
                    <div className={`ammsg ${T(m_7?.who)}`}>
                      {T(m_7?.t)}
                      {m_7?.hasLink ? (
                        <>
                          <a className="amlink" href={A(m_7?.href)}>
                            {T(m_7?.link)}
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
                    {L(v.amSugs).map((sg_8, i_8) => (
                      <React.Fragment key={i_8}>
                        <button type="button" className="asug" onClick={sg_8?.go}>
                          {T(sg_8?.t)}
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
