import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./globals.css";

import Home from "./app";
import About from "./about/about";
import FAQ from "./faq/faq";
import Timeline from "./timeline/timeline";
import TrackOne from "./tracks/trackOne/trackOneStartPage";
import TrackTwo from "./tracks/trackTwo/trackTwoStartPage";
import TrackThree from "./tracks/trackThree/trackThreeStartPage";
import LandingPage from "./landingPage/landingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/trackOne" element={<TrackOne />} />
        <Route path="/trackTwo" element={<TrackTwo />} />
        <Route path="/trackThree" element={<TrackThree />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
