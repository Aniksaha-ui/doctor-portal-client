import React, { useEffect, useState } from "react";

const useAppointmentServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
};

export default useAppointmentServices;
