import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import {useNavigate} from 'react-router-dom'



export const rsvp = ()=>{
    
    const navigate = useNavigate()

    return useMutation ({
        mutationFn : (rsvpInfo)=>{
            return axios.post("http://localhost:3001/rsvp", rsvpInfo)
        },
        onError : (error)=>{
            toast.error(error.response.data)
        }, 
        onSuccess:(data)=>{
            toast.success(data.data.msg)
            // setTimeout(() => {
            //     navigate("/")
            // }, 3000);
            
        }
    })
}


