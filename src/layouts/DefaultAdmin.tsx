import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultAdmin() {
  return (
    <>
      <Header />
      <p>Default admin</p>
      <Outlet />
    </>
  )
}
