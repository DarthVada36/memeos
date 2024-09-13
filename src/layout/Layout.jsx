import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
    <Footer/>
    <nav className="w-[1440px] h-[100px] bg-primary/25 flex justify-center content-between ">
      <div className='left-0'><img src="./src/img/dogelogo2.png" className="w-[68px] h-[68px]" alt="" /></div>
      <h3 className="text-bronze font-bodoni">Añadir meme</h3>
    </nav>
    <Outlet/>
    <footer> Mi footer</footer>
    </>
  )
}

export default Layout

