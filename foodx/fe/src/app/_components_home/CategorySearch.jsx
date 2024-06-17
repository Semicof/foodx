import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRestaurants, searchUsers } from "../_utils/GlobalAPI";


function CategorySearch({ searchTable, searchOptions, setSearchResult, setSearchMsg }) {
  const [searchContent, setSearchContent] = useState("");
  const [searchColumn, setSearchColumn] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    const data = {
      searchRequestDTO: [
        {
          column: searchColumn,
          value: searchContent,
          operation: "LIKE",
        },
      ],
      pageRequestDTO: {
        pageNo: 0,
        pageSize: 5,
      },
      sort: "ASC",
      sortByColumn: "restaurantName",
    };

    try {
      let result,restaurants;
      if (searchTable === "restaurant") {
        if(data.searchRequestDTO[0].column==="Name"||data.searchRequestDTO[0].column==="") data.searchRequestDTO[0].column="restaurantName";
        else data.searchRequestDTO[0].column = data.searchRequestDTO[0].column.toLowerCase();
        result = await getRestaurants(data);
      } else if (searchTable === "user") {
        data.searchRequestDTO[0].column="name"
        result = await searchUsers(data);
      }
      restaurants = result.data.result.content;
      setSearchResult(restaurants);
    } catch (error) {
      setSearchMsg("Error occurred during search.");
      console.error("Search error:", error);
    }
  };

  return (
    <div className="flex w-full max-w-lg items-center space-x-2 mt-4">
      <Input
        type="text"
        placeholder="Enter here..."
        value={searchContent}
        onChange={(e) => setSearchContent(e.target.value)}
      />
      {searchOptions && (
        <Select onValueChange={(value) => setSearchColumn(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Choice what to search</SelectLabel>
              {searchOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
      <Button type="submit" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default CategorySearch;
