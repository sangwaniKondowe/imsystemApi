import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudentPage from './Components/User/StudentPage';
import StudentLogin from './Components/User/StudentLogin';

import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import AdminLogin from './Components/Login';

// const Routing = () => {
  
//   <Routes>
//     <Route exact path = "/" element ={<App/>}/> 
//     <Route  exact path = "/student" element={<StudentLogin/>}/>
//   </Routes>

  
  
// }
 


ReactDOM.render(
  <React.StrictMode>
  
      <App/>
      
    </React.StrictMode>,
  document.getElementById('root')
);

