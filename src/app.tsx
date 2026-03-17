import backgroundImage from "./assets/images/LandingPageBackground.svg";
import codebrewLogo from "./assets/icons/codebrewLogo.svg";
import cissaLogo from "./assets/icons/cissalogo.svg";

import ingeniousLogo from "./assets/images/ingenious.png";
import stemLogo from "./assets/images/stem.png";
import artsLogo from "./assets/images/arts.png";

import TrackDescriptionBoxMenuPage from "./components/menuPageTrackDescriptionBox";

import track1 from "./assets/trackDetails/track1.json";
import track2 from "./assets/trackDetails/track2.json";
import track3 from "./assets/trackDetails/track3.json";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const LandingPage = () => {
  const menuItems = [
    { type: "text", label: ".", path: "#", active: false },
    { type: "text", label: "About", path: "/about", active: true },

    { type: "text", label: ".", path: "#", active: false },
    {
      type: "imageLink",
      imgSrc: artsLogo,
      label: track2.trackTitle,
      description: track2.trackDescriptionLandingPage,
      path: "/trackTwo",
      active: true,
    },
    { type: "text", label: ".", path: "#", active: false },
    { type: "text", label: "Timeline", path: "/timeline", active: true },
    { type: "text", label: ".", path: "#", active: false },
    {
      type: "imageLink",
      imgSrc: stemLogo,
      label: track3.trackTitle,
      description: track3.trackDescriptionLandingPage,
      path: "/trackThree",
      active: true,
    },
    { type: "text", label: ".", path: "#", active: false },
    { type: "text", label: "FAQ", path: "/faq", active: true },
    { type: "text", label: ".", path: "#", active: false },
    {
      type: "imageLink",
      imgSrc: ingeniousLogo,
      label: track1.trackTitle,
      description: track1.trackDescriptionLandingPage,
      path: "/trackOne",
      active: true,
    },
  ];

  // Fade up transition
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: easeOut },
  };

  // Update the circle radius based on the viewport size
  const [radius, setRadius] = useState(750);
  // Update the hovered Track
  const [hoveredTrack, setHoveredTrack] = useState<{
    label: string;
    imgSrc: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    const updateRadius = () => {
      const minDim = Math.min(window.innerWidth, window.innerHeight);
      // Keep the orbit inside the viewport: 24%–38% of min dimension.
      const nextRadius = Math.round(
        Math.max(200, Math.min(380, minDim * 0.33)),
      );
      setRadius(nextRadius);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black font-mono"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.4 }}
        className="absolute top-[3%] left-[3%] flex items-center gap-[2vw]"
      >
        <Link
          to="/"
          className="flex items-center gap-[2vw] no-underline text-inherit"
        >
          <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">
            CODEBREW
          </span>
          <img
            src={codebrewLogo}
            alt="Logo"
            className="w-[4vw] max-w-[100px]"
          />
        </Link>
      </motion.div>

      <div className="relative z-30 flex items-center justify-center">
        {hoveredTrack ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="translate-y-[40px] translate-x-[100px] w-[min(40vw,520px)]"
          >
            <TrackDescriptionBoxMenuPage
              title={hoveredTrack.label}
              trackDescription={hoveredTrack.description}
            />
          </motion.div>
        ) : (
          <div className="w-24 h-24 rounded-full flex items-center justify-center translate-y-[30px]">
            <img
              src={codebrewLogo}
              alt="Codebrew logo"
              className="w-[4vw] max-w-[10vw] h-auto"
            />
          </div>
        )}
      </div>

      <div className="absolute bottom-[5%] right-[2%] z-30 flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center ">
          <img src={cissaLogo} alt="Cissa logo" className="h-auto" />
        </div>
      </div>

      {/* ORBITAL MENU ITEMS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative translate-y-[30px] translate-x-[-45px]">
          {menuItems.map((item, index) => {
            const angle =
              (index / menuItems.length) * 2 * Math.PI - Math.PI / 3;

            const outwardOffset = item.type === "imageLink" ? 80 : 0;
            const itemRadus = radius + outwardOffset;

            const x = Math.cos(angle) * itemRadus;
            const y = Math.sin(angle) * itemRadus;

            return (
              <div
                key={index}
                className={`absolute pointer-events-auto p-4 flex items-center justify-center w-[90px] h-[90px]`}
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${angle}rad)`,
                }}
              >
                {/* Orbit Item is a text link */}
                {item.type === "text" && (
                  <Link
                    to={item.active ? item.path : "#"}
                    className={`font-megatrans transition-all duration-300 uppercase text-[25px] tracking-widest inline-block transform-gpu
                      ${
                        item.active
                          ? "text-textBright cursor-pointer hover:brightness-125 hover:scale-110 [text-shadow:0_0_12px_rgba(198,255,0,0.8)]"
                          : "text-white/30 cursor-not-allowed pointer-events-none"
                      }`}
                  >
                    <span
                      style={{ transform: `rotate(${-angle}rad)` }}
                      className="inline-block"
                    >
                      {item.label}
                    </span>
                  </Link>
                )}

                {/* Orbit Item is an image link */}
                {item.type === "imageLink" && (
                  <Link
                    to={item.active ? item.path : "#"}
                    className="group relative pointer-events-auto flex items-center no-underline"
                    onMouseEnter={() =>
                      setHoveredTrack({
                        label: item.label,
                        imgSrc: item.imgSrc,
                        description: item.description ? item.description : "",
                      })
                    }
                    onMouseLeave={() => setHoveredTrack(null)}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.label}
                      style={{ transform: `rotate(${-angle}rad)` }}
                      className="w-[230px] h-[230px] object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(198,255,0,0.85)]"
                    />

                    {/* Span for the label next to the image. Specifically adjusted Track 1 text because spacing was off otherwise */}
                    <span
                      style={{ transform: `rotate(${-angle}rad)` }}
                      className={`whitespace-nowrap font-guardian-angle uppercase text-[30px] tracking-widest text-textBright no-underline opacity-100 transition-all duration-300 transform-gpu group-hover:scale-105 ${
                        item.label === "Track 1" ? "-ml-[50px]" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
