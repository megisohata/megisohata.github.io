export type ExperienceEntry = {
  date: string;
  org: string;
  role: string;
  desc: string;
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
];

export const projects: ProjectEntry[] = [
];
