import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'
import { ThemeProvider } from './providers/theme-provider'
import '@/lib/i18n'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PortfolioProvider } from '@/providers/portfolio-provider'
const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <PortfolioProvider>
          <RouterProvider router={router} />
        </PortfolioProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  </StrictMode>,
)