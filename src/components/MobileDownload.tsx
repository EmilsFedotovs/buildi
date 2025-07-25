import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, QrCode, Apple, Play, Globe } from "lucide-react";
const MobileDownload = () => {
  // This would typically be generated dynamically to point to your app store links
  const qrCodeData = "https://4c400327-eb05-4c71-a3c1-8c3d104b04ae.lovableproject.com?forceHideBadge=true";
  return <section className="py-16 lg:py-20 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Smartphone className="h-3 w-3 mr-2" />
              Mobile App
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get the{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Buildi App</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access jobs on-site, manage your profile, and get paid - all from your mobile device.
            </p>
          </div>

          {/* Mobile Download Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Benefits */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Why use the TradeTap mobile app?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                      <div className="h-2 w-2 bg-success rounded-full" />
                    </div>
                    <div>
                      <p className="font-medium">Apply on the go</p>
                      <p className="text-muted-foreground text-sm">Browse and apply to jobs directly from construction sites</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                      <div className="h-2 w-2 bg-success rounded-full" />
                    </div>
                    <div>
                      <p className="font-medium">Instant notifications</p>
                      <p className="text-muted-foreground text-sm">Get notified immediately when new relevant jobs are posted</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                      <div className="h-2 w-2 bg-success rounded-full" />
                    </div>
                    <div>
                      <p className="font-medium">Quick payments</p>
                      <p className="text-muted-foreground text-sm">Track earnings and receive payments directly to your account</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1">
                    <Apple className="h-5 w-5 mr-2" />
                    Download for iOS
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Play className="h-5 w-5 mr-2" />
                    Download for Android
                  </Button>
                </div>
                <Button variant="ghost" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  Or use the web app
                </Button>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="flex justify-center">
              <Card className="p-8 shadow-construction border-2 border-dashed border-primary/20">
                <CardContent className="text-center space-y-6 p-0">
                  <div className="space-y-2">
                    <QrCode className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="text-lg font-semibold">Scan to Download</h4>
                    <p className="text-muted-foreground text-sm">
                      Scan with your phone camera to access TradeTap instantly
                    </p>
                  </div>
                  
                  {/* QR Code Placeholder */}
                  <div className="bg-background border-2 border-border rounded-lg p-6">
                    <div className="w-48 h-48 mx-auto bg-foreground rounded-lg flex items-center justify-center relative overflow-hidden">
                      {/* QR Code Pattern */}
                      <div className="grid grid-cols-12 gap-0.5 w-full h-full p-4">
                        {Array.from({
                        length: 144
                      }, (_, i) => <div key={i} className={`aspect-square ${Math.random() > 0.5 ? 'bg-background' : 'bg-foreground'}`} />)}
                      </div>
                      {/* Corner squares */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-background border-2 border-foreground" />
                      <div className="absolute top-4 right-4 w-8 h-8 bg-background border-2 border-foreground" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 bg-background border-2 border-foreground" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      Available on iOS and Android
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Free Download
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MobileDownload;