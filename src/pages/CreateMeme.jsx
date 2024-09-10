import React from "react";
import { useForm } from "react-hook-form";
import { createMeme } from "../services/services";
import { useNavigate } from "react-router-dom";

const CreateMeme = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
      try {
          await createMeme(data)
          navigate('/')
      } catch (error) {
          console.error('Error creating meme:', error)
      }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80%]  bg-[#ede7e1] p-10 flex flex-col justify-center items-center">
      
      <h1 className="text-center text-[#4d4c47] text-[44px] font-bold font-['Libre Bodoni'] mt-6 mb-12">
        Añadir Meme
      </h1>
      <div className="container flex flex-col gap-4">

        {/* Nombre */}
      <input
        type="text" className=" p-2.5 left-[47.88px] top-[183.96px]  rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Título de meme"
        {...register("nombre", {
          required: "El campo nombre es requerido",
          minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" }
        })}
      />
        {errors.nombre && <span>{errors.nombre.message}</span>}
         
      {/* Fecha */}
      <input
        type="date" className="p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-between items-center gap-2.5 flex"
        placeholder="Fecha de aparición"
        {...register("fechaDeaparición", {
          required: "La fecha es requerida",
        })}
      />
       {errors.fechaDeaparición && <span>{errors.fechaDeaparición.message}</span>}

      {/* Autor */} 
      <input
        className=" p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Autor"
        {...register("autor", {
          required: "El campo autor es requerido",
          minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" }
        })}
      />
      {errors.autor && <span>{errors.autor.message}</span>}
      
      {/* Corriente */}
      <input
        className=" p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Corriente"
        {...register("corriente", {
          required: "El campo corriente es requerido",
          minLength: { value: 2, message: "Debe ser mayor a 2 caracteres" }
        })}
      />
      {errors.corriente && <span>{errors.corriente.message}</span>}
      
      {/* Descripción  */}
      <textarea
        className="w-ful h-[124px] p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Descripción"
        {...register("descripcion", {
          required: "El campo descripción es requerido",
        })}
      />
      {errors.descripcion && <span>{errors.descripcion.message}</span>}

      {/* Añadir archivo  */}
      

      </div>

      <button type="submit" className=" w-full mt-6 p-2.5 left-[47.88px] top-[619px]  bg-[#272525] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-[#ede7e1] text-[15px] font-medium font-['Libre Bodoni']">
          Enviar
        </div>
      </button>
    </form>
  );
};

export default CreateMeme;
