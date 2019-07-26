import { graphql } from 'gatsby'

export const query = graphql`
  fragment MetadataFragment on ContentfulMetadata {
    title
  }
`
