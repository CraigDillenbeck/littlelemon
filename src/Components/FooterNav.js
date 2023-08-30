import { Link } from "react-router-dom";


const FooterNav = () => {
  return (
    <ul className="grid justify-center py-5 md:py-0">
      <li className="text-slate-500 text-center">
        <Link to="/">Home</Link>
      </li>
      <li className="text-slate-500 text-center">
        <Link to="">About</Link>
      </li>
      <li className="text-slate-500 text-center">
        <Link to="">Menu</Link>
      </li>
      <li className="text-slate-500 text-center">
        <Link to="/reservation">Reservations</Link></li>
      <li className="text-slate-500 text-center">
        <Link to="">Order Online</Link>
      </li>
      <li className="text-slate-500 text-center">
        <Link to="">Login</Link>
      </li>
    </ul>
  );
}

export default FooterNav;