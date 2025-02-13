"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client'; // Import Supabase client

const ExpertAdvice = () => {
  const [experts, setExperts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const { data, error } = await supabase
          .from('expert') // Ensure the table is named 'expert'
          .select('*');

        if (error) {
          setError('Failed to load experts');
          console.error('Error fetching experts:', error);
        } else {
          setExperts(data); // Set the fetched experts data
        }
      } catch (err) {
        setError('An error occurred while fetching experts');
        console.error('Error:', err);
      }
    };

    fetchExperts();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Meet Our Expert Advisors
        </h2>

        {/* Error message display */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                {/* Display expert image using 'imageurl' */}
                <img
                  src={expert.imageurl || 'https://via.placeholder.com/300'} // Fallback to a placeholder if no image is provided
                  alt={expert.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white font-semibold bg-blue-500 bg-opacity-70 p-2 rounded-md">
                  {expert.name}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{expert.name}</h3>
                <p className="text-gray-600 text-sm italic">{expert.specialization}</p>
                <p className="text-gray-600 text-sm mt-1">
                  <span className="font-semibold">Expertise:</span> {expert.expertise}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Contact:</span> {expert.contact}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Education:</span> {expert.education}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${expert.contact}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors w-full inline-block text-center"
                >
                  Contact Expert on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvice;
