

import React,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRowPaper,TableRow} from '@material-ui/core';
    import {useStyles} from './BodyStyles'

import axios from 'axios'





/* A function that is used to get the data from the API and display it in a table. */

function PendingApplications() {

      
    const classes = useStyles();
    const [data , setData] = useState([])

    const getPending = "http://localhost:5000/application/allApplications"
    /**
     * It gets the data from the API and sets the data to the state.
     */
    const getPendingApplications = () => {

        axios.get(getPending)
          .then(response => {
            
          
            console.log(response)
            setData(response.data)
            
          })
         
    }
  useEffect(() =>{
  getPendingApplications()
  },[])
  


  return (
    <div>
    {/* Creating a table with the data that is fetched from the API. */}
    <TableContainer className={classes.tableContainer} >
<Table className={classes.table} aria-label="simple table">
  <TableHead >
    <TableRow>
      <TableCell className={classes.tableHeard}>First Name</TableCell>
      <TableCell className={classes.tableHeard} >Last Name</TableCell>
      <TableCell className={classes.tableHeard}>Gender</TableCell>
      <TableCell className={classes.tableHeard}>Email</TableCell>
      <TableCell  className={classes.tableHeard}>R.Number</TableCell>
      <TableCell className={classes.tableHeard} >Year Of Study</TableCell>
      <TableCell  className={classes.tableHeard}>GPA</TableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map((row) => (
      <TableRow key={row.id}>
        
        <TableCell >{row.firstname}</TableCell>
        <TableCell >{row.lastname}</TableCell>
        <TableCell >{row.gender}</TableCell>
        <TableCell >{row.email}</TableCell>
        <TableCell >{row.regnum}</TableCell>
        <TableCell >{row.yrofstudy}</TableCell>
        <TableCell >{row.gpa}</TableCell>
        <TableCell >


        
    
        

        </TableCell>
        
      </TableRow>
    ))}
  </TableBody>
  
</Table>
</TableContainer>

    </div>
  )
}

export default PendingApplications