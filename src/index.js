import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudentPage from './Components/User/StudentPage';

import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import AdminLogin from './Components/Login';


 


ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <App/>
      
    
    </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

