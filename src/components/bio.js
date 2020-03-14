/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`
      }}
    >
      <p>
        <strong>{author.name}</strong> is a
        <div>{author.summary}</div>
        {` `}
      </p>
      <div>Connect on <a href="https://github.com/craigpalermo">GitHub</a> and <a
        href="https://www.linkedin.com/in/craig-palermo-58858859/">LinkedIn</a></div>
    </div>
  )
}

export default Bio
