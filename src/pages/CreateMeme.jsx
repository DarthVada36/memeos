import React from "react";
import { useForm } from "react-hook-form";



const CreateMeme = () => {
  const { register, handleSubmit, formState:{errors}, setValue, reset, } = useForm({
    
    defaultValues: {
      nombre: "",
      fechaDeaparición: "",
      autor: "",
      corriente: "",
      descripcion: "",
    },
  });
  
  const onSubmit = handleSubmit((data) => {
    console.log(data);

    //reset({
    //  nombre:'',
    //  fechaDeaparición:'',
    //  autor:'',
    // corriente:'',
    //  descripcion:''
    //})
    reset();
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80%]  bg-[#ede7e1] p-10 flex flex-col justify-center items-center">
      
      <h1 className="text-center text-[#4d4c47] text-[44px] font-bold font-['Libre Bodoni'] mt-6 mb-12">
        Añadir Meme
      </h1>
      <div className="container flex flex-col gap-4">
      <input
        type="text" className=" p-2.5 left-[47.88px] top-[183.96px]  rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Título de meme"
        {...register("nombre", {
            required: {
              value: true,
              message: 'El nombre del meme es requerido'
            },
            maxLength: 20,
            minLength: 2,
        })}
      />
        {errors.nombre?.type === "required" && <span>El nombre del meme es requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
         
    
      <input
        type="date" className="p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-between items-center gap-2.5 flex"
        placeholder="Fecha de aparición"
        {...register("fechaDeAparición",{
          required: {
            value: true,
             message: "Fecha de aparición es requerida",
          },
          validate: (value) => {

          }
          }
        )}
      />
      {errors.fechaDeaparición && (
          <span>{errors.fechaDeaparición.message}</span>
        )}

      <input
        className=" p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Autor"
        {...register("autor", {
          required: {
            value: true,
            message: 'El nombre del autor es requerido'
          },
          maxLength: 20,
          minLength: 2,
      })}
    />
      {errors.autor?.type === "required" && <span>El nombre del autor es requerido</span>}
      {errors.autor?.type === "maxLength" && (
        <span>Nombre no debe ser mayor a 20 caracteres</span>
      )}
      {errors.autor?.type === "minLength" && (
        <span>Debe ser mayor a 2 caracteres</span>
      )}
      
      <input
        className=" p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Corriente"
        {...register("corriente")}
      />
      <textarea
        className="w-ful h-[124px] p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Descripción"
      />
      
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
