import * as React from 'react'
import {connect} from 'react-redux'
import {toggleFullScreen, togglePlaying} from '../actions'
import styled from 'styled-components'
import {AddSvg, PlaySvg, PrevSvg, NextSvg, FullScreenSvg, PauseSvg} from '../images/SvgSprite'

export function ControlBar(props){
  const {isPlaying, toggleFullScreen, togglePlaying} = props
  const iconSize = 24

  return (
    <StyledControl>
      <StyledControlBtn>
        <AddSvg height={iconSize} width={iconSize}/>
      </StyledControlBtn>
      <div>
        <StyledControlBtn>
          <PrevSvg height={iconSize} width={iconSize}/>
        </StyledControlBtn>
        {<StyledControlBtn play onClick={togglePlaying}>
          {isPlaying ? (
            <PauseSvg height={iconSize} width={iconSize}/>
          ) : (
            <PlaySvg height={iconSize} width={iconSize}/>
          )}
        </StyledControlBtn>}
        <StyledControlBtn>
          <NextSvg height={iconSize} width={iconSize}/>
        </StyledControlBtn>
      </div>
      <StyledControlBtn onClick={toggleFullScreen}>
        <FullScreenSvg height={iconSize} width={iconSize}/>
      </StyledControlBtn>
    </StyledControl>
  )
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleFullScreen: () => {
      dispatch(toggleFullScreen())
    },
    togglePlaying: () => {
      dispatch(togglePlaying())
    },
  }
}

const StyledControl = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`
const StyledControlBtn = styled.button `
  border: ${(props) => props.play ? '2px solid #bdbdbd' : 'none'};
  padding: ${(props) => props.play ? '10px' : '0'};
  border-radius: ${(props) => props.play && '50%'};
  margin: ${(props) => props.play && '0 20px'};
  background: none;
`

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar)