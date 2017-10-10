import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import NotificationsIcon from 'material-ui-icons/Notifications'
import SearchIcon from 'material-ui-icons/Search'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  appBar: {
    backgroundColor: '#F2F2F2'
  },
  flex: {
    flex: 1,
    color: '#7B7B7B'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#7B7B7B'
  },
  button: {
    color: '#7B7B7B'
  }
})

function ButtonAppBar (props) {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" className={classes.flex}>
            Xcidic
          </Typography>
          <IconButton className={classes.button}>
            <SearchIcon />
          </IconButton>
          <IconButton className={classes.button}>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
