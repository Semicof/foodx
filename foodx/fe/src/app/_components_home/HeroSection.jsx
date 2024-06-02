import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl h-screen px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">
            Elevate Your Culinary Adventures with Us
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              src="/images/heroimg.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full rounded-3xl w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                Welcome to <span className="text-primary">Foodx</span>, where
                every meal becomes a memorable experience. Whether you're a
                connoisseur of fine dining or seeking hidden gems in your
                neighborhood, our app is your gateway to culinary excellence.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                inventore quidem omnis quibusdam minima hic temporibus, qui
                culpa alias est quaerat non provident possimus dignissimos
                pariatur, modi accusamus vero. Ab!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                inventore quidem omnis quibusdam minima hic temporibus, qui
                culpa alias est quaerat non provident possimus dignissimos
                pariatur, modi accusamus vero. Ab!
              </p>
            </article>
          </div>
        </div>
        <div className="flex items-center w-full justify-end mt-6">
          

          <Button className="p-4 w-[15%] h-[100%]">
            <Link href="/explore">Explore now!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
