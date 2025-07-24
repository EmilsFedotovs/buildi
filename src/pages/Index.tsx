import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import JobPreview from "@/components/JobPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <JobPreview />
      <Footer />
    </div>
  );
};

export default Index;
