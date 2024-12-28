import ProjectItem from "../templates/portfolio-item";
import { projects } from "../data/portfolio-data";

const Portfolio: React.FC = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 w-full">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-pistachio px-8 py-8 rounded-lg h-fit mb-8 break-inside-avoid"
        >
          <ProjectItem {...project} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
