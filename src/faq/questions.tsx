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
    { q: "What is Codebrew?", a: "Codebrew is CISSA’s annual flagship hackathon and one of the largest hackathons in Melbourne. Over a ~72 hour period, participants will have a chance to ideate, innovate and develop a tech project from scratch. It is a chance to compete for prizes, socialize with fellow contestants, and meet industry professionals over an exhilarating 4 days!" },
    { q: "What are the prizes?", a: "There is a prize pool worth over $1.9k to be won this year! Participants will have the opportunity to let their creation shine in the 7 different prize categories on offer." },
    { q: "When is Codebrew?", a: "Codebrew will be held over 4 days from April 9th to April 12th." },
    { q: "Where will Codebrew be held?", a: "Codebrew will be held at multiple venues on campus at the University of Melbourne over the 4 days" },
    { q: "Will food be provided?", a: "Yes, we will provide food and drinks for all 4 days of Codebrew to all participants!" },
    { q: "Am I required to be on campus the entire time?", a: "Attendance is not mandatory or checked at this event. We have booked our rooms around campus over the 4 days for the Opening Ceremony, Closing Ceremony and periods in between to give participants a space to collaborate and seek help from mentors. Study areas on campus will be booked out from 9:00am to 10:00pm on days 2 and 3 for participants to use." },
    { q: "What are this year’s tracks?", a: "There will be 3 tracks this year, all unveiled at the Opening Ceremony where we will provide more details about what each track entails and the expectations for each. The tracks will give a clear outline of what we’re looking for in submissions and will be distinct enough that all contestants, regardless of interest, ideas and skill level, will be able to let their imagination run wild!"},
  ],
  people: [
    { q: "What are the team requirements?", a: "o	Teams must have at least 3 members, with a max of 5 members per team. To be eligible to win any prizes, a team must have AT LEAST ONE University of Melbourne student on the team. Teams who are smaller than 3 members will be asked to merge!" },
    { q: "I don’t have a team yet. Can I still join?", a: "o	We will have a team forming exercise right after the Opening Ceremony for those who do not have a team or for those who do not yet meet the team requirements. Additionally, participants may also find teammates through the channel on the Codebrew Discord server!"},
    { q: "How will mentoring work?", a: "We will have mentoring sessions available for participants from Opening Ceremony until submissions are due. Mentors will be experienced representatives from industry and the university who will be available during the hacking periods to help participants. Teams will be able to seek support from mentors by putting in a mentoring request in the Codebrew Discord server when needed with details such as their location and issue(s)."},
    { q: "Is the use of AI allowed?", a: "While the use of AI is allowed, we want you to be the one responsible for ideating and implementing your submission. Submissions that rely heavily on AI-generated content without logical depth or reasoning are strongly discouraged and will be evaluated accordingly in the submission’s final result."},
  ],
  resources: [
    { q: "Where can I find all these resources?", a: "Well first of all, all the relevant information will be first and foremost be on this website, other than that you can find the general information and all subsequent update on our Discord server for Codebrew 2026!" }
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