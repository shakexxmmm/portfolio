import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "./common.scss"
import PostList from "../components/works/PostList"

// markup
const WorksPage = (props) => {
  const posts = props.data.allMicrocmsWorks.nodes
  return (
    <Layout>
      <Helmet>
        <title>works | mmm's site</title>
        <meta
          name="description"
          content="shakexxmmmのポートフォリオです。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
      </Helmet>
      <PostList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsWorks {
      nodes {
        title
        description
        detail
        thumbnail {
          url
        }
        slug
      }
    }
  }
`

export default WorksPage