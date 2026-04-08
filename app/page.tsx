import GalaxyHeader from "./components/GalaxyHeader";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <main className="h-full w-full">
        <div className="w-full h-full bg-[#041121]">
          <GalaxyHeader />
        </div>
      </main>
    </div>
  );
}
