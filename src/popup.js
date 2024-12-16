import React, { Component } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Popup() {
  

  return (
      <div className='fixed top-0 left-0 bg-opacity-40 overflow-hidden items-center flex justify-center bg-black h-[100vh] w-[100vw]'>
        <div className='bg-white relative h-[50vh] w-[50vw] flex justify-center rounded-2xl items-center flex-col gap-5'>
          <IoIosCloseCircleOutline
            className='text-2xl top-2 right-2 absolute text-black cursor-pointer'
            // onClick={handleClose}
          />
          <h1 className='text-2xl text-center'>
            Thanks for subscribing to RailWire-DESH; <br /> Your Mandali supervisor will contact you soon
          </h1>
          <h1 className='text-2xl text-center'>
            RailWire-DESH માટે સાબસ્ક્રાઇબ કરવા માટે આભાર; <br />તમારી મંડળીના સુપરવાઇઝર તમને ટૂંક સમયમાં સંપર્ક કરશે
          </h1>
        </div>
      </div>
  );
}
