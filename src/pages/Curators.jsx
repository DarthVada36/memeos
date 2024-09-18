import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-primary mt-[90px]">
            <div>
                {/* Curador 1 */}
                <div className="relative w-[300px] h-[370px] bg-transparent mt-12">
                    {/* Curator */}
                    <img src="../src/img/doge2.jpg" alt="curator1" className="absolute top-0 overflow-hidden left-0 w-[280px] h-[350px] object-cover" />
                    {/* Marco */}
                    <img src="../src/img/pngwingom.png" alt="marco" className="absolute top-0  left-0 w-full h-full bg-transparent pointer-events-none" />
                </div>
            </div>
        </div>
    );
}

export default Home;

