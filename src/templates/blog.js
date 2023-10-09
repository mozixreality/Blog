import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug} }){
            frontmatter {
                title
                subtitle
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h2>{props.data.markdownRemark.frontmatter.subtitle}</h2>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <hr style={{
                backgroundImage: 'linear-gradient(to right, #f0f0f0, #000000, #f0f0f0)',
            }}/>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog