import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
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

        <div className="footer-newsletter">
            <p>Join our newsletter to stay up to date on features and releases.</p>
            <form>
                <input type="text" placeholder="Enter your email"/>
                <button className="btn-sm btn-white">Subscribe</button>
            </form>
            <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
        </div>

        <div className="footer-copyrights">
          <p>© 2025 Origene Fashion - All rights reserved.</p>

          <div>
            <a href="#"><FontAwesomeIcon className="footer-icons" icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon className="footer-icons" icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon className="footer-icons" icon={faX} /></a>
            <a href="#"><FontAwesomeIcon className="footer-icons" icon={faYoutube} /></a>
          </div>
        </div>

        <div className="img-box">
            <img src="./image/Group.png"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
