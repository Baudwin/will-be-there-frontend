import {BsClockFill, BsMap, BsThreeDots} from "react-icons/bs";
import {FaCheck, FaMap} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {IoMdCalendar} from "react-icons/io";

export const MyRsvps = () => {
  return (
    <div className="pt-16 wrapper">
      <div className="">
        <h1 className="text-center font-medi text-2xl">My RSVPs</h1>

        <div className="py-5 grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((e) => {
            return (
              <div
                className="border-2 rounded-lg p-3 border-green-900 space-y-2"
                key={e}
              >
                {/* event name  */}
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">Sally's Graduation Party</h1>
                  <span className="cursor-pointer text-green-900">
                    <BsThreeDots />
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full">
                  {/* image  */}
                  <div className="w-24 rounded-xl self-center">
                    <img
                      className="rounded-xl"
                      src="/images/graduation.jpeg"
                      alt="event-img"
                    />
                  </div>
                  {/* time and description  */}
                  <div>
                    <div className="text-sm font-semibold text-green-700 flex gap-4">
                      <div className="flex gap-1">
                        <IoMdCalendar />
                        <span>02 Aug 2024</span>
                      </div>
                      <div className="flex gap-1">
                        <BsClockFill />
                        <span>2PM ECT</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">
                        Lorem, ipsum dolor sit amem harum eveniet, soluta
                        responde +44 230 2609
                      </p>
                    </div>
                  </div>
                </div>
                {/* location and status  */}
                <div className="flex justify-between items-center">
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
            );
          })}
        </div>

        <span className="flex justify-end font-lt text-sm text-green-800 underline mt-4 cursor-pointer">
          More Events
        </span>
      </div>
    </div>
  );
};
