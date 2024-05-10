import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
    isLogged: boolean
  }

export const ProtectedRoute = ({ isLogged }:ProtectedRouteProps) => {
  if (!isLogged) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
