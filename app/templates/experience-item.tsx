interface ExperienceItemProps {
  title: string;
  organization: string;
  link?: string;
  date: string;
  location: string;
  tasks?: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  organization,
  link,
  date,
  location,
  tasks,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div>
          <h1 className="xl:text-lg">{title}</h1>
          {link ? (
            <a
              href={link}
              target="_blank"
              className="bg-cream w-fit px-1 py-1 rounded-md flex items-center gap-1 expandContainer"
            >
              <img src="clover.png" className="w-4 h-4 expandElement" />
              <p className="underline decoration-1">{organization}</p>
            </a>
          ) : (
            <div className="bg-cream w-fit px-1 py-1 rounded-md flex items-center gap-1">
              <img src="clover.png" className="w-4 h-4" />
              <p>{organization}</p>
            </div>
          )}
        </div>
        <div className="text-left xl:text-right">
          <p>{date}</p>
          <p className="italic">{location}</p>
        </div>
      </div>
      {tasks ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ExperienceItem;
