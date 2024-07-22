import React from 'react'
import Cards from '../components/Cards'
export default function home() {
  return (
    <div className='p-3 flex flex-col md:flex-row gap-5 justify-around'>
      {/* LEFT SIDE */}
      <div className="left w-full h-[40vh] md:w-[400px] md:h-[85.8vh] bg-gray-400 rounded-lg ">





      </div>
      {/* RIGHT SIDE */}
      <div className="right md:w-[1000px] bg-gray-400  w-full  md:h-[85vh] p-5 rounded-lg flex flex-wrap   justify-evenly md:gap-1 gap-3  ">
      
        <Cards title="Student Bus pass " images='src/assets/react.svg' />
        <Cards title="Student Id Card" />
        <div className='bg-white opacity-35 blur-sm  rounded-lg w-fit h-fit'>
          <Cards title="Student Library Card" />
        </div>
        <div className='bg-white opacity-35  blur-sm rounded-lg w-fit h-fit'>
          <Cards title="Employee Card" />
        </div>

        </div>


      
    </div>
  )
}
