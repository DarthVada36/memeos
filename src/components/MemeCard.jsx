import React from 'react';
import { Link } from 'react-router-dom';
import DetailsBtn from './DetailsBtn';

const MemeCard = ({ meme }) => (
<div className="w-[300px] h-[420px] p-6 bg-milk rounded-xl justify-center items-center gap-2.5 inline-flex">
    <div className="flex-col justify-end items-center gap-9 inline-flex">
        <img className="w-64 h-[222px] relative rounded-xl border-4 border-bronze" src={meme.image} alt={meme.name} />
        <div className="h-[45px] flex-col justify-start items-start gap-[18px] flex">
            <div className="w-64 h-[45px] text-center text-secondary text-lg font-medium font-[bodoni]">{meme.name}</div>
        </div>
        <div className="h-[34px] justify-center items-center gap-[17px] inline-flex">
          <Link to={`/gallery/meme/${meme.id}`} className="text-blue-500 hover:underline">
            <DetailsBtn />
          </Link>
        </div>
    </div>
</div>
);


export default MemeCard;
