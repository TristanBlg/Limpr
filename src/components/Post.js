import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {setNowPlaying} from '../actions'
import {PlaySvg, AddSvg} from '../images/SvgSprite'
import ProfilePic from './ProfilePic'

function Post(props){
  const {user, songs, setNowPlaying} = props
  const dateSend = moment(props.dateSend).fromNow()
  const iconSize = 16

  return (
    <StyledPost>
      <div className="post__head">
        <Link to="/profile">
          <ProfilePic/>
        </Link>
        <div>
          <Link to="/profile">
            <p className="author">{user.name}</p>
          </Link>
          <p className="date">{dateSend}</p>
        </div>
      </div>
      {songs.map((song, key) => {
        return (
          <StyledSong key={key}>
            <div className="song-left">
              <button className="song__play" onClick={() => setNowPlaying(song.title, user.name)}>
                <PlaySvg height={iconSize} width={iconSize}/>
              </button>
              <button className="song__add">
                <AddSvg height={iconSize} width={iconSize}/>
              </button>
              <div className="song__title">
                {song.title}
              </div>
            </div>
            <div className="song-right">
              <div className="song__time">
                {song.duration}
              </div>
            </div>
          </StyledSong>
        )
      })}
    </StyledPost>
  )
}

const StyledPost = styled.div `
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .05);

  .post{
    &__head{
      display: flex;
      align-items: center;

      & >:not(:first-child){
        margin-left: 10px;
      }
    }
  }
  .author{
    font-size: 1.6rem;
    color: #111;
    margin: 0;
    font-weight: 400;
  }
  .date{
    font-size: 1.4rem;
    color: #828282;
    margin: 0;
    font-weight: 400;
  }
`
const StyledSong = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f2f2f2;
  border-radius: 40px;
  padding: 10px 20px;
  margin-top: 20px;

  .song{
    &-left{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-right{

    }
    &__play{
      margin-right: 10px;
    }
    &__add{
      margin-right: 20px;
    }
    &__title,
    &__time{
      font-size: 16px;
      color: #4f4f4f;
    }
  }
`

const mapDispatchToProps = (dispatch) => {
  return {
    setNowPlaying: (title, user) => {
      dispatch(setNowPlaying(title, user))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Post)
