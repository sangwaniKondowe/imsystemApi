import React, {useState}from "react";
// import { useAuth } from "./Auth";
import {Navigate, Outlet,useLocation} from "react-router-dom"
import { useEffect } from "react";


const ProtectedRouting = () => {
    
    
    const token = localStorage.getItem("accessToken")
    let userToken = JSON.parse(token)    
    const valid_token = userToken.token
 
    const{isAuth, setIsAunt} = useState(false)


    useEffect(() => {
        if(token){
            setIsAunt(true)
        }
    },[valid_token])

    if(isAuth){
        return <Navigate to = "/"/>
    }
    else{
        return <Navigate to= "/log"/>
    }

    // return isAuth? <Navigate to ="/login"/>:<Outlet/>

    // if (valid_token != null){
    //     return <Navigate to = "/"/>
    // }

//     else {
     
//    return <Navigate to = "/login"/>

//     }
        
// return valid_token ? <Outlet/>: <Navigate to="/login"/>

}
export default ProtectedRouting