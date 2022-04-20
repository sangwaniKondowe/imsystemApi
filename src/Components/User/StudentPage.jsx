


import React,{useEffect,useState} from 'react'
import {useStyles} from './StudentBodyStyle'
import axios from 'axios';
import clsx from 'clsx';
import Popup from 'reactjs-popup';
import {AppBar,Toolbar,IconButton,Typography, Button, Paper, Grid,Box} from '@material-ui/core'

import { useNavigate } from 'react-router-dom';
function StudentPage() {
  
  const paperStyle={padding :20,height:'70vh',width:1000, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'15px 129px',justify: "center",alignItems: "center" ,varian:"contained" ,color:"primary" }

  const [data, setData] = useState([])
  const token = localStorage.getItem("accessToken")
  const navigate = useNavigate()
  const userToken = JSON.parse(token)
   const valid_token = userToken.token
  const classes = useStyles()
  const LogOut = () =>{
    navigate("/login")
  }

  const baseSendUrl = "http://localhost:5000/application/send_application"

  const sendApplication = () => {
     axios({
       url:baseSendUrl,
       method:"POST",
       headers:{
         "Authorization":"Bearer "+valid_token
       }, data:{}
     }).then(res=>{
       console.log(res)
       setData(res.data)
     })
  }
 
 const popop = () =>{

  <Popup>
  <div>
    {data.message}
  </div>

  </Popup>
 }

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            
            edge="start"
            className={clsx(classes.menuButton, {
              
            })}
          >
            
          </IconButton>
          <Typography variant="h6" noWrap>
          GLEN FARLEY Scholarship
          </Typography>
          <Grid container justifyContent='flex-end' direction='row'>
          <Button
          onClick={LogOut}
          
          color='primary'
          variant="contained"
          >LogOut</Button>
          </Grid>
        </Toolbar>
        
      </AppBar>

      <main >
        <Paper elevation={0} style={paperStyle} >

          <Grid container justifyContent={'center'}>
            
              <Grid >
                <Grid container justifyContent={'center'} >
                <img  style={{width: '350px', height: '400px'}}src='/images/projectImage1.jpg'/>
                </Grid>

                  <Typography>
                  To recognize and assist 2nd , 3rd or 4th  year students 
                  in the Computer Science Programme at Chancellor College
                  who are contributing to improving the lives of other
                  Malawians, while successfully completing their courses.
                  </Typography>
               
                
                </Grid>

                

                <Grid>
                  
                <Typography > 
                
                   <div style={{fonsize: "90px"}}>
                        <h3>{data.message}</h3>
                    </div>

             
                </Typography>
                
                </Grid>
              
          </Grid>
          
        </Paper>

        <Grid container justifyContent={'center'} >
                  <Button 
                
                  onClick={sendApplication}
                  color='primary'
                  variant="contained"
                  style={btnstyle} 
                  >Apply</Button>
              </Grid>
      </main>
    </div>
  )
}

export default StudentPage







// import React,{useEffect,useState} from 'react'
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';


// import axios from 'axios';
// import clsx from 'clsx';
// import Popup from 'reactjs-popup';
// import MenuIcon from '@material-ui/icons/Menu'
// import {TextareaAutosize,TextField,AppBar,Toolbar,IconButton,Typography, Button, Paper, Grid,Box} from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';

// import { useNavigate } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({

//   title: {
//     flexGrow: 1,
//   },
//   form: {
//     margin:theme.spacing(2,0),
//     justifyContent: "center"
//   }
// }));


// function StudentPage() {
//   const classes = useStyles();
  
//   const paperStyle = { padding: 20, height: '70vh', width: 400, margin: "20px auto" }
  
// //   const paperStyle={padding :20,height:'70vh',width:1000, margin:"20px auto"}
// //   const avatarStyle={backgroundColor:'#1bbd7e'}
// const btnstyle={margin:'15px 129px',justify: "center",alignItems: "center" ,variant:"contained" ,color:"primary" }

// //   const [data, setData] = useState([])
// //   const token = localStorage.getItem("accessToken")
// //   const navigate = useNavigate()
// //   const userToken = JSON.parse(token)
// //    const valid_token = userToken.token
// //   const classes = useStyles()
// //   const LogOut = () =>{
// //     navigate("/login")
// //   }

// //   const baseSendUrl = "http://localhost:5000/application/send_application"

// //   const sendApplication = () => {
// //      axios({
// //        url:baseSendUrl,
// //        method:"POST",
// //        headers:{
// //          "Authorization":"Bearer "+valid_token
// //        }, data:{}
// //      }).then(res=>{
// //        console.log(res)
// //        setData(res.data)
// //      })
// //   }
 
// //  const popop = () =>{

// //   <Popup>
// //   <div>
// //     {data.message}
// //   </div>

// //   </Popup>
// //  }

//   return (
//     <div>
//     <AppBar position="static">
//   <Toolbar>
    
    
//     <Typography variant="h6" className={classes.title}>
//     GLEN FALLY SCHOLARSHIP
//     </Typography>
    
//   </Toolbar>
// </AppBar>
   
//   <Grid container className ={classes.form}>
  
//       <main   >
//       <form >
//         <Paper   elevation={1} style={paperStyle}> 

        
//           <Grid
//            container className={classes.selectionForm} 
//            direction="column"
//             spacing={3}

//             >

//             <Grid item>
//               <TextField 
//               id = "firstName-input"
//               name = "FirstName"
//               label = "Enter First Name"
//               fullWidth
//               required
              
              
//               />
//             </Grid>

//             <Grid item>
//               <TextField 
//               id = "lastName-input"
//               name = "LastName"
//               label = "Enter Last Name"
//               type = "text"
//               fullWidth
//               required
              
//               />
              
              
//             </Grid>

//       <Grid item>
//       <FormLabel component="legend">Gender</FormLabel>
//       <RadioGroup aria-label="gender" name="gender1" >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
        
//       </RadioGroup>
//       </Grid>

//             <Grid item>
//               <TextField 
//               id = "reginumber-input"
//               name = "RegistrationNumber"
//               label = "Enter Registration Number"
//               type = "text"
//               fullWidth
//               required
              
//               />

//               </Grid>
        
//               <Grid item>
//               <TextField 
//               id = "Results-input"
//               name = "Results"
//               label = "Enter GPA"
//               type = "number"
//               fullWidth
//               required
              
//               />
              
//             </Grid>

//             <Grid item>
//               <TextField 
//               id = "Email-input"
//               name = "Eamil"
//               label = "Email"
//               type = "email"
//               fullWidth
//               required
              
//               />
              
//             </Grid>

//             <Grid item>
//             <TextareaAutosize
//           aria-label="empty textarea"
//           placeholder="discription"
//   style={{ width: 400,height:100}}
// />
              
//             </Grid>

//             <Grid item>
//               <TextField 
//               id = "referee-input"
//               name = "referee"
//               label = "Reference details"
//               type = "text"
//               fullWidth
//               required
              
//               />
              
//             </Grid>

            
              
          

//             <Button

//                   type='submit'
//                   color='primary'
//                   variant="contained"
//                   style={btnstyle}>Apply</Button>
//           </Grid>

//           </Paper>
//         </form>

//       </main>
//       </Grid>
//     </div>
//   )
// }

// export default StudentPage