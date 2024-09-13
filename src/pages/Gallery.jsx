import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { getMemes } from '../services/services';

const Gallery = () => {
  const [memes, setMemes] = useState([]); // Memes originales
  const [filteredMemes, setFilteredMemes] = useState([]); // Memes filtrados
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el texto de búsqueda

  useEffect(() => {

    // Fetch de los memes usando getMemes
    const fetchMemes = async () => {
      try {
        const data = await getMemes();
        setMemes(data);
        setFilteredMemes(data); // Inicialmente, los memes filtrados son todos
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    };

    fetchMemes();
  }, []);

    // Filtra los memes cada vez que el usuario escribe algo
    useEffect(() => {
      const results = memes.filter((meme) =>
        meme.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filtra por título
      );
      setFilteredMemes(results);
    }, [searchQuery, memes]); // Se ejecuta cada vez que cambie la búsqueda o los memes
  
    // Función de filtro para el botón de settings (aquí puedes agregar lógica adicional si lo necesitas)
    const handleFilter = () => {
      console.log('Filtrar contenido');
    };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-primary">
      {/* Contenedor máximo limitado al tamaño de la pantalla */}
      <div className="max-w-[1440px] w-full flex flex-col items-center">
        {/* Título de la Galería */}
        <div className="w-[194px] h-[45px] text-center text-bronze text-4xl font-bodoni leading-[44.99px] my-6">
          Galería
        </div>

        {/* Barra de búsqueda */}
        <div className="mb-6 w-full flex justify-center">
          <SearchBar onFilter={handleFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {/* Contenedor de las Cartas centrado */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {filteredMemes.map((meme) => (
            <Card
              key={meme.id}
              image={meme.image}
              name={meme.name}
              date={meme.date}
              author={meme.author}
              stream={meme.stream}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
