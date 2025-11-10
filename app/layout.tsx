import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MediaBar from "./components/MediaBar";

export const metadata = {
  title: "Meg Isohata",
  viewport: "width=device-width, initial-scale=1.0",
  description: "Meg Isohata's portfolio website.",
  authors: [{ name: "Meg Isohata", url: "https://megisohata.github.io/" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <Navbar />
        <main className="my-4">{children}</main>
        <MediaBar />
        <Footer />
      </body>
    </html>
  );
}
