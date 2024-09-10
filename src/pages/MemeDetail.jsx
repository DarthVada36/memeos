import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData, deleteMeme } from '../services/services';
import { Link } from 'react-router-dom';
import EditBtn from '../components/EditBtn';
import DeleteBtn from '../components/DeleteBtn';

const MemeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getData();
        const selectedMeme = data.find(m => m.id === (id));
        setMeme(selectedMeme);
      } catch (error) {
        console.error('Error al obtener los datos del meme:', error);
      }
    };

    fetchMeme();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteMeme(id);
      navigate('/gallery');
    } catch (error) {
      console.error('Error al eliminar el meme:', error);
    }
  };

  if (!meme) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-[100%] h-[60em] bg-milk flex justify-center items-center gap-20 rounded-xl">
      <div>
        <img className="w-[45em] h-[40em] border border-bronze" src={meme.image} alt={meme.name} />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <p className="font-[raleway] font-semibold"><strong>Año:</strong> {meme.year}</p>
          <p className="font-[raleway] font-semibold"><strong>Autor:</strong> {meme.author}</p>
          <p className="font-[raleway] font-semibold"><strong>Corriente:</strong> {meme.current}</p>
        </div>
        <div className="w-[20em] text-primary text-[1.5em] font-bold font-[bodoni] uppercase">
          <h2>{meme.name}</h2>
        </div>  
        <div>
          <p className="w-[38em] text-[#191919] text-lg font-light font-[raleway] leading-7"><strong>Descripción:</strong></p>
          <p className="w-[618px] text-[#191919] text-lg font-light font-[raleway] leading-7">{meme.description}</p>
        </div>
        <div className="flex gap-4 mt-2 justify-center">
          <Link to={`/gallery/editmeme/${meme.id}`} className="text-blue-500 hover:underline">
            <EditBtn />
          </Link>
          <DeleteBtn onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default MemeDetail;
