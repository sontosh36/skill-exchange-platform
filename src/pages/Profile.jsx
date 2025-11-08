import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = use(AuthContext);
  const handleUpdate =() =>{
    toast.success('Profile Update Successful');
  }
  return (
    <div>
       
      <div className="shadow-sm rounded-md w-6/12 mx-auto flex flex-col items-center bg-base-200">
        <h2 className="font-bold text-3xl text-center">My Profile</h2>
        {user &&  <img className="w-15 h-15  rounded-full mt-2" src={user.photoURL} alt="" />}
        {user && <h1 className="mt-2 text-center">{user.displayName}</h1>}
        {user && <p className="mt-2 text-center">{user.email}</p>}
        <button onClick={handleUpdate} className="btn bg-black px-3 py-3 cursor-pointer my-2 text-white mt">Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
