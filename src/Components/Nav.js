import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
      <nav className="hidden md:flex">
        <Link to="/" className="pl-3 nav-item">Home</Link>
        <Link className="pl-3">About</Link>
        <Link className="pl-3">Menu</Link>
        <Link to="/reservation" className="pl-3">Reservations</Link>
        <Link className="pl-3">Order Online</Link>
        <Link className="pl-3">Login</Link>
      </nav>
      
      {/* Dropdown/Mobile Menu */}
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div className={nav ? "fixed left-0 top-20 rounded-lg bg-white w-2/3 ease-in-out duration-300 p-3 md:w-1/3 z-20" : "fixed left-[-100%]"}>
        <ul>
          <li className="p-2 border-b border-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 border-b border-gray-400">
            <Link>About</Link>
          </li>
          <li className="p-2 border-b border-gray-400">
            <Link>Menu</Link>
          </li>
          <li className="p-2 border-b border-gray-400">
            <Link to="/reservation">Reservations</Link>
          </li>
          <li className="p-2 border-b border-gray-400">
            <Link>Order Online</Link>
          </li>
          <li className="p-2 border-b border-gray-400">
            <Link>Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;