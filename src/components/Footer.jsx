import "./styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Made by Kavin Anandh &copy; <span id="year">{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
