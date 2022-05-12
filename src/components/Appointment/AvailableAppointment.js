import { format } from "date-fns";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UpdatedContext } from "./Appointment";
import Services from "./Services";
export const updatedServiceContext = createContext([]);

const AvailableAppointment = () => {
  const [date] = useContext(UpdatedContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <updatedServiceContext.Provider value={[services, setServices]}>
      <div className="mt-16">
        <h3 className="text-xl text-secondary text-center">
          You selected Date {format(date, "PP")} for appointment
        </h3>
        <div className="mt-8 px-12 grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
          <Services />
        </div>
      </div>
    </updatedServiceContext.Provider>
  );
};

export default AvailableAppointment;
