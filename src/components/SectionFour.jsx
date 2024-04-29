import {BsArrowDownCircle} from "react-icons/bs";
import { Link } from "react-router-dom";

export function SectionFour() {
  return (
    <div className=" h-fit py-10 offwhite flex flex-col justify-center items-center">
      <h1 className=" text-3xl font-medi text-center mb-6">RSVP</h1>
      <div className="custombr h-80 w-80 md:w-fit lg:w-fit xl:w-fit 2xl:w-fit lg:h-80 p-1 mb-6">
        <img
          src="/images/brown-dressed.jpg"
          alt="fill a form"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" flex flex-col justify-center ">
        <Link to={"/rsvp/1"}>
        <button className="customgreen text-white w-80 h-12 hover:bg-white hover:text-green-950 shadow hover:shadow-lg rounded text-xl font-reg mb-4">
          RSVP For An Event
        </button>
        </Link>
        <Link to={'/my-rsvps'}>
         <button className="w-80 h-12 bg-white border border-gray-500 hover:border-none text-green-950 hover:text-white hover:bg-green-800 hover:shadow-lg rounded text-xl font-reg">
          Manage Your RSVPs
        </button>
        </Link>
       
      </div>
    </div>
  );
}
