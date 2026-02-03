import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './globals.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <p className="font-megatrans">BEEEEEEEER</p>
      <p className="font-guardian-angle">BEEEEEEEER</p>
      <p className="font-space-grotesk">BEEEEEEEER</p>
    </main>
  </StrictMode>
)
