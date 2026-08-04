import React, { useContext, useEffect, useState } from "react";
import authBg from "../../assets/others/authentication.png";
import authLogin from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { ImGoogle3 } from "react-icons/im";
import {AuthContext} from "../../contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const [buttonDisabled, setButtonDisabled] = useState(true);
  //eslint-disable-next-line no-unused-vars
  const { setUser, loading, signInWithGoogle, userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const axiosSecure = useAxiosSecure();

  const from = location.state?.from?.pathname || "/";

  const handleCaptchaValidation = () => {
    const user_captcha_value =
      document.getElementById("user_captcha_input").value;
    //console.log(user_captcha_value);
    if (user_captcha_value.length < 6) {
      setButtonDisabled(true);
      return;
    }
    validateCaptcha(user_captcha_value)
      ? setButtonDisabled(false)
      : setButtonDisabled(true);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser) {
          const userData = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            //photoURL: loggedUser.photoURL,
          };
          axiosSecure
            .post("/users", userData)
            .then((response) => {
              if (response.data.insertedId) {
                console.log("User data saved to the database:", response.data);
              } else {
                console.log(response.data.message);
              }
            })
            .catch((error) => {
              console.error("Error saving user data to the database:", error);
            });
        }
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
      });
    
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
    .then(
      result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser) {
          const userData = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            photoURL: loggedUser.photoURL,
          };
          axiosSecure.post("/users", userData).then((response) => {
            if (response.data.insertedId) {
              console.log("User data saved to the database:", response.data);
            } else {
              console.log(response.data.message);
            }
          }).catch((error) => {
            console.error("Error saving user data to the database:", error);
          });
        } 
        setUser(loggedUser);
        navigate(from, { replace: true });
      }
    ).catch(error => {
      console.error("Error logging in with Google:", error);
    });
  }

  return (
    <div
      className="h-screen w-screen md:w-full flex justify-center items-center"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="p-20  md:border-2 rounded-[5px] border-gray-300 md:shadow-2xl flex justify-center items-center gap-30">
        <div className="hidden md:block">
          <img className="w-100 h-70" src={authLogin} alt="" />
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4 w-100 px-10">
              <label className="text-3xl font-bold text-center">Login</label>
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

              <LoadCanvasTemplate />

              <input
                type="text"
                id="user_captcha_input"
                placeholder="Type the characters you see"
                className=" bg-white w-full p-3"
                onKeyUp={handleCaptchaValidation}
              />

              <button
                className="bg-[#D1A054] border-0 text-white font-bold  cursor-pointer p-3 rounded-[5px]
               disabled:bg-gray-400"
                disabled={buttonDisabled}
              >
                Login
              </button>

              <Link to="/registration" className="text-lg text-[#D1A054] text-center">
                New here? Create a New Account
              </Link>

              <label className="text-lg text-center">Or sign in with</label>

              <div className="flex justify-center gap-6">
                <FaFacebook className="text-2xl cursor-pointer" />
                <FaGithub className="text-2xl cursor-pointer" />
                <ImGoogle3 className="text-2xl cursor-pointer"
                  onClick = {handleLoginWithGoogle}  
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
