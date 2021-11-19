import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark[400]};
  padding: 1.5rem 2rem;
  border-radius: .8rem;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;
`

const Input = styled.input`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  padding: 0;
  background-color: ${colors.dark[400]};
  color: ${colors.white};
`

const GreenDot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #56D296;
  border-radius: 50%;
  margin-top: 5px;
  margin-left: 5px;
`

const User = () => {
  const [name, setName] = useState('Anonymous')

  //unselect input on key enter press
  const unselect = (e) => {
    if(e.key === "Enter") {
      e.target.blur();
    }
  }

  return (
    <Container>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyPress={unselect}/>
      <GreenDot />
    </Container>
  )
}

export default User