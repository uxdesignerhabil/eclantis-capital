import { Link, useParams } from "react-router-dom"
import { getTeamMemberBySlug } from "../team.js"
import { TextLink } from "../ui.jsx"

export default function TeamMember() {
  const { slug } = useParams()
  const person = getTeamMemberBySlug(slug)

  if (!person) {
    return (
      <section className="mx-auto max-w-[720px] px-6 py-24 text-center md:px-16">
        <h1 className="text-3xl font-black tracking-[-0.02em]">Profile not found</h1>
        <p className="mt-4 text-[17px] text-ink/65">This team member page does not exist or is not published yet.</p>
        <Link to="/about" className="link-accent mt-8 inline-block text-[15px] font-bold">
          ← Back to About
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-greendark">
        <img
          src={person.banner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-greendark via-greendark/92 to-greendark/75" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 py-16 md:flex-row md:items-end md:px-16 md:py-20">
          <img
            src={person.photo}
            alt={person.name}
            width="160"
            height="160"
            className="h-36 w-36 shrink-0 rounded-2xl border-4 border-cream/20 object-cover object-top shadow-[0_20px_40px_oklch(0%_0_0_/_0.35)] md:h-40 md:w-40"
          />
          <div className="text-center md:pb-2 md:text-left">
            <div className="text-[13px] font-bold uppercase tracking-[0.06em] text-orange">Our team</div>
            <h1 className="mt-3 text-3xl font-black tracking-[-0.02em] text-cream md:text-[42px]">{person.title}</h1>
            <p className="mt-2 text-[17px] font-semibold text-cream/80">{person.subtitle}</p>
            <p className="mt-1 text-[15px] font-bold text-orange-soft">{person.role}</p>
            {person.contact?.linkedin && (
              <p className="mt-4">
                <TextLink href={person.contact.linkedin} external className="text-[15px]">
                  LinkedIn profile →
                </TextLink>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-16 md:px-16">
        <div>
          <h2 className="text-2xl font-black tracking-[-0.02em] text-green">Professional summary</h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-ink/80">{person.summary}</p>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-black tracking-[-0.02em] text-green">Professional experience</h2>
          <div className="mt-8 flex flex-col gap-10">
            {person.experience.map((job) => (
              <article key={job.role + job.period} className="border-l-2 border-orange/40 pl-5">
                <h3 className="text-[18px] font-extrabold">{job.role}</h3>
                <p className="mt-1 text-[14px] font-bold text-orange">{job.period}</p>
                <p className="text-[15px] font-semibold text-green-soft">{job.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-ink/75">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-black tracking-[-0.02em] text-green">Education</h2>
          <ul className="mt-6 space-y-4">
            {person.education.map((ed) => (
              <li key={ed.qualification + (ed.period ?? ed.institution)} className="rounded-xl border border-line2 bg-surface px-5 py-4">
                <div className="font-extrabold text-ink">{ed.qualification}</div>
                {ed.period && <div className="mt-0.5 text-[14px] font-bold text-orange">{ed.period}</div>}
                <div className="text-[14px] text-ink/70">{ed.institution}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-black tracking-[-0.02em] text-green">Skills</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {person.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-[13px] font-semibold text-ink/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-black tracking-[-0.02em] text-green">Achievements</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-ink/75">
            {person.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="mt-14 border-t border-line pt-8">
          <Link to="/about" className="link-accent text-[15px] font-bold">
            ← Meet the full team
          </Link>
        </p>
      </section>
    </>
  )
}
