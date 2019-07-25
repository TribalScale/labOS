const image = require('./modules/01-image')
const link = require('./modules/02-link')
const copy = require('./modules/03-copy')
const metadata = require('./modules/04-metadata')

const hero = require('./sections/hero')
const header = require('./sections/header')

const page = require('./pages/default')

module.exports = function(migration) {
  // Modules
  image(migration)
  link(migration)
  copy(migration)
  metadata(migration)

  // Sections
  header(migration)
  hero(migration)

  // Pages
  page(migration)
}
