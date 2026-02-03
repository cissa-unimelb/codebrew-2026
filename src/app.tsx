import NavBar from "./components/navbar"

import LandingPanel from "./panels/landing"
import AboutPanel from "./panels/about"
import SponsorsPanel from "./panels/sponsors"
import ThemesPanel from "./panels/themes"
import TimelinePanel from "./panels/timeline"
import WorkshopsPanel from "./panels/workshop"
import FAQPanel from "./panels/faq"


export default function App() {
    return (
        <div>
            <NavBar />
            <LandingPanel/>
            <section id="about" className="scroll-mt-14"><AboutPanel/></section>
            <section id="themes" className="scroll-mt-14"><ThemesPanel/></section>
            <section id="timeline" className="scroll-mt-14"><TimelinePanel/></section>
            <section id="workshops" className="scroll-mt-14"><WorkshopsPanel/></section>
            <section id="sponsors" className="scroll-mt-14"><SponsorsPanel/></section>
            <section id="faq" className="scroll-mt-14"><FAQPanel/></section>
        </div>
    )
}