"use client";

import {
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
  FaExternalLinkAlt,
  FaRegCalendar,
  FaMapMarkerAlt,
  FaPlus,
  FaGraduationCap,
} from "react-icons/fa";
import {
  ExperienceEntry,
  PROFESSIONAL,
  EDUCATION,
} from "@/data/experience-data";

interface Props extends ExperienceEntry {
  expanded: boolean;
  onExpand: () => void;
}

const ExperienceCard: React.FC<Props> = ({
  type,
  title,
  organization,
  link,
  logo,
  date,
  location,
  tags,
  tasks,
  expanded,
  onExpand,
}) => {
  return (
    <div
      className={`
        border-green border-2 rounded-lg bg-cream
        transition-all duration-500 ease-out
        overflow-hidden p-4
        ${expanded ? "w-[650px]" : "w-[450px]"}
      `}
    >
      <div className="flex gap-2 text-left items-start">
        <img src={logo} className="h-[60px] rounded-md flex-none" />

        <div className="flex flex-col justify-center flex-grow">
          <h1 className="text-xl">{title}</h1>

          {link ? (
            <a href={link} target="_blank" className="flex gap-2 items-center">
              <p>{organization}</p>
              <FaExternalLinkAlt />
            </a>
          ) : (
            <p>{organization}</p>
          )}
        </div>

        {expanded ? (
          <FaCompressArrowsAlt
            className="cursor-pointer hover:scale-110 transition flex-none"
            onClick={onExpand}
          />
        ) : (
          <FaExpandArrowsAlt
            className="cursor-pointer hover:scale-110 transition flex-none"
            onClick={onExpand}
          />
        )}
      </div>

      <div className="flex gap-3 my-2">
        <div className="flex gap-1 items-center text-sm">
          <FaRegCalendar />
          <p>{date}</p>
        </div>

        <div className="flex gap-1 items-center text-sm">
          <FaMapMarkerAlt />
          <p>{location}</p>
        </div>
      </div>

      <hr className="border-green opacity-20" />

      <div className="mt-2">
        {type === PROFESSIONAL ? (
          <div className="flex gap-1 items-center">
            <FaPlus />
            <p>Skills</p>
          </div>
        ) : type === EDUCATION ? (
          <div className="flex gap-1 items-center">
            <FaGraduationCap />
            <p>Courses</p>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-1 items-center">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="bg-pistachio text-green text-xs w-fit px-2 py-1 rounded-md"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>

      {expanded && (
        <div className="mt-4 space-y-2 transition-opacity duration-500">
          {tasks?.map((task, index) => (
            <p key={index}>• {task}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
