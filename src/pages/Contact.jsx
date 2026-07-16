import { useState } from "react"
import { HeroBand } from "../ui.jsx"

function Input({ label, type = "text", name, required }) {
  return (
    <div className="flex-1 basis-[200px]">
      <label className="mb-1.5 block text-[14px] font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-[5px] border border-line bg-surface px-3.5 py-3 text-[15px] outline-none transition focus:border-green"
      />
    </div>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      <HeroBand
        eyebrow="Contact"
        title="Book your free consultation"
        subtitle="Tell us a little about your business and we'll get back to you within one business day."
      />

      <section className="mx-auto flex max-w-[1100px] flex-wrap gap-14 px-6 py-20 md:px-16">
        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          className="min-w-[300px] flex-1 basis-[480px]"
        >
          {submitted ? (
            <div className="rounded-lg border border-line bg-surface p-8">
              <h3 className="mb-2.5 text-[20px] font-extrabold text-green">Thanks — request received</h3>
              <p className="text-[15px] leading-6 text-ink/70">We'll be in touch within one business day to schedule your free consultation.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-4">
                <Input label="Name" name="name" required />
                <Input label="Email" type="email" name="email" required />
              </div>
              <div>
                <label className="mb-1.5 block text-[14px] font-semibold">Business name</label>
                <input name="business" className="w-full rounded-[5px] border border-line bg-surface px-3.5 py-3 text-[15px] outline-none transition focus:border-green" />
              </div>
              <div>
                <label className="mb-1.5 block text-[14px] font-semibold">What do you need help with?</label>
                <textarea rows={5} name="message" className="w-full resize-y rounded-[5px] border border-line bg-surface px-3.5 py-3 text-[15px] outline-none transition focus:border-green" />
              </div>
              <button type="submit" className="self-start rounded bg-green px-7 py-3.5 text-[15px] font-bold text-cream transition hover:bg-green-soft">
                Send request
              </button>
            </div>
          )}
        </form>

        {/* Info cards */}
        <div className="flex min-w-[260px] flex-1 basis-[320px] flex-col gap-6">
          <InfoCard title="Get in touch directly">
            <div className="flex flex-col gap-3 text-[15px] text-ink/80">
              <div>hello@eclantiscapital.co.uk</div>
              <div>UK: +44 20 0000 0000</div>
            </div>
          </InfoCard>
          <InfoCard title="Offices">
            <div className="flex flex-col gap-3.5 text-[15px] text-ink/80">
              <div><strong className="text-ink">United Kingdom</strong><br />London, UK</div>
              <div><strong className="text-ink">UAE</strong><br />Remote / client-site by arrangement</div>
            </div>
          </InfoCard>
          <InfoCard title="Business hours">
            <p className="text-[15px] leading-[1.7] text-ink/80">Mon–Fri, 9:00–18:00 GMT<br />Coverage into UAE time zones by appointment</p>
          </InfoCard>
        </div>
      </section>
    </>
  )
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-7">
      <h3 className="mb-4 text-[16px] font-bold">{title}</h3>
      {children}
    </div>
  )
}
