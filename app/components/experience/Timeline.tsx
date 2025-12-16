import { experiences } from "@/data/experience-data";

export default function Experience() {
  return (
    <div id="experience" className="my-[50px] bg-cream text-brown">
      <div className="flex">
        <img
          src="/experience/timeline-above.svg"
          className="w-[300px] shrink-0 z-10"
        />
        {experiences.map((_, index) => {
          return (
            <div key={index} className="flex">
              <img
                key={`above-${index}`}
                src="/experience/timeline-below.svg"
                className="w-[300px] shrink-0 -ml-[5px] z-10"
              />
              <img
                key={`below-${index}`}
                src="/experience/timeline-above.svg"
                className="w-[300px] shrink-0 -ml-[5px] z-10"
              />
              <img
                key={`above2-${index}`}
                src="/experience/timeline-below.svg"
                className="w-[300px] shrink-0 -ml-[5px] z-10"
              />
            </div>
          );
        })}
        <img
          src="/experience/timeline-above.svg"
          className="w-[300px] shrink-0 -ml-[5px] z-10"
        />
      </div>
    </div>
  );
}
