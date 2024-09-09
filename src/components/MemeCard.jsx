import React from 'react';

const MemeCard = ({ meme }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={meme.image} alt={meme.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{meme.title}</div>
      <p className="text-gray-700 text-base">{meme.description}</p>
    </div>
  </div>
);


export default MemeCard;
