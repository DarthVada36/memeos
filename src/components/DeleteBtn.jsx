import React from 'react';

const DeleteBtn = ({ onDelete }) => {
  return (
      <button className="h-[2rem] w-24 px-3 py-2 bg-secondary rounded-[100px] justify-center items-center gap-2.5 inline-flex" onClick={onDelete}>
        <p className="text-milk text-sm font-normal font-[bodoni]">Eliminar</p>
      </button>
  );
};

export default DeleteBtn;
