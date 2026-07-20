// Team roster — add a new person by appending an object here.
// Fields: name, role, photo (path in /public or null), bio, credentials (short line),
// placeholder (true = clearly-marked empty slot to fill later).

export const TEAM = [
  {
    name: "Daulat Anosh Khokhar",
    role: "Director",
    photo: "/advisor.webp",
    credentials: "ACCA · PMP",
    bio: "ACCA-qualified accountant with hands-on experience across UK accounting, tax and finance, and VAT and treasury in the UAE.",
  },
  {
    name: "Add team member",
    role: "Role to be confirmed",
    photo: null,
    bio: "Profile coming soon.",
    placeholder: true,
  },
  {
    name: "Add team member",
    role: "Role to be confirmed",
    photo: null,
    bio: "Profile coming soon.",
    placeholder: true,
  },
]

export function initials(name) {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase()
}
