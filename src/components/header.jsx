
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from 'framer-motion';

const menuItems = [
  { name: "Home", value: "Home" },
  { name: "Services", value: "Services" },
  { name: "Pricing", value: "Pricing" },
  { name: "About", value: "About" },
];

export const HeroHeader = ({ setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4">
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 py-4 transition-all duration-300 rounded-2xl border border-transparent flex items-center justify-between",
          isScrolled &&
            "bg-white/20 backdrop-blur-xl border-zinc-200 shadow-sm max-w-4xl"
        )}
      >
        {/* Logo / Brand */}
        <button
          onClick={() => navigateTo("Home")}
          className="text-xl font-bold flex items-center gap-2 cursor-pointer hover:text-gray-600"
        >
          ❄️ Chill Thrive
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10">
          {menuItems.map((item) => (
            <button
              key={item.value}
              onClick={() => navigateTo(item.value)}
              className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Buttons + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <Button
            className="cursor-pointer hover:font-semibold hover:underline hover:text-blue-500"
              variant="secondary"
              size="sm"
              onClick={() => navigateTo("Login")}
            >
              Login
            </Button>
            <Button
              size="sm"
              onClick={() => navigateTo("Booking")}
              className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="size-6 text-zinc-700" />
            ) : (
              <Menu className="size-6 text-zinc-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden pt-24 px-8"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {menuItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => navigateTo(item.value)}
                  className="text-left text-lg font-medium text-zinc-800 hover:text-blue-600 py-3 border-b border-zinc-200/50 transition-colors"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Buttons */}
              <div className="mt-10 space-y-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigateTo("Login")}
                >
                  Login
                </Button>
                <Button
                  className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full"
                  onClick={() => navigateTo("Booking")}
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </header>
  );
};