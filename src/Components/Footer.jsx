// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-accent dark:text-gray-300 py-10 px-6 mt-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div>
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">HobbyHub</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover and join local hobby groups, or start your own!
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/groups" className="hover:text-primary">All Groups</Link></li>
            <li><Link to="/createGroup" className="hover:text-primary">Create Group</Link></li>
            <li><Link to="/myGroups" className="hover:text-primary">My Groups</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: support@hobbyhub.com</p>
          <p>Phone: +8801XXXXXXXXX</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-pink-500">🌐</a>
            <a href="#" className="hover:text-purple-500">📘</a>
            <a href="#" className="hover:text-indigo-500">🐦</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
