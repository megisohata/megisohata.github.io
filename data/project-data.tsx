export interface ProjectEntry {
  title: string;
  description: string;
  cover: string;
  demo?: string;
  github?: string;
  skills: string[];
  authors: string[];
}

export const projects: ProjectEntry[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal website was built with Next.js and Tailwind CSS and features home, about, experience, and portfolio pages. I designed and developed the website, incorporating custom icons, animations, and a responsive layout for all devices. While the majority of the current website was completed over a few days during winter break, it reflects months of design iterations, feedback from friends, and continuous optimization.",
    cover: "portfolio/personal-web.jpg",
    demo: "https://megisohata.github.io/",
    github: "https://github.com/megisohata/megisohata.github.io",
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
    description:
      "The Ground Control Station is a flight simulator with a menu sidebar and main map interface. Users can plot waypoints on the map and control the plane’s movement from the sidebar. Sidebar features include changing the map, setting the speed of the airplane, starting the simulation, resetting the plane, clearing the waypoint path, and modifying the waypoints. As the simulation runs, the sidebar displays the flight status as well as real-time messages. The application was developed in OCaml, utilizing the Bogue library for the GUI.",
    cover: "portfolio/gcs.jpg",
    demo: "https://www.youtube.com/watch?v=pwyNBIwGpJg&ab_channel=cynyus",
    github: "https://github.com/The-Altitude-Attitude/ground-control-station",
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
    description:
      "The LMCC alumni portal is a full stack application created during the Code for Good hackathon for the Lower Manhattan Cultural Council, an organization supporting emerging artists. The portal was designed to connect LMCC alumni and thus features customizable user profiles, a social media feed, artist matching via a machine learning model, a job board, and an events directory. It was built with a Next.js and Tailwind CSS frontend, Node.js backend, and a Firebase database.",
    cover: "portfolio/lmcc.jpg",
    demo: "",
    github: "",
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
    title: "Interactive Image Selector",
    description:
      "The Interactive Image Selector allows users to load an image from the device, use the “Point-to-point” tool to select straight lines of the image or use the “Intelligent scissors” tool to identify edges based on the brightness and color of pixels - similarly to Photoshop’s Magic Wand tool - and save the selected portion of the original image as a PNG file. The GUI was built using Java’s Swing framework, and Dijkstra’s algorithm was implemented with a min-heap queue.",
    cover: "portfolio/image-selector.jpg",
    demo: "",
    github: "",
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
    description:
      "Alien Invaders is a Space Invaders clone game, featuring multiple levels, game animations, collision detection, and win / loss conditions. The GUI was built using Python’s Kivy framework.",
    cover: "portfolio/invaders.jpg",
    demo: "",
    github: "",
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
