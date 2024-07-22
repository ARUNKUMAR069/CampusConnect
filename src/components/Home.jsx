import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Cards';
import Options from './Options';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';

export default function Home() {


  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  // EFFECTF
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({
            userData
          }))
        }
        else {
          dispatch(logout())
        }

      })
      .finally(() => setloading(!false))






  }, [])






  return loading ?
    <div className="p-3 flex flex-col md:flex-row gap-5 justify-around">

      {/* LEFT SIDE */}
      <div className="left w-full h-[40vh] md:w-[400px] md:h-[85.8vh] bg-gray-100 rounded-lg flex flex-col justify-evenly items-center p-1 flex-wrap shadow-md">
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
      </div>

      {/* RIGHT SIDE */}

      <div className="right md:w-[1000px] w-full md:h-[85vh] p-5 rounded-lg flex flex-wrap justify-evenly md:gap-1 gap-3 shadow-md bg-white">




        {/* STUDENT BUS PASS 1 */}

        <Cards title="Student Bus pass" />

        {/* STUDNET ID CARD 2 */}

        <Cards title="Student Id Card" />
        {/* STUDENT LIBRARY CARD */}

        <div className="bg-[#FDDE55] bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg w-fit h-fit shadow-md">
          <Cards title="Student Library Card" />
        </div>
        {/* EMPLOYE CARD  */}
        <div className="bg-[#FEEFAD] bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg w-fit h-fit shadow-md">
          <Cards title="Employee Card" />
        </div>

      </div>


    </div>
    : "ERROR"
}
