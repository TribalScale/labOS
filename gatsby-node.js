const path = require('path')
const get = require('lodash/get')

const createPagesObjects = require('./src/gatsbyHelpers/pages')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const PageAdapter = path.resolve(`./src/containers/PageAdapter.js`)

  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            slug
            contentful_id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    } else {
      const pages = get(result, 'data.allContentfulPage.edges', [])
      const pageObjects = createPagesObjects(pages, PageAdapter)

      console.log('TCL: exports.createPages -> pages', pageObjects)

      return pageObjects.map(pageObject => createPage(pageObject))
    }
  })
}
