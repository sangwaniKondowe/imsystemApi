import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Student from './Components/User/Student';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom'

const Routing = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component = {App}/>

        <Route exact path = "/home" component = {Student}/>
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
 <Router>
   <Routing/>
 </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

