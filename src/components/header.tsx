import headerImage from '../assets/images2/header.svg';
import codebrewLogo from '../assets/icons2/codebrewLogo.svg';
import '../globals.css';

export default function Header() {
    return (
        <div
            style={{ position: "fixed", top: 0, right: 0, maxWidth: "1000px" }}
            className="w-[90%] z-0 relative"
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
                <img src={codebrewLogo} alt="Codebrew logo" className="w-10 h-10" />
            </div>
            <div className="absolute top-[23%] left-[6%] flex flex-col gap-[1em]">
                <span className="font-guardian-angle text-white leading-none" style={{ fontSize: 'min(3vw, 350%)' }}>
                    ABOUT
                </span>

                <span className="font-guardian-angle text-[#C6FF00] leading-none" style={{ fontSize: 'min(3vw, 350%)' }}>
                    CODEBREW
                </span>
            </div>

        </div>
    );
}

