import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

function Carousel({ img1, img2, img3, img4 }) {
  const flickityNode = useRef(null);
  const flktyRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalSlides = 4;

  const initFlickity = (options) => {
    if (flktyRef.current) {
      flktyRef.current.destroy();
    }
    flktyRef.current = new Flickity(flickityNode.current, options);

    flktyRef.current.on("select", () => {
      setSelectedIndex(flktyRef.current.selectedIndex);
    });
  };

  const checkMediaQuery = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      initFlickity({
        wrapAround: true,
        cellAlign: "center",
        contain: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 2500,
        groupCells: 1, // ✅ Mobile: 1 cell
      });
    } else {
      initFlickity({
        wrapAround: true,
        cellAlign: "center",
        contain: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 2500,
        groupCells: 3, // ✅ Desktop: 3 cells
      });
    }
  };

  useEffect(() => {
    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);

    return () => {
      window.removeEventListener("resize", checkMediaQuery);
      if (flktyRef.current) {
        flktyRef.current.destroy();
      }
    };
  }, []);

  const prev = () => flktyRef.current?.previous();
  const next = () => flktyRef.current?.next();

  return (
    <div className="carousel-wrapper margin-top-md">
      <button className="carousel-btn prev" onClick={prev}>❮</button>
      <button className="carousel-btn next" onClick={next}>❯</button>

      <div className="gallery" ref={flickityNode}>
        <div className="gallery-cell"><img src={img1} /></div>
        <div className="gallery-cell"><img src={img2} /></div>
        <div className="gallery-cell"><img src={img3} /></div>
        <div className="gallery-cell"><img src={img4} /></div>
      </div>

      <div className="progress-bar margin-top-md">
        <div
          className="progress-fill"
          style={{ width: `${((selectedIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default Carousel;
