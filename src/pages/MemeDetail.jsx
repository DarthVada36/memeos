import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../services/services';
import { Link } from 'react-router-dom';

const MemeDetail = () => {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getData();
        const selectedMeme = data.find(m => m.id === parseInt(id));
        setMeme(selectedMeme);
      } catch (error) {
        console.error('Error al obtener los datos del meme:', error);
      }
    };

    fetchMeme();
  }, [id]);

  if (!meme) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-[100%] h-[60em] bg-[#ede7e1] flex justify-center items-center gap-20">
      <div>
        <img className="w-[45em] h-[40em] border border-[#9c7e41]" src={meme.image} alt={meme.name} />
      </div>
      <div>
        <div>
          <p><strong>Año:</strong> {meme.year}</p>
          <p><strong>Autor:</strong> {meme.author}</p>
          <p><strong>Corriente:</strong> {meme.current}</p>
        </div>
        <div className="w-[20em] text-[#272525] text-[1.5em] font-['Libre Bodoni'] uppercase">
          <h2>{meme.name}</h2>
        </div>  
        <div>
          <p className="w-[38em] text-[#191919] text-lg font-light font-['Raleway'] leading-7"><strong>Descripción:</strong></p>
          <p className="w-[618px] text-[#191919] text-lg font-light font-['Raleway'] leading-7">{meme.description}</p>
        </div>
        <div className="flex gap-4 mt-2">
          <Link to={`/gallery/editmeme/${meme.id}`} className="text-blue-500 hover:underline">
            <button className="h-[34px] px-3 py-2 bg-[#ede7e1] rounded-[100px] border border-[#9c7e41] justify-center items-end gap-2.5 inline-flex">
             <p className="text-[#4d4c47] text-sm font-normal font-['Libre Bodoni']">Editar</p>
            </button>
          </Link>
            <button className="h-[34px] px-3 py-2 bg-[#4d4c47] rounded-[100px] justify-center items-end gap-2.5 inline-flex">
             <p className="text-[#ede7e1] text-sm font-normal font-['Libre Bodoni']">Eliminar</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MemeDetail;
