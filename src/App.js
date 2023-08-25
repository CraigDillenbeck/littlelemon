import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='text-sm md:text-base'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
