
import React from 'react'
import {makeStyles} from '@material-ui/core'
import {blueGrey,blue} from '@material-ui/core/colors'
export const useStyles = makeStyles((theme) => ({
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

    },

    cardLabel:{
        textTransform: "uppercase",
        color:blueGrey[500],
        textAlign:"center",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down("xs")]:{
            fontSize:"0.8rem",
        }

    },
    
    cardTitle:{
        textTransform: "capitalize",
        color:blueGrey[800],
        textAlign:"center",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down("xs")]:{
            fontSize:"1.8rem",
        }

    },
    applicantsNumber:{
        textTransform: "capitalize",
        color:blueGrey[800],
        textAlign:"center",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down("xs")]:{
            fontSize:"1.8rem",
        }

    },

    //graph styles
    graphContainer:{
        // width:"100%",
        // height:"300px",
        height:"auto",
    margin:theme.spacing(3,0)
    },
    //button select style

    selectButton:{
        backgroundColor: theme.palette.primary.light,

    },
    table: {
        minWidth: 650,
      },
      tableHeard:{
          fontWeight:'bold',
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.getContrastText(theme.palette.primary.dark)


      },
    tableContainer:{
        borderRadius:15,
        margin:"10px 10px",
        
    },
// selection form 

selectionForm: {
  alignItems: "center",
  justify: "center",
  margin: "10px 10px"
},

}));
