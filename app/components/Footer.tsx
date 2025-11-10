import "../globals.css";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream w-full px-4 py-4 text-center">
      <p>Made with care, curiosity, and caffeine. ☕️</p>
      <p>✰ ✰ ✰ ✰</p>
      <p>© 2025 Meg Isohata 🌱✨</p>
      <p className="text-xs italic">
        “Amberlight” by{" "}
        <a
          href="https://www.scottbuckley.com.au/library/amberlight/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1"
        >
          Scott Buckley
        </a>{" "}
        - licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1"
        >
          CC BY 4.0
        </a>
        .
      </p>
    </footer>
  );
}
