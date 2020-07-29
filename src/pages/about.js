import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../component/layout'

const Heading = () => {
  /*
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        edges {
          node {
            date
            title
          }
        }
      }
    }
  `)
  */
  return (
    <Layout>
      <h1>About page</h1>
      <p>We combine technology, data insights and a hands-on approach to make your everyday web building experience an easy one.</p>
      <Link to="/"> Back to home page instantly! </Link>
      {/*
      <ol>
      {data.allContentfulBlog.edges.map((edge) => {
        return (
          <li>
          <p>{edge.node.title}</p>
          <small>{edge.node.date}</small>
          </li>
        )
      })}
      </ol>
      */}
    </Layout>
  )
}

export default Heading