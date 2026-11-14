import { createContext, useContext, type ReactNode } from "react";
import { usePortfolio } from "@/lib/use-portfolio";

type Portfolio = ReturnType<typeof usePortfolio>;
const PortfolioContext = createContext<Portfolio | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
    const portfolio = usePortfolio();
    return <PortfolioContext.Provider value={portfolio}>{children}</PortfolioContext.Provider>;
}

export function usePortfolioData() {
    const ctx = useContext(PortfolioContext);
    if (!ctx) throw new Error("usePortfolioData precisa estar dentro do PortfolioProvider");
    return ctx;
}