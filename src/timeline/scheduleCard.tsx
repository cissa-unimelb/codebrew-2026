import React, { useRef } from "react";
import {
  Rocket,
  Monitor,
  TreeDeciduous,
  Star,
  Flag,
  MapPin,
  Clock,
  LucideIcon,
} from "lucide-react";
import "../globals.css";

export interface EventItem {
  startTime: string;
  endTime: string;
  name: string;
  location: string;
  colour: string;
  icon: string;
  type: string;
}

interface ScheduleCardProps {
  dayNumber?: string;
  dayName?: string;
  date?: string;
  status?: "ACTIVE" | "INACTIVE";
  events: EventItem[];
}

// Map color names to Hex for guaranteed rendering
const colorMap: Record<string, string> = {
  green: "#D0F953",
  blue: "#3b82f6",
  purple: "#a855f7",
  red: "#ef4444",
  yellow: "#eab308",
};

const IconMap = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, LucideIcon> = {
    rocket: Rocket,
    computer: Monitor,
    tree: TreeDeciduous,
    star: Star,
    flag: Flag,
  };
  const IconComponent = icons[name] || Star;
  return <IconComponent style={{ color: color }} size={20} strokeWidth={2.5} />;
};

const EventCard = ({ event }: { event: EventItem }) => {
  const hexColor = colorMap[event.colour] || event.colour;

  return (
    <div
      className="min-w-[280px] bg-[#0a0a0a] p-[15px] flex flex-col gap-4 shadow-xl shrink-0 border-l-[3px]"
      style={{ borderLeftColor: hexColor }}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div
            className="px-[5px] rounded-sm"
            style={{ backgroundColor: `${hexColor}20` }}
          >
            <IconMap name={event.icon} color={hexColor} />
          </div>
          <div className="flex flex-col">
            <div
              className="flex items-center gap-1 text-[19px] font-mono font-bold tracking-tighter font-space-grotesk"
              style={{ color: hexColor }}
            >
              <Clock
                className="px-[5px] text-[#BEC2F180]"
                size={12}
                strokeWidth={3}
              />
              <span>
                {event.startTime} &gt; {event.endTime}
              </span>
            </div>
          </div>
        </div>

        <span
          className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 border rounded-[2px] font-space-grotesk"
          style={{ borderColor: `${hexColor}40`, color: hexColor }}
        >
          {event.type}
        </span>
      </div>

      <div className="mt-1">
        <h3 className="text-white font-bold text-lg leading-tight tracking-tight font-space-grotesk">
          {event.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-2 text-[#BEC2F180] text-xs font-mono font-space-grotesk">
          <MapPin className="px-[5px] py-[10px]" size={13} />
          <span className="truncate">{event.location}</span>
        </div>
      </div>

      <div className="w-full h-[3px] mt-auto flex gap-1 overflow-hidden opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="h-full w-full rounded-full"
            style={{ backgroundColor: hexColor }}
          />
        ))}
      </div>
    </div>
  );
};

export default function ScheduleCard({
  dayNumber = "24",
  dayName = "THURSDAY",
  date = "JAN 24, 2026",
  status = "INACTIVE",
  events = [],
}: ScheduleCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const isActive = status === "ACTIVE";

  return (
    <div
      className={`relative w-[85vw] max-w-6xl border border-transparent shadow-2xl overflow-hidden rounded-[20px] ${"bg-[#0c0d0c]"}`}
    >
      <div className="flex items-start p-6 gap-4">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-[0.2VW] text-[#E5E7E8] font-guardian-angle">
            <span
              className={`text-[60px]  italic ${isActive ? "text-[#C6FF00]" : "text-[#E5E7E8]/60"} px-[20px]`}
            >
              {dayNumber}
            </span>
            <span className="text-[60px] text-[#E5E7E8]/60">&nbsp;|&nbsp;</span>
            <span className="text-[60px] italic uppercase">{dayName}</span>
          </div>
          <span className="text-zinc-500 text-xs font-mono tracking-[0.2em] uppercase mt-1 font-space-grotesk px-[20px]">
            {date}
          </span>
        </div>

        <div className="ml-auto px-[20px] py-[20px]">
          <div className="flex items-center gap-4 px-[14px] py-[10px] bg-black/70 backdrop-blur-md border border-zinc-800 rounded-md text-[22px] font-space-grotesk uppercase tracking-widest shadow-lg">
            {/* DOT */}
            <span
              className={`w-[15px] h-[15px] rounded-full ${
                isActive
                  ? "bg-[#D2FB53] shadow-[0_0_14px_#D2FB53] pulse-element"
                  : "bg-[#4D5564]"
              }`}
              style={{ display: "inline-block" }}
            />
            <div className="w-[10px] h-5 bg-zinc-700" />
            {/* STATUS */}
            <div className="flex items-center gap-3">
              {/* Text */}
              <span className={isActive ? "text-[#D2FB53]" : "text-zinc-400"}>
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Divider */}
            <div className="w-[10px] h-5 bg-zinc-700" />

            {/* Counter */}
            <span className="text-zinc-400">{events.length} Events</span>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className={`${isActive ? "bg-gradient-to-b from-[#7D9531] to-[#D2FB53]" : "bg-[#A4A4A4]"} px-6 py-8 overflow-x-auto scrollbar-custom cursor-pointer`}
      >
        <div className="flex items-start gap-8 w-max p-[20px]">
          {events.map((event, index) => (
            <div key={index} className="px-[10px]">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-custom::-webkit-scrollbar { height: 8px; }
        .scrollbar-custom::-webkit-scrollbar-track { background: #000; margin: 0; }
        .scrollbar-custom::-webkit-scrollbar-thumb { background: white; border-radius: 10px; }
      `}</style>
    </div>
  );
}
