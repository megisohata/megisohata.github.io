interface PortfolioEntry {
  title: string;
  date: string;
  description: string;
  imgSrc: string;
  demoLink?: string;
  githubLink?: string;
  skills: string[];
  authors: string[];
}

export const projects: PortfolioEntry[] = [
  {
    title: "K&I Lawyers Website",
    date: "JAN 2025",
    description: "",
    imgSrc: "portfolio/kandi-lawyers.png",
    demoLink: "https://kandilawyers.com/",
    githubLink:
      "The K&I Lawyers website was updated with a modern, clean design and improved functionality to enhance user experience and better represent the firm. The site includes multiple pages outlining key services, along with a contact form that allows visitors to send inquiries directly to K&I Lawyers. I redesigned and developed the website, focusing on intuitive navigation, accessibility, and a polished aesthetic. The project involved refining the layout, optimizing performance, and ensuring a seamless experience across all devices.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "Responsive Design",
      "UI/UX Design",
    ],
    authors: ["Meg Isohata"],
  },
  {
    title: "Portfolio Website",
    date: "DEC 2024",
    description:
      "My personal website was built with Next.js and Tailwind CSS and features home, about, experience, and portfolio pages. I designed and developed the website, incorporating custom icons, animations, and a responsive layout for all devices. While the majority of the current website was completed over a few days during winter break, it reflects months of design iterations, feedback from friends, and continuous optimization.",
    imgSrc: "portfolio/personal-web.jpg",
    demoLink: "https://megisohata.github.io/",
    githubLink: "https://github.com/megisohata/megisohata.github.io",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "TypeScript",
      "GitHub",
      "Responsive Design",
      "UI/UX Design",
    ],
    authors: ["Meg Isohata"],
  },
  {
    title: "Ground Control Station",
    date: "DEC 2024",
    description:
      "The Ground Control Station is a flight simulator with a menu sidebar and main map interface. Users can plot waypoints on the map and control the plane’s movement from the sidebar. Sidebar features include changing the map, setting the speed of the airplane, starting the simulation, resetting the plane, clearing the waypoint path, and modifying the waypoints. As the simulation runs, the sidebar displays the flight status as well as real-time messages. The application was developed in OCaml, utilizing the Bogue library for the GUI.",
    imgSrc: "portfolio/gcs.jpg",
    demoLink: "https://www.youtube.com/watch?v=pwyNBIwGpJg&ab_channel=cynyus",
    githubLink:
      "https://github.com/The-Altitude-Attitude/ground-control-station",
    skills: [
      "OCaml",
      "Bogue",
      "GUI",
      "Unit Testing",
      "Documentation",
      "GitHub",
    ],
    authors: ["Meg Isohata", "Cynthia Shao", "Rachel Bethke"],
  },
  {
    title: "LMCC Alumni Portal",
    date: "NOV 2024",
    description:
      "The LMCC alumni portal is a full stack application created during the Code for Good hackathon for the Lower Manhattan Cultural Council, an organization supporting emerging artists. The portal was designed to connect LMCC alumni and thus features customizable user profiles, a social media feed, artist matching via a machine learning model, a job board, and an events directory. It was built with a Next.js and Tailwind CSS frontend, Node.js backend, and a Firebase database.",
    imgSrc: "portfolio/lmcc.jpg",
    demoLink: "",
    githubLink: "",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "GitHub",
      "Google Maps API",
      "Machine Learning",
      "Frontend",
      "Backend",
      "Full Stack",
      "Node.js",
      "Firebase",
      "UI/UX Design",
    ],
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
    title: "Etch-A-Sketch",
    date: "OCT 2024",
    description:
      "Etch-A-Sketch is a browser-based drawing program inspired by the classic toy. Users can adjust the canvas resolution with a slider; draw with a pen, shader, or eraser using customizable colors; and clear the canvas. It was developed with HTML, CSS, and JavaScript, leveraging event-driven programming to handle user input and game logic.",
    imgSrc: "portfolio/etch-a-sketch.png",
    demoLink: "https://megisohata.github.io/etch-a-sketch/",
    githubLink: "https://github.com/megisohata/etch-a-sketch",
    skills: [
      "HTTML/CSS",
      "JavaScript",
      "GitHub",
      "Responsive Design",
      "UI/UX Design",
      "Documentation",
    ],
    authors: ["Meg Isohata"],
  },
  {
    title: "Rock Paper Scissors",
    date: "OCT 2024",
    description:
      "Rock Paper Scissors is a browser-based implementation of the classic hand game. Players compete against the computer to be the first to score 5 points. The game includes randomized computer selection, real-time score updates, and game status messages. It was developed with HTML, CSS, and JavaScript, leveraging event-driven programming to handle user input and game logic.",
    imgSrc: "portfolio/rock-paper-scissors.png",
    demoLink: "https://megisohata.github.io/rock-paper-scissors/",
    githubLink: "https://github.com/megisohata/rock-paper-scissors",
    skills: [
      "HTTML/CSS",
      "JavaScript",
      "GitHub",
      "Responsive Design",
      "UI/UX Design",
      "Documentation",
    ],
    authors: ["Meg Isohata"],
  },
  {
    title: "Interactive Image Selector",
    date: "MAY 2024",
    description:
      "The Interactive Image Selector allows users to load an image from the device, use the “Point-to-point” tool to select straight lines of the image or use the “Intelligent scissors” tool to identify edges based on the brightness and color of pixels - similarly to Photoshop’s Magic Wand tool - and save the selected portion of the original image as a PNG file. The GUI was built using Java’s Swing framework, and Dijkstra’s algorithm was implemented with a min-heap queue.",
    imgSrc: "portfolio/image-selector.jpg",
    demoLink: "",
    githubLink: "",
    skills: [
      "Java",
      "Swing Framework",
      "GUI",
      "Dijkstra's Algorithm",
      "Data Structures",
      "Unit Testing",
      "Documentation",
    ],
    authors: ["Meg Isohata"],
  },
  {
    title: "Alien Invaders",
    date: "DEC 2023",
    description:
      "Alien Invaders is a Space Invaders clone game, featuring multiple levels, game animations, collision detection, and win / loss conditions. The GUI was built using Python’s Kivy framework.",
    imgSrc: "portfolio/invaders.jpg",
    demoLink: "",
    githubLink: "",
    skills: [
      "Python",
      "GUI",
      "Game Development",
      "Modular Design",
      "Unit Testing",
    ],
    authors: ["Meg Isohata", "Kaitlyn Roach"],
  },
];
