import Aden from "@/components/Aden";
import Aria from "@/components/Aria";
import Footer from "@/components/Footer";
import { SpotlightNewDemo } from "@/components/Hero";
import MakeHiringBetter from "@/components/MakeHiringBetter";
import MeetIntelligence from "@/components/MeetIntelligence";
import { NavbarDemo } from "@/components/Navbar";
import WhatsNext from "@/components/WhatsNext";
import WhyAlchorian from "@/components/WhyAlchorian";

export default function Home() {
  return (
    <div className="bg-linear-to-br from-purple-950/10 via-slate-950 to-slate-950">
    {/* <NavbarDemo/> */}
    <SpotlightNewDemo/>
    <WhyAlchorian/>
    <MeetIntelligence/>
    <Aria/>
    <WhatsNext/>
    <MakeHiringBetter/>
    <Footer/>
    </div>
  );
}
