import { HoverBorderGradient } from "./ui/hover-border-gradient"
import Image from "next/image"
import aria_banner from '../../public/aria_banner.png'
import Countdown from "./utils/Countdown"
import ResumeAnimation from "./ui/ResumeAnimation"
import { Reveal } from "./ui/Reveal"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ARIA_LINK } from "@/constants/Links"
const Aria = () => {
    return (
        <div id="aria" className='flex items-center justify-center pt-20 p-5   mt-10'>
            <div className='max-w-7xl mx-auto'>
                <Reveal>

                <div className="section_title  ">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center 
               leading-[1.2] pb-1
               bg-clip-text text-transparent 
               bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        ARIA — Candidate Intelligence
                    </h1>

                </div>
                   </Reveal>
                <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center gap-5 mx-auto max-w-5xl ">

                    <div className="aria_info">
                        <Reveal>

                        <div className=" flex flex-col gap-2 mt-2 text-left  text-xl lg:text-1xl text-gray-300  ">

                            <p className="">

                                ARIA is Alchorian’s first deployed system. </p>
                                <p>

                                It analyzes resumes for ATS compatibility and structural clarity, helping candidates understand how automated systems evaluate applications.
                                </p>
                                <p>
                                Instead of guesswork, ARIA provides structured feedback to improve resume effectiveness.
                            </p>
                        </div>
                        </Reveal>
                        <div className="flex justify-center items-center mt-10">
                            <div className="flex justify-center items-center mt-10">
                                {/* <Countdown /> */}
                                <a href={ARIA_LINK}>

                                <Button                                 size="lg"
                                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white group">Try ATS Compatibility Score (Beta)
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                                </a>
                            </div>
                            {/* <button className="px-6 py-2 rounded-md font-bold hover:-translate-y-1 transform transition duration-200 hover:shadow-md bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg shadow-purple-500/50 hover:from-blue-500 hover:to-purple-500 cursor-pointer">
                                Join Aria
                            </button> */}
                        </div>
                    </div>
                    <Reveal>
                    <ResumeAnimation />
                    </Reveal>
                    {/* <Image src={aria_banner} alt="aria_banner" width={500} className="w-[300px] md:w-[400px] ld:w-[500px]" /> */}
                </div>
            </div>
        </div>
    )
}

export default Aria