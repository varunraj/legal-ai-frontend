"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Precedent Ai
              </span>
              <span className="text-xs text-slate-500 -mt-1 font-medium tracking-wide">
                Your Ai Co-Counsel
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(0, 2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="ghost" className="text-sm font-medium">
              Login
            </Button>
            <Button className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9 p-0"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              {navigationItems.slice(0, 2).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
