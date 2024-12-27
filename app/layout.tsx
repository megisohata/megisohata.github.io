import "./globals.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Meg Isohata",
  viewport: "width=device-width, initial-scale=1.0",
  description: "Meg Isohata's portfolio..",
  authors: [{ name: "Meg Isohata", url: "https://megisohata.github.io/" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-cream px-8 py-8">
        <header className="bg-forest text-cream h-12 w-full px-4 rounded-lg flex justify-between items-center">
          <div>
            <a href="/" className="flex items-center">
              <span className="w-8 h-8 spin">
                <img src="flower.png" />
              </span>
              <span className="w-8 h-8 hidden sm:block spin">
                <img src="flower.png" />
              </span>
              <span className="w-8 h-8 hidden sm:block spin">
                <img src="flower.png" />
              </span>
            </a>
          </div>
          <div className="flex w-full justify-around">
            <a href="/about" className="spinContainer">
              <span className="hidden sm:inline-block spinElement">✰</span>{" "}
              About{" "}
              <span className="hidden sm:inline-block spinElement">✰</span>
            </a>
            <a href="/experience" className="spinContainer">
              <span className="hidden sm:inline-block spinElement">✿</span>{" "}
              Experience{" "}
              <span className="hidden sm:inline-block spinElement">✿</span>
            </a>
            <a href="/portfolio" className="spinContainer">
              <span className="hidden sm:inline-block spinElement">✧</span>{" "}
              Portfolio{" "}
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
        </header>
        <main className="my-4">{children}</main>
        <footer className="bg-forest text-cream w-full px-4 py-4 rounded-lg text-center">
          <div className="flex gap-2 justify-center">
            <a
              href="https://github.com/megisohata"
              target="_blank"
              className="flex items-center gap-1 expandContainer"
            >
              <FaGithub className="h-4 w-4 expandElement" />
              <p>GitHub</p>
            </a>
            <p>✧</p>
            <a
              href="https://www.linkedin.com/in/meg-isohata/"
              target="_blank"
              className="flex items-center gap-1 expandContainer"
            >
              <FaLinkedin className="h-4 w-4 expandElement" />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="flex justify-center gap-2">
            <a href="/" className="underline decoration-1">
              Home
            </a>
            <p>✿</p>
            <a href="/about" className="underline decoration-1">
              About
            </a>
            <p>✿</p>
            <a href="/experience" className="underline decoration-1">
              Experience
            </a>
            <p>✿</p>
            <a href="/portfolio" className="underline decoration-1">
              Portfolio
            </a>
          </div>
          <p>✰ ✰ ✰ ✰</p>
          <div className="flex justify-center items-center gap-1">
            <p>© 2025 Meg Isohata</p>
            <img src="sapling.png" className="h-4 w-4" />
            <img src="sparkle.png" className="h-4 w-4" />
          </div>
        </footer>
      </body>
    </html>
  );
}
