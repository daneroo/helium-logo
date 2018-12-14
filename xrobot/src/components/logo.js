import PropTypes from 'prop-types'
import React from 'react'

// import { irdetoPurple, irdetoGreen } from './irdeto-colors'

const Logo = ({ param }) => (
  <div style={{ }} >
    <svg>
      <circle cx={50} cy={50} r={10} fill='red' />
    </svg>
  </div>
)

Logo.propTypes = {
  siteTitle: PropTypes.string
}

Logo.defaultProps = {
  siteTitle: ''
}

export default Logo
