export default function Home() {
  return (
    <div className="flex gap-8 h-full">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-6xl">Meg Isohata</h1>
        <div className="flex-1 flex flex-col bg-pistachio rounded-lg p-8 justify-center items-center">
          <img src="profile.png" className="w-64 h-auto my-2" />
          <div>
            <h1 className="text-2xl my-2">Hey, I'm Meg!</h1>
            <p>I am a sophomore at <span className="emphasis">Cornell University</span> majoring in Computer Science and minoring in Artificial Intelligence.</p>
            <p className="bg-cream w-fit py-1 px-2 my-2 rounded-md italic">🌿 Welcome to my corner of the internet!</p>
          </div>
          <a href="/about" className="py-2 px-4 my-2 border-2 border-forest rounded-sm">☆ More About Me ☆</a>
        </div>
      </div>
      <div className="flex-1 bg-pistachio rounded-lg"></div>
      <div className="flex-1 bg-pistachio rounded-lg"></div>
    </div>
  );
}
