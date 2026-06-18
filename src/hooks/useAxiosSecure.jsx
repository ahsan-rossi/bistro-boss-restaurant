import axios from "axios";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  //withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        //console.log(err);
        if (err.status === 401 || err.status === 403) {
          signOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch(() => {
             // console.log(e);
              navigate("/");
            });
        }
        return Promise.reject(err);
      },
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
