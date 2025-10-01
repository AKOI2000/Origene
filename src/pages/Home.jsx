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
import NewsletterModal from '../components/NewsletterModal';




function Home({isLoading}) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
  }

  if (!isOpen) {
    document.body.style.overflowY = "visible";
    document.documentElement.style.overflowY = "visible";
  }

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById("hero");
      if (!section2) return;

      const section2Top = section2.getBoundingClientRect().top;
      if (section2Top < 0) {
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


  useEffect(()=> {
    const initialLoad = setTimeout(() => {
      setIsOpen(true);
    }, 7000);


    return () => clearTimeout(initialLoad)
  }, [])

  return (
    <div>
      <NewsletterModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Navbar scrolled={scrolled}/>
      <Hero/>
      <SectionCategory />
      <SectionCarousel isLoading={isLoading}/>
      <SectionShowcase /> 
      <SectionExperience />
      <SectionFeatures />
      <SectionOrigene />
      <Footer />
    </div>
  );
}

export default Home;
