
import { useState } from 'react';

import UpButton from "@/assets/icons/up.svg?react"

import RedTrack from "@/assets/images/red-track.svg"
import GreenTrack from "@/assets/images/green-track.svg"
import BlueTrack from "@/assets/images/blue-track.svg"
import WindowBar from "@/assets/images/window-bar.svg"

const themes = [
  {
    key: 'wheel',
    name: 'Reinventing the Wheel',
    bgColour: "bg-[#BF002D]",
    textColour: "text-red",
    textClass: "text-white",
    text: "For the first track in this year’s series, we want to emphasize a beginner-friendly, user-focused design. As the name suggests, your goal is not to come up with a new, ground-breaking application/website that will blow people’s mind. Rather, the objective is to recreate ideas that have already been tried and tested throughout the years. Think to the apps and websites you yourself use everyday: instead of on creativity, your submission will be assessed based on your ability to understand why those applications are so successful and whether or not you’re able to recreate that desirability. We recommend this track for beginner coders.",
    card: RedTrack,
    background: "assets/red-flask.png",
  },
  {
    key: 'ground',
    name: 'Ground Zero',
    bgColour: "bg-blue",
    textColour: "text-blue",
    textClass: "text-white",
    text: "In direct contrast to track #1, ‘Ground Zero’ is all about hard skills. In an era of abstracted tools, vibe coding, and all kinds of GPT wrappers, we wanted to give contestants a chance to return to basics and really focus on showing off pure skill and knowledge. The tl;dr of this track is ‘for coders, by coders’: contestants will be asked to create something that is either a tool for the use of other developers, or a tool that would impress other developers. Whether it be with a deep understanding of network protocols, compilers, OS, anything that shows you know your stuff! Recommended for experienced coders.",
    card: BlueTrack,
    background: "assets/blue-flask.png",
  },
  {
    key: 'blight',
    name: 'Farmer’s Blight',
    bgColour: "bg-green",
    textColour: "text-green",
    textClass: "text-black",
    text: "For the hackathon purists: our final track fits the standard experience you’re used to: a simple prompt that narrows downs the scope for your creativity. In this case: agriculture! Your goal is to research and understand issues faced by stakeholders in agriculture and then to design an application that helps address said issue. Contestants will be expected to show the ability to properly research and explain their topic of focus. Recommended for those with a good grasp of UI/UX principles.",
    card: GreenTrack,
    background: "assets/green-flask.png",
  },
];

export default function ThemesPanel() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = index !== null ? themes[index] : null;

  const prevDisabled = index === 0
  const nextDisabled = index === themes.length - 1

  const prev = () => setIndex(i => (i! + themes.length - 1) % themes.length);
  const next = () => setIndex(i => (i! + 1) % themes.length);
  const close = () => setIndex(null);

  const bg = current?.background ?? "";

  return (
    <section className="relative bg-offblack flex flex-col items-center px-6 py-16 overflow-hidden"
    style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" } : { backgroundImage: `url("assets/green-flask.png")`, backgroundSize: "contain", backgroundPosition: "right" , backgroundRepeat: "no-repeat"}}>
      <h1 className="font-abduction text-5xl text-green mb-10">THEMES</h1>

      {!open && (
        <div className="flex flex-col sm:flex-row gap-8">
          {themes.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setIndex(i)}
              className="relative flex flex-col items-center"
            >
              <img src={t.card} alt={t.name}></img>
            </button>
          ))}
        </div>
      )}

      {open && current && (
        <div className="max-w-2xl flex flex-col items-center gap-6">
          <div>
            <img src={WindowBar} className="h-[10px] sm:h-[15px] -mb-1"></img>
            <div
              className={`w-full rounded-b-md font-code text-sm p-4 text-white ${current.bgColour}`}>
              <p className={`p-4 ${current.textClass} font-semibold`}>{current.text}</p>
              <button onClick={close} className="bg-black rounded-2xl font-code text-white px-6 mt-2">Back</button>
            </div>
          </div>

          <div className="w-full flex items-center justify-between text-white">
          <button
                onClick={prev}
                disabled={prevDisabled}
                className={prevDisabled ? "opacity-50 pointer-events-none" : ""}
              >
              <UpButton className={`w-8 h-8 sm:w-12 sm:h-12 stroke-current -rotate-90 ${current.textColour}`} />
              </button>

            <div className="font-abduction text-3xl text-center">
              {current.name}
            </div>

              <button
                onClick={next}
                disabled={nextDisabled}
                className={nextDisabled ? "opacity-50 pointer-events-none" : ""}
              >
              <UpButton className={`w-8 h-8 sm:w-12 sm:h-12 stroke-current rotate-90 ${current.textColour}`} />
              </button>
            </div>
          </div>
      )}
    </section>
  );
}
   