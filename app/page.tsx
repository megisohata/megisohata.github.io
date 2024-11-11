import ExperienceItem from "./experience-item";

interface ExperienceEntry {
  title: string;
  date: string;
  organization: string;
  orgLink?: string;
  location: string;
}

const experiences: ExperienceEntry[] = [
  {
    title: "Autopilot Software Engineer",
    date: "OCT 2023 - Present",
    organization: "CUAir",
    orgLink: "https://cuair.org/",
    location: "Ithaca, NY",
  },
  {
    title: "Python Course Consultant",
    date: "JUL 2024 - Present",
    organization: "Cornell Bowers CIS",
    orgLink: "https://www.cs.cornell.edu/courses/cs1110/2024fa/",
    location: "Ithaca, NY",
  },
  {
    title: "Corporate Relations Director",
    date: "JAN 2024 - Present",
    organization: "WICC",
    orgLink: "https://wicc.cornell.edu/",
    location: "Ithaca, NY",
  },
];

export default function Home() {
  return (
    <div className="flex gap-4 h-full">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-6xl">Meg Isohata</h1>
        <div className="flex-1 flex flex-col bg-pistachio rounded-lg p-8 justify-center items-center">
          <img src="profile.png" className="w-64 h-auto my-2" />
          <div>
            <h1 className="text-2xl my-2">Hey, I'm Meg!</h1>
            <p>
              I am a sophomore at Cornell University majoring in Computer
              Science and minoring in Artificial Intelligence.
            </p>
            <p className="bg-cream w-fit py-1 px-2 my-2 rounded-md italic">
              🌿 Welcome to my corner of the internet!
            </p>
          </div>
          <a
            href="/about"
            className="py-2 px-4 my-2 border-2 border-forest rounded-sm spinContainer"
          >
            <span className="spinElement">❀</span> More About Me{" "}
            <span className="spinElement">❀</span>
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex flex-col bg-pistachio rounded-lg p-8 justify-center items-center">
          <h1 className="text-2xl">Experience</h1>
          <div className="w-full">
            {experiences.map((exp, index) => (
              <div key={index}>
                <ExperienceItem {...exp} />
                {index < experiences.length - 1 && <hr />}
              </div>
            ))}
          </div>
          <a
            href="/experience"
            className="py-2 px-4 my-2 border-2 border-forest rounded-sm spinContainer"
          >
            <span className="spinElement">✧</span> View Full Experience{" "}
            <span className="spinElement">✧</span>
          </a>
        </div>
        <div className="h-40 bg-pistachio border-2 border-forest rounded-lg"></div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="h-40 bg-pistachio border-2 border-forest rounded-lg"></div>
        <div className="flex-1 flex flex-col bg-pistachio rounded-lg p-8 justify-center items-center">
          <h1 className="text-2xl">Portfolio</h1>
          <div className="xl:flex gap-4 my-4 w-full">
            <div className="xl:w-40 xl:h-32">
              <img
                src="etch-a-sketch.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h1>Etch-A-Sketch</h1>
                <p>OCT 2024</p>
              </div>
              <div className="flex gap-2 items-center">
                <a
                  href="https://megisohata.github.io/etch-a-sketch/"
                  target="_blank"
                  className="bg-cream w-fit py-0.5 px-1 rounded-md text-sm italic"
                >
                  🔗 Live Demo
                </a>
                <a
                  href="https://github.com/megisohata/etch-a-sketch"
                  target="_blank"
                  className="flex justify-center align-center w-6 h-6 rounded-full bg-forest"
                >
                  <img src="github.svg" />
                </a>
              </div>
              <p>Etch-a-Sketch created with HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <a
            href="/portfolio"
            className="py-2 px-4 my-2 border-2 border-forest rounded-sm spinContainer"
          >
            <span className="spinElement">✿</span> See All Projects{" "}
            <span className="spinElement">✿</span>
          </a>
        </div>
      </div>
    </div>
  );
}
