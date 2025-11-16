import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience-data";

export default function Experience() {
  return (
    <div id="experience" className="my-[50px] bg-cream text-brown">
      <div className="flex">
        <img
          src="/experience/timeline-below.svg"
          className="w-[300px] shrink-0"
        />
        {experiences.map((_, index) => {
          const isAbove = index % 2 === 1;
          return (
            <img
              key={index}
              src={
                isAbove
                  ? "/experience/timeline-below.svg"
                  : "/experience/timeline-above.svg"
              }
              className={"w-[300px] shrink-0 -ml-[5px] z-10"}
            />
          );
        })}
        {experiences.length % 2 == 0 ? (
          <img
            src="/experience/timeline-above.svg"
            className="w-[300px] shrink-0 -ml-[5px]"
          />
        ) : (
          <img
            src="/experience/timeline-below.svg"
            className="w-[300px] shrink-0 -ml-[5px]"
          />
        )}
      </div>
    </div>
  );
}
