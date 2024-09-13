import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function Card({ imageSrc, title, date, autor, stream }) {
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
              src={imageSrc}
              alt={title}
            />
            <div className="h-[45px] flex-col justify-start items-start gap-[18px] flex">
              <div className="w-64 h-[45px] text-center text-secondary text-lg font-medium font-bodoni">
                {title}
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
          <div className="font-raleway text-xs text-white p-4">
            <p>{title}</p>
            <p>{date}</p>
            <p>{autor}</p>
            <p>{stream}</p>
          </div>

          <div className="justify-center items-center gap-4 inline-flex">
            <PrimaryButton>Ver más</PrimaryButton>
            <SecondaryButton>Eliminar</SecondaryButton>

            {/* Botón "Volver" para regresar a la parte frontal */}
            <PrimaryButton onClick={handleFlip}>Volver</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
