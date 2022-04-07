import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Grid, Typography, CardContent, Card } from '@material-ui/core'
import {useStyles} from '../BodyStyles'
function StatusComplete() {
    const classes = useStyles();
    const token = localStorage.getItem("accessToken")
    const userToken = JSON.parse(token)
   const valid_user = userToken.token

   const baseUrl = "http://localhost:5000/application/statusComplete"
   const [data, setData] = useState([])

   const getComplete = async () => {
        axios.get(baseUrl, {

        headers: {
            'Authorization': 'Bearer ' + valid_user
            }

       })
       .then(response => {
           console.log(response)
           setData(console.data)
       })
   }

   useEffect(() => {
    getComplete()
   },[])

  return (
    <div>
               <Grid >
              <Card style={{ height: '100%', width:'70%'}} >
                
                <CardContent className={classes.cardCentent}>
                  <Typography variant="body2" className={classes.cardLabel}>

                  total applications

                  </Typography>

                  <Typography variant="h5" component="h6" className={classes.cardTitle}>

                    Complete applications

                  </Typography>
                  <Typography variant="h6" component="h6" className={classes.applicantsNumber}>

                  

                  </Typography>
                </CardContent>


              </Card>

            </Grid>
          

    </div>
  )
}

export default StatusComplete