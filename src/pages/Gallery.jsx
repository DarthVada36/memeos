import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MemeCard from '../components/MemeCard';

const Gallery = () => {
  const memes = useLoaderData();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {memes.map((meme, index) => (
        <MemeCard key={index} meme={meme} />
      ))}
    </div>
  );
}

export default Gallery;
