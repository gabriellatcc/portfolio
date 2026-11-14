import React, { useState } from "react";
import { cn } from "cn";
import { ThemeSwitch } from "@/components/layout/theme-switch";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    activeIcon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [activeLink, setActiveLink] = useState(navItems[0]?.link || "#");

  return (
    <div
      className={cn(
        "flex max-w-fit items-center justify-center",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md">
        {/* Nav items */}
        <div className="flex items-center gap-1">
          {navItems.map((navItem, idx: number) => {
            const isSelected = activeLink === navItem.link;

            return (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                onClick={() => setActiveLink(navItem.link)}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground",
                  isSelected
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <span className="block sm:hidden">
                  {isSelected && navItem.activeIcon
                    ? navItem.activeIcon
                    : navItem.icon}
                </span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            );
          })}
        </div>

        <div className="h-5 w-px bg-border" />
        <div className="flex items-center pr-1">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};