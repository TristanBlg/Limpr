import * as React from 'react'
import styled from 'styled-components'
import {LogoSvg} from '../images/SvgSprite'

export function Logo(){
  const iconSize = 80

  return (
    <React.Fragment>
      <StyledLogoSvg>
        <LogoSvg width={iconSize} />
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
