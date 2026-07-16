import { useState } from "react"
import { Link } from "react-router-dom"
import { Icon, Eyebrow, BtnPrimary, BtnGold, CtaBand } from "../ui.jsx"

const SERVICES = [
  { icon: "doc", name: "Accounting & Bookkeeping", desc: "Clean, current financial statements and management accounts so you always know where you stand.", to: "/services#accounting" },
  { icon: "tax", name: "Tax & Self Assessment", desc: "Corporation tax, VAT and self-assessment handled with proactive planning to legally reduce what you owe.", to: "/services#tax" },
  { icon: "trend", name: "Business Advisory", desc: "Cash flow planning, forecasting and strategic guidance built around your growth goals.", to: "/services#advisory" },
  { icon: "shield", name: "HMRC Compliance", desc: "Filings, correspondence and enquiries handled directly with HMRC so nothing falls on your desk.", to: "/services#compliance" },
  { icon: "users", name: "Payroll", desc: "Accurate, on-time payroll and pension processing for your team, every pay period.", to: "/services#payroll" },
  { icon: "globe", name: "Cross-Border Services", desc: "Structuring and compliance guidance for businesses trading between the UK and UAE.", to: "/services#cross-border" },
]

const TRUST = ["ACCA Qualified", "10+ Years Experience", "UK & UAE Expertise", "HMRC Compliant", "Fixed-Fee Services", "Dedicated Advisor"]

const WHY = [
  { icon: "users", title: "Dedicated Advisor", desc: "One point of contact, start to finish — never passed between departments." },
  { icon: "calendar", title: "Proactive Tax Planning", desc: "Legal opportunities identified before deadlines, not after." },
  { icon: "tax", title: "Transparent Pricing", desc: "Fixed fees agreed upfront — no surprise bills at year-end." },
  { icon: "clock", title: "Fast Response", desc: "Questions and concerns answered quickly — accounting shouldn't add to your stress." },
  { icon: "globe", title: "UK & UAE Experience", desc: "Practical, hands-on experience trading across both markets." },
  { icon: "checksquare", title: "Business-First Advice", desc: "Guidance framed around your goals, not just compliance boxes to tick." },
]

const INDUSTRIES = [
  ["Contractors & Consultants", "IR35-aware structuring and clean, simple books."],
  ["E-commerce", "Multi-channel VAT and margin tracking that keeps pace with sales."],
  ["Agencies", "Project-based reporting and cash flow built around client billing."],
  ["Construction", "CIS compliance and project-by-project cost visibility."],
  ["Retail & Hospitality", "Daily takings, payroll and stock-aware bookkeeping."],
  ["Property", "Rental income, SPVs and capital gains handled correctly."],
  ["Healthcare", "Practice accounts and NHS/private income handled together."],
  ["Professional Services", "Partnership structures and fee-earner profitability insight."],
]

const STEPS = [
  ["1", "Book Consultation", "A free 30-minute call to understand your business."],
  ["2", "Understand Your Business", "A close look at your current finances and structure."],
  ["3", "Receive Tailored Advice", "A clear plan for tax, compliance and growth."],
  ["4", "Grow With Confidence", "We handle the numbers so you can focus on the business."],
]

const FAQS = [
  ["How much do you charge?", "Fees are fixed and agreed upfront after a free consultation, based on the complexity of your business — no surprise bills."],
  ["Can you switch me over from my current accountant?", "Yes — switching is handled directly with your existing accountant with minimal input needed from you."],
  ["Do you deal with HMRC directly?", "Yes — filings, correspondence and enquiries are handled directly with HMRC on your behalf."],
  ["Do you handle VAT?", "Yes — VAT registration, returns and scheme selection are all part of our compliance service."],
  ["Can we work together remotely?", "Yes, most clients are served fully remotely via video calls, email and cloud accounting tools."],
  ["I run a limited company — can you help with statutory filings and self assessment?", "Yes — company accounts, corporation tax, and directors' self-assessment returns are all covered."],
  ["Can you help businesses operating in both the UK and UAE?", "Yes — this is a core specialism, drawing on direct hands-on experience in both markets."],
]

const CREDS = ["ACCA Qualified", "MSc Accounting & Finance", "PMP Certified"]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-40 pt-28 md:px-16 md:pb-56 md:pt-32">
        <div className="pointer-events-none absolute -right-36 -top-36 h-[480px] w-[480px] rounded-full [background:radial-gradient(circle,oklch(80%_0.09_145_/_0.45),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full [background:radial-gradient(circle,oklch(85%_0.06_85_/_0.55),transparent_70%)]" />
        <img
          src="/skyline.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1 left-0 w-full select-none opacity-[0.85]"
        />
        <div className="relative z-10 mx-auto max-w-[780px] text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green/25 bg-surface/70 px-4 py-2 text-[13px] font-bold tracking-[0.02em] text-green">
            <span className="h-[7px] w-[7px] rounded-full bg-dot" /> ACCOUNTING &amp; BUSINESS ADVISORY
          </div>
          <h1 className="text-[40px] font-black leading-[1.1] tracking-[-0.03em] text-balance md:text-[54px]">
            Helping businesses stay compliant while making smarter financial decisions.
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.65] text-ink/70">
            Eclantis Capital is a boutique accounting and advisory partner for small businesses, contractors and growing
            companies across the UK — with specialist experience supporting UK and UAE cross-border trade.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <BtnPrimary to="/contact">Book a Free Consultation</BtnPrimary>
            <Link to="/services" className="inline-flex items-center rounded-full border-[1.5px] border-line px-8 py-4 text-[15px] font-bold text-ink transition hover:border-green hover:text-green">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 md:px-16">
        <div className="flex flex-wrap justify-center gap-3.5">
          {TRUST.map((t) => (
            <div key={t} className="flex items-center gap-2.5 rounded-full border border-line bg-surface py-2.5 pl-4 pr-5 text-[13.5px] font-bold text-green shadow-[0_2px_8px_oklch(20%_0.05_155_/_0.05)]">
              <Icon name="check" size={14} /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <Eyebrow className="mb-3.5">Services</Eyebrow>
            <h2 className="text-3xl font-black tracking-[-0.02em] text-balance md:text-[38px]">A financial partner for every part of your business</h2>
            <p className="mt-4 text-[17px] leading-6 text-ink/65">From compliance to strategy — one advisor across everything your business needs.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.name} to={s.to} className="group block rounded-2xl border border-line2 bg-cream p-[34px] transition hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_oklch(20%_0.05_155_/_0.15)]">
                <div className="mb-[22px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-gradient-to-br from-green to-green-soft text-cream">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mb-2.5 text-[19px] font-extrabold">{s.name}</h3>
                <p className="mb-4 text-[15px] leading-6 text-ink/65">{s.desc}</p>
                <span className="text-[14px] font-bold text-green">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <BtnPrimary to="/contact" className="shadow-[0_8px_20px_oklch(30%_0.07_155_/_0.25)]">Book a Free Consultation</BtnPrimary>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-16">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <Eyebrow className="mb-3.5">Why Choose Eclantis</Eyebrow>
          <h2 className="text-3xl font-black tracking-[-0.02em] text-balance md:text-4xl">A partner invested in your business, not just your books</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-2xl border border-line2 bg-surface p-[30px]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-chip text-green">
                <Icon name={w.icon} size={20} />
              </div>
              <h3 className="mb-2 text-[17px] font-extrabold">{w.title}</h3>
              <p className="text-[14.5px] leading-[1.55] text-ink/65">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-14 max-w-[620px] text-center">
            <Eyebrow className="mb-3.5">Industries We Serve</Eyebrow>
            <h2 className="text-3xl font-black tracking-[-0.02em] text-balance md:text-4xl">Built for how your industry actually works</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map(([name, desc]) => (
              <div key={name} className="rounded-[14px] border border-line2 bg-cream p-6">
                <h3 className="mb-1.5 text-[16px] font-extrabold">{name}</h3>
                <p className="text-[14px] leading-[1.5] text-ink/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-16">
        <div className="mx-auto mb-16 max-w-[620px] text-center">
          <Eyebrow className="mb-3.5">How We Work</Eyebrow>
          <h2 className="text-3xl font-black tracking-[-0.02em] text-balance md:text-4xl">Getting started takes four simple steps</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([n, title, desc]) => (
            <div key={n} className="text-center">
              <div className="mx-auto mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-green text-[19px] font-extrabold text-cream">{n}</div>
              <h3 className="mb-2 text-[16px] font-extrabold">{title}</h3>
              <p className="text-[14px] leading-[1.55] text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET YOUR ADVISOR */}
      <section className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-center gap-14">
          <div className="shrink-0">
            <img
              src="/advisor.webp"
              alt="Daulat Anosh Khokhar, Founder of Eclantis Capital"
              className="h-[320px] w-[260px] rounded-2xl object-cover object-top shadow-[0_20px_40px_-14px_oklch(20%_0.05_155_/_0.25)]"
            />
          </div>
          <div className="min-w-[300px] flex-1">
            <Eyebrow className="mb-3.5">Meet Your Advisor</Eyebrow>
            <h2 className="text-3xl font-black tracking-[-0.02em]">Daulat Anosh Khokhar</h2>
            <p className="mb-5 mt-1.5 text-[15px] font-semibold text-green-soft">Founder · ACCA Qualified · PMP Certified</p>
            <p className="mb-5 text-[16px] leading-[1.7] text-ink/75">
              Daulat founded Eclantis Capital after a decade managing finance, VAT and compliance for businesses in
              London and Dubai — from auditing and payroll to cutting costs on the ground for a Dubai trading company.
              That direct experience shapes how the firm works: practical, proactive, and personally accountable.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {CREDS.map((c) => (
                <div key={c} className="rounded-md border border-line px-3.5 py-2 text-[12.5px] font-bold text-green">{c}</div>
              ))}
            </div>
            <Link to="/about" className="mt-6 inline-block text-[14.5px] font-bold text-green">Read the full story →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 text-center">
            <Eyebrow className="mb-3.5">Client Testimonials</Eyebrow>
            <h2 className="text-3xl font-black tracking-[-0.02em] md:text-4xl">What clients say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <figure key={i} className="rounded-2xl border border-line2 bg-surface p-[34px]">
                <div className="mb-[18px] text-[17px] text-star">★★★★★</div>
                <blockquote className="mb-6 text-[16px] italic leading-6 text-ink/70">"Add a real client quote here once available."</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="h-12 w-12 rounded-full bg-chip" />
                  <div>
                    <div className="text-[14px] font-bold not-italic">Client Name</div>
                    <div className="text-[13px] text-ink/55">Business, Location</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[820px] px-6 py-24 md:px-16">
        <div className="mb-12 text-center">
          <Eyebrow className="mb-3.5">FAQ</Eyebrow>
          <h2 className="text-3xl font-black tracking-[-0.02em] md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map(([q, a], i) => {
            const open = openFaq === i
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-line2 bg-surface">
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15.5px] font-bold"
                >
                  {q}
                  <span className="text-[18px] font-normal text-green">{open ? "−" : "+"}</span>
                </button>
                {open && <div className="px-6 pb-[22px] text-[14.5px] leading-6 text-ink/65">{a}</div>}
              </div>
            )
          })}
        </div>
      </section>

      <CtaBand
        title="Let's build a stronger financial future for your business."
        subtitle="Book your free consultation today."
      />
    </>
  )
}
