import React, { useState } from "react";
import Data from "../../../../testData";

function RatingSelection() {
    const [selectedRating,setSelectedRating] = useState([]);
    const onChangeRating = (isChecked,val)=>{
        if(isChecked){
            setSelectedRating([...selectedRating,val]);
        }else{
            setSelectedRating(selectedRating.filter((item)=>item!==val));   
        }
    }
  return (
    <div className=" px-2 mt-5 w-[70%]">
      <h2>Select rating</h2>
      <div>
        {Data.testRating.map((item,index) => (
          <div key={index} className="flex justify-between">
            <label className=" text-red-500">{item.icon}</label>
            <input type="checkbox" onChange={(e)=>onChangeRating(e.target.checked,item.name)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingSelection;
