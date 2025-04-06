
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-atom flex items-center justify-center">
                <span className="font-bold text-white">B</span>
              </div>
              <h2 className="text-xl font-bold">BrahmAIstra</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The premier marketplace for AI models. Discover trending models, 
              rent per use with ATOM tokens, and build your own AI empire.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BrahmAIstra. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-atom transition-colors">
                  Browse Models
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-muted-foreground hover:text-atom transition-colors">
                  For Developers
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-muted-foreground hover:text-atom transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-atom transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-atom transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-atom transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-atom transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by BrahmAIstra Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
