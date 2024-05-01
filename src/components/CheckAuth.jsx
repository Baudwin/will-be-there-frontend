import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import {Link, useNavigate} from "react-router-dom";
import { DualRing } from "react-awesome-spinners";
export const CheckAuth = () => {
    const [showLoading, setShowLoading] = useState(false)
    const user = useAuthStore((state=>state.user))
    const navigate = useNavigate()


    useEffect(()=>{
        if (!user) {
           setShowLoading(true) 
           setTimeout(() => {
            navigate('/login')
           }, 3000);
        }
    },[])
  return (
   <>
   {

showLoading? 

<div className='fixed inset-0 flex justify-center flex-col gap-2 items-center bg-slate-900 bg-opacity-100 z-50'>
        
          <DualRing
          className='loader'
          size={60}
          color="white"
          />
          <p className="text-white text-2xl">Redirecting to login</p>
      </div>

: 
null
}
   </>
  )
}
