import * as React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Searchbar from '../components/SearchBar'

function Header(){
  return (
    <StyledHeader>
      <div className="container">
        <Searchbar/>
      </div>
      <Nav/>
    </StyledHeader>
  )
}

const StyledHeader = styled.header `
  background: #fff;
  color: #4f4f4f;
  box-shadow: 0 0 10px rgba(0, 0, 0, .05);
  display: flex;
  justify-content: space-between;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 20px;
`

export default Header
