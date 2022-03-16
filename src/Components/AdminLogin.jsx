

import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AdminPage from './AdminPage'
import { Link,Route,Switch} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function AdminLogin() {

    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'15px 129px',justify: "center"}

   

  return (
      <div>
    <Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
        </Grid>

        <TextField 
    
        label='Username'
         placeholder='Enter username'
          fullWidth required/>

        <TextField 
        
        label='Password'
         placeholder='Enter password'
          type='password'
           fullWidth required/>
      
       <Button type='submit' color='primary' variant="contained" style={btnstyle}>Sign in</Button>

        <Typography >
             
                Forgot password ?
        
        </Typography>
       
    </Paper>
</Grid>

 </div>
    
  )
}

export default AdminLogin