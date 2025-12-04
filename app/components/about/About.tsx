export default function About() {
  return (
    <div
      id="about"
      className="lg:px-[150px] md:px-[50px] px-[50px] py-[50px] flex flex-col md:flex-row gap-8 justify-center items-center relative scroll-mt-16"
    >
      <img
        src="/about/profile.jpg"
        className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] sm:w-[400px] sm:h-[400px] rounded-full border-[4px] border-brown"
      />
      <div className="text-cream flex flex-col gap-4 justify-center flex-grow">
        <h1 className="text-4xl">Hi, I'm Meg 🌱</h1>
        <p>
          I am a Computer Science student minoring in Artificial Intelligence at
          Cornell University. I'm passionate about building things that make
          everyday life a little brighter. ✨
        </p>

        <p>
          My technical approach is driven by a commitment to thoughtful design,
          clean code, and the small details that make a huge impact on user
          experience.
        </p>

        <p>
          When I'm not coding, you can find me reading a book, reorganizing my
          Notion, or drinking a cup of coffee.
        </p>
      </div>
    </div>
  );
}
