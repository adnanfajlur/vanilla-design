import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Badge from 'material-ui/Badge'
import NotificationsIcon from 'material-ui-icons/Notifications'
import MailIcon from 'material-ui-icons/Mail'
import FolderIcon from 'material-ui-icons/Folder'

const styles = theme => ({
  root: {
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: '7px',
    display: 'flex'
  },
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
})

function SimpleBadge (props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root}>
        <Badge className={classes.badge} badgeContent={1} color="primary">
          <NotificationsIcon />
        </Badge>
        <Badge className={classes.badge} badgeContent={1} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.badge} badgeContent={1} color="primary">
          <FolderIcon />
        </Badge>
      </Paper>
    </div>
  )
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleBadge)
