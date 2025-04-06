
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Home, Search, User, Code, Rocket, Menu, X
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Would be connected to auth state
  const [userRole, setUserRole] = useState<'user' | 'developer' | null>(null);
  const [atomBalance, setAtomBalance] = useState(0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Demo login function - would be replaced with actual auth
  const handleDemoLogin = (role: 'user' | 'developer') => {
    setIsLoggedIn(true);
    setUserRole(role);
    setAtomBalance(role === 'user' ? 1000 : 5000);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-atom" />
            <span className="text-xl font-bold text-glow text-atom">BrahmAIstra</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-atom transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/explore" className="flex items-center space-x-2 text-muted-foreground hover:text-atom transition-colors">
              <Search className="h-4 w-4" />
              <span>Explore</span>
            </Link>
            {isLoggedIn && userRole === 'developer' && (
              <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-atom transition-colors">
                <Code className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            )}
          </div>
          
          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center bg-secondary/50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-atom animate-pulse mr-2"></div>
                  <span className="text-sm font-medium">{atomBalance} ATOM</span>
                </div>
                <Link to="/profile">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 neon-border">
                    <User className="h-4 w-4" />
                    <span>{userRole === 'user' ? 'User' : 'Developer'}</span>
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDemoLogin('user')} 
                  className="neon-border"
                >
                  User Login
                </Button>
                <Button 
                  className="bg-atom hover:bg-atom-dark" 
                  size="sm" 
                  onClick={() => handleDemoLogin('developer')}
                >
                  Developer Login
                </Button>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 top-[56px] bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/explore" className="flex items-center space-x-2 p-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>
            <Search className="h-5 w-5" />
            <span>Explore</span>
          </Link>
          {isLoggedIn && userRole === 'developer' && (
            <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Code className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          )}
          
          {/* Mobile Auth Section */}
          {isLoggedIn ? (
            <div className="pt-2 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center bg-secondary/50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-atom animate-pulse mr-2"></div>
                  <span className="text-sm font-medium">{atomBalance} ATOM</span>
                </div>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{userRole === 'user' ? 'User' : 'Developer'}</span>
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="pt-2 border-t border-border flex flex-col space-y-2">
              <Button variant="outline" onClick={() => handleDemoLogin('user')}>
                User Login
              </Button>
              <Button className="bg-atom hover:bg-atom-dark" onClick={() => handleDemoLogin('developer')}>
                Developer Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
