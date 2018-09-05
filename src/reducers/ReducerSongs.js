import types from '../actions/ActionTypes'

const nowPlayingState = {
  id: '',
  title: 'Title',
  user: 'Author',
  source: '',
  thumbnail: '',
  currentTime: 0,
  duration: 0,
  play: false
}

export const nowPlaying = (state = nowPlayingState, action) => {
  switch(action.type){
    case types.setNowPlaying:
      return {
        id: action.song.id,
        title: action.song.title,
        user: action.song.user,
        play: true,
        source: action.song.source,
        thumbnail: action.song.thumbnail,
        currentTime: action.song.currentTime,
        duration: action.song.duration
      }
    case types.togglePlaying:
      return {
        id: state.id,
        title: state.title,
        user: state.user,
        play: !state.play,
        source: state.source,
        thumbnail: state.thumbnail,
        currentTime: state.currentTime,
        duration: state.duration
      }
    case types.updateTimeNowPlaying:
      return {
        id: state.id,
        title: state.title,
        user: state.user,
        play: state.play,
        source: state.source,
        thumbnail: state.thumbnail,
        currentTime: action.currentTime,
        duration: state.duration
      }
    default:
      return state
  }
}
