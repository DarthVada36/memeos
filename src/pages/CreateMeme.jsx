import React from 'react';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/SubmitBtn';
import { Link } from 'react-router-dom';
import CloseBtn from '../components/CloseBtn';
import { postData } from '../services/services';
import { useNavigate } from 'react-router-dom';

const CreateMeme = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await postData(data);
      console.log('Meme creado:', response);
      navigate('/gallery')
    } catch (error) {
      console.error('Error al crear el meme:', error);
    }
  };
  console.log(errors);

  return (
    <form className="w-[50rem] h-[43rem] bg-milk rounded-[10px] flex flex-col justify-center gap-6 items-center" onSubmit={handleSubmit(onSubmit)}>
      <Link to='/gallery' className="relative left-[23rem] bottom-[2rem]">
        <CloseBtn />
      </Link>
      <h2 className="text-center text-[#4d4c47] text-[44px] font-bold font-[bodoni] mb-[2rem]">Añadir Meme</h2>
      <input className="w-[44rem] h-[2.5rem] font-[bodoni] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="text" placeholder="Título del meme" {...register("name", { required: true, maxLength: 80 })} />
      <input className="w-[44rem] h-[2.5rem] font-[bodoni] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="text" placeholder="Año de aparición" {...register("year", { required: true, maxLength: 4 })} />
      <input className="w-[44rem] h-[2.5rem] font-[bodoni] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="text" placeholder="Autor" {...register("author", { required: true })} />
      <input className="w-[44rem] h-[2.5rem] font-[bodoni] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="text" placeholder="Corriente" {...register("current", { required: true, maxLength: 15 })} />
      <textarea className="w-[702px] h-[92px] font-[bodoni] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-start gap-2.5 inline-flex" placeholder="Descripción" {...register("description", { required: true, maxLength: 500 })} />
      <input className="w-[44rem] h-[2.5rem] font-[bodoni] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="url" placeholder="URL de la imagen" {...register("image", { required: true })} />
      <SubmitBtn />
    </form>
  );
};

export default CreateMeme;
