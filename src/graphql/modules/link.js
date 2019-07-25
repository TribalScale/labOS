import { graphql } from 'gatsby'

export const query = graphql`
  fragment LinkFragment on ContentfulLink {
    image {
      ...ImageFragment
    }
    alternateText
    link
    linkText
    callToAction
  }
`
