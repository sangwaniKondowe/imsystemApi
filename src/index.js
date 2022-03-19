import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Student from './Components/User/Student';
import { AuthProvider } from './Context/AuthProvider';
import {
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom'
import StudentPage from './Components/User/StudentPage';
import Admin from './Components/AdminPage';

// const Routing = () =>{
  
//   return (
//     <Router >
//       <Switch>
//         <Route exact path="/admin" component = {App}/>
//         <Route exact path = "/student" component = {Student}/>
//         <Route exact path = "/StudentPage" component={StudentPage}/>

//         <Route exact path = "/adminpage" component={Admin}/>
//         </Switch>
//     </Router>
//   )



ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
 <AuthProvider>
  <Routes>
    <Route path="/*" element={  <App/>} />

  </Routes>

 </AuthProvider>
 </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

