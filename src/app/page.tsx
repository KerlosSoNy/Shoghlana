import HeroSection from "@/components/heroSection/heroSection";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <HeroSection />
    </div>
  );
}
