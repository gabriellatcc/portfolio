import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function LanguageSwitch() {
    const { i18n } = useTranslation();

    const currentLang = i18n.language.startsWith("pt") ? "pt" : "en";

    const toggleLanguage = () => {
        const nextLang = currentLang === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        localStorage.setItem("portfolio-lang", nextLang);
        document.documentElement.lang = nextLang === "pt" ? "pt-BR" : "en";
    };

    return (
        <button
        type="button"
        onClick={toggleLanguage}
        aria-label="Alternar idioma"
        className="inline-flex h-[50px] items-center gap-2 rounded-full border border-border bg-card/80 px-4 text-sm font-medium text-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-accent/50 active:scale-95"
        >
        <Globe className="h-4 w-4 text-primary" />
        <span className="tracking-wide">{currentLang === "pt" ? "PT-BR" : "EN"}</span>
        </button>
    );
}