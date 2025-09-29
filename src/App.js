import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';        // Optional: your “About Us” page
import Services from './components/Services';  // If you have a separate services page
import Contact from './components/Contact';    // If you have a contact page
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <Navbar />

      {/* Main content */}
      <div className="main-content">      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
