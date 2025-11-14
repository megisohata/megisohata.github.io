import "../../globals.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-brown text-cream h-12 w-full px-4 flex justify-between items-center fixed top-0 z-[100]">
      <div>
        <a href="/" className="flex items-center">
          <span className="w-8 h-8 spin">
            <img src="icons/flower.png" />
          </span>
        </a>
      </div>
      <div className="flex w-full justify-around">
        <a href="#about" className="spinContainer">
          <span className="hidden sm:inline-block spinElement">✰</span> About{" "}
          <span className="hidden sm:inline-block spinElement">✰</span>
        </a>
        <a href="#experience" className="spinContainer">
          <span className="hidden sm:inline-block spinElement">✿</span>{" "}
          Experience{" "}
          <span className="hidden sm:inline-block spinElement">✿</span>
        </a>
        <a href="#projects" className="spinContainer">
          <span className="hidden sm:inline-block spinElement">✧</span> Projects{" "}
          <span className="hidden sm:inline-block spinElement">✧</span>
        </a>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/megisohata" target="_blank">
          <FaGithub className="h-6 w-6 expand" />
        </a>
        <a href="https://www.linkedin.com/in/meg-isohata/" target="_blank">
          <FaLinkedin className="h-6 w-6 expand" />
        </a>
      </div>
    </nav>
  );
}
