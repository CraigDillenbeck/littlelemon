import React from 'react';
import girlseatinglunch from "../Assets/Images/girls-eating-lunch-1.jpg";

const BookingHero = () => {
  return (
    <div className="grid grid-cols-3 h-80 bg-[#495E57] px-5">
        <div className="col-span-2 z-10 self-center md:col-span-1">
          <h1 className="text-4xl text-[#F4CE14]">Reserve A Table</h1>
          <p className="text-white py-2">
            We look forward to seeing you. Please share the information below to make your reservation.
          </p>
        </div>
        <div className="z-0 h-[320px] w-[480px] opacity-70 absolute left-20 object-left md:opacity-100 md:mt-4 md:flex md:rounded-2xl md:overflow-clip md:static md:h-[370px] lg:overflow-clip lg:static lg:ml-16">
          <img src={girlseatinglunch} alt="girls eating lunch" className="h-80 md:overflow-visible md:object-cover md:h-[420px] md:w-[630px] lg:overflow-visible lg:object-cover"/>
        </div>
      </div>
  )
}

export default BookingHero;