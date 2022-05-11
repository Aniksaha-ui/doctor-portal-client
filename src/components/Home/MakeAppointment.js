import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="mx-12 flex items-center justify-center my-28"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-130px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-12">
        <h3 className="text-2xl text-primary font-bold">Appointment</h3>
        <p className="text-lg text-white mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          non? Sit alias labore ratione, explicabo at, reprehenderit doloremque
          culpa atque cumque odio suscipit ex tempore distinctio rerum facere
          earum sequi!
        </p>
        <br />
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
