import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({data}) => {
  const { page } = data;

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      />
      <div className="card">
        <p>We love to do stuff that make people happy.</p>
        <Link to="/" className="button">
          our Projects
        </Link>
      </div>          
    </div>
  )
}

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    page(slug: { eq: "about" }) {
      title
      content
    }
  }
`