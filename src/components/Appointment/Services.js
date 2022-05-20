import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = ({ setTreatement, services }) => {
  return (
    <>
      {services.map((service) => {
        return (
          <div className="card lg:max-w-lg shadow-xl mt-10">
            <div className="card-body p-5">
              <h2 className="text-center text-3xl text-primary">
                {service.name}
              </h2>
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
              <div className="card-actions justify-center">
                <label
                  for="booking-modal"
                  onClick={() => setTreatement(service)}
                  className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
                  disabled={service.slots.length === 0}
                >
                  Book Noww
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Services;
