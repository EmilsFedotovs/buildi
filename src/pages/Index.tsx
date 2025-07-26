import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import JobPreview from "@/components/JobPreview";
import MobileShowcase from "@/components/MobileShowcase";
import MobileDownload from "@/components/MobileDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <JobPreview />
      <MobileShowcase />
      <MobileDownload />
      <Footer />
    </div>
  );
};

export default Index;
