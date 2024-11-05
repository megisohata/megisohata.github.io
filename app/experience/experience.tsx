interface ExperienceItemProps {
  title: string;
  date: string;
  organization: string;
  orgLink: string;
  location: string;
  tasks: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  date,
  organization,
  orgLink,
  location,
  tasks,
}) => {
  return (
    <div className="flex flex-col my-2">
      <div className="flex justify-between items-center">
        <h1 className="text-base">{title}</h1>
        <p className="text-base">{date}</p>
      </div>
      <div className="flex justify-between items-center">
        <a
          href={orgLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cream w-fit py-0.5 px-1 my-1 rounded-md text-sm italic"
        >
          🔗 {organization}
        </a>
        <p className="text-sm">{location}</p>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="w-5/6">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
