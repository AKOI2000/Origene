import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function About() {
  return (
    <>
      <Navbar scrolled={true} />
      <div id="about">
        <div className="page-heading">
          <h2>The ORigene story</h2>
        </div>
        <div className="about-image__img-box">
          <img className="main"
            src="./image/About_Main.webp"
            alt="Origene's Co-founders, Oluwatobi and Adewale Hassan"
          />

          <img className="main-mobile"
            src="./image/About-Us.webp"
            alt="Origene's Co-founders, Oluwatobi and Adewale Hassan"
          />
        </div>

        <div className="about-paragraph">
          <p>
          My brother and I grew up sharing everything. Toys, clothes, and ideas that presented themselves as sketches in the corners of our notebooks, another thing we shared. What began as the simple common heritage of brotherhood neither of us had any choice in became a rhythm, each day growing more precise. 
          </p>
          <p>
          One of us would draw and the other would refine. One would build and the other would shape and grow. Every step, every choice, every decision was complemented by the other, needing no thought or extended exchange to achieve perfection. Design was never a decision. It was the language we spoke before words formed in our mouths. From childhood drawings to experiments with fabric, we learned to make sense of the world by creating something from it.
          </p>
          <p>
          Origene is the manifestation of that history, rhythm and growth. It is the culmination of the paths of <strong>Adewale Hassan</strong> and <strong>Oluwatobi Hassan</strong>, one shaped by a decade mastering fashion design and the secrets of its empire, and the other forged through design, brand building and years of turning ideas into structured businesses.</p>
          <p>
          Together, my brother and I have built Origene as the extension of a story that began long before the name existed. What we once shared as brothers, we now offer through Origene - a house, a concept and an experience brought to life for others to share in. 
          </p>
        </div>

        <div className="grid grid-2-by-1 column-gap-5">
          <div className="about-profile">
            <div className="profile-img-box femi">
              <img
                src="./image/FEMI—SINGLE.webp"
                alt="Origene Co-founder, Adewale Hassan"
              />
            </div>
            <p className="profile-caption">Adewale Hassan</p>
          </div>

          <div className="about-profile">
            <div className="profile-img-box tobi">
              <img
                src="./image/TOBI—SINGLE.webp"
                alt="Origene Co-founder, Oluwatobi Hassan"
              />
            </div>
            <p className="profile-caption">Oluwatobi Hassan</p>
          </div>
        </div>

        <div className="about-quote">
          <h4>
            “We shared <br/>everything as<br/> kids, now we<br/> want to share <br/>our craft with<br/> the world”
          </h4>

          <h5> OLUWATOBI HASSAN</h5>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
