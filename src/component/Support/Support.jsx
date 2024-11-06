import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Support = () => {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-semibold text-[#9538E2] mb-4">Connect with Us on Social Media</h1>
        <p className="text-lg mb-6">We're here to assist you. Reach out to us through any of the platforms below!</p>
        
        <div className="flex justify-center gap-8 mb-6">
          <Link  to="https://www.facebook.com" target="_blank" className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          ><FaFacebook size={30} /></Link>
          <Link 
            to="https://www.twitter.com" target="_blank" className="p-4 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-300"
          >
            <FaTwitter size={30} />
          </Link>
          <Link 
            to="https://www.instagram.com"
            target="_blank"
            className="p-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300"
          >
            <FaInstagram size={30} />
          </Link>
          <Link to="https://www.linkedin.com" target="_blank"  className="p-4 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition duration-300"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>
  
        <p className="text-lg">
          Alternatively, you can <Link to="/contact" className="text-[#9538E2] hover:underline">Contact Us</Link> directly.
        </p>
      </div>
    );
  }

export default Support;