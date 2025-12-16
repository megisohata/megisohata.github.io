import { ReactNode } from "react";

export const PROFESSIONAL = 0;
export const EDUCATION = 1;

export interface ExperienceEntry {
  type: number;
  title: string;
  organization: string;
  link?: string;
  logo: string;
  date: string;
  location: string;
  tags: string[];
  tasks?: string[];
  cardContent?: ReactNode;
}

export const experiences: ExperienceEntry[] = [
  {
    type: EDUCATION,
    title: "B.S. in Computer Science",
    organization: "Cornell University",
    link: "https://bowers.cornell.edu/",
    logo: "/experience/logos/cornell.png",
    date: "Junior",
    location: "Ithaca, NY",
    tags: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Functional Programming",
      "Discrete Mathematics",
      "Computer System Organization",
      "Systems Programming",
      "Artificial Intelligence",
      "Machine Learning",
      "Databases",
    ],
    tasks: [],
    cardContent: (
      <div>
        <p>
          At Cornell, I am a Jacobs Scholar, which is awarded to 20 incoming
          freshman every year based on leadership potential in the engineering
          field. My favorite parts of Cornell (other than the amazing people
          I've met) are the sunsets, the slope, and the flowers in the spring.
        </p>
        <br />
        <div className="flex">
          <img
            className="mx-auto border-2 rounded-md"
            style={{ height: "240px", borderColor: "#dce2cf" }}
            src="/experience/photos/cornell-sunset.JPG"
          />
          <img
            className="mx-auto border-2 rounded-md"
            style={{ height: "240px", borderColor: "#dce2cf" }}
            src="/experience/photos/cornell-campus.jpg"
          />
          <img
            className="mx-auto border-2 rounded-md"
            style={{ height: "240px", borderColor: "#dce2cf" }}
            src="/experience/photos/cornell-spring.jpg"
          />
        </div>
      </div>
    ),
  },
  {
    type: PROFESSIONAL,
    title: "Software Engineering Intern",
    organization: "Capital One",
    link: "https://www.capitalone.com/",
    logo: "/experience/logos/capital-one.jpeg",
    date: "Jun - Aug 2025",
    location: "McLean, VA",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Snowflake",
      "Jira API",
      "REST API Design",
      "Database Design",
      "SDLC",
      "Git",
      "Documentation",
      "Agile Methodologies",
    ],
    tasks: [],
    cardContent: (
      <div>
        <p>
          At Capital One, I worked in Associate Experience Technology,
          implementing an automated change management process to the board
          metric reporting tool. Below is a photo of my team and I!
        </p>
        <br />
        <img
          className="mx-auto border-2 rounded-md"
          style={{ height: "260px", borderColor: "#dce2cf" }}
          src="/experience/photos/capital-one-team-photo.jpeg"
        />
      </div>
    ),
  },
  {
    type: PROFESSIONAL,
    title: "Autopilot Software Engineer",
    organization: "Cornell University Unmanned Air Systems",
    date: "Oct 2023 - Present",
    link: "https://cuair.org/",
    logo: "/experience/logos/cuair.png",
    location: "Ithaca, NY",
    tags: [
      "Svelte",
      "Node.js",
      "Docker",
      "REST API Design",
      "Ollama",
      "Git",
      "Technical Communication",
    ],
    tasks: [
      "Collaboratively develop a full-stack ground control station (GCS) to operate a semi-autonomous aircraft for competition.",
      "Optimize path planning for better accuracy using Bezier calculations between waypoints to determine flight path.",
      "Make frontend design and backend functionality adjustments to make the GCS more user friendly for effective use.",
    ],
    cardContent: (
      <div>
        <p>
          I am on the Autopilot subteam, which is responsible for ensuring that
          our aircraft can perform necessary maneuvers to fulfill mission
          requirements. Take a look at our Technical Design and Flight Readiness
          Review video from 2024!
        </p>
        <br />
        <iframe
          className="mx-auto border-2 rounded-md"
          style={{ borderColor: "#dce2cf" }}
          src="https://www.youtube.com/embed/NM370N2wsnY"
          allowFullScreen
          width={450}
          height={260}
        />
      </div>
    ),
  },
  {
    type: PROFESSIONAL,
    title: "Teaching Assistant",
    organization: "Cornell Bowers",
    date: "Jul 2024 - Present",
    link: "https://www.cs.cornell.edu/courses/cs1110/",
    logo: "/experience/logos/bowers.jpeg",
    location: "Ithaca, NY",
    tags: ["Python", "Technical Communication"],
    tasks: [
      "Facilitate office hours, weekly labs, and one-on-one meetings for CS 1110: Intro CS Design & Development to enhance student understanding of Python, programming concepts, software development, and program design.",
      "Contribute to staff planning meetings, grade assignments and exams, and provide meaningful feedback.",
    ],
  },
  {
    type: EDUCATION,
    title: "Study Abroad",
    organization: "Yonsei University",
    date: "Summer 2024",
    link: "https://www.yonsei.ac.kr/en_sc/index.do",
    logo: "/experience/logos/yonsei.png",
    location: "Seoul, KR",
    tags: [],
    tasks: [],
  },
  {
    type: PROFESSIONAL,
    title: "Vice President of Corporate Relations",
    organization: "Women in Computing at Cornell",
    date: "Jan 2024 - Present",
    link: "https://wicc.cornell.edu/",
    logo: "/experience/logos/wicc.png",
    location: "Ithaca, NY",
    tags: [],
    tasks: [
      "Establish and maintain positive relationships with companies such as Capital One, Hudson River Trading, and Sandia National Laboratories by networking with recruiters, bringing in approximately $20,000 in sponsorships.",
      "Organize corporate events such as coffee chats, information sessions, and workshops for 400+ active members.",
    ],
    cardContent: (
      <div>
        <p>
          I have been on WICC's executive board since freshman year, where I
          have served as Corporate Relations Director and Vice President of
          Corporate Relations. Connecting gender minorities in computing with
          corporate opportunities has been one of the most rewarding parts of my
          undergraduate career, and I am so grateful to be part of this amazing
          community of women!
        </p>
        <br />
        <img
          className="mx-auto border-2 rounded-md"
          style={{ height: "260px", borderColor: "#dce2cf" }}
          src="/experience/photos/wicc.JPG"
        />
      </div>
    ),
  },
  {
    type: PROFESSIONAL,
    title: "Laboratory Technician",
    organization: "Cornell Rapid Prototyping Laboratory",
    date: "Oct 2023 - Present",
    link: "https://rpl.engineering.cornell.edu/",
    logo: "/experience/logos/rpl.png",
    location: "Ithaca, NY",
    tags: [],
    tasks: [
      "Operate and maintain over $500,000 of industrial manufacturing equipment and rapid prototyping tools.",
      "Advise professors, research groups, and project teams on manufacturing with 3D printers and laser cutters.",
      "Streamline lab processes and resource allocation, fulfilling 1,000+ orders every semester.",
    ],
    cardContent: (
      <div>
        <p>
          At the RPL, I work with a team of lab technicians to process thousands
          of orders a semester, as well as advising students, research groups,
          and engineers on rapid prototyping techniques to suit their design
          needs. Here's a timelapse of a 3D print of Cornell's clock tower - a
          party favor we hand out to tour groups!
        </p>
        <br />
        <iframe
          className="mx-auto border-2 rounded-md"
          style={{ borderColor: "#dce2cf" }}
          src="https://www.youtube.com/embed/dhmggqPg-tA"
          allowFullScreen
          width={450}
          height={260}
        />
      </div>
    ),
  },
  {
    type: PROFESSIONAL,
    title: "ASCEND Intern",
    organization: "Cornell Bowers | LinkedIn",
    date: "Sep 2023 - May 2025",
    link: "",
    logo: "/experience/logos/bowers.jpeg",
    location: "Ithaca, NY",
    tags: [],
    tasks: [
      "Selected to participate in a highly selective two-year program to support students in academia and industry.",
      "Collaborating with peers to develop an entrepreneurial project, which will be pitched to LinkedIn, with guidance from industry mentors.",
    ],
  },
];
