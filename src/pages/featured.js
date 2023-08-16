import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import featuredStyles from '../styles/featured.module.scss'

const FeaturedPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(
                sort: {fields: frontmatter___date order: DESC}
            ){
                edges{
                    node{
                        frontmatter{
                            title
                            date
                            category
                            featuredImage
                        }
                        excerpt(format: PLAIN, truncate: true)
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Featured</h1>
            <ol className={featuredStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={featuredStyles.post}>
                            <Link to={`/featured/${edge.node.fields.slug}`}>
                                <div className={featuredStyles.post_horizontal}>
                                    <h4>{edge.node.frontmatter.date}</h4>
                                    <p>[{edge.node.frontmatter.category}]</p>
                                </div>
                                <div className={featuredStyles.post_horizontal}>
                                    <div className={featuredStyles.post_vertical}>
                                        <h2>{edge.node.frontmatter.title}</h2>
                                        <p>{edge.node.excerpt}</p>
                                    </div>
                                    {edge.node.frontmatter.featuredImage == null ? null : <img className={featuredStyles.post_img} src={edge.node.frontmatter.featuredImage} alt="featured-img"/> }
                                    
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default FeaturedPage;

