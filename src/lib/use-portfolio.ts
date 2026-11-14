import { useTranslation } from "react-i18next";
import { portfolioBaseData } from "@/lib/data";
import { portfolioEnus } from "@/lib/language/en-us";
import { portfolioPtbr } from "@/lib/language/pt-br";

type Translation = typeof portfolioPtbr;

function merge<B extends Record<string, object>, T extends Record<keyof B, object>>(
    base: B,
    translated: T,
) {
    return (Object.keys(base) as (keyof B)[]).map((key) => ({
        ...base[key],
        ...translated[key],
        key,
    }));
}

export function usePortfolio() {
    const { i18n } = useTranslation();
    const t: Translation = i18n.language.startsWith("pt") ? portfolioPtbr : portfolioEnus;
    const s = portfolioBaseData;

    return {
        ...s,
        ...t,
        terminalOverview: { ...s.terminalOverview, ...t.terminalOverview },
        projects: merge(s.projects, t.projects),
        experiences: merge(s.experiences, t.experiences),
        education: { ...s.education, ...t.education },
        languages: merge(s.languages, t.languages),
    };
}