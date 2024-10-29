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
            <div className="bg-forest text-cream px-4 flex items-center justify-between w-full h-16 rounded-lg">
              <a href="/" className="text-3xl">🌼🌼🌼</a>
              <a href="/experience">✿ Experience ✿</a>
              <a href="/portfolio">✧ Portfolio ✧</a>
              <a href="/about">❀ About ❀</a>
              <div></div>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
