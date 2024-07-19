import React from "react";

const Base = () => {
  return (
    <div className="flex justify-between flex-col">
      <nav>
        <ul className="flex gap-4 items-center">
          <li className="bg-white px-2 rounded-2xl">
            <p className="logo text-4xl font-bold p-1">S</p>
          </li>
          <li>
            <p className="text-3xl font-bold text-white">slothui</p>
          </li>
        </ul>
      </nav>
      <div>
        <p className="text-7xl font-bold text-white ">Welcome to the era of Laziness 4.0 🤖</p>
      </div>
    </div>
  );
};

export default Base;
