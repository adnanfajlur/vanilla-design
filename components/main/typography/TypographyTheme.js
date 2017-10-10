import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

function theme (outerTheme) {
  return createMuiTheme({
    'typography': {
      'headline': {
        fontWeight: '300',
        lineHeight: '32px',
        fontSize: '60px',
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: '0em'
      },
      'display4': {
        fontWeight: '300',
        lineHeight: 'normal',
        fontSize: '43px',
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: '0em'
      },
      'display3': {
        fontWeight: '600',
        lineHeight: 'normal',
        fontSize: '43px',
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: '0em'
      },
      'body1': {
        fontWeight: 'normal',
        lineHeight: 'normal',
        fontSize: '40px',
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: '0em'
      },
      'button': {
        fontWeight: '300',
        lineHeight: 'normal',
        fontSize: '40px',
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: '0em'
      },
      'title': {
        fontWeight: '300',
        lineHeight: 'normal',
        fontSize: '36px',
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: '0em'
      },
      'caption': {
        fontWeight: '300',
        lineHeight: 'normal',
        fontSize: '30px',
        color: 'rgba(0, 0, 0, 0.87)',
        letterSpacing: '0em'
      }
    }
  })
}

const styles = theme => ({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20,
    borderRadius: '7px'
  }
})

function TypographyTheme (props) {
  const classes = props.classes
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Paper className={classes.root}>
          <Typography type="headline" gutterBottom>
            Headline (headline)
          </Typography>
          <Divider />
          <Typography type="display4" gutterBottom>
            Menu Title (display4)
          </Typography>
          <Divider />
          <Typography type="display3" gutterBottom>
            Table Title (display3)
          </Typography>
          <Divider />
          <Typography type="body1" gutterBottom>
            Body Field (body1)
          </Typography>
          <Divider />
          <Typography type="button" gutterBottom>
            Button (button)
          </Typography>
          <Divider />
          <Typography type="title" gutterBottom>
            Title (title)
          </Typography>
          <Divider />
          <Typography type="caption" gutterBottom>
            Caption (caption)
          </Typography>
        </Paper>
      </div>
    </MuiThemeProvider>
  )
}

TypographyTheme.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TypographyTheme)
