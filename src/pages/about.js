import React from 'react'
import Link from 'gatsby-link'
import CockpitLayout from '../components/CockpitLayout';

const AboutPage = ({data}) => {
  const { page, projects } = data;

  return (
    <div>
      <CockpitLayout
          layout={page.content_parsed}
          data={{ projects }}
        />      
    </div>
  )
}

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    page(slug: { eq: "about" }) {
      title
      content_parsed
    }
    projects: allProject {
      edges {
        node {
          slug
          title
          preview {
            localFile {
              childImageSharp {
                sizes(maxWidth: 900, quality: 90) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`