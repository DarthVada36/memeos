import React from 'react'
import { useParams } from 'react-router-dom';

const MemeDetail = () => {

  const { id } = useParams();

  const memes = [
    {
    id: 1,
    title: "Test Meme",
    description: "Meme de prueba.",
    image: "https://www.recreoviral.com/wp-content/uploads/2015/12/Memes-renacentistas-9.jpg"
    }
]

  const meme = memes.find(m => m.id === parseInt(id));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{meme.title}</h1>
      <img src={meme.image} alt={meme.title}/>
      <p className="text-left text-black mt-4 mb-4">{meme.description}</p>
    </div>
  )
}

export default MemeDetail
