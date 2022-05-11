import React from "react";
import Banner from "./Banner";
import Exceptional from "./Exceptional";
import Information from "./Information";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <Services />
      <Exceptional />
      <MakeAppointment />
    </>
  );
};

export default Home;
