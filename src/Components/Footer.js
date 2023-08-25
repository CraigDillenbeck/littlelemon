import NavLogo from "./NavLogo";
import FooterNav from "./FooterNav";
import facebook from "../Assets/Images/facebook-f.png";
import instagram from "../Assets/Images/instagram-new.png";
import twitter from "../Assets/Images/twitter--v2.png";

const socials = [
  {
    id: "facebook",
    key: "facebook",
    url: "http://facebook.com",
    icon: facebook,
    alt: "facebook-icon"
  },
  {
    id: "instagram",
    key: "instagram",
    url: "https://instagram.com",
    icon: instagram,
    alt: "instagram-icon"
  },
  {
    id: "twitter",
    key: "twitter",
    url: "https://twitter.com",
    icon: twitter,
    alt: "twitter-icon"
  }
]

const socialItems = socials.map((social) => {
  return <img className="px-4 w-16" src={social.icon} key={social.key} alt={social.alt} />;
})

const contacts = [
  {
    id: "address",
    key: "address",
    value: "123 Main Street Chicago, IL 78787"
  },
  {
    id: "phone",
    key: "phone",
    value: "(555)555-5555"
  },
  {
    id: "email",
    key: "email",
    value: "info@littlelemon.com"
  }
]

const contactItems = contacts.map((contact) => {
  return <li key={contact.key}>{contact.value}</li>
})

const Footer = () => {
  return (
    <footer>
      <section className="flex justify-center">
        <NavLogo />
      </section>
      <section className="px-5 grid md:grid-cols-3">
        <div className="grid items-center">
          <ul className="grid justify-items-center md:justify-items-start">
            {contactItems}
          </ul>
        </div>
        <FooterNav />
        <div className="flex items-center justify-center">
          <ul className="flex pt-5">
            {socialItems}
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;