import { Reveal } from './ui/Reveal';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { TYPRFORM_LINK } from '@/constants/Links';

const MakeHiringBetter = () => {
    return (
        <section className="relative py-24 px-6" id='research'>
            <div className="max-w-5xl mx-auto">
                <Reveal className="relative bg-neutral-900/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-12 overflow-hidden"
                >
                    {/* Gradient glow blobs */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-6">
                        {/* Badge */}
                        <Reveal>
                            <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">
                                Research Initiative
                            </span>
                        </Reveal>

                        {/* Heading */}
                        <Reveal className="text-3xl md:text-4xl lg:text-5xl font-light">
                            Contribute to the Future of Hiring Intelligence

                        </Reveal>

                        {/* Subtext */}
                        <Reveal
                            className="text-neutral-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            We&apos;re building a better hiring ecosystem and want your insights.
                            Share your experience and help shape the future of recruitment technology.
                        </Reveal>

                        {/* CTA Button */}
                        <Reveal
                            className="pt-4"
                        >
                            <a href={TYPRFORM_LINK} target='_blank'>

                            <Button
                                size="lg"
                                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white group"
                                >
                                2-minute structured research survey.
                                <Reveal
                                >
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Reveal>
                            </Button>
                                    </a>
                        </Reveal>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default MakeHiringBetter