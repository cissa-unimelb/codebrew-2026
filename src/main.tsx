import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import './globals.css';

import Home from './app';
import About from './about/about';
import FAQ from './faq/faq';
import TimelinePage from './timeline/timeline';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)