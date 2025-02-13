import React from 'react';

// Constants for expert data
const experts = [
  {
    id: 1,
    name: 'Dr. John Doe',
    contact: '123-456-7890',
    education: 'MD, Psychiatry',
    specialization: 'Mental Health and Wellness',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    contact: '098-765-4321',
    education: 'PhD, Clinical Psychology',
    specialization: 'Therapy and Counseling',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Dr. Emily White',
    contact: '112-233-4455',
    education: 'MD, Neurology',
    specialization: 'Brain Health and Disorders',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Dr. Mark Lee',
    contact: '223-344-5566',
    education: 'PhD, Cognitive Psychology',
    specialization: 'Cognitive Behavioral Therapy',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  
  {
    id: 5,
    name: 'Dr. Mark Lee',
    contact: '223-344-5566',
    education: 'PhD, Cognitive Psychology',
    specialization: 'Cognitive Behavioral Therapy',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  // Add more experts as needed
];

const ExpertAdvice = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Meet Our Expert Advisors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={expert.image}
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
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Contact:</span> {expert.contact}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Education:</span> {expert.education}
                  </p>
                </div>
                <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full">
                  Contact Expert
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvice;
