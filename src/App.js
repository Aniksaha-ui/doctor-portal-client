import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="mx-auto lg:px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
