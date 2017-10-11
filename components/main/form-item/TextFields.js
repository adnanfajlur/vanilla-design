import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  root: ({
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: '7px'
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: 5,
    marginRight: 5,
    width: 200
  },
  tes1: {
    marginLeft: 21,
    marginRight: 21
  },
  menu: {
    width: 200
  }
})

const alphabet = [
  {
    value: 'a',
    label: 'Alphabet A'
  },
  {
    value: 'b',
    label: 'Alphabet B'
  },
  {
    value: 'c',
    label: 'Alphabet C'
  },
  {
    value: 'd',
    label: 'Alphabet D'
  }
]

class TextFields extends React.Component {
  state = {
    name: 'Bodytext',
    age: '',
    multiline: 'Bodytext bodytext bodytext bodytext bodytext bodytext bodytext',
    alphabet: 'C',
    none: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  };

  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <div className={classes.tes1}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Placeholder"
              className={classes.textField}
              value={this.state.none}
              onChange={this.handleChange('none')}
              margin="normal"
            />
            <TextField
              error
              id="error"
              label="Error"
              value={this.state.name}
              onChange={this.handleChange('name')}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <TextField
              id="multiline-flexible"
              label="Multiline"
              multiline
              rowsMax="5"
              value={this.state.multiline}
              onChange={this.handleChange('multiline')}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="helperText"
              label="Helper text"
              value={this.state.name}
              className={classes.textField}
              onChange={this.handleChange('name')}
              helperText="Important text"
              margin="normal"
            />
            <TextField
              id="select-alphabet"
              select
              label="Select"
              className={classes.textField}
              value={this.state.alphabet}
              onChange={this.handleChange('alphabet')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Select the alphabet"
              margin="normal"
            >
              {alphabet.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="name"
              label="Disabled"
              className={classes.textField}
              value={this.state.none}
              onChange={this.handleChange('none')}
              margin="normal"
              disabled
            />
            <TextField
              id="full-width"
              label="Label"
              value={this.state.multiline}
              onChange={this.handleChange('multiline')}
              helperText="Full width!"
              fullWidth
              margin="normal"
            />
          </form>
        </div>
      </Paper>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
