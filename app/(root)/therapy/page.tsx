"use client"

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client'; // Adjust the path as necessary

const Therapy = () => {
  const [therapies, setTherapies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch therapy data from Supabase
  useEffect(() => {
    const fetchTherapies = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('therapy').select('*');
        if (error) throw error;
        setTherapies(data);
      } catch (err) {
        setError('Error fetching therapies');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Stress Relief Therapies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {therapies.map((therapy) => (
            <div
              key={therapy.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={therapy.imageurl} // Assume 'imageurl' is the column name
                  alt={therapy.nametherapy}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white font-semibold bg-blue-500 bg-opacity-70 p-2 rounded-md">
                  {therapy.nametherapy}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm italic">{therapy.description}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Benefits:</span> {therapy.benefits}
                  </p>
                </div>
                <a
                  href={therapy.link} // Assuming 'link' is the column name
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapy;
