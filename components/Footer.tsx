import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#4D5656] text-[#C5C5C5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-[#949B96] font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We aim to provide the best services and solutions with a focus on innovation and quality.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-[#949B96] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/expert-advice" className="hover:text-white">
                  Expert Advice
                </Link>
              </li>
              <li>
                <Link href="/therapy" className="hover:text-white">
                  Therapy
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="hover:text-white">
                  Chatbot
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-white">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-[#949B96] font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: sharduldhanokar@gmail.com</p>
            <p className="text-sm">Phone: +91 1234567890</p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-[#949B96]" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Code Breakers. All rights reserved.</p>
          <p className="text-sm text-[#949B96]">By Code Breakers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
