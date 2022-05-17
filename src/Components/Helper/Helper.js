import React from 'react'
import styled from 'styled-components'

const Helper = () => {
  return (
    <Section></Section>
  )
}

export default Helper

const Section = styled.section`
width: 100%;
height: 7rem;
background-color: transparent;

@media only screen and (max-width: 1024px){
    height: 6rem;
}
`