import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Loading from "./components/Loading";
import { useState, useEffect } from "react"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => setIsLoading(false);
  //   window.addEventListener("load", handleLoad);
  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
 return (
    <div>
      <div>
     {isLoading ? (
      <Loading />
     ) : (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
     </BrowserRouter>
     )}
    </div>
    </div>
  );
}

export default App;
