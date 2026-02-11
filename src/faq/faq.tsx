import { Link } from 'react-router-dom';
import "../globals.css"
import header from "../assets/images/faqHeader.svg";
import codebrewLogo from '../assets/icons/codebrewLogo.svg';
import discord from '../assets/icons/discord.svg';

import SidebarMenu from './sidebarMenu';
import FAQSection from './questions';

import { useState } from 'react';

export default function FAQ() {
    const [activeTab, setActiveTab] = useState('location');
    return (
        <div className="top-0 right-0 w-full flex justify-end pointer-events-none z-20 position-absolute">
            <div

                className="z-30 relative pointer-events-auto"
            >
                <img
                    src={header}
                    alt=""
                    className="w-full h-auto block mt-[-8vh] object-cover"
                />

                <Link to="/" className="no-underline text-inherit">
                    <div className="absolute top-[3%] left-[3%] flex items-center gap-[2vw]">
                        <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">
                            CODEBREW
                        </span>
                        <img src={codebrewLogo} alt="Codebrew logo" className="w-[4vw] max-w-[100px] h-auto" />
                    </div>
                </Link>

                <div className="absolute top-[15%] left-[6%] flex flex-col gap-[0.8vw] max-w-[100%]">
                    <span className="font-guardian-angle text-[#C6FF00] leading-none" style={{ fontSize: 'min(12vh, 9vw)' }}>
                        FAQ
                    </span>
                </div>
                <div className="absolute top-[30%] left-[6%] pointer-events-auto w-[35%]">
                    <SidebarMenu activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                <button 
                    onClick={() => window.open('https://discord.gg/3kzRYbytVX', '_blank')} 
                    className="z-100 absolute top-[50%] left-[6%] pointer-events-auto bg-[#C6FF00] text-primary font-bold py-[2vh] px-6 rounded-[20px] w-[20%] 
                    font-megatrans text-center flex items-center justify-center gap-[1vw] text-[2vw] transition-transform duration-200 hover:scale-105"
                >
                    <img src={discord} alt="Discord" className="w-6 h-6 inline mr-2" /> 
                    Contact us
                </button>

                <div className="absolute top-[30%] right-[10%] pointer-events-auto w-[40%]">
                    <FAQSection activeCategory={activeTab} />
                </div>

            </div>
        </div>
    )
}