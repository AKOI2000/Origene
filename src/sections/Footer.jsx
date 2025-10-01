import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="grid grid-2-by-1 column-gap-2">
        <div className="footer-links">
          <div className="help">
            <div className="footer-links-header">Help and support</div>
            <ul>
              <li>
                <a href="#">Customer services</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Promotions & Discounts</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
            </ul>
          </div>
          <div className="company">
            <div className="footer-links-header">company</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="legal">
            <div className="footer-links-header">legal</div>

            <ul>
              <li>
                <a href="#">Code of Ethics</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

       <Newsletter />

        <div className="footer-copyrights">
          <p>© 2025 Origene Fashion - All rights reserved.</p>

          <div>
            <a href="https://www.instagram.com/origene_fashion" target="_blank"><FontAwesomeIcon className="footer-icons" icon={faFacebook} /></a>
            <a href="https://www.instagram.com/origene_fashion" target="_blank"><FontAwesomeIcon className="footer-icons" icon={faInstagram} /></a>
            <a href="https://x.com/origene_fashion" target="_blank"><FontAwesomeIcon className="footer-icons" icon={faXTwitter} /></a>
            <a href="#" target="_blank"><FontAwesomeIcon className="footer-icons" icon={faYoutube}  /></a>
          </div>
        </div>

        <div className="img-box">
            <img src="./image/Group.webp"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
