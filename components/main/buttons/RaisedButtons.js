import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {} from 'material-ui/colors'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  root: {
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: '7px'
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: '7px'
  },
  input: {
    display: 'none'
  }
})

const primary = {
  background: '#EB7323',
  color: 'white'
}

const error = {
  background: '#CD2328',
  color: 'white'
}

function RaisedButtons (props) {
  const classes = props.classes
  return (
    <div>
      <Paper className={classes.root}>
        <Button raised style={primary} className={classes.button}>
          Primary
        </Button>
        <Button raised style={error} className={classes.button}>
          Error
        </Button>
        <Button raised disabled className={classes.button}>
          Disabled
        </Button>
      </Paper>
    </div>
  )
}

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RaisedButtons)
