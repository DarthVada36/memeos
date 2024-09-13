import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header classNameName="font-bodoni">
      <nav classNameName="bg-primary p-4 fixed w-full top-0 z-10">
        <div classNameName="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" classNameName="text-bronze text-2xl font-bold">
            Meme
          </a>
          <ul classNameName="flex space-x-6">
            <Link to="/gallery">
              <li>
                <a
                  href="#home"
                  classNameName="text-gray hover:bg-secondary hover:text-milk px-4 py-2 rounded"
                >
                  Galería
                </a>
              </li>
            </Link>
            <Link to="/gallery/newmeme">
              <li>
                <a
                  href="#add"
                  classNameName="text-gray hover:bg-secondary hover:text-milk px-4 py-2 rounded"
                >
                  Añadir
                </a>
              </li>
            </Link>

            <a
              href="/"
              classNameName="text-gray transition-colors duration-300 transform dark:text-gray-200  border-blue-500 mx-1.5 sm:mx-6"
            >
              <img
                classNameName="h-6 "
                src="../public/img-perro.svg"
                alt="Imagen Meme"
              />
            </a>

            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            ></a>

            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            ></a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
