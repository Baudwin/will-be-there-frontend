import {BsClockFill} from "react-icons/bs";
import {FaCheck} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {IoMdCalendar} from "react-icons/io";

export function MoreRSVP() {
  return (
    <div className="wrapper mt-28 shadow-lg border p-2 mx-auto w-96">
      <div className="w-full h-96 space-y-2 pt-6">
        {/* event name */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Sally's Graduation Party</h1>
        </div>

        <div className="flex justify-between items-center ">
          {/* location and status  */}
          <div className="flex justify-between md:gap:28 gap-24">
            <div className="flex gap-1">
              <FaLocationDot opacity={0.6} />
              <span className="text-gray-400 text-sm tracking-tight">
                2 Bronx Rd, NY
              </span>
            </div>

            <div className="flex gap-1">
              <FaCheck color="green" />
              <span className="text-green-900 text-sm font-medi">
                Attending
              </span>
            </div>
          </div>
        </div>

        {/* description */}
        <div>
          <p className="text-sm text-gray-500 font-lt pt-4 pb-4">
            Lorem, ipsum dolor sit amem harum eveniet, apres vous companions sil
            vous plait a bien responde +44 230 2609
          </p>
        </div>

        {/* date and time */}
        <div className="text-sm font-semibold text-gray-600 flex gap-4 pb-4">
          <div className="flex gap-1">
            <IoMdCalendar />
            <span>02 Aug 2024</span>
          </div>
          <div className="flex gap-1">
            <BsClockFill />
            <span>2PM ECT</span>
          </div>
        </div>

        {/* horizontal line */}
        <hr />

        <div className="space-y-1 pt-3 text-gray-500">
          <p className="capitalize text-sm">plus one guest names</p>
          <p>1. </p>
          <p>2. </p>
          <p>3. </p>
        </div>
      </div>
    </div>
  );
}
