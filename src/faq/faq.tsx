import { Link } from 'react-router-dom';
import "../globals.css"
import header from "../assets/images/faqHeader.svg";
import codebrewLogo from '../assets/icons/codebrewLogo.svg';
import SidebarMenu from './sidebarMenu';

export default function FAQ() {
    return (
        <div className="top-0 right-0 w-full flex justify-end pointer-events-none z-20 position-absolute">
            <div

                className="z-0 relative pointer-events-auto"
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
                {/* <SidebarMenu /> */}
            </div>
        </div>
    )
}