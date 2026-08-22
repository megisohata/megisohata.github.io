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
    date: "May - August 2026",
    org: "Google",
    role: "Software Engineering Intern",
    desc: "Working on iOS Google Maps!",
  },
  {
    date: "June - August 2026",
    org: "Capital One",
    role: "Software Engineering Intern",
    desc: "Built REST APIs and a Next.js frontend that eliminated 7,200+ hours of annual manual work for 400+ associates. Designed PostgreSQL schema with role-based approval logic.",
  },
  {
    date: "Aug 2024 - May 2026",
    org: "Cornell Bowers",
    role: "Teaching Assistant",
    desc: "",
  },
  {
    date: "Sep 2023 - May 2025",
    org: "LinkedIn x Cornell Bowers",
    role: "ASCEND Intern",
    desc: "",
  },
];

export const involvements: InvolvementEntry[] = [
  {
    org: "Women in Computing at Cornell",
    role: "Technical Director / VP Corporate Relations",
    date: "Jan 2024 - May 2026",
    type: "club",
  },
  {
    org: "Cornell University Unmanned Air Systems",
    role: "Autopilot Software Engineer",
    date: "Oct 2023 - May 2026",
    type: "club",
  },
  {
    org: "Bowers CIS · Cornell",
    role: "Teaching Assistant, CS 1110",
    date: "Aug 2024 - May 2026",
    type: "part-time",
    desc: "Lead weekly labs for 40+ students in a 600-person intro CS course.",
  },
  {
    org: "Rapid Prototyping Lab · Cornell",
    role: "Lab Technician",
    date: "Ascend Program",
    type: "part-time",
    desc: "Supported students using fabrication equipment as part of Cornell's Ascend paid fellowship program.",
  },
];

export const projects: ProjectEntry[] = [];
