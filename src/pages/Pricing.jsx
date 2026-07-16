import { Link } from "react-router-dom"
import { HeroBand, CtaBand } from "../ui.jsx"

const TIERS = [
  {
    name: "Starter", audience: "For solo founders and new small businesses", popular: false,
    features: ["Monthly bookkeeping", "Annual UK tax return", "HMRC filing", "Email support"],
  },
  {
    name: "Growth", audience: "For growing UK & UAE cross-border businesses", popular: true,
    features: ["Everything in Starter", "UK & UAE tax returns", "Quarterly financial advisory review", "Payroll processing", "Priority phone & email support"],
  },
  {
    name: "Scale", audience: "For established businesses with audit & UAE needs", popular: false,
    features: ["Everything in Growth", "Statutory audit support", "UAE / cross-border structuring", "Dedicated advisor & monthly reviews", "HMRC enquiry representation"],
  },
]

export default function Pricing() {
  return (
    <>
      <HeroBand
        eyebrow="Pricing"
        title="Packages that scale with your business"
        subtitle="Every business's cross-border complexity is different, so quotes are tailored after a short consultation — no surprise fees."
      />

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-[10px] p-9 ${t.popular ? "border-2 border-green bg-cream" : "border border-line bg-surface"}`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-9 rounded-full bg-gold px-3.5 py-1.5 text-[12px] font-bold text-ink">Most popular</div>
              )}
              <h3 className="mb-2 text-[20px] font-extrabold">{t.name}</h3>
              <p className="mb-6 text-[14px] text-ink/65">{t.audience}</p>
              <div className="mb-6 text-[15px] font-semibold text-green">Custom quote</div>
              <ul className="mb-8 flex-1 list-disc pl-5 text-[14px] leading-8 text-ink/85">
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <Link
                to="/contact"
                className={`rounded px-6 py-3.5 text-center text-[14px] font-semibold transition ${
                  t.popular ? "bg-green text-cream hover:bg-green-soft" : "border border-green text-green hover:bg-green hover:text-cream"
                }`}
              >
                Get a quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure which package fits?" subtitle="" button="Book a free consultation" />
    </>
  )
}
