import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import RD from "./pages/RD";

/* 👇 ADD THIS */
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -90; // navbar height
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // Retry (important when page just loaded)
        const interval = setInterval(() => {
          if (scrollToElement()) {
            clearInterval(interval);
          }
        }, 100);

        setTimeout(() => clearInterval(interval), 2000);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash /> {/* 👈 ADD HERE */}
      <div className="page-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/rd" element={<RD />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;