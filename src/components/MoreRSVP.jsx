import {BsClockFill} from "react-icons/bs";
import {FaCheck} from "react-icons/fa";
import {FaLocationDot, FaX} from "react-icons/fa6";
import {IoMdCalendar} from "react-icons/io";

export function MoreRSVP({closePopup, rsvp}) {
  return (
    <div className=" mt-28 bg-white shadow-lg border mx-auto w-96">
      <div className="flex justify-end px-3 mt-2">
         <FaX onClick={closePopup} className=" cursor-pointer" opacity={0.4} size={25}/>
      </div>
     
      <div className="w-full wrapper h-fit space-y-2 pt-6">
        
        {/* event name */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{rsvp.eventID.eventName}</h1>
        </div>

   {/* image  */}
              <div className="w-24 rounded-xl self-center">
                    <img
                      className=""
                      src={rsvp.eventID.eventImgUrl}
                      alt="event-img"
                    />
                  </div>
                  
        <div className="flex justify-between items-center ">
          {/* location and status  */}
          <div className="flex justify-between md:gap:28 gap-[60px]">
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

        {/* description */}
        <div>
          <p className="text-sm text-gray-500 font-lt pt-4 pb-4">
          {rsvp.eventID.description}
          </p>
        </div>

        {/* date and time */}
        <div className="text-sm font-semibold text-gray-600 flex gap-4 pb-4">
          <div className="flex gap-1">
            <IoMdCalendar />
            <span>{rsvp.eventID.date}</span>
          </div>
          <div className="flex gap-1">
            <BsClockFill />
            <span>{rsvp.eventID.time}</span>
          </div>
        </div>

        {/* horizontal line */}
        <hr />

        <div className="space-y-1 pt-3 text-gray-500">
          <p className="capitalize text-sm">plus one guest names</p>
          {rsvp.plusOne.map((p,i)=>{
            return <p>{i+1}. {p}</p>
          })}
        </div>

        <div className="space-y-1 pt-3 text-gray-500">
          <p className="capitalize text-sm">additional items</p>
         <span>- {rsvp.additionalItem}</span>
        </div>

      </div>
    </div>
  );
}
