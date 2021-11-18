import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
const { colors } = theme;

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 3rem;
  min-height: 100vh;
  background-color: palegoldenrod;
`

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      
      

    </Container>
  )
}

export default App
