import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowWeSupportSection from "../components/HowWeSupportSection";
import OurValuesSection from "../components/OurValuesSection";

const page = () => {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <HeroSection />
      <HowWeSupportSection />
      <OurValuesSection />
    </main>
  );
};

export default page;
