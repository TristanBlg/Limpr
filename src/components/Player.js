import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import ControlBar from './ControlBar'

class Player extends React.Component{
  constructor(){
    super();

    this.handleTime = this.handleTime.bind(this)
    this.audio = false
    this.audioDuration = false
  }

  componentDidMount(){
    this.audio = document.querySelector('#player')
  }

  componentDidUpdate(){
    if(this.props.nowPlaying.play){
      this.audio.load()
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  handleTime(){
    const timeline = document.querySelector('#timeline')
    const size = this.audio.currentTime > 0 ? (100 * this.audio.currentTime  / 240) : 0
    timeline.style.width = `${size}%`
  }

  render(){
    const {fullScreen, nowPlaying} = this.props

    return (
      <StyledPlayer fullScreen={fullScreen}>
        <p className="player-title">{nowPlaying.title}</p>
        <p className="player-subtitle">{nowPlaying.user}</p>
        <div className="player-picture" style={{backgroundImage: `url(${nowPlaying.thumbnail}`}}>
          <audio id="player" onTimeUpdate={this.handleTime}>
            <source src={nowPlaying.source} />
          </audio>
          <div id="timeline" className="player-timeline"></div>
        </div>
        <ControlBar />
      </StyledPlayer>
    )
  }
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
    &-timeline{
      position: absolute;
      bottom: 0;
      left: 0;
      background: #a29bfe;
      width: 0%;
      transition: width 0.2s;
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
