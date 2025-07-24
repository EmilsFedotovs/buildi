import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HardHat, 
  Menu, 
  X, 
  Briefcase, 
  Users, 
  User,
  LogIn
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <HardHat className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TradeTap</h1>
              <Badge variant="secondary" className="text-xs">
                Direct Hire Platform
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-muted-foreground hover:text-foreground transition-colors">
              Browse Jobs
            </a>
            <a href="#post" className="text-muted-foreground hover:text-foreground transition-colors">
              Post Jobs
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="construction" size="sm">
              <User className="h-4 w-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#jobs" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                <Briefcase className="h-4 w-4 mr-3" />
                Browse Jobs
              </a>
              <a 
                href="#post" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                <Users className="h-4 w-4 mr-3" />
                Post Jobs
              </a>
              <a 
                href="#how-it-works" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="construction" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;