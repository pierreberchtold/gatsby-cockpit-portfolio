// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-project-js": preferDefault(require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/src/templates/project.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "project-summer-escape.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/project-summer-escape.json"),
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "project-a-chairlift-in-the-mountains.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/project-a-chairlift-in-the-mountains.json"),
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "project-cable-car-peace.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/project-cable-car-peace.json"),
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "404.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/404.json"),
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "about.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/about.json"),
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/index.json"),
  "layout-index.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/Pierre/Dev/gatsby-cockpit-portfolio/.cache/json/404-html.json")
}