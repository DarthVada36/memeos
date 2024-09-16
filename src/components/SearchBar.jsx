import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para la navegación
import { Link } from 'react-router-dom';

export default function SearchBar({ onFilter, searchQuery, setSearchQuery }) {
    const navigate = useNavigate(); // Hook para navegar

    // Función para manejar el clic en el botón de añadir
    const handleAddMeme = () => {
        navigate('./src/pages/createMeme'); // Redirige a la página de creación de memes hay que cambiarlo
    };

    return (
        <div className="w-[493px] h-[60px] px-2 bg-milk rounded-[32px] shadow border justify-start items-center gap-1.5 inline-flex">
    
            {/* Input de búsqueda */}
            <input
                type="text"
                value={searchQuery} // Se enlaza el valor con el estado
                onChange={(e) => setSearchQuery(e.target.value)} // Actualiza el estado al escribir
                className="grow shrink basis-0 h-[23px] bg-milk outline-none text-secondary  font-bodoni placeholder-bronze/50 pt-1 pl-[30px] pr-[8px]" // Ajusta el padding aquí
                placeholder="Buscar..."
            />
    
            {/* Botón de añadir meme con ícono de "plus" */}
            <Link to="/gallery/newmeme">
            <button
                onClick={handleAddMeme}
                className="w-[51px] h-[51px] relative flex items-center justify-center  bg-bronze rounded-full hover:bg-secondary hover:animate-spin"
            >
                <img className="w-[25.50px] h-[25.50px]" src="./src/img/plus.png" alt="Add meme" />
            </button>
            </Link>
        </div>
    );
    
    
}

