const get = require("lodash/get");

module.exports = (pages, pageComponent) =>
  pages.map(page => ({
    path: get(page, "node.slug"),
    component: pageComponent,
    context: {
      pageId: get(page, "node.contentful_id")
    }
  }));
