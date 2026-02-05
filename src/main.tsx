import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css';
import Footer from './components/footer';
import Header from './components/header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen relative">
      <Header />

      <main className="flex-grow flex flex-col justify-center z-10 relative w-full pt-10 gap-y-8">
        <div className="pl-[12.5%] pr-[12.5%] flex flex-col gap-y-4">

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

        </div>
      </main>

      <Footer />
    </div>
  </StrictMode>
) 