const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      components: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(components)/" } }
      ) {
        nodes {
          id
          frontmatter {
            identifier
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    result.data.components.nodes.forEach((node) => {
      createPage({
        path: `/components/${node.frontmatter.identifier}`,
        component: path.resolve(`src/templates/ComponentTemplates.js`),
        context: { id: node.id },
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
