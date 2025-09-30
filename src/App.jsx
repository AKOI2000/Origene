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
    }, 2500);
  
    // Cleanup function
    return () => clearTimeout(timingOut);
  }, []);
  
  
 return (

  <>
    <div style={{visibility: isLoading ? 'hidden' : 'visible'}}>
    <BrowserRouter>
      <Routes>
        <Route path="/Origene/" element={<Home/>} isLoading={isLoading}/>
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
