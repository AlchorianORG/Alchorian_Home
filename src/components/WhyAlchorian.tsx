import { FocusCards } from "@/components/ui/focus-cards";
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
            p1: "Intent-driven alignment",
            p2: "Balances recruiter and candidate needs",
            p3: "Real-time feedback for candidates",
            p4: "Prepares candidates for real hiring expectations",
            p5: "Verified and trusted candidate ecosystem",
        }
    ];
    return (
        <div className="p-6 md:p-1 lg:p-1 my-20">
            <div className="section_title my-10">
                <h1 className="text-xl md:text-5xl font-bold text-center 
               leading-[1.2] pb-1
               bg-clip-text text-transparent 
               bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Old Hiring Moves Like a Tractor. <br/> Alchorian Doesn’t.
                </h1>
            </div>
            <FocusCards cards={cards} />
        </div>
    );
}

export default WhyAlchorian