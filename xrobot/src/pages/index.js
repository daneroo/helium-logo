import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/logo'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
    <h1>Hey team!</h1>
    <p>Say hello to expandable robot.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Logo />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
