import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, DollarSign } from "lucide-react";
import heroImage from "@/assets/construction-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20">
                Revolutionizing Construction Hiring
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Connect{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  Construction
                </span>{" "}
                Talent Directly
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                TradeTap connects construction professionals directly. Post jobs, find talent, get paid - all in one place.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Post a Job
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Find Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Workers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Briefcase className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">200+</span>
                </div>
                <p className="text-sm text-muted-foreground">Jobs Posted</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-5 w-5 text-success mr-2" />
                  <span className="text-2xl font-bold text-foreground">$2M+</span>
                </div>
                <p className="text-sm text-muted-foreground">Payments Processed</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-construction">
              <img
                src={heroImage}
                alt="Construction professionals collaborating"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Direct Payments</p>
                  <p className="text-lg font-semibold">No Middleman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;