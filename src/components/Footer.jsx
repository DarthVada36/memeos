import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <footer className="bg-primary text-milk py-8 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
                <h2 className="text-bronze text-2xl font-bold">Memes Contemporáneos</h2>
                <p className="text-gray">Lo mejor del humor moderno en un solo lugar.</p>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-gray hover:text-bronze transition">Facebook</a>
                <a href="#" className="text-gray hover:text-bronze transition">Twitter</a>
                <a href="#" className="text-gray hover:text-bronze transition">Instagram</a>
                <a href="#" className="text-gray hover:text-bronze transition">Gitgub</a>
            </div>
            <div className="text-center md:text-right text-gray">
                <p>© 2024 Memes Contemporáneos. Todos los derechos reservados.</p>
                <p>Diseñado con <span className="text-bronze">❤</span> por tu equipo de memes.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
