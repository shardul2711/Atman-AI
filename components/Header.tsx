"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/utils/supabase/client'; // Import the Supabase client

const Header = () => {
  const [user, setUser] = useState(null);

  // Function to get initials from the user's name
  const getUserInitials = (name) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2); // Limit to 2 initials
    return initials;
  };

  // Fetch the user data from Supabase
  useEffect(() => {
    const fetchUserData = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session?.session?.user) {
        const { data: userProfile } = await supabase
          .from('user') // Replace with your actual table name
          .select('name')
          .eq('id', session.session.user.id)
          .single(); // Get only one record
        setUser(userProfile);
      }
    };

    fetchUserData();
  }, []);

  const userName = user?.name || 'Shardul'; // Default name if no user is found
  const userInitials = getUserInitials(userName);

  return (
    <header className="bg-light-blue-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[6rem]">
          {/* Left Side: Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/">
              <img
                src="/images/logo.png" // Replace with actual logo path
                alt="Atman-AI Logo"
                className="w-16 h-16 rounded-full cursor-pointer"
              />
            </Link>
            <div className="flex space-x-8">
              <Link href="/expert-advice" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                Expert Advice
              </Link>
              <Link href="/therapy" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                Therapy
              </Link>
              <Link href="/chatbot" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                Chatbot
              </Link>
            </div>
          </div>

          {/* Right Side: Profile Icon with User Initials */}
          <Link href="/profile">
            <div className="flex justify-center items-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full cursor-pointer">
              {userInitials}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
