import '../globals.css';
import Footer from './footer';
import Header from './header';
import aboutSquare from '../assets/images/aboutSquare.svg';

const cardData = [
  { title: "MENTORS", text: "We have excellent mentors and judges from companies like Canva, Atlassian, Twillio, Lyra, and etc" },
  { title: "PRIZES", text: "With a prize pool of 1.95k AUD it is impossible to ignore the possibilities" },
  { title: "AWARDS", text: "Codebrew is recognized within the industry as a serious hackathon to participate in" },
  { title: "CONNECT", text: "Connect with our varied amount of connections from prestigious to wise alumnis" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <Header />

      <main className="flex grow flex-col justify-center z-100 relative w-full mt-[-55vh] mb-[25vh]">
      
        <div className="px-[12.5%] flex flex-col gap-y-4 mx-full ">

          <div className="flex flex-col gap-y-[0.25em]">
            <h2 className="font-megatrans text-[2.5vw] tracking-wide ml-[-3vw]">WHAT IS THIS EVENT?</h2>
            <div className="flex flex-row items-baseline gap-x-[2em]">
              <span className="text-[1.2vw] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-[1.2vw] opacity-90 leading-relaxed">
                Codebrew is CISSA’s annual flagship hackathon and one of the largest hackathons in Melbourne. 
                Over a ~72 hour period, participants will have a chance to ideate, innovate and develop a tech project from scratch. 
                It is a chance to compete for prizes, socialize with fellow contestants, and meet industry professionals over an exhilarating 4 days!
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-megatrans text-[2.5vw] tracking-wide ml-[-3vw]">WHAT IS INCLUDED?</h2>
          </div>


          <div className="grid grid-cols-4 gap-6 w-full">
            {cardData.map((card, i) => (
            <div key={i} className="group relative w-full aspect-square cursor-pointer">
              
              <img
                src={aboutSquare}
                alt=""
                className="absolute inset-0 w-[90%] h-full object-fill transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(198,255,0,0.8)]"
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
            <h2 className="font-megatrans text-[2.5vw] tracking-wide ml-[-3vw]">WHAT CAN I GET OUT OF IT?</h2>
            <div className="flex flex-row items-baseline gap-x-[2em]">
              <span className="text-[1vw] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-[1.2vw] opacity-90 leading-relaxed">
                Create a product that you are proud of instead of procastinating and never finishing a project
              </p>

              <span className="text-[1vw] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-[1.2vw] opacity-90 leading-relaxed">
                Create life long memories along friends whilst burning your passion for an interesting problem
              </p>
            </div>
            <div className="flex flex-row items-baseline gap-x-[2em]">
              <span className="text-[1vw] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-[1.2vw] opacity-90 leading-relaxed">
                Explore the true limits and possibilities of your abilities
              </p>

              <span className="text-[1vw] pt-[0.4em] opacity-90 flex-shrink-0">
                ▶
              </span>

              <p className="font-space-grotesk text-[1.2vw] opacity-90 leading-relaxed">
                Network and connect with likeminded individuals, opening doors to the unforeseeable bright future
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
) 
}