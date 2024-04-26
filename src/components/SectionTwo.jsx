import {BsArrowDownCircle} from "react-icons/bs";

export function SectionTwo() {
  return (
    <div className="offwhite h-screen">
      <div className="lg:text-6xl text-5xl text-center mb-2">
        <span className="font-lt opacity-60">0</span>
        <span className="font-smbld pl-1">2</span>
        <span className="text-9xl squaredot pl-1">.</span>
      </div>
      <h1 className="text-3xl font-reg text-center mb-1">
        Fill In Your Event Details
      </h1>
      <div className="custombr w-80 h-80 lg:w-3/5 lg:h-80 mb-5 p-1 mx-auto">
        <img
          src="/images/email-check.jpg"
          alt="fill a form"
          className="w-full h-full"
        />
      </div>

      <div className="flex justify-center mb-2">
        <button className="customgreen text-white w-80 h-12 border rounded-xl text-xl font-reg">
          Create Your Event
        </button>
      </div>

      <div className="-mt-3 flex-col w-screen">
        <div className="vline border-l border-l-green-950 w-1 h-32 mx-auto"></div>
        <BsArrowDownCircle className="text-5xl text-green-950 -mt-28 mx-auto bg-white border rounded-full" />
      </div>
    </div>
  );
}
