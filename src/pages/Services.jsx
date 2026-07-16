import { HeroBand, CtaBand } from "../ui.jsx"

const SERVICES = [
  {
    id: "tax", letter: "T", title: "Tax Planning & Savings",
    desc: "Proactive UK and UAE tax strategy designed around your business structure, so you keep more of what you earn while staying fully compliant.",
    items: ["Annual UK & UAE tax planning review", "Corporate structure & entity advice", "R&D and available tax relief identification", "Dividend, salary & extraction planning", "Self-assessment & corporation tax preparation"],
  },
  {
    id: "accounting", letter: "B", title: "Bookkeeping",
    desc: "Clean, current books maintained monthly so you always have an accurate picture of the business — and no scramble at year-end.",
    items: ["Monthly reconciliation & reporting", "Cloud accounting software setup & management", "Payroll processing (UK & UAE)", "VAT filing & returns", "Multi-currency transaction handling"],
  },
  {
    id: "advisory", letter: "A", title: "Financial Advisory",
    desc: "Strategic guidance beyond compliance — helping you plan cash flow, model growth and make informed financial decisions.",
    items: ["Cash flow forecasting", "Budgeting & scenario planning", "Funding & investment readiness", "Management accounts & board reporting", "Exit & succession planning"],
  },
  {
    id: "compliance", letter: "H", title: "HMRC Compliance",
    desc: "Direct correspondence and representation with HMRC, so enquiries and filings never fall on your desk.",
    items: ["HMRC registered agent representation", "Corporation tax & VAT e-filing", "Enquiry & investigation support", "Compliance calendar management", "Penalty appeals & resolution"],
  },
  {
    id: "payroll", letter: "P", title: "Payroll",
    desc: "Accurate, on-time payroll and pension processing for your team, every pay period.",
    items: ["Monthly & weekly payroll runs", "Auto-enrolment pension administration", "Payslips & year-end reporting", "Starter/leaver processing", "HMRC RTI submissions"],
  },
  {
    id: "audits", letter: "S", title: "Statutory & Financial Audits",
    desc: "Independent audits carried out to UK and international standards, giving stakeholders confidence in your numbers.",
    items: ["Statutory audit under UK GAAP / IFRS", "Internal controls review", "Grant & investor-required audits", "Audit-readiness preparation", "Findings report & remediation plan"],
  },
  {
    id: "cross-border", letter: "C", title: "Cross-Border Advisory",
    desc: "Structuring and compliance guidance for businesses operating across the UK and UAE — drawn from direct hands-on experience.",
    items: ["Double taxation treaty guidance", "Overseas entity & branch structuring", "UAE free zone & mainland compliance", "Transfer pricing basics for SMEs", "Currency & repatriation planning"],
  },
]

export default function Services() {
  return (
    <>
      <HeroBand
        eyebrow="Services"
        title="Full-service accounting for cross-border small businesses"
        subtitle="From daily bookkeeping to statutory audits — one advisor for everything on your finance function."
      />

      <section className="mx-auto flex max-w-[1200px] flex-col gap-[72px] px-6 py-20 md:px-16">
        {SERVICES.map((s) => (
          <div key={s.id} id={s.id} className="flex scroll-mt-24 flex-wrap items-start gap-14">
            <div className="min-w-[240px] flex-1 basis-[280px]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green text-[18px] font-bold text-cream">{s.letter}</div>
              <h2 className="mb-3 text-[26px] font-extrabold tracking-[-0.01em]">{s.title}</h2>
              <p className="text-[16px] leading-6 text-ink/70">{s.desc}</p>
            </div>
            <div className="min-w-[280px] flex-1 basis-[400px] rounded-lg border border-line bg-surface p-7">
              <ul className="m-0 list-disc pl-5 text-[15px] leading-8 text-ink/85">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <CtaBand title="Not sure which service you need?" subtitle="" button="Book a free consultation" />
    </>
  )
}
