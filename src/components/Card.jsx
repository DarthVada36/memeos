import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function Card({ image, name, date, author, stream }) {
  const [isFlipped, setIsFlipped] = useState(false); // Estado para manejar el flip

  // Función para voltear la tarjeta
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-[300px] h-[420px] perspective-1000">
      {/* Contenedor que se voltea */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Parte delantera de la tarjeta */}
        <div className="absolute w-full h-full bg-milk rounded-xl p-6 flex flex-col items-center justify-between backface-hidden transform rotate-y-0">
          <div className="flex-col justify-end items-center gap-9 inline-flex">
            <img
              className="w-64 h-[222px] relative rounded-xl border-4 border-bronze object-cover"
              src={image}
              alt={name}
            />
            <div className="h-[45px] flex-col justify-start items-start gap-[18px] flex">
              <div className="w-64 h-[45px] text-center text-secondary text-lg font-medium font-bodoni">
                {name}
              </div>
            </div>
            <div className="justify-center items-center gap-[17px] inline-flex">
              {/* Botón "Editar" */}
              <SecondaryButton>Editar</SecondaryButton>

              {/* Botón "Detalles" para voltear */}
              <PrimaryButton onClick={handleFlip}>Detalles</PrimaryButton>
            </div>
          </div>
        </div>

        {/* Parte trasera de la tarjeta */}
          <div className="absolute w-full h-full bg-secondary rounded-xl p-6 flex flex-col items-center justify-between backface-hidden transform rotate-y-180">
            <div class="relative w-[273px] h-[410px] rounded-[20px] border border-bronze flex flex-col">
                <button onClick={handleFlip} className="absolute top-2 right-2 w-[30px] h-[30px] flex items-center justify-center bg-bronze rounded-full">
                <img className="w-[15px] h-[15px]" src="./src/img/cerrar.png" alt="cerrar" />
                </button>
                
              <div className="flex-1 flex items-center justify-center text-center p-4 text-xs font-raleway text-white">
                <div>
                  <p>Fecha: {date}</p>
                  <p>Autor: {author}</p>
                  <p>Corriente: {stream}</p>
                </div>
              </div>
              <div className="flex justify-center gap-2 mb-4">
                <PrimaryButton>Ver más</PrimaryButton>
                <SecondaryButton>Eliminar</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
