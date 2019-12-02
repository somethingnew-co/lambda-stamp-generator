import React from 'react'
import styled from '@emotion/styled'
import { Generator } from 'components/generator'
import { Header } from 'components/header'

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const Home = () => (
  <HomeContainer>
    <Header />
    <Generator />
  </HomeContainer>
)

export { Home }
