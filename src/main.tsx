import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css';
import Footer from './components/footer';
import Header from './components/header';

import aboutSquare from './assets/images2/aboutSquare.svg';

const cardData = [
  { title: "MENTORS", text: "Lorem ipsum dolor sit amet hell hello hello hellohello hello  hello ..." },
  { title: "PRIZES", text: "Lorem ipsum dolor sit amet..." },
  { title: "AWARDS", text: "Lorem ipsum dolor sit amet..." },
  { title: "CONNECT", text: "Lorem ipsum dolor sit amet..." },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen relative ">
      <Header />

      <main className="flex grow flex-col justify-center z-10 relative w-full pt-[10vh]">
      
        <div className="px-[12.5%] flex flex-col gap-y-4 mx-full max-h-[55vh] overflow-y-auto">

          <div className="flex flex-col gap-y-[0.25em]">
            <h2 className="font-megatrans text-4xl tracking-wide font-light">WHAT IS THIS EVENT?</h2>
            <div className="flex flex-row items-baseline gap-x-[2em]">
              <span className="text-[10px] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-sm opacity-90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-megatrans text-4xl tracking-wide font-light">WHAT IS INCLUDED?</h2>
          </div>


          <div className="grid grid-cols-4 gap-6 w-full">
            {cardData.map((card, i) => (
              <div key={i} className="relative w-full aspect-square">

                <img
                  src={aboutSquare}
                  alt=""

                  className="absolute inset-0 w-[90%] h-full object-fill"
                />
                <div className="absolute inset-0 w-[90%] h-full pointer-events-none">
                  
                  <h3 className="absolute top-[3%] left-[6%] font-megatrans text-[clamp(0.8rem,1.4vw,1.8rem)] uppercase font-bold leading-none text-primary">
                    {card.title}
                  </h3>

                  <div className="absolute top-[22%] bottom-[12%] left-[15%] right-[15%] flex items-center justify-center">
                    <p className="font-space-grotesk text-[clamp(0.1rem,0.75vw,1rem)] text-text opacity-90 leading-normal text-center">
                      {card.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <h2 className="font-megatrans text-4xl tracking-wide font-light">WHAT CAN I GET OUT OF IT?</h2>
            <div className="flex flex-row items-baseline gap-x-[2em]">
              <span className="text-[10px] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-sm opacity-90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>

              <span className="text-[10px] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-sm opacity-90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
            <div className="flex flex-row items-baseline gap-x-[2em]">
              <span className="text-[10px] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-sm opacity-90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>

              <span className="text-[10px] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-sm opacity-90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  </StrictMode>
) 