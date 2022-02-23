
import './App.css';
import React from 'react'


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {Drawer,AppBar,
  Toolbar,List,CssBaseline,Typography,Divider, 
  IconButton,ListItem, ListItemIcon,ListItemText, Box,DashboardIcon,PeopleIcon,SchoolIcon,PersonIcon    } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Applicants from './Components/Applicants'
import Beneficiaries from './Components/Beneficiaries'
import Scholarships from './Components/Scholarships'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container:{
    width: "180px"
  }

}));




function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const itemList = [{
    text: "Dashboard"
  },{
    text: "Scholarships"
  },{
    text: "Applicants"
  },{
    text:"Beneficiaries"
  }]

  // "DashboardIcon","PeopleIcon","SchoolIcon","PersonIcon "


  return (


 

<div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            UNIMA SCHOLARSHIP MANAGEMENT SYSTEM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        className = {classes.container}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemList.map((item, index) => {
            
          const {text} = item;
            return (<ListItem button key={text}>

            <ListItemText primary={text}/>
            </ListItem>
          )})}
        </List>
        
        
      
      </Drawer>

     <Box>
   <BrowserRouter>
 <Switch>
 <Route exact path = "/" render={() => <Dashboard/>}/>
 <Route exact path ="/ Scholarships" render={() => < Scholarships/>}/>
 <Route exact path ="/applicants" render={() => <Applicants/>}/>
 <Route exact path ="/beneficiaries" render={() => <Beneficiaries/>}/>
 
 </Switch>
 </BrowserRouter>

 </Box>
</div>

 
   
  );
}

export default App;
