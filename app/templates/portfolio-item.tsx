import { FaGithub } from "react-icons/fa";

interface ProjectItemProps {
  title: string;
  date: string;
  description: string;
  imgSrc: string;
  demoLink?: string;
  githubLink?: string;
  authors: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  date,
  description,
  imgSrc,
  demoLink,
  githubLink,
  authors,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-auto object-cover rounded-md"
      />
      <div className="flex justify-between items-center">
        <h1 className="xl:text-lg">{title}</h1>
        <p>{date}</p>
      </div>
      <div className="flex gap-2 items-center">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream w-fit px-1 py-1 rounded-md flex items-center gap-1 italic expandContainer"
          >
            <img src="clover.png" className="w-4 h-4 expandElement" />
            <p className="underline decoration-1">Demo</p>
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-8 h-8 rounded-full bg-forest expandContainer"
          >
            <FaGithub className="text-cream h-6 w-6 expandElement" />
          </a>
        )}
      </div>
      <p>{description}</p>
      <p>
        <strong>{authors.length === 1 ? "Author" : "Authors"}: </strong>
        {authors.join(", ")}
      </p>
    </div>
  );
};

export default ProjectItem;
