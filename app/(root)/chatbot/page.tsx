"use client"; // Add this directive to use React hooks

import React, { useState } from 'react';

export default function chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ user: string; bot: string }>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a bot response
    const botResponse = `Response to: ${input}`;
    setMessages([...messages, { user: input, bot: botResponse }]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">Chatbot Interface</h1>
          <p className="text-sm text-blue-100 mt-1">Ask me anything!</p>
        </div>

        {/* Chat History */}
        <div className="p-6 h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className="space-y-2">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                  <p>{msg.user}</p>
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p>{msg.bot}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}