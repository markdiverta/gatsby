import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../component/layout'
import Head from '../component/head'

const Home = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        edges {
          node {
            title
            date
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home"/>
      <h1>Welcome to Home page!</h1>
      <ol>
      {data.allContentfulBlog.edges.map((edge) => {
        return (
          <li>
          <Link to={`/blog/${edge.node.slug}`}>
          <p>{edge.node.title}</p>
          <small>{edge.node.date}</small>
          </Link>
          </li>
        )
      })}
      </ol>
    </Layout>
  )
}

export default Home