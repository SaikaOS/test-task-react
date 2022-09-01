import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import { useAppSelector } from './store/store'

const ProtectedRoutes:FC = () => {
    const {isLoggedIn} = useAppSelector(state => state.slice)
  return (
    <div>
        <>
        {isLoggedIn ? <Outlet /> : <Auth />}
        </>
    </div>
  )
}

export default ProtectedRoutes