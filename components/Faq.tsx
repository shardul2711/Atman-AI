"use client";

import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is my data safe?",
      answer:
        "Yes, we take data security very seriously. All data is encrypted and stored securely to ensure your privacy and safety.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team via email at support@example.com or through our contact page for assistance.",
    },
    {
      question: "How do I update my profile?",
      answer:
        "To update your profile, go to the 'Profile' section and click on 'Edit Profile'. Make your changes and save them.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "Click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password securely.",
    },
    {
      question: "Is the chatbot available 24/7?",
      answer:
        "Yes, our chatbot is available 24/7 to answer any of your questions or provide assistance whenever you need it.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#4E5757] text-[#E0E0E0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-[#A9B1AD] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#C5C5C5] p-6 rounded-lg shadow-md text-[#3B4545] cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <span
                  className={`text-xl font-bold ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  } transition-transform`}
                >
                  +
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-sm mt-4 transition-opacity duration-300 ease-in">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
