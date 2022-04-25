
import './App.css';
import React from 'react';

import Login from './Components/Login';
import { BrowserRouter as Router, Route,Navigate} from 'react-router-dom'
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
/**
 * The App function returns a div that contains a Router that contains a Routing component.
 * @returns A div with a Router and a Routing component.
 */

function App() {
    const classes= useStyles()
   
return( 
    <div>
    <Router>
    <Routing/>
    </Router>
   
  
    </div>

    
)
}

export default App;
