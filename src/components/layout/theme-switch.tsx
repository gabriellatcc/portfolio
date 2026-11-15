import { useTheme } from "@/providers/theme-provider";
// import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { cn } from "cn";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  // const isDark = theme === "dark";
  const [rotation, setRotation] = useState(() => (theme === "dark" ? 25 : 0));

  const handleToggle = () => {
    setRotation((current) => current + 180);
    toggleTheme();
  };
    // <Switch
    //   size="lg"
    //   checked={isDark}
    //   onCheckedChange={toggleTheme}
    //   aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    //   thumbChildren={
    //     isDark ? (
    //       <Moon className="size-3 text-primary" />
    //     ) : (
    //       <Sun className="size-3 text-chart-3" />
    //     )
    //   }
    // />
  // );
  // removed: "fixed bottom-6 right-6 z-50" in 38th line
  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className={cn(
      "inline-flex items-center justify-center size-11 rounded-full shadow-md",
      "border-border bg-background text-foreground hover:bg-muted",
      )}
    >
      <span
        aria-hidden
        className="inline-flex transition-transform duration-300 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {theme === "dark" ? <Moon className="size-5" /> : <Sun className="size-5" />}
      </span>
    </button>
  );
}