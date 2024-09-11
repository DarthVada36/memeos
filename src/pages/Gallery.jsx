import React, { useState, useEffect } from 'react';
// import Layout from '../layout/Layout';
// import PrimaryButton from "../components/PrimaryButton";
import Card from '../components/Card';

const Gallery = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/memes')
      .then((response) => response.json())
      .then((data) => setMemes(data));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-primary">
      {/* Contenedor máximo limitado al tamaño de la pantalla */}
      <div className="max-w-[1440px] w-full flex flex-col items-center">
        {/* Título de la Galería */}
        <div className="w-[194px] h-[45px] text-center text-[#9c7e41] text-4xl font-bodoni leading-[44.99px] my-6">
          Galería
        </div>
      
      {/* Barra de búsqueda */}
      <div className="mb-6">searchbar</div>

        {/* Contenedor de las Cartas centrado */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {memes.map((meme) => (
            <Card key={meme.id} imageSrc={meme.imageSrc} title={meme.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
