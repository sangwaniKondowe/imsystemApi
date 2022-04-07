
import './App.css';
import React from 'react';

import Login from './Components/Login';
import {Routes, Route,Navigate} from 'react-router-dom'
import { useStyles } from './Components/BodyStyles';
import Navbar from './Components/Navbar';
import InnerContent from './Components/InnerContent';
import UserOutlet from './Components/UserOutlet'
import StudentPage from './Components/User/StudentPage';
import Applicants from './Components/Applicants';
import Beneficiaries from './Components/Beneficiaries';
import Dashboard from './Components/Dashboard';
import {Box} from '@material-ui/core'

import Routing from './Components/Routing';

function App() {
    const classes= useStyles()
   
return( 
    <div>
   
    <Routing/>
  
    </div>

    
)
}

export default App;
