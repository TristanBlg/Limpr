import React from 'react'
import styled from 'styled-components'

const ProfilePic = () => {
  return (
    <React.Fragment>
      <StyledProfilePic>
      </StyledProfilePic>
    </React.Fragment>
  )
}

const StyledProfilePic = styled.div `
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 3px solid #a29bfe;
  background: #c8c8c8
`

export default ProfilePic
