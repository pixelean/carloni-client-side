import React, { useEffect, useState } from "react";
import mgs from "../../Asset/tesimonial/mgs.png";
import "./Testimonials.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Testimonials.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
  <div className="reviewContainer">
      <div className="reviewSection">
      {reviews.map((review) => (
        <div className="border p-3">
          <img src={mgs} alt="reviews name" className=" h-16 w-16 " />
          <p>{review.review}</p>
          <h2 className="mt-7 font-bold text-gray-800">{review.name}</h2>
          <h2 className="">{review.ratings}</h2>
        </div>
      ))}

      <div className="text-center my-10 ">
        <button className="btn bg-sky-900 mx-auto text-center">Load More</button>
      </div>
    </div>
  </div>
  );
};

export default Testimonials;
