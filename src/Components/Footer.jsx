import React from "react";
import { Link } from "react-router";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer
      className="y-10 pb-10 mt-16 border-t-2 bg-base border-t-pink-400 transition duration-300 text-base"
      style={{ boxShadow: "0 -8px 15px -8px rgba(219, 39, 119, 0.7)" }}
    >
      <div className="max-w-6xl ml-6 mt-15 lg:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold transition duration-300"
          >
            <span className="text">Hobby</span>
            <span className="text"> Hub</span>
          </Link>
          <p className="mt-2 text-base ">
            Discover and join local hobby groups, or start your own!
          </p>
        </div>

        <div>
          <h3 className="font-semibold text mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/groups" className="hover:hover:text-purple-500">
                All Groups
              </Link>
            </li>
            <li>
              <Link to="/createGroup" className="hover:hover:text-indigo-500">
                Create Group
              </Link>
            </li>
            <li>
              <Link to="/myGroups" className="hover:hover:text-pink-500">
                My Groups
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text mb-2">Contact</h3>
          <p>
            
            Email:
            <a
              href="mailto:hobbyhub12@gmail.com"
              className="hover:text-pink-500"
            >
              
              hobbyhub12@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <a href="tel:+8801XXXXXXXXX" className="hover:text-indigo-500">
              
              +8801XXXXXXXXX
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text mb-2">Follow Us</h3>
          <div className="flex gap-4 text-2xl mt-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <CiFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <CiInstagram />
            </a>
            <a
              href=" https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500"
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm ">
        © {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
