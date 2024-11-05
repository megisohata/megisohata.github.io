import ExperienceItem from "./experience";

interface ExperienceEntry {
  title: string;
  date: string;
  organization: string;
  orgLink: string;
  location: string;
  tasks: string[];
}

const experiences: ExperienceEntry[] = [
  {
    title: "Autopilot Software Engineer",
    date: "OCT 2023 - Present",
    organization: "Cornell University Unmanned Air Systems",
    orgLink: "https://cuair.org/",
    location: "Ithaca, NY",
    tasks: [
      "Collaboratively develop a full-stack ground control station (GCS) to operate a semi-autonomous aircraft for competition.",
      "Optimize path planning for better accuracy using Bezier calculations between waypoints to determine flight path.",
      "Make frontend design and backend functionality adjustments to make the GCS more user friendly for effective use.",
    ],
  },
  {
    title: "Python Course Consultant",
    date: "JUL 2024 - Present",
    organization: "Bowers College of Computing and Information Science",
    orgLink: "https://www.cs.cornell.edu/courses/cs1110/2024fa/",
    location: "Ithaca, NY",
    tasks: [
      "Facilitate office hours, weekly labs, and one-on-one meetings for CS 1110: Intro CS Design & Development to enhance student understanding of Python, programming concepts, software development, and program design.",
      "Contribute to staff planning meetings, grade assignments and exams, and provide meaningful feedback.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col bg-pistachio rounded-lg p-8">
      <h1 className="text-2xl">Experience</h1>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
      <h1 className="text-2xl">Technical Skills</h1>
    </div>
  );
};

export default Experience;
