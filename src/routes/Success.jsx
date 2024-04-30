import {useNavigate} from "react-router-dom";
import { ScrollToTop } from "../components/ScrollToTop";

export const Success = () => {
  const navigate = useNavigate()

  return (
    <>
    
   <ScrollToTop/>
    <div className="wrapper pt-16">
      <div className="space-y-4">
        <h1 className="lg:text-3xl text-xl text-center font-medi tracking-tight">
          Congratulations!
        </h1>
        <div className="flex mx-auto w-2/5 h-2/5">
          <img className="" src="/images/cheers.jpeg" alt="success image" />
        </div>
        <p className="capitalize lg:text-2xl text-xl text-center font-lt">
          your event has been successfully created.
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <button onClick={()=>{navigate("/my-events")}} className="bg-green-900 hover:text-green-900 hover:bg-white text-white uppercase lg:w-96 lg:h-16 w-80 h-12 font-bold shadow-lg rounded-2xl">
            Manage Your Events
          </button>

          <button onClick={()=>{navigate("/create-event")}} className="bg-white border border-gray-500 hover:border-none text-green-950 hover:text-white hover:bg-green-800 uppercase lg:w-96 lg:h-16 w-80 h-12 font-bold shadow-lg rounded-2xl">
            Create Another Event
          </button>
        </div>
      </div>
    </div>
 </>    
  );
};
