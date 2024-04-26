import {BsArrowDownCircle} from "react-icons/bs";

export function SectionThree() {
  return (
    <div className="h-screen">
      <div className="lg:text-6xl text-5xl text-center mb-2">
        <span className="font-lt opacity-60">0</span>
        <span className="font-smbld pl-1">3</span>
        <span className="text-9xl squaredot pl-1">.</span>
      </div>
      <h1 className="text-3xl font-reg text-center mb-1 ">Manage Your Event</h1>
      <div className="custombr w-80 h-96 p-1 mx-auto mb-6">
        <img
          src="/images/call-and-fill.jpg"
          alt="fill a form"
          className="w-full h-full"
        />
      </div>

      <div className="flex justify-center mb-2">
        <button className="customgreen text-white w-80 h-12 border rounded-xl text-xl font-reg">
          Manage Your Event
        </button>
      </div>
    </div>
  );
}
