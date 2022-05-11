import React from "react";
import ShowInformation from "../ShowInformation/ShowInformation";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Information = () => {
  return (
    <div className="px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <ShowInformation
        cardTitle="Opening Hour"
        bgColor="bg-primary"
        img={clock}
      />
      <ShowInformation
        cardTitle="Our Location"
        bgColor="font-bold bg-gradient-to-r from-secondary to-primary"
        img={marker}
      />
      <ShowInformation cardTitle="Contact Us" bgColor="bg-accent" img={phone} />
    </div>
  );
};

export default Information;
