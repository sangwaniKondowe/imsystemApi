import React from 'react'
import {Box, Grid, Typography, CardContent,Card} from '@material-ui/core'
import {useStyles} from './BodyStyles'
import {PageHeader} from './Common/CommonComponents'

function Dashboard () {

    const classes = useStyles();

    const displayData = [
      {
        cardLabel: "Applicants",
        cardTitle: "   NCHE",
        applicantsNumber: " 4567 "



    },
    {
      cardLabel: "Applicants",
      cardTitle: " Gren Fare",
      applicantsNumber: " 45 "



  },
  {
    cardLabel: "Applicants",
    cardTitle: "Muslim Association",
    applicantsNumber: " 457 "



}
  ]
    

    return (
       <Box>
        
      <PageHeader label="Dashboard" pageTitle="Scholarship Overview"/>

      <Grid container spacing={4}>
      
        {displayData.map((item , index) => (
             <Grid item xs={6} sm={4}>
             <Card>

             <CardContent className={classes.cardCentent} key={index}>
          <Typography variant="body2" className={classes.cardLabel}>

          {item.cardLabel}

          </Typography>

            <Typography variant="h5" component="h6" className={classes.cardTitle}>

           {item.cardTitle}

            </Typography>
            <Typography variant="h6" component="h6" className={classes.applicantsNumber}>

            {item.applicantsNumber}
            
            </Typography>
          </CardContent>


          </Card>

      </Grid>
        )) }
          
      

      </Grid>
      

       </Box>
    );
}

export default Dashboard
