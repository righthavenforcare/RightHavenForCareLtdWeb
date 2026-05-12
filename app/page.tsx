import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const page = () => {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default page;
