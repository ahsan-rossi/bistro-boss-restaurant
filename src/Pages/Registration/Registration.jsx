import React, { useContext, useEffect, useState } from "react";
import authBg from "../../assets/others/authentication.png";
import authLogin from "../../assets/others/authentication2.png";

import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { ImGoogle3 } from "react-icons/im";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  // const [buttonDisabled, setButtonDisabled] = useState(true);
  const { setUser, loading, signInWithGoogle, createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //   const handleCaptchaValidation = () => {
  //     const user_captcha_value =
  //       document.getElementById("user_captcha_input").value;
  //     //console.log(user_captcha_value);
  //     if (user_captcha_value.length < 6) {
  //       setButtonDisabled(true);
  //       return;
  //     }
  //     validateCaptcha(user_captcha_value)
  //       ? setButtonDisabled(false)
  //       : setButtonDisabled(true);
  //   };

  const handleRegistration = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setUser(newUser);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
      navigate("/");
    });
  };

  return (
    <div
      className="h-screen w-screen md:w-full flex justify-center items-center"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="p-20  md:border-2 rounded-[5px] border-gray-300 md:shadow-2xl flex justify-center items-center gap-30">
        <div>
          <form onSubmit={handleRegistration}>
            <div className="flex flex-col gap-4 w-100 px-10">
              <label className="text-3xl font-bold text-center">Sign Up</label>
              <label className="text-lg">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Type Here"
                className=" bg-white w-full p-3 "
              />

              <label className="text-lg">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type Here"
                className=" bg-white w-full p-3 "
              />
              <label className="text-lg">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className=" bg-white w-full p-3"
              />

              <button
                className="bg-[#D1A054] border-0 text-white font-bold cursor-pointer p-3 rounded-[5px]
                   disabled:bg-gray-400"
              >
                Sign Up
              </button>

              <Link to="/login" className="text-lg text-[#D1A054] text-center">
                Already registered? Go to log in
              </Link>

              <label className="text-lg text-center">Or sign up with</label>

              <div className="flex justify-center gap-6">
                <FaFacebook className="text-2xl cursor-pointer" />
                <FaGithub className="text-2xl cursor-pointer" />
                <ImGoogle3
                  className="text-2xl cursor-pointer"
                  onClick={handleLoginWithGoogle}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="hidden md:block">
          <img className="w-100 h-70" src={authLogin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
