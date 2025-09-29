import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

function Carousel({ img1, img2, img3, img4, isLoading }) {
  const flickityNode = useRef(null);
  const flktyRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalSlides = 4;

  // Initialize Flickity
  const initFlickity = (options) => {
    if (flktyRef.current) {
      flktyRef.current.destroy();
    }

    flktyRef.current = new Flickity(flickityNode.current, options);

    flktyRef.current.on("select", () => {
      setSelectedIndex(flktyRef.current.selectedIndex);
    });
  };

  // Decide settings based on screen width
  const checkMediaQuery = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      initFlickity({
        wrapAround: true,
        cellAlign: "center",
        contain: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 2500,
        groupCells: 1,
      });
    } else {
      initFlickity({
        wrapAround: true,
        cellAlign: "center",
        contain: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 2500,
        groupCells: 3,
      });
    }
  };

  // ✅ Updated useEffect: wait until loader disappears
  useEffect(() => {
    // Only initialize Flickity after loader is gone
    if (!isLoading && flickityNode.current) {
      checkMediaQuery();
    }

    // Re-run on resize
    const handleResize = () => {
      if (!isLoading) {
        checkMediaQuery();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (flktyRef.current) {
        flktyRef.current.destroy();
      }
    };
  }, [isLoading]); // dependency: runs when loader state changes

  const prev = () => flktyRef.current?.previous();
  const next = () => flktyRef.current?.next();

  return (
    <div className="carousel-wrapper margin-top-md">
      <button className="carousel-btn prev" onClick={prev}>
        ❮
      </button>
      <button className="carousel-btn next" onClick={next}>
        ❯
      </button>

      <div className="gallery" ref={flickityNode}>
        <div className="gallery-cell">
          <img src={img1} />
        </div>
        <div className="gallery-cell">
          <img src={img2} />
        </div>
        <div className="gallery-cell">
          <img src={img3} />
        </div>
        <div className="gallery-cell">
          <img src={img4} />
        </div>
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
