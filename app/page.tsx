import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowWeSupportSection from "../components/HowWeSupportSection";

const page = () => {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <HeroSection />
      <HowWeSupportSection />
    </main>
  );
};

export default page;
