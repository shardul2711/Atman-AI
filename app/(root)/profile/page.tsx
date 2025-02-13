"use client"

import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client'; // Import Supabase client

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    age: '',
    city: '',
    stressType: 'Work-related',
  });

  useEffect(() => {
    // Fetch the first user from the 'user' table
    const fetchFirstUser = async () => {
      const { data, error } = await supabase
        .from('user')
        .select('*')
        .order('id', { ascending: true })  // Assuming 'id' is the primary key
        .limit(1)  // Limit to only 1 record (the first user)
        .single(); // Return a single row (first user)

      if (data) {
        setUserData({
          name: data.name,
          username: data.username,
          age: data.age,
          city: data.city,
          stressType: data.stress_type,
        });
      } else if (error) {
        console.error('Error fetching user:', error.message);
      }
    };

    fetchFirstUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Profile Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-3xl flex items-center justify-center rounded-full">
            {userData.name ? userData.name[0].toUpperCase() : 'NA'}
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Profile</h1>
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-lg text-gray-900">{userData.name}</p>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <p className="mt-1 text-lg text-gray-900">{userData.username}</p>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <p className="mt-1 text-lg text-gray-900">{userData.age}</p>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <p className="mt-1 text-lg text-gray-900">{userData.city}</p>
            </div>

            {/* Type of Stress */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Type of Stress</label>
              <p className="mt-1 text-lg text-gray-900">{userData.stressType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
