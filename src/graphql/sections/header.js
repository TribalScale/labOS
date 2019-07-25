import { graphql } from 'gatsby'

export const query = graphql`
  fragment HeaderFragment on ContentfulHeader {
    logoLink {
      ...LinkFragment
    }
    navbar {
      ...LinkFragment
    }
  }
`
