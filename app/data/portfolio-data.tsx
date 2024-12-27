interface PortfolioEntry {
  title: string;
  date: string;
  description: string;
  imgSrc: string;
  demoLink?: string;
  githubLink?: string;
  authors: string[];
}

export const projects = [
  {
    title: "Etch-a-Sketch",
    date: "OCT 2024",
    description: "Etch A Sketch created with HTML, CSS, and JavaScript.",
    imgSrc: "etch-a-sketch.png",
    demoLink: "https://megisohata.github.io/etch-a-sketch/",
    githubLink: "https://github.com/megisohata/etch-a-sketch",
    authors: ["Meg Isohata"],
  },
  {
    title: "Rock Paper Scissors",
    date: "OCT 2024",
    description:
      "Rock Paper Scissors game created with HTML, CSS, and JavaScript.",
    imgSrc: "rock-paper-scissors.png",
    demoLink: "https://megisohata.github.io/rock-paper-scissors/",
    githubLink: "https://github.com/megisohata/rock-paper-scissors",
    authors: ["Meg Isohata"],
  },
];
