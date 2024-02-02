import { FaGithub, FaLinkedin, FaGrav } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-contact-info">
        <h1 className="footer-heading">Connect With Me</h1>
        <p className="footer-contact-access">Email: scott@nihilanth.co.uk</p>
        <p className="footer-contact-access">Mobile: (+44) 0736 626 1344 </p>
      </div>
      <div className="body-icons">
        <a href="https://github.com/exiled-scot" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
        <a
          href="https://nihilanth.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
        >
          <i>
            <FaGrav />
          </i>
        </a>
        <a href="https://www.linkedin.com/in/scott-stevenson-676bb2a1/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
      </div>
    </footer>
  )
}

export default Footer;
