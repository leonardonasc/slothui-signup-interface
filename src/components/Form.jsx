import React from "react";
import { PiUserBold } from "react-icons/pi";
import { TbMail } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { PiLockSimpleOpenBold } from "react-icons/pi";

const Form = () => {
  return (
    <div className="text-white flex justify-center flex-col p-52 h-full">
      <form className="flex flex-col">
        <div className="">
          <h2 className="font-bold text-white text-3xl mb-2 ">
            Sign Up For Free.
          </h2>
          <h3 className="mb-7 text-slate-300 text-2xl">
            Let's sign up quickly to get started.
          </h3>
        </div>
        <label htmlFor="" className="font-bold text-sm mb-2">
          Username
        </label>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-500 hover:border-violet-600  border-opacity-40 rounded-full py-2 mb-3">
          <PiUserBold className="text-white ml-2" />
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent border-none outline-none"
          />
        </div>

        <label htmlFor="" className="font-bold text-sm mb-2">
          Email Address
        </label>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-500 hover:border-violet-600 border-opacity-40 rounded-full py-2 mb-3">
          <TbMail className="text-white ml-2" />
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="bg-transparent border-none outline-none"
          />
        </div>

        <label htmlFor="" className="font-bold text-sm text-slate-700 mb-2">
          Password
        </label>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-500 hover:border-violet-600 border-opacity-40 rounded-full py-2 mb-3">
          <PiLockSimpleOpenBold className="text-white ml-2" />
          <input
            type="password"
            placeholder="Enter your password"
            className="bg-transparent border-none outline-none flex"
          />
        </div>
        <div className="mb-3">
          <div className="flex gap-1">
            <div className="w-1/4 bg-green-500 h-1"></div>
            <div className="w-1/4 bg-green-500 h-1"></div>
            <div className="w-1/4 bg-green-500 h-1"></div>
            <div className="w-1/4 bg-slate-700 h-1"></div>
          </div>
          <p>Password strength: </p>
        </div>
        <button className="w-full px-4 py-2 text-white font-bold signBG rounded-full hover:bg-violet-700 flex items-center gap-3 justify-center">
          Sign Up <FaArrowRightFromBracket />
        </button>
        <div>
          <p className="font-bold text-sm mt-6 mb-6 text-center">
            Already have an account?{" "}
            <a href="#" className="logo">
              Sign In.
            </a>
          </p>
        </div>
        <div>
          <div className="flex items-center text-sm font-bold justify-center gap-2 bg-slate-900 border border-slate-500 border-opacity-40 hover:border-violet-600 rounded-full py-2 mb-2">
            <FaGoogle className="text-white ml-2" />
            <p>Sign Up With Google</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
