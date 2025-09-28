import { useEffect, useState } from "react";
import Button from "../components/Button";

function SectionShowcase() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev >= 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
      }, []);

  return (
    <>
     <div id="section-showcase" className="showcase-container">
      <div className={`section-showcase-1 fade ${index === 0 ? "active" : ""}`}>
        <div className="showcase-text_box">
          <h2>
            Buy our bestselling <span>Crosshatch Pants</span>
          </h2>
          <div className="img-box">
          <img src="./image/_HQ_0020_copy_2_2_(1).png"/>
          </div>
          <div className="button-box text-align margin-top-sm">
            <Button direction={"/Origene/shop"} styles={"btn-black"}>
              Buy now
            </Button>
          </div>
        </div>
      </div>

      <div className={`section-showcase-2 fade ${index === 1 ? "active" : ""}`}>
        <div className="showcase-text_box">
          <h2>
           Buy our bestselling <span>FIRE & EARTH TWO PIECE</span>
          </h2>
          <div className="img-box">
          <img src="./image/_HQ_0020_copy_2_3_(1).png"/>
          </div>
          <div className="button-box text-align margin-top-sm">
            <Button direction={"/Origene/shop"} styles={"btn-black"}>
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SectionShowcase;
