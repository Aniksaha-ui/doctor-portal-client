import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/mybookings?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
            toast(
              "You are logged out.To access that page you have to login first"
            );
          }
          return res.json();
        })
        .then((data) => {
          setAppointment(data);
        });
    }
  }, [user]);

  return (
    <div class="overflow-x-auto mt-5">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Paitent Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((a, index) => (
            <tr key={a._id}>
              <th>{index + 1}</th>
              <td>{a.patientName}</td>
              <td>{a.treatment}</td>
              <td>{a.date}</td>
              <td>{a.slot}</td>
              <td>{a.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
