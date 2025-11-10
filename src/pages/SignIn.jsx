import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    signInUser(email, password)
      .then(() => {
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.warn(err.message);
      });
  };
  const forgetPass = () => {};
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="py-13">
      <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login</h1>
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className=" floating-label">Email</label>
              <input
                type="email"
                name="email"
                className="input outline-none"
                placeholder="Email"
                required
              />
              <label className="label floating-label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input outline-none"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={togglePassword}
                  className="btn btn-xs top-2 right-5 absolute"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div>
                <button onClick={forgetPass} className="link link-hover">
                  Forgot password?
                </button>
              </div>
              <button className="btn bg-blue-500 text-white font-semibold mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <button
            onClick={handleSignInGoogle}
            className="mt-2 btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle size={26} />
            Sign In with Google
          </button>

          {error && <p className="text-red-500">{error}</p>}
          <p>
            New to our Website? Please{" "}
            <Link className="text-blue-500 hover:underline" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
