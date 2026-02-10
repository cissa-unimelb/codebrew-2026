import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col items-center justify-center bg-black text-white px-4">
                <h1 className="font-megatrans text-6xl md:text-8xl mb-6 tracking-tighter">
                    CODEBREW
                </h1>

                <Link
                    to="/about"
                    className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest transition-all hover:bg-white font-space-grotesk text-lg"
                >
                    <span className="relative z-10">ABOUT</span>
                    <div className="absolute inset-0 bg-primary blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                </Link>
                <Link
                    to="/faq"
                    className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest transition-all hover:bg-white font-space-grotesk text-lg"
                >
                    <span className="relative z-10">FAQ</span>
                    <div className="absolute inset-0 bg-primary blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                </Link>
            </main>
        </div>
    );
}