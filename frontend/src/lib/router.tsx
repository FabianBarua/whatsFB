import { ProtectedRoute } from '@/components/ProtectedRoute'
import { HomeDashboard } from '@/pages/Home'
import { Login } from '@/pages/Login'

import { createBrowserRouter } from 'react-router-dom'

// Function to check if the user is authenticated
const isLogged = () => {
  console.log('Checking if user is logged...')
  return false
}

// Create the router configuration
const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <Login />,
      index: true
    },
    {
      element: <ProtectedRoute isLogged={isLogged()} />,
      children: [
        {
          path: '/',
          element: <HomeDashboard/>
        }
      ]
    },
    {
      path: '*',
      element: <p>404 Error - Nothing here...</p>
    }
  ]
)

export default router
