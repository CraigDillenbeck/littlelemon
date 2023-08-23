import Nav from "./Nav";
import Logo from "../Assets/Images/Logo.png";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" width="200px" />
      <Nav />
    </header>
  );
};

export default Header;