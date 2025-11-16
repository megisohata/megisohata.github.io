import ExperienceCard from "./ExperienceCard";
import Timeline from "./Timeline";
import { experiences } from "@/data/experience-data";

export default function Experience() {
  return (
    <div id="experience" className="my-[50px] bg-cream text-brown">
      <h1 className="text-4xl text-center">Experience</h1>

      <div className="overflow-x-auto">
        <div className="flex">
          <div className="w-[100px] shrink-0"></div>

          <div>
            <div className="flex overflow-x-none items-end">
              <div className="w-[150px] shrink-0"></div>
              {experiences.map((exp, index) => {
                const isAbove = index % 2 === 0;
                return isAbove ? (
                  <div
                    key={index}
                    className="w-[590px] flex justify-center relative"
                  >
                    <ExperienceCard {...exp} />

                    <div className="absolute left-1/2 top-full h-[64px] w-[2px] bg-green"></div>
                  </div>
                ) : null;
              })}
            </div>

            <Timeline />

            <div className="flex overflow-x-none items-start">
              <div className="w-[445px] shrink-0"></div>
              {experiences.map((exp, index) => {
                const isAbove = index % 2 === 0;
                return !isAbove ? (
                  <div
                    key={index}
                    className="w-[590px] flex justify-center relative"
                  >
                    <ExperienceCard {...exp} />

                    <div className="absolute left-1/2 bottom-full h-[64px] w-[2px] bg-green"></div>
                  </div>
                ) : null;
              })}
            </div>
          </div>

          <div className="w-[100px] shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
