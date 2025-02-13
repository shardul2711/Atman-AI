import Link from 'next/link';

const Header = () => {
  const userInitials = "JD"; // Example initials, replace with dynamic data if necessary

  return (
    <header className="bg-light-blue-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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

          {/* Right Side: Profile Icon with Initials */}
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