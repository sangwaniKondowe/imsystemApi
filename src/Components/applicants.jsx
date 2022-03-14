import React, { useState } from 'react'
import {PageHeader} from './Common/CommonComponents'

import { Button,TextField, FormControlLabel,FormLabel,Grid} from '@material-ui/core'
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

//form default values 

const defaultValues = {
  numberOfMales: "",
  numberOfFemales: ""

};

function Applicants() {
    const classes = useStyles();
    
    const [selectionValue, setSelectionValue] = useState(defaultValues)
    
    // handling change input on form

    const handleInputChange = (e) => {
      const {name , value} = e.target;
      setSelectionValue({
        ...selectionValue,
        [name] : value,
      })
    }
    // form control
    const handleSubmit = (event) => {
      event.preventDefault();

    }
    return (
        <div>

        
       <Box>
        <PageHeader pageTitle="All Applicants "/>
        {/* Selection form  */}
        <form onSubmit={handleSubmit}>
          <Grid className={classes.selectionForm}>
            <Grid item>
              <TextField 
              id = "male-input"
              name = "numberOfMales"
              label = "Number of Males"
              type = "number"
              InputProps={{
                inputProps: { min: 0 }
              }}
              value={selectionValue.numberOfMales}
              onChange={handleInputChange}
              />
            </Grid>

            <Grid item>
              <TextField 
              id = "male-input"
              name = "numberOfFemales"
              label = "Number of Females"
              type = "number"
              InputProps={{
                inputProps: { min: 0 }
              }}
              value={selectionValue.numberOfFemales}
              onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </form>
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
