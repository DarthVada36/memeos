import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>Mi nav</nav>
    <Outlet/>
    <footer> Mi footer</footer>
    </>
  )
}

export default Layout

