import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Card from '../components/Card';

const ProjectTemplate = ({data}) => {
  const { project } = data;
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
      <Card paragraph="We love to do stuff that make people happy." btnUrl="Home" btnText="More about us" />
    </div>
  );
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