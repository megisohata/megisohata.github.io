import RandomIconCover from "../templates/random-icon-cover";
import ExperienceItem from "../templates/experience-item";
import { experiences } from "../data/experience-data";

const Experience: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="hidden sm:inline-block sm:w-1/8 lg:w-1/6 xl:w-1/4 shrink-0">
        <RandomIconCover />
      </div>
      <div className="flex flex-col gap-4 sm:w-3/4 lg:w-2/3 xl:w-1/2 grow">
        <div className="bg-pistachio px-8 py-8 rounded-lg flex flex-col gap-2">
          <h1 className="text-2xl">Education</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col xl:flex-row xl:justify-between">
              <div>
                <h1 className="xl:text-lg">
                  Cornell University | College of Engineering
                </h1>
                <div className="bg-cream w-fit px-1 py-1 rounded-md">
                  <p>
                    Bachelor of Science, Computer Science | Minor, Artificial
                    Intelligence
                  </p>
                </div>
              </div>
              <div className="text-left xl:text-right">
                <p>May 2027</p>
                <p className="italic">Ithaca, NY</p>
              </div>
            </div>
            <p>
              <span className="italic">Relevant Coursework:</span> Data
              Structures and Functional Programming, Object-Oriented Programming
              and Data Structures, Mathematical Foundations of Computing,
              Engineering Probability and Statistics, Probability Models and
              Inference, Engineering Applications of Operations Research, Linear
              Algebra, Multivariable Calculus
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col xl:flex-row xl:justify-between">
              <div>
                <h1 className="xl:text-lg">
                  Yonsei University | International Summer School
                </h1>
                <div className="bg-cream w-fit px-1 py-1 rounded-md">
                  <p>Study Abroad</p>
                </div>
              </div>
              <div className="text-left xl:text-right">
                <p>JUN 2024 - AUG 2024</p>
                <p className="italic">Seoul, KR</p>
              </div>
            </div>
            <p>
              Summer 2024 semester abroad, studying Korean language, culture,
              and history and engaging in immersive cultural experiences to
              enhance language skills and deepen cultural understanding.
            </p>
          </div>
        </div>

        <div className="lg:hidden w-full h-12">
          <RandomIconCover />
        </div>

        <div className="bg-pistachio px-8 py-8 rounded-lg flex flex-col gap-2">
          <h1 className="text-2xl">Technical Skills</h1>
          <p>
            <strong>Programming Languages:</strong> Java, Python, JavaScript,
            OCaml
          </p>
          <p>
            <strong>Technologies & Frameworks:</strong> HTML, CSS, Svelte,
            React, Next, Tailwind CSS, Docker
          </p>
          <p>
            <strong>Tools:</strong> Git, GitHub, Visual Studio Code
          </p>
          <p>
            <strong>Other:</strong> SolidWorks, Onshape
          </p>
        </div>

        <div className="lg:hidden w-full h-12">
          <RandomIconCover />
        </div>

        <div className="bg-pistachio px-8 py-8 rounded-lg flex flex-col gap-2">
          <h1 className="text-2xl">Experience</h1>
          <div>
            {experiences.map((exp, index) => (
              <div key={index}>
                <ExperienceItem {...exp} />
                {index < experiences.length - 1 && (
                  <hr className="bg-forest w-3/4 h-px mx-auto my-4 border-none" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden w-full h-12">
          <RandomIconCover />
        </div>

        <div className="bg-pistachio px-8 py-8 rounded-lg flex flex-col gap-2">
          <h1 className="text-2xl">Awards</h1>
          <p>
            <strong>2023:</strong> Jacobs Scholars Recipient, Outstanding STEM
            Tutor, Outstanding Mathematics Student, Outstanding Physics Student,
            U.S. Presidential Scholars Nominee
          </p>
          <p>
            <strong>2022:</strong> FIRST Tech Challenge Dean’s List
            Semi-Finalist, FIRST Robotics Competition Dean’s List Semi-Finalist,
            Edmonds School District Student of the Month
          </p>
          <p>
            <strong>2021:</strong> Washington STEM Rising Star, FIRST Tech
            Challenge Dean’s List Semi-Finalist
          </p>
        </div>
      </div>
      <div className="hidden sm:inline-block sm:w-1/8 lg:w-1/6 xl:w-1/4 shrink-0">
        <RandomIconCover />
      </div>
    </div>
  );
};

export default Experience;
