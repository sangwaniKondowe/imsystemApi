import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

/**
 * I'm trying to remove the accessToken from localStorage and then redirect the user to the login page.
 */
const LogOut = () => {

const token = localStorage.removeItem("accessToken")

}