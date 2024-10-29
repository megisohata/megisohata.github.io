export default function Home() {
  return (
    <div className="flex gap-8 h-full">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-6xl">Meg Isohata</h1>
        <div className="flex-1 flex flex-col bg-pistachio rounded-lg p-8 justify-center items-center">
          <img src="profile.png" className="w-64 h-auto my-2" />
          <div>
            <h1 className="text-2xl my-2">Hey, I'm Meg!</h1>
            <p>I am a sophomore at Cornell University majoring in Computer Science and minoring in Artificial Intelligence.</p>
            <p className="bg-cream w-fit py-1 px-2 my-2 rounded-md italic">🌿 Welcome to my corner of the internet!</p>
          </div>
          <a href="/about" className="py-2 px-4 my-2 border-2 border-forest rounded-sm spinContainer"><span className="spinElement">❀</span> More About Me <span className="spinElement">❀</span></a>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex flex-col bg-pistachio rounded-lg p-8 justify-center items-center">
          <h1 className="text-2xl">Experience</h1>
          <a href="/experience" className="py-2 px-4 my-2 border-2 border-forest rounded-sm spinContainer"><span className="spinElement">✿</span> Full Experience <span className="spinElement">✿</span></a>
        </div>
        <div className="h-40 bg-pistachio border-2 border-forest rounded-lg"></div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="h-40 bg-pistachio border-2 border-forest rounded-lg"></div>
        <div className="flex-1 flex flex-col bg-pistachio rounded-lg p-8 justify-center items-center">
          <h1 className="text-2xl">Portfolio</h1>
          <a href="/portfolio" className="py-2 px-4 my-2 border-2 border-forest rounded-sm spinContainer"><span className="spinElement">✧</span> All Projects <span className="spinElement">✧</span></a>
        </div>
      </div>
    </div>
  );
}
