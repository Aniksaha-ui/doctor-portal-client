import React, { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

export const UpdatedContext = createContext("ring");

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  // const [services, setServices] = useState([]);

  // console.log(date);
  return (
    <UpdatedContext.Provider value={[date, setDate]}>
      <div>
        <AppointmentBanner />
        <AvailableAppointment />
        <ToastContainer />
      </div>
    </UpdatedContext.Provider>
  );
};

export default Appointment;
