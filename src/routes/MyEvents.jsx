import { useState } from "react";
import {BsClockFill, BsThreeDots} from "react-icons/bs";
import { FaLink, FaUsers} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {IoMdCalendar} from "react-icons/io";
import { getUserEvents } from "../hooks/useEventData";
import { Link } from "react-router-dom";
import { MoreEvent } from "../components/MoreEvent";
import { CheckAuth } from "../components/CheckAuth";
import { ScrollToTop } from "../components/ScrollToTop";
import { Default, DualRing } from "react-awesome-spinners";

export const MyEvents = () => {
  const {data:events, isError,error, isLoading} = getUserEvents()
  const [showPopup, setShowPopUp] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const handleEventClick = (rsvp) => {
    setSelectedEvent(rsvp);
  };

  const closePopup = ()=>{
    setShowPopUp(!showPopup)
  }

  return (
  <>
  <CheckAuth/>
<ScrollToTop/>
    <div className="pt-16">
      <div className="">
        <h1 className="text-center font-medi text-2xl">My Events</h1>

        {
            isLoading ?
            <div className="flex justify-center mt-7">
               <DualRing color="black"  />
            </div>
             : 
             null
          }

        <div className="py-5 sm:px-3 md:px-10 container grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
          {events?.data?.map((event) => {
            return (
              <div
                className="border-2  rounded p-3 border-green-900 space-y-2"
                key={event?.event?._id}
              >
              
                     {
               showPopup ?
               selectedEvent 
               &&
               <div className="fixed inset-0 flex justify-center items-start bg-gray-500 bg-opacity-10 z-50">
                 <MoreEvent event={selectedEvent} closePopup={closePopup} />
               </div>
               :null
              } 


                {/* event name  */}
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">{event?.event.eventName}</h1>

                  <span onClick={()=>{
                     handleEventClick(event)
                    setShowPopUp(true)
                  
                    }} className="cursor-pointer text-green-900">
                    <BsThreeDots size={26} />
                  </span>

                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* image  */}
                  <div className="w-28 rounded-xl self-center">
                    <img
                      className="object-center"
                      src={event?.event.eventImgUrl}
                      alt="event-img"
                    />
                  </div>
                  {/* time and description  */}
                  <div className=" ">
                    <div className="text-sm font-semibold text-green-700 flex gap-4">
                      <div className="flex gap-1">
                        <IoMdCalendar />
                        <span>{event?.event.date}</span>
                      </div>
                      <div className="flex gap-1">
                        <BsClockFill />
                        <span>{event?.event.time}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">
                        {event?.event.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* location and status  */}
                <div className="flex sm:gap-2 sm:flex-wrap justify-between items-center">
                  <div className="flex gap-1">
                    <FaLocationDot opacity={0.6} />
                    <span className="text-gray-400 text-sm tracking-tight">
                      {event?.event.location}
                    </span>
                  </div>
                  <div className="text-green-900 text-sm flex gap-1">
                    <FaUsers opacity={0.5} />
                    <span className="text-green-900 font-bld">{event?.rsvps.length}</span>
                    <span>Confirmed Guest(s)</span>
                  </div>
                </div>

                <div className="flex gap-2 overflow-hidden break-all">
                <FaLink opacity={0.6}/>
                  <p className="text-sm text-blue-500"> {(event?.event.eventLink)}</p>
                </div>

              </div>
            );
          })}
        </div>

        <span className="flex justify-end pr-10 font-lt text-sm text-green-800 underline mt-4 cursor-pointer">
          More Events
        </span>
      </div>
    </div>
    
  </>
  );
};
