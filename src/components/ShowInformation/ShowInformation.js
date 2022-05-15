import React from "react";

const ShowInformation = ({ img, bgColor, cardTitle }) => {
  return (
    <div className={`card p-5 lg:card-side shadow-xl ${bgColor}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title mr-6">{cardTitle}</h2>
      </div>
    </div>
  );
};

export default ShowInformation;
