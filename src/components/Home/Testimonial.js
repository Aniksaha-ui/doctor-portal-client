import React, { useEffect, useState } from "react";
import quote from "../../assets/icons/quote.svg";
import Review from "./Review";
const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("Review.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <section className="my-28 mx-12">
      <div className="flex justify-between item-center">
        <div>
          <h4 className="text-xl text-primary font-bold ">Testimonials</h4>
          <h2 className="text-7xl lg:ml-12">What our patients say?</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {testimonial.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
