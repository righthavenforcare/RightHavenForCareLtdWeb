import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowWeSupportSection from "../components/HowWeSupportSection";
import JoinCareSection from "../components/JoinCareSection";
import OurValuesSection from "../components/OurValuesSection";

const page = () => {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <HeroSection />
      <HowWeSupportSection />
      <OurValuesSection />
      <JoinCareSection />
    </main>
  );
};

export default page;
