import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <footer class="bg-primary text-milk py-8 mt-10">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="text-center md:text-left">
                <h2 class="text-bronze text-2xl font-bold">Memes Contemporáneos</h2>
                <p class="text-gray">Lo mejor del humor moderno en un solo lugar.</p>
            </div>
            <div class="flex space-x-4">
                <a href="#" class="text-gray hover:text-bronze transition">Facebook</a>
                <a href="#" class="text-gray hover:text-bronze transition">Twitter</a>
                <a href="#" class="text-gray hover:text-bronze transition">Instagram</a>
                <a href="#" class="text-gray hover:text-bronze transition">Gitgub</a>
            </div>
            <div class="text-center md:text-right text-gray">
                <p>© 2024 Memes Contemporáneos. Todos los derechos reservados.</p>
                <p>Diseñado con <span class="text-bronze">❤</span> por tu equipo de memes.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
