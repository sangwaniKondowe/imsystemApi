import React from 'react'
import {useStyles} from './StudentBodyStyle'

import clsx from 'clsx';
import {AppBar,Toolbar,IconButton,Typography, Button} from '@material-ui/core'

function StudentPage() {
  const classes = useStyles()
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
          GLEN FALLY Scholarship
          </Typography>
        </Toolbar>
        
      </AppBar>
    </div>
  )
}

export default StudentPage