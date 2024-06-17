import React, { useEffect, useState } from "react";
import { comment_test, user_test } from "@/testData";
import Review from "./_component_review/Review";
import { getReviewById } from "../_utils/GlobalAPI";


function Reviews({ restaurantId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getReviews = async()=>{
      const data = {
        searchRequestDTO: [
          {
            column: "restaurantId",
            value: restaurantId,
            operation: "EQUAL"
          }
        ],
        pageRequestDTO: {
          pageNo: 0,
          pageSize: 5
        },
        sort: "ASC",
        sortByColumn: "id"
      }
      const resp = await getReviewById(data);
      const reviews_tmp = resp.data.result;
      setComments(reviews_tmp);
    }

    getReviews();
  }, []);

 
  return (
    <div className="mt-5">
      <h2 className="text-2xl text-primary font-bold"> Reviews:</h2>
      {comments.length>0
        ? comments.map((item, index) => (
            <Review setComments={setComments} index={index} item={item}/>
          ))
        : [1].map((item, index) => (
            <div
              key={index}
              className="h-[220px] w-full mt-2 mb-2 bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
    </div>
  );
}

export default Reviews;
