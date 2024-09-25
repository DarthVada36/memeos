import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary gap-4">
      <div className="flex max-w-max mt-10">
        <Link to="/gallery">
          <img
            className="max-w-[300px] blur-sm drop-shadow-lg cursor-pointer hover:blur-none"
            src="../src/img/monalisadoge.png"
          ></img>
        </Link>
      </div>
      <h1 className="w-[1200px] h-[120px] text-center text-bronze text-[50px] font-normal font-[bodoni] leading-[79.98px] mt-6">
        <ReactTyped
          strings={["Bienvenidos", "Welcome ", "Bienvenue ", "Benvenuti"]}
          typeSpeed={100}
          loop
          backSpeed={90}
        />
      </h1>
    </div>
  );
};

export default Home;
