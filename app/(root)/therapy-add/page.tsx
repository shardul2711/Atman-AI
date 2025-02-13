'use client';

import React, { useState } from 'react';
import { supabase } from '@/utils/supabase/client';

export default function TherapyFormPage() {
  const [therapyData, setTherapyData] = useState({
    imageurl: '',
    nametherapy: '',
    description: '',
    benefits: '',
    link: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTherapyData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!therapyData.nametherapy || !therapyData.description || !therapyData.link) {
      setError('Please fill out all required fields.');
      return;
    }

    console.log('Submitting data:', therapyData); // Log the data for debugging

    // Insert data into Supabase
    try {
      const { data, error: supabaseError } = await supabase.from('therapy').insert([therapyData]);

      if (supabaseError) {
        setError(`Failed to submit therapy data: ${supabaseError.message}`);
        console.error('Supabase Error:', supabaseError);
      } else {
        setSuccess('Therapy data successfully submitted!');
        setTherapyData({
          imageurl: '',
          nametherapy: '',
          description: '',
          benefits: '',
          link: ''
        });
      }
    } catch (err: any) {
      setError(`An unexpected error occurred: ${err.message}`);
      console.error('Unexpected Error:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Add New Therapy</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image URL */}
        <div>
          <label htmlFor="imageurl" className="block text-lg font-medium">Image URL</label>
          <input
            type="text"
            id="imageurl"
            name="imageurl"
            value={therapyData.imageurl}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            placeholder="Enter therapy image URL"
          />
        </div>

        {/* Therapy Name */}
        <div>
          <label htmlFor="nametherapy" className="block text-lg font-medium">Therapy Name</label>
          <input
            type="text"
            id="nametherapy"
            name="nametherapy"
            value={therapyData.nametherapy}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            placeholder="Enter therapy name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={therapyData.description}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            placeholder="Enter therapy description"
            required
          />
        </div>

        {/* Benefits */}
        <div>
          <label htmlFor="benefits" className="block text-lg font-medium">Benefits (Optional)</label>
          <textarea
            id="benefits"
            name="benefits"
            value={therapyData.benefits}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            placeholder="Enter benefits of therapy (optional)"
          />
        </div>

        {/* Link */}
        <div>
          <label htmlFor="link" className="block text-lg font-medium">Link</label>
          <input
            type="url"
            id="link"
            name="link"
            value={therapyData.link}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            placeholder="Enter therapy link"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 focus:outline-none"
          >
            Submit Therapy
          </button>
        </div>
      </form>

      {/* Error and Success Messages */}
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {success && <div className="mt-4 text-green-600">{success}</div>}
    </div>
  );
}
