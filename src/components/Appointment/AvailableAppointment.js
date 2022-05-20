import { format } from "date-fns";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UpdatedContext } from "./Appointment";
import BookingModal from "./BookingModal";
import Services from "./Services";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
export const updatedServiceContext = createContext([]);

const AvailableAppointment = () => {
  const [date] = useContext(UpdatedContext);
  const [treatment, setTreatement] = useState(null);
  const formateDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formateDate], () =>
    fetch(`http://localhost:4000/available?date=${formateDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-16">
      <h3 className="text-xl text-secondary text-center">
        You selected Date {format(date, "PP")} for appointment
      </h3>
      <div className="mt-8 px-12 grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
        <Services services={services} setTreatement={setTreatement} />
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          refetch={refetch}
          setTreatement={setTreatement}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
