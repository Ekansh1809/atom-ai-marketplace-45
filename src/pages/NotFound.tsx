
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-secondary/30 p-6 rounded-full mb-8">
            <div className="text-6xl font-bold">404</div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-white via-atom-light to-[#22D3EE] bg-clip-text text-transparent">
            Page Not Found
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/">
            <Button size="lg" className="bg-atom hover:bg-atom-dark">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
