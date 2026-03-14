import "../../globals.css";

import codebrewLogo from "../../assets/icons/codebrewLogo.svg";
import backgroundImage from "../../assets/images/timelineBackground.svg";
import trackThreeImage from "../../assets/images/stem.png";
import trackThreeDetailImage from "../../assets/images/trackThreeDescriptionBox.png";

import TrackDescriptionBox from "../../components/trackDescriptionBox";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function TrackOne() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isIntroHidden, setIsIntroHidden] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [isDetailTextVisible, setIsDetailTextVisible] = useState(false);
  const animationTimeouts = useRef<number[]>([]);

  const clearAnimationTimeouts = useCallback(() => {
    animationTimeouts.current.forEach((timeoutId) =>
      window.clearTimeout(timeoutId),
    );
    animationTimeouts.current = [];
  }, []);

  const handleSeeMoreClick = () => {
    if (isIntroHidden) {
      return;
    }

    clearAnimationTimeouts();
    setIsIntroHidden(true);

    const zoomTimeout = window.setTimeout(() => {
      setIsImageZoomed(true);
    }, 500);

    const detailTextTimeout = window.setTimeout(() => {
      setIsDetailTextVisible(true);
    }, 1300);

    animationTimeouts.current.push(zoomTimeout, detailTextTimeout);
  };

  const handleBackClick = () => {
    clearAnimationTimeouts();
    setIsDetailTextVisible(false);
    setIsImageZoomed(false);

    const introTimeout = window.setTimeout(() => {
      setIsIntroHidden(false);
    }, 600);

    animationTimeouts.current.push(introTimeout);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsImageVisible(true);
    });

    return () => {
      cancelAnimationFrame(frame);
      clearAnimationTimeouts();
    };
  }, [clearAnimationTimeouts]);

  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* header section for the codebrew logo */}
      <Link to="/" className="no-underline text-inherit">
        <div className="absolute top-[5%] left-[3%] flex items-center gap-[1vw] z-50">
          <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">
            CODEBREW
          </span>
          <img
            src={codebrewLogo}
            alt="Codebrew logo"
            className="w-[2vw] max-w-[100px] h-auto"
          />
        </div>
      </Link>

      <div className="h-full w-full flex flex-col items-center justify-between px-[8vw]">
        <div className="relative z-30 w-full flex flex-col items-center mb-[4vh] min-h-[220px]">
          <div
            className={`flex flex-col items-center gap-0 -translate-x-[5vw] translate-y-[7vw] transition-opacity duration-500 ${
              isIntroHidden ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <p className="self-center m-0 mb-[-50px] text-center font-megatrans text-white text-[30px] tracking-[0.2em] leading-none">
              Scifi-STEM
            </p>

            <h1 className="m-0 -mb-3 font-guardian-angle uppercase text-white text-[100px] tracking-[0.15em] leading-none">
              Track 3
            </h1>

            <div className="m-0 mt-[-40px] inline-flex items-center gap-3 font-megatrans text-white/80 text-[30px] tracking-[0.12em] leading-none">
              <span
                className="inline-block h-[2px] w-[120px] bg-white/80"
                aria-hidden="true"
              />
              <div className="mt-[-15px] inline-flex items-center gap-2">
                <p className="m-0 mt-[20px] text-center font-megatrans text-white text-[30px] tracking-[0.2em] leading-none px-[10px]">
                  click to see more
                </p>
                <button
                  type="button"
                  onClick={handleSeeMoreClick}
                  className="m-0 mt-[-5px] inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border-none bg-[#C6FF00] p-0 text-black transition-transform duration-300 hover:scale-110 cursor-pointer"
                  aria-label="See more"
                >
                  <FaArrowRight
                    className="h-[20px] w-[20px]"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`absolute z-40 left-0 top-1/2 translate-y-[5%] transition-all duration-900 ease-out ${
              isDetailTextVisible
                ? "translate-x-[-650px] opacity-100 delay-100"
                : "-translate-x-[1200px] opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-[min(34vw,400px)]">
              <button
                type="button"
                onClick={handleBackClick}
                className="absolute translate-x-[-70px] left-1 top-4 z-50 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border-none bg-textBright p-0 text-black transition-transform duration-300 hover:scale-110 cursor-pointer"
                aria-label="Go back"
              >
                <FaArrowLeft className="h-[20px] w-[20px]" aria-hidden="true" />
              </button>
              <TrackDescriptionBox
                trackNumber={3}
                description="This is the description for track 3"
                trackDetailImage={trackThreeDetailImage}
              />
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 transition-all duration-1000 ease-out origin-center ${
            isImageVisible
              ? "translate-y-[0px] opacity-100"
              : "translate-y-[200px] opacity-0"
          } ${isImageZoomed ? "scale-[2.5]" : "scale-100"}`}
        >
          <div className="relative w-fit -translate-x-[8vw]">
            <img
              src={trackThreeImage}
              alt="Track One"
              className="w-[min(80vw,1500px)] h-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
