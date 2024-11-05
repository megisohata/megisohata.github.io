import ProjectCard from "./portfolio-item";

const projects = [
  {
    title: "Etch-a-Sketch",
    date: "OCT 2024",
    description: "Etch A Sketch created with HTML, CSS, and JavaScript.",
    imgSrc: "etch-a-sketch.png",
    liveDemoLink: "https://megisohata.github.io/etch-a-sketch/",
    githubLink: "https://github.com/megisohata/etch-a-sketch",
  },
  {
    title: "Rock Paper Scissors",
    date: "OCT 2023",
    description:
      "Rock Paper Scissors game created with HTML, CSS, and JavaScript.",
    imgSrc: "rock-paper-scissors.png",
    liveDemoLink: "https://megisohata.github.io/rock-paper-scissors/",
    githubLink: "https://github.com/megisohata/rock-paper-scissors",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="columns-3 gap-8 w-full">
      {projects.map((project, index) => (
        <div key={index} className="mb-8 break-inside-avoid">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
