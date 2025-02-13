import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/expert-advice" className="text-gray-700 hover:text-blue-600 transition-colors">
              Expert Advice
            </Link>
            <Link href="/therapy" className="text-gray-700 hover:text-blue-600 transition-colors">
              Therapy
            </Link>
            <Link href="/chatbot" className="text-gray-700 hover:text-blue-600 transition-colors">
              Chatbot
            </Link>
          </div>

          {/* Right Side: Profile Link */}
          <div>
            <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;