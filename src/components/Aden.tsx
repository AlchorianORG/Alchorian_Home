import { HoverBorderGradient } from "./ui/hover-border-gradient"

const Aden = () => {
    return (
        <div className='h-[60vh] flex items-center justify-center pt-10 bg-linear-to-br from-blue-900/50 via-slate-950 to-slate-950 p-5'>
            <div className='max-w-7xl mx-auto'>

                <div className="section_title  ">
                    <h1 className="text-2xl md:text-5xl font-bold text-center 
                   leading-[1.2] pb-1
                   bg-clip-text text-transparent 
                   bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        ADEN <br/> <span className="text-2xl md:text-3xl">The Intelligence Layer Behind Modern Hiring</span>
                    </h1>

                </div>
                <div className="aria_info mt-10 mx-auto max-w-5xl  ">
                    <p className="mt-2 text-center  text-xl lg:text-2xl text-gray-300">As candidates gain clarity through ARIA, hiring expectations will shift.
Recruiters relying on keywords and static filters will fall behind.
ADEN is built for this future — evaluating real readiness, not surface matches.</p>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <a href="/aden">
                    <HoverBorderGradient
                        containerClassName="rounded-xl"
                        as="button"
                        className="px-8 py-1.5 bg-linear-to-r from-blue-900 to-slate-950 hover:from-slate-950 hover:to-blue-500 text-white flex items-center space-x-2 cursor-pointer">
                        <span>About Aden</span>
                    </HoverBorderGradient>
                            </a>
                </div>
            </div>
        </div>
    )
}

export default Aden