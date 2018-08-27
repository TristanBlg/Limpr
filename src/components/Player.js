import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import ControlBar from './ControlBar'

const Player = (props) => {
  const {fullScreen, nowPlaying} = props

  return (
    <StyledPlayer fullScreen={fullScreen}>
      <p className="player__title">{nowPlaying.title}</p>
      <p className="player__subtitle">{nowPlaying.author}</p>
      <div className="player__picture">
        <div className="player__timeline"></div>
      </div>
      <ControlBar />
    </StyledPlayer>
  )
}


const StyledPlayer = styled.div `
  margin: 0 auto 40px;
  width: 768px;
  max-width: 100%;
  transition: .4s ease-in-out;

  .player{
    &__title,
    &__subtitle{
      padding: 0 20px;
      transition: font-size .4s ease-in-out;
    }
    &__title{
      font-size: ${(props) => props.fullScreen ? '3.6rem' : '2.4rem'};
      font-weight: 700;
      color: #111111;
      margin: 0;
      line-height: 1.2;
    }
    &__subtitle{
      font-size: ${(props) => props.fullScreen ? '2.4rem' : '1.6rem'};
      font-weight: 400;
      color: #828282;
      margin: 0 0 5px;
      line-height: 1.2;
    }
    &__picture{
      width: 100%;
      padding-bottom: 56.25%;
      background: #828282;
      position: ${(props) => !props.fullScreen && 'relative'};
    }
    &__timeline{
      position: absolute;
      bottom: 0;
      left: 0;
      background: #a29bfe;
      width: 75%;
      height: ${(props) => props.fullScreen ? '12px' : '6px'};
    }
  }
`

const mapStateToProps = (state) => {
  return {
    fullScreen: state.fullScreen,
    nowPlaying: state.nowPlaying,
  }
}

export default connect(
  mapStateToProps
)(Player)
