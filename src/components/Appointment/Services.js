import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import { updatedServiceContext } from "./AvailableAppointment";

const Services = () => {
  const [services] = useContext(updatedServiceContext);
  return (
    <>
      {services.map((service) => {
        return (
          <div class="card lg:max-w-lg shadow-xl mt-10">
            <div class="card-body p-5">
              <h2 class="text-center text-3xl text-primary">{service.name}</h2>
              <p className="text-xl text-center">
                {service.slots.length > 0 ? (
                  service.slots[0]
                ) : (
                  <span className="text-red-500">No Seat Available</span>
                )}
              </p>
              <p className="text-xl text-center">
                {service.slots.length}{" "}
                {service.slots.length === 0 ? "space" : "spaces"}
                available
              </p>
              <br />
              <div class="card-actions justify-center">
                <button
                  class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
                  disabled={service.slots.length === 0}
                >
                  Book Noww
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Services;
