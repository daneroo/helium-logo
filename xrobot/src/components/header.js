import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { irdetoPurple, irdetoGreen } from './irdeto-colors'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: irdetoPurple, // irdeto purple
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: irdetoGreen,
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
