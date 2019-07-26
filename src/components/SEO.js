import React from 'react'
import Helmet from 'react-helmet'

function SEO({ data = {} }) {
  const {
    title = 'defaull title',
    author = 'default author',
    description: { description } = '',
    keywords: { keywords } = '',
    language = 'default language',
    meta = [],
  } = data

  const metadataDescription =
    typeof description === 'undefined' ? 'default description' : description

  const metadataKeywords =
    typeof keywords === 'undefined' ? 'default keywords' : keywords

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={title}
      titleTemplate={`%s | ${'default title'}`}
      meta={[
        {
          name: `description`,
          content: metadataDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metadataDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metadataDescription,
        },
      ]
        .concat(
          metadataKeywords
            ? {
                name: `keywords`,
                content: metadataKeywords,
              }
            : []
        )
        .concat(meta)}
    />
  )
}
export default SEO
