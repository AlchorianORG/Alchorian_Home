import { HoverBorderGradient } from "./ui/hover-border-gradient"

const Aria = () => {
    return (
        <div className='h-[60vh] flex items-center justify-center pt-10 bg-linear-to-br from-purple-950/50 via-slate-950 to-slate-950 p-5'>
            <div className='max-w-7xl mx-auto'>

                <div className="section_title  ">
                    <h1 className="text-2xl md:text-5xl font-bold text-center 
               leading-[1.2] pb-1
               bg-clip-text text-transparent 
               bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Hiring Was Never Built for Candidates.<br /> ARIA Is.
                    </h1>

                </div>
                <div className="aria_info mt-10 mx-auto max-w-5xl  ">
                    <p className="mt-2 text-center  text-xl lg:text-2xl text-gray-300">Most platforms treat candidates as data points to be filtered. ARIA changes that. It helps candidates understand real recruiter expectations, receive actionable feedback, and prepare with direction instead of guesswork.</p>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <HoverBorderGradient
                        containerClassName="rounded-xl"
                        as="button"
                        className="px-8 py-1.5 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center space-x-2 cursor-pointer">
                        <span>Join Aria</span>
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    )
}

export default Aria