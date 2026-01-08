import FlowLine from "@/components/utils/FlowLine";

const ProblemSection = () => {
    return (
        <div className="relative max-w-5xl mx-auto h-64 0">
            <h1 className=" pb-10 text-4xl font-bold text-center bg-clip-text 
                    leading-[1.2] text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Why Hiring feels unclear 
            </h1>
            <div className="flex justify-center lg:justify-end" >
                <FlowLine/>
            </div>
            
        </div>
    );
}

export default ProblemSection
