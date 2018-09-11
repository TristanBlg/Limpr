import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import {setNowPlaying} from '../actions'
import {PlaySvg, AddSvg} from '../images/SvgSprite'

export function Song(props){
  const {song, setNowPlaying} = props
  const iconSize = 16
  const duration = moment.duration(song.duration, 'seconds').format("h:m:ss");

  return (
    <StyledSong>
      <section>
        <button className="song-play" onClick={() => setNowPlaying(song.id)}>
          <PlaySvg height={iconSize} width={iconSize}/>
        </button>
        <button className="song-add">
          <AddSvg height={iconSize} width={iconSize}/>
        </button>
        <div className="song-title">
          {song.title}
        </div>
      </section>
      <section>
        <div className="song-time">
          {duration}
        </div>
      </section>
    </StyledSong>
  )
}

const StyledSong = styled.div.attrs({
  className: 'song'
}) `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f2f2f2;
  border-radius: 40px;
  padding: 10px 20px;
  margin-top: 20px;

  .song{
    &-play{
      margin-right: 10px;
    }
    &-add{
      margin-right: 20px;
    }
    &-title,
    &-time{
      font-size: 16px;
      color: #4f4f4f;
    }
  }
  > * {
    display: flex;
    align-items: center;
  }
`

const mapDispatchToProps = (dispatch) => {
  return {
    setNowPlaying: (id) => {
      dispatch(setNowPlaying(id))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Song)
