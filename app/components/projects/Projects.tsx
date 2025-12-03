import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project-data";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-brown text-cream py-[50px] flex flex-col items-center"
    >
      <h1 className="text-4xl">Projects</h1>

      <div className="grid grid-cols-3 gap-8 pt-[50px]">
        {projects.map((proj, index) => (
          <div key={index}>
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </div>
  );
}
