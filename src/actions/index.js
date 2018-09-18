import types from './ActionTypes'
import axios from 'axios'

const apiUrl = 'http://localhost:3000'

export const toggleFullScreen = () => ({
  type: types.TOGGLE_FULL_SCREEN,
})

export const togglePlaying = () => ({
  type: types.TOGGLE_PLAYING,
})

export const setNowPlayingToAction = song => ({
  type: types.SET_NOW_PLAYING,
  song
})
export const setNowPlaying = (id, audio = '#player') => {
  return dispatch => {
    return axios.get(`${apiUrl}/songs/${id}`)
    .then(response => {
      dispatch(setNowPlayingToAction(response.data))
    })
    .catch(error => {
      console.error(error)
    })
  }
}

export const setCurrentTime = currentTime => ({
  type: types.SET_CURRENT_TIME,
  currentTime
})

export const fetchPostsToAction = posts => ({
  type: types.FETCH_POSTS,
  posts
})
export const fetchPosts = () => {
  return dispatch => {
    return axios.get(`${apiUrl}/posts`)
    .then(response => {
      dispatch(fetchPostsToAction(response.data))
    })
    .catch(error => {
      console.error(error)
    })
  }
}

export const fetchLogUserToAction = user => ({
  type: types.FETCH_USER,
  user
})
export const fetchLogUser = () => {
  return dispatch => {
    return axios.get(`${apiUrl}/user`)
    .then(response => {
      dispatch(fetchLogUserToAction(response.data))
    })
    .catch(error => {
      console.error(error)
    })
  }
}
