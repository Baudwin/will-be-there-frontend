import {useNavigate} from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export const RsvpSuccess = () => {
    const navigate = useNavigate()
    const user = useAuthStore(state=>state.user)
  return (
    <div className="wrapper pt-16">
    <div className="space-y-4">
      <h1 className="lg:text-3xl text-xl text-center font-medi tracking-tight">
        Congratulations!
      </h1>
      <div className="flex mx-auto w-2/5 h-2/5">
        <img className="" src="/images/cheers.jpeg" alt="success image" />
      </div>
      <p className="capitalize lg:text-2xl text-xl text-center font-lt">
        your rsvp was successfully created.
      </p>
      <p className="text-gray-700 text-sm text-center">You will recieve a confirmation email shortly. Please check your inbox.</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <button onClick={()=>{
            if (user) {
             navigate("/my-rsvps")   
            }else{
            <div className='fixed inset-0 flex justify-center flex-col gap-2 items-center bg-gray-900 bg-opacity-90 z-50'>
        
        <div className="bg-black p-5 rounded">
             <ClipLoader
          className='loader'
          size={55}
          color=""
          />
        </div>
       
      </div>
              setTimeout(() => {
                navigate("/login") 
              }, 3000);  
            }

            }
            } className="bg-green-900 hover:text-green-900 hover:bg-white text-white uppercase lg:w-96 lg:h-16 w-80 h-12 font-bold shadow-lg rounded-2xl">
          Manage Your RSVps
        </button>

        <button onClick={()=>{
            

            if (user) {
              navigate("/create-event")  
               }else{
               <div className='fixed inset-0 flex justify-center flex-col gap-2 items-center bg-gray-900 bg-opacity-90 z-50'>
           
           <div className="bg-black p-5 rounded">
                <ClipLoader
             className='loader'
             size={55}
             color=""
             />
           </div>
          
         </div>
                 setTimeout(() => {
                   navigate("/login") 
                 }, 3000);  
               }
            
            }} className="bg-white border border-gray-500 hover:border-none text-green-950 hover:text-white hover:bg-green-800 uppercase lg:w-96 lg:h-16 w-80 h-12 font-bold shadow-lg rounded-2xl">
          Create An Event
        </button>
      </div>
    </div>
  </div>
  )
}
