import { graphql } from 'gatsby'

export const query = graphql`
  fragment ImageFragment on ContentfulImage {
    title
    description {
      description
    }
    alternateText {
      alternateText
    }
    image {
      title
      description
      file {
        url
      }
      fixed(quality: 100) {
        ...GatsbyContentfulFixed_withWebp_noBase64
      }
      fluid(quality: 100, maxWidth: 1440) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
  }
`
