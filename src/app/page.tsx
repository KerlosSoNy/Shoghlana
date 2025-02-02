import Footer from "@/components/footer/footer";
import HeroSection from "@/components/heroSection/heroSection";
import Navbar from "@/components/navbar/navbar";
import SectionFour from "@/components/sectionFour/sectionFour";
import SectionThree from "@/components/sectionThree/sectionThree";
import SectionTwo from "@/components/sectionTwo/SectionTwo";

export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}
