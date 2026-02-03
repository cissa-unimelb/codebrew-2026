import Challenge from "@/assets/icons/challenge.svg"
import Food from "@/assets/icons/food.svg"
import Goodies from "@/assets/icons/goodies.svg"
import Mentors from "@/assets/icons/mentors.svg"
import Prizes from "@/assets/icons/prizes.svg"
import Social from "@/assets/icons/social.svg"
import Workshops from "@/assets/icons/workshops.svg"

const benefits = [
  {
    title: 'Workshops',
    icon: Workshops,
    description: 'Attend workshops taught by industry professionals covering Front End, Back End and Git.',
  },
  {
    title: 'Prizes',
    icon: Prizes,
    description: 'With 8 different prize categories for a total pool of $2.7k, there are plenty of different categories within which your team can shine!',
  },
  {
    title: 'Mentors',
    icon: Mentors,
    description: 'Codebrew gives participants the opportunity to receive direct feedback from industry professionals. Receive tips, advice and inspiration from several mentors throughout the event. ',
  },
  {
    title: 'Free Food',
    icon: Food,
    description: 'With $4.5k+ worth of food and Red Bull, we’ll be sure to keep you and your team energised throughout the event!',
  },
  {
    title: 'Challenge Rewards',
    icon: Challenge,
    description: 'Participate in mini-competitions throughout the event for the chance to win gift cards!',
  },
  {
    title: 'Goodies',
    icon: Goodies,
    description: 'Free care packs, including CISSA freebies and sponsor merch!',
  },
  {
    title: 'Connect & Get Social',
    icon: Social,
    description: 'Get to know your fellow contestants, both, while you work on your submissions and during the final project showcase.',
  },
];

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

function BenefitCard({ icon, title, description }: CardProps) {
  return (
    <div className="max-w-2xs space-y-2">
      <header className="flex items-center gap-3">
        <img src={icon} className="h-7 w-7" alt={`${title} icon`}/>
        <h3 className="font-abduction text-xl text-white">{title}</h3>
      </header>
      <p className="font-code text-sm text-white leading-tight">{description}</p>
    </div>
  );
}

export default function About() {
    return (
        <div className="w-full h-auto bg-offblack sm:space-y-10">
            <div className="flex flex-col items-center space-y-8 p-8">
                <h2 className="text-2xl sm:text-4xl font-bold font-abduction text-white">WAIT, WHAT'S THIS?</h2>
                <div className="flex sm:flex-row flex-col items-center gap-10">
                    <p className="max-w-sm text-white font-code font-semibold leading-tight text-center sm:text-left">Codebrew is a 72-hour hackathon event where you, and your team, rapidly and collaboratively brainstorm, engineer and create a web or mobile application.</p>
                    <ul className="text-white font-code list-none">
                    {[
                      'Students of all skill levels are welcome',
                      'Develop your technical knowledge',
                      'Turn innovative ideas into reality',
                      'Connect with experienced mentor',
                      'Up‑skill yourself with our prep workshops_',
                    ].map((line, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span aria-hidden="true">{'>'}</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-8 p-8">
                <h2 className="text-2xl sm:text-4xl font-abduction text-white">What’s in it for me?</h2>
                <p className="max-w-xl sm:text-lg font-code text-white font-semibold text-center leading-tight">Whether you want to strengthen existing skills or learn new ones  Codebrew is the perfect opportunity to level-up and we’ve also sweetened the deal with some wicked prizes.</p>
                <div className="flex flex-wrap justify-center gap-6 mt-5">
                  {benefits.map((b) => (
                    <BenefitCard key={b.title} {...b} />
                  ))}
                </div>
            </div>
        </div>
    )
}
  