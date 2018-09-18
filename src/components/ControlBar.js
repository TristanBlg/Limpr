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
      <section>
        <button>
          <AddSvg height={iconSize} width={iconSize}/>
        </button>
      </section>
      <section>
        <button>
          <PrevSvg height={iconSize} width={iconSize}/>
        </button>
        <button onClick={togglePlaying}>
          {nowPlaying ? (
            <PauseSvg height={iconSize} width={iconSize}/>
          ) : (
            <PlaySvg height={iconSize} width={iconSize}/>
          )}
        </button>
        <button>
          <NextSvg height={iconSize} width={iconSize}/>
        </button>
      </section>
      <section>
        <button onClick={toggleFullScreen}>
          {fullScreen ? (
            <NotFullScreenSvg height={iconSize} width={iconSize}/>
          ) : (
            <FullScreenSvg height={iconSize} width={iconSize}/>
          )}
        </button>
      </section>
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

const StyledControl = styled.div.attrs({
  className: 'control'
}) `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;

  > section {
    display: flex;
    align-items: center;
  }
  button{
    &:not(:first-child){
      margin-left: 20px;
    }
  }
`

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar)
