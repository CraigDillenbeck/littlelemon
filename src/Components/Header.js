import Nav from "./Nav";
import NavLogo from "./NavLogo";

const Header = () => {
  return (
    <header className="flex h-24 justify-between items-center px-5">
      <NavLogo />
      <Nav />
    </header>
  );
}

export default Header;