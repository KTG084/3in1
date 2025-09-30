"use client";
import React from "react";
import { BookOpen, ShoppingCart, HomeIcon, Video } from "lucide-react";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Tutorials",
    icon: (
      <BookOpen className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "/tutorials",
  },
  {
    title: "Meetings",
    icon: <Video className="h-full w-full text-white dark:text-neutral-300" />,
    href: "/meetings",
  },
  {
    title: "Purchase",
    icon: (
      <ShoppingCart className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "/shop",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50
      w-full max-w-[1000px] h-[70px] px-4 sm:px-6
      bg-[#0a0a1a]/20 backdrop-blur-lg
      border border-cyan-400/20
      rounded-3xl shadow-[0_4px_30px_#00ffff33]
      flex items-center justify-between text-white"
    >
      <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
        <div className="cursor-pointer text-base sm:text-lg font-semibold whitespace-nowrap">
          3-in-1 BOT
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-1 sm:bottom-2">
          <Dock
            className="bg-transparent items-end pb-2 sm:pb-3"
            magnification={40} // smaller for mobile
            panelHeight={60}
          >
            {data.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <DockItem
                  key={idx}
                  className={cn(
                    "aspect-square rounded-full cursor-pointer border",
                    "bg-[#0a0a1a]/40 border-cyan-400/20 hover:shadow-[0_0_11px_4px_#00ffff33]",
                    pathname === item.href &&
                      "bg-[#0a0a1a]/80 border-cyan-400/60 shadow-[0_0_15px_#00ffff55]"
                  )}
                >
                  <DockLabel>{item.title}</DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              </Link>
            ))}
          </Dock>
        </div>

        {/* Right Side: Button */}
        <div className="shrink-0 flex">
          <Link href="/auth/login">
            <Button
              className="bg-[#0a0a1a]/60 
                backdrop-blur-md 
                border border-cyan-400/30 
                text-white 
                px-3 sm:px-5
                rounded-xl 
                shadow-[0_0_8px_#00ffff33] 
                hover:shadow-[0_0_11px_4px_#00ffff88] 
                hover:text-cyan-200
                text-sm sm:text-base
                transition-all duration-300 cursor-pointer"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
