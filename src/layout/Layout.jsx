import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav className="w-[1440px] h-[100px] bg-primary/25 flex justify-center content-between ">
      <div>logo</div>
      <h3 className="text-bronze font-bodoni">Añadir meme</h3>
    </nav>
    <Outlet/>
    <footer> Mi footer</footer>
    </>
  )
}

export default Layout

