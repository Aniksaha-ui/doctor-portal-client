import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard";
import MyAppointment from "./components/Dashboard/MyAppointment";
import MyReview from "./components/Dashboard/MyReview";
import Users from "./components/Dashboard/Users";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="mx-auto lg:px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        {/* nasted routing */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        {/* nasted routing */}

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
