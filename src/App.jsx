import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // <-- add this
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TopBar from "./components/topBar/TopBar.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
