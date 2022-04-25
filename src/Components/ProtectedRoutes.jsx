import React, {useState}from "react";
// import { useAuth } from "./Auth";
import {Navigate, Outlet,useLocation} from "react-router-dom"
import { useEffect } from "react";


/**
 * If the token is valid, the user is redirected to the home page, otherwise, the user is redirected to
 * the login page.
 * @returns The function ProtectedRouting is being returned.
 */
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


}
export default ProtectedRouting