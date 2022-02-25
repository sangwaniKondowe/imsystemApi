import React from 'react'
import {Box, Grid, Typography, makeStyles} from '@material-ui/core'
import { blueGrey,white, blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    section: {
     margin:theme.spacing(3,0)
    },
    pageTitle:{
        color:blueGrey[800],
        margin:theme.spacing(2),
        textTransform: "uppercase"
    },
    pageSubTitle:{
        color:blueGrey[500],
        margin:theme.spacing(2,0)

    }
    

}))

function Dashboard () {

    const classes = useStyles();
    

    return (
       <Box>
           {/* title
           cards 3
           graphs 2 */}

           <Grid container>
           <Grid item xs={12} sm={12}>
           <Typography variant="body2" className={classes.pageTitle}>Dashboard</Typography>
           <Typography variant="h5" component="h5" className={classes.pageSubTitle}>Scholarship Overview</Typography>

           </Grid>

           </Grid>

       </Box>
    );
}

export default Dashboard
