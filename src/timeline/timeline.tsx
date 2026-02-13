import "../globals.css"

import codebrewLogo from '../assets/icons/codebrewLogo.svg';
import backgroundImage from '../assets/images/timelineBackground.svg';

import { Link } from 'react-router-dom';  

export default function Timeline() {
    return (
        <div className="w-full h-screen flex items-center justify-center"
        style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
        >
        
          <Link to="/" className="no-underline text-inherit">
               <div className="absolute top-[5%] left-[3%] flex items-center gap-[1vw] z-50">
                  <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">
                      CODEBREW
                  </span>
                  <img src={codebrewLogo} alt="Codebrew logo" className="w-[2vw] max-w-[100px] h-auto" />
                </div>
            </Link>
            <span className="absolute top-[3%] left-1/2 transform -translate-x-1/2 font-guardian-angle text-textBright text-[min(10vh,9vw)] leading-none">
                |&nbsp;&nbsp;&nbsp;TIMELINE&nbsp;&nbsp;&nbsp;|
            </span>

            <div className="absolute top-[3%] right-[5%] w-[12%] h-[5%] bg-[#111111] border-2 border-[#BEC2F1] flex items-center justify-center font-space-grotesk gap-[2vw]">
              <div className="flex items-center gap-[0.2vw]">
                <span className="w-[0.5vw] h-[0.5vw] bg-[#4D5564] rounded-full"></span>
                <span>INACTIVE</span>
              </div>
              <div className="flex items-center gap-[0.2vw]">
                <span className="w-[0.5vw] h-[0.5vw] bg-[#D0F953] rounded-full"></span>
                <span>ACTIVE</span>
              </div>
            </div>

            <span className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 font-megatrans text-[#C6FF00] text-[min(2vh,1vw)] leading-none 
            text-shadow-[0_0_20px_rgba(198,255,0,0.8)]">
              Scroll to navigate timeline  
            </span>
        </div>
    );
}
