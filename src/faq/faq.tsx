import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion';
import "../globals.css"
import header from "../assets/images/faqHeader.svg";
import codebrewLogo from '../assets/icons/codebrewLogo.svg';
import discord from '../assets/icons/discord.svg';
import SidebarMenu from './sidebarMenu';
import FAQSection from './questions';
import { useState } from 'react';

export default function FAQ() {
    const [activeTab, setActiveTab] = useState('location');

    // Animation variant for the text elements sliding up
    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: easeOut }
    };

    return (
        <div className="top-0 right-0 w-full flex justify-end pointer-events-none z-20 position-absolute">
            <div className="z-30 relative pointer-events-auto">
                
                {/* 1. Header Image: Slide Left to Right */}
                <motion.img
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: easeOut }}
                    src={header}
                    className="w-full h-auto block mt-[-8vh] object-cover"
                />

                {/* 2. Logo/Codebrew: Slight Delay */}
                <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }} className="absolute top-[3%] left-[3%] flex items-center gap-[2vw]">
                    <Link to="/" className="flex items-center gap-[2vw] no-underline text-inherit">
                        <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">CODEBREW</span>
                        <img src={codebrewLogo} alt="Logo" className="w-[4vw] max-w-[100px]" />
                    </Link>
                </motion.div>

                {/* 3. FAQ Title */}
                <motion.div 
                    {...fadeInUp} 
                    transition={{ ...fadeInUp.transition, delay: 0.4 }}
                    className="absolute top-[15%] left-[6%] flex flex-col gap-[0.8vw]"
                >
                    <span className="font-guardian-angle text-[#C6FF00] leading-none" style={{ fontSize: 'min(12vh, 9vw)' }}>
                        FAQ
                    </span>
                </motion.div>

                {/* 4. Sidebar Menu */}
                <motion.div 
                    {...fadeInUp} 
                    transition={{ ...fadeInUp.transition, delay: 0.4 }}
                    className="absolute top-[30%] left-[6%] pointer-events-auto w-[35%]"
                >
                    <SidebarMenu activeTab={activeTab} setActiveTab={setActiveTab} />
                </motion.div>

                {/* 5. Discord Button */}
                <motion.button 
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.4 }}
                    onClick={() => window.open('https://discord.gg/3kzRYbytVX', '_blank')} 
                    className="z-100 absolute top-[50%] left-[6%] pointer-events-auto bg-[#C6FF00] text-primary font-bold py-[2vh] px-6 rounded-[20px] w-[20%] font-megatrans flex items-center justify-center gap-[1vw] text-[2vw] transition-transform duration-200 hover:scale-105"
                >
                    <img src={discord} alt="Discord" className="w-6 h-6" /> 
                    Contact us
                </motion.button>

                {/* 6. FAQ Section (Main Content) */}
                <motion.div 
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.5 }}
                    className="absolute top-[30%] right-[10%] pointer-events-auto w-[40%]"
                >
                    <FAQSection activeCategory={activeTab} />
                </motion.div>

            </div>
        </div>
    );
}