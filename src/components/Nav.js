import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ProfilePic from './ProfilePic'

const Nav = () => {
  return (
    <StyledNav to="/profile">
      <ProfilePic/>
    </StyledNav>
  )
}

const StyledNav = styled(Link) `
  position: absolute;
  top: 20px;
  right: 20px;
`

export default Nav
