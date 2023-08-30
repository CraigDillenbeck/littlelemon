import './App.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Reservation from './Components/Reservation';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className='text-sm md:text-base'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
