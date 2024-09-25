import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  subirImagenCloudinary,
  createMeme,
  getMemes,
} from "../services/services";
import { useNavigate } from "react-router-dom";

const CreateMeme = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setMensaje("");

    try {
      const imageUrl = await subirImagenCloudinary(image);
      const memeCreado = await createMeme({
        name: data.name,
        date: data.date,
        description: data.description,
        author: data.author,
        image: imageUrl,
      });
      navigate("/gallery");
    } catch (error) {
      setError.Mensaje("Error creating meme. Please try again. ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate("/gallery"); // ruta dnd nos lleva el formulario
  };

  return (
    <div className="relative lg:w-[710px] font-raleway h-[700px] my-24 mx-auto bg-milk p-10 flex flex-col justify-center items-center rounded-[10px] top-20">
      {/* Botón de cerrar */}

      <button
        onClick={handleClose}
        className="absolute top-2 right-10 text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:text-secondary cursor-pointer transition-all duration-300"
      >
        &times;
      </button>

      {/* Formulario */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center items-center"
      >
        <h1 className="text-center w-full text-secondary text-[28px] sm:text-[36px] md:text-[44px] font-bold font-bodoni mt-6 mb-12">
          Añadir Meme
        </h1>

        {/* Mostramos mensajes de error o éxito  */}
        {error && <p className="text-red-500">{error}</p>}
        {mensaje && <p className="text-green-500">{mensaje}</p>}

        <div className="container flex flex-col gap-4">
          {/* Nombre */}
          <input
            type="text"
            className="w-full bg-transparent text-primary p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
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
            className="w-full bg-transparent text-primary p-2.5 rounded-[10px] border-2 border-bronze"
            placeholder="Fecha de aparición"
            {...register("dateOfOccurrence", {
              required: "La fecha es requerida",
            })}
          />
          {errors.dateOfOccurrence && (
            <span>{errors.dateOfOccurrence.message}</span>
          )}

          {/* Autor */}
          <input
            type="text"
            className="w-full bg-transparent text-primary p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
            placeholder="Autor"
            {...register("author", {
              required: "El campo autor es requerido",
              minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" },
            })}
          />
          {errors.author && <span>{errors.author.message}</span>}

          {/* Corriente */}
          <input
            className="w-full bg-transparent text-primary p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
            placeholder="Corriente"
            {...register("stream", {
              required: "El campo corriente es requerido",
              minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" },
            })}
          />
          {errors.stream && <span>{errors.stream.message}</span>}

          {/* Descripción  */}
          <textarea
            className="w-full bg-transparent text-primary h-[124px] p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex"
            placeholder="Descripción"
            {...register("description", {
              required: "El campo descripción es requerido",
            })}
          />
          {errors.description && <span>{errors.descrition.message}</span>}

          {/* Subir archivo  */}
          <div className="w-full p-2.5 flex items-center gap-2.5">
            {/* El label actúa como el botón de subida */}
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex items-center gap-2"
            >
              <img
                className="w-[27px] h-[27px]"
                src="https://s3-alpha-sig.figma.com/img/41fd/e56c/1e78eaf6f1d23ea4889a60529030c98a?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRAMkrUWVihXv4NYcXUZmWK4-o0nkgD~xW7kSeS6lywKBTafVn2VShoBY9jicn3B3ZW1AHpapcv5hQ0J6UgJn5am5UVp1q5hEzStycSpChBvtJLyAJtjA2xRIpPO7JKfLSi4OhpwotMPQ-JCFFP4tMJZK5MqdykZ-Ih~fMSWXf9YRSMLxKfQ3bOJisx~7AczmXXOBbt2YR12e55Og~fMLixgubCeYsCqJl5DXdyYNg9u5rzl9-gLLSgLkTuA5iISdnNEejD1jmqO2HF6pEFyzxYJ4oPRRAVD7fOPiyYRVLMnuWNkpeaw4IHb0fU6-nF0PARexBM9QVQzGCZ6VtQ4yQ__"
                alt="Subir archivo"
              />

              {/* Placeholder de texto */}
              <span className="text-[15px] font-medium font-raleway text-secondary">
                Añadir archivo
              </span>
            </label>

            {/* Input file escondido */}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          className="w-full mt-6 p-2.5 bg-primary rounded-[20px] justify-center items-center flex"
          disabled={loading}
        >
          <span className="text-milk text-[15px] font-medium font-bodoni">
            {loading ? "Enviando..." : "Enviar"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default CreateMeme;
