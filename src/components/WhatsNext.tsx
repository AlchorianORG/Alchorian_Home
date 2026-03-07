import { CardAnimation, Reveal } from './ui/Reveal';

const WhatsNext = () => {
  return (
<section
      id="building-next-section"
      className="w-full py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <Reveal>

        <h1 className="text-center text-4xl text-white mb-6">
          What We&apos;re Building Next
        </h1>
        </Reveal>


        {/* Description Paragraph */}
        <Reveal>

        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-center text-slate-400 leading-relaxed">
            ARIA is expanding into a full resume optimization engine with
            account-based insights and continuous improvement tracking.
          </p>
          <p className="text-center text-slate-400 leading-relaxed mt-3">
            In parallel, we are developing recruiter-side intelligence to
            better understand hiring intent beyond job descriptions.
          </p>
        </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Block 1: ARIA Expansion */}
          <CardAnimation>

            <div className="bg-[#141824] border border-blue-900/30 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2">
              {/* Label */}
              <div className="mb-4">
                <span className="inline-block text-xs uppercase tracking-wider text-blue-400/70 font-medium">
                  Launching Soon
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-white mb-6">ARIA Expansion</h2>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">
                    Resume optimization engine
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">
                    Account-based tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">
                    Iterative improvement feedback
                  </span>
                </li>
              </ul>
            </div>
          </CardAnimation>
          {/* </motion.div> */}

          {/* Block 2: Recruiter Intelligence */}
          <CardAnimation>

            <div className="bg-[#141824] border border-blue-900/30 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2">
              {/* Label */}
              <div className="mb-4">
                <span className="inline-block text-xs uppercase tracking-wider text-blue-400/70 font-medium">
                  In Development
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-white mb-6">Recruiter Intelligence</h2>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">
                    Recruiter intent modeling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">
                    Contextual candidate evaluation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">
                    Demo version in progress
                  </span>
                </li>
              </ul>
            </div>
      </CardAnimation>
        </div>
      </div>
    </section>
  )
}

export default WhatsNext