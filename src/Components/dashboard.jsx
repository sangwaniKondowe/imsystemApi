import React from 'react'
import useStyles from './Styles/DashboardStyles'

function dashboard () {
    const classes = useStyles;
    return (
        <div className={classes.root}>
            Hello dashboard
        </div>
    )
}

export default dashboard
