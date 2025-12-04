import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MediaBar from "./components/media/MediaBar";

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
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="bg-cream">
        <Navbar />
        <main className="">{children}</main>
        <MediaBar />
        <Footer />
      </body>
    </html>
  );
}
