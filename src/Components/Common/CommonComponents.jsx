// this is function which will be used in all pages commonly

import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import { useStyles } from '../BodyStyles';
/**
 * PageHeader is a function that takes in two props, label and pageTitle, and returns a grid container
 * with two grid items. The first grid item is a Typography component that displays the label prop, and
 * the second grid item is a Typography component that displays the pageTitle prop.
 * @returns A React component
 */

export const PageHeader = ({label,pageTitle}) => {

    const classes = useStyles()
  return (
    <Grid container>
    <Grid item xs={12} sm={12}>
    <Typography variant="body2" className={classes.pageTitle}>{label}</Typography>
    <Typography variant="h5" component="h5" className={classes.pageSubTitle}>{pageTitle}</Typography>

    </Grid>

    </Grid>
)
}
 