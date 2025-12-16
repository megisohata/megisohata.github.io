"use client";

import { FaGithub, FaPlus } from "react-icons/fa";
import { ProjectEntry } from "@/data/project-data";

const ProjectCard: React.FC<ProjectEntry> = ({
  title,
  description,
  cover,
  demo,
  github,
  skills,
  authors,
  cardContent,
}) => {
  return (
    <div className="w-full h-full rounded-lg shrink-0 bg-cream text-brown p-4 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <h1 className="text-xl">{title}</h1>
        {github ? (
          <a
            href={github}
            target="_blank"
            className="flex justify-center items-center w-6 h-6 rounded-full bg-brown expandContainer"
          >
            <FaGithub className="text-cream h-5 w-5 expandElement" />
          </a>
        ) : null}
      </div>
      <p>{description}</p>
      {cardContent && <div className="my-2">{cardContent}</div>}

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
