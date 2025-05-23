import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { HiLogout } from "react-icons/hi";
import toast from "react-hot-toast";
import { auth } from "../firebase.init";

const MyProfile = () => {
  useEffect(() => {
    document.title = "My Profile | Hobby Hub";
  }, []);

  const { user, logout, refreshUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
      refreshUser();
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    }
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg text-center">
        <p className=" text-base">Please log in to view your profile.</p>
        <Link to="/login" className="mt-4 inline-block text hover:underline">
          Go to Login
        </Link>
      </div>
    );
  }
  

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-base border-b-pink-400 p-10  shadow-2xl shadow-pink-400 transition rounded-2xl duration-300 overflow-hidden">
      {/* Header Section */}
      <div className=" text-base text-center">
        <h2 className="text-3xl font-bold">Welcome, {user.displayName || "User"}</h2>
        <p className="text-sm mt-4">Manage your personal profile</p>
      </div>

      {/* Profile Content */}
      <div className="p-6 mt-5  rounded-lg flex background flex-col items-center">
        <img
          src={user.photoURL || "/default-user.png"}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md -mt-16 object-cover"
        />

        {!isEditing ? (
          <>
            <h3 className="mt-4 text-xl font-semibold">{user.displayName || "No Name"}</h3>
            <p className="text-gray-600 text-sm">{user.email}</p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow transition"
              >
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow flex items-center gap-1 transition"
              >
                <HiLogout /> Logout
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdateProfile} className="w-full mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded shadow"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
