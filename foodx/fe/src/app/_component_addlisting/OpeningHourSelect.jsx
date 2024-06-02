"use client";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function OpeningHourSelect({openingHours,setOpeningHours}) {
  
  const [selectedDay, setSelectedDay] = useState("Monday");
  

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleOpenTimeChange = (event) => {
    const updatedOpeningHours = { ...openingHours };
    updatedOpeningHours[selectedDay].openTime = event.target.value;
    setOpeningHours(updatedOpeningHours);
  };

  const handleCloseTimeChange = (event) => {
    const updatedOpeningHours = { ...openingHours };
    updatedOpeningHours[selectedDay].closeTime = event.target.value;
    setOpeningHours(updatedOpeningHours);
  };


  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const openHour = ["9am", "10am", "11am", "12pm", "6pm"];
  const closeHour = [
    "10pm",
    "11pm",
    "12am (next day)",
    "1am (next day)",
    "2am (next day)",
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex gap-2 items-center">
          Day:
          <select value={selectedDay} onChange={handleDayChange} class="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64">
            <option selected disabled>Select a day</option>
            {day.map((item,index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          Open Time:
          <select
            value={openingHours[selectedDay].openTime}
            onChange={handleOpenTimeChange}
            class="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
          >
             <option selected disabled>Select open hour</option>
            {openHour.map((item,index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          Close Time:
          <select
            value={openingHours[selectedDay].closeTime}
            onChange={handleCloseTimeChange}
            class="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
          >
            <option selected disabled>Select close hour</option>
            {closeHour.map((item,index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default OpeningHourSelect;
