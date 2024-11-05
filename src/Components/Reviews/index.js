import React from 'react'
import { GoPersonFill } from "react-icons/go";

const reviews = [
    {
        id: 1,
        name: "Alex Harry",
        idname: "@alex_harry",
        review: "The furniture quality is top-notch! My living room looks fantastic with the new couch. Highly recommend this brand!"
    },
    {
        id: 2,
        name: "Sophie Turner",
        idname: "@sophie_turns",
        review: "Amazing customer service and super fast delivery! The dining set was exactly as shown on the website. Will definitely buy again."
    },
    {
        id: 3,
        name: "Jordan Smith",
        idname: "@jordy_smith",
        review: "I loved the unique designs and the durability of the furniture. Perfect fit for my home office. Great experience overall!"
    }
];

const ReviewCard = ({review}) => {
  return (
    <div className="py-5 px-5 bg-gray-100 shadow-lg flex flex-col h-80 rounded-lg">
      <div className="py-2 flex items-center gap-3">
        <div className="p-3 bg-gray-200 rounded-3xl">
          <GoPersonFill size={25} />
        </div>
        <div>
          <p className="font-bold">{review.name}</p>
          <p className="text-gray-500">{review.idname}</p>
        </div>
      </div>
      <p className="text-left mt-2 ml-2 leading-relaxed">
        {review.review}
        </p>
    </div>
  );
};

const Review = () => {
  return (
    <div className="py-12 px-32 xs:px-16 xs:py-8 sm:px-8 md:px-52 text-center ">
      <h2 className="text-4xl font-bold mb-8 md:mb-10">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review)=>(
            <ReviewCard key={review.id}
            review={review}
            />
        ))}
      </div>
    </div>
  );
};

export default Review;
