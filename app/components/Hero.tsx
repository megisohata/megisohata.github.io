import "../globals.css";
import About from "./About";

export default function Hero() {
  return (
    <div>
      <div className="h-[500px] w-full bg-cream flex">
        <div className="relative bg-gradient-to-t from-cream via-skyBlue/100 to-skyBlue mx-auto mt-[75px] w-[250px] h-[325px] border-[6px] border-brown rounded-t-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          <svg
            className="absolute top-12 opacity-75 animate-drift-slow"
            width="125"
            height="100"
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_2)">
              <ellipse cx="70" cy="60" rx="40" ry="30" fill="#FFFFFF" />
              <ellipse cx="130" cy="60" rx="50" ry="35" fill="#FFFFFF" />
              <ellipse cx="100" cy="35" rx="45" ry="30" fill="#FFFFFF" />
              <ellipse cx="40" cy="70" rx="30" ry="20" fill="#FFFFFF" />
              <ellipse cx="160" cy="70" rx="30" ry="20" fill="#FFFFFF" />
            </g>
            <defs>
              <filter
                id="filter0_f_1_2"
                x="0"
                y="0"
                width="200"
                height="100"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_1_2"
                />
              </filter>
            </defs>
          </svg>
          <svg
            className="absolute top-28 opacity-70 animate-drift-fast"
            width="180"
            height="120"
            viewBox="0 0 250 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter1_f_1_3)">
              <ellipse cx="60" cy="70" rx="45" ry="30" fill="#FFFFFF" />
              <ellipse cx="120" cy="50" rx="60" ry="40" fill="#FFFFFF" />
              <ellipse cx="190" cy="70" rx="50" ry="35" fill="#FFFFFF" />
              <ellipse cx="90" cy="40" rx="35" ry="25" fill="#FFFFFF" />
              <ellipse cx="160" cy="45" rx="40" ry="30" fill="#FFFFFF" />
              <ellipse cx="210" cy="80" rx="30" ry="20" fill="#FFFFFF" />
            </g>
            <defs>
              <filter
                id="filter1_f_1_3"
                x="0"
                y="0"
                width="250"
                height="120"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="6"
                  result="effect1_foregroundBlur_1_3"
                />
              </filter>
            </defs>
          </svg>
          <div className="absolute left-1/2 top-0 h-full w-[6px] bg-brown" />
          <div className="absolute left-0 top-[125px] w-full h-[6px] bg-brown" />
        </div>

        <img
          src="hero/poster.svg"
          className="absolute top-[175px] right-1/2 translate-x-[-150px] w-[175px]"
        />

        <img
          src="hero/starry-night.svg"
          className="absolute top-[325px] left-1/2 translate-x-[200px] w-[75px]"
        />

        <img
          src="hero/sunflowers.svg"
          className="absolute top-[340px] left-1/2 translate-x-[280px] h-[75px]"
        />

        <img
          src="hero/hanging-plant.svg"
          className="absolute top-[36px] left-1/2 translate-x-[100px] w-[225px]"
        />
      </div>

      <div
        className="h-[475px] w-full relative overflow-visible flex flex-col justify-center"
        style={{
          backgroundImage: "url('/hero/wood-grain.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <img
          src="/hero/laptop.svg"
          className="w-[400px] absolute left-1/2 -translate-x-1/2 top-0 -mt-[200px] z-20"
        />

        <About />
      </div>
    </div>
  );
}
