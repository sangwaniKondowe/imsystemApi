import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, CardContent, Card } from '@material-ui/core'
import { useStyles } from './BodyStyles'
import { PageHeader } from './Common/CommonComponents'

import CommonGraphComponents from './Common/CommonGraphComponents';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function Dashboard() {

  const navigate = useNavigate()


  const classes = useStyles();


  
 
 
 const baseDataUrl = "http://localhost:5000/application/countAll"

 const token = localStorage.getItem("accessToken")
 const [data ,setData] = useState([])
 

const userToken = JSON.parse(token)
const valid_user = userToken.token


 
 const getTotalNumber = async () =>{
   await axios.get(   baseDataUrl   ,{

    headers: {
      'Authorization': 'Bearer ' + valid_user
      }

   })
   .then (response => {
    console.log(response)
    setData(response.data)
     
   })
 }

useEffect(() =>{
  getTotalNumber()
},[])







 

  return (
    <div>
      <Box>

        <PageHeader label="Dashboard" pageTitle="Scholarship Overview" />
        <Box >

    
        <Grid container spacing={4}>

          <Grid item xs={6} sm={4}>
              <Card style={{ height: '100%' }} >

                <CardContent className={classes.cardCentent}>
                  <Typography variant="body2" className={classes.cardLabel}>

                  Total applications

                  </Typography>

                 
                  <Typography variant="h6" component="h6" className={classes.applicantsNumber}>

                  <h1>{data.totalApplicants}</h1>

                  </Typography>
                </CardContent>


              </Card>

            </Grid>


            <Grid item xs={6} sm={4}>
              <Card style={{ height: '100%' }} >

                <CardContent className={classes.cardCentent}>
                  <Typography variant="body2" className={classes.cardLabel}>

                   pending applications

                  </Typography>

               
                  <Typography variant="h6" component="h6" className={classes.applicantsNumber}>

                  
                   <h1>{data.pendingApplication}</h1>
                  </Typography>
                </CardContent>


              </Card>

            </Grid>

            <Grid item xs={6} sm={4}>
              <Card style={{ height: '100%' }} >

                <CardContent className={classes.cardCentent}>
                  <Typography variant="body2" className={classes.cardLabel}>

                  Completed applications

                  </Typography>

                
                  <Typography variant="h6" component="h6" className={classes.applicantsNumber}>

                  <h1>{data.completedApplications}</h1>

                  </Typography>
                </CardContent>


              </Card>

            </Grid>


            
          



        </Grid>

        

        </Box>
        


      </Box>








    </div>
  );
}

export default Dashboard
