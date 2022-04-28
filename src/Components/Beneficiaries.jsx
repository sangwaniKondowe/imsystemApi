import React ,{useEffect, useState}from 'react'
import {PageHeader} from './Common/CommonComponents'
import {Box, Button} from '@material-ui/core'
import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRowPaper,TableRow} from '@material-ui/core';
import {useStyles} from './BodyStyles'
import axios from 'axios';
// this function is getting shortlisted applicants from the api and display them 
// only shortlisted students and there details will be shown here
/**
 * It's a function that fetches data from an API and displays it in a table.
 * I have also tried to console.log the data
 * @returns The data is being returned as an array of objects.
 */

function Beneficiaries() {

    const classes = useStyles();
    
    const [data, setData] = useState([])
    const baseUrl = "http://localhost:5000/application/statusComplete"

    /**
     * When the component mounts, get the data from the API and set the state to the data.
     */
    const getApplicants = () => {
        axios.get(baseUrl)
        .then(res => {
          console.log(res)
          setData(res.data.applications)
            
        })
    }
   useEffect(() =>{
   getApplicants()
   },[])
    return (
   <Box>
        <PageHeader pageTitle="All Shortlisted"/>

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
    {/* the table showing students details */}
    {data.map((row) => (
      <TableRow key={row.id}>
        
        <TableCell >{row.firstname}</TableCell>
        <TableCell >{row.lastname}</TableCell>
        <TableCell >{row.gender}</TableCell>
        <TableCell >{row.email}</TableCell>
        <TableCell >{row.regNum}</TableCell>
        <TableCell >{row.yrofstudy}</TableCell>
        <TableCell >{row.gpa}</TableCell>
        
        
        
      </TableRow>
    ))} 
  </TableBody>
  
</Table>
</TableContainer>
   </Box>

    )
}

export default Beneficiaries
