import React from 'react'
import { useParams } from 'react-router-dom';

const MemeDetail = () => {

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{meme.title}</h1>
      <img className="w-full h-auto rounded-md" src={meme.image} alt={meme.title}/>
      <p className="text-left text-black mt-4 mb-4">{meme.description}</p>
    </div>
  )
}

export default MemeDetail
