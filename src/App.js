
import './App.css';
import React from 'react';
import AdminPage from './Components/AdminPage';
import Login from './Components/Login';
import Applicants from './Components/Applicants'
import Beneficiaries from './Components/Beneficiaries'
import Dashboard from './Components/Dashboard';
import simpleRestProvider from 'ra-data-simple-rest';
import { createBrowserHistory as createHistory } from 'history';
import { Routes,Route } from 'react-router-dom';
import Layout from './Components/Layout';
import StudentPage from './Components/User/StudentPage';
import RequireAuth from './Components/RequireAuth';







function App() {
  
return(
  <div>
<Routes>
  <Route path="/" element={<Layout/>}>
    {/* public route */}

    <Route path="login" element={<Login/>}/>

    {/* protected routes */}
      <Route element={<RequireAuth/>}>
    <Route path="/" element = {<AdminPage/>}>

    </Route>

    <Route path="student" element={<StudentPage/>}>

    </Route>
    </Route>
  </Route>
</Routes>
  
</div>
 
 );
}

export default App;
