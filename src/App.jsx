import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Loading from "./components/Loading";
import { useState, useEffect } from "react"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timingOut = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  
    // Cleanup function
    return () => clearTimeout(timingOut);
  }, []);
  
  
 return (
  <>
  <div style={{ display: isLoading ? "block" : "none" }}>
    <Loading />
  </div>

  <div style={{ display: isLoading ? "none" : "block" }}>
  <BrowserRouter>
      <Routes>
        <Route path="/Origene/" element={<Home isLoading={isLoading}/>} />
        <Route path="/Origene/shop" element={<Shop />} />
        <Route path="/Origene/contact-us" element={<Contact />} />
        <Route path="/Origene/about-us" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
     </BrowserRouter>
  </div>
  </>
  );
}

export default App;
