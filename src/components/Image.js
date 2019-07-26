import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import mq from '../styles/breakpoints'

const CustomImage = ({ customStyles, alt, fluid = {}, fixed }) => {
  const defaultStyles = {
    width: '100px',
    height: '100px',
  }

  const imageStyles = { ...defaultStyles, ...customStyles }

  const ImageWrapper = styled.div`
    ${mq(imageStyles)}
  `

  return fluid ? (
    <ImageWrapper>
      <Img fluid={fluid} alt={alt} />
    </ImageWrapper>
  ) : (
    // Can not use media queries for styling fixed images
    <Img fixed={fixed} alt={alt} style={imageStyles} />
  )
}

export default CustomImage
