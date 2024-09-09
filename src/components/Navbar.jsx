import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-white hover:text-gray-400">MemeOS</Link></li>
                <li><Link to="/gallery" className="text-white hover:text-gray-400">Galeria</Link></li>
                <li><Link to="/gallery/newmeme" className="text-white hover:text-gray-400">Crear Meme</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
