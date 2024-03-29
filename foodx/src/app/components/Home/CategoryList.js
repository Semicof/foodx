import React, { useState } from "react";
import Data from "../../../../testData";
import Image from "next/image";

function CategoryList() {
  const [categoryList, setCategoryList] = useState(Data.testData);
  const [selectedCategory,setSelectedCategory] = useState();
  return (
    <div className="">
      <h2>Select food type:</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-2 mb-2">
        {categoryList.map((item,index) => (
          <div 
          key={item.id} 
          className={`"flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer hover:border-2
           ${selectedCategory==index?"grayscale-0 border-2":null}`}
          onClick={()=>setSelectedCategory(index)}
          >
            <Image src={item.icon} width={70} height={70} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
