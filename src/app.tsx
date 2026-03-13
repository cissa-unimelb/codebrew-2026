import backgroundImage from "./assets/images/LandingPageBackground.svg";
import codebrewLogo from "./assets/icons/codebrewLogo.svg";
import cissaLogo from "./assets/icons/cissalogo.svg";
import ingeniousLogo from "./assets/images/ingenious.png";
import stemLogo from "./assets/images/stem.png";
import artsLogo from "./assets/images/arts.png";
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
      label: "Track 2",
      labelPosition: "right",
      path: "/trackTwo",
      active: true,
    },
    { type: "text", label: ".", path: "#", active: false },
    { type: "text", label: "Timeline", path: "/timeline", active: true },
    { type: "text", label: ".", path: "#", active: false },
    {
      type: "imageLink",
      imgSrc: stemLogo,
      label: "Track 3",
      labelPosition: "left",
      path: "/trackThree",
      active: true,
    },
    { type: "text", label: ".", path: "#", active: false },
    { type: "text", label: "FAQ", path: "/faq", active: true },
    { type: "text", label: ".", path: "#", active: false },
    {
      type: "imageLink",
      imgSrc: ingeniousLogo,
      label: "Track 1",
      labelPosition: "right",
      path: "/trackOne",
      active: true,
    },
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: easeOut },
  };

  // Update the circle radius based on the viewport size
  const [radius, setRadius] = useState(750);

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
        <div className="w-24 h-24 rounded-full flex items-center justify-center ">
          <img
            src={codebrewLogo}
            alt="Codebrew logo"
            className="w-[4vw] max-w-[10vw] h-auto"
          />
        </div>
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
                className="absolute pointer-events-auto p-4 w-[90px] h-[90px] flex items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${angle}rad)`,
                }}
              >
                {/* Menu Item is a text link */}
                {item.type === "text" && (
                  <Link
                    to={item.active ? item.path : "#"}
                    className={`font-megatrans transition-all duration-300 uppercase text-[20px] tracking-widest inline-block transform-gpu
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

                {/* Menu Item is an image link */}
                {item.type === "imageLink" && (
                  <Link
                    to={item.active ? item.path : "#"}
                    className="group relative pointer-events-auto flex items-center"
                  >
                    <span className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-textBright/60 via-textBright/20 to-transparent blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <img
                      src={item.imgSrc}
                      alt={item.label}
                      style={{ transform: `rotate(${-angle}rad)` }}
                      className="w-[230px] h-[230px] object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(198,255,0,0.85)]"
                    />
                    <span
                      style={{ transform: `rotate(${-angle}rad)` }}
                      className="inline-flex items-center"
                    >
                      <span className="whitespace-nowrap font-guardian-angle uppercase text-[30px] tracking-widest text-textBright no-underline opacity-100 translate-x-0 transition-all duration-300 transform-gpu group-hover:scale-105">
                        {item.label}
                      </span>
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
