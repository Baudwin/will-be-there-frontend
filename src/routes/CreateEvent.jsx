import { useState } from "react";

export function CreateEvent() {

  const [img, setImg] = useState("")
    const [eventInfo, setItemInfo] = useState({
      eventName:"", 
      date: "",
      time: "", 
      description: "", 
      location: ""
    })

    const formData = new FormData()
    formData.append("img", img)
    formData.append("eventName", eventInfo.itemName)
    formData.append("date", eventInfo.date)
    formData.append("time", eventInfo.time)
    formData.append("description", eventInfo.description)
    formData.append("location", eventInfo.location)

  return (
    <div className="py-10 sm:px-5 md:px-10 bg-cover w-screen bg-[url('background/big-balloon-border.jpg')]">
      <div className="container">
<h1 className="text-center font-bold text-2xl">Create Event</h1>

<div>
<div className="flex flex-col gap-1">
      <label className="font-lt text-gray-600" htmlFor="">Event name <span className="text-red-500">*</span></label>
          <input className="border-b-2 border-gray-400 bg-inherit focus:outline-none" placeholder="" type="text" name="" id="" />  
      </div>


</div>

      </div>
      


    </div>
  );
}
