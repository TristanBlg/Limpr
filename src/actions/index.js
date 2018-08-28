import types from './ActionTypes'
import axios from 'axios'

const apiUrl = 'http://localhost:3000'

export const toggleFullScreen = () => ({
  type: types.toggleFullScreen,
})
export const togglePlaying = () => ({
  type: types.togglePlaying,
})
export const setNowPlaying = (title, author) => ({
  type: types.setNowPlaying,
  title,
  author,
})

export const fetchPosts = (posts) => ({
  type: types.fetchPosts,
  posts
})
export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/posts`)
    .then(response => {
      dispatch(fetchPosts(response.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}