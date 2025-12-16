"use client";

import {
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

const ExperienceCard: React.FC<ExperienceEntry> = ({
  type,
  title,
  organization,
  link,
  logo,
  date,
  location,
  tags,
  tasks,
  cardContent,
}) => {
  return (
    <div
      className={`lg:w-[850px] md:w-[750px] sm:w-[600px] xs:w-[500px] w-[350px]
        border-green border-2 rounded-lg bg-cream
        transition-all duration-500 ease-out
        overflow-hidden p-4
      `}
    >
      <div className="flex gap-2 text-left items-start">
        <img src={logo} className="h-[60px] rounded-md flex-none" />

        <div className="flex flex-col justify-center flex-grow">
          <h1 className="text-xl">{title}</h1>

          {link ? (
            <a
              href={link}
              target="_blank"
              className="flex gap-2 items-center expandContainer"
            >
              <p>{organization}</p>
              <FaExternalLinkAlt className="expandElement" />
            </a>
          ) : (
            <p>{organization}</p>
          )}
        </div>
      </div>

      <div className="flex gap-3 my-2">
        <div className="flex gap-1 items-center">
          <FaRegCalendar />
          <p>{date}</p>
        </div>

        <div className="flex gap-1 items-center">
          <FaMapMarkerAlt />
          <p>{location}</p>
        </div>
      </div>

      <hr className="border-green opacity-20" />

      {cardContent && <div className="my-2">{cardContent}</div>}

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
              className="bg-pistachio text-green text-sm w-fit px-2 py-1 rounded-md"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
