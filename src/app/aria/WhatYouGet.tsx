import React from 'react'
import { CheckCircle, Shield, Users, Sparkles, MessageSquare, TrendingUp } from "lucide-react";


const WhatYouGet = () => {
    const points = [
        { icon: Sparkles, label: "Fair Evaluation" },
        { icon: MessageSquare, label: "Clear Feedback" },
        { icon: TrendingUp, label: "Better Visibility" },
        { icon: Users, label: "Human decisions" },
        { icon: CheckCircle, label: "No hidden rejection" },
        { icon: Shield, label: "Transparency" },
    ]
    return (
        <div className='mt-10 h-80'>
            <div>
                <h1 className=" pb-10 text-4xl font-bold text-center bg-clip-text 
                    leading-[1.2] text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    What You Get
                </h1>
            </div>
            <div className=' p-8 max-w-5xl mt-5 mx-auto grid grid-cols-3 md:grid-cols-6 items-center gap-5'>
                {
                    points.map((point, index) => (
                        <div key={index} className='flex flex-col items-center justify-center gap-2'>

                            <div className='p-5 h-20 w-20 rounded-full bg-purple-950 flex items-center justify-center border border-gray-600'>
                                <point.icon size={50} />
                            </div>
                            <p className='text-sm md:text-md text-center' >{point.label}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default WhatYouGet