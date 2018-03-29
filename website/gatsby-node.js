/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      
      result.data.allProject.edges.map(({ node }) => {
        createPage({
          // can query data specific to each page.
          path: `/project/${node.slug}/`,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
