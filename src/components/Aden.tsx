import Image from "next/image"
import { Input } from "@/components/ui/input"
import aden_banner from '../../public/aden_banner.png'
const Aden = () => {
    return (
        <div id="aden" className='h-[100vh] md:h-[70vh] lg:h-[70vh] flex items-center justify-center pt-10 bg-linear-to-br from-blue-900/50 via-slate-950 to-slate-950 p-5 mt-10'>
            <div className='max-w-7xl mx-auto'>

                <div className="section_title  ">
                    <h1 className="text-2xl md:text-4xl font-bold text-center 
                   leading-[1.2] pb-1
                   bg-clip-text text-transparent 
                   bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        ADEN <br /> <span className="text-2xl md:text-3xl">The Intelligence Layer Behind Modern Hiring</span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 my-8  mx-auto max-w-5xl">
                    <Image src={aden_banner} alt="aden_banner" width={450} className="w-[400px] md:w-[500px] ld:w-[500px]" />

                    <div className="aria_info ">
                        <div className="">
                            <p className="mt-2 text-left  text-xl lg:text-1xl text-gray-300">As candidates gain clarity through ARIA, hiring expectations will shift.
                                Recruiters relying on keywords and static filters will fall behind.
                                ADEN is built for this future — evaluating real readiness, not surface matches.</p>
                        </div>
                        <div className="flex flex-col gap-4 justify-between items-center mt-10">
                            <div className="flex items-center w-full justify-between gap-2">
                                <Input type="email" placeholder="Company Email" />

                                <button className="px-2 h-10 w-[30%] rounded-md font-bold hover:-translate-y-1 transform transition duration-200 hover:shadow-md bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm md:text-[15px] border-0 shadow-lg shadow-purple-500/50 hover:from-blue-500 hover:to-purple-500 cursor-pointer">
                                    Join Waitlist
                                </button>
                            </div>
                            <a href="/aden" className="w-full">
                                <button className="px-6 py-3 w-full rounded-md font-bold hover:-translate-y-1 transform transition duration-200 hover:shadow-md bg-linear-to-br from-white/10 to-stale-950 text-white border border-white/20  hover:from-white-10 hover:to-stale-500 cursor-pointer">
                                    About Aden
                                </button>
                            </a>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Aden