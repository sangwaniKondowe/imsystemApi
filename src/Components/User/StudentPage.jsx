
import React,{useEffect,useState} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import axios from 'axios';
import clsx from 'clsx';
import Popup from 'reactjs-popup';
import MenuIcon from '@material-ui/icons/Menu'
import {TextareaAutosize,TextField,AppBar,Toolbar,IconButton,Typography, Button, Paper, Grid,Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
  },
  form: {
    margin:theme.spacing(2,0),
    justifyContent: "center"
  }
}));



function StudentPage() {
  const classes = useStyles();
  
  const paperStyle = { padding: 20, height: '130vh', width: 400, margin: "20px auto" }
  

const btnstyle={margin:'15px 129px',justify: "center",alignItems: "center" ,variant:"contained" ,color:"primary" }

/* A state that is used to store the data that is entered by the user. */
  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    regNum:"",
    gender:"",
    gpa: "",
    social:"",
    yrofstudy:"",
    ref:""

  })



/* A function that is called when the form is submitted. It prevents the default action of the form
and then sends the data to the server. */
const handleChange = e => {
  const {name,value} = e.target;
  setData(prevState =>({
    ...prevState,
    [name]:value
  }))

}

/* A function that is called when the form is submitted. It prevents the default action of the form
and then sends the data to the server. */
const submithandler = event => {
  event.preventDefault()
  axios.post("http://localhost:5000/application/send_application", data)
  .then(response => {
    console.log(response)
    setData(response.data)
    alert(response.data)

  })
}

  return (
    <div>
    <AppBar position="static">
  <Toolbar>
    
    
    <Typography variant="h6" className={classes.title}>
    GLEN FALLY SCHOLARSHIP
    </Typography>
    
  </Toolbar>
</AppBar>
   
  <Grid container className ={classes.form}>
  
      <main   >
      {/* The above code is a form that is used to collect data from the user.  */}
      <form onSubmit={submithandler}>
        <Paper   elevation={1} style={paperStyle}> 

        
          <Grid
           container className={classes.selectionForm} 
           direction="column"
            spacing={3}

            >

            <Grid item>
              <TextField 
              id = "firstName-input"
              name = "firstname"
              label = "Enter First Name"
              fullWidth
              required
              value={data.firstname}
              onChange={handleChange}
              
              
              />
            </Grid>

            <Grid item>
              <TextField 
              id = "lastName-input"
              name = "lastname"
              label = "Enter Last Name"
              type = "text"
              fullWidth
              required
              value={data.lastname}
              onChange={handleChange}
              
              />
              
              
            </Grid>

      <Grid item>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender" onChange={handleChange} row>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        
      </RadioGroup>
      </Grid>

            <Grid item>
              <TextField 
              id = "reginumber-input"
              name = "regNum"
              label = "Enter Registration Number"
              type = "text"
              fullWidth
              required
              onChange={handleChange}
              value={data.regNum}
              
              />

              </Grid>

              <Grid item>
              <TextField 
              id = "Results-input"
              name = "yrofstudy"
              label = "Enter Year of study"
              type = "number"
              fullWidth
              required
              value={data.yrofstudy}
              onChange={handleChange}
              />
              
            </Grid>
        
              <Grid item>
              <TextField 
              id = "Results-input"
              name = "gpa"
              label = "Enter GPA"
              type = "number"
              fullWidth
              required
              value={data.gpa}
              onChange={handleChange}
              />
              
            </Grid>

            <Grid item>
              <TextField 
              id = "Email-input"
              name = "email"
              label = "Email"
              type = "email"
              fullWidth
              required
              value={data.email}
              onChange={handleChange}
              />
              
            </Grid>
            <Grid item>
      <FormLabel component="legend">Ever involved in volunteer or paid work?</FormLabel>
      <RadioGroup aria-label="gender" name="social" onChange={handleChange} row>
        <FormControlLabel value="yes"  control={<Radio />} label="Yes" />
        <FormControlLabel value="no"   control={<Radio />} label="No" />
        
      </RadioGroup>
      </Grid>

       
            <Grid item>
              <TextField 
              id = "referee-input"
              name = "ref"
              label = "Enter email of referee here"
              type = "email"
              fullWidth
              required
              value={data.ref}
              onChange={handleChange}
              />
              
            </Grid>

            
              
          

            <Button
                  
                  type='submit'
                  color='primary'
                  variant="contained"
                  style={btnstyle}>Apply</Button>
          </Grid>
          <h2>{data.message}</h2>
          

          </Paper>
        </form>

      </main>
      </Grid>
    </div>
  )
}

export default StudentPage