import React ,{useEffect, useState}from 'react'
import {PageHeader} from './Common/CommonComponents'
import {Box, Button} from '@material-ui/core'
import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TextField,
    TableRowPaper,TableRow,Grid} from '@material-ui/core';
import {useStyles} from './BodyStyles'

function History() {
  const classes = useStyles();
 
  return (
    <div>

<form>

<Grid container className={classes.selectionForm} direction="row" spacing={3}>
       <Grid item>
         <TextField 
         id = "reg-input"
         name = "regNum"
         label = "Enter Registration number"
         type = "text"
       
          
         />
       </Grid>
       </Grid>
</form>
   
   <Box>
        <PageHeader pageTitle="previous Shortlisted"/>

        <TableContainer className={classes.tableContainer} >
<Table className={classes.table} aria-label="simple table">
  <TableHead >
    <TableRow>
      <TableCell className={classes.tableHeard}>First Name</TableCell>
      <TableCell className={classes.tableHeard} >Last Name</TableCell>
      <TableCell className={classes.tableHeard}>Gender</TableCell>
      <TableCell className={classes.tableHeard}>Email</TableCell>
      <TableCell className={classes.tableHeard}>R.Number</TableCell>
      <TableCell className={classes.tableHeard} >Year Of Study</TableCell>
      <TableCell className={classes.tableHeard}>GPA</TableCell>
    
      
    </TableRow>
  </TableHead>
  <TableBody>
    {/* the table showing students details */}
    {/* {data.map((row) => (
      <TableRow key={row.id}>
        
        <TableCell >{row.firstname}</TableCell>
        <TableCell >{row.lastname}</TableCell>
        <TableCell >{row.gender}</TableCell>
        <TableCell >{row.email}</TableCell>
        <TableCell >{row.regNum}</TableCell>
        <TableCell >{row.yrofstudy}</TableCell>
        <TableCell >{row.gpa}</TableCell>
        
        
        
      </TableRow>
    ))}  */}
  </TableBody>
  
</Table>
</TableContainer>
   </Box>
    </div>
  )
}

export default History