import { useState } from "react";
import { rsvp } from "../hooks/useRsvpData";
import {useParams, useNavigate} from 'react-router-dom'
import { getSingleEvent } from "../hooks/useEventData";
import {toast} from 'react-toastify'
import {ClipLoader} from 'react-spinners'

export function RSVP() {
  
  const {eventId} = useParams()
  const navigate = useNavigate()
const {mutate, isPending, isError, isSuccess} = rsvp(eventId)
const {data} = getSingleEvent(eventId)
const [link, setLink] = useState("")

  const [plusOne, setPlusOne] = useState([])
  const [plusOneInput, setPlusOneInput] = useState("")
  const [additionalPerson, setAdditionalPerson] = useState(false)


  const [rsvpInfo, setRsvpInfo] = useState({
    guestName:"", 
    email : "",
    attendanceStatus: "",
    additionalItem: "",
    plusOne : plusOne,
    congratulatoryMessage: "", 
  })

const handleChange = (e)=>{
  const {name, value} = e.target
  setRsvpInfo({...rsvpInfo, [name]:value})
}


const handleRsvp  = ()=>{
  mutate(rsvpInfo)
}


// if (!data) {
//   return <div className="lg:wrapper xl:wrapper py-10 sm:px-5 md:px-10 bg-cover w-screen bg-[url('/background/big-balloon-border.jpg')]">
//     <div className="flex gap-2 justify-center mt-20 mb-52">
//     <input onChange={(e)=>setLink(e.target.value)} type="text" value={link} className="border focus:outline-none sm:flex-1 p-3 w-1/3 sm:w-full" placeholder="Please Enter event link" name="link" id="" />
//     <a href={link} className="px-10 py-3 hover:bg-green-700 bg-green-900 text-white font-semibold">Submit</a>
//   </div>
//   </div> 
// }



  return (
    <> 
    {

isPending? 

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


   <div className="grid grid-cols-12 sm:grid-cols-1">

   <img  className="col-span-4 object-cover h-full" src={data?.data?.eventImgUrl} alt="" />

    <div className="py-10 px-10 col-span-8 sm:px-5 md:px-10 bg-cover bg-[url('/background/big-balloon-border.jpg')]">
      <div className=" space-y-4">
         <h1 className="text-center text-2xl font-bold">RSVP for <span className="text-green-700 ">{data?.data?.eventName}</span> event</h1>
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
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"food"} name="additionalItem" id="food" />
            <span className="  capitalize">food</span>
          </div>
          
          <div className="flex gap-1.5"> 
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"drinks"} name="additionalItem" id="drinks" />
            <span className=" capitalize">drinks</span>
          </div>

          <div className="flex gap-1.5"> 
            <input onChange={handleChange} type="radio" className="w-4 h-4" value={"games"} name="additionalItem" id="games" />
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
            <input onClick={()=>{
              setAdditionalPerson(false)
              setPlusOne([])
              }} type="radio" className="w-4 h-4" name="plus-one" id="plus-one-no" />
            <span className=" ">No</span>
          </div> 

</div>


<div className={`space-y-3 ${additionalPerson ? null :  "hidden"}`}>
  <div className="px-2">
{
  plusOne.map((p,i)=>{
    return <div className="" key={i}>
      <ol className="flex gap-1 items-center">
      <span>{i+1}.</span> <li className="text-sm">{p} <span></span></li>
      </ol>
      
    </div>
  })
}

  </div>


  {/* <p className="capitalize text-sm">If yes input plus one guest name<span className=" lowercase">(s)</span></p> */}
  <div className="flex items-center gap-3">
    {/* <label htmlFor="">1</label> */}
  <input onChange={(e)=>setPlusOneInput(e.target.value)} value={plusOneInput}  className="border-b-2 w-full bg-inherit border-gray-400 focus:outline-none py-2 font-medium" placeholder="plus one name" type="text" name="plusOne1" id="p1" /> 
  <div className="mt-4">
 
 {/* add plus one  */}

  <button onClick={()=>{
    if (!plusOneInput.trim()) {
     return toast.warning("Input required")
    }
    const existingPlusOne = plusOne.find(p=> p.toLowerCase() === plusOneInput.toLocaleLowerCase())
    if (existingPlusOne) {
       toast.error(`${plusOneInput} already added`)
     return  setPlusOneInput("")
    }
    if (plusOne.length>=3) {
      toast.error("maximum number of plus ones reached.")
      setPlusOneInput("")
    }else{
      setPlusOne([...plusOne,plusOneInput])
      rsvpInfo.plusOne.push(plusOneInput)
    setPlusOneInput("")
    }
    
  }
    } 
    className="bg-green-900 hover:bg-green-700 px-5 py-1 text-white text-sm font-semibold shadow rounded pt-2">
      Add</button> 
   
  </div>
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
  <button onClick={handleRsvp} className="bg-green-900 hover:bg-green-700 text-white uppercase px-20 py-2 font-bold shadow-lg rounded-full">Submit</button>
</div>

         </div>
      </div>
    </div> 
    
        
   </div>
    </>
  );
}
