import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

function NewsletterModal({isOpen, setIsOpen}) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const toggleModal = async () => {
        setIsOpen((open) => !open)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://origenebe.onrender.com/subscribe", { email });
        setMessage(res.data.message);
        setEmail("")
      } catch (err) {
        setMessage("Something went wrong. Try again.");
        console.log(err.message);
      }
    };

  return (
    <div className={`modal-container ${isOpen ? "container-open" : ""}`}>
      <div className={`modal-card ${isOpen ? "card-open" : ""}`}>
        <button className="modal-btn" onClick={toggleModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h1>Get 10% off your first order</h1>
        <p>Enter your email to unlock offer.</p>
        <p>
          Plus get insider access to promotions, new launches, discounts, and
          more.
        </p>

        <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <button className="btn-black newsletter-btn">Get 10% off now</button>
        </form>
        {/* <small>{message}</small> */}
      </div>
    </div>
  );
}

export default NewsletterModal;
