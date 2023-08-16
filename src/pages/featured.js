import React from 'react'
import { useState } from 'react';
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
    const posts_per_page = 5;
    const [posts_num, set_posts_num] = useState(data.allMarkdownRemark.edges.length);
    const [cur_page, set_cur_page] = useState(1);
    const [filted_data, set_filted_data] = useState(data.allMarkdownRemark.edges);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let filter = event.target.value
            let tmp_data = []
            data.allMarkdownRemark.edges.map((edge) => {
                if(edge.node.frontmatter.title.includes(filter)){
                    tmp_data.push(edge)
                }
                return null
            })
            set_posts_num(tmp_data.length)
            set_cur_page(1);
            set_filted_data(tmp_data)
        }
    };

    return (
        <Layout>
            <h1>Featured</h1>
            查詢標題  
            <input
                type="text" 
                style={{marginLeft: 10}}
                onKeyDown={handleKeyDown}
            />
            <ol className={featuredStyles.posts}>
                {filted_data.map((edge, idx) => {
                    if(idx >= (cur_page-1) * posts_per_page && idx < cur_page * posts_per_page){
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
                                        {
                                            edge.node.frontmatter.featuredImage == null ? 
                                            <img className={featuredStyles.post_img} src="https://i.imgur.com/AaVdU5l.jpg" alt="no img"/> : 
                                            <img className={featuredStyles.post_img} src={edge.node.frontmatter.featuredImage} alt="featured img"/> 
                                        }
                                        
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                    return null;
                })}
            </ol>
            <div style={{height: 40}}>
                { cur_page > 1 ?
                    <button className={featuredStyles.btn} style={{float: 'left'}} variant="outline-info" onClick={() => {
                        set_cur_page(cur_page-1);
                    }}>Previous Page</button>: null }

                { cur_page*posts_per_page < posts_num ? 
                    <button className={featuredStyles.btn} style={{float: 'right'}} onClick={() => {
                        set_cur_page(cur_page+1);
                    }}>Next Page</button>: null }
            </div>

            <p style={{textAlign: 'center'}}>{cur_page} of total {Math.floor(posts_num / posts_per_page) + ((posts_num % posts_per_page) !== 0) } pages</p>
        </Layout>
    )
}

export default FeaturedPage;

