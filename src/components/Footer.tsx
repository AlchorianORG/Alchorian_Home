import { Brain, Bot, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';
import ariaLogo from '../../public/aria_logo.png'
import adenLogo from '../../public/aden_logo.png'
import alchorianLogo from '../../public/alchorian_logo.png'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
const footerLinks = {
    product: [
        { name: `Aria for Candidates (${<span className='italic'>Comming soon</span>})`, href: '#aria' },
        { name: `Aden for Recruiters (Early Access)`, href: '#aden' },
    ],
    company: [
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#about' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR', href: '#gdpr' }
    ]
};

const companyContent = {
    about: {
        title: "About Alchorian",
        description: `
Alchorian is building AI-first infrastructure for modern hiring.

We believe recruitment is a decision-making problem, not a filtering problem.
Current systems optimise storage and speed — not understanding.

Alchorian is early-stage and currently developing two products:
• Aria — for candidates
• Aden — for recruiters

Our focus is clarity, intent, and trust in hiring decisions.
    `,
    },
    contact: {
        title: "Contact",
        description: `
We are currently in early access and open to conversations.

For demos, partnerships, or general enquiries:
pranayprasad42@gmail.com

We respond personally.
    `,
    },
};


const legalContent: Record<string, { title: string; description: string }> = {
    privacy: {
        title: "Privacy Policy",
        description: "This is a preliminary privacy policy for Alchorian. Full policy will be published prior to product launch."
    },
    terms: {
        title: "Terms of Service",
        description: "These terms govern early access and demo usage of Alchorian products."
    },
    cookies: {
        title: "Cookie Policy",
        description: "Alchorian currently uses minimal cookies for essential functionality."
    },
    gdpr: {
        title: "GDPR Compliance",
        description: "Alchorian is committed to GDPR compliance and data protection by design."
    }
};


const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
];

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4 ">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500/30 to-stale-500 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                                <Image src={alchorianLogo} alt='Alchorian Logo' width={30} />
                            </div>
                            <span className="text-xl">Alchorian</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Empowering careers and transforming recruitment with intelligent AI solutions.
                        </p>

                        {/* AI Tools Icons */}
                        <div className="flex justify-center md:justify-start gap-4 mb-6">
                            <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-3 py-2 rounded-lg">
                                <Image src={ariaLogo} alt='Aria Logo' width={20} />
                                <span className="text-sm text-purple-300">Aria</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-2 rounded-lg">
                                <Image src={adenLogo} alt='Aden Logo' width={20} />
                                <span className="text-sm text-blue-300">Aden</span>
                            </div>
                        </div>

                        {/* Social Links
                        <div className="flex justify-center md:justify-start gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div> */}
                    </div>

                    {/* Product Links */}
                    <div className='col-span-2'>
                        <h4 className="mb-4 text-white">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#aden" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Aria for candidates <span className='italic text-[15px]'>(Comming Soon)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#aden" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Aden for Recruiters <span className='italic text-[15px]'>(Early Access)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="mb-4 text-white">Company</h4>
                        <ul className="space-y-3">

                            {/* About Us */}
                            <li>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-gray-400 hover:text-purple-400 transition-colors text-left cursor-pointer">
                                            About Alchorian
                                        </button>
                                    </DialogTrigger>

                                    <DialogContent className="max-w-lg bg-slate-950 border border-white/10">
                                        <DialogHeader>
                                            <DialogTitle className="text-white">
                                                {companyContent.about.title}
                                            </DialogTitle>
                                            <DialogDescription className="text-gray-400 whitespace-pre-line mt-2">
                                                {companyContent.about.description}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <button className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
                                                    Close
                                                </button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </li>

                            {/* Contact */}
                            <li>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-gray-400 hover:text-purple-400 transition-colors text-left cursor-pointer">
                                            Contact
                                        </button>
                                    </DialogTrigger>

                                    <DialogContent className="max-w-md bg-slate-950 border border-white/10">
                                        <DialogHeader>
                                            <DialogTitle className="text-white">
                                                {companyContent.contact.title}
                                            </DialogTitle>
                                            <DialogDescription className="text-gray-400 whitespace-pre-line mt-2">
                                                {companyContent.contact.description}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <button className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
                                                    Close
                                                </button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </li>

                        </ul>
                    </div>


                    {/* Legal Links */}
                    <div>
                        <h4 className="mb-4 text-white">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => {
                                const key = link.href.replace("#", "");
                                const content = legalContent[key];

                                return (
                                    <li key={index}>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button
                                                    className="text-gray-400 hover:text-purple-400 transition-colors text-left cursor-pointer"
                                                >
                                                    {link.name}
                                                </button>
                                            </DialogTrigger>

                                            <DialogContent className="max-w-lg bg-slate-950 border border-white/10">
                                                <DialogHeader>
                                                    <DialogTitle className="text-white">
                                                        {content.title}
                                                    </DialogTitle>
                                                    <DialogDescription className="text-gray-400 mt-2">
                                                        {content.description}
                                                    </DialogDescription>
                                                </DialogHeader>

                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <button className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
                                                            Close
                                                        </button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col justify-between items-center gap-2">
                    <p className="text-gray-400 text-sm text-center w-full">
                        © 2026 Alchorian. All rights reserved.
                    </p>
                    <p className='text-gray-400 text-sm text-center w-full'>Alchorian is an early-stage company building AI-first hiring systems.</p>
                </div>
            </div>


        </footer>
    );
}

export default Footer;