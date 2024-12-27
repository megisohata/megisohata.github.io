import RandomIconCover from "../templates/random-icon-cover";
import ExperienceItem from "../templates/experience-item";
import { experiences } from "../data/experience-data";

const Experience: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="w-0 sm:w-1/8 lg:w-1/6 xl:w-1/4 flex-shrink-0">
        <RandomIconCover />
      </div>
      <div className="flex flex-col gap-4 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 grow">
        <div className="bg-pistachio px-8 py-8 rounded-lg">
          <h1 className="text-2xl">Education</h1>
        </div>
        <div className="bg-pistachio p-8 w-full rounded-lg">
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
                Structures and Functional Programming, Object-Oriented
                Programming and Data Structures, Mathematical Foundations of
                Computing, Engineering Probability and Statistics, Probability
                Models and Inference, Engineering Applications of Operations
                Research, Linear Algebra, Multivariable Calculus
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
        </div>
        <div className="bg-pistachio p-8 w-full rounded-lg">
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
        </div>
        <div className="bg-pistachio p-8 w-full rounded-lg">
          <h1 className="text-2xl">Experience</h1>
          {experiences.map((exp, index) => (
            <div key={index}>
              <ExperienceItem {...exp} />
              {index < experiences.length - 1 && (
                <hr className="bg-forest w-3/4 h-px mx-auto my-4 border-none" />
              )}
            </div>
          ))}
        </div>
        <div className="bg-pistachio p-8 w-full rounded-lg">
          <h1 className="text-2xl">Awards</h1>
        </div>
      </div>
      <div className="w-0 sm:w-1/8 lg:w-1/6 xl:w-1/4 flex-shrink-0">
        <RandomIconCover />
      </div>
    </div>
  );
};

export default Experience;
