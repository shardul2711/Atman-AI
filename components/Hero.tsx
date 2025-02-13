import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh]">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between mt-16">
        {/* Left Section */}
        <div className="md:w-1/2 pl-10">
          <h1 className="text-4xl font-bold leading-tight font-ibm-plex-sans">
            Atman-AI <br />
            <span className="text-blue-600"> Expert Care, Anytime, Anywhere.</span>
          </h1>
          <p className="mt-6 mr-20 text-gray-500 text-lg font-serif">
          Atman-AI is an AI-driven mental health chatbot designed to support 
          individuals in improving their well-being. It offers expert advice, therapy 
          tools, and personalized chatbot interactions, providing a safe and accessible 
          space for mental health care. Available 24/7, Atman-AI empowers users to 
          take charge of their emotional health with real-time guidance and support. 
          Start your journey towards better mental health with Atman-AI today.
          </p>

          <button className="mt-10 px-6 py-3 text-blue-500 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white">
            <Link href="/learn-more" className="transition-colors">
              Learn More
            </Link>
          </button>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 relative pl-10">
          <img
            src="/images/home main.png"
            alt="Hero Image"
            className="hidden md:block animate-slide-in-right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;