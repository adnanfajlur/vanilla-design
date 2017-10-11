import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import green from 'material-ui/colors/green'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox'

const styles = {
  root: {
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: '7px'
  },
  tes1: {
    marginLeft: 21,
    marginRight: 21
  },
  checked: {
    color: green[500]
  }
}

class Checkboxes extends React.Component {
  state = {
    checkedA: true,
    checkedB: false,
    checkedF: true,
    checkedG: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  };

  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <div className={classes.tes1}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA"
                />
              }
              label="Option A"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChange('checkedB')}
                  value="checkedB"
                />
              }
              label="Option B"
            />
            <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
            <FormControlLabel
              disabled
              control={<Checkbox checked value="checkedE" />}
              label="Disabled"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedF}
                  onChange={this.handleChange('checkedF')}
                  value="checkedF"
                  indeterminate
                />
              }
              label="Indeterminate"
            />
          </FormGroup>
        </div>
      </Paper>
    )
  }
}

Checkboxes.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Checkboxes)
