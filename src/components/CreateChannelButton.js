import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
const { colors } = theme

const CreateChannelButton = () => {
  const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .8rem;
    overflow: hidden;
  `
  const Input = styled.input`
    font-size: 1.7rem;
    width: calc(100% - 2rem);
    border-radius: 0;
  `

  const Submit = styled.button`
    font-size: 2rem;
    width: 5rem;
    height: 100%;
    border-radius: 0;
    background-color: #ccc;
  `

  return (
    <Form>
      <Input type="text" placeholder="Create your own channel" />
      <Submit type="submit">+</Submit>
    </Form>
  )
}

export default CreateChannelButton
