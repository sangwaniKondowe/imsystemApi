import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'
/**
 * If the user is not authenticated, then the user will be redirected to the login page.
 * @returns the value of the variable auth.
 */
const useAuth=()=>{
  const user=localStorage.getItem('accessToken')

  if(user ===null){
    return true
  } else {
    return false
  }
}

const  PublicRoutes=() =>{

  const auth=useAuth()

  return auth?<Navigate to="/"/>: <Outlet/>
}
export default PublicRoutes;