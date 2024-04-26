import {useState} from "react";
import {
  FaEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
  FaUserAlt,
} from "react-icons/fa";
import {Link} from "react-router-dom";
import {registerUser} from "../hooks/useUserData";
import {toast} from "react-toastify";

export function SignUp() {
  const {mutate, isPending, isError, error, isSuccess} = registerUser();

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInfo({...userInfo, [name]: value});
  };

  const handleRegister = () => {
    mutate(userInfo);
  };

  return (
    <div className="py-16 bg-cover w-full h-screen bg-[url('background/big-balloon-border.jpg')]">
      <div className="container space-y-5 lg:w-96 w-80 m-auto">
        <h1 className="font-bold text-2xl text-center py-6">
          Lets get started!
        </h1>

        {/* inputs */}
        <div className="flex flex-col gap-4">
          <div className="border border-green-900 rounded-2xl flex items-center gap-3 px-3 py-2">
            <FaUserAlt className="text-green-800 mb-1" />
            <input
              onChange={handleChange}
              className="w-full focus:outline-none bg-inherit  font-bold"
              placeholder="Username"
              type="text"
              value={userInfo.username}
              name="username"
              id="username"
              autoComplete="true"
            />
          </div>

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
              className="w-full focus:outline-none bg-inherit"
              placeholder="Password"
              type={showPassword ? "password" : "text"}
              value={userInfo.password}
              name="password"
              id="pass"
              autoComplete="true"
            />
            <span
              className="cursor-pointer text-gray-400"
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

        {/* agree to terms */}
        <div className="flex items-center gap-2 px-2 pt-1">
          <div className="mt-1">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="check"
              id="check"
            />
          </div>

          <p className="capitalize text-sm">
            I Agree To the{" "}
            <span className="text-green-800"> terms & conditions</span>
          </p>
        </div>

        {/* continue button  */}
        <div className="flex justify-center">
          <button
            onClick={handleRegister}
            className="bg-green-900 hover:bg-white border-gray-500 hover:text-green-900 px-20 py-2 rounded-2xl font-medi text-white shadow hover:transform-none"
          >
            Continue
          </button>
        </div>

        {/* already have an account */}
        <div className="justify-center pt-8 flex gap-1">
          <p className="font-lt tracking-tight">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-green-800 underline hover:text-green-700 tracking-tight"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
