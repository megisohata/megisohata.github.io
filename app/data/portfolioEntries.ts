export type ExperienceEntry = {
  date: string;
  org: string;
  role: string;
  desc: string;
};

export type InvolvementEntry = {
  date: string;
  org: string;
  role: string;
  type: "club" | "part-time";
  desc?: string;
};

export type ProjectEntry = {
  no: string;
  title: string;
  logged: string;
  tags: string[];
  desc: string;
  full: string;
  stack: string;
  links: {
    live?: string;
    code?: string | null;
  };
};

export const experiences: ExperienceEntry[] = [
  {
    date: "September - December 2026",
    org: "Aven",
    role: "Incoming Software Engineering Intern",
    desc: "Incoming fall intern at a fintech startup (Series E, $2.2B valuation) building home-equity-backed credit products",
  },
  {
    date: "May - August 2026",
    org: "Google",
    role: "Software Engineering Intern",
    desc: "Built new personalization features for iOS Google Maps (273M+ MAU).",
  },
  {
    date: "June - August 2026",
    org: "Capital One",
    role: "Software Engineering Intern",
    desc: "Automated change management for an executive reporting platform, eliminating 7,200+ hours of manual work annually for 400+ associates.",
  },
  {
    date: "Sep 2023 - May 2025",
    org: "LinkedIn x Cornell Bowers",
    role: "ASCEND Intern",
    desc: "1 of 25 interns selected for a two-year program, researching and prototyping an AI-powered email assistant presented to LinkedIn leadership at their NYC HQ.",
  },
];

export const involvements: InvolvementEntry[] = [
  {
    org: "Women in Computing at Cornell",
    role: "VP Corporate Relations / Technical Director / Advisor",
    date: "Jan 2024 - Present",
    type: "club",
    desc: "Executive board member driving corporate sponsorships, technical programs, and events for 3,000+ engineering students."
  },
  {
    org: "Cornell University Unmanned Air Systems",
    role: "Autopilot Software Engineer",
    date: "Oct 2023 - May 2026",
    type: "club",
    desc: "Built ground control and flight-log tooling for a semi-autonomous, student-built aircraft, cutting post-flight analysis time 95%."
  },
  {
    org: "Cornell Bowers",
    role: "Teaching Assistant, CS 1110",
    date: "Aug 2024 - May 2026",
    type: "part-time",
    desc: "Taught Python, recursion, and object-oriented design to 600+ students semesterly through weekly labs and hands-on mentorship.",
  },
  {
    org: "Cornell Rapid Prototyping Lab",
    role: "Lab Technician",
    date: "October 2023 - May 2026",
    type: "part-time",
    desc: "Operated and maintained fabrication equipment, advising students and faculty on manufacturability for prototyping projects.",
  },
];

export const projects: ProjectEntry[] = [];
