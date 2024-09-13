import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
<<<<<<< HEAD
    <div>
      <h1 className='text-3xl text-bronze font-bodoni'>Mi vida es un meme</h1>
      <button>Abrir Galería</button>
=======
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Mi vida es un meme</h1>
      <Link to='/gallery'>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Ir a la Exposición</button>
      </Link>
>>>>>>> c8de9a6d82365733626c91522ea43c4b3c4d5393
    </div>
  );
}

export default Home;

