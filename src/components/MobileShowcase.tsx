import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, CheckCircle, User, Award, FileText } from "lucide-react";
import workerSelfie from "@/assets/worker-selfie.jpg";

const MobileShowcase = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-64 h-[520px] bg-card border-8 border-foreground rounded-[2.5rem] shadow-construction relative overflow-hidden">
                  {/* Screen */}
                  <div className="w-full h-full bg-background rounded-[1.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="h-8 bg-card border-b border-border flex items-center justify-between px-4">
                      <div className="text-xs font-medium">9:41</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-success rounded-sm"></div>
                        <div className="w-1 h-2 bg-foreground rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">My Profile</h3>
                        <Badge variant="default" className="text-xs bg-success">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                      
                      {/* Profile Section */}
                      <div className="text-center space-y-3">
                        <div className="relative w-16 h-16 mx-auto">
                          <img 
                            src={workerSelfie} 
                            alt="Worker profile"
                            className="w-16 h-16 rounded-full object-cover border-2 border-success"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Mike Rodriguez</h4>
                          <p className="text-xs text-muted-foreground">Licensed Electrician</p>
                        </div>
                      </div>
                      
                      {/* Verified Cards */}
                      <div className="space-y-2">
                        <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Verified Credentials</h5>
                        
                        <Card className="p-2 border-success/20 bg-success/5">
                          <CardContent className="p-0 flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-success" />
                            <div className="flex-1">
                              <p className="text-xs font-medium">Electrical License</p>
                              <p className="text-xs text-muted-foreground">Valid until 2025</p>
                            </div>
                            <CheckCircle className="h-4 w-4 text-success" />
                          </CardContent>
                        </Card>
                        
                        <Card className="p-2 border-success/20 bg-success/5">
                          <CardContent className="p-0 flex items-center space-x-2">
                            <Award className="h-4 w-4 text-success" />
                            <div className="flex-1">
                              <p className="text-xs font-medium">OSHA 30 Certified</p>
                              <p className="text-xs text-muted-foreground">Completed 2024</p>
                            </div>
                            <CheckCircle className="h-4 w-4 text-success" />
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-card border border-border rounded-lg p-2 flex justify-around">
                          <div className="w-8 h-8 bg-muted rounded-lg"></div>
                          <div className="w-8 h-8 bg-primary rounded-lg"></div>
                          <div className="w-8 h-8 bg-muted rounded-lg"></div>
                          <div className="w-8 h-8 bg-muted rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating notification */}
                <div className="absolute -top-2 -right-4 bg-card border border-border rounded-lg p-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-xs font-medium">Profile verified!</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Mobile First
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Verified profiles{" "}
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    you can trust
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Workers can easily upload and verify their construction cards, licenses, and certifications directly from their mobile device.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Instant Verification</h3>
                    <p className="text-muted-foreground">
                      Upload photos of your construction cards and licenses. Our AI verifies them instantly for authenticity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Digital Credentials</h3>
                    <p className="text-muted-foreground">
                      Keep all your certifications, licenses, and training records organized in one secure digital wallet.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Trusted by Contractors</h3>
                    <p className="text-muted-foreground">
                      Verified profiles give contractors confidence in hiring, leading to better job opportunities for workers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;