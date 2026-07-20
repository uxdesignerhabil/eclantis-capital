import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

/* ---------- Icons (stroke line-style, matching the handoff) ---------- */
const P = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }

export function LogoMark({ size = 32, bg = "currentColor", stroke = "var(--color-cream)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <rect width="34" height="34" rx="9" fill={bg} />
      <path d="M9 23l5-11 4 8 3-5 3 4" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Icon({ name, size = 24 }) {
  const paths = {
    check: <polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />,
    doc: <g {...P}><path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></g>,
    tax: <g {...P}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></g>,
    trend: <g {...P}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></g>,
    shield: <g {...P}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /></g>,
    users: <g {...P}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6M23 11h-6" /></g>,
    globe: <g {...P}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></g>,
    calendar: <g {...P}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></g>,
    clock: <g {...P}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></g>,
    checksquare: <g {...P}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></g>,
    arrowRight: <g {...P}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></g>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24">{paths[name]}</svg>
}

/* ---------- Scroll to top on route change ---------- */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

/* ---------- Header ---------- */
const NAV = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 md:px-16">
        <Link to="/" className="flex items-center gap-2.5 text-[21px] font-extrabold tracking-[-0.02em] text-green">
          <LogoMark /> Eclantis Capital
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-[15px] transition ${isActive ? "font-semibold text-green" : "font-medium text-ink hover:text-green"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full bg-green px-6 py-3 text-[14px] font-semibold text-cream shadow-[0_4px_14px_oklch(30%_0.07_155_/_0.25)] transition hover:bg-green-soft">
            Book a Free Consultation
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green">
            {open ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-cream px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded-lg px-3 py-2.5 text-[15px] font-medium ${isActive ? "bg-chip text-green" : "text-ink"}`}>
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-green px-5 py-3 text-center text-[15px] font-semibold text-cream">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

/* ---------- Reusable pieces ---------- */
export function Eyebrow({ children, className = "" }) {
  return <div className={`text-[13px] font-bold uppercase tracking-[0.06em] text-green-soft ${className}`}>{children}</div>
}

export function BtnPrimary({ to, children, className = "" }) {
  return (
    <Link to={to} className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-green px-8 py-4 text-[15px] font-bold text-cream shadow-[0_8px_24px_oklch(30%_0.07_155_/_0.3)] transition hover:bg-green-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:brightness-95 ${className}`}>
      {children}
    </Link>
  )
}

/** PwC-style orange inline link (external or mailto/tel). */
export function TextLink({ href, children, external = false, className = "" }) {
  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href }
  return (
    <a {...props} className={`link-accent font-semibold ${className}`}>
      {children}
    </a>
  )
}

export function BtnGold({ to, children }) {
  return (
    <Link to={to} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-extrabold text-ink shadow-[0_8px_24px_oklch(72%_0.11_80_/_0.35)] transition hover:brightness-95">
      {children}
    </Link>
  )
}

/* Dark-green page hero band used on Services / About / Pricing / Contact */
export function HeroBand({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-greendark to-greendark2 px-6 py-20 md:px-16">
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-gold/[0.12]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="text-[13px] font-bold uppercase tracking-[0.06em] text-gold">{eyebrow}</div>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.02em] text-cream md:text-[44px]">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-[18px] leading-7 text-cream/75">{subtitle}</p>}
      </div>
    </section>
  )
}

/* Final CTA band */
export function CtaBand({ title, subtitle, button = "Book a Free Consultation" }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-greendark to-greendark2 px-6 py-24 text-center md:px-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/[0.15]" />
      <div className="relative mx-auto max-w-[640px]">
        <h2 className="text-3xl font-black leading-tight tracking-[-0.02em] text-cream md:text-[38px]">{title}</h2>
        {subtitle && <p className="mt-5 text-[17px] text-cream/70">{subtitle}</p>}
        <div className="mt-9"><BtnGold to="/contact">{button}</BtnGold></div>
      </div>
    </section>
  )
}

/* ---------- Team grid (shared by Home + About) ---------- */
export function TeamGrid({ members = [] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {members.map((m, i) => {
        const inner = (
          <>
            {m.photo ? (
              <img
                src={m.photo}
                alt={m.name}
                width="120"
                height="120"
                className="mx-auto h-28 w-28 rounded-full object-cover object-top shadow-[0_10px_24px_-10px_oklch(20%_0.05_155_/_0.3)]"
              />
            ) : (
              <div className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full text-[22px] font-black ${m.placeholder ? "bg-chip/50 text-green/40" : "bg-chip text-green"}`}>
                {m.placeholder ? "+" : Initials(m.name)}
              </div>
            )}
            <h3 className={`mt-4 text-[18px] font-extrabold ${m.placeholder ? "text-ink/45" : ""}`}>{m.name}</h3>
            <p className={`text-[14px] font-semibold ${m.placeholder ? "text-ink/35" : "text-green-soft"}`}>{m.role}</p>
            <p className={`mx-auto mt-2 max-w-[260px] text-[14px] leading-[1.55] ${m.placeholder ? "text-ink/35" : "text-ink/65"}`}>{m.bio}</p>
            {m.credentials && !m.placeholder && (
              <div className="mt-3 inline-block rounded-full border border-line px-3 py-1 text-[12px] font-bold text-green">{m.credentials}</div>
            )}
            {!m.placeholder && m.slug && (
              <div className="link-accent mt-4 text-[14px] font-bold">View profile →</div>
            )}
          </>
        )
        const base = "w-full max-w-[340px] rounded-2xl border p-6 text-center transition sm:w-[320px]"
        if (!m.placeholder && m.slug) {
          return (
            <Link key={m.name + i} to={`/team/${m.slug}`} className={`${base} block border-line2 bg-surface hover:-translate-y-0.5 hover:border-green/30 hover:shadow-[0_14px_28px_-12px_oklch(20%_0.05_155_/_0.18)]`}>
              {inner}
            </Link>
          )
        }
        return (
          <div key={m.name + i} className={`${base} ${m.placeholder ? "border-dashed border-line bg-transparent" : "border-line2 bg-surface"}`}>
            {inner}
          </div>
        )
      })}
    </div>
  )
}

function Initials(name) {
  const p = name.trim().split(/\s+/)
  return ((p[0]?.[0] || "") + (p[1]?.[0] || "")).toUpperCase()
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-9 pt-16 text-cream/80 md:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-x-12 gap-y-10 md:grid-cols-[2.2fr_1fr_1fr_1.3fr]">
        <div className="max-w-[320px]">
          <div className="mb-4 flex items-center gap-2.5 text-[21px] font-extrabold text-cream">
            <LogoMark size={28} bg="var(--color-cream)" stroke="var(--color-ink)" /> Eclantis Capital
          </div>
          <p className="text-[15px] leading-[1.65] text-cream/70">
            Accounting, tax and business advisory for businesses across the UK, with UK–UAE cross-border expertise.
          </p>
          <div className="mt-5 space-y-1 text-[13.5px] leading-6 text-cream/55">
            <p>Eclantis Capital Ltd · Company No. 00000000</p>
            <p>Registered office: 1 Example Street, London, EC1A 1AA</p>
          </div>
        </div>
        <FooterCol title="Services" links={[["Accounting", "/services#accounting"], ["Tax", "/services#tax"], ["Advisory", "/services#advisory"], ["Payroll", "/services#payroll"]]} />
        <FooterCol title="Company" links={[["About", "/about"], ["Pricing", "/pricing"], ["Contact", "/contact"]]} />
        <div>
          <div className="mb-4 text-[15px] font-bold text-cream">Contact</div>
          <div className="flex flex-col gap-2.5 text-[15px] text-cream/75">
            <a href="mailto:hello@eclantiscapital.co.uk" className="transition hover:text-cream">hello@eclantiscapital.co.uk</a>
            <a href="tel:+442000000000" className="transition hover:text-cream">+44 20 0000 0000</a>
            <span className="text-cream/55">London, UK · Dubai, UAE</span>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-[1200px] border-t border-cream/15 pt-6 text-[12.5px] leading-6 text-cream/45">
        Eclantis Capital Ltd is a firm of accountants and business advisers. Where applicable, statutory and regulated
        work is carried out under the relevant professional body’s rules. This website is for general information and
        does not constitute financial, tax or legal advice.
      </p>

      <div className="mx-auto mt-6 flex max-w-[1200px] flex-col items-start justify-between gap-3 text-[13px] text-cream/55 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Eclantis Capital Ltd. Registered in England &amp; Wales.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/privacy" className="transition hover:text-cream">Privacy Policy</Link>
          <Link to="/terms" className="transition hover:text-cream">Terms</Link>
          <Link to="/cookies" className="transition hover:text-cream">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="mb-4 text-[15px] font-bold text-cream">{title}</div>
      <div className="flex flex-col gap-2.5 text-[15px]">
        {links.map(([label, to]) => (
          <Link key={label} to={to} className="text-cream/75 transition hover:text-cream">{label}</Link>
        ))}
      </div>
    </div>
  )
}
