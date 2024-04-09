import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CategorySearch() {
  return (
    <div className="mb-10 flex flex-col items-center gap-3">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Restaurants</span>
      </h2>
      <h2 className="text-xl text-gray-500">
        Search to see all Information and Rating of a Restaurant in One click
      </h2>

      <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
        <Input type="email" placeholder="Enter restaurant name..." />
        <Button type="submit">Search</Button>
      </div>

    </div>
  );
}

export default CategorySearch;
