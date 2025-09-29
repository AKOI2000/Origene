import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Loading from "./components/Loading";
import { useState, useEffect } from "react"; 
import { preloadWithTimeout } from "./functions/preload";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => setIsLoading(false);
  //   window.addEventListener("load", handleLoad);
  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);
  
  useEffect(() => {
    let isMounted = true;
  
    const load = async () => {
      await preloadWithTimeout(5000); // preloads images + fonts, max 7s
      if (isMounted) setIsLoading(false);
    };
  
    load();
  
    return () => {
      isMounted = false; // prevents state update if component unmounts
    };
  }, []);
  
 return (
    <div>
      <div>
     {isLoading ? (
      <Loading />
     ) : (
      <BrowserRouter>
      <Routes>
        <Route path="/Origene/" element={<Home />} />
        <Route path="/Origene/shop" element={<Shop />} />
        <Route path="/Origene/contact-us" element={<Contact />} />
        <Route path="/Origene/about-us" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
     </BrowserRouter>
     )}
    </div>
    </div>
  );
}

export default App;
