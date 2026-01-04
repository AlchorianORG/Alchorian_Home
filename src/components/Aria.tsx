import { HoverBorderGradient } from "./ui/hover-border-gradient"
import Image from "next/image"
import aria_banner from '../../public/aria_banner.png'
import Countdown from "./utils/Countdown"

const Aria = () => {
    return (
        <div id="aria" className='h-[100vh] md:h-[60vh] lg:h-[75vh] flex items-center justify-center pt-10 bg-linear-to-br from-purple-500/50 via-slate-950 to-slate-950 p-5 mt-10'>
            <div className='max-w-7xl mx-auto'>
                <div className="section_title  ">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center 
               leading-[1.2] pb-1
               bg-clip-text text-transparent 
               bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Hiring Was Never Built for Candidates.<br /> ARIA Is.
                    </h1>

                </div>
                <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center gap-5 mx-auto max-w-5xl ">

                    <div className="aria_info">
                        <div className="  ">
                            <p className="mt-2 text-left  text-xl lg:text-1xl text-gray-300">Most platforms treat candidates as data points to be filtered. ARIA changes that. It helps candidates understand real recruiter expectations, receive actionable feedback, and prepare with direction instead of guesswork.</p>
                        </div>
                        <div className="flex justify-center items-center mt-10">
                            <div className="flex justify-center items-center mt-10">
                                <Countdown />
                            </div>
                            {/* <button className="px-6 py-2 rounded-md font-bold hover:-translate-y-1 transform transition duration-200 hover:shadow-md bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg shadow-purple-500/50 hover:from-blue-500 hover:to-purple-500 cursor-pointer">
                                Join Aria
                            </button> */}
                        </div>
                    </div>
                    <Image src={aria_banner} alt="aria_banner" width={500} className="w-[300px] md:w-[400px] ld:w-[500px]" />
                </div>
            </div>
        </div>
    )
}

export default Aria