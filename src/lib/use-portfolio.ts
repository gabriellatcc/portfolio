import { useTranslation } from "react-i18next";
import { portfolioBaseData, type DeveloperProfile, type NavigationInterface } from "@/lib/data";
import { portfolioEnus, navigationEnus } from "@/lib/language/en-us";
import { portfolioPtbr, navigationPtbr } from "@/lib/language/pt-br";

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
    const isPt = i18n.language.startsWith("pt");

    const t: DeveloperProfile = isPt ? portfolioPtbr : portfolioEnus;
    const nav: Record<string, NavigationInterface> = isPt ? navigationPtbr : navigationEnus;
    const s = portfolioBaseData;

    return {
        ...s,
        ...t,
        navigation: nav,
        terminalOverview: { ...s.terminalOverview, ...t.terminalOverview },
        projects: merge(s.projects, t.projects),
        experiences: merge(s.experiences, t.experiences),
        education: { ...s.education, ...t.education },
        languages: merge(s.languages, t.languages),
    };
}