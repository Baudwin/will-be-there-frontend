import {FaCalendarAlt, FaPlane} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useAuthStore} from "../../store/useAuthStore";
import {format} from "date-fns";

export function Profile() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className=" sm:px-5 md:px-7 py-10 w-full bg-contain h-screen bg-[url('background/big-balloon-border.jpg')] ">
      <div className="container sm:px-7 ">
        <div className="flex items-center gap-4">
          <span className="bg-black px-14 rounded py-8 border-4 border-white">
            {" "}
            <span className="font-bold text-5xl text-white">
              {(user?.username).substring(0, 1)}
            </span>
          </span>
          <div>
            <h1 className="font-bold text-2xl">{user?.username}</h1>
            <p className="text-blue-700">{user?.email}</p>
          </div>
        </div>
        <p className="py-3 font-medium text-gray-600">
          Created on{" "}
          <span className="font-semibold">
            {format(new Date(user?.createdOn), "MMMM d, yyyy")}
          </span>{" "}
        </p>

        <div className="py-20 space-y-2">
          <div className="flex items gap-2">
            <FaCalendarAlt />
            <Link>My Events</Link>
          </div>
          <div className="flex items gap-2">
            <FaCalendarAlt />
            <Link>Create Event</Link>
          </div>
          <div className="flex items gap-2">
            <FaPlane />
            <Link>My RSVPs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
