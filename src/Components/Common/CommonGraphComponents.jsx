
import React from 'react'
import {Box, CardContent, Grid, Typography,Card} from '@material-ui/core'
import {useStyles} from '../BodyStyles'
import Beneficiaries from '../Beneficiaries'

function CommonGraphComponents() {
    const classes = useStyles()
    return (
     <Box className={classes.graphContainer}>

         <Grid container spacing={1}>
             <Grid item xs={12}sm={7}>
                 <Card style={{ height: '100%' }}>
                     <CardContent>
                         <Typography variant='h5' component='h6'>
                             Scholarship Overview

                         </Typography>
                         
                     </CardContent>
                 </Card>
                 </Grid>

                <Grid item xs={12}sm={5}>
                 <Card style={{ height: '100%' }}>
                     <CardContent>
                         <Typography variant='h5' component='h6'>
                             Scholarship Overview

                         </Typography>
                        
                     </CardContent>
                 </Card>
                 </Grid>

             </Grid>

        

     </Box>
    )
}

export default CommonGraphComponents
