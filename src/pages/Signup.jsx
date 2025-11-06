import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(email, password, photo);

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 character long and includes at least one uppercase, one Lowercase letter"
      );
      return;
    }

    setError('');
    setSuccess(false);
  };
  const togglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Register</h1>
        <form onSubmit={handleSignup}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <button
                onClick={togglePasswordShow}
                className="btn btn-xs top-2 right-5 absolute"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button className="btn btn-neutral mt-4 ">Register</button>
          </fieldset>
        </form>
        {success && (
          <p className="text-green-500">Account create Sucessfully</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:underline" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
