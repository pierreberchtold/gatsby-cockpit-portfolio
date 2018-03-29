import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const ProjectGrid = ({ projects }) => (
  <ul className="project-grid">
    {projects.edges.map(({ node }, index) => (
      <li key={node.slug}  className={`project-item project-${index%3 + 1}`}>
        <Link to={`project/${node.slug}`} className="project-item__inner">
          <Img sizes={node.preview.localFile.childImageSharp.sizes} className="project-item__image" />
          <h3 className="project-item__title">{node.title}</h3>
        </Link>
      </li>
    ))} 
  </ul>
);

export default ProjectGrid;
