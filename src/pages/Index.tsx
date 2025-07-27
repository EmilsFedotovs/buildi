import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import JobPreview from "@/components/JobPreview";
import MobileShowcase from "@/components/MobileShowcase";
import ScrollAnimation from "@/components/ScrollAnimation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollAnimation />
      <Header />
      <Hero />
      <Features />
      <JobPreview />
      <MobileShowcase />
      <Footer />
    </div>
  );
};

export default Index;
