
import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function StudentLogin() {
    const paperStyle = { padding: 20, height: '70vh', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '15px 129px', justify: "center" }
  

  return (

    <div>
    <form >


      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>

          <TextField
            label='Email'
            placeholder='Enter email'
            fullWidth
            required
            type='email'
            // onChange={(event) => { setEmail(event.target.value) }}

          />

          <TextField
            label='Password'
            placeholder='Enter password'
            type='password'
            fullWidth
            required
            // onChange={(event) => { setPassword(event.target.value) }}


          />

          <Button

            type='submit'
            color='primary'
            variant="contained"
            
            style={btnstyle}>Sign in</Button>


        </Paper>
      </Grid>

    </form>

  </div>
    

  )
}

export default StudentLogin