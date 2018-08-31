import types from '../actions/ActionTypes'

const nowPlayingState = {
  id: '',
  title: 'Title',
  user: 'Author',
  source: '',
  thumbnail: '',
  play: false
}

export const nowPlaying = (state = nowPlayingState, action) => {
  switch(action.type){
    case types.setNowPlaying:
      return {
        id: action.song.id,
        title: action.song.title,
        user: action.song.user,
        source: action.song.source,
        thumbnail: action.song.thumbnail,
        play: true
      }
    case types.togglePlaying:
      return {
        title: state.title,
        user: state.user,
        play: !state.play,
        source: state.source,
        thumbnail: state.thumbnail,
        runTime: state.runTime
      }
    default:
      return state
  }
}
