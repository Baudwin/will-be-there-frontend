import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import {useNavigate} from 'react-router-dom'

export const useUserData = ()=>{
    const login  = useAuthStore(state=>state.login)
    const navigate = useNavigate()

    return useMutation ({
        mutationFn : (userInfo)=>{
            return axios.post("http://localhost:3001/register", userInfo)
        },
        onError : (error)=>{
            toast.warning(error.response.data,{
                pauseOnFocusLoss:false,
                hideProgressBar:true
            })
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