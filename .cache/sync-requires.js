const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-containers-page-adapter-js": hot(preferDefault(require("/Users/tsd075/workspace/labOS/src/containers/PageAdapter.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tsd075/workspace/labOS/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tsd075/workspace/labOS/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tsd075/workspace/labOS/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/tsd075/workspace/labOS/src/pages/page-2.js")))
}

