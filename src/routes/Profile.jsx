import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Profile() {
  
  return <div className=" py-10 bg-n bg- w-full bg-contain h-screen bg-[url('background/big-balloon-border.jpg')] ">
  {/* <img src="background/big-balloon-border.jpg" alt="" /> */}
  <div className="container sm:px-7 ">
 <div className="flex items-center gap-4">
  <span className="bg-black px-14 rounded py-8 border-4 border-white"> <span className="font-bold text-4xl text-white">J</span></span>
  <h1 className="font-bold text-2xl">Janet doe</h1>
  </div>


<div className="py-20 space-y-2">
<div className="flex items gap-2">
  <FaCalendarAlt/>
<Link>My Events</Link>  
  </div>
<div>Create Event</div>
<div>My Events</div>

</div>

  </div>
 


  </div>;
}
