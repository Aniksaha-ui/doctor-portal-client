import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img width="550" src={chair} class=" rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-3xl font-bold">Your new smile starts Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Ready</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
