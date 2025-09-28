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
      <BrowserRouter basename="/Origene/">
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
