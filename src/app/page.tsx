import Aden from "@/components/Aden";
import Aria from "@/components/Aria";
import { SpotlightNewDemo } from "@/components/Hero";
import MeetIntelligence from "@/components/MeetIntelligence";
import { NavbarDemo } from "@/components/Navbar";
import WhyAlchorian from "@/components/WhyAlchorian";

export default function Home() {
  return (
    <div className="bg-linear-to-br from-purple-950/50 via-slate-950 to-slate-950">
    <NavbarDemo/>
    <SpotlightNewDemo/>
    <MeetIntelligence/>
    <WhyAlchorian/>
    <Aria/>
    <Aden/>
    </div>
  );
}
