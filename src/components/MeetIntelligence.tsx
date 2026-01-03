import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import ariaLogo from '../../public/aria_logo.png';
import adenLogo from '../../public/aden_logo.png';
import Image from 'next/image';


const MeetIntelligence = () => {
    return (

        <div className='MI px-4 md:px-2 ld:px-1'>

            <div className="section_title ">
                <h1 className="text-2xl md:text-5xl font-bold text-center 
               leading-[1.2] pb-1
               bg-clip-text text-transparent 
               bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Meet the Intelligence Behind Alchorian
                </h1>

            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto w-full my-15 '>


                <WobbleCard
                    theme='purple'
                    containerClassName="col-span-1 h-full bg-transparent min-h-[400px] lg:min-h-[300px]"
                    className=""
                >
                    <Image src={ariaLogo} width={80} alt='aria_logo' className='mx-auto w-15 md:w-20' />
                    <div className="max-w-md">
                        <h1 className='heading text-3xl'>Aria</h1>
                        <h2 className=" mt-2 text-left text-balance text-2xl font-semibold tracking-[-0.015em] text-purple-300">
                            Candidate Intelligence
                        </h2>
                        <p className="mt-2 text-left  text-xl text-gray-300">
                        ARIA prepares candidates for real hiring expectations by translating recruiter intent into clear, actionable guidance. It removes guesswork from preparation and replaces it with direction.
                        </p>
                    </div>
                </WobbleCard>
                <WobbleCard
                    theme='blue'
                    containerClassName="col-span-1  h-full bg-transparent min-h-[400px] lg:min-h-[300px]"
                    className=""
                >

                        <Image src={adenLogo} width={75} alt='aden_logo' className='mx-auto w-15 md:w-20' />
                    <div className="max-w-md">
                        <h1 className='heading text-3xl lg:text-3xl'>Aden</h1>
                        <h2 className="mt-2 text-left text-balance text-2xl font-semibold tracking-[-0.015em] text-blue-300">
                            Recruiter Intelligence
                        </h2>
                        <p className="mt-2 text-left  text-xl text-gray-300">
                            ADEN understands recruiter intent by learning what success looks like beyond job descriptions. It enables hiring decisions based on fit, not keyword matches.
                        </p>
                    </div>
                </WobbleCard>
            </div>
        </div>
    )
}

export default MeetIntelligence




