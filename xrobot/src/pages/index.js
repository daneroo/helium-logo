import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { XRobot } from '@daneroo/ir-logo'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <XRobot />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
