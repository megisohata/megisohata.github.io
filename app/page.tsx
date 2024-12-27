import ExperienceItem from "./templates/experience-item";
import { experiences } from "./data/experience-data";
import ProjectItem from "./templates/home-portfolio-item";
import { projects } from "./data/portfolio-data";

export const specificExperiences = experiences.filter((exp) =>
  [
    "Autopilot Software Engineer",
    "Python Course Consultant",
    "Vice President of Corporate Relations",
  ].includes(exp.title)
);

export const specificProjects = projects.filter((pro) =>
  ["Etch-a-Sketch", "Rock Paper Scissors"].includes(pro.title)
);

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-pistachio rounded-lg px-8 py-8 flex flex-col md:flex-row justify-center items-center gap-8">
        <img
          src="profile.jpg"
          className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-forest"
        />
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Hey, I'm Meg!</h1>
            <p>
              I am a sophomore at Cornell University majoring in Computer
              Science and minoring in Artificial Intelligence.
            </p>
            <div className="bg-cream w-fit px-2 py-2 rounded-md flex gap-1 items-center">
              <img src="fern.png" className="w-4 h-4" />
              <p className="italic">Welcome to my corner of the internet!</p>
            </div>
          </div>
          <a
            href="/about"
            className="w-fit px-2 py-2 rounded-md border-2 border-forest spinContainer"
          >
            <span className="inline-block spinElement">✰</span> Read more about
            me. <span className="inline-block spinElement">✰</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-pistachio flex-1 rounded-lg px-8 py-8 flex flex-col gap-2 items-center">
          <h1 className="text-2xl">Experience</h1>
          <div className="my-8 w-full sm:w-3/4 lg:w-full">
            {specificExperiences.map((exp, index) => (
              <div key={index}>
                <ExperienceItem {...exp} />
                {index < specificExperiences.length - 1 && (
                  <hr className="bg-forest w-3/4 h-px mx-auto my-4 border-none" />
                )}
              </div>
            ))}
          </div>
          <a
            href="/experience"
            className="w-fit px-2 py-2 rounded-md border-2 border-forest spinContainer"
          >
            <span className="inline-block spinElement">✰</span> View full
            experience. <span className="inline-block spinElement">✰</span>
          </a>
        </div>
        <div className="bg-pistachio flex-1 rounded-lg px-8 py-8 flex flex-col gap-2 items-center">
          <h1 className="text-2xl">Portfolio</h1>
          <div className="my-8 w-full sm:w-3/4 lg:w-full">
            {specificProjects.map((pro, index) => (
              <div key={index}>
                <ProjectItem {...pro} />
                {index < specificProjects.length - 1 && (
                  <hr className="bg-forest w-3/4 h-px mx-auto my-4 border-none" />
                )}
              </div>
            ))}
          </div>
          <a
            href="/portfolio"
            className="w-fit px-2 py-2 rounded-md border-2 border-forest spinContainer"
          >
            <span className="inline-block spinElement">✰</span> View all
            projects. <span className="inline-block spinElement">✰</span>
          </a>
        </div>
      </div>
    </div>
  );
}
