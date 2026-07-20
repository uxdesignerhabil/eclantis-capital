import { useState } from "react"
import { Link } from "react-router-dom"
import { Icon, Eyebrow, BtnPrimary, BtnGold, CtaBand, TeamGrid } from "../ui.jsx"
import { TEAM } from "../team.js"

const SERVICES = [
  { icon: "doc", name: "Accounting & Bookkeeping", desc: "Clean, current financial statements and management accounts so you always know where you stand.", to: "/services#accounting" },
  { icon: "tax", name: "Tax & Self Assessment", desc: "Corporation tax, VAT and self-assessment handled with proactive planning to legally reduce what you owe.", to: "/services#tax" },
  { icon: "trend", name: "Business Advisory", desc: "Cash flow planning, forecasting and strategic guidance built around your growth goals.", to: "/services#advisory" },
  { icon: "shield", name: "HMRC Compliance", desc: "Filings, correspondence and enquiries handled directly with HMRC so nothing falls on your desk.", to: "/services#compliance" },
  { icon: "users", name: "Payroll", desc: "Accurate, on-time payroll and pension processing for your team, every pay period.", to: "/services#payroll" },
  { icon: "globe", name: "Cross-Border Services", desc: "Structuring and compliance guidance for businesses trading between the UK and UAE.", to: "/services#cross-border" },
]

const TRUST = ["ACCA qualified", "10+ years’ experience", "UK & UAE expertise", "HMRC compliant"]

const WHY = [
  { icon: "users", title: "Dedicated Advisor", desc: "One point of contact, start to finish — never passed between departments." },
  { icon: "calendar", title: "Proactive Tax Planning", desc: "Legal opportunities identified before deadlines, not after." },
  { icon: "tax", title: "Transparent Pricing", desc: "Fixed fees agreed upfront — no surprise bills at year-end." },
  { icon: "clock", title: "Fast Response", desc: "Questions and concerns answered quickly — accounting shouldn't add to your stress." },
  { icon: "globe", title: "UK & UAE Experience", desc: "Practical, hands-on experience trading across both markets." },
  { icon: "checksquare", title: "Business-First Advice", desc: "Guidance framed around your goals, not just compliance boxes to tick." },
]

const INDUSTRIES = [
  ["Construction & property", "CIS, SPVs and project-level cost visibility."],
  ["E-commerce & retail", "Multi-channel VAT and margin tracking."],
  ["Consultants & contractors", "IR35-aware structuring and clean books."],
  ["Healthcare", "Practice accounts and mixed income streams."],
  ["Hospitality", "Daily takings, payroll and stock-aware books."],
  ["Professional services", "Partnership structures and profitability insight."],
]

const STEPS = [
  ["1", "Book a consultation", "A free 30-minute call to understand your business."],
  ["2", "Tell us about your business", "A close look at your finances and structure."],
  ["3", "Receive a tailored plan", "A clear plan for tax, compliance and growth."],
  ["4", "Work with your dedicated advisor", "One point of contact who handles the numbers year-round."],
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


export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-[180px] pt-16 sm:pb-[240px] sm:pt-20 md:px-16 md:pb-[300px] md:pt-24">
        {/* upper-right green atmospheric glow (subtle) */}
        <div className="pointer-events-none absolute -right-36 -top-36 h-[460px] w-[460px] rounded-full [background:radial-gradient(circle,oklch(80%_0.09_145_/_0.30),transparent_70%)]" />
        {/* soft warm glow behind the copy for readability */}
        <div className="pointer-events-none absolute left-1/2 top-[24%] h-[420px] w-[820px] max-w-[92vw] -translate-x-1/2 rounded-full [background:radial-gradient(ellipse,oklch(98%_0.01_85_/_0.85),transparent_70%)]" />

        {/* London skyline watermark — anchored to bottom, faded via mask, very light */}
        <img
          src="/skyline.webp"
          alt=""
          aria-hidden="true"
          width="1600"
          height="685"
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[165%] max-w-none -translate-x-1/2 select-none opacity-[0.10] sm:left-0 sm:w-full sm:translate-x-0 sm:opacity-[0.13] md:opacity-[0.15]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.6) 66%, #000 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.6) 66%, #000 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <h1 className="mx-auto max-w-[880px] text-[34px] font-black leading-[1.08] tracking-[-0.03em] text-balance sm:text-[42px] md:text-[54px]">
            Helping businesses stay compliant while making smarter financial decisions.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[18px] leading-[1.6] text-ink/80 md:mt-7 md:text-[20px]">
            Eclantis Capital provides accounting, tax and business advisory for UK businesses, with specialist experience
            supporting UK–UAE operations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row md:mt-9">
            <BtnPrimary to="/contact" className="w-full min-h-[54px] sm:w-auto">Book a Free Consultation</BtnPrimary>
            <Link
              to="/services"
              className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border-[1.5px] border-ink/30 bg-surface/70 px-8 text-[15px] font-bold text-ink transition hover:border-green hover:bg-surface hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust line — sits directly under the CTAs */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13.5px] font-semibold text-ink/65">
            {TRUST.map((t, i) => (
              <span key={t} className="inline-flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5"><span className="text-green"><Icon name="check" size={13} /></span>{t}</span>
                {i < TRUST.length - 1 && <span className="text-ink/25">·</span>}
              </span>
            ))}
          </div>
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
          {/* Core services — featured */}
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.slice(0, 3).map((s) => (
              <Link key={s.name} to={s.to} className="group flex flex-col rounded-2xl border border-line2 bg-cream p-8 transition hover:-translate-y-1 hover:border-green/30 hover:shadow-[0_18px_36px_-14px_oklch(20%_0.05_155_/_0.18)]">
                <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-gradient-to-br from-green to-green-soft text-cream">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="mb-2.5 text-[21px] font-extrabold tracking-[-0.01em]">{s.name}</h3>
                <p className="mb-5 flex-1 text-[15.5px] leading-[1.6] text-ink/70">{s.desc}</p>
                <span className="text-[14px] font-bold text-green transition group-hover:translate-x-0.5">Learn more →</span>
              </Link>
            ))}
          </div>
          {/* Supporting services — compact */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SERVICES.slice(3).map((s) => (
              <Link key={s.name} to={s.to} className="group flex items-center gap-3.5 rounded-xl border border-line2 bg-cream/60 px-5 py-4 transition hover:border-green/30 hover:bg-cream">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-chip text-green"><Icon name={s.icon} size={18} /></span>
                <span className="text-[15px] font-bold">{s.name}</span>
                <span className="ml-auto text-green opacity-0 transition group-hover:opacity-100">→</span>
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
        <div className="grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title}>
              <span className="text-green"><Icon name={w.icon} size={26} /></span>
              <h3 className="mb-2 mt-4 text-[17px] font-extrabold">{w.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-ink/65">{w.desc}</p>
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
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map(([name, desc]) => (
              <div key={name} className="flex items-start gap-3 border-l-2 border-green/30 pl-4">
                <div>
                  <h3 className="text-[16px] font-extrabold">{name}</h3>
                  <p className="mt-1 text-[14px] leading-[1.5] text-ink/60">{desc}</p>
                </div>
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
        <div className="relative">
          {/* thin connecting line between the numbered steps (desktop) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[26px] hidden h-px bg-green/25 lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map(([n, title, desc]) => (
              <div key={n} className="relative text-center">
                <div className="mx-auto mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-green text-[19px] font-extrabold text-cream ring-8 ring-cream">{n}</div>
                <h3 className="mb-2 text-[16px] font-extrabold">{title}</h3>
                <p className="text-[14px] leading-[1.55] text-ink/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <Eyebrow className="mb-3.5">Our Team</Eyebrow>
            <h2 className="text-3xl font-black tracking-[-0.02em] text-balance md:text-4xl">Qualified accountants and advisers behind your business</h2>
            <p className="mt-4 text-[17px] leading-6 text-ink/65">A growing team combining UK compliance expertise with hands-on UK–UAE experience.</p>
          </div>
          <TeamGrid members={TEAM} />
          <div className="mt-10 text-center">
            <Link to="/about" className="text-[14.5px] font-bold text-green hover:text-green-soft">Meet the team &amp; our story →</Link>
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
          <div className="grid gap-6 md:grid-cols-2">
            {[0, 1].map((i) => (
              <figure key={i} className="relative overflow-hidden rounded-[20px] border border-line2 bg-surface p-9 md:p-11">
                <span aria-hidden="true" className="pointer-events-none absolute right-6 top-3 font-black text-[90px] leading-none text-green/10">”</span>
                <div className="mb-5 text-[16px] tracking-[3px] text-star">★★★★★</div>
                <blockquote className="text-[21px] font-semibold leading-[1.5] tracking-[-0.01em] text-ink/85 md:text-[23px]">
                  Real client quote to be added here — a specific outcome or experience in the client’s own words.
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-6">
                  <span className="h-12 w-12 shrink-0 rounded-full bg-chip" />
                  <div>
                    <div className="text-[15px] font-extrabold">Client name</div>
                    <div className="text-[13.5px] text-ink/55">Business type · Location</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-[13px] text-ink/45">Testimonials are placeholders — replace with real client quotes before launch.</p>
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
