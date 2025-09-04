import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topBar/TopBar.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Appointments from "./pages/appointments/Appointments.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Services from "./pages/services/Services.jsx";
import Dentist from "./pages/dentist/Dentist.jsx";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
            
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/dentist" element={<Dentist/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/appointments" element={<Appointments/>} />
        </Routes>
      <Footer/>
    </Router>
     
  );
}

export default App;
