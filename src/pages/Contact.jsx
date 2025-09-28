import ContactCard from "../components/ContactCard";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function Contact() {
  return (
    <div>
      <Navbar scrolled={true} />
      <div id="contact">
        <div className="page-heading">
          <h2>Contact us</h2>
        </div>

        <div className="grid grid-3-by-1 column-gap-3">
          <ContactCard
            img={'./image/icons/whatsapp us.svg'}
            header={"message us"}
            linkText={"Send us a message on WhatsApp"}
            linkAction={"https://wa.me/+2349019287665"}
            workDays={"Monday - Sunday"}
            workHours={" 7am - 10pm GMT +1"}
          />
          <ContactCard
           img={'./image/icons/call us.svg'}
            header={"call us"}
            span={"Call us on"}
            linkText={"+2349019287665"}
            linkAction={'tel:+2349019287665'}
            workDays={"Monday - Sunday"}
            workHours={" 9am - 7pm GMT +1"}
          />

          <ContactCard
            img={'./image/icons/email us.svg'}
            header={"email us"}
            linkText={" Send us an email here Anytime"}
            workDays={"— we typically respond"}
            workHours={"within 24 hours."}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Contact;
