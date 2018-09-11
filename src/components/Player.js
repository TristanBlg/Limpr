import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {updateTimeNowPlaying} from '../actions'
import ControlBar from './ControlBar'
import Timeline from './Timeline'

export function Player(props) {
  const {fullScreen, nowPlaying, updateTimeNowPlaying} = props

  return (
    <StyledPlayer fullScreen={fullScreen}>
      <p className="player-title">{nowPlaying.title}</p>
      <p className="player-subtitle">{nowPlaying.user}</p>
      <div className="player-picture" style={{backgroundImage: `url(${nowPlaying.thumbnail}`}}>
        <audio id="player" onTimeUpdate={ev => { updateTimeNowPlaying(ev.currentTarget.currentTime)}}>
          <source src={nowPlaying.source} />
        </audio>
        <Timeline/>
      </div>
      <ControlBar/>
    </StyledPlayer>
  )
}


const StyledPlayer = styled.div.attrs({
  className: 'player'
}) `
  margin: 0 auto 40px;
  width: 768px;
  max-width: 100%;
  transition: .4s ease-in-out;

  .player{
    &-title,
    &-subtitle{
      padding: 0 20px;
      transition: font-size .4s ease-in-out;
    }
    &-title{
      font-size: ${(props) => props.fullScreen ? '3.6rem' : '2.4rem'};
      font-weight: 700;
      color: #111111;
      margin: 0;
      line-height: 1.2;
    }
    &-subtitle{
      font-size: ${(props) => props.fullScreen ? '2.4rem' : '1.6rem'};
      font-weight: 400;
      color: #828282;
      margin: 0 0 5px;
      line-height: 1.2;
    }
    &-picture{
      width: 100%;
      padding-bottom: 56.25%;
      position: ${(props) => !props.fullScreen && 'relative'};
      background: #828282 no-repeat center center / cover;
    }
  }
`

const mapStateToProps = (state) => {
  return {
    fullScreen: state.fullScreen,
    nowPlaying: state.nowPlaying,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateTimeNowPlaying: (currentTime) => {
      dispatch(updateTimeNowPlaying(currentTime))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
