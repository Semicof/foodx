"use client";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OpeningHourSelect from "@/app/_component_addlisting/OpeningHourSelect";
import ImageUpload from "@/app/_upload/ImageUpload";

function page() {
  const defaultOpeningHours = {
    openTime: "9am",
    closeTime: "10pm",
  };

  const [userType, setUserType] = useState("owner");
  const [restaurantName, setRestaurantName] = useState("");
  const [ward, setWard] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [ig, setIg] = useState("");
  const [isDelivery, setIsDelivery] = useState(false);
  const [isTakeAway, setIsTakeAway] = useState(false);
  const [isOutDoorSeating, setIsOutDoorSeating] = useState(false);
  const [images, setImages] = useState([]);

  const [openingHours, setOpeningHours] = useState({
    Monday: { ...defaultOpeningHours },
    Tuesday: { ...defaultOpeningHours },
    Wednesday: { ...defaultOpeningHours },
    Thursday: { ...defaultOpeningHours },
    Friday: { ...defaultOpeningHours },
    Saturday: { ...defaultOpeningHours },
    Sunday: { ...defaultOpeningHours },
  });

  const handleDeliveryChange = () => {
    setIsDelivery(!isDelivery);
  };

  const handleTakeAwayChange = () => {
    setIsTakeAway(!isTakeAway);
  };

  const handleOutDoorSeatingChange = () => {
    setIsOutDoorSeating(!isOutDoorSeating);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setLongitude(longitude);
        setLatitude(latitude);
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      userType,
      restaurantName,
      address: { ward, district, city, longitude, latitude },
      description,
      contact: { phoneNum, email },
      social: { website, facebook, ig },
      openingHours,
      images,
      options: { isDelivery, isTakeAway, isOutDoorSeating },
    };
    console.log(formData);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md w-[70%] m-6 h-[70%] overflow-y-scroll">
        <h1 className="text-primary text-3xl font-bold text-center my-1">
          Add new listing
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2>You are:</h2>
          <RadioGroup
            defaultValue={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="owner" id="owner" />
              <Label htmlFor="owner">Owner</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="anonymous" id="anonymous" />
              <Label htmlFor="anonymous">Anonymous</Label>
            </div>
          </RadioGroup>

          <h2>Restaurant's name:</h2>
          <Input
            className="w-[50%]"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />

          <h2>Enter address of restaurant:</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex gap-1 items-center">
              <Label htmlFor="ward">Ward:</Label>
              <Input value={ward} onChange={(e) => setWard(e.target.value)} />
            </div>
            <div className="flex gap-1 items-center">
              <Label htmlFor="district">District:</Label>
              <Input
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="flex gap-1 items-center">
              <Label htmlFor="city">City:</Label>
              <Input value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>

          <h2>Enter longitude and latitude:</h2>
          <div className=" grid grid-cols-3 gap-4">
            <div className="flex gap-1 items-center">
              <Label htmlFor="lng">Longitude:</Label>
              <Input
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className="flex gap-1 items-center">
              <Label htmlFor="lat">Latitude:</Label>
              <Input
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <h2>Or:</h2>
              <Button onClick={getCurrentLocation}>
                Use my current location
              </Button>
            </div>
          </div>

          <h2>Description:</h2>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <h2>Dining options:</h2>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <Checkbox id="isDelivery" onClick={handleDeliveryChange} />
              <Label htmlFor="isDelivery">Delivery</Label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox id="isTakeAway" onClick={handleTakeAwayChange} />
              <Label htmlFor="isTakeAway">Take Away</Label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="isOutDoorSeating"
                onClick={handleOutDoorSeatingChange}
              />
              <Label htmlFor="isOutDoorSeating">Out Door Seating</Label>
            </div>
          </div>

          <h2>Contact:</h2>
          <div className=" grid grid-cols-2 gap-4">
            <div className="flex gap-1 items-center">
              <Label htmlFor="phone_num">Phone number:</Label>
              <Input
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>
            <div className="flex gap-1 items-center">
              <Label htmlFor="email">Email:</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <h2>Social:</h2>
          <div className=" grid grid-cols-3 gap-4">
            <div className="flex gap-1 items-center">
              <Label htmlFor="website">Website:</Label>
              <Input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="flex gap-1 items-center">
              <Label htmlFor="facebook">Facebook:</Label>
              <Input
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
            <div className="flex gap-1 items-center">
              <Label htmlFor="instagram">Instagram:</Label>
              <Input value={ig} onChange={(e) => setIg(e.target.value)} />
            </div>
          </div>

          <h2>Add opening hour</h2>
          <OpeningHourSelect
            openingHours={openingHours}
            setOpeningHours={setOpeningHours}
          />

          <h2>Add images</h2>
          <ImageUpload setImages={(value) => setImages(value)} />

          <div className="flex items-center w-full justify-center">
            <Button type="submit" className="m-4 w-[20%]">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
