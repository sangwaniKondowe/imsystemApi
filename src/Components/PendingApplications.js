

import React,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRowPaper,TableRow} from '@material-ui/core';
    import {useStyles} from './BodyStyles'

import axios from 'axios'






function PendingApplications() {

    const token = localStorage.getItem("accessToken")
    const userToken = JSON.parse(token)
    const valid_token = userToken.token
      
    const classes = useStyles();
    const [data , setData] = useState([])

    const getPending = "http://localhost:5000/application/all_Applications"
    const getPendingApplications = () => {

        axios.get(getPending,{

      
            headers: {
              'Authorization': 'Bearer ' + valid_token
              }
          })
      
          .then(response => {
            
            setData(response.data)
            console.log(response)
            
          })
         
    }
  useEffect(() =>{
  getPendingApplications()
  },[])
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };

  const handleClose = () => {

    

    const override = "http://localhost:5000/beneficiary/overrideSelection/uuid?=${uuid}"

    var uuid = this.props.match.params.uuid;
    
    axios.post(override,{

      headers: {
        'Authorization': 'Bearer ' + valid_token
        }

    }).then(res =>{
      console.log(res)
    })

    

    setOpen(false);
  }

  return (
    <div>
    <TableContainer className={classes.tableContainer} >
<Table className={classes.table} aria-label="simple table">
  <TableHead >
    <TableRow>
      <TableCell className={classes.tableHeard}>First Name</TableCell>
      <TableCell className={classes.tableHeard} >Last Name</TableCell>
      <TableCell className={classes.tableHeard}>Gender</TableCell>
      <TableCell className={classes.tableHeard}>Email</TableCell>
      <TableCell  className={classes.tableHeard}>R.Number</TableCell>
      <TableCell className={classes.tableHeard} >Year Of Study</TableCell>
      <TableCell  className={classes.tableHeard}>GPA</TableCell>
      <TableCell  className={classes.tableHeard}>Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map((row) => (
      <TableRow key={row.id}>
        
        <TableCell >{row.firstname}</TableCell>
        <TableCell >{row.lastname}</TableCell>
        <TableCell >{row.gender}</TableCell>
        <TableCell >{row.email}</TableCell>
        <TableCell >{row.regnum}</TableCell>
        <TableCell >{row.yrofstudy}</TableCell>
        <TableCell >{row.gpa}</TableCell>
        <TableCell >


        <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>No</Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

        </TableCell>
        
      </TableRow>
    ))}
  </TableBody>
  
</Table>
</TableContainer>

    </div>
  )
}

export default PendingApplications