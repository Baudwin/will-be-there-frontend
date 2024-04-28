import {BsClockFill, BsMap, BsThreeDots} from "react-icons/bs";
import {FaCheck, FaMap} from "react-icons/fa";
import {FaLocationDot, FaX} from "react-icons/fa6";
import {IoMdCalendar} from "react-icons/io";
import { getUserRsvps } from "../hooks/useRsvpData";
import { MoreRSVP } from "../components/MoreRSVP";
import { useState } from "react";


export const MyRsvps = () => {
  const {data:rsvps, isError,error, isLoading} = getUserRsvps()
  const [showPopup, setShowPopUp] = useState(false)

  const closePopup = ()=>{
    setShowPopUp(!showPopup)
  }
  return (
    <div onClick={()=>{ showPopup ?  setShowPopUp(false): null}}  className="pt-16 wrapper">
 
      <div className="">
        <h1 className="text-center font-medi text-2xl">My RSVPs</h1>

        <div className="py-5 grid md:grid-cols-2 gap-6">
          {rsvps?.data?.map((rsvp) => {
            return (
              <div
                className={`border-2 rounded-lg p-3  space-y-3 border-green-900`}
                key={rsvp._id}
              >
              {
              showPopup && 
              <div className="fixed inset-0 flex justify-center items-start bg-black bg-opacity-20 z-50">
                <MoreRSVP rsvp ={rsvp} closePopup={closePopup} />

              </div>
              } 
                {/* event name  */}
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">{rsvp.eventID.eventName}</h1>
                  <span onClick={()=>{setShowPopUp(true)}} className="cursor-pointer text-green-900">
                    <BsThreeDots />
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full">
                  {/* image  */}
                  <div className="w-24 rounded-xl self-center">
                    <img
                      className=""
                      src={rsvp.eventID.eventImgUrl}
                      alt="event-img"
                    />
                  </div>
                  {/* time and description  */}
                  <div>
                    <div className="text-sm font-semibold text-green-700 flex gap-4">
                      <div className="flex gap-1">
                        <IoMdCalendar />
                        <span>{rsvp.eventID.date}</span>
                      </div>
                      <div className="flex gap-1">
                        <BsClockFill />
                        <span>{rsvp.eventID.time}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">
                      {rsvp.eventID.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* location and status  */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <FaLocationDot opacity={0.6} />
                    <span className="text-gray-400 text-sm tracking-tight">
                    {rsvp.eventID.location}
                    </span>
                  </div>

                  <div className="flex gap-1">
                  {rsvp.attendanceStatus === "yes" ? <FaCheck color="green" />  :  <FaX color="red"/>}
                    <span className="text-green-900 text-sm font-medi">
                    {rsvp.attendanceStatus === "yes" ? "Attending" : <span className="text-red-500">Not Attending</span> }
                    
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
