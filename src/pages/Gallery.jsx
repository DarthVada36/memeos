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
