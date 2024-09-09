import React from "react";

const CreateMeme = () => {
  return (
    <div className="w-[80%]  bg-[#ede7e1] p-10 flex flex-col justify-center items-center">
      
      <h1 className="text-center text-[#4d4c47] text-[44px] font-bold font-['Libre Bodoni'] mt-6 mb-12">
        Añadir Meme
      </h1>
      <div className="container flex flex-col gap-4">
      <input
        className=" p-2.5 left-[47.88px] top-[183.96px]  rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Título de meme"
      />
      <input
        className=" p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Fecha de aparición"
      />
      <input
        className=" p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Autor"
      />
      <input
        className=" p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Corriente"
      />
      <textarea
        className="w-ful h-[124px] p-2.5 left-[47.88px] top-[183.96px] rounded-[10px] border-2 border-[#9c7e41] justify-start items-center gap-2.5 inline-flex"
        placeholder="Descripción"
      />
      
      </div>

      <div className=" w-full mt-6 p-2.5 left-[47.88px] top-[619px]  bg-[#272525] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-[#ede7e1] text-[15px] font-medium font-['Libre Bodoni']">
          Enviar
        </div>
      </div>
    </div>
  );
};

export default CreateMeme;
