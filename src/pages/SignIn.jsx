import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const [error, setError] = useState("");
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location.state || '/');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.warn(err.message);
      });
  };
  const forgetPass = () => {
    console.log("reset password");
  };
  return (
    <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <button onClick={forgetPass} className="link link-hover">
                Forgot password?
              </button>
            </div>
            <button className="btn bg-black text-white font-semibold mt-4">Login</button>
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
  );
};

export default SignIn;
