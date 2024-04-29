import { useAuthStore } from "../../store/useAuthStore";
import {Link, useNavigate} from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import {loginUser} from "../hooks/useUserData";
import {useEffect, useState} from "react";
import { ScrollToTop } from "../components/ScrollToTop";

export function LogIn() {
  const user = useAuthStore((state=>state.user))
  const navigate = useNavigate(); 

  useEffect(()=>{
if (user) {
  navigate("/")
}
  },[])

  const {mutate, isPending, isError, error, isSuccess} = loginUser();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInfo({...userInfo, [name]: value});
  };

  const handleLogin = () => {
    mutate(userInfo);
  };

  return (
    <>
 <ScrollToTop/>
    <div className="py-16 bg-cover w-full h-screen bg-[url('background/big-balloon-border.jpg')]">
      <div className="container space-y-5 lg:w-96 w-80 m-auto">
        <h1 className="font-bold text-2xl text-center py-6">Welcome Back!</h1>

        {/* inputs */}
        <div className="flex flex-col gap-4">
          <div className="border border-green-900 rounded-2xl flex items-center gap-3 px-3 py-2">
            <FaEnvelope className="text-green-800 mb-1" />
            <input
              onChange={handleChange}
              className="w-full focus:outline-none bg-inherit"
              placeholder="Email"
              type="text"
              value={userInfo.email}
              name="email"
              id="email"
              autoComplete="true"
            />
          </div>

          <div className="border border-green-900 rounded-2xl items-center flex gap-3 px-3 py-2">
            <FaLock className="text-green-800 mb-1.5" />
            <input
              onChange={handleChange}
              className="w-full focus:outline-none bg-inherit "
              placeholder="Password"
              type={showPassword ? "password" : "text"}
              value={userInfo.password}
              name="password"
              id="pass"
              autoComplete="true"
            />
            <span
              className=" cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {" "}
              {showPassword ? (
                <FaRegEye className="" size={21} />
              ) : (
                <FaRegEyeSlash className="" size={21} />
              )}{" "}
            </span>
          </div>
        </div>


        {/* continue button  */}
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="bg-green-900 hover:bg-white hover:border-none hover:text-green-900 px-20 py-2 rounded-2xl font-medi text-white shadow"
          >
            Continue
          </button>
        </div>

        {/* already have an account */}
        <div className="justify-center pt-8 flex gap-1">
          <p className="font-lt tracking-tight">Don't have an account? </p>
          <Link
            to={"/signup"}
            className="text-green-800 underline hover:text-green-700 tracking-tight"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>

       
    </>
  );
}
