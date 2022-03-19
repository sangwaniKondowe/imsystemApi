

import React,{useRef, useEffect,useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from '../Api/axios';
import useAuth from '../hooks/UseAuth';


const LOGIN_URL = '/login/login'

function AdminLogin() {

    const {setAuth} = useAuth()
    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'15px 129px',justify: "center"}

  

   //login const
   const userRef = useRef()
   const errRef = useRef()
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const [errMsg, setErrMsg] = useState("")

   
   useEffect(() =>{
     setErrMsg("");
   },[email,password])

   //handling submission on the form

   const handleSubmit = async (e) =>{
     e.preventDefault();
   try{
     
    const response = await axios.post(LOGIN_URL, {
      email: email,
      password: password,
  }, {
      'content-type': 'x-www-form-urlencoded'
  }).then(response => {
      console.log(response);
      if(response.status) {
          console.log('User is logged in');
      }
  }).catch(err => console.log(err))
  console.log(JSON.stringify(response?.data));
  const token = response?.data?.token;
  const message = response?.data?.message;
  const role = response?.data?.role;

  setAuth({role,token,message})

} catch (err){

}
        // console.log(JSON.stringify(response?.data));
        // const token = response?.data?.token;
        // const message = response?.data?.message;

        // setAuth({token,message})


    //   setEmail('');
    //   setPassword('');
    //  } catch

      // if(!err?.response){
      //   setErrMsg('No Server Response');
      // }else if(err.response?.status === 400){
      //   setErrMsg('Missing Username or Password');
      // }else if (err.response.status === 401){
      //   setErrMsg('Unauthorized');
      // }else{
      //   setErrMsg('Login failed')
      // }

     

     

   }

  return (
      <div>
        <form onSubmit={handleSubmit }> 

        
    <Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
        </Grid>

        <TextField 
        label='Email'
        placeholder='Enter email'
        fullWidth required
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value = {email}
          />

        <TextField 
        label='Password'
        placeholder='Enter password'
        type='password'
        fullWidth required
        required
        onChange={(e) => setPassword(e.target.value)}
        value = {password}
        
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

export default AdminLogin