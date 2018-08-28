import * as React from 'react'
import styled from 'styled-components'

function Searchbar(){
  return (
    <div>
      <StyledInput placeholder="Recherchez un artiste, une playlist, une musique, ..." />
    </div>
  )
}

const StyledInput = styled.input `
  width: 100%;
  padding: 10px 20px;
  background: #f2f2f2;
  border: 0;
  border-radius: 3px;
  font-size: 1.6rem;
`

export default Searchbar
