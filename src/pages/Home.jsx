import React from 'react'
import { Link } from 'react-router-dom'
import HomeBtn from '../components/HomeBtn';

const Home = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary gap-4">
      <img className="w-[378px] h-[505px]" src="https://s3-alpha-sig.figma.com/img/b55a/8b5a/ec3dcf633f32f5fcc1d4f55918cadbb6?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iOzCWtF0XDP9~3wHOplmiCzBhOPV3zt~bvADKH6fbisA30pMKzXBlmWyf764P-bIRkVe~EwkyvowGM34sQDnmq4dIm4s94wQW4d4YGSeX8lLlRpnc8Oj7-K0rw15nBVcUypUN6ycz0HqtkOvaWBp3OtGTa0lBVvrGphvr-50srEfazwThMyG9IJvcKkVWO-1DpQC6ZhV~zrJbSSwVIPAc6q0OXEnO0TYvMWPMzifJQazuhPbtBwxZjXPY~-qzq2A~j2HaFL0wpw~Whs6MmltyLc5DYou0rDbbqSF7LmEDDfjx5mdrMAcYtr-AVakm3KbfbAwjYHeVAc1IgXLlw659g__" ></img>
      <h1 className="w-[1389px] h-[133px] text-center text-bronze text-[64px] font-normal font-[bodoni] leading-[79.98px] mt-10">Bienvenidos | Welcome | Bienvenue | Benvenuti</h1>
      <Link to='/gallery'>
        <HomeBtn />
      </Link>
    </div>
  );
}

export default Home;