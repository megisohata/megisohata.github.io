import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project-data";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-brown text-cream lg:px-[150px] md:px-[50px] px-[50px] py-[50px] flex flex-col items-center scroll-mt-16"
    >
      <h1 className="text-4xl">Projects</h1>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-[30px]">
        {projects.map((proj, index) => (
          <div key={index}>
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </div>
  );
}
