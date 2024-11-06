// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-semibold text-[#9538E2] mb-4">Contact Us</h1>
      <p className="text-lg mb-6">If you have any issues or questions, feel free to reach out!</p>

      <form className="space-y-4">
        <input type="text" placeholder="Your Name"  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
        />
        <input type="email"  placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
        />
        <textarea  placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
        ></textarea>
        <button  type="submit" className="w-full py-2 bg-[#9538E2] text-white rounded-md hover:bg-[#7b2eae] transition duration-300"
        >Submit </button>
      </form>
    </div>
  );
}

export default Contact;
