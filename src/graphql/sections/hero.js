import { graphql } from 'gatsby'

export const query = graphql`
  fragment HeroFragment on ContentfulHero {
    contentInfo {
      ...CopyFragment
    }
    backgroundImage {
      ...ImageFragment
    }
  }
`
