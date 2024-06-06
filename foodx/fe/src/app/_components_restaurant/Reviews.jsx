import React, { useEffect, useState } from "react";
import { comment_test, user_test } from "@/testData";
import Review from "./_component_review/Review";


function Reviews({ restaurantId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const commentArr = comment_test.filter(
      (c) => c.restaurant_id == restaurantId
    );
    setComments(commentArr);
  }, []);

 
  return (
    <div className="mt-5">
      <h2 className="text-2xl text-primary font-bold"> Reviews:</h2>
      {comments
        ? comments.map((item, index) => (
            <Review setComments={setComments} index={index} item={item}/>
          ))
        : [1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="h-[220px] w-full mt-2 mb-2 bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
    </div>
  );
}

export default Reviews;
