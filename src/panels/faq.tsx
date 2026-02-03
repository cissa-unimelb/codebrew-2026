import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronRight } from "react-icons/fa";
import Flask from "@/assets/flask.gif"

export default function FAQPanel() {
  const faqs = [
    {
      question: "Is it all in-person?",
      answer: (
        <>
          While attendance is not mandatory, we will have areas of campus booked
          out for the Opening Ceremony, Closing Ceremony, and the periods in
          between. Study areas will be booked on campus from early morning
          (10:00am) to late evening (9:00pm) to ensure all contestants have a
          space where they can collaborate with teammates!
        </>
      ),
    },
    {
      question: "Will there be catering?",
      answer: (
        <>
          Yes! There will be food and drinks provided for all days of the
          hackathon! This event is also supported by RedBull, so the energy
          stays high!
        </>
      ),
    },
    {
      question: "How will mentoring work?",
      answer: (
        <>
          We will have mentoring sessions starting from day 1 right after the
          Opening Ceremony. Mentors will introduce themselves to contestants and
          wander around a bit. Teams will also be able to use Discord to put in
          official mentoring requests with their location and issue.
        </>
      ),
    },
    {
      question: "How do I find a team?",
      answer: (
        <>
          There will be a team-forming exercise right after the Opening Ceremony
          for those who do not have a team! In addition, the Discord server will
          also have a team-finding forum!
        </>
      ),
    },
    {
      question: "Where can I find updates on the hackathon?",
      answer: (
        <>
          Please use the Codebrew Discord server as all announcements during the
          event will be posted there!
        </>
      ),
    },
  ];

  return (
    <div className="bg-offblack p-8 xl:px-40 lg:px-20">
        <div className="flex md:flex-row flex-col justify-center space-y-8">

            <div className="w-full">
                
                <h1 className="font-abduction text-5xl text-green mb-8">FAQ</h1>

                <Accordion.Root type="single" collapsible>
                    {faqs.map((f, idx) => (
                    <Accordion.Item
                        key={idx}
                        value={`item-${idx + 1}`}
                        className="border border-green"
                    >
                        <Accordion.Header>
                            <Accordion.Trigger className="group flex justify-between items-center w-full px-6 py-4 text-white">
                                <span className="text-sm text-sm font-code font-semibold text-left">{f.question}</span>
                                <FaChevronRight className="sm:h-4 sm:w-4 w-3 h-3 transition-transform duration-300 group-data-[state=open]:rotate-90"/>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="px-6 pb-6 pt-2 text-white text-sm font-code">
                        {f.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>

            <div className="flex flex-col items-end text-white gap-8 md:m-20">
          
                <div className="text-right">
                    <p className="uppercase text-md font-code font-semibold">
                        Can’t find the answer?
                    </p>
                    <p className="italic font-code">
                        Shoot us a message in the Codebrew Discord.
                    </p>
                </div>

                <img className="h-40 w-40" src={Flask}></img>

                <a
                    href="https://discord.gg/3gHkcjUj"
                    rel="external noreferrer"
                    className="bg-green text-black font-abduction px-6 py-2 rounded-xl">
                    Our Discord
                </a>
            </div>

        </div>
    </div>
    );
}
