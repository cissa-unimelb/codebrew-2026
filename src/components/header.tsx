import headerImage from '../assets/images2/header.svg';
import codebrewLogo from '../assets/icons2/codebrewLogo.svg';
import '../globals.css';

export default function Header() {
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

                <div className="absolute top-[3%] left-[3%] flex items-center gap-[2vw]">
                    <span className="font-guardian-angle text-white text-[min(5vh,3vw)] leading-none">
                        CODEBREW
                    </span>
                    <img src={codebrewLogo} alt="Codebrew logo" className="w-[4vw] max-w-[100px] h-auto" />
                </div>

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

