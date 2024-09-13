import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="font-bodoni">
       <nav className="bg-primary p-4 fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="#" className="text-bronze text-2xl font-bold">Meme</a>
            <ul className="flex space-x-6">
              <Link to="/gallery">
                <li><a href="#home" className="text-gray hover:bg-secondary hover:text-milk px-4 py-2 rounded">Galería</a></li></Link>
                <Link to="/gallery/newmeme"><li><a href="#add" className="text-gray hover:bg-secondary hover:text-milk px-4 py-2 rounded">Añadir</a></li></Link>

        <a href="/" classNameName="text-gray transition-colors duration-300 transform dark:text-gray-200  border-blue-500 mx-1.5 sm:mx-6"><img className="h-6 " src="../public/img-perro.svg" alt="Imagen Meme" /></a>

        <a href="/" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
        </a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">

        </a>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;