import React from 'react';
import { GoArrowDown } from 'react-icons/go';

const Options = ({ option = "profile" }) => {
  return (
    <div className="bg-[#FEEFAD] p-2 rounded-md w-1/2 flex justify-center items-center gap-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <span className="text-black">{option}</span>
      <GoArrowDown className="text-[#03AED2] w-5 h-5" />
    </div>
  );
};

export default Options;
