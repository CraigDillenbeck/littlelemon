import React, { useState } from 'react';

const BookingForm = (props) => {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [email, setEmail] = useState("");

  const handleDateChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
    console.log(e);
    setName("");
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
    setEmail("");
  }

  return (
    <section className="mt-10 mb-24 md:mt-32 w-2/3 mx-auto md:bg-[#efefee] md:rounded-lg md:py-10 md:px-20">
      <form onSubmit={handleSubmit} className="w-full">
        <label htmlFor="name"><h3 className="text-lg">Name:</h3></label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-[#d9d9d9] w-full md:w-2/3 border border-solid border-[#696969] rounded-[6px] p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
        />
        <label htmlFor="date" className="mt-8"><h3 className="text-lg">Date:</h3></label>
        <input
          id="date"
          name="date"
          value={date}
          placeholder={new Date().toLocaleDateString()}
          onChange={(e) => handleDateChange(e.target.value)}
          className="bg-[#d9d9d9] w-full md:w-2/3 border border-solid border-[#696969] rounded-[6px] p-1"
        />
        <label htmlFor="time" className="mt-8"><h3 className="text-lg">Time:</h3></label>
        <select
          as="select"
          id="time" 
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="bg-[#d9d9d9] w-full md:w-2/3 border border-solid border-[#696969] rounded-[6px] p-1"
        >
          {
            props.availableTimes.availableTimes.map(availableTimes => {
              return <option key={availableTimes}>{availableTimes}</option>;
            })
          }
        </select>
        <label htmlFor="guests" className="mt-8"><h3 className="text-lg">Guests:</h3></label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="4"
          min="1"
          max="10"
          className="bg-[#d9d9d9] w-full md:w-2/3 border border-solid border-[#696969] rounded-[6px] p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
        />
        <label htmlFor="occasion" className="mt-8"><h3 className="text-lg">Occasion:</h3></label>
        <select
          id="occasion" 
          name="occasion" 
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="bg-[#d9d9d9] border border-solid border-[#696969] rounded-[6px] p-1"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>
        <label htmlFor="email" className="mt-8"><h3 className="text-lg">Email:</h3></label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@email.com"
          required
          className="bg-[#d9d9d9] w-full md:w-2/3 border border-solid border-[#696969] rounded-[6px] p-1"
        />
        <button type="submit" className="bg-[#F4CE14] grid mx-auto py-3 px-5 rounded-2xl mt-12">
          Make Reservation
        </button>
      </form>
    </section>
  )
}

export default BookingForm;