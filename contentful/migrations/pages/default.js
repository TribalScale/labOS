module.exports = function(migration) {
  const Page = migration
    .createContentType('page')
    .name('Page')
    .displayField('slug')

  Page.createField('slug')
    .type('Symbol')
    .name('Slug')
    .validations([
      {
        regexp: {
          pattern: '((?:[^/]*/)*)(.*)',
        },
      },
    ])
    .required(true)
  Page.createField('sections')
    .type('Array')
    .name('Sections')
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['metadata', 'hero', 'header'],
        },
      ],
      linkType: 'Entry',
    })
    .required(true)
}
