

import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



function AdminLogin() {


  const paperStyle = { padding: 20, height: '70vh', width: 400, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '15px 129px', justify: "center" }



  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


 
  // handling submission on the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password }


    axios.post('http://localhost:5000/login/login', data)
      .then(response => {
        
        if (response.data.err) {
          alert(response.data.err)
        } else {
          localStorage.setItem("accessToken",JSON.stringify({
            token: response.data.token
           })
           )
          localStorage.setItem("role", response.data.role)
          const role = response.data.role;
         
          if (role === "ADMIN") {

            localStorage.setItem("role", role)
            
            navigate("/")

          }
          if (role === "STUDENT") {
            localStorage.setItem("role", role)
            navigate("/student")
          }

        }
      })
      .catch(err => {
        console.log(err)

      })

  }
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
              onChange={(event) => { setEmail(event.target.value) }}

            />

            <TextField
              label='Password'
              placeholder='Enter password'
              type='password'
              fullWidth
              required
              onChange={(event) => { setPassword(event.target.value) }}


            />

            <Button

              type='submit'
              color='primary'
              variant="contained"
              onClick={handleSubmit}
              style={btnstyle}>Sign in</Button>


          </Paper>
        </Grid>

      </form>

    </div>

  )



}

export default AdminLogin