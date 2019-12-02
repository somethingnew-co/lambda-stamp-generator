import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import lambdaLogo from 'assets/images/Logo.svg'

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;

  border-bottom: 1px solid #cccccc;
`

const Logo = styled.img`
  padding: 10px 100px;
  height: 100%;
  width: auto;
`

const Header = () => (
  <HeaderContainer>
    <Logo src={lambdaLogo} />
  </HeaderContainer>
)

Header.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
}

export { Header }
