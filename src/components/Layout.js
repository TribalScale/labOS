import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import mq from '../styles/breakpoints'

import Footer from './Footer'
import Header from './Header'

const LayoutWrapper = styled.div`
  ${mq({
    margin: 'auto',
  })}
`

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    {children}
    <Footer />
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
