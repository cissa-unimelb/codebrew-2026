import "../globals.css";

import codebrewLogo from "../assets/icons/codebrewLogo.svg";
import backgroundImage from "../assets/images/timelineBackground.svg";

import { Link } from "react-router-dom";

import ScheduleCard, { EventItem, DayItem } from "./scheduleCard";

import Events from "./events.json";
import { useEffect, useRef, useState } from "react";

import { Radio } from "lucide-react";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateActiveIndex = () => {
      const children = Array.from(container.children);
      const containerRect = container.getBoundingClientRect();
      const center = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      children.forEach((child, index) => {
        const rect = (child as HTMLElement).getBoundingClientRect();
        const childCenter = rect.top + rect.height / 2;
        const distance = Math.abs(center - childCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative h-[18vh] flex items-center justify-center">
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
        <div className="absolute top-[3%] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="font-guardian-angle text-textBright text-[min(10vh,9vw)] leading-none">
            |&nbsp;&nbsp;&nbsp;TIMELINE&nbsp;&nbsp;&nbsp;|
          </span>
          <span className="mt-[0.5vh] font-space-grotesk text-white text-[min(2.6vh,2.2vw)] tracking-[0.2em] flex items-center gap-[0.6vw]">
            <Radio className="w-[1.2em] h-[1.2em] text-textBright" />
            LIVE TRACKING | {Object.values(Events).length} DAYS |{" "}
            {Object.values(Events).reduce(
              (total, day) => total + day.events.length,
              0,
            )}{" "}
            EVENTS
          </span>
        </div>

        <div className="absolute top-[3%] right-[5%] w-[12%] h-[30%] bg-[#111111] border-2 border-[#505451] flex items-center justify-center font-space-grotesk gap-[2vw]">
          <div className="flex items-center gap-[0.2vw]">
            <span className="w-[0.5vw] h-[0.5vw] bg-[#4D5564] rounded-full"></span>
            <span>INACTIVE</span>
          </div>
          <div className="flex items-center gap-[0.2vw]">
            <span className="w-[0.5vw] h-[0.5vw] bg-[#D0F953] rounded-full"></span>
            <span>ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Replace your ScheduleCard container with this */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory flex flex-col items-center
           before:content-[''] before:block before:h-[22vh] before:shrink-0
           after:content-[''] after:block after:h-[22vh] after:shrink-0"
      >
        {Object.values(Events).map((day, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          const dynamicClasses = isActive
            ? "scale-[1.1] blur-0 opacity-100 z-20"
            : `scale-[0.75] blur-[7px] opacity-30 ${
                offset < 0 ? "-translate-y-10" : "translate-y-10"
              }`;

          return (
            <div
              key={index}
              className={`snap-center min-h-[35%] flex items-center justify-center transition-all duration-500 ease-out ${dynamicClasses}`}
            >
              <ScheduleCard
                dayNumber={day.dayNumber}
                dayName={day.dayName}
                date={day.date}
                events={day.events}
              />
            </div>
          );
        })}
      </div>

      <div className="h-[8vh] flex items-center justify-center">
        <span
          className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 font-megatrans text-[#C6FF00] text-[min(2vh,1vw)] leading-none 
              text-shadow-[0_0_20px_rgba(198,255,0,0.8)]"
        >
          Scroll to navigate timeline
        </span>
      </div>
    </div>
  );
}
