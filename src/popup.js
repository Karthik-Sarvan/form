import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Popup({ onClose }) {
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 z-50 bg-opacity-40'  onClick={() => {
        console.log('clicked');
        onClose();
      }} >
      <div onClick={(e) => e.stopPropagation()} className='bg-white relative md:h-[50vh] lg:h-[50vh] h-[30vh] md:w-[50vw] lg:w-[50vw] w-[95vw] rounded-xl justify-center items-center flex flex-col gap-5 md:text-xl lg:text-xl text-base p-5'>
        <IoIosCloseCircleOutline
          className='absolute top-2 right-2 text-2xl hover:text-red-700 cursor-pointer'
          onClick={() => {
            console.log('clicked');
            onClose();
          }} // Call onClose when clicked
        />
        <h1>
          Thanks for subscribing to RailWire-DESH;
          <br /> your Mandali supervisor will contact you soon.
        </h1>
        <h1 className='whitespace-nowrap'>
          RailWire-DESH માટે સાબસ્ક્રાઇબ કરવા માટે આભાર; <br />
          તમારી મંડળીના સુપરવાઇઝર તમને ટૂંક સમયમાં સંપર્ક કરશે.
        </h1>
      </div>
    </div>
  );
}
