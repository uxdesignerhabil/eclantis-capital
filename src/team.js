// Team roster — add a new person by appending an object here.
// Fields: name, role, photo (path in /public or null), bio, credentials (short line),
// slug (optional — /team/:slug detail page, not linked from cards), linkedin (public link on cards),
// placeholder (true = empty slot).

export const TEAM = [
  {
    name: "Daulat Anosh Khokhar",
    role: "Director",
    photo: "/advisor.webp",
    credentials: "ACCA · PMP",
    bio: "ACCA-qualified accountant with hands-on experience across UK accounting, tax and finance, and VAT and treasury in the UAE.",
    slug: "daulat-anosh-khokhar",
    linkedin: "https://www.linkedin.com/in/daulat-anosh-khokhar-97945446",
  },
  {
    name: "Yashua Nadeem Khokhar",
    role: "Portfolio Manager",
    photo: "/Khokhar.jpeg",
    credentials: "ACCA Affiliate · BSc (Hons) Applied Accounting",
    bio: "ACCA Affiliate with strong experience in UK financial reporting, management accounting, and tax compliance for multinational financial intermediary groups.",
    slug: "yashua-nadeem-khokhar",
    linkedin: "https://www.linkedin.com/in/yashua-nadeem-khokhar-857b85266",
  },
]

export const TEAM_PROFILES = {
  "daulat-anosh-khokhar": {
    banner: "/Long.png",
    title: "Daulat Anosh Khokhar",
    subtitle: "Director · ACCA Qualified · PMP Certified",
    contact: {
      email: "hello@eclantiscapital.co.uk",
      linkedin: "https://www.linkedin.com/in/daulat-anosh-khokhar-97945446",
      linkedinLabel: "LinkedIn profile",
    },
    summary:
      "Experienced finance leader skilled in auditing, financial reporting, management accounting, variance analysis and financial analysis. ACCA qualified with a Master's in Accounting and Finance and PMP certification, with hands-on UK and UAE experience across accounting, payroll, pensions, VAT and treasury. Eclantis Capital gives UK businesses — including those with UK–UAE operations — a dedicated advisor for accounting, tax and financial advisory.",
    experience: [
      {
        role: "Finance and Operations Manager",
        period: "Feb 2022 – Present",
        company: "Confidential · Greater London, UK",
        points: [
          "Advise company management to meet financial goals and interpret financial results with recommended improvements.",
          "Oversee accounting personnel and departments for payroll, pensions and VAT returns.",
        ],
      },
      {
        role: "Manager Finance & VAT",
        period: "Jun 2016 – Dec 2021",
        company: "Home and Soul Furniture Trading LLC · Dubai, UAE",
        points: [
          "Reduced unnecessary overheads and overall company expense.",
          "Reviewed competitor performance and reported on key cost issues to management.",
        ],
      },
      {
        role: "ERP Consultant & Auditor",
        period: "Full-time",
        company: "Dartech Information Technology",
        points: [
          "Led process reviews and application configuration discussions with clients.",
          "Assisted programmers with accounting problems and accurate chart of accounts setup.",
        ],
      },
      {
        role: "Accountant",
        period: "Jun 2014 – Nov 2015",
        company: "Forman Christian College (A Chartered University) · Lahore, Pakistan",
        points: [
          "Approved monthly payroll for employees.",
          "Approved financial statements and advised on amendments.",
        ],
      },
    ],
    education: [
      {
        qualification: "MSc Accounting & Finance",
        institution: "University of Northampton",
      },
      {
        qualification: "ACCA Qualified",
        institution: "Association of Certified Chartered Accountants",
      },
      {
        qualification: "Project Management Professional (PMP)®",
        institution: "Project Management Institute",
      },
    ],
    skills: [
      "Financial reporting",
      "Management accounting",
      "UK & UAE VAT",
      "Payroll & pensions",
      "HMRC compliance",
      "Cross-border advisory",
      "Variance analysis",
      "ERP & systems",
      "Audit support",
      "Cash flow planning",
    ],
    achievements: [
      "ACCA qualified finance professional with PMP certification",
      "Direct UK and UAE finance leadership experience",
      "Professional certifications across analytics and data (LinkedIn Learning, IBM, Wharton)",
    ],
  },
  "yashua-nadeem-khokhar": {
    banner: "/Long.png",
    title: "Yashua Nadeem Khokhar",
    subtitle: "ACCA Affiliate, BSc (Hons) Applied Accounting",
    contact: {
      phone: "+92 333 748 3825",
      phoneHref: "tel:+923337483825",
      email: "yashuanadeem16@gmail.com",
      address: "PD 501/A Nazimabad Pindora, Rawalpindi",
      linkedin: "https://www.linkedin.com/in/yashua-nadeem-khokhar-857b85266",
      linkedinLabel: "LinkedIn profile",
    },
    summary:
      "ACCA Affiliate with strong experience in financial reporting and management accounting. Currently Portfolio Manager at Vision Consulting, overseeing financial operations, budgeting, and tax compliance for a multinational financial intermediary group. Proficient in UK tax regulations and tools like Xero, QuickBooks, Sage, and CCH. Holds a BSc (Hons) in Applied Accounting from Oxford Brookes University, with expertise in forecasting, analysis, leadership, and delivering high-quality financial solutions.",
    experience: [
      {
        role: "Portfolio Manager",
        period: "September 2023 – Present",
        company: "Vision Consulting Accountants Limited, Pakistan",
        points: [
          "Prepare and review financial statements in accordance with UK FRS, ensuring accurate and timely filings.",
          "Manage end-to-end UK tax compliance, including corporation tax, VAT returns, self-assessments, and partnership filings.",
          "Support and coordinate responses for HMRC tax investigations, ensuring full compliance and timely resolution.",
          "Oversee budgeting, forecasting, and preparation of cash flow statements to support strategic decision-making.",
          "Prepare and file FCA regulatory returns for a multinational financial intermediary group.",
          "Produce consolidated monthly management reports using Fathom, delivering group-wide financial insights.",
          "Serve as the primary liaison for the financial intermediary group, ensuring clear communication and relationship management across stakeholders.",
          "Led onboarding and integration of financial reporting processes for new property and financial intermediary clients, improving monthly reporting efficiency.",
        ],
      },
      {
        role: "Trainee Accountant",
        period: "March 2023 – September 2023",
        company: "Axis Accountants Ltd",
        points: [
          "Built a foundation in accounting and finance through practical experience in a dynamic environment.",
          "Conducted bank statement analysis and supported preparation of annual financial statements.",
          "Assisted in preparation and submission of UK VAT returns, ensuring regulatory timelines and accuracy.",
          "Gained exposure to foreign exchange transactions and cross-border financial data.",
          "Took on responsibilities beyond trainee level, demonstrating a fast learning curve and professional commitment.",
        ],
      },
    ],
    education: [
      {
        qualification: "ACCA Affiliate",
        period: "December 2024",
        institution: "Association of Certified Chartered Accountants",
      },
      {
        qualification: "Bachelor of Science in Applied Accounting",
        period: "May 2024",
        institution: "Oxford Brookes University (OBU), England",
      },
      {
        qualification: "Intermediate",
        period: "2021",
        institution: "Islamabad Model Postgraduate College H-8/2",
      },
      {
        qualification: "Matriculation",
        period: "2019",
        institution: "Saint Mary's Cambridge School, Murree Road, Rawalpindi",
      },
    ],
    skills: [
      "Financial analysis",
      "Financial modelling",
      "Financial statements preparation",
      "Management accounting",
      "International Financial Standards (IFRS)",
      "Financial reporting",
      "Budgeting and forecasting",
      "UK taxes reporting",
      "Power BI",
      "Advanced Excel",
      "Xero",
      "QuickBooks",
      "Sage accounts production",
      "CCH",
      "PowerPoint",
      "Microsoft Word",
      "Fathom",
    ],
    achievements: [
      "ACCA Affiliation within three years",
      "Passed all ACCA exams on first attempt",
      "Completed ACCA while working full time for more than one and a half years",
      "Global distinction in Financial Accounting exam",
    ],
  },
}

export function initials(name) {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase()
}

export function getTeamMemberBySlug(slug) {
  const member = TEAM.find((m) => m.slug === slug && !m.placeholder)
  const profile = TEAM_PROFILES[slug]
  if (!member || !profile) return null
  const contact = {
    ...profile.contact,
    linkedin: profile.contact?.linkedin ?? member.linkedin,
  }
  return { ...member, ...profile, contact }
}
