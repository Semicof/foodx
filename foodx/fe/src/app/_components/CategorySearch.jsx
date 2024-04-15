import React from "react";
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


function CategorySearch() {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 mx-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Restaurants</span>
      </h2>
      <h2 className="text-xl text-gray-500">
        Discover Restaurants in One click
      </h2>

      <div className="flex w-full max-w-lg items-center space-x-2 mt-4">
        <Input type="email" placeholder="Enter here..." />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Choice what to search</SelectLabel>
              <SelectItem value="city">City</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="type">Type</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button type="submit">Search</Button>
      </div>
    </div>
  );
}

export default CategorySearch;
