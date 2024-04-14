"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";

function ImageUpload() {
  return (
    <div>
        <CldUploadWidget uploadPreset="foodximgupload">
          {({ open }) => {
            return <Button onClick={() => open()}>Upload an Image</Button>;
          }}
        </CldUploadWidget>
    </div>
  );
}

export default ImageUpload;
