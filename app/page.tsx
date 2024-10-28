export default function Home() {
  return (
    <div className="flex gap-8 w-full h-full">
      <div className="flex flex-col gap-4 w-full h-full flex-1 rounded-lg">
        <h1>Meg Isohata</h1>
        <div className="bg-pink-100 w-full h-full flex-1 rounded-lg">
          <img />
          <h1>Hey, I'm Meg.</h1>
          <p>I am a sophomore at Cornell University majoring in Computer Science and minoring in Artificial Intelligence.</p>
          <p>Welcome to my corner of the internet!</p>
          <button>More About Me</button>
        </div>
      </div>
      <div className="bg-indigo-100 w-96 h-full flex-1 rounded-lg"></div>
      <div className="bg-indigo-100 w-96 h-full flex-1 rounded-lg"></div>
    </div>
  );
}
