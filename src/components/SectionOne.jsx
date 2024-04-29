import {BsArrowDownCircle} from "react-icons/bs";
import { Link } from "react-router-dom";

export function SectionOne() {
  return (
    <div className="h-fit pb-16 sm:px-2">
      <div className="lg:text-6xl text-5xl text-center mb-2">
        <span className="font-lt opacity-60">0</span>
        <span className="font-smbld pl-1">1</span>
        <span className="text-9xl squaredot pl-1">.</span>
      </div>
      <h1 className="text-2xl font-reg text-center ">
        Register or Login To Create Your Event
      </h1>
      <div className="custombr w-80 h-80 mb-6 p-1 mx-auto">
        <img
          src="/images/signup.jpg"
          alt="fill a form"
          className="w-full h-full"
        />
      </div>

      <Link to={'/signup'} className="flex justify-center mb-2">
        <button className="customgreen hover:bg-white hover:text-black hover:border-green-950 text-white px-10 py-2 border rounded text-lg font-reg">
          Create Your Free Account
        </button>
      </Link>

      <div className="-mt-3 flex-col w-full">
        <div className="vline border-l border-l-green-950 w-1 h-32 mx-auto"></div>
        <BsArrowDownCircle className="text-5xl text-green-950 -mt-28 mx-auto bg-white border rounded-full" />
      </div>
    </div>
  );
}
