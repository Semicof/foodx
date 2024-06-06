"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppContext } from '@/context/AppProvider';
import React, { useState } from 'react';

function Page() {
  const { user } = useAppContext();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [avatarLink, setAvatarLink] = useState(user.avatarLink);
  const [facebookLink, setFacebookLink] = useState(user.facebookLink);
  const [instagramLink, setInstagramLink] = useState(user.instagramLink);
  const [ward, setWard] = useState(user.ward);
  const [district, setDistrict] = useState(user.district);
  const [city, setCity] = useState(user.city);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className='text-2xl font-bold text-primary text-center'>Edit your profile</h2>
      <form action={handleSubmit} className="space-y-4">
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
          <Label>Avatar Link</Label>
          <Input
            type="text"
            value={avatarLink}
            onChange={(e) => setAvatarLink(e.target.value)}
            
          />
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
        <Button type="submit" >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Page;
