import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import ReactCardFlip from 'react-card-flip';

export default function Card({ image, name, date, author, stream }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    const newFlipState = !isFlipped;
    console.log('isFlipped:', newFlipState); // Verifica el estado actualizado
    setIsFlipped(newFlipState); // Cambia el estado
  };

  return (

    <div className="relative w-[300px] h-[420px] perspective-1000">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Parte delantera de la tarjeta */}
      <div className="w-full h-full bg-milk rounded-xl p-6 backface-hidden flex flex-col items-center justify-between">
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
      <div className="w-full h-full bg-secondary rounded-xl p-6 backface-hidden flex flex-col items-center justify-between">
        <div className="font-raleway text-xs text-white p-4 text-center">
          <p>{name}</p>
          <p>Fecha: {date}</p>
          <p>Autor: {author}</p>
          <p>Corriente: {stream}</p>
        </div>

        <div className="justify-center items-center gap-4 inline-flex">
          {/* Botón "Volver" para regresar a la parte frontal */}
          <PrimaryButton onClick={handleFlip}>Volver</PrimaryButton>
          <SecondaryButton>Eliminar</SecondaryButton>
        </div>
      </div>
    </ReactCardFlip>
    </div>
  );
}
