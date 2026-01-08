import { CircularFlow } from '@/components/utils/CircularFlow'
import { Spotlight } from "@/components/ui/spotlight-new";
import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="px-5 w-full rounded-md flex   items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight />
                <div className=' flex flex-col md:flex-row items-center justify-center gap-5 py-20'>
                    <div className="p-3 px-10 md:px-0 max-w-5xl mx-auto relative z-10 mt-8 w-full pt-20 md:pt-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text 
                    leading-[1.2] pb-1 text-transparent bg-linear-to-t from-purple-500 to-neutral-400 bg-opacity-50">
                            ARIA <span className='text-4xl'>for candidates</span>
                        </h1>
                        <p className="mt-1 font-normal text-lg md:text-2xl text-neutral-300 max-w-lg text-center ">
                            Show your full potential, not just a resume
                        </p>
                    </div>
                    <div className='mx-auto pt- 0 md:pt-10'>
                        <CircularFlow />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero