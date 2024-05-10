import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './lib/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
)
