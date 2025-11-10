import "../globals.css";

export default function Hero() {
  return (
    <div>
      <div className="h-[55vh] w-full bg-cream flex">
        <div className="relative bg-gradient-to-t from-cream via-skyBlue/100 to-skyBlue mx-auto my-auto w-[250px] h-[325px] border-[6px] border-brown rounded-t-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)]">
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
        </div>
      </div>

      <div className="h-[25vh] w-full bg-brown"></div>
    </div>
  );
}
