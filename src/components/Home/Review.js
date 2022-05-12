import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl px-10 py-6 mt-12">
      <div className="card-body">
        <h2 className="card-title">{review.review}</h2>

        <div className="flex items-center justify-center">
          <div className="avatar mt-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">{review.author}</h3>
            <p className="text-xl">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
