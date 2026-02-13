import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPES & INTERFACES ---

interface TimelineEvent {
  id: string;
  time: string;
  type: 'open' | 'session' | 'challenge' | 'break' | 'closing'; // Matches your image types
  title: string;
  location: string;
  color: string;
}

interface DayData {
  id: number;
  date: string;
  fullDate: string;
  events: TimelineEvent[];
}

interface DaySectionProps {
  day: DayData;
  isActive: boolean;
}

interface EventCardProps {
  event: TimelineEvent;
}

// --- DATA ---
const TIMELINE_DATA: DayData[] = [
  {
    id: 1,
    date: "24 | THURSDAY",
    fullDate: "JAN 24, 2026",
    events: [
      { id: 'e1', time: "12:30 > 13:30", type: "open", title: "Opening Ceremony", location: "Copland Theatre", color: "#D4FF00" },
      { id: 'e2', time: "13:30 > 15:00", type: "session", title: "Coding Starts I", location: "Building 168", color: "#E0A1FF" },
      { id: 'e3', time: "16:30 > 18:00", type: "challenge", title: "Dinner", location: "The Spot", color: "#B166FF" },
      { id: 'e4', time: "18:30 > 19:30", type: "break", title: "Coding Starts II", location: "Building 168", color: "#FF4D00" },
    ]
  },
  {
    id: 2,
    date: "25 | FRIDAY",
    fullDate: "JAN 25, 2026",
    events: [
      { id: 'e5', time: "09:00 > 10:00", type: "session", title: "Morning Check-in", location: "Main Hall", color: "#00F0FF" },
    ]
  }
];

const TimelinePage: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const nextDay = () => setActiveIdx((prev) => Math.min(prev + 1, TIMELINE_DATA.length - 1));
  const prevDay = () => setActiveIdx((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-white font-sans overflow-hidden select-none">
      {/* Circuit Background Asset */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/assets/circuit-bg.png')] bg-cover bg-center" />

      <header className="relative z-10 flex justify-between items-center p-8">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#D4FF00] rounded-sm italic font-black flex items-center justify-center text-black text-xs">CB</div>
          <span className="font-black text-2xl tracking-tighter italic">CODEBREW</span>
        </div>
        
        <div className="text-center">
          <h1 className="text-5xl font-black italic tracking-tighter text-[#D4FF00]">| TIMELINE |</h1>
          <p className="text-[10px] tracking-[0.3em] text-white/60 mt-1 uppercase">
            Live Tracking | 4 Days | 19 Events
          </p>
        </div>

        <div className="flex gap-4 text-[10px] font-mono">
          <span className="flex items-center gap-1 opacity-40 uppercase"><div className="w-2 h-2 rounded-full bg-white/40"/> Inactive</span>
          <span className="flex items-center gap-1 uppercase text-[#D4FF00]"><div className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"/> Active</span>
        </div>
      </header>

      <main className="relative h-[70vh] flex flex-col items-center justify-center">
        {/* Nav Click Zones */}
        <div className="absolute top-0 w-full h-1/4 z-20 cursor-ns-resize" onClick={prevDay} />
        <div className="absolute bottom-0 w-full h-1/4 z-20 cursor-ns-resize" onClick={nextDay} />

        <div className="relative w-full max-w-6xl px-12">
          <AnimatePresence mode="popLayout">
            {TIMELINE_DATA.map((day, index) => {
              const offset = index - activeIdx;
              const isActive = offset === 0;

              if (Math.abs(offset) > 1) return null;

              return (
                <motion.div
                  key={day.id}
                  initial={{ opacity: 0, y: offset * 100, scale: 0.8 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3, 
                    y: offset * 320, 
                    scale: isActive ? 1 : 0.7,
                    zIndex: isActive ? 10 : 5,
                    filter: isActive ? 'blur(0px)' : 'blur(4px)'
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className="absolute left-0 right-0 mx-auto"
                >
                  <DaySection day={day} isActive={isActive} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      <footer className="absolute bottom-10 w-full text-center text-[10px] tracking-[0.4em] text-[#D4FF00] uppercase opacity-60">
        Scroll to navigate timeline
      </footer>
    </div>
  );
};

const DaySection: React.FC<DaySectionProps> = ({ day, isActive }) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'w-full' : 'max-w-4xl mx-auto'}`}>
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
        <div className={isActive ? 'opacity-100' : 'opacity-50'}>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase">{day.date}</h2>
          <p className="text-[10px] font-mono text-white/40">{day.fullDate}</p>
        </div>
        {isActive && (
            <div className="bg-white/5 border border-white/10 px-4 py-1 rounded text-[10px] uppercase font-mono">
                {day.events.length} Events
            </div>
        )}
      </div>

      {/* Event Cards Scroll Container */}
      <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
        {day.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div 
    className="min-w-[300px] bg-black/80 backdrop-blur-xl border-l-[3px] border-b-[4px] p-5 snap-center"
    style={{ borderColor: event.color }}
  >
    <div className="flex justify-between items-start mb-6">
      <div className="text-[11px] font-mono text-white/50">{event.time}</div>
      <div 
        className="px-2 py-0.5 text-[9px] font-black uppercase rounded-sm"
        style={{ backgroundColor: `${event.color}33`, color: event.color }}
      >
        {event.type}
      </div>
    </div>

    <h3 className="text-xl font-bold mb-6 h-12 leading-tight tracking-tighter uppercase italic">
      {event.title}
    </h3>

    <div className="text-[10px] text-white/40 font-mono tracking-widest flex items-center gap-2">
      <div className="w-1.5 h-1.5" style={{ backgroundColor: event.color }} />
      {event.location}
    </div>

    <div className="mt-4 flex gap-1">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="h-[2px] w-full bg-white/10" />
      ))}
    </div>
  </div>
);

export default TimelinePage;