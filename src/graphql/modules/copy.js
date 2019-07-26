import { graphql } from 'gatsby'

export const copy = graphql`
  fragment CopyFragment on ContentfulCopy {
    title
    text {
      text
    }
    link {
      ...LinkFragment
    }
  }
`
