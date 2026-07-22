import { HeroBand, CtaBand, TeamGrid, Icon } from "../ui.jsx"
import { TEAM } from "../team.js"

const APPROACH = [
  ["clock", "Proactive, not reactive", "Tax planning and financial advice happen throughout the year, not just at deadline time."],
  ["globe", "One advisor, every jurisdiction", "UK and UAE matters are handled by the same team — no gaps between separate advisers."],
  ["doc", "Plain-English communication", "Financial and tax matters explained clearly, so you always know what's happening and why."],
]

const CREDS = ["ACCA Qualified", "PMP Certified", "MSc Accounting & Finance", "UAE VAT & Treasury Experience"]

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
        title="About Eclantis Capital"
        subtitle="A boutique accounting and advisory firm for UK businesses, with specialist UK–UAE experience."
      />

      {/* Company story */}
      <section className="mx-auto max-w-[820px] px-6 py-24 text-center md:px-16">
        <p className="text-[19px] leading-[1.7] text-ink/80">
          Eclantis Capital helps UK businesses stay compliant and make smarter financial decisions — combining
          day-to-day accounting, tax and payroll with proactive advisory, all through one dedicated point of contact.
        </p>
        <p className="mt-5 text-[17px] leading-[1.7] text-ink/65">
          Founded on direct, cross-border experience across the UK and UAE, we understand the practical realities of
          running and growing a business in both markets. As the firm grows, that same standard of care — clear,
          proactive and personally accountable — runs through every client relationship.
        </p>
      </section>

      {/* Our approach */}
      <section className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-10 text-center text-3xl font-black tracking-[-0.02em]">Our approach</h2>
          <div className="grid gap-x-10 gap-y-11 md:grid-cols-3">
            {APPROACH.map(([icon, title, desc]) => (
              <div key={title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green to-green-soft text-cream">
                  <Icon name={icon} size={20} />
                </div>
                <h3 className="mb-2 text-[17px] font-extrabold">{title}</h3>
                <p className="text-[15px] leading-6 text-ink/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-16">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <div className="text-[13px] font-bold uppercase tracking-[0.06em] text-green-soft">Our Team</div>
          <h2 className="mt-3.5 text-3xl font-black tracking-[-0.02em] md:text-4xl">Meet the team</h2>
          <p className="mt-4 text-[17px] leading-6 text-ink/65">The qualified accountants and advisers behind Eclantis Capital.</p>
        </div>
        <TeamGrid members={TEAM} />
      </section>

      {/* Professional certifications */}
      <section className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto mb-10 max-w-[720px] text-center">
            <h2 className="text-3xl font-black tracking-[-0.02em]">Professional certifications</h2>
            <p className="mt-4 text-[16px] leading-6 text-ink/65">
              Our director, Daulat Anosh Khokhar, is ACCA-qualified and PMP-certified, with further professional
              certifications across analytics and data.
            </p>
          </div>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {CREDS.map((c) => (
              <div key={c} className="rounded-full border border-line bg-cream px-[22px] py-2.5 text-[14px] font-bold text-green shadow-[0_2px_8px_oklch(20%_0.05_155_/_0.05)]">{c}</div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CERTS.map((c) => (
              <div key={c.name} className="flex items-start gap-4 rounded-xl border border-line2 bg-cream p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-chip text-[15px] font-extrabold text-green">{c.issuer[0]}</span>
                <div className="min-w-0">
                  <h3 className="text-[15.5px] font-extrabold leading-snug">{c.name}</h3>
                  <p className="mt-0.5 text-[14px] font-semibold text-green-soft">{c.issuer}</p>
                  {c.meta && <p className="mt-1 text-[13px] text-ink/55">{c.meta}</p>}
                  {c.cred && <p className="mt-1 text-[12px] font-medium tracking-[0.02em] text-ink/45">Credential ID · {c.cred}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's talk about your business" subtitle="" button="Book a free consultation" />
    </>
  )
}
