import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  DollarSign, 
  Shield, 
  Zap, 
  Users, 
  FileText,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Job Matching",
      description: "AI-powered algorithms match workers with relevant opportunities based on skills, location, and preferences.",
      badge: "AI Powered"
    },
    {
      icon: DollarSign,
      title: "Direct Payments",
      description: "Secure payment processing with no middleman fees. Workers get paid directly and contractors save on commissions.",
      badge: "No Fees"
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All contractors and workers go through verification processes including background checks and skill assessments.",
      badge: "Trusted"
    },
    {
      icon: Zap,
      title: "Instant Connections",
      description: "Real-time messaging and notifications ensure quick communication between contractors and workers.",
      badge: "Fast"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Contractors can build and manage teams for large projects with integrated scheduling and task management.",
      badge: "Pro Feature"
    },
    {
      icon: FileText,
      title: "Digital Contracts",
      description: "Create, sign, and manage contracts digitally with built-in compliance and legal protections.",
      badge: "Legal"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce hiring time from weeks to days"
    },
    {
      icon: DollarSign,
      title: "Cut Costs",
      description: "Eliminate recruitment agency fees"
    },
    {
      icon: CheckCircle,
      title: "Quality Work",
      description: "Access pre-vetted, skilled professionals"
    },
    {
      icon: Star,
      title: "Better Results",
      description: "Complete projects faster and better"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform streamlines the entire hiring process for construction professionals.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Why Choose ConstructConnect?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of construction professionals who have transformed their hiring process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;