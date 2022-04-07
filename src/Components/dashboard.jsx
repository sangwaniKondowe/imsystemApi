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

  const displayData = [
    {
      cardLabel: "",
      cardTitle: " Applied",
      applicantsNumber:"9"



    },
    {
      cardLabel: "",
      cardTitle: " Selected",
      applicantsNumber: " 70 "



    },
    {
      cardLabel: "",
      cardTitle: "Not Selected",
      applicantsNumber: " 30 "



    }
  ]
 const baseUrl = "http://localhost:5000/application/getall"
 
 const baseTotalgUrl = "http://localhost:5000/application/statusPending"

 const token = localStorage.getItem("accessToken")
 const [data ,setData] = useState([])
 const [Complete, setComplete] = useState([])
 const [total, setTotal] = useState([])

const userToken = JSON.parse(token)
const valid_user = userToken.token

 //getting total number applications
 
 const getTotalNumber = async () =>{
   await axios.get(  baseUrl  ,{

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


//  const getStatusPending = async () => {

//   await axios.get(baseUrl, {

//     headers: {
//       'Authorization': 'Bearer ' + userToken
//       }

//    })
//    .then(response => {
     
//      setData(response.data.filter(gender =>{}))
//    })
 



// const reqOne = axios.get("http://localhost:5000/application/getall");
// const reqTwo = axios.get("http://localhost:5000/application/statusComplete");

// axios.all([reqOne, reqTwo],{

//   headers: {
//            'Authorization': 'Bearer ' + userToken
//         }
    
// })

// .then(axios.spread((...responses) => {
//   const responseOne = responses[0]
//   setData(responseOne.data.Applications)
//   const responseTwo = responses
  
  
// })).catch(errors => {
//   // react on errors.
// })
 

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

                  pending applications

                  </Typography>

                  <Typography variant="h5" component="h6" className={classes.cardTitle}>

                    Applied

                  </Typography>
                  <Typography variant="h6" component="h6" className={classes.applicantsNumber}>

                    {data.Applications}

                  </Typography>
                </CardContent>


              </Card>

            </Grid>
          



        </Grid>

        </Box>
        <CommonGraphComponents />


      </Box>








    </div>
  );
}

export default Dashboard
