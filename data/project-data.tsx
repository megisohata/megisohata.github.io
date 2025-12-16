import { ReactNode } from "react";

export interface ProjectEntry {
  title: string;
  description: string;
  cover: string;
  demo?: string;
  github?: string;
  skills: string[];
  authors: string[];
  cardContent?: ReactNode;
}

export const projects: ProjectEntry[] = [
  {
    title:
      "Sentiment Analysis Research: Tesla-Related Tweets & Market Performance",
    description:
      "Partnering with Millennium Management and other students, I conducted sentiment analysis research with Millennium Management, leveraging NLP to categorize Tesla-related tweets to extract patterns between social media discourse surrounding the company and stock market performance.",
    cover: "",
    skills: ["NLP", "Technical Communication", "Prediction"],
    authors: [
      "Meg Isohata",
      "Arushi Aggarwal",
      "Saanvi Jain",
      "Emma Wang",
      "Ishita Yadav",
    ],
    cardContent: (
      <div>
        <iframe
          className="mx-auto border-2 rounded-md"
          style={{ borderColor: "#dce2cf" }}
          src="/experience/pdfs/mm_wicc.pdf"
          allowFullScreen
          width={500}
          height={300}
        />
      </div>
    ),
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
    cardContent: (
      <div>
        <iframe
          className="mx-auto border-2 rounded-md"
          style={{ borderColor: "#dce2cf" }}
          src="https://www.youtube.com/embed/pwyNBIwGpJg"
          allowFullScreen
          width={500}
          height={300}
        />
      </div>
    ),
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
    cardContent: (
      <div>
        <img
          className="mx-auto border-2 rounded-md"
          style={{ height: "300px", borderColor: "#dce2cf" }}
          src="/portfolio/lmcc.jpg"
        />
      </div>
    ),
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
    cardContent: (
      <div>
        <img
          className="mx-auto border-2 rounded-md"
          style={{ height: "300px", borderColor: "#dce2cf" }}
          src="/portfolio/image-selector.jpg"
        />
      </div>
    ),
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
    cardContent: (
      <div>
        <img
          className="mx-auto border-2 rounded-md"
          style={{ height: "300px", borderColor: "#dce2cf" }}
          src="/portfolio/invaders.jpg"
        />
      </div>
    ),
  },
];
