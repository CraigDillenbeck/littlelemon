import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <nav>
      <ul className="hidden md:flex">
        <li className="pl-3">Home</li>
        <li className="pl-3">About</li>
        <li className="pl-3">Menu</li>
        <li className="pl-3">Reservations</li>
        <li className="pl-3">Order Online</li>
        <li className="pl-3">Login</li>
      </ul>
      {/* Dropdown/Mobile Menu*/}
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div className={nav ? "fixed left-5 top-20 bg-slate-50 w-2/3 ease-in-out duration-300 p-3 md:w-1/3" : "fixed left-[-100%]"}>
        <ul>
          <li className="p-2 border-b border-gray-400">Home</li>
          <li className="p-2 border-b border-gray-400">About</li>
          <li className="p-2 border-b border-gray-400">Menu</li>
          <li className="p-2 border-b border-gray-400">Reservations</li>
          <li className="p-2 border-b border-gray-400">Order Online</li>
          <li className="p-2">Login</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;