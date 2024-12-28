import RandomIconCover from "../templates/random-icon-cover";

export default function About() {
  return (
    <div className="flex gap-4">
      <div className="hidden sm:inline-block sm:w-1/8 lg:w-1/6 xl:w-1/4 shrink-0">
        <RandomIconCover />
      </div>
      <div className="flex flex-col items-center gap-4 sm:w-3/4 lg:w-2/3 xl:w-1/2 grow">
        <div className="bg-pistachio px-8 py-8 rounded-lg flex flex-col items-center gap-2 w-full">
          <img
            src="about/profile.jpg"
            className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-forest"
          />
          <h1 className="text-4xl">Hey, I'm Meg!</h1>
          <p>
            I am a sophomore at Cornell University majoring in Computer Science
            and minoring in Artificial Intelligence. I first discovered my
            passion for Computer Science at the age of 10 when I tried Hour of
            Code. From there, I delved deeper into my interest, starting with
            Scratch, then moving on to summer web development camps, and
            eventually learning Java in high school for robotics. Now, I have
            the incredible privilege of building a strong foundation in computer
            science, guided by some of the best professors in the world.
            Programming, for me, is more than just writing code — it's a
            creative outlet, a mental challenge, and a way to bring my ideas to
            life. I love solving problems with efficient, practical solutions,
            and there’s no greater satisfaction than seeing a program I’ve been
            working on come to life exactly as I envisioned.
          </p>
          <p>
            Outside of academics, I enjoy reading, playing board games, and
            spending time with family and friends. I’m always picking up new
            crafts — painting, crocheting, beading, jewelry-making — you name
            it, I’ve probably tried it! I also love baking, indulging in coffee
            and boba, and exploring new cafes and restaurants. Another passion
            of mine is traveling. So far, I’ve visited Canada, Japan, and South
            Korea, and I dream of traveling to 100 countries in my lifetime!
          </p>
        </div>
        <div className="lg:hidden w-full h-12">
          <RandomIconCover />
        </div>
        <div className="bg-pistachio px-8 py-8 rounded-lg columns-2 md:columns-4 gap-2">
          <img src="about/onion.jpg" className="rounded-md mb-2 md:mb-0" />
          <img src="about/temple.jpg" className="rounded-md" />
          <img src="about/parfait.jpg" className="rounded-md mb-2 md:mb-0" />
          <img src="about/yonsei.jpg" className="rounded-md" />
        </div>
      </div>
      <div className="hidden sm:inline-block sm:w-1/8 lg:w-1/6 xl:w-1/4 shrink-0">
        <RandomIconCover />
      </div>
    </div>
  );
}
