import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calculator, BookOpen, FileText, Landmark, Receipt, Users, ClipboardCheck,
  FileSpreadsheet, LineChart, PiggyBank, Briefcase, Building2, ShieldCheck,
  Globe, ArrowRight, Check, Phone, Mail, MapPin, Menu, X, Clock, TrendingUp,
} from "lucide-react"

const NAV = [
  ["Services", "#services"],
  ["Why us", "#why"],
  ["Approach", "#approach"],
  ["About", "#about"],
  ["Contact", "#contact"],
]

const SERVICES = [
  { icon: Calculator, name: "Accounting", desc: "Accurate, compliant year-round accounting that keeps your numbers clean and decision-ready." },
  { icon: BookOpen, name: "Bookkeeping", desc: "Digital, real-time bookkeeping so your records are always up to date and audit-ready." },
  { icon: FileText, name: "Tax Returns", desc: "Preparation and filing of personal and business tax returns — accurate and on time." },
  { icon: Landmark, name: "Corporation Tax", desc: "Corporation tax computations, planning and filings that keep liabilities lawful and lean." },
  { icon: Receipt, name: "VAT", desc: "VAT registration, returns and MTD-ready submissions handled end to end." },
  { icon: Users, name: "Payroll", desc: "RTI-compliant payroll, payslips, pensions and auto-enrolment run like clockwork." },
  { icon: ClipboardCheck, name: "Self Assessment", desc: "Stress-free Self Assessment for directors, landlords and the self-employed." },
  { icon: FileSpreadsheet, name: "Financial Statements", desc: "Statutory accounts prepared to standard and filed with Companies House." },
  { icon: LineChart, name: "Management Accounts", desc: "Monthly or quarterly management accounts that turn data into clear direction." },
  { icon: PiggyBank, name: "Cash Flow Planning", desc: "Forecasting and cash-flow modelling so you always know what is coming next." },
  { icon: Briefcase, name: "Business Advisory", desc: "Strategic advice on growth, structure, funding and profitability." },
  { icon: Building2, name: "Company Formation", desc: "Fast, correct company incorporation and set-up for founders and groups." },
  { icon: ShieldCheck, name: "HMRC Compliance", desc: "Deadlines met, submissions accurate — full compliance, zero surprises." },
  { icon: Globe, name: "UK & UAE Advisory", desc: "Cross-border structuring and advisory across UK and UAE jurisdictions." },
]

const WHY = [
  { icon: ShieldCheck, title: "Compliance you can trust", desc: "HMRC deadlines, statutory filings and MTD handled precisely — so you are never exposed." },
  { icon: Globe, title: "UK & UAE expertise", desc: "One partner across two jurisdictions, ideal for founders operating between the UK and the Gulf." },
  { icon: TrendingUp, title: "Advice that grows profit", desc: "We go beyond compliance — proactive tax planning and advisory that protects and builds value." },
  { icon: Clock, title: "Responsive & proactive", desc: "Clear communication, quick turnaround and a named accountant who actually knows your business." },
]

const STEPS = [
  { n: "01", title: "Discovery call", desc: "A short conversation to understand your business, goals and current setup — no jargon." },
  { n: "02", title: "Tailored proposal", desc: "A fixed-fee plan matched to exactly the services you need, with no hidden costs." },
  { n: "03", title: "Seamless onboarding", desc: "We handle authorisations, software and handover from your previous accountant." },
  { n: "04", title: "Ongoing partnership", desc: "Proactive compliance, reporting and advisory — reviewed with you throughout the year." },
]

const STATS = [
  ["2", "Jurisdictions — UK & UAE"],
  ["14+", "Specialist services"],
  ["MTD", "Making Tax Digital ready"],
  ["Fixed", "Transparent monthly fees"],
]

const TESTIMONIALS = [
  { quote: "Eclantis took the stress out of our year-end and found savings we did not know existed. Genuinely proactive advisers.", name: "Managing Director", role: "E-commerce group, London" },
  { quote: "Having one team cover our UK company and UAE entity has been a game-changer. Responsive, precise and easy to deal with.", name: "Founder", role: "Consultancy, Dubai & Manchester" },
  { quote: "Payroll and VAT just run in the background now. We finally have management accounts we can actually make decisions from.", name: "Operations Lead", role: "Hospitality SME" },
]

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${light ? "bg-white/10" : "bg-navy"} `}>
        <span className="font-serif text-lg font-600 text-gold">E</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[19px] font-600 tracking-tight ${light ? "text-white" : "text-ink"}`}>Eclantis Capital</span>
        <span className={`text-[10px] font-500 uppercase tracking-[3px] ${light ? "text-white/50" : "text-slate"}`}>Ltd</span>
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="text-[14px] font-500 text-slate transition hover:text-navy">{label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[14px] font-600 text-white transition hover:bg-navy-700">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-[15px] font-500 text-navy hover:bg-mist">{label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-[15px] font-600 text-white">Book a consultation</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background:radial-gradient(60%_60%_at_80%_-10%,rgba(201,162,75,0.18),transparent_60%),radial-gradient(50%_50%_at_0%_100%,rgba(15,122,90,0.18),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-500 tracking-wide text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Chartered-standard accountancy · UK &amp; UAE
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-4xl font-500 leading-[1.05] tracking-tight md:text-6xl">
              Accounting that keeps you <span className="text-gold">compliant</span> and helps you <span className="italic text-gold">grow</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/70">
              Eclantis Capital Ltd is your end-to-end finance partner — from bookkeeping, tax and payroll to management
              accounts and cross-border advisory across the United Kingdom and the UAE.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[15px] font-600 text-navy transition hover:brightness-95">
                Book a free consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-600 text-white transition hover:bg-white/10">
                Explore services
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/55">
              {["HMRC compliant", "Making Tax Digital ready", "Fixed monthly fees"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald" /> {t}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm">
            <p className="text-[12px] font-600 uppercase tracking-[2px] text-white/50">This year at a glance</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {STATS.map(([big, small]) => (
                <div key={small} className="rounded-xl bg-white/[0.05] p-4">
                  <p className="font-serif text-3xl font-600 text-gold">{big}</p>
                  <p className="mt-1 text-[12.5px] leading-5 text-white/65">{small}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-5 flex items-center justify-between rounded-xl bg-gold/10 px-4 py-3 text-[14px] font-600 text-gold transition hover:bg-gold/15">
              Get a fixed-fee quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-[13px] font-600 uppercase tracking-[3px] text-gold">What we do</p>
        <h2 className="mt-3 font-serif text-3xl font-500 leading-tight tracking-tight text-ink md:text-5xl">
          Complete finance support, under one roof
        </h2>
        <p className="mt-4 text-[16px] leading-7 text-slate">
          Everything a growing UK or UAE business needs — compliance handled, and genuine advice on top.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.name} delay={(i % 3) * 0.05}>
            <div className="group h-full rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_50px_-24px_rgba(11,37,69,0.35)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-navy transition group-hover:bg-navy group-hover:text-gold">
                <s.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-[17px] font-600 text-ink">{s.name}</h3>
              <p className="mt-2 text-[14px] leading-6 text-slate">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Why() {
  return (
    <section id="why" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-600 uppercase tracking-[3px] text-gold">Why Eclantis</p>
          <h2 className="mt-3 font-serif text-3xl font-500 leading-tight tracking-tight text-ink md:text-5xl">
            A finance partner, not just a filing service
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                  <w.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[17px] font-600 text-ink">{w.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-6 text-slate">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Regions() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <div className="overflow-hidden rounded-3xl bg-navy text-white">
        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
          <Reveal>
            <p className="text-[13px] font-600 uppercase tracking-[3px] text-gold">Two jurisdictions, one partner</p>
            <h2 className="mt-3 font-serif text-3xl font-500 leading-tight tracking-tight md:text-4xl">
              Seamless advisory across the UK &amp; UAE
            </h2>
            <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/70">
              Operating between Britain and the Gulf brings opportunity — and complexity. We help founders and groups
              structure entities, stay compliant in both jurisdictions, and move money and profit efficiently.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["United Kingdom", "Companies House filings, HMRC, VAT, PAYE, corporation & personal tax."],
                ["United Arab Emirates", "Company formation, corporate tax, VAT and cross-border structuring."],
              ].map(([place, detail]) => (
                <div key={place} className="rounded-2xl border border-white/12 bg-white/[0.05] p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold"><MapPin className="h-5 w-5" /></span>
                  <h3 className="mt-3 text-[16px] font-600">{place}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-6 text-white/65">{detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-600 uppercase tracking-[3px] text-gold">How it works</p>
          <h2 className="mt-3 font-serif text-3xl font-500 leading-tight tracking-tight text-ink md:text-5xl">
            Getting started is simple
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="font-serif text-3xl font-600 text-gold">{s.n}</span>
                <h3 className="mt-3 text-[16px] font-600 text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-slate">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-[13px] font-600 uppercase tracking-[3px] text-gold">Client voices</p>
        <h2 className="mt-3 font-serif text-3xl font-500 leading-tight tracking-tight text-ink md:text-5xl">
          Trusted by founders and finance teams
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} aria-hidden className="text-[15px]">★</span>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="text-[14px] font-600 text-ink">{t.name}</p>
                <p className="text-[13px] text-slate">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1fr] md:px-8 md:py-28">
        <Reveal>
          <p className="text-[13px] font-600 uppercase tracking-[3px] text-gold">Get in touch</p>
          <h2 className="mt-3 font-serif text-3xl font-500 leading-tight tracking-tight md:text-5xl">
            Let’s talk about your numbers
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-7 text-white/70">
            Book a free, no-obligation consultation. We’ll review where you are, spot quick wins, and outline a
            fixed-fee plan that fits.
          </p>
          <div className="mt-8 space-y-4">
            {[
              [Phone, "Call us", "+44 (0) 20 0000 0000"],
              [Mail, "Email", "hello@eclantiscapital.com"],
              [MapPin, "Offices", "London, United Kingdom · Dubai, UAE"],
            ].map(([Icon, label, value]) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold"><Icon className="h-5 w-5" /></span>
                <div>
                  <p className="text-[12px] uppercase tracking-[2px] text-white/45">{label}</p>
                  <p className="text-[15px] font-500 text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 md:p-7"
          >
            {sent ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald/20 text-emerald"><Check className="h-7 w-7" /></span>
                <h3 className="mt-4 font-serif text-2xl font-600">Thank you</h3>
                <p className="mt-2 max-w-xs text-[14.5px] text-white/70">Your enquiry has been noted. A member of the Eclantis team will be in touch shortly.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Jane Doe" required />
                  <Field label="Company" name="company" placeholder="Your business" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                  <Field label="Phone" name="phone" placeholder="Optional" />
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-500 text-white/70">How can we help?</span>
                  <textarea name="message" rows={4} placeholder="Tell us about your business and what you need…"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition focus:border-gold/60" />
                </label>
                <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[15px] font-600 text-navy transition hover:brightness-95">
                  Request consultation <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-[12px] text-white/40">We’ll never share your details. Response within one business day.</p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-500 text-white/70">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition focus:border-gold/60"
      />
    </label>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-4 text-[14px] leading-6 text-white/55">
              Accountancy, tax and business advisory for growing companies across the United Kingdom and the UAE.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Services" items={["Accounting", "Bookkeeping", "Tax & VAT", "Payroll", "Advisory"]} />
            <FooterCol title="Company" items={["Why us", "Approach", "Contact"]} />
            <FooterCol title="Regions" items={["United Kingdom", "United Arab Emirates"]} />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Eclantis Capital Ltd. All rights reserved.</p>
          <p>Registered in England &amp; Wales.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="text-[12px] font-600 uppercase tracking-[2px] text-white/40">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i}><a href="#services" className="text-[14px] text-white/65 transition hover:text-gold">{i}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Why />
        <Regions />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
