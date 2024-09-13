import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { subirImagenCloudinary, createMeme, getMemes } from "../services/services";
import { useNavigate } from "react-router-dom";

const CreateMeme = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    //SetError('');
    setMensaje('');

    try {
      const imageUrl = await subirImagenCloudinary(image);
      const memeCreado = await createMeme({
        name: data.name,
        year: data.year,
        description: data.description,
        author: data.author,
        image: imageUrl

      });
      navigate('/gallery');

    } catch (error) {
      set.Mensaje("Error creating meme:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    navigate('/gallery');  // ruta dnd nos lleva el formulario 
  };

  return (
    <div className="relative w-[80%] mx-auto bg-milk p-10 flex flex-col justify-center items-center rounded-[10px]" > 
    
    {/* Botón de cerrar */}
    <button 
        onClick={handleClose} 
        className="absolute top-8 right-10 text-[24px] text-primary"
      >
      &times;
      </button>  

     {/* Formulario */}

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-center w-full text-secondary text-[28px] sm:text-[36px] md:text-[44px] font-bold font-['Libre Bodoni'] mt-6 mb-12">
        Añadir Meme
      </h1>

      {/* Mostramos mensajes de error o éxito  */}
      {error && <p className="text-red-500">{error}</p>}
      {mensaje && <p className="text-green-500">{mensaje}</p>}

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
        {errors.nombre && <span>{errors.nombre.message}</span>}
      

        {/* Fecha */}
        <input
          type="date"
          className="w-full bg-milk p-2.5 rounded-[10px] border-2 border-bronze"
          placeholder="Fecha de aparición"
          {...register("dateOfOccurrence", {
            required: "La fecha es requerida",
          })}
        />
        {errors.fechaDeaparición && (
          <span>{errors.fechaDeaparición.message}</span>
        )}

        {/* Autor */}
        <input
          type="text"
          className="w-full bg-milk p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
          placeholder="Autor"
          {...register("author", {
            required: "El campo autor es requerido",
            minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" },
          })}
        />
        {errors.autor && <span>{errors.autor.message}</span>}

        {/* Corriente */}
        <input
          className="w-full bg-milk p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
          placeholder="Corriente"
          {...register("corriente", {
            required: "El campo corriente es requerido",
            minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" },
          })}
        />
        {errors.corriente && <span>{errors.corriente.message}</span>}

        {/* Descripción  */}
        <textarea
          className="w-full bg-milk h-[124px] p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
          placeholder="Descripción"
          {...register("descripcion", {
            required: "El campo descripción es requerido",
          })}
        />
        {errors.descripcion && <span>{errors.descripcion.message}</span>}

        {/* Subir archivo  */}
        <div className="w-full p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex">
          
          <img
            className="w-[27px] h-[27px]"
            src="src/img/agregar-archivo.png"
          />
          <div className="w-[111px] text-[15px] font-medium font-raleway">
          <input className="w-full" 
          type="file"
          placeholder="añadir archivo" 
          onChange={(e) => setImage(e.target.files[0])}
          required
           />
          </div>
        </div>
      </div>
      
      {/* Botón enviar */ }
      <button
        type="submit"
        className=" w-full mt-6 p-2.5 left-[47.88px] top-[619px]  bg-[#272525] rounded-[20px] justify-center items-center gap-2.5 inline-flex"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Añadir meme'}
        <div className="text-milk text-[15px] font-medium font-bodoni">
          Enviar
        </div>
      </button>
    </form>
    </div>
  );
};

export default CreateMeme;
