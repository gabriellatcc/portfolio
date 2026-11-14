import { useState } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitch() {
    const [lang, setLang] = useState<"pt" | "en">("en");

    return (
        <button
        type="button"
        onClick={() => setLang(lang === "pt" ? "en" : "pt")}
        aria-label="Alternar idioma"
        className="inline-flex h-[50px] items-center gap-2 rounded-full border border-border bg-card/80 px-4 text-sm font-medium text-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-accent/50 active:scale-95"
        >
        <Globe className="h-4 w-4 text-primary" />
        <span className="tracking-wide">{lang === "pt" ? "PT" : "EN"}</span>
        </button>
    );
}