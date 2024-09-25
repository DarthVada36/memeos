import React from "react";

const Footer = () => {
  return (
    <footer className="h-[7.5rem] opacity-60 bg-primary flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          className="w-[3.75rem] h-[3.75rem] mb-2"
          src="../src/img/dogelogo2.png"
          alt="Doge"
        />
        <p className="w-[17.5em] text-center text-bronze text-[14px] font-normal font-[bodoni] leading-none">
          Copyright © 2024 MemeOS Inc. <br />
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
