"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For redirecting
import { supabase } from "@/utils/supabase/client"; // Import your Supabase client
import Link from "next/link"; // For internal navigation

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const router = useRouter();

  // Handle form input changes
  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      // Use Supabase Auth signInWithPassword method
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setMessage("Invalid email or password. Please try again.");
      } else {
        setMessage("Sign-in successful!");
        // Redirect to home page
        router.push("/"); // Replace '/' with the actual path of your home page
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Sign In</h2>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
