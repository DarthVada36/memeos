import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMemeById } from "../services/services";
import { deleteMeme } from "../services/services";
import { useNavigate } from "react-router-dom";

const MemeDetail = () => {
  const navigate = useNavigate();
  const [meme, setMeme] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getMemeById(id);
        setMeme(data);
      } catch (error) {
        console.error("Error fetching meme:", error);
      }
    };

    fetchMeme();
  }, [id]);

  const MemeDelet = async () => {
    try {
      await deleteMeme(id);
      navigate("/gallery");
    } catch (error) {
      console.error("Error al eliminar el meme:", error);
    }
  };

  if (!meme) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-primary w-full flex-col lg:h-screen flex items-center mt-32">
      <div className="flex-col font-raleway text-primary lg:bg-milk bg-gray lg:p-8 w-full lg:min-h-[80%] justify-between items-center">
        <div className="w-full items-end text-end p-4">
          <Link to="/gallery">
            <span className="font-bold text-3xl">X</span>
          </Link>
        </div>

        {/* Ajuste de diseño para poner los detalles a la izquierda y la imagen a la derecha */}
        <div className="lg:flex lg:justify-between lg:items-center lg:gap-8">
          
          {/* Sección derecha: Marco dorado y la imagen */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Contenedor del marco dorado */}
            <div className="relative w-[47rem] h-[47rem]">
              <img
                src="/src/img/marcodorado.png"
                alt="Marco dorado"
                className="w-full h-full"
              />
              {/* Imagen centrada dentro del marco */}
              <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
                <img
                  className="w-[35.5rem] h-[39rem] object-cover"
                  src={meme.image}
                  alt={meme.name}
                />
              </div>
            </div>
          </div>

          {/* Sección izquierda: Detalles del meme */}
          <div className="lg:w-1/2 lg:text-left text-center lg:ml-6 max-lg:mt-6 max-lg:bg-milk max-lg:rounded-t-3xl max-lg:p-4">
            <div>
              <p>
                <span className="font-bold">Fecha: </span>
                {meme.date}
              </p>
              <p>
                <span className="font-bold">Autor: </span>
                {meme.author}
              </p>
              <p>
                <span className="font-bold">Corriente: </span>
                {meme.stream}
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold font-bodoni my-6">
                {meme.name}
              </h1>
              <h2 className="text-2xl font-bodoni">Descripción</h2>
              <p className="text-xl">{meme.description}</p>
            </div>
            <div className="w-full flex justify-center lg:justify-start gap-6 mt-12 max-lg:pb-12">
              <Link to={`/gallery/editmeme/${meme.id}`}>
                <button className="rounded-3xl font-bodoni border py-2 px-6 flex ">
                  Editar
                </button>
              </Link>
              <button
                onClick={MemeDelet}
                className="rounded-3xl font-bodoni border py-2 px-6 flex bg-primary text-milk"
              >
                Eliminar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MemeDetail;
