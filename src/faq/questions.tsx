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
    { q: "Do you sell beer?", a: "check the next answer" },
    { q: "Do you sell beer?", a: "check the next answer" },
    { q: "Do you sell beer?", a: "check the next answer" },
    { q: "Do you sell beer?", a: "check the next answer" },
    { q: "Do you sell beer?", a: "check the next answer" },
    { q: "Do you sell beer?", a: "yes! yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!yes!" },

  ],
  people: [
    { q: "Do you sell wine?", a: "no!" },
  ],
  resources: [
    { q: "What about spirits?", a: "NO! BEER ONLY" }
  ]
};

const FAQSection: React.FC<FAQSectionProps> = ({ activeCategory }) => {
  const categoryKey = activeCategory || 'location';
  const questions = FAQ_DATABASE[categoryKey] || [];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
  }, [categoryKey]);

  return (
    <div className="w-full bg-transparent"> 
      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={`${categoryKey}-${index}`} className="border-b border-[#c6ff00] py-[3vh]">
            <button 
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full py-10 px-0 flex justify-between items-center text-left bg-transparent border-none outline-none focus:outline-none focus:ring-0 appearance-none cursor-pointer group"
            >

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