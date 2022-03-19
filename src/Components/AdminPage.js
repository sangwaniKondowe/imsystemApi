import React from 'react'


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {Drawer,AppBar,
  Toolbar,List,CssBaseline,Typography,Divider, 
  IconButton,ListItem, ListItemIcon,ListItemText, Box,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { blue, blueGrey,grey,white } from '@material-ui/core/colors';
import Applicants from './Applicants'
import Beneficiaries from './Beneficiaries'


import Dashboard from './Dashboard';

import AdminLogin from './Login';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root1: {
    flexGrow: 1,
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
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
  fixedHeight: {
    height: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
 
  wrapper:{
    
      padding:theme.spacing(8,6,4,12)
    
  },
  navlinks:{
    color:blueGrey["A400"],
    "& : hover ":{
      color : blue["A400"]
    },
    " & div":{
      color: blue["A400"],
    }
  },
  activeNavlinks:{
    color: grey["A700"],
    "& div" : {
      color: blueGrey["A400"]
    }
  }

}));


function Admin() {
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
    text: "Dashboard",
    icon: <DashboardIcon/>,
    link: "/dashboard"
  },
  // {
  //   text: "Scholarships",
  //   icon: <SchoolIcon/>,
  //   link: "/Scholarships"

  // },
  {
    text: "Applications",
    icon: <PersonIcon />,
    link: "/applications"
  },
  {
    text:"Beneficiaries",
    icon:<PeopleIcon/>,
    link: "/beneficiaries"
  }
]


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
          GLEN FALLY BENEFICIARY MANAGEMENT SYSTEM
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



      {<List>

{itemList.map((item, index) => {
  const {text,icon} = item;

  return (
    <ListItem 
    
     to = {item.link} 
     button key={index}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary = {text} />
    </ListItem>
  )

})} 

</List> }
      
      </Drawer>
      <main className = {classes.content}>

     <Box className = {classes.wrapper}>
   
{/*    
 <Switch>
 
 <Route exact path = "/dashboard" render={() => <Dashboard/>}/>
 <Route exact path ="/applications" render={() => <Applicants/>}/>
 <Route exact path ="/Beneficiaries" render={() => <Beneficiaries/>}/>
 
 </Switch> */}
 

 </Box>
 </main>
</div>

 



    
  )
}

export default Admin