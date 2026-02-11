import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

interface FAQData {
  q: string;
  a: string;
}

interface FAQSectionProps {
  activeCategory: string;
}

const FAQ_DATABASE: Record<string, FAQData[]> = {
  location: [
    { q: "Where is the Melbourne office?", a: "We are located in Parkville, right near the university precinct." },
    { q: "Is there parking available?", a: "Yes, underground parking is available for all staff and visitors." },
  ],
  people: [
    { q: "Who is the lead?", a: "Our engineering team is led by UniMelb alumni." },
  ],
  resources: [
    { q: "Access hours?", a: "24/7 for authorized personnel." }
  ]
};

const FAQSection: React.FC<FAQSectionProps> = ({ activeCategory }) => {
  const categoryKey = activeCategory || 'location';
  const questions = FAQ_DATABASE[categoryKey] || [];
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [categoryKey]);

  return (
    <div className="w-full bg-transparent"> 
      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={`${categoryKey}-${index}`} className="border-b border-[#c6ff00]">
            <button 
              onClick={() => setOpenIndex(isOpen ? null : index)}
              // 1. Increased py-6 to py-10 for much more vertical room
              // 2. Added px-0 to ensure it's flush with the left side
              className="w-full py-10 px-0 flex justify-between items-center text-left bg-transparent border-none outline-none focus:outline-none focus:ring-0 appearance-none cursor-pointer group"
            >
              {/* Force alignment by ensuring no padding/margin on the left */}
              <span className="text-[#FFFFFF] font-bold text-[1.2vw] pr-8 no-underline font-space-grotesk leading-none">
                {item.q}
              </span>
              
              <div className={`
                text-[#c6ff00] transition-transform duration-300 ease-in-out flex-shrink-0
                ${isOpen ? 'rotate-45' : 'rotate-0'}
              `}>
                <Plus className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
              </div>
            </button>
            
            <div 
              className={`
                grid transition-all duration-300 ease-in-out
                ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
              `}
            >
              <div className="overflow-hidden">
                {/* 3. Removed left padding to ensure vertical alignment with the question text */}
                <p className="text-[#E5E7E8] text-lg md:text-xl leading-relaxed pb-10 pr-12 font-space-grotesk">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQSection;