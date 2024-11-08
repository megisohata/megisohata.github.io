interface ExperienceItemProps {
  title: string;
  date: string;
  organization: string;
  orgLink?: string;
  location: string;
  tasks?: string[];
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
    <div className="my-2 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-base">{title}</h1>
        <p className="hidden text-base xl:block">{date}</p>
      </div>
      <div className="flex justify-between items-center">
        {orgLink ? (
          <a
            href={orgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream w-fit py-0.5 px-1 rounded-md text-base italic"
          >
            🔗 {organization}
          </a>
        ) : (
          <p className="text-base italic">{organization}</p>
        )}
        <p className="hidden text-base italic xl:block">{location}</p>
      </div>
      {tasks ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : null}
      <p className="text-base xl:hidden">{date}</p>
      <p className="text-base italic xl:hidden">{location}</p>
    </div>
  );
};

export default ExperienceItem;
