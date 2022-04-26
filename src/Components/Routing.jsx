

import React from 'react'
import Dashboard from './Dashboard'
import Applicants from './Applicants'
import InnerContent from './InnerContent'
import Beneficiaries from './Beneficiaries'
import ListestedBeneficiaries from './ListestedBeneficiaries'
import { useStyles } from './BodyStyles'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserInnerContent from './UserOutlet'
import Login from './Login'
import PermissionDenied from './PermisionDenied'

import PublicRoutes from './PublicRoute'
/**
 * It's a function that returns a div that contains a Routes component that contains a Route component

 * @returns The return statement is returning the JSX code that is being rendered.
 */

function Routing() {
  const classes = useStyles()
  return (
    <div className={classes.content}>

      <Routes>
        
          <Route path="/login" element={<Login />} />
            <Route path="/" exact element={<InnerContent />}>
            <Route path="/" exact element={< Navigate replace to="dashboard" />} />
            <Route path='dashboard' exact element={<Dashboard />} />
            <Route path='applicants' exact element={<Applicants />} />
            <Route path='shortlisted' exact element={<Beneficiaries />} />
            <Route path='beneficiaries' exact element={<ListestedBeneficiaries />} />
          </Route>
          <Route path='/student' exact element={<UserInnerContent />} />

        
       <Route path='*' element={<PermissionDenied/>}/>
      </Routes>



    </div>

  )
}

export default Routing