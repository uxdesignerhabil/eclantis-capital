import { HeroBand } from "../ui.jsx"

export default function Legal({ title }) {
  return (
    <>
      <HeroBand eyebrow="Legal" title={title} subtitle="" />
      <section className="mx-auto max-w-[820px] px-6 py-24 md:px-16">
        <div className="rounded-2xl border border-line2 bg-surface p-8 md:p-10">
          <p className="text-[16px] leading-[1.7] text-ink/75">
            This {title.toLowerCase()} is being prepared. Please check back soon, or contact us at{" "}
            <a href="mailto:hello@eclantiscapital.co.uk" className="font-bold text-green hover:text-green-soft">hello@eclantiscapital.co.uk</a>{" "}
            for any questions in the meantime.
          </p>
        </div>
      </section>
    </>
  )
}
