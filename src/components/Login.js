import React, { useState } from "react";
import login from "../images/login.jpg";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { logIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate(-1);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="flex items-center justify-center w-full h-full my-44 ">
        <div className="flex w-full mx-5 shadow-2xl md:w-3/5 md:h-1/3 md:mx-0 ">
          <div className="flex justify-center w-3/5">
            <img
              className="w-32 h-32 mt-10 sm:w-56 sm:h-56 md:w-96 md:h-96 md:mt-0"
              src={login}
              alt="login"
            />
          </div>
          <div className="relative flex flex-col items-center justify-between w-2/5 pb-10 text-white sm:pb-24 bg-primary-color">
            <h1 className="mt-10 mb-5 text-xl font-semibold sm:text-2xl md:mt-20 md:text-4xl md:mb-14 ">
              Login
            </h1>
            {error && <h1>{error}</h1>}

            <form onSubmit={handleSubmit} className="text-center">
              <input
                className="w-2/3 p-1 mb-3 text-[10px] sm:text-xs text-black rounded-md outline-none md:mb-6 md:w-3/5 md:p-2 md:text-base"
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />

              <input
                className="w-2/3 p-1 mb-3 text-[10px] sm:text-xs text-black rounded-md outline-none md:mb-6 md:w-3/5 md:p-2 md:text-base"
                required
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />

              <button
                type="submit"
                className="px-5 py-1 mb-6 text-[10px] sm:text-xs text-white bg-black rounded-md sm:px-8 md:w-3/5 md:py-2 md:text-base md:px-20"
              >
                Login
              </button>
            </form>
            <p className="text-[10px] sm:text-xs md:text-base ">
              Don't have an <br /> account ?
              <span
                className="font-semibold md:text-base text-[10px] sm:text-xs text-black hover:border-b-[1px] border-black"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
