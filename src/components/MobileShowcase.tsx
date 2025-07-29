import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, CheckCircle, User, Award, FileText } from "lucide-react";
import carpenterSelfie from "@/assets/carpenter-selfie.jpg";

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
                            src={carpenterSelfie} 
                            alt="Carpenter profile"
                            className="w-16 h-16 rounded-full object-cover border-2 border-success"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">James Thompson</h4>
                          <p className="text-xs text-muted-foreground">Qualified Carpenter</p>
                        </div>
                      </div>
                      
                      {/* Verified Cards */}
                      <div className="space-y-2">
                        <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Verified Credentials</h5>
                        
                        <Card className="p-2 border-success/20 bg-success/5">
                          <CardContent className="p-0 flex items-center space-x-2">
                            <Award className="h-4 w-4 text-success" />
                            <div className="flex-1">
                              <p className="text-xs font-medium">NVQ Level 3 Carpentry</p>
                              <p className="text-xs text-muted-foreground">Certified 2023</p>
                            </div>
                            <CheckCircle className="h-4 w-4 text-success" />
                          </CardContent>
                        </Card>
                        
                        <Card className="p-2 border-success/20 bg-success/5">
                          <CardContent className="p-0 flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-success" />
                            <div className="flex-1">
                              <p className="text-xs font-medium">Gold Card</p>
                              <p className="text-xs text-muted-foreground">Valid until 2026</p>
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
                  Workers can easily upload and verify their construction cards, licenses, and certifications directly from their mobile device. Download the app to get started.
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
              
              {/* Download Section */}
              <div className="space-y-6 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold">Get the mobile app</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex items-center justify-center space-x-2 bg-foreground text-background px-4 py-2 rounded-lg hover:bg-foreground/90 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span>Download for iOS</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 bg-foreground text-background px-4 py-2 rounded-lg hover:bg-foreground/90 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        <span>Download for Android</span>
                      </button>
                    </div>
                    <button className="w-full bg-card border border-border hover:bg-accent transition-colors px-4 py-2 rounded-lg text-sm">
                      Use web app instead
                    </button>
                  </div>
                  
                  <Card className="p-6 text-center">
                    <CardContent className="p-0 space-y-4">
                      <div className="w-32 h-32 mx-auto bg-foreground rounded-lg flex items-center justify-center">
                        <div className="w-28 h-28 bg-background rounded grid grid-cols-8 grid-rows-8 gap-px p-2">
                          {Array.from({ length: 64 }).map((_, i) => (
                            <div key={i} className={`${Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'} rounded-sm`} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Scan to download</p>
                        <p className="text-sm text-muted-foreground">Point your camera at the QR code</p>
                      </div>
                    </CardContent>
                  </Card>
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