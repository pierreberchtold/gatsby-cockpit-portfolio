import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import CockpitLayout from '../components/CockpitLayout';

const IndexPage = ({data}) => {
  const { page, projects } = data;
console.log(page);

  return (
    <div>
      <CockpitLayout
          layout={page.content_parsed}
          data={{ projects }}
        />      
    </div>
  )
}


export default IndexPage;

export const query = graphql`
  query HomeQuery {
    page(slug: { eq: "home" }) {
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