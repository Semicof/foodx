"use client";
import { getMyInfo } from "@/app/_utils/GlobalAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/context/AppProvider";
import React, { useEffect, useState } from "react";

function Page() {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatarLink, setAvatarLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [ward, setWard] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const token = localStorage.getItem("token");
      const fUser = await getMyInfo(token);
      const userData = fUser.data.result;
      setUser(userData);
      setName(userData.name);
      setEmail(userData.email);
      setPhoneNumber(userData.phoneNumber);
      setAvatarLink(userData.avatarLink);
      setFacebookLink(userData.facebookLink);
      setInstagramLink(userData.instagramLink);
      setWard(userData.ward);
      setDistrict(userData.district);
      setCity(userData.city);
    };
    getInfo();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("avatarLink", newAvatar ? newAvatar : avatarLink);
    formData.append("facebookLink", facebookLink);
    formData.append("instagramLink", instagramLink);
    formData.append("ward", ward);
    formData.append("district", district);
    formData.append("city", city);

    if (newAvatar) {
      formData.append("avatar", newAvatar);
    }

    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful response
        console.log("Profile updated successfully");
      } else {
        // Handle error response
        console.error("Error updating profile");
      }
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAvatar(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-primary text-center">
        Edit your profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label>Phone Number</Label>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <Label>Avatar</Label>
          <div className="flex items-center space-x-4">
            <img
              src={newAvatar ? URL.createObjectURL(newAvatar) : avatarLink}
              alt="User Avatar"
              className="w-20 h-20 rounded-full"
            />
            <Input type="file" accept="image/*" onChange={handleAvatarUpload} />
          </div>
        </div>
        <div>
          <Label>Facebook Link</Label>
          <Input
            type="text"
            value={facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
          />
        </div>
        <div>
          <Label>Instagram Link</Label>
          <Input
            type="text"
            value={instagramLink}
            onChange={(e) => setInstagramLink(e.target.value)}
          />
        </div>
        <div>
          <Label>Ward</Label>
          <Input
            type="text"
            value={ward}
            onChange={(e) => setWard(e.target.value)}
          />
        </div>
        <div>
          <Label>District</Label>
          <Input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div>
          <Label>City</Label>
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Page;
