import backgroundImage from "./assets/images/LandingPageBackground.svg";
import cissaLogo from "./assets/icons/cissalogo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import starMap from "./assets/images/starMap.png";
import "./loadingPage.css";
import crossLines from "./assets/images/crossLines.png";
import frameLines from "./assets/images/frame_lines.png";

const App = () => {
  const [isSharp, setIsSharp] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsSharp(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-primary text-text flex items-center justify-center font-space-grotesk"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={cissaLogo}
        alt="CISSA"
        className="absolute top-0 left-1/2 -translate-x-1/2  translate-y-[-370px] h-8 md:h-10 z-20"
      />
      {/* Star map lines */}
      {isSharp && (
        <img
          src={crossLines}
          alt="Cross Lines"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[220px] z-10 w-[600px] h-auto opacity-0 fade-in"
        />
      )}
      {isSharp && (
        <img
          src={frameLines}
          alt="Frame Lines"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[380px] z-10 w-[1400px] h-auto opacity-0 fade-in"
        />
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-guardian-angle text-[clamp(2.8rem,6vw,4.6rem)] tracking-[0.1em] text-[#E6E6E6] drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)]">
          CODEBREW
        </h1>
        <p className="font-megatrans mt-2 text-[30px] translate-y-[-60px] text-white/70 tracking-[0.25em]">
          <span
            className={`transition-opacity duration-700 ${
              isSharp ? "opacity-100" : "opacity-0"
            }`}
          >
            Star Map Ready
          </span>
        </p>
        <div
          className="relative mt-8 flex items-center justify-center translate-y-[-70px]"
          style={{ width: "min(70vw, 380px)", height: "min(70vw, 380px)" }}
        >
          <div
            className={isSharp ? "orbit-ring" : "orbit-ring orbit-ring-loading"}
          />
          <Link
            to="/landingPage"
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-[1.03]"
            aria-label="Enter the star map"
          >
            <img
              src={starMap}
              alt="Star Map"
              className={`rounded-full w-[350px] h-auto transition-all duration-[1200ms] ease-out ${
                isSharp ? "blur-0 opacity-100" : "blur-[14px] opacity-70"
              }`}
            />
          </Link>
        </div>

        {isSharp ? (
          <Link
            to="/landingPage"
            className="mt-6 translate-y-[-50px] text-[20px] text-textBright tracking-[0.15em] no-underline hover:brightness-125 fade-in"
          >
            Click to enter the star map
          </Link>
        ) : (
          <span className="mt-6 translate-y-[-70px] text-[20px] opacity-0">
            Blank
          </span>
        )}
      </div>
    </div>
  );
};

export default App;
