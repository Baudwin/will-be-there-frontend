import {useState} from "react";
import { createNewEvent } from "../hooks/useEventData";
import {ClipLoader} from 'react-spinners'
import { CheckAuth } from "../components/CheckAuth";

export function CreateEvent() {
  const {mutate, isPending, isError,error} = createNewEvent()
  const [img, setImg] = useState("");
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    date: "",
    time: "",
    description: "",
    location: "",
  });

  const handleChange = (e)=>{
    const {name,value} = e.target
    setEventInfo({...eventInfo, [name]:value})
  }

  const handleImageChange = (e)=>{
    const {files} = e.target
     setImg(files[0]);
  }

  const formData = new FormData();
  formData.append("img", img);
  formData.append("eventName", eventInfo.eventName);
  formData.append("date", eventInfo.date);
  formData.append("time", eventInfo.time);
  formData.append("description", eventInfo.description);
  formData.append("location", eventInfo.location);

  const createEvent = (e)=>{
  mutate(formData)
      }

    
  return (
    <> 
    <CheckAuth/>

   { isPending? 

<div className='fixed inset-0 flex justify-center flex-col gap-2 items-center bg-gray-900 bg-opacity-90 z-50'>
        
        <div className="bg-black p-5 rounded">
             <ClipLoader
          className='loader'
          size={60}
          color=""
          />
        </div>
       
      </div>
: 
null
}
    
    <div className="pt-10 bg-cover w-full h-fit py-4 bg-[url('/background/big-balloon-border.jpg')]">
      <div className="container sm:px-5 md:px-10">
        <h1 className="text-center lg:text-3xl text-2xl font-bold pb-6">
          Create Your Event
        </h1>
        <div className="space-y-6">
          {/* Event info  */}
          <div className="flex flex-col space-y-1">
            <label className="font-lt text-gray-500" htmlFor="guest">
              Event name
            </label>
            <input  onChange = {handleChange}
              className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full"
              placeholder=""
              type="text"
              name="eventName"
              id="guest"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-1">
              <label className=" font-lt text-gray-500" htmlFor="date">
                Date <span className="text-green-800 text-xl">*</span>
              </label>
              <input onChange = {handleChange}
                className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full text-xl text-gray-300"
                placeholder=""
                type="date"
                name="date"
                id="date"
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className=" font-lt text-gray-500" htmlFor="time">
                Time <span className="text-green-800 text-xl ">*</span>
              </label>
              <input onChange = {handleChange}
                className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full text-xl text-gray-300"
                placeholder=""
                type="time"
                name="time"
                id="time"
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-lt text-gray-500" htmlFor="guest">
              Description
            </label>
            <textarea onChange = {handleChange}
              className="border-2 p-2 bg-inherit border-gray-400 w-full h-16 focus:outline-none"
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-lt text-gray-500" htmlFor="guest">
              Location
            </label>
            <input onChange = {handleChange}
              className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full"
              placeholder=""
              type="location"
              name="location"
              id="location"
              required
            />
          </div>

          <div className="flex items-center sm:flex-col gap-6">
            <div className="space-x-5">
                 <span className="font-lt text-gray-500 self-center">
              Event Image
            </span>

            <label className="hover:text-green-950 cursor-pointer hover:bg-white text-sm text-gray-500 uppercase px-10 py-2 border border-gray-500 rounded" htmlFor="img">Upload</label>
            <input hidden onChange={handleImageChange} type="file" name="image" id="img" />
   
            </div> 
          { img?<img className='h-44 w-48 sm:h-36 sm:w-36 object-cover' src={URL.createObjectURL(img)} alt="" />  :null   }  
      
          </div>
         

          {/* submit button  */}
          <div className="flex justify-center pt-3">
            <button onClick={createEvent} className="bg-green-900 hover:text-green-900 hover:bg-white text-white uppercase px-20 py-2 font-bold shadow-lg rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
