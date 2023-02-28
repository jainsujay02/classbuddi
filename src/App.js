// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Navbar from "./components/Header.js";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<ErrorComponent />}></Route>
        <Route path="/join" element={<ErrorComponent />}></Route>
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
