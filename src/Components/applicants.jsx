import React, { useEffect, useState } from 'react'
import {PageHeader} from './Common/CommonComponents'

import { Button,TextField,Grid} from '@material-ui/core'
import {Box} from '@material-ui/core'
import {useStyles} from './BodyStyles'



import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRowPaper,TableRow} from '@material-ui/core';
import axios from 'axios'



//form default value



function Applicants() {
    const classes = useStyles();
    const [data , setData] = useState([])
    const [numberMale, setNumberMales] = useState(0)
    const [numberFemale, setNumberFemale] = useState(0)
    const token = localStorage.getItem("accessToken")
    const userToken = JSON.parse(token)
    const valid_token = userToken.token
      
    
  
    // form control
    const handleSubmit = (event) => {
      event.preventDefault();

    
    const getBeneUrl = "http://localhost:5000/application/markComplete?females="+numberFemale+"&males="+numberMale
     
    axios.get(getBeneUrl,{

      
      headers: {
        'Authorization': 'Bearer ' + valid_token
        }
    })

    .then(response => {
      
      setData(response.data.complete)
      console.log(response)
      
    })
   }
    
  const handelMales =(e)=>{
e.preventDefault()
setNumberFemale(e.target.value)
  }

  const handleFemales =(e) => {
    e.preventDefault()
    setNumberMales(e.target.value)
  }
    return (
        <div>

        
       <Box>
        <PageHeader pageTitle="All Beneficiaries "/>
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
              value={numberMale}
              onChange={handleFemales}
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
              value={numberFemale}
              onChange={handelMales}
              />
            </Grid>
          </Grid>
        </form>
        <Button className ={classes.selectButton}
        onClick={ handleSubmit}
         color = "primary"variant='contained'>Select</Button>

    </Box>

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
        
      </TableRow>
    ))}
  </TableBody>
  
</Table>
</TableContainer>
</div>

    )
}

export default Applicants
