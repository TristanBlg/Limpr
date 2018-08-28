import * as React from 'react'
import styled from 'styled-components'
import {LogoSvg} from '../images/SvgSprite'

function Logo(){
  return (
    <React.Fragment>
      <StyledLogoSvg>
        <LogoSvg width="80" />
      </StyledLogoSvg>
    </React.Fragment>
  )
}

const StyledLogoSvg = styled.div `
  margin: 20px 0 40px 20px;
  display: block;
  color: #a29bfe;
  font-family: 'Hind-Bold';
  font-size: 44px;
`

export default Logo
