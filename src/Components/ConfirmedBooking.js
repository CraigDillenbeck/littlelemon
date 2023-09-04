import React from 'react';
import BookingHero from './BookingHero';


const ConfirmedBooking = () => {
  return (
    <>
      <BookingHero />
      <section className="mt-10 mb-24 md:mt-32 w-2/3 mx-auto md:bg-[#efefee] md:rounded-lg md:py-10 md:px-20">
        <h1 className="text-4xl grid justify-center text-[#F4CE14]">Confirmed!</h1>
        <p className="text-lg grid text-center mt-4">We look forward to seeing you soon!</p>
        <p className="text-xs text-slate-400 grid text-center mt-4">An email confirmation has been sent to you.</p>
      </section>
    </>
  )
}

export default ConfirmedBooking;