import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

export default function Card({ image, name, date, author, stream, id }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <div className="relative w-[300px] h-[420px] perspective-1000">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Parte delantera de la tarjeta */}
        <div className="w-[300px] h-[420px] bg-milk rounded-xl p-6 backface-hidden flex flex-col items-center justify-between shadow-lg">
          <div className="flex-col justify-end items-center gap-9 inline-flex">
            <img
              className="w-64 h-[222px] relative rounded-xl border-4 border-bronze object-cover"
              src={image}
              alt={name}
            />
            <div className="h-[45px] flex-col justify-start items-start gap-[18px] flex">
              <div className="w-64 h-[45px] text-center text-secondary text-m leading-tight font-medium font-bodoni">
                {name}
              </div>
            </div>
            <div className="justify-center items-center gap-4 inline-flex">
              {/* Botón "Detalles" para voltear */}
              <button onClick={handleFlip} className="bg-secondary text-milk rounded-3xl py-2 px-4 font-bodoni transition duration-300 ease-in-out hover:bg-milk hover:text-secondary hover:border hover:border-bronze">Detalles</button>
            </div>
          </div>
        </div>

        {/* Parte trasera de la tarjeta */}
        <div className="w-[300px] h-[420px] bg-secondary rounded-xl p-6 backface-hidden flex flex-col justify-between shadow-lg">
          <div className="w-full h-full flex flex-col justify-between items-center rounded-[20px] border border-bronze p-4">
            {/* Información de la tarjeta */}
            <div className=" p-6 mt-10 text-center">
              <p className="text-bronze font-bodoni text-m leading-tight">{name}</p>
              <br />
              <div className="text-xs text-milk">
                <p>Fecha: {date}</p>
                <p>Autor: {author}</p>
                <p>Corriente: {stream}</p>
              </div>
            </div>

            {/* Botón de cerrar */}
            <button onClick={handleFlip} className="absolute top-2 right-2 w-[30px] h-[30px] flex items-center justify-center bg-bronze rounded-full">
              <img className="w-[15px] h-[15px]" src="./src/img/cerrar.png" alt="cerrar" />
            </button>

            {/* Botones de "Ver más" y "Eliminar" dentro del mismo borde */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <Link to = {`/gallery/meme/${id}`}>
              <button
                className="bg-secondary text-milk border border-bronze rounded-3xl py-2 px-4 font-bodoni transition duration-300 ease-in-out hover:bg-primary hover:text-milk"
              >
                Ver más
              </button>
              </Link>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}






