// @flow
import * as React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import {Link} from 'react-router-dom'
import ProfilePic from './ProfilePic'
import Song from './Song'

type Props = {
  user: Object,
  songs: Object,
  dateSend: string
}

export function Post(props: Props){
  const {user, songs} = props
  const dateSend = moment(props.dateSend).fromNow()

  return (
    <StyledPost>
      <div className="post-head">
        <Link to="/">
          <ProfilePic/>
        </Link>
        <div>
          <Link to="/">
            <p className="author">{user.name}</p>
          </Link>
          <p className="date">{dateSend}</p>
        </div>
      </div>
      {songs.map((song, key) => <Song key={key} song={song} /> )}
    </StyledPost>
  )
}

const StyledPost = styled.div.attrs({
  className: 'post'
}) `
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .05);

  .post{
    &-head{
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

export default Post
