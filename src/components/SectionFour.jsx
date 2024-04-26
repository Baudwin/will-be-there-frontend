import {BsArrowDownCircle} from "react-icons/bs";

export function SectionFour() {
  return (
    <div className="offwhite h-screen pt-10">
      <h1 className="pt-12 text-3xl font-medi text-center mb-6">RSVP</h1>
      <div className="custombr h-60 w-80 lg:w-2/5 lg:h-80 mb-12 p-1 mx-auto">
        <img
          src="/images/brown-dressed.jpg"
          alt="fill a form"
          className="w-full h-full brown-img"
        />
      </div>

      <div className="flex-col justify-center mx-auto w-80 mb-4">
        <button className="customgreen text-white w-80 h-12 hover:bg-white hover:text-green-950 shadow hover:shadow-lg rounded-xl text-xl font-reg mb-4">
          RSVP For An Event
        </button>
        <button className="w-80 h-12 bg-white border border-gray-500 hover:border-none text-green-950 hover:text-white hover:bg-green-800 hover:shadow-lg rounded-xl text-xl font-reg">
          Manage Your RSVPs
        </button>
      </div>
    </div>
  );
}
