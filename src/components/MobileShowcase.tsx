import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, MapPin, Bell } from "lucide-react";

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
                        <h3 className="text-lg font-bold">Buildi</h3>
                        <div className="w-8 h-8 bg-primary/10 rounded-full"></div>
                      </div>
                      
                      {/* Job Cards */}
                      <div className="space-y-3">
                        <Card className="p-3">
                          <CardContent className="p-0">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-sm">Electrician Needed</h4>
                              <Badge variant="secondary" className="text-xs">$45/hr</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">Downtown construction site...</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              2.3 miles away
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="p-3">
                          <CardContent className="p-0">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-sm">Plumber Required</h4>
                              <Badge variant="secondary" className="text-xs">$50/hr</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">Residential project needs...</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              1.8 miles away
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-card border border-border rounded-lg p-2 flex justify-around">
                          <div className="w-8 h-8 bg-primary rounded-lg"></div>
                          <div className="w-8 h-8 bg-muted rounded-lg"></div>
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
                    <Bell className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium">New job nearby!</span>
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
                  Built for workers{" "}
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    on the go
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our mobile app is designed specifically for construction workers who need to find and apply for jobs while on-site.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Lightning Fast Applications</h3>
                    <p className="text-muted-foreground">
                      Apply to jobs in seconds with your saved profile. No lengthy forms or complicated processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location-Based Jobs</h3>
                    <p className="text-muted-foreground">
                      See jobs near your current location and get directions. Perfect for finding work close to where you are.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Instant Notifications</h3>
                    <p className="text-muted-foreground">
                      Get notified immediately when jobs matching your skills become available in your area.
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