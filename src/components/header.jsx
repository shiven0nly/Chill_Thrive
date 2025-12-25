import React from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const menuItems = [
  { name: "Home", value: "Home" },
  { name: "Services", value: "Services" },
  { name: "Pricing", value: "Pricing" },
  { name: "About", value: "About" },
];

export const HeroHeader = ({ setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4">
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 py-3 transition-all duration-300 rounded-2xl border border-transparent",
          isScrolled &&
            "bg-white/20 backdrop-blur-xl border-zinc-200 shadow-sm max-w-4xl"
        )}
      >
        <div className="flex items-center justify-between">
          <button onClick={() => navigateTo("Home")} className="font-semibold">
            ❄️Chill Thrive
          </button>

          <nav className="hidden lg:flex gap-8">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => navigateTo(item.value)}
                className="text-sm font-medium text-zinc-600 hover:text-blue-600 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigateTo("Login")}
              className="cursor-pointer"
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
        </div>
      </div>
    </header>
  );
};
