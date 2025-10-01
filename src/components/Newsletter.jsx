import axios from "axios";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="footer-newsletter">
      <p>Join our newsletter to stay up to date on discounts and releases</p>
      <form
       onSubmit={handleSubmit}
      >
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn-sm btn-white">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </p>
    </div>
  );
}

export default Newsletter;
