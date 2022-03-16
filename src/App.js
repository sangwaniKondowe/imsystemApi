
import './App.css';
import React from 'react';
import AdminPage from './Components/AdminPage';
import AdminLogin from './Components/AdminLogin';
import {Admin,  Resource ,fetchUtils} from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest';
import { createBrowserHistory as createHistory } from 'history';
import {BrowserRouter} from 'react-router-dom'




function App() {
  
return(
  <BrowserRouter>
   <AdminPage />
  </BrowserRouter>
 
 );
}

export default App;
