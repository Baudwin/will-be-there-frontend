import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import {useNavigate} from 'react-router-dom'



export const registerUser = ()=>{
    const login  = useAuthStore(state=>state.login)
    const navigate = useNavigate()

    return useMutation ({
        mutationFn : (userInfo)=>{
            return axios.post("http://localhost:3001/register", userInfo)
        },
        onError : (error)=>{
            toast.error(error.response.data)
        }, 
        onSuccess:(data)=>{
            login(data.data.userInfo)
            toast.success(data.data.msg)
            setTimeout(() => {
                navigate("/")
            }, 3000);
            
        }
    })
}


export const loginUser = ()=>{
    const login  = useAuthStore(state=>state.login)
    const navigate = useNavigate()

    return useMutation ({
        mutationFn : (userInfo)=>{
            return axios.post("http://localhost:3001/signin", userInfo)
        },
        onError : (error)=>{
            toast.error(error.response.data)
        }, 
        onSuccess:(data)=>{
            login(data.data.userInfo)
            toast.success(data.data.msg)
            setTimeout(() => {
                navigate("/profile")
            }, 3000);
            
        }
    })
}