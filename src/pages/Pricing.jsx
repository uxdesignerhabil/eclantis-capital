import { HeroBand, CtaBand, BtnPrimary, Icon } from "../ui.jsx"

const FACTORS = [
  ["doc", "Services required", "Accounting, tax, payroll and advisory can be engaged together or separately."],
  ["trend", "Business size & activity", "Transaction volume, turnover and number of employees shape the scope of work."],
  ["globe", "Jurisdictions involved", "UK-only engagements are priced differently to UK–UAE cross-border work."],
  ["calendar", "Frequency", "Monthly, quarterly or annual support — priced around how often you need us."],
]

export default function Pricing() {
  return (
    <>
      <HeroBand
        eyebrow="Pricing"
        title="Fee-based pricing, tailored to your business"
        subtitle="We don't sell fixed packages. Every engagement is priced individually after a short, free consultation — so you only pay for what your business actually needs."
      />

      <section className="mx-auto max-w-[880px] px-6 py-24 text-center md:px-16">
        <p className="text-[18px] leading-[1.7] text-ink/75">
          Eclantis Capital offers accounting, tax and advisory services — not off-the-shelf software packages. Because
          every business's complexity, size and cross-border requirements are different, a single price list would
          either overcharge simple businesses or undercharge complex ones.
        </p>
        <p className="mt-5 text-[18px] leading-[1.7] text-ink/75">
          Instead, we agree a clear, fixed fee with you upfront — after we understand your business — so there are
          never any surprise bills.
        </p>
      </section>

      <section className="bg-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-12 text-center text-3xl font-black tracking-[-0.02em]">What shapes your quote</h2>
          <div className="grid gap-x-10 gap-y-11 sm:grid-cols-2">
            {FACTORS.map(([icon, title, desc]) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-chip text-green">
                  <Icon name={icon} size={20} />
                </span>
                <div>
                  <h3 className="mb-1.5 text-[16px] font-extrabold">{title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-ink/65">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-6 py-24 text-center md:px-16">
        <h2 className="text-3xl font-black tracking-[-0.02em] md:text-4xl">Ready for a fixed-fee quote?</h2>
        <p className="mt-4 text-[17px] leading-[1.65] text-ink/65">
          Book a free, no-obligation consultation. We'll ask about your business, then send a clear, fixed-fee proposal
          — no packages to choose between, just a price that fits.
        </p>
        <div className="mt-8 flex justify-center">
          <BtnPrimary to="/contact">Book a Free Consultation</BtnPrimary>
        </div>
      </section>

      <CtaBand title="Not sure where to start?" subtitle="" button="Book a free consultation" />
    </>
  )
}
