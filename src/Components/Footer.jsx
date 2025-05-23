import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" y-10 pb-10 mt-16 border-fuchsia-500 border-t-2   bg-base text-base ">
      <div className="max-w-6xl  mt-15 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div>
           <Link to="/" className="text-2xl font-bold transition duration-300">
                   <span className="text">Hobby</span>
                   <span className="text"> Hub</span>
                 </Link>
          <p className="mt-2 text-base ">
            Discover and join local hobby groups, or start your own!
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-base">Home</Link></li>
            <li><Link to="/groups" className="hover:text-base">All Groups</Link></li>
            <li><Link to="/createGroup" className="hover:text-base">Create Group</Link></li>
            <li><Link to="/myGroups" className="hover:text-base">My Groups</Link></li>
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
