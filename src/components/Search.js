import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
const { colors } = theme 

const Search = () => {

  const Form = styled.form`
    
  `

  const Input = styled.input`
    width: 100%;
    font-size: 1.7rem;
    border: 0;
    outline: 0;
  `

  return (
    <Form>
      <Input type="search" placeholder="Search..."/> 
    </Form>
  )
}

export default Search
