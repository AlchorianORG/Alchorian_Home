import React from 'react'
import Hero from './Hero'
import ProblemSection from './ProblemSection'
import HowAriaWorks from './HowAriaWorks'
import WhatYouGet from './WhatYouGet'

const page = () => {
  return (
    <div className='bg-linear-to-br from-purple-500/50 via-slate-950 to-slate-950'>
        <Hero/>
        <ProblemSection/>
        <HowAriaWorks/>
        <WhatYouGet/>
    </div>
  )
}

export default page