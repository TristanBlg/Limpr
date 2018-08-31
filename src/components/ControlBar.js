import * as React from 'react'
import {connect} from 'react-redux'
import {toggleFullScreen, togglePlaying} from '../actions'
import styled from 'styled-components'
import {AddSvg, PlaySvg, PrevSvg, NextSvg, FullScreenSvg, NotFullScreenSvg, PauseSvg} from '../images/SvgSprite'

export function ControlBar(props){
  const {fullScreen, nowPlaying, toggleFullScreen, togglePlaying} = props
  const iconSize = 24

  return (
    <StyledControl>
      <StyledBtn>
        <AddSvg height={iconSize} width={iconSize}/>
      </StyledBtn>
      <div>
        <StyledBtn>
          <PrevSvg height={iconSize} width={iconSize}/>
        </StyledBtn>
        {<StyledBtn play onClick={togglePlaying}>
          {nowPlaying ? (
            <PauseSvg height={iconSize} width={iconSize}/>
          ) : (
            <PlaySvg height={iconSize} width={iconSize}/>
          )}
        </StyledBtn>}
        <StyledBtn>
          <NextSvg height={iconSize} width={iconSize}/>
        </StyledBtn>
      </div>
      <StyledBtn onClick={toggleFullScreen}>
        {fullScreen ? (
          <NotFullScreenSvg height={iconSize} width={iconSize}/>
        ) : (
          <FullScreenSvg height={iconSize} width={iconSize}/>
        )}
      </StyledBtn>
    </StyledControl>
  )
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying.play,
    fullScreen: state.fullScreen,
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
const StyledBtn = styled.button `
  border: ${(props) => props.play ? '2px solid #dcdcdc' : 'none'};
  padding: ${(props) => props.play ? '10px' : '0'};
  border-radius: ${(props) => props.play && '50%'};
  margin: ${(props) => props.play && '0 20px'};
  background: none;
`

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar)