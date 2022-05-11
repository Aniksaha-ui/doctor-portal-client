import React from "react";

const ShowInformation = ({ img, bgColor, cardTitle }) => {
  return (
    <div class={`card p-5 lg:card-side shadow-xl ${bgColor}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title mr-6">{cardTitle}</h2>
      </div>
    </div>
  );
};

export default ShowInformation;
