import React from 'react';
import { Link } from 'react-router-dom';

const MemeCard = ({ meme }) => (
<div className="w-[300px] h-[420px] p-6 bg-[#ede7e1] rounded-xl justify-center items-center gap-2.5 inline-flex">
    <div className="flex-col justify-end items-center gap-9 inline-flex">
        <img className="w-64 h-[222px] relative rounded-xl border-4 border-dashed border-[#9c7e41]" src={meme.image} alt={meme.name} />
        <div className="h-[45px] flex-col justify-start items-start gap-[18px] flex">
            <div className="w-64 h-[45px] text-center text-[#4d4c47] text-lg font-medium font-['Libre Bodoni']">{meme.name}</div>
        </div>
        <div className="h-[34px] justify-center items-center gap-[17px] inline-flex">
          <Link to={`/gallery/meme/${meme.id}`} className="text-blue-500 hover:underline">
            <button className="h-[34px] px-3 py-2 bg-[#4d4c47] rounded-[100px] justify-center items-end gap-2.5 inline-flex">
              <p className="text-[#ede7e1] text-sm font-normal font-['Libre Bodoni']">Detalles</p>
            </button>
          </Link>
        </div>
    </div>
</div>
);


export default MemeCard;
