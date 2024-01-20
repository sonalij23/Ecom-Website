import React, { useState } from "react";
import Footer from "./Footer";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import register from "../images/register.jpg";

const Register = () => {
  const navigate = useNavigate();

  const { signUp } = useUserAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [userName, setUserName] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault()
    setError("");  
    try {
      await signUp(email, password).then((res) => {
        const user = res.user;
        updateProfile(user, { displayName: userName });
      });

      navigate("/products")
    } catch (err) {
      setError(err.message);

      console.log(error)
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center w-full h-full my-32">
        <div className="flex w-full mx-5 shadow-2xl md:w-3/5 md:h-1/3 md:mx-0">
          <div className="flex justify-center w-3/5 ">
            <img
              className="w-40 h-40 mt-16 sm:mt-10 sm:w-56 sm:h-56 md:w-96 md:h-96 md:mt-0"
              src={register}
              alt="register"
            />
          </div>
          <div className="relative flex flex-col items-center justify-between w-2/5 pb-10 text-white sm:pb-24 bg-primary-color">
            <h1 className="mt-10 mb-5 text-xl font-semibold sm:text-2xl md:mt-20 md:text-4xl md:mb-14 ">
              Register
            </h1>

            {error && <h1>{error}</h1>}

            <form onSubmit={handleSubmit} className="text-center">
              <input
                className="w-2/3 p-1 mb-3 text-[10px] sm:text-xs text-black rounded-md outline-none md:mb-6 md:w-3/5 md:p-2 md:text-base"
                name="username"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                required
                type="text"
              />

              <input
                className="w-2/3 p-1 mb-3 text-[10px] sm:text-xs text-black rounded-md outline-none md:mb-6 md:w-3/5 md:p-2 md:text-base"
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                placeholder="Email"
                type="email"
              />

              <input
                className="w-2/3 p-1 mb-3 text-[10px] sm:text-xs text-black rounded-md outline-none md:mb-6 md:w-3/5 md:p-2 md:text-base"
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                placeholder="Password"
                type="password"
              />

              <button
                type="submit"
                className="px-5 py-1 mb-6 text-[10px] sm:text-xs text-white bg-black rounded-md sm:px-8 md:w-3/5 md:py-2 md:text-base md:px-20"
              >
                Register
              </button>
            </form>
            <p className=" text-[10px] sm:text-xs md:text-base">
              Already have an <br /> account ?
              <span
                className="font-semibold md:text-base text-[10px] sm:text-xs text-black hover:border-b-[1px] border-black"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
