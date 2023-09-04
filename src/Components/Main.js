import React, { useReducer } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from "../bookingAPI";

const Main = () => {

  const initialState = {availableTimes: fetchAPI(new Date())};

  const updateTimes = (state, date) => {
    return{availableTimes: fetchAPI(new Date(date))}
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed")
    }
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservation" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/confirmed" element={<ConfirmedBooking/> } />
    </Routes>
  )
}

export default Main;