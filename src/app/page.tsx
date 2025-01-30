import HeroSection from "@/components/heroSection/heroSection";
import Navbar from "@/components/navbar/navbar";
import SectionThree from "@/components/sectionThree/sectionThree";
import SectionTwo from "@/components/sectionTwo/SectionTwo";

export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
