import React from 'react';

// Constants for therapy data
const therapies = [
  {
    id: 1,
    name: 'Music Beat Therapy',
    description:
      'Music Beat Therapy uses rhythm and beats to relax the mind and body, helping you relieve stress and regain inner peace.',
    benefits: 'Reduces stress, improves mood, boosts mental clarity.',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Guided Meditation Therapy',
    description:
      'Guided Meditation Therapy helps to relax the mind through soothing voices and calming exercises to reduce anxiety and stress.',
    benefits: 'Calms the mind, reduces anxiety, improves focus.',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Breathing Exercises Therapy',
    description:
      'Breathing exercises focus on deep and controlled breathing to help reduce stress, tension, and anxiety.',
    benefits: 'Improves relaxation, reduces heart rate, relieves tension.',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Aromatherapy',
    description:
      'Aromatherapy uses essential oils and pleasant scents to create a calming effect on the mind and body.',
    benefits: 'Boosts mood, improves relaxation, relieves tension.',
    image: '/path-to-image.jpg', // Replace with actual image URL
  },
  // Add more therapies as needed
];

const Therapy = () => {
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
                  src={therapy.image}
                  alt={therapy.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white font-semibold bg-blue-500 bg-opacity-70 p-2 rounded-md">
                  {therapy.name}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm italic">{therapy.description}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Benefits:</span> {therapy.benefits}
                  </p>
                </div>
                <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapy;
