import {Outlet} from 'react-router-dom'
import StudentPage from './User/StudentPage';

/* A function that returns a div with two children. */
const  UserInnerContent=() =>{
  return <div className='inner-content'>
      <StudentPage/>
      <Outlet/>
   
  </div>;
}

export default UserInnerContent;