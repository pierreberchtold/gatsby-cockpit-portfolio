import React from 'react';
import Link from 'gatsby-link';

const Card = ({ paragraph, btnText, btnUrl }) => (
  <div className="card">
    <p>{paragraph}</p>
    <Link to={btnUrl} className="button">
      {btnText}
    </Link>
  </div>    
);

export default Card;