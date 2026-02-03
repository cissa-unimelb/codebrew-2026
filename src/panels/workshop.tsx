import { useState } from "react"

import UpButton from "@/assets/icons/up.svg?react"
import DownButton from "@/assets/icons/down.svg?react"

import BlueFolder from "@/assets/images/blue-folder.svg"
import GreenFolder from "@/assets/images/green-folder.svg"
import RedFolder from "@/assets/images/red-folder.svg"

const workshops = [
  {
    key: "backend",
    title: "Back End Workshop",
    venue: "Forum Theatre, Arts West",
    time:  "23rd April, 6:00-8:00pm",
    description: "In the first workshop of our series, participants will be guided through the fundamentals of backend: using MongoDB, making your own API, and linking everything to a front-end!",
    background: "assets/red-flask.png",
    folder: RedFolder,
    border: "border-red",
    text: "text-red",
  },
  {
    key: "frontend",
    title: "Front End Workshop",
    venue: "Malaysian Theatre, Glyn Davis",
    time:  "24th April, 10:30am-12:30pm",
    description: "Contestants will then be guided through setting up a UI through React! This will include teaching the basics of making components, various React Hooks, and utilizing basic styling libraries.",
    background: "assets/green-flask.png",
    folder: GreenFolder,
    border: "border-green",
    text: "text-green",
  },
  {
    key: "devops",
    title: "Devops Workshop",
    venue: "Forum Theatre",
    time:  "4th April, 3:00pm-5:00pm",
    description: "Finally, participants will be taught the fundamentals of DevOps. This includes principles of automating and continuous integration. For those of you collaborating on a project for the first time, this will be priceless info moving forward in your career!",
    background: "assets/blue-flask.png",
    folder: BlueFolder,
    border: "border-cyan",
    text: "text-cyan",
  },
]

export default function WorkshopCarousel() {
  const [index, setIndex] = useState(0)
  const { key, title, venue, time, description, background, folder, border, text } = workshops[index]

  const prevDisabled = index === 0
  const nextDisabled = index === workshops.length - 1

  const prev = () => {
    if (!prevDisabled) setIndex(i => i - 1)
  }
  const next = () => {
    if (!nextDisabled) setIndex(i => i + 1)
  }

  return (
    <div
      className="w-full bg-offblack bg-center py-10"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h2 className={`font-abduction text-xl sm:text-4xl text-center ${text}`}>C:\Codebrew_Workshops_Series\</h2>
  
      <div className="flex justify-center p-4 gap-2 max-w-screen-lg mx-auto">
      
        <div className={`flex p-2 gap-2 border ${border}`}>
    
          <div className={`hidden md:flex w-1/3 bg-darkgrey border ${border} p-8`}>
            <img className="object-contain" src={folder} alt="Workshop folder tree"></img>
          </div>
    
          <div className={`md:w-2/3 flex flex-col gap-2 bg-darkgrey border ${border} p-4 sm:p-10`}>
            <h3 className={`text-2xl sm:text-4xl font-abduction ${text}`}>{title}</h3>
            <span className="text-xl sm:text-2xl text-white">====================</span>
            <span className={`font-semibold font-code ${text}`}>&gt; Venue: {venue}</span>
            <span className={`font-semibold font-code ${text}`}>&gt; Date & Time: {time}</span>
            <span className="text-xl sm:text-2xl text-white">====================</span>
    
            <p className="text-sm font-code text-white">{description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button 
            onClick={prev} 
            disabled={prevDisabled}
            className={prevDisabled ? "opacity-50 pointer-events-none" : ""}
            >
              <UpButton className={`w-8 h-8 sm:w-12 sm:h-12 stroke-current ${text}`} />
          </button>
  
          <button 
            onClick={next} 
            disabled={nextDisabled}
            className={nextDisabled ? "opacity-50 pointer-events-none" : ""}
            >
              <DownButton className={`w-8 h-8 sm:w-12 sm:h-12 stroke-current ${text}`} />
          </button>
        </div>

      </div>
      
  </div>
  
  )
}



