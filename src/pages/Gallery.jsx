import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MemeCard from '../components/MemeCard';

const Gallery = () => {
  const memes = useLoaderData();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="w-[194px] h-[45px] text-center text-bronze text-4xl font-normal leading-[44.99px] mb-5 font-[bodoni]">Galeria</h2>
      <div className="flex items-center gap-4" >
        {memes.map((meme, index) => (
          <MemeCard key={index} meme={meme} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
