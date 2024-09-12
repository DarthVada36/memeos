import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MemeCard from '../components/MemeCard';

const Gallery = () => {
  const memes = useLoaderData();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="w-[12rem] h-[2.8rem] text-center text-bronze text-4xl font-normal leading-[2.81rem] mb-5 font-[bodoni]">Galeria</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
        {memes.map((meme, index) => (
          <MemeCard key={index} meme={meme} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
