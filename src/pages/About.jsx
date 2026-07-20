import { HeroBand, CtaBand } from "../ui.jsx"

const TIMELINE = [
  ["Finance and Operations Manager", "Confidential · Feb 2022 – Present · Greater London, UK", "Advise and work with company management to meet financial goals; oversee accounting personnel and departments for payroll, pensions and VAT returns."],
  ["Manager Finance & VAT", "Home and Soul Furniture Trading LLC · Jun 2016 – Dec 2021 · Dubai, UAE", "Cut unnecessary overheads and reduced overall company expense; reviewed competitor performance and reported on key cost issues to management."],
  ["ERP Consultant & Auditor", "Dartech Information Technology · Full-time", "Led process reviews and application configuration discussions with clients; assisted programmers with accounting problems and accurate COA setup."],
  ["Accountant", "Forman Christian College (A Chartered University) · Jun 2014 – Nov 2015 · Lahore, Pakistan", "Approved monthly payroll for employees; approved financial statements and advised on amendments."],
]

const APPROACH = [
  ["Proactive, not reactive", "Tax planning and financial advice happen throughout the year, not just at deadline time."],
  ["One advisor, every jurisdiction", "UK and UAE matters are handled by the same person — no gaps between separate advisors."],
  ["Plain-English communication", "Financial and tax matters explained clearly, so you always know what's happening and why."],
]

const CREDS = ["🎓 ACCA Qualified", "📋 PMP Certified", "🎓 MSc Accounting & Finance", "🌍 UAE VAT & Treasury Experience"]

const CERTS = [
  { name: "Project Management Professional (PMP)®", issuer: "Project Management Institute", meta: "Issued Sep 2023 · Expires Sep 2026" },
  { name: "Data Analytics for Business Professionals", issuer: "LinkedIn", meta: "Issued Oct 2021" },
  { name: "Data Analysis with Python", issuer: "IBM", cred: "QBSFEWGMVRW2" },
  { name: "People Analytics", issuer: "The Wharton School", cred: "ZTSDL594PGH3" },
  { name: "Customer Analytics", issuer: "The Wharton School", cred: "D4RQST2LP4ER" },
  { name: "Operations Analytics", issuer: "The Wharton School", cred: "BHCEY8TCKYX5" },
  { name: "Accounting Analytics", issuer: "The Wharton School", cred: "CUVXFV6TU6QJ" },
  { name: "Databases and SQL for Data Science with Python (with Honors)", issuer: "IBM", cred: "6VQ4JPD7JV2W" },
  { name: "Data Science Specialization", issuer: "IBM", meta: "Issued Sep 2021", cred: "RQJAGJXK5ENP" },
  { name: "Data Analytics Specialization", issuer: "Google", meta: "Issued Sep 2021", cred: "HHPR2NFHXG6Y" },
]

export default function About() {
  return (
    <>
      <HeroBand
        eyebrow="About"
        title="Daulat Anosh Khokhar"
        subtitle="Founder, Eclantis Capital · ACCA Qualified · London, UK"
      />

      {/* Bio */}
      <section className="mx-auto flex max-w-[1100px] flex-wrap items-start gap-16 px-6 py-24 md:px-16">
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[20px] border border-green/25" aria-hidden="true" />
            <img
              src="/advisor.webp"
              alt="Daulat Anosh Khokhar, Founder of Eclantis Capital"
              width="280"
              height="350"
              className="relative h-[350px] w-[280px] rounded-[20px] object-cover object-top shadow-[0_28px_54px_-18px_oklch(20%_0.05_155_/_0.32)]"
            />
          </div>
        </div>
        <div className="min-w-[300px] flex-1 basis-[480px]">
          <p className="mb-[18px] text-[17px] leading-[1.75] text-ink/75">
            An experienced finance manager with a demonstrated history of working in accounting — skilled in auditing,
            financial reporting, management accounting, variance analysis, and financial analysis. Currently Finance and
            Operations Manager for a UK company, overseeing accounting, payroll, pensions and VAT returns.
          </p>
          <p className="mb-[18px] text-[17px] leading-[1.75] text-ink/75">
            Previously managed finance and VAT for a Dubai-based trading company, cutting unnecessary overheads and
            reducing overall company expense, and worked as an accountant and ERP consultant/auditor in Pakistan and the
            UK. ACCA qualified, with a Master's degree in Accounting and Finance from the University of Northampton and
            PMP certification.
          </p>
          <p className="text-[17px] leading-[1.75] text-ink/75">
            Eclantis Capital gives small businesses trading across the UK and UAE a single trusted advisor for accounting,
            tax and financial advisory — built on that direct, cross-border experience.
          </p>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-16">
        <h2 className="mb-8 text-[26px] font-black tracking-[-0.01em]">Experience</h2>
        <div className="ml-2 flex flex-col border-l-2 border-line">
          {TIMELINE.map(([role, meta, desc], i) => (
            <div key={role} className={`relative pl-7 ${i < TIMELINE.length - 1 ? "pb-8" : "pb-1"}`}>
              <div className="absolute -left-[7px] top-0.5 h-3 w-3 rounded-full bg-green" />
              <div className="text-[16px] font-extrabold">{role}</div>
              <div className="my-0.5 mb-2 text-[14px] text-ink/55">{meta}</div>
              <p className="text-[15px] leading-6 text-ink/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-10 text-center text-3xl font-black tracking-[-0.02em]">Our approach</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {APPROACH.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-line2 bg-cream p-[30px]">
                <div className="mb-[18px] h-11 w-11 rounded-xl bg-gradient-to-br from-green to-green-soft" />
                <h3 className="mb-2.5 text-[17px] font-extrabold">{title}</h3>
                <p className="text-[15px] leading-6 text-ink/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-[1100px] px-6 pb-16 pt-24 md:px-16">
        <h2 className="mb-8 text-center text-3xl font-black tracking-[-0.02em]">Credentials</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {CREDS.map((c) => (
            <div key={c} className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-[22px] py-3 text-[14px] font-bold text-green shadow-[0_2px_8px_oklch(20%_0.05_155_/_0.05)]">{c}</div>
          ))}
        </div>
      </section>

      {/* Licenses & certifications */}
      <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-16">
        <h2 className="mb-8 text-center text-3xl font-black tracking-[-0.02em]">Licenses &amp; certifications</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {CERTS.map((c) => (
            <div key={c.name} className="flex items-start gap-4 rounded-xl border border-line2 bg-surface p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-chip text-[15px] font-extrabold text-green">
                {c.issuer[0]}
              </span>
              <div className="min-w-0">
                <h3 className="text-[15.5px] font-extrabold leading-snug">{c.name}</h3>
                <p className="mt-0.5 text-[14px] font-semibold text-green-soft">{c.issuer}</p>
                {c.meta && <p className="mt-1 text-[13px] text-ink/55">{c.meta}</p>}
                {c.cred && <p className="mt-1 text-[12px] font-medium tracking-[0.02em] text-ink/45">Credential ID · {c.cred}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Let's talk about your business" subtitle="" button="Book a free consultation" />
    </>
  )
}
