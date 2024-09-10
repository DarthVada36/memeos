import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Gallery = () => {
  let [list, setList] = useState([])
  let getAxios = async () => {
    await axios.get("http://localhost:3000/memes").then((value) => setList(value.data))
  }

  
  useEffect(() => {
    getAxios()
  })

  return ( 
    <div>
      {
list.map((item)=> {
  return <li key={item.id} className='w-full rounded-2xl border'>
    <div className="container w-[80%] min-h-14 flex flex-col justify-center items-center">
    <h1>{item.name}</h1>
    <p>{item.description}</p>
    <p>{item.year}</p>
    <p>{item.author}</p>

    </div>
  </li>
})
      }
    </div>
  )
}

export default Gallery


/* import { useLoaderData } from "react-router-dom";
import MemeCard from "../components/MemeCard";


const Gallery = () => {

    // const memes = useLoaderData();

    // TEST
    const memes = [
        {
        id: 1,
        title: "Test Meme",
        description: "Meme de prueba.",
        image: "https://www.recreoviral.com/wp-content/uploads/2015/12/Memes-renacentistas-9.jpg"
        }
    ]


  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Galeria de Memes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {memes.map(meme => (
            <MemeCard key={meme.id} meme={meme}/>
        ))}
      </div>
    </div>
  );
}

export default Gallery
 */