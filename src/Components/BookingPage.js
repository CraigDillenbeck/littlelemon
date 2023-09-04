import React from 'react';
import BookingHero from './BookingHero';
import BookingForm from './BookingForm';


const BookingPage = (props) => {

  return (
    <main>
      <BookingHero />
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />

    </main>
  )
}

export default BookingPage;