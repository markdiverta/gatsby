import React from 'react'
import { Link } from 'gatsby'
import Layout from '../component/layout'

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>Please return to <Link to="/">homepage</Link></p>
    </Layout>
  )
}

export default NotFound