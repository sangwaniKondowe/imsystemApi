import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

/* A function that returns a div with a Navbar and an Outlet. */
const InnerContent = () => {
  const navigate = useNavigate()
  
  return <div className='inner-content'>
    <Navbar />
    <Outlet />

  </div>;
}

export default InnerContent;