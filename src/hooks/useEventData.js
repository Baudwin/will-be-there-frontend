import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import {useNavigate} from 'react-router-dom'


export const createNewEvent = ()=>{
    const navigate = useNavigate()
    const user = useAuthStore((state=>state.user))
    return useMutation ({
        mutationFn : (eventInfo)=>{
            return axios.post("https://will-be-there-api.vercel.app/events/create-event", eventInfo,
            {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
                })
        },
        onError : (error)=>{
            toast.error(error.response.data.msg)
          
        }, 
        onSuccess:(data)=>{
            navigate('/event-success')
            // setTimeout(() => {
            //     navigate("/")
            // }, 3000);
            
        }
    })
}

export const getUserEvents = ()=>{
    const user = useAuthStore((state=>state.user))
    return useQuery ({
        queryKey : ['events', user? user._id : null],
        queryFn : ()=>{
            return axios.get("https://will-be-there-api.vercel.app/events/my-events",
            {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
                })
        },
        onError : (error)=>{
            
            toast.error(error.response.data.msg)
        }, 
        onSuccess:(data)=>{
         
        }
    })
}

export const getSingleEvent = (eventId)=>{

    return useQuery ({
        queryKey : ['event', eventId],
        queryFn : ()=>{
            return axios.get(`https://will-be-there-api.vercel.app/events/event/${eventId}`)
        },
        onError : (error)=>{
            
            toast.error(error.response.data.msg)
        }, 
        onSuccess:(data)=>{
        
            
        }
    })
}
