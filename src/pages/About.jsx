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
            <div className="absolute -inset-3.5 rounded-full [background:linear-gradient(135deg,oklch(70%_0.09_145_/_0.4),oklch(85%_0.06_85_/_0.5))]" />
            <div className="relative mx-auto flex h-[230px] w-[230px] items-center justify-center overflow-hidden rounded-full bg-surface shadow-[0_20px_40px_-14px_oklch(20%_0.05_155_/_0.3)]">
              <svg viewBox="0 0 230 230" width="230" height="230" fill="none" stroke="var(--color-green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="115" cy="90" r="38" />
                <path d="M50 195c0-40 30-65 65-65s65 25 65 65" />
                <path d="M96 78c8 6 30 6 38 0" stroke="var(--color-green-soft)" />
              </svg>
            </div>
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
      <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-16">
        <h2 className="mb-8 text-center text-3xl font-black tracking-[-0.02em]">Credentials</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {CREDS.map((c) => (
            <div key={c} className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-[22px] py-3 text-[14px] font-bold text-green shadow-[0_2px_8px_oklch(20%_0.05_155_/_0.05)]">{c}</div>
          ))}
        </div>
      </section>

      <CtaBand title="Let's talk about your business" subtitle="" button="Book a free consultation" />
    </>
  )
}
