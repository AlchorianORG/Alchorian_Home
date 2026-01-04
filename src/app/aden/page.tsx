import React from 'react'
import { HowItWorksSection } from './HowItWorksSection'
import { RevealSection } from './RevealSection'

const page = () => {
  return (
    <div className='bg-linear-to-br from-blue-950/50 via-slate-950 to-slate-950 h-[100vh]'>
      <RevealSection/>
        <HowItWorksSection/>

    </div>
  )
}

export default page