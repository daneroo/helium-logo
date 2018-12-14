import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import robotFull from '../images/XRobot.full.png'

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} >
    Regular image:
      <img src={robotFull} alt='XRobot.full' />
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} >
      Using gatsby-image plugin:
      <Image />
    </div>

    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
