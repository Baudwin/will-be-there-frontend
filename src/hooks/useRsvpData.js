import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import {useNavigate} from 'react-router-dom'



export const rsvp = (eventId)=>{
    
    const navigate = useNavigate()

    return useMutation ({
        mutationFn : (rsvpInfo)=>{
            return axios.post(`https://will-be-there-api.vercel.app/rsvp/${eventId}`, rsvpInfo)
        },
        onError : (error)=>{
            toast.error(error.response.data.msg)
            console.log(error)
        }, 
        onSuccess:(data)=>{
            navigate('/rsvp-success')
            
        }
    })
}

export const getUserRsvps = (userEmail)=>{
    const user = useAuthStore((state=>state.user))
    return useQuery ({
        queryKey:['rsvp', userEmail],
        queryFn : ()=>{
            return axios.get(`https://will-be-there-api.vercel.app/my-rsvps`,
            {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
                })
        },
        onError : (error)=>{
        
        }, 
        onSuccess:(data)=>{

        }
    })
}
