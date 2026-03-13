import "../../globals.css";

import codebrewLogo from "../../assets/icons/codebrewLogo.svg";
import backgroundImage from "../../assets/images/timelineBackground.svg";
import trackOneImage from "../../assets/images/ingenious.png";
import trackOneDetailImage from "../../assets/images/trackOneDescriptionBox.png";

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

      <div className="h-full w-full flex items-center justify-between px-[8vw]">
        <div className="relative z-30 w-[42vw] min-h-[320px]">
          <div
            className={`absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start gap-0 transition-opacity duration-500 ${
              isIntroHidden ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <p className="self-center m-0 mb-[-50px] text-center font-megatrans text-white text-[30px] tracking-[0.2em] leading-none">
              Scifi-STEM
            </p>

            <h1 className="m-0 -mb-3 font-guardian-angle uppercase text-white text-[100px] tracking-[0.15em] leading-none">
              Track 1
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
            className={`absolute z-40 left-0 top-1/2 -translate-y-[45%] transition-all duration-900 ease-out ${
              isDetailTextVisible
                ? "translate-x-0 opacity-100 delay-100"
                : "-translate-x-[28vw] opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-[min(34vw,400px)]">
              <button
                type="button"
                onClick={handleBackClick}
                className="absolute translate-x-[-70px] left-1 top-4 z-50 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border-none bg-textBright p-0 text-black transition-transform duration-300 hover:scale-110 cursor-pointer"
                aria-label="Go back"
              >
                <FaArrowLeft className="h-[16px] w-[16px]" aria-hidden="true" />
              </button>
              <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center">
                <p className="m-0 text-red-500 text-[50px] font-guardian-angle translate-x-[20px] translate-y-[-30px]">
                  Track 1
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center w-[300px] translate-x-[90px]">
                <p className="m-0 text-red-500 text-[17px] font-space-grotesk translate-x-[10px] translate-y-[70px]">
                  Lorem ipsum dolor sit amet consectetur. In eget vitae
                  adipiscing pulvinar turpis molestie. Placerat cursus dictum
                  odio sapien quisque pretium. Pulvinar amet malesuada orci nisi
                  in. Neque neque cursus porta aliquam eleifend turpis ut
                  aliquam. Sodales penatibus sollicitudin amet turpis enim
                  tincidunt nunc aliquam. Quis viverra tempor erat pharetra
                  lectus odio commodo. Molestie pellentesque enim tortor pretium
                  nunc
                </p>
              </div>
              <img
                src={trackOneDetailImage}
                alt="Track 1 detail"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 transition-all duration-1000 ease-out origin-center ${
            isImageVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[120px] opacity-0"
          } ${isImageZoomed ? "scale-[2.5]" : "scale-100"}`}
        >
          <div className="relative w-fit -translate-x-[8vw]">
            <img
              src={trackOneImage}
              alt="Track One"
              className="w-[min(50vw,1500px)] h-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
