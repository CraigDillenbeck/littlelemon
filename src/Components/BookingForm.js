import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from './Input';
import {
  name_validation,
  date_validation,
  guests_validation,
  email_validation,
} from '../utils/inputValidation';

const BookingForm = (props) => {
  const methods = useForm();
  const [success, setSuccess] = useState(false)

  /* const [name, setName] = useState(""); */
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  /* const [guests, setGuests] = useState(""); */
  const [occasion, setOccasion] = useState("");
  /* const [email, setEmail] = useState(""); */

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
    props.submitForm(data);
  })

  const handleDateChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  return (
    <FormProvider {...methods}>
      <section className="mt-10 mb-24 md:mt-32 w-2/3 mx-auto md:bg-[#efefee] md:rounded-lg md:py-10 md:px-20">
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="w-full" 
          noValidate 
          autoComplete="off"
        >
          <Input {...name_validation} />
          <Input {...date_validation} />
          <div className="my-6">
            <label htmlFor="time"><h2 className="text-xl font-semibold capitalize">Time</h2></label>
            <select
              as="select"
              id="time" 
              name="time"
              value={time}
              required
              onChange={(e) => setTime(e.target.value)}
              className="bg-[#d9d9d9] p-3 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60"
            >
              {
                props.availableTimes.availableTimes.map(availableTimes => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })
              }
            </select>
            <small></small>
          </div>
          <Input {...guests_validation} />
          <div className="my-6">
          <label htmlFor="occasion"><h2 className="text-xl font-semibold capitalize">Occasion</h2></label>
            <select
              id="occasion" 
              name="occasion" 
              value={occasion}
              required
              onChange={(e) => setOccasion(e.target.value)}
              className="bg-[#d9d9d9] p-3 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select>
            <small></small>
          </div>
          <Input {...email_validation} />
          <button onClick={onSubmit} type="submit" className="bg-[#F4CE14] hover:bg-[#BA9D0F] grid mx-auto py-3 px-5 rounded-2xl mt-12">
            Make Reservation
          </button>
        </form>
      </section>
    </FormProvider>
  )
}

export default BookingForm;