import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

// import HeroSection from '../containers/'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const DefaultComponent = () => <></>

const modelComponentMap = {
  // ContentfulHero: HeroSection,
  ContentfulMetadata: SEO,
  undefined: DefaultComponent,
}

const PageAdapter = ({ data = [] }) => {
  const sectionsList = get(data, 'contentfulPage.sections', [])

  const hasMetadata = sectionsList.some(
    section => section.__typename === 'ContentfulMetadata'
  )

  !hasMetadata && sectionsList.push({ __typename: 'ContentfulMetadata' })

  const sections =
    sectionsList &&
    sectionsList.map((section, index) => {
      const SectionComponent = get(
        modelComponentMap,
        `${section.__typename}`,
        DefaultComponent
      )
      const Section = SectionComponent({
        data: section,
      })
      return (
        <React.Fragment key={`${section.__typename}-${index}`}>
          {Section}
        </React.Fragment>
      )
    })

  return <Layout>{sections}</Layout>
}

export default PageAdapter

export const pageQuery = graphql`
  query ContentfulPage($pageId: String!) {
    contentfulPage(contentful_id: { eq: $pageId }) {
      sections {
        __typename
        ...HeroFragment
        ...MetadataFragment
      }
    }
  }
`
