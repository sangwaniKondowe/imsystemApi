import React from 'react'
import {Box, Grid, Typography, CardContent,Card} from '@material-ui/core'
import {useStyles} from './BodyStyles'
import {PageHeader} from './Common/CommonComponents'
import BarGraph from './Graphs/BarGraph';
import ChartGraph from './Graphs/ChartGraph';
import CommonGraphComponents from './Common/CommonGraphComponents';

function Dashboard () {

    const classes = useStyles();

    const displayData = [
      {
        cardLabel: "",
        cardTitle: " Applied",
        applicantsNumber: " 100 "



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
    

    return (
      <div>
       <Box>
        
      <PageHeader label="Dashboard" pageTitle="Scholarship Overview"/>

      <Grid container spacing={4}>
      
        {displayData.map((item , index) => (
             <Grid item xs={6} sm={4}>
             <Card style={{ height: '100%' }} >

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

     
      <CommonGraphComponents/>
     

       </Box>

       
      
      




</div>
    );
}

export default Dashboard
