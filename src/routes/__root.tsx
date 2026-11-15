import { createRootRoute, Outlet } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Footer } from '@/components/layout/footer'
import { NotFound } from '@/components/handlers/not-found'
import { RootError } from '@/components/handlers/root-error'
import Rays from "@/components/spell-ui/light-rays";
import FloatingNavDemo from '@/components/layout/header-floating'

function RootLayout() {
    const { i18n } = useTranslation();

    return (
        <div className="relative min-h-screen flex flex-col text-foreground">
            <Rays
                backgroundColor="transparent"
                intensity={5}
                reach={8}
                raysColor={{ mode: "single", color: "#3b82f6" }}
                style={{ zIndex: 0 }}
            />
            <div className="relative z-10 flex flex-col min-h-screen">
                <FloatingNavDemo />
                <main
                    key={i18n.language}
                    className="animate-lang-fade flex-1 w-full max-w-6xl mx-auto"
                >
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFound,
    errorComponent: RootError,
})