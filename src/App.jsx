import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // <-- add this
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TopBar from "./components/topBar/TopBar.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Appointments from "./pages/appointments/Appointments.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
