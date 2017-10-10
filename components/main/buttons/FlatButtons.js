import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  root: ({
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: '7px'
  }),
  button: {
    margin: theme.spacing.unit,
    borderRadius: '7px'
  }
})

const primary = {
  color: '#EB7323'
}

const error = {
  color: '#CD2328'
}

function FlatButtons (props) {
  const classes = props.classes
  return (
    <div>
      <Paper className={classes.root}>
        <Button style={primary} className={classes.button}>
          Primary
        </Button>
        <Button style={error} className={classes.button}>
          Error
        </Button>
        <Button disabled className={classes.button}>
          Disabled
        </Button>
      </Paper>
    </div>
  )
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FlatButtons)
