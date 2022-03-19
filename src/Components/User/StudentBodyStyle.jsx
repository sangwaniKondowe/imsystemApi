
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({

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

}))