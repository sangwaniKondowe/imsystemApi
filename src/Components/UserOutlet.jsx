import {Outlet} from 'react-router-dom'
import StudentPage from './User/StudentPage';

const  UserInnerContent=() =>{
  return <div className='inner-content'>
      <StudentPage/>
      <Outlet/>
   
  </div>;
}

export default UserInnerContent;