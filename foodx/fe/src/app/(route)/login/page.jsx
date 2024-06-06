"use client";
import { login } from "@/app/_utils/GlobalAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const { username, password } = formData;

    if (!username || !password) {
      return "All fields must be filled.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
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
      const resp = await login(formData);
      if (resp.status === 200) {
        localStorage.setItem('token',resp.data.result.token);
        setSuccess("Login successfully, redirecting to homepage...");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 405) {
        setError("Invalid information.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Join the <span className="text-primary font-bold">FoodX</span>{" "}
            community!
          </h1>

          <p className="mt-4 text-gray-500">
            Whether you're a seasoned food critic or just love a good meal, our
            app connects you with great eateries and authentic reviews. Log in
            now to start your gastronomic journey!
          </p>
        </div>

        <form
          action={formAction}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>

            <div className="relative">
              <Input
                name="username"
                value={formData.username}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your username"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>

            <div className="relative">
              <Input
                value={formData.password}
                onChange={handleChange}
                name="password"
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link href={"/signup"} className="underline text-primary ml-1">
                Sign up
              </Link>
            </p>

            <Button type="submit">Log in</Button>
          </div>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default page;
