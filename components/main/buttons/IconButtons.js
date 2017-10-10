import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'
import DeleteIcon from 'material-ui-icons/Delete'
import NotificationsIcon from 'material-ui-icons/Notifications'
import SearchIcon from 'material-ui-icons/Search'
import ContentCopyIcon from 'material-ui-icons/ContentCopy'
import PermIdentityIcon from 'material-ui-icons/PermIdentity'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  root: ({
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: '7px'
  }),
  button: {
    margin: theme.spacing.unit
  }
})

function IconButtons (props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root}>
        <IconButton className={classes.button} >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton className={classes.button} >
          <DeleteIcon />
        </IconButton>
        <IconButton className={classes.button} >
          <NotificationsIcon />
        </IconButton>
        <IconButton className={classes.button} >
          <SearchIcon />
        </IconButton>
        <IconButton className={classes.button} >
          <ContentCopyIcon />
        </IconButton>
        <IconButton className={classes.button} >
          <PermIdentityIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IconButtons)
