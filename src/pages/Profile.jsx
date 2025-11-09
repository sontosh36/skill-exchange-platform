import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = use(AuthContext);
  const handleUpdate =() =>{
    toast.success('Profile Update Successful');
  }
  return (
    <div className="py-4">
       <div className="shadow-sm rounded-md w-6/12 mx-auto flex flex-col items-center bg-base-200 p-4">
        <h2 className="font-bold text-3xl text-center">My Profile</h2>
        {user &&  <img className="w-15 h-15  rounded-full mt-2" src={user.photoURL} alt="" />}
        {user && <h1 className="mt-2 text-center">{user.displayName}</h1>}
        {user && <p className="mt-2 text-center">{user.email}</p>}
        <button onClick={handleUpdate} className="btn bg-blue-600 px-3 py-3 cursor-pointer mt-2 text-white rounded-lg">Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
