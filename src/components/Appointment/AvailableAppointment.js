import { format } from "date-fns";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UpdatedContext } from "./Appointment";
import BookingModal from "./BookingModal";
import Services from "./Services";
export const updatedServiceContext = createContext([]);

const AvailableAppointment = () => {
  const [date] = useContext(UpdatedContext);
  const [services, setServices] = useState([]);
  const [treatment, setTreatement] = useState(null);
  const formateDate = format(date, "PP");

  useEffect(() => {
    fetch(`http://localhost:4000/available?date=${formateDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formateDate]);

  return (
    <updatedServiceContext.Provider value={[services, setServices]}>
      <div className="mt-16">
        <h3 className="text-xl text-secondary text-center">
          You selected Date {format(date, "PP")} for appointment
        </h3>
        <div className="mt-8 px-12 grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
          <Services setTreatement={setTreatement} />
        </div>
        {treatment && (
          <BookingModal
            date={date}
            treatment={treatment}
            setTreatement={setTreatement}
          ></BookingModal>
        )}
      </div>
    </updatedServiceContext.Provider>
  );
};

export default AvailableAppointment;
