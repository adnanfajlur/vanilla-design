import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import SaveIcon from 'material-ui-icons/Save'
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

const primary = {
  background: '#EB7323',
  color: 'white'
}

const error = {
  background: '#CD2328',
  color: 'white'
}

function FloatingActionButtons (props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root}>
        <Button fab style={primary} aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
        <Button fab style={primary} aria-label="edit" className={classes.button}>
          <ModeEditIcon />
        </Button>
        <Button fab style={error} aria-label="delete" className={classes.button}>
          <DeleteIcon />
        </Button>
        <Button fab style={primary} aria-label="more vert" className={classes.button}>
          <MoreVertIcon />
        </Button>
        <Button fab style={primary} aria-label="save" className={classes.button}>
          <SaveIcon />
        </Button>
      </Paper>
    </div>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FloatingActionButtons)
