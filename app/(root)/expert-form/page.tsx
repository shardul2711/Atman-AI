"use client";

import React, { useState } from 'react';
import { supabase } from '@/utils/supabase/client'; // Import Supabase client

const AddExpertForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    expertise: '',
    contact: '',
    education: '',
    email: '',
    imageurl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('expert') // Ensure your Supabase table is named "expert"
        .insert([formData]);

      if (error) {
        throw error;
      }

      alert('Expert added successfully!');
      setFormData({
        name: '',
        expertise: '',
        contact: '',
        education: '',
        email: '',
        imageurl: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the expert. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Add New Expert</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="expertise">
              Expertise
            </label>
            <input
              type="text"
              name="expertise"
              id="expertise"
              value={formData.expertise}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="contact">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="education">
              Education
            </label>
            <input
              type="text"
              name="education"
              id="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="imageurl">
              Image URL
            </label>
            <input
              type="url"
              name="imageurl"
              id="imageurl"
              value={formData.imageurl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full"
          >
            Add Expert
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpertForm;
