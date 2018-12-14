import PropTypes from 'prop-types'
import React from 'react'

const styles = {
  head: {
    fill: '#5D176A',
    // fill: 'none',
    stroke: '#5D176A',
    strokeWidth: '30px',
    strokeLinejoin: 'round'
  },
  antenna: { fill: '#AEBF1E', stroke: '#5D176A', strokeWidth: '20px' },
  eye: { fill: '#AEBF1E' },
  mouth: {
    fill: 'none',
    // <!-- stroke: #5D176A; -->
    stroke: '#AEBF1E',
    strokeWidth: '20px',
    strokeLinejoin: 'round'
  },
  green: { fill: '#AEBF1E' },
  purple: {
    fill: '#5D176A',
    stroke: '#5D176A',
    strokeWidth: '40px',
    strokeLinejoin: 'round'
  },
  whitemask: {
    fill: '#fff',
    stroke: '#fff',
    strokeWidth: '50px',
    strokeLinejoin: 'round'
  },
  blackmask: {
    fill: '#000',
    stroke: '#000',
    strokeWidth: '50px',
    strokeLinejoin: 'round'
  }

}

const Antenna = ({ T }) => {
  return (
    <g style={styles.antenna} transform={`${T}`}>
      <path d='M0,56 0,0' />
      <circle r='20' />
    </g>
  )
}

const Eye = ({ T }) => {
  return (
    <circle style={styles.eye} cx={0} cy={0} r={20} transform={`${T}`} />
  )
}

const Head = () => {
  return (
    <polygon style={styles.head} points='-150,100, 150,100, 150,-100, -150,-100' />
  )
}

const WholeHead = ({ T }) => {
  return (
    <g transform={`${T}`}>
      <Head />
      <Mouth class='mouth' T='translate( 0,40)' />

      <Eye T='translate( 60,-30)' />
      <Eye T='translate(-60,-30)' />

      <Antenna T='translate(0,-170)' />
    </g>
  )
}

const Mouth = ({ T }) => {
  return (
    <path style={styles.mouth} d='M-60,0 Q0,30 60,0' transform={`${T}`} />
  )
}

const Square = ({ T }) => {
  return (
    <polygon points='-100,100, 100,100, 100,-100, -100,-100' transform={`${T}`} />
  )
}

const Losange = ({ S = styles.purple, T, mask = '' }) => {
  return (
    <g style={S} transform={`${T}`} mask={mask}>
      <Square T='scale(.707) scale(.866,.5) rotate(45)' />
    </g>
  )
}

// const Hex = () => (
//   <polygon points='0,100 86.6,50 86.6,-50 0,-100 -86.6,-50 -86.6,50' />
// )

const Logo = ({ param }) => (
  <div style={{}} >
    <svg width='512' height='512'>

      <defs>
        <mask id='mask'>
          <Losange S={styles.whitemask} />
          <Losange S={styles.blackmask} T='translate(0,-40)' />
        </mask>
      </defs>

      <g transform='translate(256,256)' >

        <g transform='scale(1.536) translate(0,70)' >
          <g transform='scale(.75) translate(0,50)' >
            <Losange class='purple' mask='url(#mask)' />
          </g>
          <g transform='scale(.85) translate(0,-3.5)'>
            <Losange class='purple' mask='url(#mask)' />
          </g>
          <g transform='scale(.95) translate(0, -50)' >
            <Losange />
            <Losange S={styles.green} T='scale(.333) translate(100,0)' />
          </g>

          <WholeHead T='translate(0, -140) scale(.40)' />

        </g>

      </g>

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
