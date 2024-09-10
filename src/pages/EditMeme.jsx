import { useState } from "react";
import { useForm } from "react-hook-form";

const EditMeme = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <div className="w-[325px] h-[63.07px] text-center text-[#4d4c47] text-[44px] font-bold">Editar Meme</div>
      <form className="flex flex-col gap-4">
        <div className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex">
          <div className="text-[#aaa9a7] text-[15px] font-medium font-['Raleway']">Título de meme</div>
        </div>
        <div className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-[#9c7e41] justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#aaaaa7] text-[15px] font-medium font-['Raleway']">Fecha de aparición</div>
        </div>
        <div className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-[#9c7e41] justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#aaaaa7] text-[15px] font-medium font-['Raleway']">Autor</div>
        </div>
        <div className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-[#9c7e41] justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#aaaaa7] text-[15px] font-medium font-['Raleway']">Corriente</div>
        </div>
        <div className="w-[702px] h-[92px] p-2.5 rounded-[10px] border-2 border-[#9c7e41] justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#aaaaa7] text-[15px] font-medium font-['Raleway']">Descripción</div>
        </div>
        <div className="w-[702.24px] h-[47px] p-2.5 rounded-[10px] justify-start items-center gap-[17px] inline-flex">
          <img className="w-[27px] h-[27px]" src="https://via.placeholder.com/27x27" />
          <div className="w-[111px] text-[#aaaaa7] text-[15px] font-medium font-['Raleway']">Añadir archivo</div>
        </div>
        <div className="w-[702.24px] h-[39px] p-2.5 bg-[#272525] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#ede7e1] text-[15px] font-medium font-['Libre Bodoni']">Enviar</div>
        </div>
      </form>
    </div>
  )
}

export default EditMeme

