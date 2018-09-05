import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

export function Timeline(props){
  const {fullScreen, nowPlaying} = props
  const size = nowPlaying.currentTime > 0 ? (100 * nowPlaying.currentTime  / nowPlaying.duration) : 0

  return (
    <StyledTimeline fullScreen={fullScreen}>
      <div style={{width: `${size}%`}}></div>
    </StyledTimeline>
  )
}

const StyledTimeline = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${(props) => !props.fullScreen && 'rgba(0, 0, 0, .6)'};
  width: 100%;

  div{
    background: #a29bfe;
    height: ${(props) => props.fullScreen ? '12px' : '6px'};
    width: 0%;
  }
`

const mapStateToProps = (state) => {
  return {
    fullScreen: state.fullScreen,
    nowPlaying: state.nowPlaying
  }
}

export default connect(
  mapStateToProps
)(Timeline)
