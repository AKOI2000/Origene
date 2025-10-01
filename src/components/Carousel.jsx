import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

function Carousel({ img1, img2, img3, img4, isLoading }) {
  const flickityNode = useRef(null);
  const flktyRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalSlides = 4;

  const initFlickity = () => {
    if (flktyRef.current) flktyRef.current.destroy();

    flktyRef.current = new Flickity(flickityNode.current, {
      wrapAround: true,
      cellAlign: "center",
      contain: false,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 2000,
      pauseAutoPlayOnHover: false,
      groupCells: 1,
    });

    flktyRef.current.on("select", () => {
      setSelectedIndex(flktyRef.current.selectedIndex);
    });
  };

  useEffect(() => {
    if (isLoading) return;

    const imgs = flickityNode.current?.querySelectorAll("img") || [];
    const waitForImages = Promise.all(
      Array.from(imgs).map(
        (img) =>
          new Promise((res) => {
            if (img.complete) return res();
            img.addEventListener("load", res, { once: true });
            img.addEventListener("error", res, { once: true });
          })
      )
    );

    waitForImages.finally(() => {
      initFlickity();
      flktyRef.current?.resize();
      flktyRef.current?.playPlayer();
    });

    const onResize = () => {
      flktyRef.current?.reloadCells();
      flktyRef.current?.resize();
      flktyRef.current?.playPlayer();
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      flktyRef.current?.destroy();
      flktyRef.current = null;
    };
  }, [isLoading, img1, img2, img3, img4]);

  return (
    <div className="carousel-wrapper margin-top-md">
      <button className="carousel-btn prev" onClick={() => flktyRef.current?.previous()}>
        <img src="image/button_right.svg" alt="prev" />
      </button>
      <button className="carousel-btn next" onClick={() => flktyRef.current?.next()}>
        <img src="image/button_right.svg" alt="next" />
      </button>

      <div className="gallery" ref={flickityNode}>
        {[img1, img2, img3, img4].map((img, i) => (
          <div className={`gallery-cell cell-${i + 1}`} key={i}>
            <img src={img} alt={`slide-${i + 1}`} />
          </div>
        ))}
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
