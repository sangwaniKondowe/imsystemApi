import React,{useEffect,useState} from 'react'
import {useStyles} from './StudentBodyStyle'
import axios from 'axios';
import clsx from 'clsx';
import Popup from 'reactjs-popup';
import {AppBar,Toolbar,IconButton,Typography, Button, Paper, Grid,Box} from '@material-ui/core'


function StudentPage() {
  
  const paperStyle={padding :20,height:'70vh',width:1000, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'15px 129px',justify: "center",alignItems: "center" ,varian:"contained" ,color:"primary" }

  const [data, setData] = useState([])
  const token = localStorage.getItem("accessToken")
  
  const userToken = JSON.parse(token)
   const valid_token = userToken.token
  const classes = useStyles()
  

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
                  To recognize and assist 1st, 2nd or 3rd year students 
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