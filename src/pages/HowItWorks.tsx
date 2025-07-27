import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Search, MessageSquare, CreditCard, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import directConnectionImage from "@/assets/direct-connection.jpg";
import instantPaymentImage from "@/assets/instant-payment.jpg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Post Your Job",
      description: "Contractors post detailed job requirements including skills needed, timeline, and budget.",
      icon: Search,
      details: "Simply create a job listing with all the necessary details. Our platform helps you specify exactly what skills and experience you need."
    },
    {
      number: "02", 
      title: "Get Matched",
      description: "Our AI matches your job with qualified subcontractors in your area who have the right skills.",
      icon: Users,
      details: "No more endless searching through agencies. Our smart matching system connects you with pre-vetted professionals."
    },
    {
      number: "03",
      title: "Direct Communication",
      description: "Communicate directly with candidates through our secure messaging system.",
      icon: MessageSquare,
      details: "Cut out the middleman. Talk directly to the people who will be doing the work and make faster decisions."
    },
    {
      number: "04",
      title: "Complete & Get Paid",
      description: "Once the job is done to satisfaction, payment is processed instantly through the app.",
      icon: CreditCard,
      details: "Secure payments with no hidden fees. Workers get paid immediately upon job completion and approval."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "No Agency Fees",
      description: "Save 15-30% on every hire by cutting out recruitment agencies"
    },
    {
      icon: CheckCircle,
      title: "Pre-Vetted Workers",
      description: "All subcontractors are background checked and skill verified"
    },
    {
      icon: Users,
      title: "Direct Relationships",
      description: "Build lasting relationships with reliable subcontractors"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6">
              How It Works
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Simple, Direct{" "}
              <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">
                Hiring Process
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We've eliminated the complexity and cost of traditional construction hiring. 
              Connect directly with skilled subcontractors and get your projects done faster.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Four Simple Steps to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From posting a job to getting paid, our streamlined process makes hiring effortless.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-accent font-bold">
                          {step.number}
                        </Badge>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground pl-16">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Direct Connections,{" "}
                <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">
                  Better Results
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Skip the middleman and connect directly with skilled subcontractors. 
                Build lasting relationships and save money on every project.
              </p>
              <div className="space-y-4">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={directConnectionImage} 
                alt="Direct connection between contractors and workers"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={instantPaymentImage} 
                alt="Instant payment processing through mobile app"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Get Paid{" "}
                <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">
                  Instantly
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Once your work is completed and approved, receive payment immediately through 
                our secure payment system. No waiting weeks for checks or dealing with agency delays.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Secure Payments</h4>
                    <p className="text-muted-foreground text-sm">Bank-level security for all transactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Protected Funds</h4>
                    <p className="text-muted-foreground text-sm">Escrow protection until work completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-accent to-secondary rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of contractors who have streamlined their hiring process and saved money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/post-job">
                <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                  Post Your First Job
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;