import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Estado para controlar el menú móvil
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="font-bodoni">
      <nav className="bg-primary opacity-95 p-1 fixed w-full top-0 z-10">
        <div className="max-w-6xl mt-3 flex justify-between items-center mx-auto px-4">
          {/* Título o Logo */}
          <a
            href="/"
            className="block text-bronze text-lg px-4 py-2 hover:bg-secondary hover:text-milk"
          >
            {/* Imagen de Doge */}
            <img
              className="h-12 object-contain"
              src="../src/img/dogelogo.png"
              alt="Imagen Meme"
            />
          </a>

          {/* Botón hamburguesa para móviles */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-bronze focus:outline-none"
            >
              {/* Ícono de menú hamburguesa */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menú principal - visible en pantallas grandes */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/gallery"
              className="text-bronze text-lg hover:underline hover:text-milk px-4 py-1 rounded transition-all duration-300"
            >
              Galería
            </Link>
            <Link
              to="/gallery/newmeme"
              className="text-bronze text-lg hover:underline hover:text-milk px-6 py-3 rounded transition-all duration-300"
            >
              Añadir Meme
            </Link>
          </div>

          {/* Menú desplegable en móviles - controlado por el estado */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:hidden absolute top-16 right-0 w-1/2 bg-primary shadow-lg rounded-b-md`}
          >
            <Link
              to="/gallery"
              className="block text-bronze text-lg px-4 py-2 hover:bg-secondary hover:text-milk"
              onClick={toggleMenu} // Cerrar menú al hacer clic
            >
              Galería
            </Link>
            <Link
              to="/gallery/newmeme"
              className="block text-bronze text-lg px-4 py-2 hover:bg-secondary hover:text-milk"
              onClick={toggleMenu} // Cerrar menú al hacer clic
            >
              Añadir Meme
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
