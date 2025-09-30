import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

function Carousel({ img1, img2, img3, img4, isLoading }) {
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
    const baseOptions = {
      wrapAround: true,
      cellAlign: "center",
      contain: false,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 2500,
    };

    if (window.matchMedia("(max-width: 768px)").matches) {
      initFlickity({ ...baseOptions, groupCells: 1 });
    } else {
      initFlickity({ ...baseOptions, groupCells: 1 });
    }
  };

  useEffect(() => {
    if (isLoading) return;
  
    let cancelled = false;
  
    const waitImages = (node, timeout = 1500) => {
      if (!node) return Promise.resolve();
      const imgs = Array.from(node.querySelectorAll("img"));
      if (imgs.length === 0) return Promise.resolve();
  
      const loadPromises = imgs.map(
        (img) =>
          new Promise((res) => {
            if (img.complete && img.naturalWidth > 0) return res();
            const onDone = () => res();
            img.addEventListener("load", onDone, { once: true });
            img.addEventListener("error", onDone, { once: true });
          })
      );
  
      return Promise.race([Promise.all(loadPromises), new Promise((r) => setTimeout(r, timeout))]);
    };
  
    const initWhenReady = async () => {
      // give React one paint/frame to attach refs
      await new Promise((r) => requestAnimationFrame(r));
      // wait for images (or timeout)
      await waitImages(flickityNode.current, 1500);
      if (cancelled) return;
  
      // If an instance exists, refresh it; otherwise init fresh
      if (flktyRef.current) {
        try {
          flktyRef.current.reloadCells();
          flktyRef.current.resize();
        } catch {
          checkMediaQuery();
        }
      } else {
        checkMediaQuery();
      }
  
      // extra safety: recalc on next frame
      requestAnimationFrame(() => flktyRef.current?.resize());
    };
  
    initWhenReady();
  
    const handleResize = () => {
      if (!isLoading) initWhenReady();
    };
    window.addEventListener("resize", handleResize);
  
    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      if (flktyRef.current) {
        flktyRef.current.destroy();
        flktyRef.current = null;
      }
    };
  }, [isLoading, img1, img2, img3, img4]);
  
  

  const prev = () => flktyRef.current?.previous();
  const next = () => flktyRef.current?.next();

  return (
    <div className="carousel-wrapper margin-top-md">
      <button className="carousel-btn prev" onClick={prev}>
        <img src="image/button_right.svg" />
      </button>
      <button className="carousel-btn next" onClick={next}>
        <img src="image/button_right.svg" />
      </button>

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
