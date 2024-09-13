import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMemeById, updateMeme } from "../services/services";
import { useForm } from "react-hook-form";

const EditMeme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meme, setMeme] = useState({});
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const data = await getMemeById(id);
        setMeme(data);
      } catch (error) {
        console.error("Error getting meme: ", error);
      }
    };
    fetchMeme();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await updateMeme(id, data);
      navigate("/gallery");
    } catch (error) {
      console.error("Error updating meme:", error);
    }
  };

  const handleClose = () => {
    navigate("/gallery");
  };

  return (
    <div className="relative w-[80%] mx-auto bg-milk p-10 flex flex-col justify-center items-center rounded-[10px]">
      
      {/* Botón de cerrar */}
      <button
        onClick={handleClose}
        className="absolute top-8 right-10 text-[24px] text-primary"
      >
        &times;
      </button>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center w-full text-secondary text-[28px] sm:text-[36px] md:text-[44px] font-bold font-['Libre Bodoni'] mt-6 mb-12">
          Editar Meme
        </h1>

        <div className="container flex flex-col gap-4">

          {/* Nombre */}
          <input
            type="text"
            className="w-full bg-milk p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
            placeholder="Título de meme"
            {...register("name", {
              required: "El campo nombre es requerido",
              minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}

          {/* Fecha */}
          <input
            type="date"
            className="w-full bg-milk p-2.5 rounded-[10px] border-2 border-bronze"
            placeholder="Fecha de aparición"
            {...register("dateOfOccurrence", {
              required: "La fecha es requerida",
            })}
          />
          {errors.dateOfOccurrence && <span>{errors.dateOfOccurrence.message}</span>}

          {/* Autor */}
          <input
            type="text"
            className="w-full bg-milk p-2.5 rounded-[10px] border-2 border-bronze"
            placeholder="Autor"
            {...register("author", {
              required: "El campo autor es requerido",
              minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" },
            })}
          />
          {errors.author && <span>{errors.author.message}</span>}

          {/* Corriente */}
          <input
            className="w-full bg-milk p-2.5 rounded-[10px] border-2 border-bronze"
            placeholder="Corriente"
            {...register("corriente", {
              required: "El campo corriente es requerido",
              minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" },
            })}
          />
          {errors.corriente && <span>{errors.corriente.message}</span>}

          {/* Descripción */}
          <textarea
            className="w-full bg-milk h-[124px] p-2.5 rounded-[10px] border-2 border-bronze"
            placeholder="Descripción"
            {...register("descripcion", {
              required: "El campo descripción es requerido",
            })}
          />
          {errors.descripcion && <span>{errors.descripcion.message}</span>}

          {/* Botón enviar */}
          <button
            type="submit"
            className="w-full mt-6 p-2.5 bg-[#272525] rounded-[20px] justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-[#ede7e1] text-[15px] font-medium font-['Libre Bodoni']">
              Enviar
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMeme;
