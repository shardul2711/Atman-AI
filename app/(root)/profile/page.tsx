"use client"

import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    username: 'johndoe123',
    age: '28',
    city: 'New York',
    stressType: 'Work-related',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save data (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Profile Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-3xl flex items-center justify-center rounded-full">
            JD
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Profile</h1>
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.name}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.username}</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              {isEditing ? (
                <input
                  type="text"
                  name="age"
                  value={userData.age}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.age}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  value={userData.city}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.city}</p>
              )}
            </div>

            {/* Type of Stress */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Type of Stress</label>
              {isEditing ? (
                <select
                  name="stressType"
                  value={userData.stressType}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Work-related">Work-related</option>
                  <option value="Personal">Personal</option>
                  <option value="Financial">Financial</option>
                  <option value="Health">Health</option>
                </select>
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.stressType}</p>
              )}
            </div>
          </div>

          {/* Edit/Save Button */}
          <div className="mt-8 flex justify-center">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;