import React from 'react'
import {PageHeader} from './Common/CommonComponents'
import Button from '@material-ui/core/Button'
import {Box} from '@material-ui/core'
import {useStyles} from './BodyStyles'

import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRowPaper,TableRow} from '@material-ui/core';


const student = [
    {firstName: "Joseph", lastName:"Mkonda",Gender:"Male", email:"Bsc-104-16@unima.ac.mw" ,YearOfStudy:1, GPA: 3.20 },
    {firstName: "Joseph", lastName:"Mkonda", Gender:"Male",email:"Bsc-104-16@unima.ac.mw" ,YearOfStudy:1, GPA: 3.20 },
    {firstName: "Joseph", lastName:"Mkonda",Gender:"Male", email:"Bsc-104-16@unima.ac.mw" ,YearOfStudy:1, GPA: 3.20 },
    {firstName: "Joseph", lastName:"Mkonda",Gender:"Male", email:"Bsc-104-16@unima.ac.mw" ,YearOfStudy:1, GPA: 3.20 },
    {firstName: "Joseph", lastName:"Mkonda",Gender:"Male", email:"Bsc-104-16@unima.ac.mw" ,YearOfStudy:1, GPA: 3.20 },
    {firstName: "Joseph", lastName:"Mkonda", Gender:"Male",email:"Bsc-104-16@unima.ac.mw" ,YearOfStudy:1, GPA: 3.20 }
]
console.log(student)

function Applicants() {
    const classes = useStyles();
    return (
        <div>

        
       <Box>
        <PageHeader pageTitle="All Applicants "/>
        <Button className ={classes.selectButton} color = "primary"variant='contained'>Select</Button>

    </Box>

<TableContainer className={classes.tableContainer} >
<Table className={classes.table} aria-label="simple table">
  <TableHead >
    <TableRow>
      <TableCell className={classes.tableHeard}>First Name</TableCell>
      <TableCell className={classes.tableHeard} >Last Name</TableCell>
      <TableCell className={classes.tableHeard}>Gender</TableCell>
      <TableCell className={classes.tableHeard}>Email</TableCell>
      <TableCell className={classes.tableHeard} >Year Of Study</TableCell>
      <TableCell  className={classes.tableHeard}>GPA</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {student.map((row) => (
      <TableRow key={row.name}>
        
        <TableCell >{row.firstName}</TableCell>
        <TableCell >{row.lastName}</TableCell>
        <TableCell >{row.Gender}</TableCell>
        <TableCell >{row.email}</TableCell>
        <TableCell >{row.YearOfStudy}</TableCell>
        <TableCell >{row.GPA}</TableCell>
        
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</div>

    )
}

export default Applicants
