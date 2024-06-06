"use client";
import { register } from "@/app/_utils/GlobalAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    name: "",
    phoneNumber: "",
    email: "",
    ward: "",
    district: "",
    city: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const { username, password, repeatPassword, name, phoneNumber, email, ward, district, city } = formData;

    if (!username || !password || !repeatPassword || !name || !phoneNumber || !email || !ward || !district || !city) {
      return "All fields must be filled.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (password !== repeatPassword) {
      return "Passwords do not match.";
    }
    return null;
  };

  const formAction = async () => {
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const resp = await register(formData);
      if (resp.status === 200) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Account already exists.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to <span className="text-primary font-bold">FoodX</span>
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Discover the best restaurants in town with honest reviews from
              fellow food enthusiasts. Sign up today to explore new culinary
              adventures and share your own dining experiences.
            </p>

            <form action={formAction} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6">
                <Label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </Label>

                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </Label>

                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Label
                  htmlFor="ward"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ward
                </Label>
                <Input
                  type="text"
                  name="ward"
                  id="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  District
                </Label>
                <Input
                  type="text"
                  name="district"
                  id="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </Label>

                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <Label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </Label>

                <Input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </Label>

                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label
                  htmlFor="repeatPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </Label>

                <Input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <Label htmlFor="marketing_accept" className="flex gap-4">
                  <Input
                    type="checkbox"
                    id="marketing_accept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </Label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button type="submit">Create an account</Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link
                    href={"/login"}
                    className=" underline text-primary ml-1"
                  >
                    Login
                  </Link>
                  .
                </p>
              </div>
            </form>
            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
            {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
          </div>
        </main>
      </div>
    </section>
  );
}

export default page;
