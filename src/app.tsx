import backgroundImage from './assets/images/LandingPageBackground.svg';
import codebrewLogo from './assets/icons/codebrewLogo.svg';
import cissaLogo from './assets/icons/cissalogo.svg';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion';

import { Link } from 'react-router-dom';

const LandingPage = () => {
    const menuItems = [
        { label: 'FAQ', path: '/faq', active: true },
        { label: 'About', path: '/about', active: true },
        { label: 'Timeline', path: '/timeline', active: true },
        { label: 'Placeholder', path: '#', active: false },
        { label: 'Placeholder', path: '#', active: false },
        { label: 'Placeholder', path: '#', active: false },
    ];

    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: easeOut }
    };

    const radius = 280;

    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black font-mono"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }} className="absolute top-[3%] left-[3%] flex items-center gap-[2vw]">
                <Link to="/" className="flex items-center gap-[2vw] no-underline text-inherit">
                    <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">CODEBREW</span>
                    <img src={codebrewLogo} alt="Logo" className="w-[4vw] max-w-[100px]" />
                </Link>
            </motion.div>

            <div className="relative z-30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center ">
                    <img src={codebrewLogo} alt="Codebrew logo" className="w-[4vw] max-w-[10vw] h-auto" />
                </div>
            </div>

            <div className="absolute bottom-[5%] right-[2%] z-30 flex items-center justify-center">
                <div className="rounded-full flex items-center justify-center ">
                    <img src={cissaLogo} alt="Cissa logo" className="h-auto" />
                </div>
            </div>

            {/* ORBITAL MENU ITEMS */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {menuItems.map((item, index) => {
                    const angle = (index / menuItems.length) * 2 * Math.PI - Math.PI / 3;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <div
                            key={index}
                            className="absolute pointer-events-auto p-4"
                            style={{
                                transform: `translate(${x}px, ${y}px) rotate(${angle}rad)`,
                            }}
                        >
                            <Link
                                to={item.active ? item.path : "#"}
                                className={`font-megatrans transition-all duration-300 uppercase text-sm tracking-widest inline-block transform-gpu
                                        ${item.active
                                        ? 'text-[#C6FF00] cursor-pointer hover:brightness-125 hover:scale-110 [text-shadow:0_0_12px_rgba(198,255,0,0.8)]'
                                        : 'text-white/30 cursor-not-allowed pointer-events-none'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LandingPage;