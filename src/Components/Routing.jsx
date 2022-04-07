

import React from 'react'
import Dashboard from './Dashboard'
import Applicants from './Applicants'
import InnerContent from './InnerContent'
import Beneficiaries from './Beneficiaries'
import { useStyles } from './BodyStyles'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserInnerContent from './UserOutlet'
import Login from './Login'
import PermissionDenied from './PermisionDenied'
import ProtectedRouting from './ProtectedRoutes'
import PublicRoutes from './PublicRoute'

function Routing() {
  const classes = useStyles()
  return (
    <div className={classes.content}>

      <Routes>
        
          <Route path="/login" element={<Login />} />
      
          
    ?

          <Route path="/" exact element={<InnerContent />}>
            <Route path="/" exact element={< Navigate replace to="dashboard" />} />
            <Route path='dashboard' exact element={<Dashboard />} />
            <Route path='applicants' exact element={<Applicants />} />
            <Route path='beneficiaries' exact element={<Beneficiaries />} />
          </Route>
          <Route path='/student' exact element={<UserInnerContent />} />

        
       <Route path='*' element={<PermissionDenied/>}/>
      </Routes>



    </div>

  )
}

export default Routing