import React from "react";
import useServices from "../../Hooks/useServices";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useServices();
  //   console.log(useServices);
  return (
    <div className="mt-20 mb-20">
      <h3 className="text-3xl text-primary text-center">Our Services</h3>
      <h3 className="lg:text-5xl text-3xl text-dark text-center">
        Services We Provide
      </h3>

      <div className="mt-8 px-12 grid lg:grid-cols-3 grid-cols-1 gap-5">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
