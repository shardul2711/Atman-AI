"use client";

import React, { useState } from 'react';
import { supabase } from '@/utils/supabase/client'; // Import your Supabase client
import Link from 'next/link'; // Correct import for Next.js link

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    city: '',
    stresstype: '',
    password: '',
  });

  const [message, setMessage] = useState('');

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
      // Sign up using Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setMessage(`Error: ${error.message}`);
        return;
      }

      // Optionally, add the user's additional details to a "user" table
      const { error: insertError } = await supabase
        .from('user') // Ensure this table exists in your database
        .insert([
          {
            name: formData.name,
            email: formData.email,
            age: formData.age,
            city: formData.city,
            stresstype: formData.stresstype,
          },
        ]);

      if (insertError) {
        setMessage(`Error saving user details: ${insertError.message}`);
      } else {
        setMessage('Sign-up successful! Check your email for a confirmation link.');
        // Clear form
        setFormData({
          name: '',
          email: '',
          age: '',
          city: '',
          stresstype: '',
          password: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Sign Up</h2>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
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
            <label htmlFor="age" className="block text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stresstype" className="block text-gray-700">Stress Type</label>
            <input
              type="text"
              id="stresstype"
              name="stresstype"
              value={formData.stresstype}
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
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-blue-600 font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
