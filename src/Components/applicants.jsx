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
import PendingApplications from './PendingApplications'




// this function recieves applicants data from api which the admin will use it for selection

function Applicants() {
    const classes = useStyles();
    const [data , setData] = useState([])
    const [numberMale, setNumberMales] = useState(0)
    const [numberFemale, setNumberFemale] = useState(0)
    
    
  
    /**
     * Used to get the data from the api and display it in the table.
     */
    
    const handleSubmit = (event) => {
      event.preventDefault();

    /* A function that is called when the admin clicks the select button. It is used to get the data
    from the api and display it in the table. */
    
    const getBeneUrl = "http://localhost:5000/application/markComplete?females="+numberFemale+"&males="+numberMale
     
    axios.get(getBeneUrl)
    

    .then(response => {
      
      setData(response.data.ele)
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
        <PageHeader pageTitle="All Applicants"/>
        
       {/* A form that is used to get the number of males and females that the admin wants to select. */}
        
        <form onSubmit={handleSubmit}>
          
          <Grid container className={classes.selectionForm} direction="row" spacing={3}>
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

{/* table showing all applicants data  */}
         <PendingApplications/>

    </Box>


</div>

    )
}

export default Applicants
