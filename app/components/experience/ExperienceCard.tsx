import {
  FaExpandArrowsAlt,
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
  NO_TAG,
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
}) => {
  return (
    <div className="flex flex-col gap-1 border-green border-2 rounded-lg p-4 w-[450px]">
      <div className="flex gap-2 text-left items-center">
        <img src={logo} className="h-[60px] rounded-md" />
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl">{title}</h1>
            <FaExpandArrowsAlt />
          </div>
          {link ? (
            <a href={link} target="_blank">
              <div className="flex gap-2 items-center">
                <p>{organization}</p>
                <FaExternalLinkAlt />
              </div>
            </a>
          ) : (
            <p>{organization}</p>
          )}
        </div>
      </div>

      <div className="flex gap-2">
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

      <div>
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
    </div>
  );
};

export default ExperienceCard;
