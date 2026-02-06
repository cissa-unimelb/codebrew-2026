import headerImage from '../assets/images2/header.svg';
import codebrewLogo from '../assets/icons2/codebrewLogo.svg';
import '../globals.css';

export default function Header() {
    return (

        <div className="fixed top-0 right-0 w-full flex justify-end pointer-events-none z-20">
            <div
                style={{ maxWidth: "1000px" }}
                className="w-[90%] z-0 relative pointer-events-auto"
            >
                <img
                    src={headerImage}
                    alt=""
                    className="w-full h-auto block"
                />

                <div className="absolute top-[6%] left-[6%] flex items-center gap-[2vw]">
                    <span className="font-guardian-angle text-white text-[2.5vw] leading-none">
                        CODEBREW
                    </span>
                    <img src={codebrewLogo} alt="Codebrew logo" className="w-[4vw] max-w-[40px] h-auto" />
                </div>

                <div className="absolute top-[22%] left-[6%] flex flex-col gap-[0.5vw] max-w-[45%]">
                    <span className="font-guardian-angle text-white leading-none" style={{ fontSize: 'min(3.5vw, 45px)' }}>
                        ABOUT
                    </span>
                    <span className="font-guardian-angle text-[#C6FF00] leading-none" style={{ fontSize: 'min(3.5vw, 45px)' }}>
                        CODEBREW
                    </span>
                </div>
            </div>
        </div>
    );
}

