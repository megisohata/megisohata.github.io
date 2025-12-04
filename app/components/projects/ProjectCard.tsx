"use client";

import { FaExternalLinkAlt, FaGithub, FaPlus } from "react-icons/fa";
import { ProjectEntry } from "@/data/project-data";

const ProjectCard: React.FC<ProjectEntry> = ({
  title,
  description,
  cover,
  demo,
  github,
  skills,
  authors,
}) => {
  return (
    <div className="w-full h-full rounded-lg shrink-0 bg-cream text-brown p-4 flex flex-col gap-2">
      <img src={cover} className="w-full h-[200px] object-cover rounded-md" />
      <h1 className="text-xl">{title}</h1>

      <div className="flex gap-2">
        {demo ? (
          <a
            href={demo}
            target="_blank"
            className="flex gap-2 items-center bg-pistachio text-green px-2 py-1 rounded-md expandContainer"
          >
            <p>Demo</p>
            <FaExternalLinkAlt className="expandElement" />
          </a>
        ) : null}

        {github ? (
          <a
            href={github}
            target="_blank"
            className="flex justify-center items-center w-8 h-8 rounded-full bg-brown expandContainer"
          >
            <FaGithub className="text-cream h-6 w-6 expandElement" />
          </a>
        ) : null}
      </div>

      <p>{description}</p>

      <hr className="border-green opacity-20" />

      <div className="flex gap-1 items-center">
        <FaPlus />
        <p>Skills</p>
      </div>

      <div className="flex flex-wrap gap-1 items-center">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="bg-pistachio text-green text-sm w-fit px-2 py-1 rounded-md"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
