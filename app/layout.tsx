import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meg Isohata",
  description: "Meg Isohata's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <div className="px-4 py-4 lg:px-16 lg:py-8">
          <main className="flex flex-col gap-8 w-full h-full">
            <div className="bg-forest text-cream px-4 flex items-center justify-between w-full h-12 rounded-lg shrink-0">
              <a href="/" className="text-2xl">
                <span className="hidden lg:inline lg:spin">🌼</span>
                <span className="hidden lg:inline lg:spin">🌼</span>
                <span className="spin">🌼</span>
              </a>
              <a href="/about" className="spinContainer">
                <span className="hidden lg:inline lg:spinElement">❀</span> About{" "}
                <span className="hidden lg:inline lg:spinElement">❀</span>
              </a>
              <a href="/experience" className="spinContainer">
                <span className="hidden lg:inline lg:spinElement">✧</span>{" "}
                Experience{" "}
                <span className="hidden lg:inline lg:spinElement">✧</span>
              </a>
              <a href="/portfolio" className="spinContainer">
                <span className="hidden lg:inline lg:spinElement">✿</span>{" "}
                Portfolio{" "}
                <span className="hidden lg:inline lg:spinElement">✿</span>
              </a>
              <div className="flex gap-1">
                <a href="https://github.com/megisohata" target="_blank">
                  <img src="github.svg" className="h-4 w-4 lg:h-8 lg:w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/meg-isohata/"
                  target="_blank"
                >
                  <img src="linkedin.svg" className="h-4 w-4 lg:h-8 lg:w-8" />
                </a>
              </div>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
