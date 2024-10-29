import type { Metadata } from "next";
import localFont from "next/font/local";
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
        <div className="px-16 py-8 w-screen h-screen">
          <main className="flex flex-col gap-8 w-full h-full">
            <div className="bg-forest text-cream px-4 flex items-center justify-between w-full h-12 rounded-lg shrink-0">
              <a href="/" className="text-2xl"><span className="spin">🌼</span><span className="spin">🌼</span><span className="spin">🌼</span></a>
              <a href="/about" className="spinContainer"><span className="spinElement">❀</span> About <span className="spinElement">❀</span></a>
              <a href="/experience" className="spinContainer"><span className="spinElement">✿</span> Experience <span className="spinElement">✿</span></a>
              <a href="/portfolio" className="spinContainer"><span className="spinElement">✧</span> Portfolio <span className="spinElement">✧</span></a>
              <div className="flex gap-1">
                <a href="https://github.com/megisohata" target="_blank"><img src="github.svg" className="h-8 w-8" /></a>
                <a href="https://www.linkedin.com/in/meg-isohata/" target="_blank"><img src="linkedin.svg" className="h-8 w-8" /></a>
              </div>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
