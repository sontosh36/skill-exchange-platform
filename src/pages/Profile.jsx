import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = use(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.warn("Profile update error:", error);
      toast.error("Failed to update profile");
    }
  };
  return (
    <div className="py-4 min-h-screen">
      <div className="shadow-sm rounded-md w-11/12 md:w-6/12 mx-auto flex flex-col items-center bg-base-200 p-4">
        <h2 className="font-bold text-3xl text-center">My Profile</h2>

        {user && (
          <>
            <img
              className="w-24 h-24 rounded-full mt-2"
              src={user.photoURL}
              alt="Profile"
            />
            <h1 className="mt-2 text-center font-semibold text-lg">
              {user.displayName}
            </h1>
            <p className="mt-1 text-center text-gray-600">{user.email}</p>
          </>
        )}

        {!isEditing ? (
          <button
            onClick={handleUpdate}
            className="btn bg-blue-600 px-3 py-3 cursor-pointer mt-4 text-white rounded-lg"
          >
            Update Profile
          </button>
        ) : (
          <form
            onSubmit={handleSave}
            className="flex flex-col gap-4 mt-4 w-full md:w-8/12"
          >
            <input
              type="text"
              placeholder="Enter new name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Enter new photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />

            <div className="flex justify-between mt-2">
              <button
                type="submit"
                className="btn bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn bg-gray-400 text-white px-4 py-2 rounded-lg"
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

export default Profile;
