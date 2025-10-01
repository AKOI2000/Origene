import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

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
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                element={<Home />}
                isLoading={isLoading}
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
