import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { store } from '../../redux/store'

export default function ProtectedRoute() {
  const {
    state: { userInfo }
  } = useContext(store)
  if (userInfo) {
    return <Outlet />
  } else {
    return <Navigate to="/signin" />
  }
}
