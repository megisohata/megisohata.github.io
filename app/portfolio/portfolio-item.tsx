import FadeIn from "../fade-in";
import SlideIn from "../slide-in";

interface PortfolioItemProps {
  title: string;
  date: string;
  description: string;
  imgSrc: string;
  liveDemoLink?: string;
  githubLink?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  date,
  description,
  imgSrc,
  liveDemoLink,
  githubLink,
}) => {
  return (
    <SlideIn>
      <div className="bg-pistachio p-8 rounded-md h-fit">
        <FadeIn>
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-auto object-cover rounded-md"
          />

          <div className="flex justify-between items-center my-4">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-base">{date}</p>
          </div>

          <div className="flex gap-2 items-center my-2">
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream w-fit py-0.5 px-1 rounded-md text-base italic"
              >
                🔗 Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-6 h-6 rounded-full bg-forest"
              >
                <img src="github.svg" alt="GitHub" />
              </a>
            )}
          </div>

          <p className="text-base">{description}</p>
        </FadeIn>
      </div>
    </SlideIn>
  );
};

export default PortfolioItem;
