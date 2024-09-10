import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
        <main className="flex-grow flex items-center justify-center p-24">
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default Layout

