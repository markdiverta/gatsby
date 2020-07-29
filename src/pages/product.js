import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../component/layout'

const Heading = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDivertaProducts {
        edges {
          node {
            title
            links
            image {
              file {
                url
              }
            }
            description {
                json
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>About page</h1>
      <p>We combine technology, data insights and a hands-on approach to make your everyday web building experience an easy one.</p>
      <Link to="/"> Back to home page instantly! </Link>
      <ol>
      {data.allContentfulDivertaProducts.edges.map((edge) => {
        return (
          <li>
          <p>{edge.node.title}</p>
          <small>{edge.node.links}</small>
          <img src={edge.node.image.file.url} />
          {documentToReactComponents(edge.node.description.json)}
          </li>
        )
      })}
      </ol>
    </Layout>
  )
}

export default Heading