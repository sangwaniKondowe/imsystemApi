import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const InnerContent = () => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   localStorage.getItem("accessToken") === "" || localStorage.getItem("accessToken") === null || localStorage.getItem("accessToken") === undefined ? navigate("/login") : navigate("/")

  // })
  return <div className='inner-content'>
    <Navbar />
    <Outlet />

  </div>;
}

export default InnerContent;