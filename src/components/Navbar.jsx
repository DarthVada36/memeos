import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
       <nav class="bg-primary p-4 fixed w-full top-0 z-10">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="#" class="text-bronze text-2xl font-bold">Meme</a>
            <ul class="flex space-x-6">
                <li><a href="#home" class="text-gray hover:bg-secondary hover:text-milk px-4 py-2 rounded">Home</a></li>
                <li><a href="#add" class="text-gray hover:bg-secondary hover:text-milk px-4 py-2 rounded">Añadir</a></li>
        
        <a href="/" class="text-gray transition-colors duration-300 transform dark:text-gray-200  border-blue-500 mx-1.5 sm:mx-6"><img class="h-6 " src="../public/img-perro.svg" alt="Imagen Meme" /></a>

        <a href="/" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
        </a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
      
        </a>
            </ul>
        </div>
    </nav>
    
    </header>
  )
}

export default Navbar




