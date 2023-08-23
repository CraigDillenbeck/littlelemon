import Nav from "./Nav";
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
  return <img src={social.icon} key={social.key} alt={social.alt} />;
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
      <Nav />
      <ul>
        {socialItems}
      </ul>
      <ul>
        {contactItems}
      </ul>
    </footer>
  );
}

export default Footer;