import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="font-bodoni">
      <nav className="bg-primary opacity-95 p-1 fixed w-full top-0 z-10">
        <div className="max-w-6xl mt-3 flex justify-between items-center">
          <a href="#" className="text-bronze text-xl font-bold ml-5">
            MemeArte
          </a>
          
          {/* Contenedor para los botones y la imagen */}
          <div className="flex items-center space-x-3 justify-end w-full">
            <Link to="/gallery">
              <a
                href="#home"
                className="text-bronze text-lg hover:transition-transform hover:underline hover:text-milk px-4 py-1 rounded transition-all duration-300"
              >
                Galería
              </a>
            </Link>
            <Link to="/gallery/newmeme">
              <a
                href="#add"
                className="text-bronze text-lg hover:transition-transform hover:underline hover:text-milk px-6 py-3 rounded transition-all duration-300"
              >
                Añadir Meme
              </a>
            </Link>

            {/* Imagen de Doge */}
            <a
              href="/"
              className="flex items-center"
            >
              <img
                className="h-12 object-contain mr-3 mb-2"
                src="https://s3-alpha-sig.figma.com/img/41ba/61ca/78270f095d2af7ebb795442c85c88f79?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~Feqx4SpKmrveDGLWn1SAQA5tpqQuXAtWGaFLvMOxKfJDvmW6paajEQsSw5ObHA32jGnfZqtRiPfF6-owm6nGOjZP1ZUxF4uBtjHZoLNfQDTJ5zIaDlzaGuH07QQh1T4IDJPa90n~xhJ1nOKKwPpgRl9hGXhnfyqUdIOCXgh1v3SGUYtpggo9vKl1ytfW7osUqz3iyLhWI4BI30C8YyCqurSmhcouRAH~0tU1UENAmj1mVrU4HyVkKGTBILmzi8tqo3UgziTExGb6ql3S7koSLw25aA3yXtDlcr4-NreXRJ97LlauS7LslplTIpN2Eg4kThQl1LRl6hh-kDR3marA__"
                alt="Imagen Meme"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
