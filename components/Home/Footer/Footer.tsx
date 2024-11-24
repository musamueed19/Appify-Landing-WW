'use client'
import { FaClock, FaDribbble, FaEnvelope, FaFacebook, FaGithub, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {

    function gitHubHandler() {
        window.location.href = 'https://github.com/musamueed19/Appify-Landing-WW/tree/main';
    }

  return (
    <div className="bg-white py-16" id="footer">
          <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Links & Info - Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Main Logo - Footer - panel 1 */}
          {/* Logo & description */}
          <div>
            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer bg-transparent">
              <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm leading-[2rem] w-[80%] font-medium text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate natus nemo.
            </p>
          </div>

          {/* Footer - panel 2 */}
          {/* About us - Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About us</h3>

            <ul className="text-gray-500 text-sm mt-4 space-y-4 font-semibold">
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
          </div>

          {/* Footer - panel 3 */}
          {/* Our Information - Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Our Information
            </h3>

            <ul className="text-gray-500 text-sm mt-4 space-y-4 font-semibold">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </div>

          {/* Footer - panel 4 */}
          {/* Our Contact Info - Links */}
          <div id="contact">
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>

            <ul className="text-gray-500 text-sm mt-4 space-y-4 font-semibold">
              <li className="flex items-center text-sm">
                <FaMapMarkedAlt className="mr-2" />
                Lahore, Punjab, Pakistan - 54000
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                +92 305 8012626
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />6 Days - 8am - 2pm
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                musa.swh@gmail.com
              </li>
            </ul>
          </div>
              </div>
              
              {/* Copyright & Social Connections - Section  */}
              <div className="mt-8 border-t pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 font-medium">
                  
                  {/* Copyright Section */}
                  <p className="text-center md:text-left">Copyright © 2025 Appify. All rights reserved</p>

                  {/* Social Connections - Section */}
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <span>Social : </span>
                      <FaFacebook className="hover:text-blue-700 cursor-pointer h-5 w-5" />
                      <FaTwitter className="hover:text-blue-400 cursor-pointer h-5 w-5" />
                      <FaGithub onClick={gitHubHandler} className="hover:text-red-950 cursor-pointer h-5 w-5" />
                      <FaDribbble className="hover:text-pink-700 cursor-pointer h-5 w-5" />
                      {/* <FaInstagram className="hover:text-pink-600 cursor-pointer h-5 w-5" /> */}
                  </div>
                  
              </div>
      </div>
    </div>
  );
};

export default Footer;
