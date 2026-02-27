import headerImage from '../assets/images/aboutHeader.svg';
import codebrewLogo from '../assets/icons/codebrewLogo.svg';
import '../globals.css';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Header() {

    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: easeOut }
    };

    return (

        <div className="top-0 right-0 w-full flex justify-end pointer-events-none z-20 position-absolute">
            <div

                className="z-0 relative pointer-events-auto"
            >
                <img
                    src={headerImage}
                    alt=""
                    className="w-full h-auto block mt-[-8vh] object-cover"
                />

                <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }} className="absolute top-[3%] left-[3%] flex items-center gap-[2vw]">
                    <Link to="/" className="flex items-center gap-[2vw] no-underline text-inherit">
                        <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">CODEBREW</span>
                        <img src={codebrewLogo} alt="Logo" className="w-[4vw] max-w-[100px]" />
                    </Link>
                </motion.div>

                <div className="absolute top-[20%] left-[4%] flex flex-col gap-[0.8vw] max-w-[100%]">
                    <span className="font-guardian-angle text-white leading-none" style={{ fontSize: 'min(5vh,3vw' }}>
                        ABOUT
                    </span>
                    <span className="font-guardian-angle text-[#C6FF00] leading-none" style={{ fontSize: 'min(5vh, 3vw)' }}>
                        CODEBREW
                    </span>
                </div>
            </div>
        </div>
    );
}

