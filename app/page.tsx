export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-pistachio rounded-lg px-8 py-8 flex flex-col md:flex-row justify-center items-center gap-8">
        <img
          src="profile.jpg"
          className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-forest"
        />
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Hey, I'm Meg!</h1>
            <p>
              I am a sophomore at Cornell University majoring in Computer
              Science and minoring in Artificial Intelligence.
            </p>
            <div className="bg-cream w-fit px-2 py-2 rounded-md flex gap-1 items-center">
              <img src="fern.png" className="w-4 h-4" />
              <p className="italic">Welcome to my corner of the internet!</p>
            </div>
          </div>
          <a
            href="/about"
            className="w-fit px-2 py-2 rounded-md border-2 border-forest spinContainer"
          >
            <span className="inline-block spinElement">✰</span> Read more about
            me. <span className="inline-block spinElement">✰</span>
          </a>
        </div>
      </div>
    </div>
  );
}
