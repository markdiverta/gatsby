import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../component/layout'

export const query = graphql`
    query ($slug: String!) {
        contentfulBlog (slug: {eq: $slug}) {
            title
            date
            slug
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
  const options = {
      renderNode: {
          "embedded-asset-block": (node) => {
              const alt = node.data.target.fields.title['en-US']
              const url = node.data.target.fields.file['en-US'].url
              return <img src={url} alt={alt} />
          }
      }
  }

  return (
    <Layout>
        <h1>{props.data.contentfulBlog.title}</h1>
        <p>{props.data.contentfulBlog.date}</p>
        {documentToReactComponents(props.data.contentfulBlog.body.json, options)}
    </Layout>
  )
}

export default Blog