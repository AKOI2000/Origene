import Hero from '../sections/Hero';
import SectionCategory from '../sections/SectionCategory';
import SectionCarousel from '../sections/SectionCarousel';
import SectionShowcase from '../sections/SectionShowcase';
import SectionExperience from '../sections/SectionExperience';
import SectionFeatures from '../sections/SectionFeatures';
import SectionOrigene from '../sections/SectionOrigene';
import Footer from '../sections/Footer';
import Navbar from "../sections/Navbar";
import { useState, useEffect } from 'react';




function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById("section-categories");
      if (!section2) return;

      const section2Top = section2.getBoundingClientRect().top;

      if (section2Top <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar scrolled={scrolled}/>
      <Hero/>
      <SectionCategory />
      <SectionCarousel />
      <SectionShowcase /> 
      <SectionExperience />
      <SectionFeatures />
      <SectionOrigene />
      <Footer />
    </div>
  );
}

export default Home;
