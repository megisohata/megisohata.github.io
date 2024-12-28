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
    title: "Ground Control Station",
    date: "DEC 2024",
    description:
      "Ground control station flight simulator programmed in OCaml using the Bogue GUI library.",
    imgSrc: "portfolio/gcs.jpg",
    demoLink: "https://www.youtube.com/watch?v=pwyNBIwGpJg&ab_channel=cynyus",
    githubLink:
      "https://github.com/The-Altitude-Attitude/ground-control-station",
    authors: ["Meg Isohata", "Cynthia Shao", "Rachel Bethke"],
  },
  {
    title: "LMCC Alumni Portal",
    date: "NOV 2024",
    description:
      "Full-stack alumni portal for the Lower Manhattan Cultural Council, a Manhattan-based organization supporting emerging artists. Built a responsive frontend using Next.js and Tailwind CSS, a Node.js backend, and a Firebase database. The portal featured a social media feed, job board, events directory, and sign up / log in page.",
    imgSrc: "portfolio/lmcc.jpg",
    demoLink: "",
    githubLink: "",
    authors: [
      "Shashank Raghuraj",
      "Marko Gjurevski",
      "Meg Isohata",
      "Frank Kavanaugh",
      "Isaac Robles",
      "Kevin Frazier",
      "Crystal Zhu",
    ],
  },
  {
    title: "Etch-a-Sketch",
    date: "OCT 2024",
    description: "Etch A Sketch created with HTML, CSS, and JavaScript.",
    imgSrc: "portfolio/etch-a-sketch.png",
    demoLink: "https://megisohata.github.io/etch-a-sketch/",
    githubLink: "https://github.com/megisohata/etch-a-sketch",
    authors: ["Meg Isohata"],
  },
  {
    title: "Rock Paper Scissors",
    date: "OCT 2024",
    description:
      "Rock Paper Scissors game created with HTML, CSS, and JavaScript.",
    imgSrc: "portfolio/rock-paper-scissors.png",
    demoLink: "https://megisohata.github.io/rock-paper-scissors/",
    githubLink: "https://github.com/megisohata/rock-paper-scissors",
    authors: ["Meg Isohata"],
  },
  {
    title: "Interactive Image Selector",
    date: "MAY 2024",
    description:
      "Image selection application using Java’s Swing framework, leveraging Dijkstra’s algorithm with custom weights to identify and select edges in images, providing functionality similar to Photoshop’s Magic Wand tool.",
    imgSrc: "portfolio/image-selector.jpg",
    demoLink: "",
    githubLink: "",
    authors: ["Meg Isohata"],
  },
  {
    title: "Alien Invaders",
    date: "DEC 2023",
    description:
      "Space Invaders clone using GUIs and Object-Oriented Programming in Python, implementing multiple levels, game animations, collisions, and win and lose conditions.",
    imgSrc: "portfolio/invaders.jpg",
    demoLink: "",
    githubLink: "",
    authors: ["Meg Isohata", "Kaitlyn Roach"],
  },
];
