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


function Beneficiaries() {

    const classes = useStyles();
    const token = localStorage.getItem("accessToken")
    const userToken = JSON.parse(token)
    const valid_token = userToken.token
    const [data, setData] = useState([])
    const baseUrl = "http://localhost:5000/application/statusComplete"

    const getApplicants = () => {
        axios.get(baseUrl,{

            headers: {
                'Authorization': 'Bearer ' + valid_token
                }

        })
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
        <PageHeader pageTitle="All Beneficiaries"/>

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
      <TableCell  className={classes.tableHeard}>Status</TableCell>
      
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
        <TableCell >{row.status}</TableCell>
        
        
      </TableRow>
    ))}
  </TableBody>
  
</Table>
</TableContainer>
   </Box>

    )
}

export default Beneficiaries
