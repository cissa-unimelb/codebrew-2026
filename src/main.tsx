import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css';
import Footer from './components/footer';
import Header from './components/header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen relative">
      <Header />

      <main className="flex-grow flex flex-col gap-4 items-center justify-center pt-24 z-10 relative">
        <p className="font-megatrans">BEEEEEEEER</p>
        <p className="font-guardian-angle">BEEEEEEEER</p>
        <p className="font-space-grotesk">BEEEEEEEER</p>
      </main>

      <Footer />
    </div>
  </StrictMode>
) 