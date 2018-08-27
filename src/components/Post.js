import * as React from 'react'
import {connect} from 'react-redux'
import {setNowPlaying} from '../actions'
import styled from 'styled-components'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {PlaySvg, AddSvg} from '../images/SvgSprite'
import ProfilePic from './ProfilePic'

const Post = (props) => {
	const {authorId, songsId, setNowPlaying} = props
	const dateSend = moment(props.dateSend).fromNow()
	const iconSize = 18

	return (
		<StyledPost>
			<div className="post__head">
				<Link to="/profile">
					<ProfilePic/>
				</Link>
				<div>
					<Link to="/profile">
						<p className="author">{authors[authorId].name}</p>
					</Link>
					<p className="date">{dateSend}</p>
				</div>
			</div>
			{/*setNowPlaying(songs[songId].title)*/}
			{songsId.map((songId, key) => {
				return (
					<StyledSong key={key}>
						<div className="song-left">
							<div className="song__play" onClick={() => setNowPlaying(songs[songId].title, songs[songId].author)}>
								<PlaySvg height={iconSize} width={iconSize}/>
							</div>
							<div className="song__add">
								<AddSvg height={iconSize} width={iconSize}/>
							</div>
							<div className="song__title">
								{songs[songId].title}
							</div>
						</div>
						<div className="song-right">
							<div className="song__time">
								{songs[songId].duration}
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
		setNowPlaying: (title, author) => {
			dispatch(setNowPlaying(title, author))
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Post)

//TO DELETE
const songs = [
	{
		id: 0,
		author: 'Denzel Curry',
		title: 'CLOUT COBAIN | CLOUT CO13A1N',
		duration: '2:35',
	},
	{
		id: 1,
		author: 'Denzel Curry',
		title: 'SWITCH IT UP | ZWITCH 1T UP',
		duration: '2:55',
	},
	{
		id: 2,
		author: 'AWOLNATION',
		title: 'Sail',
		duration: '4:23',
	},
]
const authors = [
	{
		id: 0,
		name: 'Denzel Curry',
	},
	{
		id: 1,
		name: 'AWOLNATION',
	},
]
