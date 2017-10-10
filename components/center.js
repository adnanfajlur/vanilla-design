import React from 'react'
import PropTypes from 'prop-types'

const Center = ({ children, grow, shrink, basis }) => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      padding: '32px',
      width: '100%'
    }}
  >
    {React.cloneElement(children, {
      style: {
        flexGrow: grow ? 1 : 0,
        flexShrink: shrink ? 1 : 0,
        flexBasis: basis
      }
    })}
  </div>
)

Center.propTypes = {
  children: PropTypes.element.isRequired,
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
  basis: PropTypes.string
}

Center.defaultProps = {
  grow: false,
  shrink: false,
  basis: 'auto'
}

export default Center
