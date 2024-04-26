import { useState } from "react";
import { rsvp } from "../hooks/useRsvpData";

export function RSVP() {
const {mutate, isPending, isError, isSuccess} = rsvp()
  // const [plusOne, setPlusOne] = useState([{
  //   plusOne1: "", 
  //   plusOne2: ""
  // }])

  const [plusOne, setPlusOne] = useState(["", ""])

  const [rsvpInfo, setRsvpInfo] = useState({
    eventID: "",
    guestName:"", 
    email : "",
    attendanceStatus: "",
    congratulatoryMessage: "", 
  })

const handleChange = (e)=>{
  const {name, value} = e.target
  setRsvpInfo({...rsvpInfo, [name]:value})
}

const handlePlusOnes = (e)=>{
  const {name, value} = e.target
  // console.log(plusOne);
  // setPlusOne([{...[name]: value}])
}

const [additionalPerson, setAdditionalPerson] = useState(false)

const handleRsvp  = ()=>{
  mutate(rsvpInfo)
}

  return (
    <div className="py-10 sm:px-5 md:px-10 bg-cover w-screen bg-[url('background/big-balloon-border.jpg')]">
      <div className="container space-y-4">
         <h1 className="text-center text-3xl font-bold">RSVP</h1>
         <div className=" space-y-6">
          {/* Guset info  */}
          <div className="flex flex-col gap-1">
           <label className="font-lt text-gray-600" htmlFor="">Guest name <span className="text-red-500">*</span></label>
          <input onChange={handleChange} className="border-b-2 border-gray-400 bg-inherit focus:outline-none" placeholder="" type="text" name="guestName" id="" />  
          </div>
         
        <div className="grid grid-cols- gap-7">
        <div className="flex flex-col gap-1">
           <label className=" font-lt text-gray-600" htmlFor="">Email Address <span className="text-red-500">*</span></label>
          <input onChange={handleChange} className="border-b-2 border-gray-400 bg-inherit focus:outline-none" placeholder="" type="email" name="email" id="" />  
          </div>

          {/* <div className="flex flex-col gap-1">
           <label className="font-lt text-gray-600" htmlFor="">Phone Number <span className="text-red-500">*</span></label>
          <input className="border-b-2 border-gray-400 bg-inherit focus:outline-none" placeholder="" type="text" name="" id="" />  
          </div> */}

        </div>

{/* Attendance status  */}
<div className="space-y-3">
      <p className="font-lt text-gray-600 capitalize">Kindly confirm your Attendance <span className="text-red-500">*</span></p>
        <div className="flex items-center gap-5">
          <span className=" text-lg">Attending ?</span>
          <div className="flex gap-1.5"> 
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"yes"} name="attendanceStatus" id="yes" />
            <span className=" font-bold text-reen-700 ">YES</span>
          </div>
          
          <div className="flex gap-1.5"> 
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"no"} name="attendanceStatus" id="no" />
            <span className=" text-rd-500 font-">NO</span>
          </div>
        </div>
</div>

{/* additional items  */}

<div className="space-y-3">
      <p className=" font-lt text-gray-600 capitalize">Kindly select any item you are coming with</p>
        <div className="flex items-center gap-5">
          <div className="flex gap-1.5"> 
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"food"} name="item" id="food" />
            <span className="  capitalize">food</span>
          </div>
          
          <div className="flex gap-1.5"> 
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"drinks"} name="item" id="drinks" />
            <span className=" capitalize">drinks</span>
          </div>

          <div className="flex gap-1.5"> 
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"games"} name="item" id="games" />
            <span className=" capitalize ">games</span>
          </div>
        </div>
</div>  


{/* plus one  */}

<div className="space-y-2">
<div className="flex gap-5">
<h1 className="font-lt text-gray-600 capitalize">Coming with a plus one?</h1>
        <div className="flex gap-1.5"> 
            <input onClick={()=>setAdditionalPerson(true)} type="radio" className="w-4 h-4" name="plus-one" id="plus-one-yes" />
            <span className=" ">Yes</span>
          </div> 

          <div className="flex gap-1.5"> 
            <input onClick={()=>setAdditionalPerson(false)} type="radio" className="w-4 h-4" name="plus-one" id="plus-one-no" />
            <span className=" ">No</span>
          </div> 

</div>


<div className={`space-y-3 ${additionalPerson ? null :  "hidden"}`}>
  <p className="capitalize text-sm">If yes input plus one guest name<span className=" lowercase">(s)</span></p>
  <div className="flex flex-col">
    {/* <label htmlFor="">1</label> */}
  <input onChange={handlePlusOnes} value={plusOne.plusOne1} className="border-b-2 bg-inherit border-gray-400 focus:outline-none lg:w-1/2 xl:w-1/2 font-medium" placeholder="" type="text" name="plusOne1" id="p1" />  
  </div>

  <div className="flex flex-col">
    {/* <label htmlFor="">1</label> */}
  <input onChange={handlePlusOnes} value={plusOne.plusOne2}  className="border-b-2 bg-inherit border-gray-400 focus:outline-none lg:w-1/2 xl:w-1/2" placeholder="" type="text" name="plusOne2" id="p2" />  
  </div>

</div>


</div>


{/* congratulatory message  */}
<div className="flex flex-col gap-2">
  <label className="capitalize text-gray-600 font-semibold" htmlFor="">optional congratulatory message for the organizer</label>
  <input onChange={handleChange} className="border-b-2 bg-inherit border-gray-400  focus:outline-none" placeholder="" type="text" name="congratulatoryMessage" id="cm" />  
  {/* <textarea className="border p-2 focus:outline-none" name="" id="" cols="30" rows="5"></textarea> */}
  
</div>

{/* submit button  */}
<div className="flex justify-center py-3">
  <button onClick={handleRsvp} className="bg-green-900 hover:bg-green-700 text-white uppercase px-10 py-2 font-bold shadow-lg rounded-full">Submit</button>
</div>

         </div>
      </div>
     
    </div>
  );
}
