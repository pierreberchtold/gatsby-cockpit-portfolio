import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

const ProjectTemplate = ({data}) => {
  const { project } = data
  return (
    <div>      
      <div className="project">
        <Img sizes={project.preview.localFile.childImageSharp.sizes} className="project__header" />
        <h1>{project.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: project.content,
          }}
        />    
      </div>
      <div className="card">
        <p>We love to do stuff that make people happy.</p>
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/about" className="button">
          More about us
        </Link>
      </div>  
    </div>
  )
}

export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    project(slug: { eq: $slug }) {
      title
      content
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
`