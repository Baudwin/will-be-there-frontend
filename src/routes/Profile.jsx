import {FaCalendarAlt, FaPlane} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../store/useAuthStore";
import {format} from "date-fns";
import { useState } from "react";
import {ClipLoader} from 'react-spinners'
import { CheckAuth } from "../components/CheckAuth";
import { ScrollToTop } from "../components/ScrollToTop";

export function Profile() {
  const [showLoading, setShowLoading] = useState(false)
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state=>state.logout))
  const navigate = useNavigate()


  return (
    <>
    <CheckAuth/>
    <ScrollToTop/>
{

showLoading? 

<div className='fixed inset-0 flex justify-center flex-col gap-2 items-center bg-gray-950 bg-opacity-100 z-50'>
        
          <ClipLoader
          className='loader'
          size={60}
          color=""
          />
          <p className="text-white text-2xl">Logging out</p>
      </div>

: 
null
}
    <div className=" md:px-7 lg:px-5 py-10 w-full bg-cover h-screen bg-[url('/background/big-balloon-border.jpg')] ">
      
      <div className="container sm:px-4">
        <div className="flex items-center gap-4 sm:gap-2 flex-wrap">
          <span className="bg-black px-14 rounded py-8 border-4 border-white">
          {""}
            <span className="font-bold text-5xl text-white">
              {user? (user?.username).substring(0, 1):null}
            </span>
          </span>
          <div className="flex flex-col w-fit">
            <h1 className="font-bold text-2xl">{user?.username}</h1>
            <p className="text-blue-700">{user?.email}</p>
            <p className=" font-medium text-gray-600">
          Joined {" "}
          <span className="font-semibold">
            { user? format(new Date(user?.createdOn), "MMMM d, yyyy"): null}
          </span>{" "}
        </p>
          </div>
        </div>
       

        <div className="py-10 space-y-2">
          <div  className="flex items gap-2">
            <FaCalendarAlt />
            <Link className="hover:text-blue-500 hover:font-bold" to={'/my-events'}>My Events</Link>
          </div>
          <div className="flex items gap-2">
            <FaCalendarAlt />
            <Link  className="hover:text-blue-500 hover:font-bold" to={'/create-event'}>Create Event</Link>
          </div>
          <div className="flex items gap-2">
            <FaPlane />
            <Link to={'/my-rsvps'} className="hover:text-blue-500 hover:font-bold" >My RSVPs</Link>
          </div>
        </div>


<button onClick={()=>{
  logout()
  setShowLoading(true)
  setTimeout(() => {
    navigate(`/login`)
  }, 3000);
}} className="bg-red-500 hover:bg-white hover:text-black hover:border hover:border-red-500 text-white font-bold px-10 py-3 rounded-full shadow">Logout</button>
      </div>
    </div>

        
    </>
  )
}
