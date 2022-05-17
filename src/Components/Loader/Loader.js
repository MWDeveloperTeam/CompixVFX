import React from 'react'
import styled from 'styled-components'
import loading from '../../Media/loading.gif'

const Loader = () => {
  return (
    <Section>
      <img src={loading} alt="" />
    </Section>
  )
}

export default Loader;

const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`