import React from 'react'
import { useForm } from 'react-hook-form'
import SubmitBtn from '../components/SubmitBtn'

const CreateMeme = () => {

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form className="w-[798px] h-[688px] bg-milk rounded-[10px] flex flex-col justify-evenly items-center" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="w-[325px] h-[63.07px] text-center text-secondary text-[44px] font-bold font-[bodoni]">Añadir Meme</h2>
      <input className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" {...register("firstName", { required: true, maxLength: 20 })} />
      <input className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="number" {...register("age", { min: 18, max: 99 })} />
      <input className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="number" {...register("age", { min: 18, max: 99 })} />
      <input className="w-[702.24px] h-[38px] p-2.5 rounded-[10px] border-2 border-bronze justify-start items-center gap-2.5 inline-flex" type="number" {...register("age", { min: 18, max: 99 })} />
      <SubmitBtn />
    </form>
  )
}

export default CreateMeme
