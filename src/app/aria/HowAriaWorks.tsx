import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const values = [
    {
        title: "Build a verified profile",
        description:
            "ARIA helps you shape your profile with market insight and verifies real work — not just a CV.",
        link: "",
    },
    {
        title: "Intent comes first",
        description:
            "Companies see what you want and why before resumes are filtered.",
        link: "https://netflix.com",
    },
    {
        title: "No more silence",
        description:
            "You always know what happened, even when it’s a no.",
        link: "https://google.com",
    }
]

const HowAriaWorks = () => {
    return (
        <div className=''>
            <div>
                <h1 className=" mt-10 text-4xl md:text-5xl font-bold text-center bg-clip-text 
                    leading-[1.2] text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    How it Works
                </h1>
            </div>
            <div className='max-w-5xl mx-auto px-10'>
                <HoverEffect items={values} />
            </div>
        </div>
    )
}

export default HowAriaWorks