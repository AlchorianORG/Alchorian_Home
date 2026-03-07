import { FocusCards } from "@/components/ui/focus-cards";
import { Reveal } from "./ui/Reveal";
const WhyAlchorian = () => {
    const cards = [
        {
            title: "Traditional Hiring",
            p1: "Keyword-based matching",
            p2: "Focus only on recruiter evaluation",
            p3: "No candidate feedback loop",
            p4: "Candidates unprepared for industry standards",
            p5: "Unverified candidate pools",
        },
        {
            title: "Alchorian",
            p1: "Moving beyond keyword dependency",
            p2: "Introducing candidate-side intelligence",
            p3: "Structured feedback through ARIA",
            p4: "Preparing candidates for real hiring expectations",
            p5: "Building toward a verified hiring ecosystem",
        }
    ];
    return (
        <div className="p-6 md:p-1 lg:p-1 my-20">
            <div className="section_title my-10">
                <Reveal>

                <h1 className="text-xl md:text-4xl font-bold text-center 
               leading-[1.2] pb-1
               bg-clip-text text-transparent 
               bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Hiring Was Built to Filter. <br/> We’re Building It to Understand.
                </h1>
                   </Reveal>
            </div>
            <FocusCards cards={cards} />
        </div>
    );
}

export default WhyAlchorian