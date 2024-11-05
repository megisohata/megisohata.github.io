import ExperienceItem from "../experience-item";

interface ExperienceEntry {
  title: string;
  date: string;
  organization: string;
  orgLink?: string;
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
  {
    title: "Corporate Relations Director",
    date: "JAN 2024 - Present",
    organization: "Women in Computing at Cornell",
    orgLink: "https://wicc.cornell.edu/",
    location: "Ithaca, NY",
    tasks: [
      "Establish and maintain positive relationships with companies such as Capital One, Hudson River Trading, and Sandia National Laboratories by networking with recruiters, bringing in approximately $20,000 in sponsorships.",
      "Organize corporate events such as coffee chats, information sessions, and workshops for 400+ active members.",
    ],
  },
  {
    title: "Laboratory Technician",
    date: "OCT 2023 - Present",
    organization: "Cornell Rapid Prototyping Laboratory",
    orgLink: "https://rpl.engineering.cornell.edu/",
    location: "Ithaca, NY",
    tasks: [
      "Operate and maintain over $500,000 of industrial manufacturing equipment and rapid prototyping tools.",
      "Advise professors, research groups, and project teams on manufacturing with 3D printers and laser cutters.",
      "Streamline lab processes and resource allocation, fulfilling 1,000+ orders every semester.",
    ],
  },
  {
    title: "ASCEND Intern",
    date: "SEP 2023 - Present",
    organization: "Bowers College of Computing and Information Science",
    location: "Ithaca, NY",
    tasks: [
      "Selected to participate in a highly selective two-year program to support students in academia and industry.",
      "Collaborating with peers to develop an entrepreneurial project, which will be pitched to LinkedIn, with guidance from industry mentors.",
    ],
  },
  {
    title: "STEM Tutor",
    date: "SEP 2022 - AUG 2023",
    organization: "Edmonds College",
    orgLink:
      "https://www.edmonds.edu/programs-and-degrees/science-technology-engineering-math/study-room.html?utm_source=redir",
    location: "Lynnwood, WA",
    tasks: [
      "Tutored pre-transfer and undergraduate students in advanced mathematics, physics, and chemistry.",
      "Helped students improve study habits via organizational skills, note-taking methods, and time management.",
      "Adapted tutoring techniques to accommodate students with various backgrounds and abilities.",
      "Received positive feedback from students and faculty for effective communication and peer motivation.",
    ],
  },
  {
    title: "President",
    date: "SEP 2021 - JUN 2023",
    organization: "2522 Royal Robotics | FIRST Robotics Competition Team",
    orgLink: "https://www.thebluealliance.com/team/2522",
    location: "Lynnwood, WA",
    tasks: [
      "Led 25 students in designing robots that accomplish game tasks to compete in regional and international competitions.",
      "Designed mechanisms utilizing industrial tools such as Solidworks, CNC routers, and 3D printers.",
      "Oversaw the prototyping, CAD design, manufacturing, assembly, and testing of the intake mechanism.",
      "Supervised robot testing, communicating areas of improvement with mechanical and software subteams.",
      "Collaborated with school district to make robotics accessible to deaf students by hiring ASL interpreters and learning basic ASL.",
      "Worked closely with the treasurer to strategize allocation of a $100,000 annual budget.",
    ],
  },
  {
    title: "Team Captain",
    date: "SEP 2018 - JUN 2023",
    organization: "3805 Atomic Robotics | FIRST Tech Challenge Team",
    orgLink: "https://atomic.ehrobotics.org/index.html",
    location: "Edmonds, WA",
    tasks: [
      "Led 18 students in designing competitive robots that accomplish game tasks, becoming regional champions and second overall in Washington State during the latest season.",
      "Won 10 awards across three competition seasons for innovative mechanisms, industrial design elements, and overall team impact.",
      "Utilized Java to write programs for human-controlled robot operation and to automate robot functions with input from color, proximity, and distance sensors.",
      "Conducted research on distance sensors, collecting data on range, accuracy, and performance under different conditions.",
      "Communicated robot capabilities, engineering design process, and technical specifications to judges at competition.",
      "Organized and hosted outreach events, spreading STEM to about 10,000 people, raising over $5,000 for local charities, and collaborating with over 300 teams from 25 countries to raise awareness for environmental issues.",
    ],
  },
  {
    title: "AVID Tutor",
    date: "NOV 2021 - JUN 2022",
    organization: "Edmonds School District",
    orgLink: "https://explore.avid.org/what-avid-is/",
    location: "Lynnwood, WA",
    tasks: [
      "Served as an AVID tutor for middle school students, supporting their academic journey and college readiness.",
      "Facilitated collaborative learning, encouraging students to work together and tackle challenging subjects.",
      "Acted as a role model, inspiring students to believe in their potential and pursue higher education.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-pistachio p-8 rounded-lg w-full">
      <div className="w-2/3">
        <h1 className="text-2xl">Education</h1>
        <div className="flex flex-col my-2 w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-base">
              Cornell University | College of Engineering
            </h1>
            <p className="text-base">May 2027</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base">
              Bachelor of Science, Computer Science | Minor, Artificial
              Intelligence
            </p>
            <p className="text-base italic">Ithaca, NY</p>
          </div>
          <div className="pl-4">
            <p className="text-base">
              <span className="italic">Relevant Coursework: </span>Data
              Structures and Functional Programming, Object-Oriented Programming
              and Data Structures, Mathematical Foundations of Computing,
              Engineering Probability and Statistics, Probability Models and
              Inference, Engineering Applications of Operations Research, Linear
              Algebra, Multivariable Calculus
            </p>
          </div>
        </div>
        <div className="flex flex-col my-2 w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-base">
              Yonsei University | International Summer School
            </h1>
            <p className="text-base">JUN 2024 - AUG 2024</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base">Study Abroad</p>
            <p className="text-base italic">Seoul, KR</p>
          </div>
          <div className="pl-4">
            <p className="text-base">
              Summer 2024 semester abroad, studying Korean language, culture,
              and history and engaging in immersive cultural experiences to
              enhance language skills and deepen cultural understanding.
            </p>
          </div>
        </div>
        <hr />
        <h1 className="text-2xl">Technical Skills</h1>
        <div className="flex gap-2">
          <h1 className="italic">Programming Languages: </h1>
          <p>Java, Python, JavaScript, OCaml</p>
        </div>
        <div className="flex gap-2">
          <h1 className="italic">Technologies & Frameworks: </h1>
          <p>HTML, CSS, Svelte, React, Next, Tailwind CSS, Docker</p>
        </div>
        <div className="flex gap-2">
          <h1 className="italic">Tools: </h1>{" "}
          <p>Git, GitHub, Visual Studio Code</p>
        </div>
        <div className="flex gap-2">
          <h1 className="italic">Other: </h1>
          <p>SolidWorks, Onshape</p>
        </div>

        <hr />
        <h1 className="text-2xl">Experience</h1>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
        <hr />
        <h1 className="text-2xl">Awards</h1>
      </div>
    </div>
  );
};

export default Experience;
