import {BsClockFill} from "react-icons/bs";
import {FaCheck} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {IoMdCalendar} from "react-icons/io";

export function MoreEvent() {
  return (
    <div className="wrapper mt-28 shadow-lg p-2 border mx-auto more-event">
      <div className="w-full h-96 space-y-2 pt-6 ">
        {/* event name */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Sally's Graduation Party</h1>
        </div>

        {/* location */}
        <div className="flex gap-1">
          <FaLocationDot opacity={0.6} />
          <span className="text-gray-400 text-sm tracking-tight">
            2 Bronx Rd, NY
          </span>
        </div>

        {/* date and time */}
        <div className="text-sm font-semibold text-gray-600 flex gap-4">
          <div className="flex gap-1">
            <IoMdCalendar />
            <span>02 Aug 2024</span>
          </div>
          <div className="flex gap-1">
            <BsClockFill />
            <span>2PM ECT</span>
          </div>
        </div>

        {/* description */}
        <div>
          <p className="text-sm text-gray-500 font-lt pt-2 pb-2">
            Lorem, ipsum dolor sit amem harum eveniet, apres vous companions sil
            vous plait a bien responde +44 230 2609
          </p>
        </div>

        <div className="space-y-1">
          <p className="capitalize text-sm font-smbld">guest details</p>
          <table className="table-auto border w-96 h-32 space-y-1">
            <thead className="bg-gray-200 text-sm h-10">
              <tr className="border border-b-2">
                <th className="border border-gray-300"></th>
                <th className="border border-gray-300">Name</th>
                <th className="border border-gray-300">Email</th>
                <th className="border border-gray-300">Attending</th>
                <th className="border border-gray-300">Plus one(s)</th>
                <th className="border border-gray-300">Items</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border border-b-2">
                <th className="border border-gray-300">1</th>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
              </tr>

              <tr className="border border-b-2">
                <th className="border border-gray-300">2</th>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
              </tr>

              <tr>
                <th className="border border-gray-300">3</th>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* horizontal line */}
        <hr />

        <div className="space-y-1 pt-2 text-gray-500">
          <p className="capitalize text-sm">plus one guest names</p>
          <p>1. </p>
          <p>2. </p>
        </div>
      </div>
    </div>
  );
}
