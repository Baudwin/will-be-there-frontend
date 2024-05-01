import {BsArrowDownCircle} from "react-icons/bs";
import { Link } from "react-router-dom";

export function SectionThree() {
  return (
    <div className="h-fit pb-10 flex flex-col justify-center items-center">
      <div className="lg:text-6xl text-5xl text-center mb-2">
        <span className="font-lt opacity-60">0</span>
        <span className="font-smbld pl-1">3</span>
        <span className="text-9xl squaredot pl-1">.</span>
      </div>
      <h1 className="text-2xl font-reg text-center mb-1 ">Manage Your Event</h1>
      <p className="text-gray-600 text-lg text-center">Share event link to people so they can RSVP</p>
      <div className="custombr h-80 w-80 md:w-fit lg:w-fit xl:w-fit 2xl:w-fit lg:h-80 p-1 mb-6">
        <img
          src="/images/call-and-fill.jpg"
          alt="fill a form"
          className="w-full object-cover h-full"
        />
      </div>

      <Link to={'/my-events'} className="flex justify-center mb-2">
        <button className="customgreen hover:bg-green-900 text-white w-80 h-12 border rounded text-lg font-reg">
          Manage Your Event
        </button>
      </Link>
      
    </div>
  );
}
