import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname === "/" ? "accounting" : location.pathname.substring(1));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "accounting") {
      navigate("/accounting");
    } else {
      navigate(`/${value}`);
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const scrollToContactSection = () => {
    // First check if we need to navigate to a different page
    const currentPath = location.pathname;
    let targetPath = currentPath;
    
    if (currentPath.includes('about-us')) {
      // If on About Us page, navigate to home page first
      targetPath = '/';
    }
    
    // If current path is different from target path, navigate and then scroll
    if (currentPath !== targetPath) {
      navigate(targetPath, { 
        state: { scrollToContact: true } 
      });
    } else {
      // Otherwise just scroll to the section on the current page
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-2", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <a href="/" className="flex items-center">
          <span className="text-fintaxy-navy text-2xl font-semibold tracking-tight">fintaxy</span>
        </a>

        {/* Tabs in the center */}
        <div className="hidden md:block max-w-xl mx-auto h-full">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full h-full">
            <TabsList className="w-full h-full grid grid-cols-3 gap-1 p-1.5 flex items-center bg-gray-50/70">
              <TabsTrigger value="business" className="text-sm h-[112%] px-4 py-2.5 rounded-md transition-all hover:bg-fintaxy-light whitespace-nowrap">
                Proprietari de afaceri
              </TabsTrigger>
              <TabsTrigger value="freelancers" className="text-sm h-[112%] px-4 py-2.5 rounded-md transition-all hover:bg-fintaxy-light whitespace-nowrap">
                Freelanceri
              </TabsTrigger>
              <TabsTrigger value="accounting" className="text-sm h-[112%] px-4 py-2.5 rounded-md transition-all hover:bg-fintaxy-light whitespace-nowrap">
                Firmă de contabilitate
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* CTA Button on the right */}
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white text-sm py-1.5 px-5 h-9" onClick={scrollToContactSection}>
            Începe
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-fintaxy-navy focus:outline-none focus:ring-2 focus:ring-fintaxy-blue focus:ring-opacity-50 rounded" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full mb-3">
            <TabsList className="w-full grid grid-cols-1 gap-2">
              <TabsTrigger value="business" className="text-base w-full py-3 rounded-md transition-all hover:bg-fintaxy-light">
                Proprietari de afaceri
              </TabsTrigger>
              <TabsTrigger value="freelancers" className="text-base w-full py-3 rounded-md transition-all hover:bg-fintaxy-light">
                Freelanceri
              </TabsTrigger>
              <TabsTrigger value="accounting" className="text-base w-full py-3 rounded-md transition-all hover:bg-fintaxy-light">
                Firmă de contabilitate
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button className="w-full bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white py-2 h-9 text-base" onClick={() => {
        setMobileMenuOpen(false);
        scrollToContactSection();
      }}>
            Începe
          </Button>
        </div>}
    </header>;
};

export default Navbar;
