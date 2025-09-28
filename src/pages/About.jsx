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
        <div className="about-imge__img-box">
          <img
            src="./image/About Main.png"
            alt="Origene's Co-founders, Oluwatobi and Adewale Hassan"
          />
        </div>

        <div className="about-paragraph">
          <p>
            We grew up sharing everything. Toys, books, clothes, even sketches
            in the corners of our notebooks. What began as simple brotherhood
            became a rhythm. One of us would draw, the other would refine. One
            would build, the other would shape.
          </p>
          <p>
            Design was never a decision. It was the language we spoke before we
            had the words. From childhood drawings to experiments with fabric,
            we learned to make sense of the world by creating something from it.
          </p>
          <p>
            {" "}
            Origene is the extension of that history. It brings together the
            paths of <strong>Adewale Hassan</strong> and{" "}
            <strong>Oluwatobi Hassan</strong>. One shaped by a decade inside
            fashion and illustration. The other forged through design, brand
            building, and the discipline of turning ideas into structure.
            Together, we have built Origene as the continuation of a story that
            began long before the name existed.
          </p>
          <p>
            What we once shared between two brothers, we now offer through
            Origene — a house built for others to share in.
          </p>
        </div>

        <div className="grid grid-2-by-1 column-gap-5">

          <div className="about-profile">
            <div className="profile-img-box">
              <img
                src="./image/About Adewale.png"
                alt="Origene Co-founder, Adewale Hassan"
              />
            </div>
            <p className="profile-caption">Adewale Hassan</p>
          </div>

          <div className="about-profile">
            <div className="profile-img-box">
              <img
                src="./image/About Hassan.png"
                alt="Origene Co-founder, Oluwatobi Hassan"
              />
            </div>
            <p className="profile-caption">Oluwatobi Hassan</p>
          </div>

        </div>

        <div className="about-quote">
            <h4>“We shared everything as kids, now we want to share our craft with the world”</h4>

            <h5>— OLUWATOBI HASSAN</h5>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default About;
