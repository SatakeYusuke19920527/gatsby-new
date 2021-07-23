import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from '../components/hero'
import PostLink from '../components/post-link'
import Footer from '../components/footer'
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost{
        edges{
          node{
            title,
            slug,
            image{
              file{
                url
              }
            }
            body{
              body
            }
            description{
              description
            },
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="ProAca" description="ProgrammingAcademy" />
      <Hero />
      <div>
        <Link to='/fundraising'>Fundraising</Link>
      </div>
      {
        data.allContentfulPost.edges.map((edge,index) => {
          return (
            <PostLink
              key={index}
              title={edge.node.title}
              description={edge.node.description.description}
              updatedAt={edge.node.updatedAt}
              slug={edge.node.slug}
              image={edge.node.image.file.url}
            />
          )
        })
      }
    <Footer />
  </Layout>
  )
}

export default IndexPage
