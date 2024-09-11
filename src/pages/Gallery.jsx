import React, { useState, useEffect } from 'react';
// import Layout from '../layout/Layout';
// import PrimaryButton from "../components/PrimaryButton";
import Card from '../components/Card';

const Gallery = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/memes')
      .then((response) => response.json())
      .then((data) => setMemes(data));
  }, []);

  return (
    <div className="w-[1440px] h-[1613px] relative bg-primary">
      <div className="w-[194px] h-[45px] text-center text-[#9c7e41] text-4xl font-bodoni leading-[44.99px]">
        Galería
      </div>
      
      <div>searchbar</div>

      <div className="flex flex-wrap gap-4">
        {memes.map((meme) => (
          <Card key={meme.id} imageSrc={meme.imageSrc} title={meme.title} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
