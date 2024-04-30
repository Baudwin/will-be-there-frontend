import {BsClockFill} from "react-icons/bs";
import {FaLocationDot, FaX} from "react-icons/fa6";
import {IoMdCalendar} from "react-icons/io";
import { CheckAuth } from "./CheckAuth";

export function MoreEvent({event, closePopup}) {
//  if (event) {
  
//  }
  return (
    <>
    <CheckAuth/>
  

    <div className="h-screen w-screen px-2 border  bg-white ">
      <div className="flex justify-end px-3 mt-2">
         <FaX onClick={closePopup} className=" cursor-pointer" opacity={0.7} size={25}/>
      </div>
      <div className=" space-y-2 pt-6 lg:px-5 xl:px-5 2xl:px-5 ">
        {/* event name */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl uppercase">{event?.event?.eventName}</h1>
        </div>

        {/* location */}
        <div className="flex gap-1">
          <FaLocationDot opacity={0.6} />
          <span className="text-gray-400 text-sm tracking-tight">
            {event?.event.location}
          </span>
        </div>
        
        {/* date and time */}
        <div className="text-sm font-semibold text-gray-600 flex gap-4">
          <div className="flex gap-1">
            <IoMdCalendar />
            <span>{event?.event.date}</span>
          </div>
          <div className="flex gap-1">
            <BsClockFill />
            <span>{event?.event.time}</span>
          </div>
        </div>

        {/* description */}
        <div>
          <p className="text-sm text-gray-500 font-lt pt-2 pb-2">
          {event?.event.description}
          </p>
        </div>

        {/* rsvp count */}
        <div>
          <p className="text-lg text-gray-500 font-lt pt-2 pb-2">
       Number of Confirmed guests  ({event?.rsvps.length})
          </p>
        </div>
        
        <div className="space-y-1 overflow-x-scroll overflow-y-scroll ">
          {/* <p className="capitalize text-sm font-smbld">guest details</p> */}
          <table className="table-auto border w-full  sm:w-96 space-y-1">
            <thead className="bg-gray-200 text-sm h-12">
              <tr className="border border-b-2">
                <th className="border w-10 border-gray-300">#</th>
                <th className="border w-48 border-gray-300">Name</th>
                <th className="border w-32 border-gray-300">Email</th>
                <th className="border w-20 border-gray-300">Attending</th>
                <th className="border w-48 border-gray-300">Plus one(s)</th>
                <th className="border w-20 border-gray-300">Additional Item</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {
                event?.rsvps.map((rsvp, i)=>{
                  return <tr key ={rsvp?._id} className="border border-b-2">
                <th className="border border-gray-300">{i+1}</th>
                <td className="border h-10 border-gray-300">{rsvp?.guestName}</td>
                <td className="border border-gray-300">{rsvp?.email}</td>
                <td className={`border font-bold ${rsvp?.attendanceStatus==="yes"? "text-green-500":"text-red-500"} uppercase border-gray-300`}>{rsvp.attendanceStatus}</td>
                <td className="border border-gray-300">{rsvp?.plusOne.join(', ')}</td>
                <td className="border border-gray-300">{rsvp?.additionalItem}</td>
              </tr>
                })

              }
              


            </tbody>
          </table>
        </div>


      </div>
    </div>

    </>
  );
}
