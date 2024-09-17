import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-primary mt-[90px]">
            <div>
                {/* Curador 1 */}
                <div className="w-[300px] h-[250px] bg-transparent">

                    <img src="../src/img/pngwingom.png" alt="marco" className="bg-transparent absolute w-[280px] h-[320px]" />
                    <img src="../src/img/doge2.jpg" alt="" className="bg-transparent w-[280px] h-[320px]" />
                    
                </div>
                
                
            </div>
        </div>
    );
}

export default Home;